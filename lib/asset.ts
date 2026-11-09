// Prefixes public asset paths when the site is served from a sub-path (for example GitHub Pages project sites).
// Leave NEXT_PUBLIC_BASE_PATH empty when serving from a domain root.
export const a = (p: string): string => (process.env.NEXT_PUBLIC_BASE_PATH || '') + p;
