# Naturalmente Doce

Site de receitas saudáveis feito com [Astro](https://astro.build). Cada receita é um ficheiro Markdown em `src/content/receitas/`.

## Como correr

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # gera a pasta dist/
npm run preview  # pré-visualiza o build
```

## Endereços (GitHub Pages e localhost)

O site funciona em dois endereços, sem mudar nada nos ficheiros:

- **Desenvolvimento:** `npm run dev` abre em http://localhost:4321 (base `/`).
- **GitHub Pages:** https://eduardohayashi.github.io/naturalmentedoce (base `/naturalmentedoce`). O `npm run build` e o `npm run preview` já usam esse base (o preview abre em http://localhost:4321/naturalmentedoce/).

Todos os links e imagens passam pela função `url()` de `src/utils/url.ts`, que acrescenta o base automaticamente. Nas receitas, o campo `imagem` continua a ser escrito como `/imagens/ficheiro.jpg`, sem o base.

Para publicar noutro sítio (por exemplo, um domínio próprio na raiz): `SITE_URL=https://meudominio.pt BASE_PATH=/ npm run build`.

### Publicação no GitHub Pages

O ficheiro `.github/workflows/deploy.yml` faz o build e publica a cada push na `main`. Uma única vez, no repositório do GitHub, vá a **Settings → Pages → Build and deployment** e escolha **Source: GitHub Actions**.

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

A imagem de uma receita é o campo `imagem`, se existir; senão, o site procura `public/imagens/<nome-do-ficheiro>.jpg` (por exemplo, `salada-grao.md` → `public/imagens/salada-grao.jpg`), que é onde o n8n a grava.

## Para publicar automaticamente (n8n)

1. O agente cria um `.md` novo em `src/content/receitas/` (e a imagem em `public/imagens/`) só quando a receita tiver status "Aprovada".
2. Faz commit no repositório.
3. O serviço de hospedagem (Cloudflare Pages, Netlify ou GitHub Pages) refaz o build sozinho.

## Pendências

- [ ] Guardar o logótipo em `public/logo.jpg` (usado na página inicial e como imagem de partilha)
- [ ] Substituir os dois exemplos por receitas reais (ou marcar `rascunho: true`)
- [ ] Preencher a especialista na página `sobre.astro`
- [ ] Definir o domínio próprio, se vier a ter um (ver "Endereços")
- [ ] Adicionar sitemap (`@astrojs/sitemap`) quando houver domínio
