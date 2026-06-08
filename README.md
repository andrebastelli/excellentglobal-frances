# Excellent Global — Landing Page (Curso de Inglês em Limeira)

Landing page de alta conversão em **Vite + React + TypeScript + Tailwind CSS**, pronta para deploy no Vercel via GitHub.

## Stack

- Vite 5 + React 18 + TypeScript
- Tailwind CSS 3 (config via `tailwind.config.ts`)
- `lucide-react` para ícones
- Sem backend, sem servidor customizado

## Como rodar localmente

```bash
npm install
npm run dev       # desenvolvimento
npm run build     # build de produção em /dist
npm run preview   # preview do build
```

## Variáveis de ambiente

Copie `.env.example` para `.env` e ajuste:

```
VITE_WHATSAPP_NUMBER=5519999999999   # WhatsApp da escola (formato internacional)
VITE_GA4_ID=G-XXXXXXXX
VITE_META_PIXEL_ID=XXXXXXXXX
VITE_GTM_ID=GTM-XXXXXX
```

> Sem `.env`, o número de WhatsApp usa o fallback definido em `src/components/LandingPage.tsx`.

## Deploy no Vercel

1. Faça push do projeto para um repositório GitHub.
2. Importe no Vercel — as configurações padrão funcionam:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
3. Adicione as variáveis `VITE_*` no painel do Vercel.

O arquivo `vercel.json` já configura headers de segurança e cache.

## Editando conteúdo

- Copy das seções: `src/components/LandingPage.tsx`
- Cores / tokens de design: `src/index.css` e `tailwind.config.ts`
- Meta tags (SEO, OG, JSON-LD): `index.html`
- Depoimentos e fotos do espaço: marcados com `TODO` no componente

## Estrutura

```
.
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.ts
├── postcss.config.js
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vercel.json
├── .env.example
├── .gitignore
├── public/
│   └── vite.svg
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── index.css
    ├── vite-env.d.ts
    ├── assets/             # imagens
    └── components/
        └── LandingPage.tsx
```
