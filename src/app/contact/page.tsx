import { type Metadata } from 'next'

import { Button } from '@/components/Button'
import {
  SeoPageLayout,
  SeoRelatedLinks,
} from '@/components/SeoPageLayout'
import { buildPageMetadata, seoPages } from '@/lib/seo-pages'
import { siteConfig } from '@/lib/site'

const page = seoPages.contact

export const metadata: Metadata = buildPageMetadata(page)

export default function ContactPage() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: page.title,
      description: page.description,
      url: `${siteConfig.url}${page.path}`,
      isPartOf: {
        '@type': 'WebSite',
        name: siteConfig.name,
        url: siteConfig.url,
      },
    },
  ]

  return (
    <SeoPageLayout
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: page.h1, href: page.path },
      ]}
      jsonLd={jsonLd}
    >
      <article className="mx-auto max-w-3xl">
        <h1 className="font-display text-4xl tracking-tight text-slate-900 sm:text-5xl">
          {page.h1}
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-600">
          Questions about plans, billing, or using Ask Prof Z and the Source
          Library? Reach our support team — we typically respond by email.
        </p>

        <section className="mt-12 space-y-6 text-sm leading-7 text-slate-700">
          <h2 className="font-display text-2xl text-slate-900">Email support</h2>
          <p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-lg font-medium text-blue-600 hover:text-blue-800"
            >
              {siteConfig.email}
            </a>
          </p>

          <h2 className="font-display text-2xl text-slate-900">
            Product access
          </h2>
          <p>
            Create or sign in to your proposal workspace on the RflowZ app.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href={`${siteConfig.appUrl}/register`} color="blue">
              Get started for free
            </Button>
            <Button href={`${siteConfig.appUrl}/login`} variant="outline" color="slate">
              Sign in
            </Button>
          </div>
        </section>

        <SeoRelatedLinks links={page.relatedLinks} />
      </article>
    </SeoPageLayout>
  )
}
