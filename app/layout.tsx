import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import RootProvider from '@/provider/root'
import CursorFollower from '@/components/cursor'
import Splash from '@/components/splash'
import PageAnimatePresence from '@/components/HOC/pageAnimatePresence'

const font = Montserrat({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

export const metadata: Metadata = {
  title: `Hoang Son Pham - Front-end Developer`,
  description: 'Experienced Web Developer adept in all stages of advanced web development.',
  metadataBase: new URL('https://holasunday.dev'),
  openGraph: {
    title: `Hoang Son Pham - Front-end Developer`,
    description: 'Experienced Web Developer adept in all stages of advanced web development.',
    images: [
      {
        url: './thumb.png',
      },
    ],
    type: 'website',
    url: 'https://holasunday.dev',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Hoang Son Pham - Front-end Developer`,
    description: 'Experienced Web Developer adept in all stages of advanced web development.',
    images: ['./thumb.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className='unscrollable'>
      <body className={`bg-white  ${font.className}`}>
        <RootProvider>
          <Splash />
          <PageAnimatePresence>{children}</PageAnimatePresence>
        </RootProvider>
        <CursorFollower />
      </body>
    </html>
  )
}
