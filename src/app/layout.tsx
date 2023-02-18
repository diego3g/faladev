import '../styles/global.css'

import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

import { Menu } from '@/components/Menu'
import { Header } from '@/components/Header'
import { Explorer } from '@/components/Explorer'
import { Footer } from '@/components/Footer'

export const metadata = {
  title: {
    default: 'Diego Fernandes',
    template: '%s | Diego Fernandes'
  },
  robots: {
    index: true,
    follow: true,
  },
  description: "CTO at @Rocketseat. Passionate about education and changing people's lives through programming.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <head />
      <body className="bg-[#7F7FD5] bg-app overflow-hidden">
        <div className="h-full flex items-center justify-center p-8">
          <div className="h-full bg-[#232135] overflow-hidden border border-[#72707D] w-full max-w-[1480px] shadow-md shadow-black/20 rounded-lg grid grid-rows-layout">
            <Header />

            <div className="flex items-start">
              <Menu />
              <Explorer />

              <div className="flex-1 h-full relative">{children}</div>
            </div>

            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
