import './index.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Home',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className='light' data-theme='light'>
      <body className='antialiased bg-body-light dark:bg-body-dark dark:text-white'>
        {children}
      </body>
    </html>
  )
}
