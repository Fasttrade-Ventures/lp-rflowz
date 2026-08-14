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
      'Yes. Starter is the live paid plan at $3.99 per month after a 5-day trial. Standard ($4.99) and Professional ($7.99) are listed as coming soon. Those monthly USD rates match the Yearly view of in-app plans at app.rflowz.com/subscription (August 2026). If you do not continue after the trial, your account stays on Free limits. Choose monthly or annual billing in the app; this site does not promise a cheaper annual package.',
  },
  {
    question: 'Are TreZ and TAM available now?',
    answer:
      'TreZ (thematic review) and TAM (transcript analysis) are listed on higher plans and marked coming soon. Core proposal writing, Ask Prof Z, OpenAlex Library, RAG, and exports are available today.',
  },
  {
    question: 'What happens after I create a free account?',
    answer:
      'You land in the RflowZ app on the Free plan — no credit card. Start a proposal with Ask Prof Z onboarding (language and research type), then use the Library, RAG grounding, and citation checks. You can stay on Free or start a 5-day trial of Starter from inside the app.',
  },
  {
    question: 'Does RflowZ replace academic integrity and my judgement?',
    answer:
      'No. You remain responsible for the accuracy, originality, and ethics of your submission. Citation integrity checks help flag unresolved or mismatched references before export; they do not certify that a proposal is publication- or examination-ready.',
  },
  {
    question: 'Can I cancel or change my subscription plan at any time?',
    answer:
      'Yes. You can cancel or change your RflowZ subscription at any time from your account settings. If you cancel, access to premium features continues until the end of the billing cycle.',
  },
  {
    question: 'Where does RflowZ operate?',
    answer:
      'RflowZ is a web SaaS at https://app.rflowz.com. The marketing site is https://rflowz.com with locale en-MY. Support is email at support@rflowz.com. This site does not publish a public street address or walk-in office.',
  },
  {
    question: "What are RflowZ's current limitations?",
    answer:
      'RflowZ does not replace a supervisor or certify academic quality. TreZ and TAM are coming soon, not live. Mendeley is not a current integration. PPTX is listed on Standard and Professional, which you cannot subscribe to yet. As of August 2026, listed paid prices on this site were not confirmed against the signed-in app subscription page.',
  },
]

export const faqColumns = [
  faqs.slice(0, 4),
  faqs.slice(4, 8),
  faqs.slice(8, 12),
]
