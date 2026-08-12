import { type Metadata } from 'next'
import Link from 'next/link'

import {
  SeoCta,
  SeoPageLayout,
  SeoRelatedLinks,
} from '@/components/SeoPageLayout'
import { buildPageMetadata, seoPages } from '@/lib/seo-pages'
import { siteConfig } from '@/lib/site'

const page = seoPages.resources

export const metadata: Metadata = buildPageMetadata(page)

const resourceCards = [
  seoPages.aiWriter,
  seoPages.openAlex,
  seoPages.howTo,
  seoPages.thesis,
  seoPages.vsChatgpt,
]

export default function ResourcesPage() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: page.title,
      description: page.description,
      url: `${siteConfig.url}${page.path}`,
      isPartOf: {
        '@type': 'WebSite',
        name: siteConfig.name,
        url: siteConfig.url,
      },
      hasPart: resourceCards.map((resource) => ({
        '@type': 'WebPage',
        name: resource.title,
        url: `${siteConfig.url}${resource.path}`,
        description: resource.description,
      })),
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
          Practical guides for research proposals — from AI drafting and OpenAlex
          literature workflows to thesis use cases and ChatGPT comparisons.
        </p>

        <ul className="mt-12 space-y-8">
          {resourceCards.map((resource) => (
            <li
              key={resource.path}
              className="border-b border-slate-200 pb-8 last:border-0"
            >
              <h2 className="font-display text-2xl text-slate-900">
                <Link
                  href={resource.path}
                  className="hover:text-blue-600"
                >
                  {resource.h1}
                </Link>
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {resource.description}
              </p>
              <Link
                href={resource.path}
                className="mt-3 inline-block text-sm font-medium text-blue-600 hover:text-blue-800"
              >
                Read more
              </Link>
            </li>
          ))}
        </ul>

        <SeoCta />
        <SeoRelatedLinks
          links={[
            { href: '/about', label: 'About RflowZ' },
            { href: '/#pricing', label: 'Pricing' },
            { href: '/contact', label: 'Contact' },
          ]}
        />
      </article>
    </SeoPageLayout>
  )
}
