import { type Metadata } from 'next'
import Link from 'next/link'

import {
  SeoCta,
  SeoPageLayout,
  SeoRelatedLinks,
} from '@/components/SeoPageLayout'
import { entityFacts, listedPricingSummary } from '@/lib/entity'
import { buildPageMetadata, seoPages } from '@/lib/seo-pages'
import { siteConfig } from '@/lib/site'

const page = seoPages.about

export const metadata: Metadata = buildPageMetadata(page)

export default function AboutPage() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      name: page.title,
      description: page.description,
      url: `${siteConfig.url}${page.path}`,
      isPartOf: {
        '@type': 'WebSite',
        name: siteConfig.name,
        url: siteConfig.url,
      },
      mainEntity: {
        '@type': 'Organization',
        name: siteConfig.name,
        legalName: siteConfig.legalName,
        url: siteConfig.url,
        email: siteConfig.email,
        sameAs: [...siteConfig.sameAs],
        founder: {
          '@type': 'Person',
          name: siteConfig.founder.name,
          jobTitle: 'Founder',
          sameAs: [...siteConfig.sameAs],
        },
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
          {entityFacts.organization.name} is an {entityFacts.organization.type}{' '}
          for {entityFacts.audience} The product lives at{' '}
          {entityFacts.organization.app}.
        </p>

        <section className="mt-12 space-y-6 text-sm leading-7 text-slate-700">
          <h2 className="font-display text-2xl text-slate-900">
            What RflowZ offers
          </h2>
          <p>{entityFacts.differentiator}</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Ask Prof Z for section drafting and refinement</li>
            <li>
              Source Library with OpenAlex academic search plus policy/media
              sources
            </li>
            <li>
              {entityFacts.product.rag}
            </li>
            <li>Citation integrity checks before export</li>
            <li>DOCX and PDF export; PPTX on higher plans when those launch</li>
          </ul>

          <h2 className="font-display text-2xl text-slate-900">
            How RflowZ works
          </h2>
          <p>{entityFacts.howItWorks}</p>

          <h2 className="font-display text-2xl text-slate-900">
            Where RflowZ operates
          </h2>
          <p>
            {entityFacts.organization.operates} Marketing locale is{' '}
            {entityFacts.organization.locale}. Support:{' '}
            <a
              href={`mailto:${siteConfig.email}`}
              className="font-medium text-blue-600 hover:text-blue-800"
            >
              {siteConfig.email}
            </a>
            .
          </p>

          <h2 className="font-display text-2xl text-slate-900">
            RflowZ pricing (as of {entityFacts.asOf})
          </h2>
          <p>{listedPricingSummary()}</p>
          <p>
            See{' '}
            <Link
              href="/#pricing"
              className="font-medium text-blue-600 hover:text-blue-800"
            >
              RflowZ pricing
            </Link>{' '}
            on the homepage.
          </p>

          <h2 className="font-display text-2xl text-slate-900">
            What RflowZ does not claim
          </h2>
          <p>{entityFacts.limitations}</p>

          <h2 className="font-display text-2xl text-slate-900">
            Who leads RflowZ
          </h2>
          <p>
            {entityFacts.organization.name} is led by {entityFacts.founder.name}{' '}
            ({entityFacts.founder.credentials}), {entityFacts.founder.role}.
            Follow academic updates on{' '}
            {siteConfig.social.map((profile, index) => (
              <span key={profile.href}>
                {index > 0 ? ' and ' : null}
                <a
                  href={profile.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-blue-600 hover:text-blue-800"
                >
                  {profile.label}
                </a>
              </span>
            ))}
            .
          </p>

          <h2 className="font-display text-2xl text-slate-900">Legal entity</h2>
          <p>
            Operating name: {siteConfig.name}. Legal name:{' '}
            {siteConfig.legalName}. Support:{' '}
            <a
              href={`mailto:${siteConfig.email}`}
              className="font-medium text-blue-600 hover:text-blue-800"
            >
              {siteConfig.email}
            </a>
            . Read our{' '}
            <Link
              href="/terms-and-policies"
              className="font-medium text-blue-600 hover:text-blue-800"
            >
              terms and policies
            </Link>
            .
          </p>
        </section>

        <SeoCta title="Try RflowZ free" />
        <SeoRelatedLinks links={page.relatedLinks} />
      </article>
    </SeoPageLayout>
  )
}
