import { type Metadata } from 'next'

import {
  SeoCta,
  SeoFaqSection,
  SeoPageLayout,
  SeoRelatedLinks,
} from '@/components/SeoPageLayout'
import { siteConfig } from '@/lib/site'

const path = '/ai-research-proposal-writer'
const title = 'AI Research Proposal Writer'
const description =
  'Write research proposals with Ask Prof Z — structured AI drafting, OpenAlex Library sources, RAG grounding, citation integrity, and DOCX, PDF, or PPTX export. Start free.'

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'AI research proposal writer',
    'research proposal generator',
    'Ask Prof Z',
    'academic AI writing',
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
    question: 'What is an AI research proposal writer?',
    answer:
      'An AI research proposal writer helps you draft structured proposal sections — problem statement, literature, methodology, and more — instead of starting from a blank page. RflowZ uses Ask Prof Z inside a guided proposal workflow.',
  },
  {
    question: 'Does Ask Prof Z invent citations?',
    answer:
      'Ask Prof Z can be grounded with RAG on sources you attach from your OpenAlex Library. Citation integrity checks help catch unresolved or mismatched references before export.',
  },
  {
    question: 'Is there a free AI research proposal writer plan?',
    answer:
      'Yes. New RflowZ accounts start on Free with 1 proposal per month, Unlimited Ask Prof Z, RAG for up to 10 documents, and 5 watermarked exports.',
  },
]

export default function AiResearchProposalWriterPage() {
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
          AI research proposal writer for students and researchers
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-600">
          RflowZ is built for research proposals — not generic chat. Use Ask
          Prof Z to draft and refine sections, search OpenAlex in your Source
          Library, ground literature with RAG, and export when citation checks
          pass.
        </p>

        <section className="mt-12 space-y-6 text-sm leading-7 text-slate-700">
          <h2 className="font-display text-2xl text-slate-900">
            Why researchers use an AI proposal writer
          </h2>
          <p>
            Writing a proposal means juggling structure, literature, methods,
            and formatting. A dedicated AI research proposal writer keeps those
            pieces in one workspace so you spend less time on busywork and more
            time on your research argument.
          </p>
          <h2 className="font-display text-2xl text-slate-900">
            How Ask Prof Z helps
          </h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>Draft problem statements, research questions, and methodology narratives</li>
            <li>Rephrase titles and sections in academic tone</li>
            <li>Ground literature synthesis on sources you select</li>
            <li>Generate proposed framework captions and Mermaid diagrams</li>
          </ul>
          <h2 className="font-display text-2xl text-slate-900">
            From draft to export
          </h2>
          <p>
            When sections are ready, review your proposal, run citation
            integrity checks, and export to DOCX or PDF. PPTX export is available
            on Standard and Professional plans.
          </p>
        </section>

        <SeoFaqSection faqs={faqs} />
        <SeoCta />
        <SeoRelatedLinks
          links={[
            {
              href: '/openalex-literature-review',
              label: 'OpenAlex literature review',
            },
            {
              href: '/how-to-write-a-research-proposal',
              label: 'How to write a research proposal',
            },
            { href: '/rflowz-vs-chatgpt', label: 'RflowZ vs ChatGPT' },
          ]}
        />
      </article>
    </SeoPageLayout>
  )
}
