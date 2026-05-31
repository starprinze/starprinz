# STARPRINZ — AI-Powered Digital Ecosystem

> "Powering the next generation of digital experiences."

A futuristic, cinematic, full-stack Next.js ecosystem featuring three independent products under one unified brand infrastructure.

---

## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:3000

---

## Project Structure

```
starprinz/
├── app/
│   ├── layout.tsx              # Root layout + metadata
│   ├── page.tsx                # Homepage (/)
│   ├── globals.css             # Design tokens + global styles
│   ├── components/ui/
│   │   ├── Navbar.tsx          # Sticky nav with scroll blur
│   │   ├── Hero.tsx            # Cinematic hero + dashboard preview
│   │   ├── Products.tsx        # 3-product card showcase
│   │   ├── Ecosystem.tsx       # Vision + architecture diagram
│   │   └── LiveAndStack.tsx    # Live widgets + stack + footer
│   ├── sportified/page.tsx     # Tournament OS dashboard
│   ├── studio/page.tsx         # AI graphic generator
│   └── cbt/page.tsx            # Exam platform + live exam view
```

---

## Routes

| Route        | Page                   |
|--------------|------------------------|
| /            | Ecosystem homepage     |
| /sportified  | Tournament OS          |
| /studio      | AI Creative Suite      |
| /cbt         | CBT Exam Platform      |

---

## Design Tokens (globals.css)

--bg #060608 | --accent #7b6ef6 | --teal #2dd4bf
--gold #e8b94f | --coral #f97168 | --font-display Syne

---

## Tech Stack

Next.js 15 · TypeScript · TailwindCSS · Framer Motion · Lucide React

Backend recommendations: Supabase · Cloudinary · OpenAI · Vercel

---

## Deploy

```bash
npx vercel
```

Or connect to github.com and deploy via vercel.com for CI/CD.

(c) 2025 Starprinz. All rights reserved.
