import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

export async function GET() {
  try {
    if (
      !process.env.NEXT_PUBLIC_SUPABASE_URL ||
      process.env.NEXT_PUBLIC_SUPABASE_URL === "https://your-project.supabase.co"
    ) {
      // Return demo gallery when Supabase not configured
      return NextResponse.json({
        images: [
          { id: 1, image_url: "https://picsum.photos/seed/sport1/400/500", prompt: "Match day poster", output_type: "Sports Poster", style: "Cinematic Dark", created_at: new Date().toISOString() },
          { id: 2, image_url: "https://picsum.photos/seed/sport2/400/500", prompt: "Player card design", output_type: "Player Card", style: "Bold & Vibrant", created_at: new Date().toISOString() },
          { id: 3, image_url: "https://picsum.photos/seed/sport3/400/500", prompt: "Tournament banner", output_type: "Tournament Banner", style: "Retro Futuristic", created_at: new Date().toISOString() },
          { id: 4, image_url: "https://picsum.photos/seed/sport4/400/500", prompt: "Event flyer", output_type: "Event Flyer", style: "Minimal Clean", created_at: new Date().toISOString() },
          { id: 5, image_url: "https://picsum.photos/seed/sport5/400/500", prompt: "Team brand kit", output_type: "Team Brand Kit", style: "Cinematic Dark", created_at: new Date().toISOString() },
          { id: 6, image_url: "https://picsum.photos/seed/sport6/400/500", prompt: "Match graphic", output_type: "Match Graphic", style: "Bold & Vibrant", created_at: new Date().toISOString() },
        ],
        demo: true,
      });
    }

    const admin = supabaseAdmin();
    const { data, error } = await admin
      .from("generated_images")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(20);

    if (error) throw error;

    return NextResponse.json({ images: data || [] });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to fetch gallery";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
