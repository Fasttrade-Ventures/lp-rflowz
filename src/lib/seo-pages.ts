import { type Metadata } from 'next'

import { siteConfig } from '@/lib/site'

export type SeoPageConfig = {
  path: string
  title: string
  description: string
  primaryKeyword: string
  h1: string
  relatedLinks: Array<{ href: string; label: string }>
  priority?: number
  changeFrequency?: 'weekly' | 'monthly'
}

export const seoPages: Record<string, SeoPageConfig> = {
  home: {
    path: '/',
    title: siteConfig.tagline,
    description: siteConfig.description,
    primaryKeyword: 'AI research proposal writer',
    h1: 'Write a research proposal with Ask Prof Z',
    relatedLinks: [
      {
        href: '/ai-research-proposal-writer',
        label: 'AI research proposal writer',
      },
      { href: '/resources', label: 'Research proposal resources' },
      { href: '/#pricing', label: 'Pricing' },
    ],
    priority: 1,
    changeFrequency: 'weekly',
  },
  aiWriter: {
    path: '/ai-research-proposal-writer',
    title: 'AI Research Proposal Writer — Ask Prof Z',
    description:
      'Write research proposals with Ask Prof Z. Structured AI drafting, OpenAlex Library, RAG, citation integrity, and DOCX/PDF/PPTX export. Free plan, no credit card.',
    primaryKeyword: 'AI research proposal writer',
    h1: 'AI research proposal writer for students and researchers',
    relatedLinks: [
      {
        href: '/openalex-literature-review',
        label: 'OpenAlex literature review',
      },
      {
        href: '/how-to-write-a-research-proposal',
        label: 'How to write a research proposal',
      },
      { href: '/rflowz-vs-chatgpt', label: 'RflowZ vs ChatGPT' },
      { href: '/#pricing', label: 'Pricing' },
      { href: '/about', label: 'About RflowZ' },
    ],
  },
  openAlex: {
    path: '/openalex-literature-review',
    title: 'OpenAlex Literature Review with RAG Grounding',
    description:
      'Search OpenAlex, attach sources in your RflowZ Library, and synthesize literature with RAG plus citation integrity checks before export.',
    primaryKeyword: 'OpenAlex literature review',
    h1: 'OpenAlex literature review with RAG',
    relatedLinks: [
      {
        href: '/ai-research-proposal-writer',
        label: 'AI research proposal writer',
      },
      {
        href: '/how-to-write-a-research-proposal',
        label: 'How to write a research proposal',
      },
      { href: '/thesis-proposal', label: 'Thesis proposal' },
      { href: '/#pricing', label: 'Pricing' },
      { href: '/about', label: 'About RflowZ' },
    ],
  },
  howTo: {
    path: '/how-to-write-a-research-proposal',
    title: 'How to Write a Research Proposal (Step-by-Step)',
    description:
      'Learn how to write a research proposal: problem, literature, questions, methods, framework, and export. Follow the steps in RflowZ with Ask Prof Z and OpenAlex.',
    primaryKeyword: 'how to write a research proposal',
    h1: 'How to write a research proposal',
    relatedLinks: [
      {
        href: '/ai-research-proposal-writer',
        label: 'AI research proposal writer',
      },
      { href: '/thesis-proposal', label: 'Thesis proposal' },
      {
        href: '/openalex-literature-review',
        label: 'OpenAlex literature review',
      },
      { href: '/#pricing', label: 'Pricing' },
      { href: '/about', label: 'About RflowZ' },
    ],
  },
  thesis: {
    path: '/thesis-proposal',
    title: 'Thesis & Dissertation Proposal Tool',
    description:
      'Write master’s and PhD thesis proposals with Ask Prof Z, OpenAlex Library search, RAG literature, structured sections, and DOCX/PDF export. Start free.',
    primaryKeyword: 'thesis proposal',
    h1: 'Thesis and dissertation proposal writing with RflowZ',
    relatedLinks: [
      {
        href: '/how-to-write-a-research-proposal',
        label: 'How to write a research proposal',
      },
      {
        href: '/ai-research-proposal-writer',
        label: 'AI research proposal writer',
      },
      { href: '/rflowz-vs-chatgpt', label: 'RflowZ vs ChatGPT' },
      { href: '/#pricing', label: 'Pricing' },
      { href: '/about', label: 'About RflowZ' },
    ],
  },
  vsChatgpt: {
    path: '/rflowz-vs-chatgpt',
    title: 'RflowZ vs ChatGPT for Research Proposals',
    description:
      'Compare RflowZ and ChatGPT for research proposals: structured workflow, OpenAlex Library, RAG, citation integrity, and DOCX/PDF/PPTX export.',
    primaryKeyword: 'ChatGPT research proposal',
    h1: 'RflowZ vs ChatGPT for research proposals',
    relatedLinks: [
      {
        href: '/ai-research-proposal-writer',
        label: 'AI research proposal writer',
      },
      {
        href: '/openalex-literature-review',
        label: 'OpenAlex literature review',
      },
      { href: '/thesis-proposal', label: 'Thesis proposal' },
      { href: '/#pricing', label: 'Pricing' },
      { href: '/about', label: 'About RflowZ' },
    ],
  },
  about: {
    path: '/about',
    title: 'About RflowZ',
    description:
      'RflowZ is an AI research proposal platform for students and researchers — Ask Prof Z, OpenAlex Library, RAG, citation integrity, and document export.',
    primaryKeyword: 'RflowZ',
    h1: 'About RflowZ',
    relatedLinks: [
      { href: '/contact', label: 'Contact' },
      { href: '/resources', label: 'Resources' },
      { href: '/#pricing', label: 'Pricing' },
    ],
    priority: 0.6,
  },
  contact: {
    path: '/contact',
    title: 'Contact RflowZ Support',
    description:
      'Contact RflowZ support at support@rflowz.com for product questions, billing, or account help. Start a free proposal anytime on the app.',
    primaryKeyword: 'RflowZ contact',
    h1: 'Contact RflowZ',
    relatedLinks: [
      { href: '/about', label: 'About RflowZ' },
      { href: '/terms-and-policies', label: 'Terms & policies' },
      { href: '/#faq', label: 'FAQ' },
    ],
    priority: 0.6,
  },
  resources: {
    path: '/resources',
    title: 'Research Proposal Resources',
    description:
      'Guides and tools for research proposals: AI writing, OpenAlex literature review, thesis proposals, ChatGPT comparisons, and how-to steps with RflowZ.',
    primaryKeyword: 'research proposal resources',
    h1: 'Research proposal resources',
    relatedLinks: [
      {
        href: '/ai-research-proposal-writer',
        label: 'AI research proposal writer',
      },
      {
        href: '/how-to-write-a-research-proposal',
        label: 'How to write a research proposal',
      },
      {
        href: '/openalex-literature-review',
        label: 'OpenAlex literature review',
      },
      { href: '/#pricing', label: 'Pricing' },
      { href: '/about', label: 'About RflowZ' },
    ],
    priority: 0.85,
  },
  terms: {
    path: '/terms-and-policies',
    title: 'Terms and Policies',
    description:
      'RflowZ terms of service, privacy, acceptable use, pricing notes, and academic integrity policies for the research proposal platform.',
    primaryKeyword: 'RflowZ terms',
    h1: 'Terms and Policies',
    relatedLinks: [
      { href: '/contact', label: 'Contact support' },
      { href: '/about', label: 'About RflowZ' },
    ],
    priority: 0.5,
  },
}

export function buildPageMetadata(page: SeoPageConfig): Metadata {
  const url = `${siteConfig.url}${page.path === '/' ? '' : page.path}`

  return {
    title: page.title,
    description: page.description,
    keywords: [page.primaryKeyword, ...siteConfig.keywords],
    alternates: { canonical: page.path },
    openGraph: {
      title: `${page.title} | ${siteConfig.name}`,
      description: page.description,
      url,
      type: 'website',
      siteName: siteConfig.name,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${page.title} | ${siteConfig.name}`,
      description: page.description,
      images: [siteConfig.ogImage],
    },
  }
}

export const indexableSeoPaths = Object.values(seoPages)
  .filter((page) => page.path !== '/')
  .map((page) => ({
    path: page.path,
    priority: page.priority ?? 0.8,
    changeFrequency: page.changeFrequency ?? ('monthly' as const),
  }))
