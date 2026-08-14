import { type Metadata } from 'next'

import {
  SeoCta,
  SeoFaqSection,
  SeoPageLayout,
  SeoRelatedLinks,
} from '@/components/SeoPageLayout'
import { buildPageMetadata, seoPages } from '@/lib/seo-pages'
import { siteConfig } from '@/lib/site'

const page = seoPages.openAlex

export const metadata: Metadata = buildPageMetadata(page)

const faqs = [
  {
    question: 'Does RflowZ search OpenAlex?',
    answer:
      'Yes. Find academic papers through OpenAlex inside your Source Library, then attach selected sources to literature sub-topics before Ask Prof Z writes.',
  },
  {
    question: 'What is RAG for literature review?',
    answer:
      'RAG (retrieval-augmented generation) uses the sources you attach when Ask Prof Z writes, so synthesis is tied to your selected papers and policy/media documents rather than unconstrained chat memory alone.',
  },
  {
    question: 'Can I add non-academic sources?',
    answer:
      'Yes. The Library supports academic OpenAlex results plus policy and media sources so you can back proposals with the evidence your topic needs.',
  },
  {
    question: 'Why is Ask Prof Z disabled on a sub-topic?',
    answer:
      'Ask Prof Z for literature synthesis unlocks after enough usable sources are attached (typically at least two verified academic sources). Attach OpenAlex results, then generate.',
  },
]

export default function OpenAlexLiteratureReviewPage() {
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
          Build literature that cites real sources. Search OpenAlex, attach
          papers to your Library, meet the source threshold, then Ask Prof Z to
          synthesize with RAG and citation integrity checks.
        </p>

        <section className="mt-12 space-y-6 text-sm leading-7 text-slate-700">
          <h2 className="font-display text-2xl text-slate-900">
            An OpenAlex literature workflow
          </h2>
          <ol className="list-decimal space-y-3 pl-5">
            <li>Search OpenAlex (and policy/media) from your Source Library.</li>
            <li>Attach usable sources to each literature sub-topic.</li>
            <li>
              Unlock Ask Prof Z once enough verified sources are linked for
              synthesis.
            </li>
            <li>
              Review citations, then continue to framework and proposal export.
            </li>
          </ol>

          <h2 className="font-display text-2xl text-slate-900">
            RAG vs generic AI writing
          </h2>
          <p>
            Generic chat tools can invent papers. RAG ties Ask Prof Z
            to sources you selected. Citation integrity checks then help catch
            unresolved or mismatched references before you export DOCX or PDF.
          </p>

          <h2 className="font-display text-2xl text-slate-900">
            Academic + policy/media Library
          </h2>
          <p>
            Many proposals need more than journal articles. RflowZ Library
            supports OpenAlex academic search alongside policy and media sources
            so your evidence base matches the research problem.
          </p>
        </section>

        <SeoFaqSection faqs={faqs} />
        <SeoCta title="Ground your next literature review" />
        <SeoRelatedLinks links={page.relatedLinks} />
      </article>
    </SeoPageLayout>
  )
}
