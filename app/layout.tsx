
import type { Metadata } from 'next'
import { Quicksand } from 'next/font/google'
import './globals.css'
import Sidebar from '@/components/header'

// Initialize the Quicksand font
const quicksand = Quicksand({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-quicksand',
})

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <div className="flex">
          {/* Sidebar with z-index to ensure it's above other content */}
          <div className="fixed inset-y-0 left-0 z-50">
            <Sidebar />
          </div>
          
          {/* Main content area with left padding to account for sidebar */}
          <main className="flex-1 ml-64 w-full"
           style={{
            backgroundImage: 'url(https://img.freepik.com/free-vector/abstract-watercolor-marble-background_91008-185.jpg?ga=GA1.1.1562725796.1744005327&semt=ais_country_boost&w=740)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}>
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}