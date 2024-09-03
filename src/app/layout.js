import './globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rushi\'s Portfolio',
  description: 'Projects, skills by Rushi Patil',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        {/* You can include additional meta tags here */}
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
