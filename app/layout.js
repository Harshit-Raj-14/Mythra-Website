import { Inter } from 'next/font/google'
import './globals.css'
import './styles/variables.css'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mythra Global Technologies - Leading Tech Solutions & Digital Innovation',
  description: 'Transform your business with cutting-edge technology solutions from Mythra Global Technologies. Expert web development, mobile apps, AI solutions, and digital transformation services.',
  keywords: 'tech agency, web development, mobile app development, AI solutions, digital transformation, software development, technology consulting, Mythra Global Technologies',
  authors: [{ name: 'Mythra Global Technologies' }],
  creator: 'Mythra Global Technologies',
  publisher: 'Mythra Global Technologies',
  metadataBase: new URL('https://mythraglobal.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Mythra Global Technologies - Leading Tech Solutions',
    description: 'Transform your business with cutting-edge technology solutions from Mythra Global Technologies.',
    url: 'https://mythraglobal.vercel.app',
    siteName: 'Mythra Global Technologies',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mythra Global Technologies - Leading Tech Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mythra Global Technologies - Leading Tech Solutions',
    description: 'Transform your business with cutting-edge technology solutions from Mythra Global Technologies.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'uQTl66QvwzOreH93wALNb3zKxvGy_Du8S3bNTerboD8', // get this from Google Search Console - <meta name="google-site-verification" content="uQTl66QvwzOreH93wALNb3zKxvGy_Du8S3bNTerboD8" />
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-VJ9TFBR99R"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-VJ9TFBR99R');
            `,
          }}
        />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Mythra Global Technologies",
              "url": "https://mythraglobal.vercel.app",
              "logo": "https://mythraglobal.vercel.app/logo.png",
              "description": "Leading technology solutions provider specializing in web development, mobile applications, and digital transformation services.",
              "foundingDate": "2024",
              "founder": {
                "@type": "Person",
                "name": "Harshit Mythra & Priyanshu Kumar"
              },
              "sameAs": [
                "https://www.youtube.com/@MytharaGlobalTechnologies",
                "https://www.linkedin.com/in/harshit-mythra-248855369/"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "url": "https://mythraglobal.vercel.app#contact"
              },
              "services": [
                "Web Development",
                "Mobile App Development",
                "AI Solutions",
                "Digital Transformation",
                "Technology Consulting"
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}