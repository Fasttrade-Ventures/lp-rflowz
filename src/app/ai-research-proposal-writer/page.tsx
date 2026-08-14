import { type Metadata } from 'next'

import {
  SeoCta,
  SeoFaqSection,
  SeoPageLayout,
  SeoRelatedLinks,
} from '@/components/SeoPageLayout'
import { buildPageMetadata, seoPages } from '@/lib/seo-pages'
import { siteConfig } from '@/lib/site'

const page = seoPages.aiWriter

export const metadata: Metadata = buildPageMetadata(page)

const faqs = [
  {
    question: 'What is an AI research proposal writer?',
    answer:
      'An AI research proposal writer helps you draft structured proposal sections — problem statement, literature, methodology, and more — instead of starting from a blank page. RflowZ uses Ask Prof Z inside a guided proposal workflow.',
  },
  {
    question: 'Does Ask Prof Z invent citations?',
    answer:
      'Ask Prof Z can use RAG on sources you attach from your OpenAlex Library. Citation integrity checks help catch unresolved or mismatched references before export.',
  },
  {
    question: 'Is there a free AI research proposal writer plan?',
    answer:
      'Yes. New RflowZ accounts start on Free with 1 proposal per month, Unlimited Ask Prof Z, RAG for up to 10 documents, and 5 watermarked exports.',
  },
  {
    question: 'What can I export?',
    answer:
      'DOCX and PDF on eligible plans. PPTX is available on Standard and Professional plans. Free exports are watermarked.',
  },
]

const outcomes = [
  {
    feature: 'Ask Prof Z',
    outcome: 'Draft and refine proposal sections in academic tone',
  },
  {
    feature: 'OpenAlex Library',
    outcome: 'Find and attach real academic sources for literature work',
  },
  {
    feature: 'RAG literature',
    outcome: 'Synthesize literature from sources you selected',
  },
  {
    feature: 'Citation integrity',
    outcome: 'Catch unresolved or mismatched cites before export',
  },
  {
    feature: 'Framework + Mermaid',
    outcome: 'Generate a proposed framework caption and diagram',
  },
  {
    feature: 'DOCX / PDF / PPTX',
    outcome: 'Export submission-ready files (plan-dependent)',
  },
]

export default function AiResearchProposalWriterPage() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: page.title,
      description: page.description,
      url: `${siteConfig.url}${page.path}`,
      isPartOf: {
        '@type': 'WebSite',
        name: siteConfig.name,
        url: siteConfig.url,
      },
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
        { name: 'Resources', href: '/resources' },
        { name: page.h1, href: page.path },
      ]}
      jsonLd={jsonLd}
    >
      <article className="mx-auto max-w-3xl">
        <h1 className="font-display text-4xl tracking-tight text-slate-900 sm:text-5xl">
          {page.h1}
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-600">
          An AI research proposal writer should do more than chat. RflowZ gives
          you Ask Prof Z inside a structured proposal workspace — with OpenAlex
          Library search, RAG, citation integrity checks, and document
          export.
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
            Feature → outcome map
          </h2>
          <div
            className="overflow-x-auto rounded-lg focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            tabIndex={0}
            role="region"
            aria-label="Feature to outcome map"
          >
            <table className="w-full min-w-[480px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="px-3 py-3 font-semibold text-slate-900">
                    Feature
                  </th>
                  <th className="px-3 py-3 font-semibold text-slate-900">
                    Outcome
                  </th>
                </tr>
              </thead>
              <tbody>
                {outcomes.map((row) => (
                  <tr
                    key={row.feature}
                    className="border-b border-slate-100 even:bg-slate-50"
                  >
                    <td className="px-3 py-3 font-medium text-slate-900">
                      {row.feature}
                    </td>
                    <td className="px-3 py-3">{row.outcome}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="font-display text-2xl text-slate-900">
            From draft to export
          </h2>
          <ol className="list-decimal space-y-2 pl-5">
            <li>Create a proposal project and clarify your topic.</li>
            <li>Draft sections with Ask Prof Z.</li>
            <li>Attach OpenAlex and Library sources; synthesize literature with RAG.</li>
            <li>Review, run citation checks, export DOCX/PDF (or PPTX on higher plans).</li>
          </ol>
        </section>

        <SeoFaqSection faqs={faqs} />
        <SeoCta />
        <SeoRelatedLinks links={page.relatedLinks} />
      </article>
    </SeoPageLayout>
  )
}
