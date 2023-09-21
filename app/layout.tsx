import NavBar from '@/components/NavBar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter, Caudex } from 'next/font/google'
import Providers from './providers'
import NavTab from '@/components/NavTab'


const inter = Inter({ subsets: ['latin'], variable:'--font-inter', weight: ['300','400', '700'] })
const caudex = Caudex({ subsets: ['latin'], variable:'--font-caudex', weight: ['400', '700'] })


export const metadata: Metadata = {
  title: 'MyStory',
  description: 'Your Legacy, Their Treasure',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${caudex.variable} ${inter.variable}`}>
        <body>
          <Providers>
            <NavBar/>
            {children}
            <NavTab/>
          </Providers>
        </body>
      </html>
  )
}
