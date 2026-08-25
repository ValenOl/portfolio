// Genera public/og-image.png a partir de un SVG con la estética del sitio.
// Correr manualmente con `node scripts/generate-og-image.mjs` si cambia
// el nombre, tagline o paleta de colores.
import sharp from 'sharp'
import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

const WIDTH = 1200
const HEIGHT = 630

const svg = `
<svg width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="grid" width="28" height="28" patternUnits="userSpaceOnUse">
      <path d="M 28 0 L 0 0 0 28" fill="none" stroke="#131a24" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="#0a0e14"/>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#grid)"/>

  <text x="90" y="255" font-family="JetBrains Mono, monospace" font-size="20" letter-spacing="3" fill="#5ad1ff">
    SOFTWARE ENGINEER // APPLIED AI
  </text>

  <text x="88" y="345" font-family="Space Grotesk, sans-serif" font-size="76" font-weight="700" fill="#f2f6fa">
    Valentín Olivero
  </text>

  <text x="90" y="400" font-family="Space Grotesk, sans-serif" font-size="30" fill="#8fa0b3">
    Llevando productos de IA a producción: RAG, evals y seguridad de agentes.
  </text>

  <circle cx="1080" cy="90" r="5" fill="#5ad1ff"/>
  <line x1="1080" y1="95" x2="1080" y2="540" stroke="#1c2632" stroke-width="2"/>
  <circle cx="1080" cy="540" r="5" fill="#1c2632"/>
</svg>
`

const outPath = fileURLToPath(new URL('../public/og-image.png', import.meta.url))

const png = await sharp(Buffer.from(svg)).png().toBuffer()
writeFileSync(outPath, png)
console.log(`OG image generada en ${outPath}`)
