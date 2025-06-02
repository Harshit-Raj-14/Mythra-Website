import { Inter } from 'next/font/google'
import './globals.css'
import './styles/variables.css'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mythra Global Technologies - Leading Tech Solutions',
  description: 'Transform your business with cutting-edge technology solutions from Mythra Global Technologies.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}