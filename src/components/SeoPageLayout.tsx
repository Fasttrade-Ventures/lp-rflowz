import Link from 'next/link'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { siteConfig } from '@/lib/site'

export type SeoBreadcrumb = {
  name: string
  href: string
}

export type SeoFaq = {
  question: string
  answer: string
}

type SeoPageLayoutProps = {
  children: React.ReactNode
  breadcrumbs: SeoBreadcrumb[]
  jsonLd?: Record<string, unknown>[]
}

export function SeoPageLayout({
  children,
  breadcrumbs,
  jsonLd = [],
}: SeoPageLayoutProps) {
  const breadcrumbList = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.href.startsWith('http')
        ? crumb.href
        : `${siteConfig.url}${crumb.href === '/' ? '' : crumb.href}`,
    })),
  }

  const scripts = [breadcrumbList, ...jsonLd]

  return (
    <>
      {scripts.map((data, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
      <Header />
      <main>
        <Container className="py-16 sm:py-20">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-slate-500">
            <ol className="flex flex-wrap items-center gap-2">
              {breadcrumbs.map((crumb, index) => (
                <li key={crumb.href} className="flex items-center gap-2">
                  {index > 0 ? <span aria-hidden="true">/</span> : null}
                  {index === breadcrumbs.length - 1 ? (
                    <span className="text-slate-700">{crumb.name}</span>
                  ) : (
                    <Link href={crumb.href} className="hover:text-slate-900">
                      {crumb.name}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
          {children}
        </Container>
      </main>
      <Footer />
    </>
  )
}

export function SeoCta({
  title = 'Start your research proposal free',
  description = 'Create an account, use Ask Prof Z, search OpenAlex in your Library, and export when you are ready.',
}: {
  title?: string
  description?: string
}) {
  return (
    <div className="mt-14 rounded-3xl bg-blue-600 px-8 py-10 text-center sm:px-12">
      <h2 className="font-display text-2xl tracking-tight text-white sm:text-3xl">
        {title}
      </h2>
      <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-blue-100">
        {description}
      </p>
      <Button
        href={`${siteConfig.appUrl}/register`}
        color="white"
        className="mt-8"
      >
        Get started for free
      </Button>
    </div>
  )
}

export function SeoRelatedLinks({
  links,
}: {
  links: Array<{ href: string; label: string }>
}) {
  return (
    <aside className="mt-12 border-t border-slate-200 pt-8">
      <h2 className="font-display text-lg text-slate-900">Related resources</h2>
      <ul className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm font-medium text-blue-600 hover:text-blue-800"
            >
              {link.label}
            </Link>
          </li>
        ))}
        <li>
          <Link
            href="/#pricing"
            className="text-sm font-medium text-blue-600 hover:text-blue-800"
          >
            Pricing
          </Link>
        </li>
      </ul>
    </aside>
  )
}

export function SeoFaqSection({ faqs }: { faqs: SeoFaq[] }) {
  return (
    <section className="mt-14">
      <h2 className="font-display text-2xl tracking-tight text-slate-900">
        Frequently asked questions
      </h2>
      <dl className="mt-8 space-y-8">
        {faqs.map((faq) => (
          <div key={faq.question}>
            <dt className="font-display text-lg text-slate-900">
              {faq.question}
            </dt>
            <dd className="mt-2 text-sm leading-6 text-slate-600">
              {faq.answer}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
