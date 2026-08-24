export type Project = {
  slug: string
  name: string
  tagline: string
  description: string
  tech: string[]
  year: string
  status: 'Producción' | 'Portfolio' | 'Cliente'
  links: { live?: string; repo?: string }
  /** 1-3 palabras, lo que "dice" el caminante wireframe al pasar por este nodo. */
  caption: string
}

export const projects: Project[] = [
  {
    slug: 'vexter',
    caption: 'facturar en 30s',
    name: 'Vexter',
    tagline: 'Facturación electrónica con IA para monotributistas',
    description:
      'SaaS en producción que integra directo con ARCA para emitir comprobantes desde una descripción en lenguaje natural. Reduce el proceso de facturar de 15 minutos a 30 segundos: autocompletado de CUIT contra el padrón oficial, reintentos automáticos si ARCA se cae, facturación por lotes. Con usuarios reales y planes pagos.',
    tech: ['Next.js', 'Vercel AI SDK', 'OpenAI', 'BullMQ', 'Prisma', 'Clerk'],
    year: '2026',
    status: 'Producción',
    links: { live: 'https://vexter.com.ar' },
  },
  {
    slug: 'vexter-portfolio',
    caption: 'rag + guardrails',
    name: 'Vexter Portfolio',
    tagline: 'Asistente fiscal con RAG, evals y guardrails de seguridad',
    description:
      'Aplica el mismo patrón de Vexter (tool calling + human-in-the-loop) a un dominio no sensible: preguntas fiscales para monotributistas. Grounding verificado contra prompt injection con un segundo guardrail de IA, retrieval determinístico sobre pgvector, y una batería de evals real corriendo en CI en cada push a producción.',
    tech: ['Next.js', 'Gemini / Vertex AI', 'Neon + pgvector', 'Promptfoo', 'GitHub Actions'],
    year: '2026',
    status: 'Portfolio',
    links: { live: 'https://vexter-portfolio.vercel.app', repo: 'https://github.com/ValenOl/vexter-portfolio' },
  },
  {
    slug: 'forma',
    caption: 'tour en 360°',
    name: 'Forma',
    tagline: 'Tour virtual 360° + landing para un estudio de arquitectura',
    description:
      'Prototipo para un cliente real de un desarrollo inmobiliario: recorrido interactivo por escenas panorámicas con hotspots calibrados a mano, planos de piso navegables con habitaciones clickeables, y una landing de marketing con transiciones fluidas entre pantallas.',
    tech: ['Next.js 16', 'App Router', 'pnpm workspaces'],
    year: '2026',
    status: 'Cliente',
    links: { live: 'https://forma-landing-theta.vercel.app/' },
  },
  {
    slug: 'appto',
    caption: 'score al instante',
    name: 'ΛPPTO',
    tagline: 'Motor de riesgo crediticio B2B',
    description:
      'Consultá el historial crediticio de un cliente en segundos, cruzando datos de AFIP y BCRA en un score y dictamen formal. Pensado para inmobiliarias, financieras y equipos comerciales que necesitan decidir rápido sobre garantías y avales.',
    tech: ['Next.js', 'Supabase', 'Upstash', 'Resend'],
    year: '2026',
    status: 'Producción',
    links: { live: 'https://appto-topaz.vercel.app' },
  },
  {
    slug: 'agendata',
    caption: 'todo en un crm',
    name: 'AgenData',
    tagline: 'CRM para vendedores y agentes comerciales',
    description:
      'Centraliza leads, agenda comercial, liquidación de comisiones y gestión de créditos y avales en un sistema modular, para equipos de venta que hoy reparten esa operación entre varias herramientas sueltas.',
    tech: ['Next.js'],
    year: '2026',
    status: 'Producción',
    links: { live: 'https://www.agendata.net' },
  },
]
