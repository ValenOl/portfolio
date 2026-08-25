# Portfolio — Valentín Olivero

Sitio personal de una sola página con detalle por proyecto (`/proyectos/[slug]`), construido con [Astro](https://astro.build) + Tailwind CSS v4. Estética "terminal/sistema" oscura, con un personaje wireframe (Three.js) que camina por un recorrido de nodos representando cada proyecto, animado con GSAP + ScrollTrigger.

## Stack

- **Astro 7** — static output, sin adapter/SSR
- **Tailwind CSS v4** (vía plugin de Vite, sin config file)
- **Three.js** — el "Walker" wireframe (`src/components/Walker.astro`)
- **GSAP + ScrollTrigger** — reveals y animación del recorrido al hacer scroll
- **@astrojs/sitemap** — genera `sitemap-index.xml` en build
- **@vercel/analytics** — analytics del sitio en producción

## Estructura

```
src/
├── components/       # Nav, Hero, About, Projects, Walker, Footer
├── data/
│   └── projects.ts   # fuente única de verdad para los proyectos mostrados
├── layouts/
│   └── Layout.astro  # head, meta tags, fonts, Analytics
├── pages/
│   ├── index.astro
│   ├── robots.txt.ts # generado dinámicamente a partir de `site`
│   └── proyectos/
│       └── [slug].astro
└── styles/
    └── global.css    # paleta de colores y tokens de Tailwind
```

Para agregar o editar un proyecto, alcanza con tocar `src/data/projects.ts`: tanto el recorrido del Walker como la grilla de `Projects.astro` y las páginas de detalle se generan desde ahí.

## Desarrollo

```sh
npm install
npm run dev       # localhost:4321
npm run build     # build de producción a ./dist
npm run preview   # sirve el build de producción localmente
```

Si necesitás regenerar la imagen de `og:image` (cambió el nombre, tagline o paleta), corré:

```sh
node scripts/generate-og-image.mjs
```

## Deploy

Deployado en Vercel (static output). El dominio de producción todavía está pendiente (`is-a.dev` en trámite) — mientras tanto, `astro.config.mjs` usa un placeholder en `site` que hay que actualizar apenas el dominio esté activo.
