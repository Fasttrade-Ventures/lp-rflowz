import Image from 'next/image'

export function Logo(props: React.ComponentPropsWithoutRef<'svg'>) {
  return <Image src="/rflowz-black.png" alt="Logo" width={100} height={100} />
}
