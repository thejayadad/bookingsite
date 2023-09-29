import Provider from '@/SessionProvider'
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

      <Provider>
        <Navbar />
      {children}

      </Provider>
      </body>
    </html>
  )
}
