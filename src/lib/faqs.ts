export type FaqItem = {
  question: string
  answer: string
}

export const faqs: FaqItem[] = [
  {
    question: 'What is RflowZ, and how does it help with research proposals?',
    answer:
      'RflowZ is an AI-powered research proposal platform for students, academics, and research teams. Use Ask Prof Z to draft grounded sections, search OpenAlex and policy/media sources in your Library, synthesize literature with RAG, and export to DOCX, PDF, or PPTX with citation integrity checks.',
  },
  {
    question: 'How does the Source Library and OpenAlex search work?',
    answer:
      'Search academic papers via OpenAlex and add policy or media sources in your Library. Attach verified sources to literature sub-topics, then Ask Prof Z synthesizes from those sources using RAG grounding so citations stay tied to what you selected.',
  },
  {
    question: 'Is there a free plan?',
    answer:
      'Yes. Every new account starts on the Free plan with 1 proposal per month, Unlimited Ask Prof Z, RAG for up to 10 documents, and 5 watermarked DOCX/PDF exports per month — no credit card required.',
  },
  {
    question: 'How is RflowZ different from ChatGPT for research proposals?',
    answer:
      'RflowZ is built for structured research proposals: section workflows, OpenAlex Library search, RAG-grounded Ask Prof Z, citation integrity checks before export, and DOCX/PDF/PPTX output. General chat tools do not provide that end-to-end proposal pipeline.',
  },
  {
    question: 'What is RAG grounding on RflowZ?',
    answer:
      'RAG (retrieval-augmented generation) grounds Ask Prof Z on sources you attach from your Library. On Free, RAG is limited to 10 documents per month; paid plans include unlimited RAG. Citation integrity checks help catch unresolved or mismatched references before you export.',
  },
  {
    question: 'Do paid plans include a free trial?',
    answer:
      'Yes. Paid plans include a 5-day free trial so you can explore premium features before subscribing. If you do not upgrade after the trial, your account returns to the Free plan limits.',
  },
  {
    question: 'Are TreZ and TAM available now?',
    answer:
      'TreZ (thematic review) and TAM (transcript analysis) are listed on higher plans and marked coming soon. Core proposal writing, Ask Prof Z, OpenAlex Library, RAG, and exports are available today.',
  },
  {
    question: 'Can I cancel or change my subscription plan at any time?',
    answer:
      'Yes. You can cancel or change your subscription at any time from your account settings. If you cancel, your access to premium features continues until the end of your billing cycle.',
  },
]

export const faqColumns = [
  faqs.slice(0, 3),
  faqs.slice(3, 6),
  faqs.slice(6, 8),
]
