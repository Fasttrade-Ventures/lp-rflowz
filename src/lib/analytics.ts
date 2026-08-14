import { ANALYTICS_CONSENT_KEY } from '@/lib/consent'

export type AnalyticsParams = Record<string, string | number | boolean | undefined>

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

export function hasAnalyticsConsent(): boolean {
  if (typeof window === 'undefined') {
    return false
  }
  return window.localStorage.getItem(ANALYTICS_CONSENT_KEY) === 'granted'
}

export function track(name: string, params: AnalyticsParams = {}): void {
  if (!hasAnalyticsConsent() || typeof window.gtag !== 'function') {
    return
  }

  const payload: Record<string, string | number | boolean> = {}
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined) {
      payload[key] = value
    }
  }

  window.gtag('event', name, payload)
}

function ctaNameFromAnchor(anchor: HTMLAnchorElement): string {
  const labelled = anchor.getAttribute('aria-label')?.trim()
  if (labelled) {
    return labelled.slice(0, 80)
  }
  const text = anchor.textContent?.replace(/\s+/g, ' ').trim()
  return (text || 'cta').slice(0, 80)
}

function destinationKind(href: string): 'register' | 'login' | 'pricing' | 'email' | 'other' {
  const url = href.toLowerCase()
  if (url.startsWith('mailto:')) {
    return 'email'
  }
  if (url.includes('/register')) {
    return 'register'
  }
  if (url.includes('/login')) {
    return 'login'
  }
  if (url.includes('#pricing') || url.endsWith('/#pricing')) {
    return 'pricing'
  }
  return 'other'
}

export function trackAnchorClick(anchor: HTMLAnchorElement): void {
  const href = anchor.getAttribute('href') ?? ''
  const action = anchor.dataset.ctaAction
  const location = anchor.dataset.cta ?? 'unknown'
  const name = ctaNameFromAnchor(anchor)
  const path = window.location.pathname
  const kind = action === 'register' || action === 'pricing' || action === 'login'
    ? action
    : destinationKind(href)

  if (kind === 'email') {
    track('email_click', { cta_location: location === 'unknown' ? 'content' : location })
    return
  }

  if (kind === 'register') {
    track('generate_lead', {
      cta_name: name,
      cta_location: location,
      page_path: path,
    })
    return
  }

  if (kind === 'pricing' || kind === 'login') {
    track('cta_click', {
      cta_name: name,
      cta_location: location,
      destination: kind,
      page_path: path,
    })
  }
}

export function shouldTrackAnchor(anchor: HTMLAnchorElement): boolean {
  const href = anchor.getAttribute('href') ?? ''
  if (!href || href.startsWith('javascript:')) {
    return false
  }
  if (anchor.dataset.cta) {
    return true
  }
  const lower = href.toLowerCase()
  if (lower.startsWith('mailto:')) {
    return true
  }
  return (
    lower.includes('app.rflowz.com/register') ||
    lower.includes('app.rflowz.com/login')
  )
}
