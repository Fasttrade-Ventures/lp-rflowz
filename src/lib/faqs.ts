export type FaqItem = {
  question: string
  answer: string
}

export const faqs: FaqItem[] = [
  {
    question: 'What is RflowZ, and how does it help with research proposals?',
    answer:
      'RflowZ is a web application designed to simplify the process of writing research proposals. It offers AI-powered writing assistance, customizable templates, and seamless citation management by integrating with Mendeley, helping you focus more on your research and less on formatting or tedious tasks.',
  },
  {
    question: 'How does the Mendeley citation import work?',
    answer:
      'You can import your references from Mendeley directly into RflowZ with just a few clicks. Simply connect your Mendeley account, and RflowZ will pull in your citations, making it easier to organize and insert them into your proposals.',
  },
  {
    question: 'Is there a free plan?',
    answer:
      'Yes. Every new account starts on the Free plan with up to 2 proposal generations, limited AI writing assistance, and 2 watermarked DOCX/PDF exports per month — no credit card required.',
  },
  {
    question: 'Do paid plans include a free trial?',
    answer:
      'Yes. Paid plans include a 5-day free trial so you can explore premium features before subscribing. If you do not upgrade after the trial, your account returns to the Free plan limits.',
  },
  {
    question: 'How secure is my research data on RflowZ?',
    answer:
      'We take data security seriously. Your research data, proposals, and citations are stored using robust security measures. We never share your information with third parties without your consent, ensuring that your work remains private and protected.',
  },
  {
    question: 'Can I cancel or change my subscription plan at any time?',
    answer:
      "Yes. You can cancel or change your subscription at any time from your account settings. If you cancel, your access to premium features continues until the end of your billing cycle.",
  },
]

export const faqColumns = [
  faqs.slice(0, 2),
  faqs.slice(2, 4),
  faqs.slice(4, 6),
]
