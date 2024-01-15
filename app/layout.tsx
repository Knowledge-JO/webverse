import type { Metadata } from 'next'
import './globals.css'
import localFont from "next/font/local"

const sf = localFont({
  src: [
    {
      path: "/fonts/SF-Pro-Display-Light.otf",
      weight: "300",
      style: "normal"
    },
    {
      path: "/fonts/SF-Pro-Display-Semibold.otf",
      weight: "500",
      style: "semibold"
    },
    {
      path: "/fonts/MonumentExtended-Regular.otf",
      weight: "700",
      style: "bold"
    }
  ]
})

// const monument = localFont({
//   src: [
    
//   ]
// })

export const metadata: Metadata = {
  title: 'webverse',
  description: 'webverse',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${sf.className} bg-black text-white`}>{children}</body>
    </html>
  )
}
