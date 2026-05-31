// Free AI image generation via Hugging Face Inference API
// Model: stabilityai/stable-diffusion-xl-base-1.0 (free)

const HF_API_URL =
  "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0";

const STYLE_PROMPTS: Record<string, string> = {
  "Cinematic Dark":
    "cinematic dark dramatic lighting, deep shadows, professional sports photography, dark background, neon accents, ultra detailed, 8k",
  "Bold & Vibrant":
    "bold vibrant colors, high contrast, dynamic composition, energetic, vivid neon colors, professional graphic design",
  "Minimal Clean":
    "minimal clean design, white space, modern typography, sleek professional, subtle gradients, contemporary",
  "Retro Futuristic":
    "retro futuristic aesthetic, synthwave colors, glowing neon, chrome metallic, 80s inspired modern fusion",
};

const FORMAT_SIZES: Record<string, { width: number; height: number }> = {
  "Portrait 4:5": { width: 832, height: 1040 },
  "Square 1:1": { width: 1024, height: 1024 },
  "Landscape 16:9": { width: 1024, height: 576 },
  "Story 9:16": { width: 576, height: 1024 },
};

export async function generateSportsImage(params: {
  prompt: string;
  style: string;
  format: string;
  outputType: string;
}): Promise<Buffer> {
  const { prompt, style, format, outputType } = params;

  const styleEnhancement = STYLE_PROMPTS[style] || STYLE_PROMPTS["Cinematic Dark"];
  const sizes = FORMAT_SIZES[format] || FORMAT_SIZES["Portrait 4:5"];

  // Build an enhanced prompt for sports/creative context
  const enhancedPrompt = `${prompt}, ${styleEnhancement}, ${outputType.toLowerCase()}, professional sports graphic design, high quality poster art, no text watermarks`;

  const negativePrompt =
    "blurry, low quality, distorted, ugly, bad anatomy, watermark, signature, text overlay, amateur, pixelated";

  const response = await fetch(HF_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
      "Content-Type": "application/json",
      "x-wait-for-model": "true",
    },
    body: JSON.stringify({
      inputs: enhancedPrompt,
      parameters: {
        negative_prompt: negativePrompt,
        width: sizes.width,
        height: sizes.height,
        num_inference_steps: 30,
        guidance_scale: 7.5,
        num_images_per_prompt: 1,
      },
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Hugging Face API error: ${response.status} — ${error}`);
  }

  const arrayBuffer = await response.arrayBuffer();
  return Buffer.from(arrayBuffer);
}

export function buildPromptFromType(outputType: string, customPrompt: string): string {
  const typePrompts: Record<string, string> = {
    "Sports Poster": `dramatic sports event poster: ${customPrompt}`,
    "Match Graphic": `sports match announcement graphic: ${customPrompt}`,
    "Event Flyer": `sports event promotional flyer: ${customPrompt}`,
    "Player Card": `professional athlete player card graphic: ${customPrompt}`,
    "Team Brand Kit": `sports team branding graphic: ${customPrompt}`,
    "Tournament Banner": `sports tournament banner graphic: ${customPrompt}`,
  };
  return typePrompts[outputType] || customPrompt;
}
