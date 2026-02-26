import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'iStore - Produtos Apple Premium',
  description: 'A melhor loja de produtos Apple. MacBooks, iPhones, iPads, AirPods e Apple Watch com os melhores precos e garantia.',
  keywords: ['Apple', 'iPhone', 'MacBook', 'iPad', 'AirPods', 'Apple Watch', 'loja apple'],
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} font-sans antialiased`}>
        <SiteHeader />
        <main className="min-h-screen">{children}</main>
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  )
}
