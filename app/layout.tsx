import Footer from '@/components/footer'
import './globals.css'
import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import Navbar from '@/components/navbar'
import ModalProvider from '@/providers/modal-provider'
import ToastProvider from '@/providers/toast-provider'
import { ThemeProvider } from '@/providers/theme-provider'
import getInfo from '@/actions/get-info'
import ClientOnly from '@/components/ClientOnly'

const font = Urbanist({ subsets: ['latin'] })
const content = process.env.REACT_APP_INFORMATION_API;

export const metadata: Metadata = {
  title: 'Fashion Store',
  description: 'Fashion Store',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const info = content ? await getInfo(content) : null;

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ThemeProvider attribute='class' 
            defaultTheme='system' enableSystem>
          <ModalProvider />
          <ToastProvider />
          <Navbar />
          {children}
          </ThemeProvider>
          <Footer data={info}/>
        </ClientOnly>
      </body>
    </html>
  )
}