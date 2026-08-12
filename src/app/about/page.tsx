import { type Metadata } from 'next'
import Link from 'next/link'

import {
  SeoCta,
  SeoPageLayout,
  SeoRelatedLinks,
} from '@/components/SeoPageLayout'
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
          {siteConfig.name} is an AI-powered research proposal platform for
          students, academics, and research teams. We help you draft structured
          proposals with Ask Prof Z, search OpenAlex and policy/media sources in
          your Library, ground literature with RAG, and export with citation
          integrity checks.
        </p>

        <section className="mt-12 space-y-6 text-sm leading-7 text-slate-700">
          <h2 className="font-display text-2xl text-slate-900">What we build</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>Structured research proposal workspaces</li>
            <li>Ask Prof Z for grounded section drafting and refinement</li>
            <li>Source Library with OpenAlex academic search</li>
            <li>RAG grounding and citation integrity before export</li>
            <li>DOCX, PDF, and PPTX export (plan-dependent)</li>
          </ul>

          <h2 className="font-display text-2xl text-slate-900">
            What we do not claim
          </h2>
          <p>
            We do not market Mendeley as a current integration. TreZ and TAM are
            listed as coming soon on higher plans — not live engines today. We
            do not fabricate citations or review ratings for marketing.
          </p>

          <h2 className="font-display text-2xl text-slate-900">Founder</h2>
          <p>
            {siteConfig.name} is led by {siteConfig.founder.name} (
            {siteConfig.founder.credentials}). Follow updates and academic
            content on{' '}
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
