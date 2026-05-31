import { NextRequest, NextResponse } from "next/server";
import { generateSportsImage, buildPromptFromType } from "@/lib/imageGen";
import { supabaseAdmin, isSupabaseConfigured } from "@/lib/supabase";

export const maxDuration = 60;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { prompt, style, format, outputType } = body;

    if (!prompt || prompt.trim().length < 3) {
      return NextResponse.json(
        { error: "Please enter a prompt of at least 3 characters." },
        { status: 400 }
      );
    }

    const hfKey = process.env.HUGGINGFACE_API_KEY;
    if (!hfKey || hfKey === "hf_your_token_here") {
      return NextResponse.json({
        success: true,
        demo: true,
        message: "Demo mode — add HUGGINGFACE_API_KEY to enable real generation",
        imageUrl: `https://picsum.photos/seed/${Date.now()}/832/1040`,
        prompt, style, format, outputType,
      });
    }

    const enhancedPrompt = buildPromptFromType(outputType, prompt);

    // Generate via Hugging Face
    const imageBuffer = await generateSportsImage({ prompt: enhancedPrompt, style, format, outputType });

    let imageUrl = "";
    const fileName = `studio/${Date.now()}-${Math.random().toString(36).slice(2)}.png`;

    if (isSupabaseConfigured()) {
      const admin = supabaseAdmin();

      // Ensure bucket exists
      const { data: buckets } = await admin.storage.listBuckets();
      const bucketExists = buckets?.some((b) => b.name === "generated-images");
      if (!bucketExists) {
        await admin.storage.createBucket("generated-images", { public: true });
      }

      const { error: uploadError } = await admin.storage
        .from("generated-images")
        .upload(fileName, imageBuffer, {
          contentType: "image/png",
          cacheControl: "3600",
        });

      if (!uploadError) {
        const { data } = admin.storage.from("generated-images").getPublicUrl(fileName);
        imageUrl = data.publicUrl;

        await admin.from("generated_images").insert({
          prompt,
          enhanced_prompt: enhancedPrompt,
          style,
          format,
          output_type: outputType,
          image_url: imageUrl,
          file_name: fileName,
          created_at: new Date().toISOString(),
        });
      } else {
        // Fallback to base64 if upload fails
        imageUrl = `data:image/png;base64,${imageBuffer.toString("base64")}`;
      }
    } else {
      imageUrl = `data:image/png;base64,${imageBuffer.toString("base64")}`;
    }

    return NextResponse.json({ success: true, imageUrl, prompt, enhancedPrompt, style, format, outputType });

  } catch (error: unknown) {
    console.error("Generation error:", error);
    const message = error instanceof Error ? error.message : "Generation failed";

    if (message.includes("loading") || message.includes("currently loading")) {
      return NextResponse.json(
        { error: "Model is warming up, please try again in 20 seconds.", loading: true },
        { status: 503 }
      );
    }

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
