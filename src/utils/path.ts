// src/utils/path.ts
export function path(url: string): string {
  const base = import.meta.env.BASE_URL;
  // Remove barras duplicadas caso a url comece com '/'
  const cleanUrl = url.startsWith('/') ? url.slice(1) : url;
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  
  return `${cleanBase}${cleanUrl}`;
}