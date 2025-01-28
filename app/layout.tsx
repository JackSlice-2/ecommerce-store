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
import Head from 'next/head'

const font = Urbanist({ subsets: ['latin'] })
const content = process.env.REACT_APP_INFORMATION_API;

export async function generateMetadata(): Promise<Metadata> {
  // Fetch the info data
  const info = content ? await getInfo(content) : null;

  return {
    title: info ? info.name : 'Empty',
    description: info ? info.name : 'Empty',
    icons: `${info ? info.icon : '/images/favicon.svg'}`,
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const info = content ? await getInfo(content) : null;

  const faviconUrl = info ? info.icon : '/images/favicon.svg';

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <Head>
            <link rel="icon" href={faviconUrl} />
          </Head>
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
