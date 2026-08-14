'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import {
  Popover,
  PopoverButton,
  PopoverBackdrop,
  PopoverPanel,
} from '@headlessui/react'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Magnetic } from '@/components/motion/Magnetic'
import { NavLink } from '@/components/NavLink'
import { cta } from '@/lib/cta'
import Image from 'next/image'

function MobileNavLink({
  href,
  children,
  ...rest
}: {
  href: string
  children: React.ReactNode
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <PopoverButton
      as={Link}
      href={href}
      className="block min-h-11 w-full px-3 py-3 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
      {...rest}
    >
      {children}
    </PopoverButton>
  )
}

function MobileNavIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          'origin-center transition',
          open && 'scale-90 opacity-0',
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          'origin-center transition',
          !open && 'scale-90 opacity-0',
        )}
      />
    </svg>
  )
}

function MobileNavigation() {
  return (
    <Popover>
      <PopoverButton
        className="relative z-10 flex h-11 w-11 items-center justify-center focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
      >
        {({ open }) => (
          <>
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
            <MobileNavIcon open={open} />
          </>
        )}
      </PopoverButton>
      <PopoverBackdrop
        transition
        className="fixed inset-0 bg-slate-300/50 duration-150 data-[closed]:opacity-0 data-[enter]:ease-out data-[leave]:ease-in"
      />
      <PopoverPanel
        transition
        className="absolute inset-x-0 top-full z-50 mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5 data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:duration-150 data-[leave]:duration-100 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <MobileNavLink href="/#secondary-features">Features</MobileNavLink>
        <MobileNavLink href="/#how-it-works">How it works</MobileNavLink>
        <MobileNavLink href="/#pricing" data-cta="header" data-cta-action="pricing">
          Pricing
        </MobileNavLink>
        <MobileNavLink href="/#faq">FAQ</MobileNavLink>
        <MobileNavLink href="/resources">Resources</MobileNavLink>
        <MobileNavLink href="/about">About</MobileNavLink>
        <MobileNavLink href="/contact">Contact</MobileNavLink>
        <hr className="m-2 border-slate-300/40" />
        <MobileNavLink href={cta.loginHref} data-cta="header" data-cta-action="login">
          Sign in
        </MobileNavLink>
      </PopoverPanel>
    </Popover>
  )
}

export function Header({ cinematic = false }: { cinematic?: boolean }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    if (!cinematic) {
      return
    }

    function onScroll() {
      setScrolled(window.scrollY > 16)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [cinematic])

  const registerButton = (
    <Button
      href={cta.registerHref}
      color="blue"
      data-cta="header"
      data-cta-action="register"
      aria-label={cta.primaryLabel}
    >
      {cta.primaryShort}
    </Button>
  )

  return (
    <header
      className={clsx(
        cinematic
          ? 'sticky top-0 z-40 py-4 transition-[padding,background-color,box-shadow] duration-300 sm:py-5'
          : 'py-6 sm:py-8 lg:py-10',
        cinematic && scrolled
          ? 'border-b border-slate-200/80 bg-white/85 shadow-sm backdrop-blur-md'
          : cinematic
            ? 'bg-transparent'
            : null,
      )}
    >
      <Container>
        <nav
          className="relative z-50 flex items-center justify-between gap-3"
          aria-label="Primary"
        >
          <div className="flex min-w-0 items-center lg:gap-x-12">
            <Link href="/" aria-label="RflowZ home" className="shrink-0">
              <Image
                src="/rflowz-black.png"
                alt=""
                width={100}
                height={100}
                className="h-8 w-auto sm:h-10"
              />
            </Link>
            <div className="hidden lg:flex lg:gap-x-6">
              <NavLink href="/#secondary-features">Features</NavLink>
              <NavLink href="/#how-it-works">How it works</NavLink>
              <NavLink href="/#pricing" data-cta="header" data-cta-action="pricing">
                Pricing
              </NavLink>
              <NavLink href="/resources">Resources</NavLink>
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-x-3 sm:gap-x-5 lg:gap-x-8">
            <div className="hidden lg:block">
              <NavLink href={cta.loginHref} data-cta="header" data-cta-action="login">
                Sign in
              </NavLink>
            </div>
            {cinematic ? (
              <Magnetic>{registerButton}</Magnetic>
            ) : (
              registerButton
            )}
            <div className="-mr-1 lg:hidden">
              <MobileNavigation />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  )
}
