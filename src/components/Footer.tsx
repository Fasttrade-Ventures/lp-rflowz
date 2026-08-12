import Link from 'next/link'
import Image from 'next/image'

import { Container } from '@/components/Container'
import { siteConfig } from '@/lib/site'

const productLinks = [
  { label: 'Features', href: '/#features' },
  { label: 'How it works', href: '/#how-it-works' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'FAQ', href: '/#faq' },
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
  { label: 'Terms & policies', href: '/terms-and-policies' },
  { label: 'Sign in', href: `${siteConfig.appUrl}/login` },
]

export function Footer() {
  return (
    <footer className="bg-slate-50">
      <Container>
        <div className="py-16">
          <Link href="/" aria-label={`${siteConfig.name} home`}>
            <Image
              className="mx-auto h-10 w-auto"
              src="/rflowz-black.png"
              alt={`${siteConfig.name} logo`}
              width={100}
              height={100}
            />
          </Link>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <nav aria-label="Product">
              <h2 className="text-sm font-semibold text-slate-900">Product</h2>
              <ul className="mt-4 space-y-3">
                {productLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-600 hover:text-slate-900"
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
                      className="text-sm text-slate-600 hover:text-slate-900"
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
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-600 hover:text-slate-900"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-6 text-slate-500">
            {siteConfig.name} helps students and researchers write proposals with
            Ask Prof Z, OpenAlex Library search, RAG grounding, and export to
            DOCX, PDF, and PPTX.
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
