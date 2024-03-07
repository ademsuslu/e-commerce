import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

import 'bootstrap/dist/css/bootstrap.min.css'
import Navbars from './components/Navbar/Navbars'
import NavbarTop from './components/Navbar/NavbarTop'
import Footer from './components/Footer/Footer'
import { auth } from '../lib/auth'

export default async function RootLayout({ children }) {
  const session = await auth()
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <NavbarTop />
        <Navbars session={session} />
        {children}
        <Footer />
      </body>
    </html>
  )
}
