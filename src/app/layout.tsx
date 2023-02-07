import '../styles/global.css'

import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

import { Menu } from '@/components/Menu'
import { Header } from '@/components/Header'
import { Explorer } from '@/components/Explorer'

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
      <body className="bg-[#7F7FD5] bg-app">
        <div className="z-10 relative h-screen p-20 flex items-center justify-center">
          <div className="bg-[#232135] border border-[#72707D] w-full max-w-[1480px] aspect-video shadow-md shadow-black/20 rounded-lg grid grid-rows-layout">
            <Header />

            <div className="grid grid-cols-editor max-h-full">
              <Menu />
              <Explorer />

              <div className="h-full relative">
                {children}
              </div>
            </div>

            <div className="text-sm px-3 text-[#8F8CA8] flex items-center" />
          </div>
        </div>
      </body>
    </html>
  )
}
