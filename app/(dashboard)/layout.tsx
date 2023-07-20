import { Header, Sidebar } from '@/components'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <Sidebar />
      <main className='min-h-screen mt-5 ml-16'>
        {children}
      </main>
    </>
  )
}
