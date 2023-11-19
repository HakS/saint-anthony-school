import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Escuela Saint Anthony School Panamá',
  description: 'Escuela Saint Anthony School Panamá',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`subpixel-antialiased ${inter.className}`}>{children}</body>
    </html>
  )
}
