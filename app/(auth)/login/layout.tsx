import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login Page'

}

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className='h-screen flex items-center justify-center'>
      {children}
    </main>
  )
}
