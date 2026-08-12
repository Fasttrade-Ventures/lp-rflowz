import { type Metadata } from 'next'

import {
  SeoCta,
  SeoFaqSection,
  SeoPageLayout,
  SeoRelatedLinks,
} from '@/components/SeoPageLayout'
import { siteConfig } from '@/lib/site'

const path = '/rflowz-vs-chatgpt'
const title = 'RflowZ vs ChatGPT for Research Proposals'
const description =
  'Compare RflowZ and ChatGPT for research proposals: structured workflow, OpenAlex Library, RAG grounding, citation integrity, and DOCX/PDF/PPTX export.'

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'ChatGPT for research proposal',
    'RflowZ vs ChatGPT',
    'AI research proposal tool comparison',
  ],
  alternates: { canonical: path },
  openGraph: {
    title: `${title} | ${siteConfig.name}`,
    description,
    url: `${siteConfig.url}${path}`,
    type: 'website',
  },
}

const rows = [
  {
    feature: 'Structured proposal workflow',
    rflowz: 'Yes — sectioned research proposal workspace',
    chatgpt: 'Manual prompting only',
  },
  {
    feature: 'OpenAlex academic search',
    rflowz: 'Yes — Source Library',
    chatgpt: 'No native OpenAlex Library',
  },
  {
    feature: 'RAG-grounded literature on selected sources',
    rflowz: 'Yes — Ask Prof Z with attached sources',
    chatgpt: 'Depends on what you paste; easy to invent cites',
  },
  {
    feature: 'Citation integrity checks',
    rflowz: 'Yes — before export',
    chatgpt: 'Not built for proposal export gates',
  },
  {
    feature: 'Framework diagrams',
    rflowz: 'Yes — caption + Mermaid',
    chatgpt: 'Possible via prompts, not integrated',
  },
  {
    feature: 'DOCX / PDF / PPTX export',
    rflowz: 'Yes (PPTX on higher plans)',
    chatgpt: 'Copy/paste into other tools',
  },
]

const faqs = [
  {
    question: 'Can I still use ChatGPT with RflowZ?',
    answer:
      'Yes. Many researchers brainstorm in general AI tools, then use RflowZ for structured drafting, Library sources, grounding, and export.',
  },
  {
    question: 'Is RflowZ only for ChatGPT users?',
    answer:
      'No. RflowZ is a dedicated research proposal platform. The comparison helps people who currently use ChatGPT for proposals understand the workflow difference.',
  },
]

export default function RflowzVsChatgptPage() {
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
          RflowZ vs ChatGPT for research proposals
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-600">
          ChatGPT is a general assistant. RflowZ is a research proposal
          workspace with Ask Prof Z, OpenAlex Library search, RAG grounding,
          citation integrity checks, and document export.
        </p>

        <div className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse text-left text-sm text-slate-700">
            <caption className="sr-only">
              Feature comparison between RflowZ and ChatGPT for research
              proposals
            </caption>
            <thead>
              <tr className="border-b border-slate-200">
                <th scope="col" className="px-3 py-3 font-semibold text-slate-900">
                  Capability
                </th>
                <th scope="col" className="px-3 py-3 font-semibold text-slate-900">
                  RflowZ
                </th>
                <th scope="col" className="px-3 py-3 font-semibold text-slate-900">
                  ChatGPT
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr
                  key={row.feature}
                  className="border-b border-slate-100 even:bg-slate-50"
                >
                  <th
                    scope="row"
                    className="px-3 py-3 font-medium text-slate-900"
                  >
                    {row.feature}
                  </th>
                  <td className="px-3 py-3">{row.rflowz}</td>
                  <td className="px-3 py-3">{row.chatgpt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <section className="mt-12 space-y-4 text-sm leading-7 text-slate-700">
          <h2 className="font-display text-2xl text-slate-900">
            When RflowZ is the better fit
          </h2>
          <p>
            Choose RflowZ when you need an end-to-end proposal pipeline:
            structured sections, real academic search, grounded literature, and
            export formats reviewers expect — without rebuilding that process
            from scratch in a chat thread.
          </p>
        </section>

        <SeoFaqSection faqs={faqs} />
        <SeoCta title="Try the proposal workflow free" />
        <SeoRelatedLinks
          links={[
            {
              href: '/ai-research-proposal-writer',
              label: 'AI research proposal writer',
            },
            {
              href: '/openalex-literature-review',
              label: 'OpenAlex literature review',
            },
            { href: '/thesis-proposal', label: 'Thesis proposal' },
          ]}
        />
      </article>
    </SeoPageLayout>
  )
}
