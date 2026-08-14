import { type Metadata } from 'next'

import { Button } from '@/components/Button'
import {
  SeoPageLayout,
  SeoRelatedLinks,
} from '@/components/SeoPageLayout'
import { cta } from '@/lib/cta'
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
          Questions about RflowZ plans, billing, Ask Prof Z, or the Source
          Library? Email support — RflowZ does not publish a walk-in office on
          this site.
        </p>

        <section className="mt-12 space-y-6 text-sm leading-7 text-slate-700">
          <h2 className="font-display text-2xl text-slate-900">Email support</h2>
          <p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-lg font-medium text-blue-600 hover:text-blue-800"
              data-cta="contact"
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
            <Button
              href={cta.registerHref}
              color="blue"
              data-cta="contact"
              data-cta-action="register"
            >
              {cta.primaryLabel}
            </Button>
            <Button
              href={cta.loginHref}
              variant="outline"
              color="slate"
              data-cta="contact"
              data-cta-action="login"
            >
              Sign in
            </Button>
          </div>

          <h2 className="font-display text-2xl text-slate-900">Follow RflowZ</h2>
          <ul className="space-y-2">
            {siteConfig.social.map((profile) => (
              <li key={profile.href}>
                <a
                  href={profile.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-blue-600 hover:text-blue-800"
                >
                  {profile.label}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <SeoRelatedLinks links={page.relatedLinks} />
      </article>
    </SeoPageLayout>
  )
}
