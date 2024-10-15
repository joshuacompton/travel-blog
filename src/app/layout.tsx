import Header from '../components/header/Header'

import type { Metadata } from 'next'
import './global.css'

  

export const metadata: Metadata = {
  title: "Zora's Travels",
  description: '',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode}>) {

  return <html lang="en">
    <body className="m-10">
      <Header />
      {children}
    </body>
  </html>
  
}
