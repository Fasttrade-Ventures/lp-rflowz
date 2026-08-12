import { type Metadata } from 'next'

import {
  SeoCta,
  SeoFaqSection,
  SeoPageLayout,
  SeoRelatedLinks,
} from '@/components/SeoPageLayout'
import { siteConfig } from '@/lib/site'

const path = '/thesis-proposal'
const title = 'Thesis & Dissertation Proposal Tool'
const description =
  'Write master’s and PhD thesis proposals with Ask Prof Z, OpenAlex Library search, RAG-grounded literature, structured sections, and DOCX/PDF export.'

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'thesis proposal',
    'dissertation proposal',
    'PhD research proposal',
    'master thesis proposal tool',
  ],
  alternates: { canonical: path },
  openGraph: {
    title: `${title} | ${siteConfig.name}`,
    description,
    url: `${siteConfig.url}${path}`,
    type: 'website',
  },
}

const faqs = [
  {
    question: 'Can RflowZ help with a PhD research proposal?',
    answer:
      'Yes. RflowZ supports structured proposal workflows for paper, project, master’s, and PhD-style research, including literature, questions, philosophy, methodology, and framework sections.',
  },
  {
    question: 'Does it replace my supervisor?',
    answer:
      'No. RflowZ accelerates drafting and organization. You and your supervisor remain responsible for academic quality, ethics, and originality.',
  },
]

export default function ThesisProposalPage() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: title,
      description,
      url: `${siteConfig.url}${path}`,
      isPartOf: { '@type': 'WebSite', name: siteConfig.name, url: siteConfig.url },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    },
  ]

  return (
    <SeoPageLayout
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: title, href: path },
      ]}
      jsonLd={jsonLd}
    >
      <article className="mx-auto max-w-3xl">
        <h1 className="font-display text-4xl tracking-tight text-slate-900 sm:text-5xl">
          Thesis and dissertation proposal writing with RflowZ
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-600">
          Master’s and PhD proposals need structure, credible sources, and
          clear methods. RflowZ helps you draft each section with Ask Prof Z,
          build an OpenAlex-backed Library, ground literature with RAG, and
          export a submission-ready document.
        </p>

        <section className="mt-12 space-y-6 text-sm leading-7 text-slate-700">
          <h2 className="font-display text-2xl text-slate-900">
            Built for postgraduate proposal work
          </h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>Problem statement and research questions</li>
            <li>Grounded literature review from OpenAlex sources</li>
            <li>Philosophy and methodology narratives</li>
            <li>Proposed framework with Mermaid diagrams</li>
            <li>Review Proposal assembly with citation integrity checks</li>
            <li>Export to DOCX and PDF (PPTX on higher plans)</li>
          </ul>
          <h2 className="font-display text-2xl text-slate-900">
            Start free while you learn the workflow
          </h2>
          <p>
            New accounts begin on the Free plan so you can explore Ask Prof Z
            and exports with watermarked limits. Upgrade when you need more
            proposals, unlimited RAG, or PPTX.
          </p>
        </section>

        <SeoFaqSection faqs={faqs} />
        <SeoCta title="Start your thesis proposal free" />
        <SeoRelatedLinks
          links={[
            {
              href: '/how-to-write-a-research-proposal',
              label: 'How to write a research proposal',
            },
            {
              href: '/ai-research-proposal-writer',
              label: 'AI research proposal writer',
            },
            { href: '/rflowz-vs-chatgpt', label: 'RflowZ vs ChatGPT' },
          ]}
        />
      </article>
    </SeoPageLayout>
  )
}
