import './globals.scss'
import type { Metadata } from 'next'
import Header from '../components/header'


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
        <header role="navigation" className="navigation">
            <Header></Header>
        </header>
        {children}
      </body>
    </html>
  )
}
