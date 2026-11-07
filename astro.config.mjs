import { defineConfig } from 'astro/config';

// Destino padrão: GitHub Pages -> https://eduardohayashi.github.io/naturalmentedoce
// Em desenvolvimento (npm run dev) o site abre na raiz: http://localhost:4321
// Para publicar noutro sítio (ex.: domínio próprio na raiz), defina as variáveis
// de ambiente SITE_URL e BASE_PATH ao fazer o build, por exemplo:
//   SITE_URL=https://meudominio.pt BASE_PATH=/ npm run build
const emDesenvolvimento = process.argv.includes('dev');

export default defineConfig({
  site: process.env.SITE_URL ?? 'https://eduardohayashi.github.io',
  base: process.env.BASE_PATH ?? (emDesenvolvimento ? '/' : '/naturalmentedoce'),
});
