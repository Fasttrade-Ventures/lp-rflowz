import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { planComparison } from '@/lib/plans'

function SwirlyDoodle(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 281 40"
      preserveAspectRatio="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M240.172 22.994c-8.007 1.246-15.477 2.23-31.26 4.114-18.506 2.21-26.323 2.977-34.487 3.386-2.971.149-3.727.324-6.566 1.523-15.124 6.388-43.775 9.404-69.425 7.31-26.207-2.14-50.986-7.103-78-15.624C10.912 20.7.988 16.143.734 14.657c-.066-.381.043-.344 1.324.456 10.423 6.506 49.649 16.322 77.8 19.468 23.708 2.65 38.249 2.95 55.821 1.156 9.407-.962 24.451-3.773 25.101-4.692.074-.104.053-.155-.058-.135-1.062.195-13.863-.271-18.848-.687-16.681-1.389-28.722-4.345-38.142-9.364-15.294-8.15-7.298-19.232 14.802-20.514 16.095-.934 32.793 1.517 47.423 6.96 13.524 5.033 17.942 12.326 11.463 18.922l-.859.874.697-.006c2.681-.026 15.304-1.302 29.208-2.953 25.845-3.07 35.659-4.519 54.027-7.978 9.863-1.858 11.021-2.048 13.055-2.145a61.901 61.901 0 0 0 4.506-.417c1.891-.259 2.151-.267 1.543-.047-.402.145-2.33.913-4.285 1.707-4.635 1.882-5.202 2.07-8.736 2.903-3.414.805-19.773 3.797-26.404 4.829Zm40.321-9.93c.1-.066.231-.085.29-.041.059.043-.024.096-.183.119-.177.024-.219-.007-.107-.079ZM172.299 26.22c9.364-6.058 5.161-12.039-12.304-17.51-11.656-3.653-23.145-5.47-35.243-5.576-22.552-.198-33.577 7.462-21.321 14.814 12.012 7.205 32.994 10.557 61.531 9.831 4.563-.116 5.372-.288 7.337-1.559Z"
      />
    </svg>
  )
}

function CheckIcon({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      aria-hidden="true"
      className={clsx('h-5 w-5 flex-none', className)}
      viewBox="0 0 20 20"
      fill="currentColor"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function XIcon({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      aria-hidden="true"
      className={clsx('h-5 w-5 flex-none', className)}
      viewBox="0 0 20 20"
      fill="currentColor"
      {...props}
    >
      <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
    </svg>
  )
}

function Plan({
  name,
  price,
  description,
  href,
  features,
  notincludetitle,
  notinclude,
  featured = false,
  isFree = false,
}: {
  name: string
  price: string
  description: string
  href: string
  features: Array<string>
  notincludetitle: string
  notinclude: Array<string>
  featured?: boolean
  isFree?: boolean
}) {
  return (
    <article
      className={clsx(
        'relative flex h-full flex-col rounded-3xl p-6 sm:p-8',
        featured
          ? 'bg-blue-600 shadow-xl shadow-blue-900/30 ring-2 ring-blue-400 lg:scale-[1.02]'
          : 'bg-slate-800/60 ring-1 ring-slate-700/80',
      )}
    >
      {featured ? (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-600">
          Recommended
        </span>
      ) : null}

      <div className="space-y-4">
        <div>
          <h3 className="font-display text-xl text-white">{name}</h3>
          {description ? (
            <p
              className={clsx(
                'mt-2 text-sm leading-6',
                featured ? 'text-blue-100' : 'text-slate-400',
              )}
            >
              {description}
            </p>
          ) : null}
        </div>

        <div className="border-b border-white/10 pb-6">
          <p className="font-display text-4xl font-light tracking-tight text-white sm:text-5xl">
            {price}
            {!isFree ? (
              <span
                className={clsx(
                  'ml-1 text-lg font-normal',
                  featured ? 'text-blue-100' : 'text-slate-400',
                )}
              >
                /mo
              </span>
            ) : null}
          </p>
          {!isFree ? (
            <p
              className={clsx(
                'mt-1 text-sm',
                featured ? 'text-blue-100' : 'text-slate-400',
              )}
            >
              Billed annually
            </p>
          ) : (
            <p
              className={clsx(
                'mt-1 text-sm',
                featured ? 'text-blue-100' : 'text-slate-400',
              )}
            >
              No credit card required
            </p>
          )}
        </div>
      </div>

      <div className="mt-6 flex-1">
        <p
          className={clsx(
            'text-xs font-semibold uppercase tracking-wide',
            featured ? 'text-blue-100' : 'text-slate-400',
          )}
        >
          What&apos;s included
        </p>
        <ul role="list" className="mt-4 flex flex-col gap-y-3">
          {features.map((feature) => (
            <li
              key={feature}
              className={clsx(
                'flex gap-3 text-sm leading-6',
                featured ? 'text-white' : 'text-slate-200',
              )}
            >
              <CheckIcon
                className={featured ? 'text-blue-100' : 'text-emerald-400'}
              />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {notinclude.length > 0 ? (
          <div className="mt-6 border-t border-white/10 pt-6">
            {notincludetitle ? (
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                {notincludetitle}
              </p>
            ) : null}
            <ul role="list" className="mt-4 flex flex-col gap-y-2.5">
              {notinclude.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-6 text-slate-400"
                >
                  <XIcon className="text-slate-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>

      <Button
        href={href}
        variant={featured ? 'solid' : 'outline'}
        color="white"
        className="mt-8 w-full"
        aria-label={`Get started with the ${name} plan for ${price}`}
      >
        Get started
      </Button>
    </article>
  )
}

export function Pricing() {
  return (
    <section
      id="pricing"
      aria-label="Pricing"
      className="bg-slate-900 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-3xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            <span className="relative whitespace-nowrap">
              <SwirlyDoodle className="absolute left-0 top-1/2 h-[1em] w-full fill-blue-400" />
              <span className="relative">Choose Your Plan</span>
            </span>
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-400">
            Start free on signup, or choose a paid plan with monthly or yearly
            billing.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 xl:max-w-6xl xl:mx-auto xl:gap-10">
          <Plan
            isFree
            name="Free"
            price="Free"
            description="Get started with limited proposal generation and watermarked exports."
            href="https://app.rflowz.com/register"
            features={[
              'Up to 2 proposal generations per month',
              'Limited AI writing assistance',
              'Watermarked DOCX and PDF export',
              '1 basic template',
            ]}
            notincludetitle="Not included"
            notinclude={[
              'PowerPoint export',
              'Framework generator',
              'Collaboration',
              'Unwatermarked exports',
            ]}
          />

          <Plan
            name="Starter"
            price="$3.29"
            description="Perfect for beginners and occasional users getting started with research proposal formulation."
            href="https://app.rflowz.com/register"
            features={[
              'Access to basic proposal templates',
              'AI-guided research questions formulation',
              'Up to 10 proposal generations per month',
              'Email support',
              'Help center access',
            ]}
            notincludetitle="Not included"
            notinclude={[
              'AI-driven support for literature review structuring',
              'Priority proposal generation queue',
              'Advanced AI-guided proposal structure and referencing tools',
            ]}
          />

          <Plan
            featured
            name="Standard"
            price="$4.99"
            description="Ideal for academic professionals and regular researchers who need enhanced tools and support."
            href="https://app.rflowz.com/register"
            features={[
              'Access to all proposal templates',
              'AI-driven support for literature review structuring',
              'Up to 30 proposal generations per month',
              'PowerPoint (PPTX) export',
              'Email support',
              'Priority help center access',
              'Priority proposal generation queue',
            ]}
            notincludetitle="Not included"
            notinclude={[
              'Advanced AI-guided proposal structure and referencing tools',
            ]}
          />

          <Plan
            name="Professional"
            price="$7.99"
            description="Best for large-scale research projects and experienced researchers."
            href="https://app.rflowz.com/register"
            features={[
              'Unlimited proposal generations per month',
              'Advanced AI-guided proposal structure and referencing tools',
              'PowerPoint (PPTX) export',
              'Premium email and chat support',
              'Dedicated support for research methodologies',
              'Professional-grade proposal formatting tools',
            ]}
            notincludetitle=""
            notinclude={[]}
          />
        </div>

        <div className="mx-auto mt-16 max-w-5xl overflow-x-auto xl:max-w-6xl">
          <h3 className="text-center font-display text-xl text-white">
            Plan comparison
          </h3>
          <table className="mt-6 w-full min-w-[640px] border-collapse text-left text-sm text-slate-200">
            <caption className="sr-only">
              RflowZ pricing plan comparison by proposals, exports, watermark,
              and PPTX support
            </caption>
            <thead>
              <tr className="border-b border-slate-700">
                <th scope="col" className="px-4 py-3 font-semibold text-white">
                  Plan
                </th>
                <th scope="col" className="px-4 py-3 font-semibold text-white">
                  Monthly
                </th>
                <th scope="col" className="px-4 py-3 font-semibold text-white">
                  Annual
                </th>
                <th scope="col" className="px-4 py-3 font-semibold text-white">
                  Proposals
                </th>
                <th scope="col" className="px-4 py-3 font-semibold text-white">
                  Exports
                </th>
                <th scope="col" className="px-4 py-3 font-semibold text-white">
                  Watermark
                </th>
                <th scope="col" className="px-4 py-3 font-semibold text-white">
                  PPTX
                </th>
              </tr>
            </thead>
            <tbody>
              {planComparison.map((plan) => (
                <tr
                  key={plan.name}
                  className="border-b border-slate-800/80 even:bg-slate-800/30"
                >
                  <th
                    scope="row"
                    className="px-4 py-3 font-medium text-white"
                  >
                    {plan.name}
                  </th>
                  <td className="px-4 py-3">{plan.monthly}</td>
                  <td className="px-4 py-3">{plan.annual}/mo</td>
                  <td className="px-4 py-3">{plan.proposals}</td>
                  <td className="px-4 py-3">{plan.exports}</td>
                  <td className="px-4 py-3">{plan.watermark}</td>
                  <td className="px-4 py-3">{plan.pptx}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-slate-500">
          All paid plans shown at annual billing. Monthly billing is also
          available in the app.
        </p>
      </Container>
    </section>
  )
}
