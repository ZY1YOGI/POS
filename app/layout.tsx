import './globals.css'
import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Sidebar } from '@/components/sidebar'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Hi',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className='light' data-theme='light'>
      <body className='antialiased bg-body-light dark:bg-body-dark'>
        <Header />
        <Sidebar />
        <main className="min-h-screen mt-5 ml-20">
          {children}
        </main>
      </body>
    </html>
  )
}
