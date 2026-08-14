import Link from 'next/link'
import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { cta } from '@/lib/cta'
import { siteConfig } from '@/lib/site'

const productLinks = [
  { label: 'Features', href: '/#secondary-features' },
  { label: 'How it works', href: '/#how-it-works' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Resources', href: '/resources' },
  { label: cta.primaryShort, href: cta.registerHref },
]

const resourceLinks = [
  {
    label: 'AI research proposal writer',
    href: '/ai-research-proposal-writer',
  },
  {
    label: 'OpenAlex literature review',
    href: '/openalex-literature-review',
  },
  {
    label: 'How to write a research proposal',
    href: '/how-to-write-a-research-proposal',
  },
  { label: 'Thesis proposal', href: '/thesis-proposal' },
  { label: 'RflowZ vs ChatGPT', href: '/rflowz-vs-chatgpt' },
]

const companyLinks = [
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Terms & policies', href: '/terms-and-policies' },
  { label: 'Sign in', href: `${siteConfig.appUrl}/login` },
  ...siteConfig.social.map((profile) => ({
    label: profile.label,
    href: profile.href,
  })),
]

export function Footer({ finale = false }: { finale?: boolean }) {
  return (
    <footer className="bg-slate-50">
      <Container>
        <div className={finale ? 'py-16 sm:py-20' : 'py-16'}>
          {finale ? (
            <div className="relative overflow-hidden rounded-3xl bg-slate-900 px-6 py-12 text-center sm:px-12 sm:py-16">
              <p className="mx-auto max-w-2xl font-display text-3xl font-medium leading-tight tracking-tight text-white sm:text-4xl">
                Write the next proposal
                <span className="mt-1 block text-blue-300">with RflowZ.</span>
              </p>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-300 sm:text-base">
                Ask Prof Z, OpenAlex Library, RAG, citation checks, and export
                to DOCX, PDF, and PPTX.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Button
                  href={cta.registerHref}
                  color="blue"
                  data-cta="footer"
                  data-cta-action="register"
                >
                  {cta.primaryLabel}
                </Button>
                <Button href={cta.pricingHref} variant="outline" color="white">
                  {cta.secondaryLabel}
                </Button>
              </div>
            </div>
          ) : (
            <Link href="/" aria-label={`${siteConfig.name} home`}>
              <Image
                className="mx-auto h-10 w-auto"
                src="/rflowz-black.png"
                alt=""
                width={100}
                height={100}
              />
            </Link>
          )}
          <div className={finale ? 'mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3' : 'mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3'}>
            <nav aria-label="Product">
              <h2 className="text-sm font-semibold text-slate-900">Product</h2>
              <ul className="mt-4 space-y-3">
                {productLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="inline-flex min-h-11 items-center text-sm text-slate-600 hover:text-slate-900 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                      data-cta={
                        link.href.includes('/register') ? 'footer' : undefined
                      }
                      data-cta-action={
                        link.href.includes('/register') ? 'register' : undefined
                      }
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <nav aria-label="Resources">
              <h2 className="text-sm font-semibold text-slate-900">
                Resources
              </h2>
              <ul className="mt-4 space-y-3">
                {resourceLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="inline-flex min-h-11 items-center text-sm text-slate-600 hover:text-slate-900 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <nav aria-label="Company">
              <h2 className="text-sm font-semibold text-slate-900">Company</h2>
              <ul className="mt-4 space-y-3">
                {companyLinks.map((link) => {
                  const isExternal = link.href.startsWith('http')
                  return (
                    <li key={link.label}>
                      {isExternal ? (
                        <a
                          href={link.href}
                          {...(link.href.includes('/login')
                            ? {
                                'data-cta': 'footer',
                                'data-cta-action': 'login',
                              }
                            : {
                                target: '_blank',
                                rel: 'noopener noreferrer',
                              })}
                          className="inline-flex min-h-11 items-center text-sm text-slate-600 hover:text-slate-900 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="inline-flex min-h-11 items-center text-sm text-slate-600 hover:text-slate-900 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  )
                })}
              </ul>
            </nav>
          </div>
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-6 text-slate-500">
            {siteConfig.name} helps students and researchers write proposals with
            Ask Prof Z, OpenAlex Library search, RAG, and export to
            DOCX, PDF, and PPTX. Explore our{' '}
            <Link
              href="/resources"
              className="font-medium text-slate-700 hover:text-slate-900"
            >
              research proposal resources
            </Link>{' '}
            or the{' '}
            <Link
              href="/ai-research-proposal-writer"
              className="font-medium text-slate-700 hover:text-slate-900"
            >
              AI research proposal writer
            </Link>
            .
          </p>
        </div>
        <div className="mx-auto flex items-center justify-center border-t border-slate-400/10 py-10">
          <p className="text-center text-sm text-slate-500">
            Copyright &copy; {new Date().getFullYear()} {siteConfig.name}. All
            rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
