/** GitHub Pages project path. Empty in local `next dev`. */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function withBase(path: string) {
  if (
    path.startsWith("http") ||
    path.startsWith("mailto:") ||
    path.startsWith("tel:") ||
    path.startsWith("#")
  ) {
    return path;
  }
  if (!basePath) return path;
  return path.startsWith("/") ? `${basePath}${path}` : `${basePath}/${path}`;
}
