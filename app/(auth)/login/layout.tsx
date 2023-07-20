import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Login',
}

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className='light' data-theme='light'>
      <body className='antialiased bg-body-light dark:bg-body-dark dark:text-white'>
        <main className='h-screen flex items-center justify-center'>
          {children}
        </main>
      </body>
    </html>
  )
}
