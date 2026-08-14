/** Safe JSON-LD for inline <script> (prevents </script> breakout). */
export function jsonLdScript(data: unknown) {
  return JSON.stringify(data).replace(/</g, '\\u003c')
}
