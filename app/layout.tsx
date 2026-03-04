import './globals.css'
import { Oswald, Source_Sans_3 } from 'next/font/google'
import ApolloProvider from './components/providers/ApolloProvider'
// DEMO MODE: Remove this import and <DemoModeBanner /> below for production-only builds
import { DemoModeBanner } from './components/DemoModeBanner'
import { Viewport, type Metadata } from 'next'

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL
  if (explicit) return explicit.replace(/\/$/, '')
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`
  const port = process.env.PORT || '3000'
  const host = process.env.HOST || 'localhost'
  return `http://${host}:${port}`
}

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: 'Blackstone Brewing Co.',
    template: `%s | Blackstone Brewing Co.`
  },
  description: 'At Blackstone Brewing Co., we believe great beer starts with quality ingredients, time-honored techniques, and a relentless passion for flavor. Visit our taproom.',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/icon', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    apple: [
      { url: '/apple-icon', sizes: '180x180', type: 'image/png' }
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${oswald.variable} ${sourceSans.variable}`}>
      <body className="font-sans bg-primary-950 text-amber-100 antialiased">
        <DemoModeBanner />
        <ApolloProvider>
          {children}
        </ApolloProvider>
      </body>
    </html>
  )
}
