import Header from '../components/header/Header'

import type { Metadata } from 'next'
import './global.css'

export const metadata: Metadata = {
  title: "Zora's Blog",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="mb-8">
        <Header />
        <div>{children}</div>
      </body>
    </html>
  )
}
