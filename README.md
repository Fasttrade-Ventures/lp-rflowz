# RflowZ Landing Page

Marketing website for [RflowZ](https://rflowz.com) — an AI-powered research proposal writing platform with Mendeley integration, customizable templates, and DOCX, PDF, and PPTX export.

## Stack

- [Next.js](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Headless UI](https://headlessui.dev)

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## SEO / GEO / AIO

- Metadata, Open Graph, and Twitter cards in `src/app/layout.tsx`
- `src/app/robots.ts` and `src/app/sitemap.ts`
- JSON-LD structured data in `src/components/StructuredData.tsx`
- AI crawler summary at `public/llms.txt`
- Site configuration in `src/lib/site.ts`

## Production

```bash
npm run build
npm start
```

## App

Sign up and product access: [https://app.rflowz.com](https://app.rflowz.com)
