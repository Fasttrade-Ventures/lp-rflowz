import { faqs } from '@/lib/faqs'
import { jsonLdScript } from '@/lib/jsonLd'
import { pricingPlans } from '@/lib/plans'
import { siteConfig } from '@/lib/site'

export function StructuredData() {
  const organization: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/rflowz-black.png`,
    description: siteConfig.description,
    email: siteConfig.email,
    contactPoint: {
      '@type': 'ContactPoint',
      email: siteConfig.email,
      contactType: 'customer support',
      url: `${siteConfig.url}/contact`,
    },
  }

  if (siteConfig.sameAs.length > 0) {
    organization.sameAs = [...siteConfig.sameAs]
    organization.founder = {
      '@type': 'Person',
      name: siteConfig.founder.name,
      jobTitle: 'Founder',
      sameAs: [...siteConfig.sameAs],
    }
  }

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
    },
  }

  const softwareApplication = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: siteConfig.name,
    applicationCategory: 'EducationalApplication',
    operatingSystem: 'Web',
            url: siteConfig.appUrl,
            provider: {
              '@type': 'Organization',
              name: siteConfig.name,
              legalName: siteConfig.legalName,
              url: siteConfig.url,
            },
    description: siteConfig.description,
    offers: pricingPlans.map((plan) => ({
      '@type': 'Offer',
      name: `${plan.name} Plan`,
      price: plan.isFree ? '0' : plan.price.replace('$', ''),
      priceCurrency: 'USD',
      description: plan.description,
      availability: plan.comingSoonNote
        ? 'https://schema.org/PreOrder'
        : 'https://schema.org/InStock',
      url: plan.comingSoonNote
        ? `${siteConfig.url}/#pricing`
        : (plan.href ?? `${siteConfig.appUrl}/register`),
    })),
    featureList: [
      'Ask Prof Z AI research proposal writing',
      'OpenAlex academic source Library',
      'RAG literature synthesis',
      'Citation integrity verification',
      'Proposed framework with Mermaid diagrams',
      'DOCX, PDF, and PPTX export',
      'Free plan on registration',
    ],
  }

  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  const jsonLd = [organization, website, softwareApplication, faqPage]

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLdScript(jsonLd) }}
    />
  )
}
