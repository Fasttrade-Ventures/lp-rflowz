import { type Metadata } from 'next'

import {
  SeoCta,
  SeoFaqSection,
  SeoPageLayout,
  SeoRelatedLinks,
} from '@/components/SeoPageLayout'
import { siteConfig } from '@/lib/site'

const path = '/openalex-literature-review'
const title = 'OpenAlex Literature Review with RAG'
const description =
  'Search OpenAlex, attach sources in your RflowZ Library, and use RAG-grounded Ask Prof Z for literature synthesis with citation integrity checks.'

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'OpenAlex literature review',
    'AI literature review with citations',
    'grounded academic writing',
    'RAG academic writing',
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
    question: 'Does RflowZ search OpenAlex?',
    answer:
      'Yes. Find academic papers through OpenAlex inside your Source Library, then attach selected sources to literature sub-topics before Ask Prof Z writes.',
  },
  {
    question: 'What is RAG grounding for literature review?',
    answer:
      'RAG (retrieval-augmented generation) grounds Ask Prof Z on the sources you attach, so synthesis is tied to your selected papers and policy/media documents rather than unconstrained chat memory alone.',
  },
  {
    question: 'Can I add non-academic sources?',
    answer:
      'Yes. The Library supports academic OpenAlex results plus policy and media sources so you can ground proposals with the evidence your topic needs.',
  },
]

export default function OpenAlexLiteratureReviewPage() {
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
          OpenAlex literature review with grounded RAG
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-600">
          Build literature that cites real sources. Search OpenAlex, attach
          papers to your Library, meet the source threshold, then Ask Prof Z to
          synthesize with RAG grounding and citation integrity checks.
        </p>

        <section className="mt-12 space-y-6 text-sm leading-7 text-slate-700">
          <h2 className="font-display text-2xl text-slate-900">
            A grounded literature workflow
          </h2>
          <ol className="list-decimal space-y-3 pl-5">
            <li>Search OpenAlex (and policy/media) from your Source Library.</li>
            <li>Attach usable sources to each literature sub-topic.</li>
            <li>
              Unlock Ask Prof Z once enough verified sources are linked for
              grounded synthesis.
            </li>
            <li>
              Review citations, then continue to framework and proposal export.
            </li>
          </ol>
          <h2 className="font-display text-2xl text-slate-900">
            Why grounding matters
          </h2>
          <p>
            Generic AI can hallucinate papers. RflowZ is designed so literature
            generation is tied to sources you selected, with integrity checks
            that help catch unresolved or mismatched citations before you
            export DOCX or PDF.
          </p>
        </section>

        <SeoFaqSection faqs={faqs} />
        <SeoCta title="Ground your next literature review" />
        <SeoRelatedLinks
          links={[
            {
              href: '/ai-research-proposal-writer',
              label: 'AI research proposal writer',
            },
            {
              href: '/how-to-write-a-research-proposal',
              label: 'How to write a research proposal',
            },
            { href: '/thesis-proposal', label: 'Thesis proposal' },
          ]}
        />
      </article>
    </SeoPageLayout>
  )
}
