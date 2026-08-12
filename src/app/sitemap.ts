import type { MetadataRoute } from 'next'

import { indexableSeoPaths } from '@/lib/seo-pages'
import { siteConfig } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    {
      url: siteConfig.url,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...indexableSeoPaths.map((page) => ({
      url: `${siteConfig.url}${page.path}`,
      lastModified,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
  ]
}
