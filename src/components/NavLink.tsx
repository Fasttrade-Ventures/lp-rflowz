import Link from 'next/link'

export function NavLink({
  href,
  children,
  ...rest
}: React.ComponentPropsWithoutRef<typeof Link>) {
  return (
    <Link
      href={href}
      className="inline-flex min-h-11 items-center rounded-lg px-2 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
      {...rest}
    >
      {children}
    </Link>
  )
}
