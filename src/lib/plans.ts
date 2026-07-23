export type PlanRow = {
  name: string
  monthly: string
  annual: string
  proposals: string
  exports: string
  watermark: string
  pptx: string
}

export const planComparison: PlanRow[] = [
  {
    name: 'Free',
    monthly: '$0',
    annual: '$0',
    proposals: '2 / month',
    exports: '2 / month',
    watermark: 'Yes',
    pptx: 'No',
  },
  {
    name: 'Starter',
    monthly: '$3.99',
    annual: '$3.29',
    proposals: '10 / month',
    exports: '30 / month',
    watermark: 'No',
    pptx: 'No',
  },
  {
    name: 'Standard',
    monthly: '$5.99',
    annual: '$4.99',
    proposals: '30 / month',
    exports: '50 / month',
    watermark: 'No',
    pptx: 'Yes',
  },
  {
    name: 'Professional',
    monthly: '$9.99',
    annual: '$7.99',
    proposals: 'Unlimited',
    exports: 'Unlimited',
    watermark: 'No',
    pptx: 'Yes',
  },
]
