import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/../components/Navbar'
import Footer from '@/../components/Footer'
import { LanguageProvider } from '../contexts/LanguageContext'
import { ThemeProvider } from '../contexts/ThemeContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Servanin Tony Portfolio',
  description: 'A showcase of my work and skills as a frontend developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.className} scroll-pt-20`}>
      <LanguageProvider>
        <ThemeProvider>
          <body className="bg-gray-900 text-gray-100 min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow container mx-auto px-4 py-20">
              {children}
            </main>
            <Footer />
          </body>
        </ThemeProvider>
      </LanguageProvider>
    </html>
  )
}