// Generate a compact id that is stable enough for local-only MVP data.
export function createId(prefix = 'journal'): string {
  return `${prefix}_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`
}
