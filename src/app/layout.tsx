import './globals.scss'
import type { Metadata } from 'next'
import Header from '../components/header'
import { DoFArtistConfig } from '../config/artists.config';
import { getArtistCreditStyles } from '../lib/tools'


export const metadata: Metadata = {
  title: 'Dream of Five',
  description: 'A FE8 Romhack.',
  manifest: '/mugs/characters/renair.png'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="en">
      <body style={
        getArtistCreditStyles(DoFArtistConfig)
      }>
        <header role="navigation" className="navigation">
          <Header></Header>
        </header>
        {children}
      </body>
    </html>
  )
}
