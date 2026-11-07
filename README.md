# Naturalmente Doce

Site de receitas saudáveis feito com [Astro](https://astro.build). Cada receita é um ficheiro Markdown em `src/content/receitas/`.

## Como correr

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # gera a pasta dist/
npm run preview  # pré-visualiza o build
```

## Estrutura

```
naturalmentedoce/
├── astro.config.mjs          # trocar `site` pelo domínio real
├── package.json
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── imagens/              # imagens das receitas (ex.: /imagens/salada.jpg)
└── src/
    ├── content.config.ts     # esquema dos campos de cada receita
    ├── content/receitas/     # uma receita = um ficheiro .md
    ├── components/           # Header, Footer, RecipeCard
    ├── layouts/Base.astro    # estrutura comum das páginas (SEO incluído)
    ├── pages/
    │   ├── index.astro       # página inicial
    │   ├── sobre.astro
    │   └── receitas/
    │       ├── index.astro   # lista de todas as receitas
    │       └── [slug].astro  # página de uma receita (com dados estruturados)
    └── styles/global.css     # cores, tipografia e layout
```

## Formato de uma receita

Os campos do cabeçalho (frontmatter) seguem as colunas da planilha de revisão:
`titulo`, `resumo`, `data`, `tempoMinutos`, `porcoes`, `ingredientes`,
`modoPreparo`, `alergenicos`, `tags`, `imagem`, `imagemAlt`, `revisadoPor`
e `rascunho`. Veja os exemplos em `src/content/receitas/`.

O nome do ficheiro vira o endereço da receita (`salada-grao.md` → `/receitas/salada-grao`).

## Para publicar automaticamente (n8n)

1. O agente cria um `.md` novo em `src/content/receitas/` (e a imagem em `public/imagens/`) só quando a receita tiver status "Aprovada".
2. Faz commit no repositório.
3. O serviço de hospedagem (Cloudflare Pages, Netlify ou GitHub Pages) refaz o build sozinho.

## Pendências

- [ ] Guardar o logótipo em `public/logo.jpg` (usado na página inicial e como imagem de partilha)
- [ ] Substituir os dois exemplos por receitas reais (ou marcar `rascunho: true`)
- [ ] Preencher a especialista na página `sobre.astro`
- [ ] Definir o domínio em `astro.config.mjs`
- [ ] Adicionar sitemap (`@astrojs/sitemap`) quando houver domínio
