import type { Metadata } from 'next'
import './globals.css'
import PageShell from '@/components/layout/PageShell'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Anuja Nimmagadda - Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <PageShell>{children}</PageShell>
      </body>
    </html>
  )
}

