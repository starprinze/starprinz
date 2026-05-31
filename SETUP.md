# STARPRINZ — Free Setup Guide

Everything runs on **100% free tiers**. No credit card needed to start.

---

## 1. Hugging Face (Free AI Image Generation)

1. Go to https://huggingface.co/join — sign up free
2. Go to https://huggingface.co/settings/tokens
3. Click "New token" → name it `starprinz` → Role: **Read**
4. Copy the token (starts with `hf_`)

**Free tier:** 30,000 characters/month inference, enough for hundreds of images.

---

## 2. Supabase (Free Database + Storage)

1. Go to https://supabase.com → "Start your project" (free)
2. Create new project → name: `starprinz` → pick a region
3. Wait ~1 min for project to spin up
4. Go to **SQL Editor** → paste the contents of `supabase-schema.sql` → Run
5. Go to **Storage** → create a new bucket called `generated-images` → make it **Public**
6. Go to **Settings → API** and copy:
   - **Project URL** → `https://xxxx.supabase.co`
   - **anon public** key → long JWT
   - **service_role** key → longer JWT (keep this secret!)

**Free tier:** 500MB database, 1GB storage, 2GB bandwidth/month.

---

## 3. Configure Environment Variables

Create a `.env.local` file in your project root:

```env
HUGGINGFACE_API_KEY=hf_your_token_here

NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

NEXT_PUBLIC_APP_URL=https://your-vercel-url.vercel.app
```

---

## 4. Add to Vercel Environment Variables

1. Go to your Vercel project dashboard
2. Settings → Environment Variables
3. Add each variable from `.env.local`
4. Redeploy

---

## 5. Run Locally

```bash
npm install
npm run dev
```

Open http://localhost:3000/studio — type a prompt, click Generate!

---

## How Image Generation Works (Free)

```
User types prompt
      ↓
Next.js API Route (/api/generate-image)
      ↓
Hugging Face Inference API (FREE)
Stable Diffusion XL model
      ↓
Returns PNG image buffer
      ↓
Upload to Supabase Storage (FREE)
      ↓
Save URL to Supabase DB (FREE)
      ↓
Return URL to frontend
      ↓
Display in Studio preview + Gallery
```

First generation may take 20-30s (model cold start).
Subsequent generations are faster (~10-15s).

---

## Models Used (All Free)

| Feature | Model | Provider |
|---|---|---|
| Image Generation | stabilityai/stable-diffusion-xl-base-1.0 | Hugging Face |
| Database | PostgreSQL | Supabase |
| Storage | S3-compatible | Supabase |
| Hosting | Edge Network | Vercel |
