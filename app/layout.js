import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import Navbar from '@/components/Heading/Navbar'
import Footersection from '@/components/Footer/Footersection'
// import {SessionProvider} from 'next-auth'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className={inter.className}>
      {/* <SessionProvider> */}
      <Providers>
      <div className='flex flex-col px-5 md:px-24 sm:px-10 bg-black' >
        <div className='h-15 sm:h-20 md:h-24 '>
        <Navbar/>
        </div>
      {children}
        <div className='bg-cream h-20 mt-5 py-5 md:py-10 sm:py-10 '>
          <Footersection/>
        </div>
      </div>
      </Providers>
      {/* </SessionProvider> */}
      </body>
  </html>
  )
}
