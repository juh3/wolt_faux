import UserModal from './components/modals/UserModal'
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
        <UserModal />

        <Navbar />

        {children}
      </body>
    </html>
  )
}
