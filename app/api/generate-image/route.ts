import { NextRequest, NextResponse } from "next/server";
import { generateSportsImage, buildPromptFromType } from "@/lib/imageGen";
import { supabaseAdmin } from "@/lib/supabase";

export const maxDuration = 60; // Allow 60s for image generation

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { prompt, style, format, outputType } = body;

    if (!prompt || prompt.trim().length < 3) {
      return NextResponse.json(
        { error: "Please provide a prompt of at least 3 characters." },
        { status: 400 }
      );
    }

    // Check HF key is configured
    if (!process.env.HUGGINGFACE_API_KEY || process.env.HUGGINGFACE_API_KEY === "hf_your_token_here") {
      // Return a demo response when not configured
      return NextResponse.json({
        success: true,
        demo: true,
        message: "Add HUGGINGFACE_API_KEY to enable real generation",
        imageUrl: `https://picsum.photos/seed/${Date.now()}/832/1040`,
        prompt,
        style,
        format,
        outputType,
      });
    }

    // Build enhanced prompt
    const enhancedPrompt = buildPromptFromType(outputType, prompt);

    // Generate image via Hugging Face
    const imageBuffer = await generateSportsImage({
      prompt: enhancedPrompt,
      style,
      format,
      outputType,
    });

    // Upload to Supabase Storage (if configured)
    let imageUrl = "";
    const fileName = `studio/${Date.now()}-${Math.random().toString(36).slice(2)}.png`;

    if (
      process.env.NEXT_PUBLIC_SUPABASE_URL &&
      process.env.NEXT_PUBLIC_SUPABASE_URL !== "https://your-project.supabase.co"
    ) {
      const admin = supabaseAdmin();

      const { error: uploadError } = await admin.storage
        .from("generated-images")
        .upload(fileName, imageBuffer, {
          contentType: "image/png",
          cacheControl: "3600",
        });

      if (!uploadError) {
        const { data } = admin.storage
          .from("generated-images")
          .getPublicUrl(fileName);
        imageUrl = data.publicUrl;

        // Save metadata to DB
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
      }
    } else {
      // Return as base64 if no Supabase configured
      imageUrl = `data:image/png;base64,${imageBuffer.toString("base64")}`;
    }

    return NextResponse.json({
      success: true,
      imageUrl,
      prompt,
      enhancedPrompt,
      style,
      format,
      outputType,
    });
  } catch (error: unknown) {
    console.error("Image generation error:", error);
    const message = error instanceof Error ? error.message : "Generation failed";

    // Handle model loading (cold start)
    if (message.includes("loading")) {
      return NextResponse.json(
        { error: "Model is warming up, please try again in 20 seconds.", loading: true },
        { status: 503 }
      );
    }

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
