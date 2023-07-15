import './index.css'
import type { Metadata } from 'next'

import { Header } from '@/components/header'
import { Sidebar } from '@/components/sidebar'


export const metadata: Metadata = {
  title: 'Home',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className='light' data-theme='light'>
      <body className='antialiased bg-body-light dark:bg-body-dark dark:text-white'>
        <Header />
        <Sidebar />
        <div className='min-h-screen mt-5 ml-16'>
          {children}
        </div>
      </body>
    </html>
  )
}
