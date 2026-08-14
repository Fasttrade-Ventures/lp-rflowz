export const motion = {
  ease: 'power3.out',
  fast: 0.22,
  ui: 0.4,
  reveal: 0.7,
  cinematic: 1.05,
} as const

export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') {
    return true
  }
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function isFinePointerDesktop(): boolean {
  if (typeof window === 'undefined') {
    return false
  }
  return (
    window.matchMedia('(min-width: 1024px)').matches &&
    window.matchMedia('(pointer: fine)').matches &&
    !prefersReducedMotion()
  )
}
