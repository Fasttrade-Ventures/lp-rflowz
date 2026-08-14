import { siteConfig } from '@/lib/site'

export const cta = {
  primaryLabel: 'Start free — no credit card',
  primaryShort: 'Start free',
  secondaryLabel: 'See pricing',
  registerHref: `${siteConfig.appUrl}/register`,
  loginHref: `${siteConfig.appUrl}/login`,
  pricingHref: '/#pricing',
  trustLine: 'Free plan · no credit card · citation checks',
} as const
