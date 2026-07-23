import { Container } from '@/components/Container'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="bg-slate-50">
      <Container>
        <div className="py-16">
          <Image
            className="mx-auto h-10 w-auto"
            src="/rflowz-black.png"
            alt="Logo"
            width={100}
            height={100}
          />
        </div>
        <div className="mx-auto flex items-center justify-center border-t border-slate-400/10 py-10">
          <p className="text-center text-sm text-slate-500">
            Copyright &copy; {new Date().getFullYear()} RflowZ. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
