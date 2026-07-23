import { faqs } from '@/lib/faqs'
import { planComparison } from '@/lib/plans'
import { siteConfig } from '@/lib/site'

export function StructuredData() {
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/rflowz-black.png`,
    description: siteConfig.description,
    email: siteConfig.email,
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
    description: siteConfig.description,
    offers: planComparison.map((plan) => ({
      '@type': 'Offer',
      name: `${plan.name} Plan`,
      price: plan.monthly.replace('$', ''),
      priceCurrency: 'USD',
      description: `${plan.proposals} proposals, ${plan.exports} exports, watermark: ${plan.watermark}, PPTX: ${plan.pptx}`,
      url: `${siteConfig.appUrl}/register`,
    })),
    featureList: [
      'AI-assisted research proposal writing',
      'Mendeley citation import',
      'Customizable proposal templates',
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
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
