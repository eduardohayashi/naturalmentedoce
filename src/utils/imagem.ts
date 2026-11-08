import fs from 'node:fs';
import path from 'node:path';
import type { CollectionEntry } from 'astro:content';

/**
 * Caminho (sem o base) da imagem de uma receita, ou undefined se não houver.
 *
 * 1. Usa o campo `imagem` do cabeçalho da receita, se existir.
 * 2. Senão, procura por convenção `public/imagens/<nome-do-ficheiro-da-receita>.jpg`,
 *    que é onde o fluxo do n8n grava a imagem. Assim a imagem aparece mesmo que o
 *    cabeçalho da receita não tenha sido atualizado.
 */
export function imagemDaReceita(receita: CollectionEntry<'receitas'>): string | undefined {
  if (receita.data.imagem) return receita.data.imagem;

  const ficheiro = path.join(process.cwd(), 'public', 'imagens', `${receita.id}.jpg`);
  return fs.existsSync(ficheiro) ? `/imagens/${receita.id}.jpg` : undefined;
}
