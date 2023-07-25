import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'e-padai',
  description: 'One Stop solution for all your Distance Learning Needs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
