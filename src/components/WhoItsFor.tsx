import { Container } from '@/components/Container'

const audiences = [
  {
    title: 'Students',
    description:
      'Undergraduate and postgraduate students writing thesis, dissertation, or grant proposals with guided templates and AI support.',
  },
  {
    title: 'Researchers',
    description:
      'Academic researchers who need structured proposals, literature review support, and fast citation management via Mendeley.',
  },
  {
    title: 'Supervisors & teams',
    description:
      'Supervisors and research groups preparing consistent, well-formatted proposals ready for DOCX, PDF, or PPTX export.',
  },
]

export function WhoItsFor() {
  return (
    <section
      id="who-its-for"
      aria-labelledby="who-its-for-title"
      className="border-y border-slate-200 bg-white py-20 sm:py-24"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="who-its-for-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Built for researchers at every stage
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            RflowZ is an AI-powered research proposal platform for students,
            academics, and research teams. Create structured proposals, import
            Mendeley citations, and export submission-ready documents.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3"
        >
          {audiences.map((audience) => (
            <li
              key={audience.title}
              className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200"
            >
              <h3 className="font-display text-lg text-slate-900">
                {audience.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {audience.description}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
