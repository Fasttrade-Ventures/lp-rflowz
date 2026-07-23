import Link from 'next/link'

import { Container } from '@/components/Container'
import { FooterNavLink } from '@/components/FooterNavLink'
import { siteConfig } from '@/lib/site'
import Image from 'next/image'

const footerLinks = [
  { label: 'Features', href: '/#features' },
  { label: 'How it works', href: '/#how-it-works' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'FAQ', href: '/#faq' },
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
          <nav
            aria-label="Footer navigation"
            className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3"
          >
            {footerLinks.map((link) => (
              <FooterNavLink
                key={link.label}
                href={link.href}
                className="text-sm text-slate-600 hover:text-slate-900"
              >
                {link.label}
              </FooterNavLink>
            ))}
          </nav>
          <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-6 text-slate-500">
            {siteConfig.name} helps students and researchers write proposals with
            AI-assisted writing, Mendeley citations, and export to DOCX, PDF, and
            PPTX.
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
