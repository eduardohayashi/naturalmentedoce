/**
 * Monta um endereço interno respeitando o `base` do Astro.
 *
 * - Em desenvolvimento (localhost:4321) o base é "/", então url('/receitas') → "/receitas".
 * - No GitHub Pages o base é "/naturalmentedoce", então url('/receitas') → "/naturalmentedoce/receitas".
 *
 * Endereços externos (http/https) passam sem alteração.
 */
export function url(caminho = '/'): string {
  if (/^https?:\/\//i.test(caminho)) return caminho;

  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  const resto = caminho.replace(/^\/+/, '');

  return resto ? `${base}/${resto}` : `${base}/`;
}
