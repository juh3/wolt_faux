import RegisterModal from './components/modals/RegisterModal'
import Navbar from './components/navbar/Navbar'
import './globals.css'
import { Roboto } from 'next/font/google'
export const metadata = {
  title: 'Wolt',
  description: 'Wolt clone',
}

const font = Roboto({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <RegisterModal />

        <Navbar />

        {children}
      </body>
    </html>
  )
}
