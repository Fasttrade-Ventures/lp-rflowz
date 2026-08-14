import { type Metadata } from 'next'
import Link from 'next/link'

import {
  SeoCta,
  SeoFaqSection,
  SeoPageLayout,
  SeoRelatedLinks,
} from '@/components/SeoPageLayout'
import { buildPageMetadata, seoPages } from '@/lib/seo-pages'
import { siteConfig } from '@/lib/site'

const page = seoPages.thesis

export const metadata: Metadata = buildPageMetadata(page)

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
  {
    question: 'What is different for master’s vs PhD proposals?',
    answer:
      'Master’s proposals are often shorter and more applied. PhD proposals typically demand deeper literature grounding, clearer contribution claims, and a stronger methodological justification. RflowZ supports both with the same structured workspace.',
  },
]

export default function ThesisProposalPage() {
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
            Master’s vs PhD proposals
          </h2>
          <div
            className="overflow-x-auto rounded-lg focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            tabIndex={0}
            role="region"
            aria-label="Master’s versus PhD proposal comparison"
          >
            <table className="w-full min-w-[520px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="px-3 py-3 font-semibold text-slate-900">Focus</th>
                  <th className="px-3 py-3 font-semibold text-slate-900">
                    Master’s
                  </th>
                  <th className="px-3 py-3 font-semibold text-slate-900">PhD</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100">
                  <th scope="row" className="px-3 py-3 font-medium text-slate-900">
                    Scope
                  </th>
                  <td className="px-3 py-3">Often tighter, applied questions</td>
                  <td className="px-3 py-3">Broader contribution claims</td>
                </tr>
                <tr className="border-b border-slate-100 even:bg-slate-50">
                  <th scope="row" className="px-3 py-3 font-medium text-slate-900">
                    Literature
                  </th>
                  <td className="px-3 py-3">Focused review of core streams</td>
                  <td className="px-3 py-3">Deeper synthesis and gap framing</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <th scope="row" className="px-3 py-3 font-medium text-slate-900">
                    Methods
                  </th>
                  <td className="px-3 py-3">Clear, feasible design</td>
                  <td className="px-3 py-3">Stronger justification & rigor</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="font-display text-2xl text-slate-900">
            Start free while you learn the workflow
          </h2>
          <p>
            New accounts begin on the{' '}
            <Link
              href="/#pricing"
              className="font-medium text-blue-800 underline-offset-2 hover:underline"
            >
              Free plan
            </Link>{' '}
            so you can explore Ask Prof Z and exports with watermarked limits.
            Upgrade to Starter when you need more proposals and unlimited RAG.
            PPTX is listed on Standard and Professional, which are coming soon.
            See{' '}
            <Link
              href="/about"
              className="font-medium text-blue-800 underline-offset-2 hover:underline"
            >
              about RflowZ
            </Link>{' '}
            for who the workspace is for.
          </p>
        </section>

        <SeoFaqSection faqs={faqs} />
        <SeoCta title="Start your thesis proposal free" />
        <SeoRelatedLinks links={page.relatedLinks} />
      </article>
    </SeoPageLayout>
  )
}
