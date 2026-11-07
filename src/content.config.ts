import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Os campos espelham as colunas da planilha de revisão,
// para o agente (n8n) conseguir gerar um ficheiro .md por receita aprovada.
const receitas = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/receitas' }),
  schema: z.object({
    titulo: z.string(),
    resumo: z.string(),
    data: z.coerce.date(),
    tempoMinutos: z.number().int().positive(),
    porcoes: z.number().int().positive(),
    ingredientes: z.array(z.string()).min(1),
    modoPreparo: z.array(z.string()).min(1),
    alergenicos: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    imagem: z.string().optional(), // ex.: /imagens/bowl-de-grao.jpg
    imagemAlt: z.string().optional(),
    revisadoPor: z.string().optional(), // preencher quando a especialista aprovar
    rascunho: z.boolean().default(false),
  }),
});

export const collections = { receitas };
