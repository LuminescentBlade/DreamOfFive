import './globals.scss'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Dream of Five',
  description: 'A Fire Emblem Original Mod',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header role="navigation">
          <Link href="/">Home</Link>
          <Link href="/characters">Characters</Link>
        </header>
        {children}
      </body>
    </html>
  )
}
