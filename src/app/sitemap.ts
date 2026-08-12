import type { MetadataRoute } from 'next'

import { siteConfig } from '@/lib/site'

const seoPages = [
  '/ai-research-proposal-writer',
  '/openalex-literature-review',
  '/how-to-write-a-research-proposal',
  '/thesis-proposal',
  '/rflowz-vs-chatgpt',
] as const

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    {
      url: siteConfig.url,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...seoPages.map((path) => ({
      url: `${siteConfig.url}${path}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    {
      url: `${siteConfig.url}/terms-and-policies`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ]
}
