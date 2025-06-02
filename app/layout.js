// src/app/layout.js
import { Inter } from 'next/font/google'
import './globals.css'
import './styles/variables.css'
import Navbar from './components/layout/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Myhra Global Technologies - Leading Tech Solutions',
  description: 'Transform your business with cutting-edge technology solutions from Myhra Global Technologies.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        {/* Footer will be added later */}
      </body>
    </html>
  )
}