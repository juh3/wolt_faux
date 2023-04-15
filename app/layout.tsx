import Modal from './components/modals/Modal'
import Navbar from './components/navbar/Navbar'
import './globals.css'
import { Roboto } from 'next/font/google'
export const metadata = {
  title: 'Wolt',
  description: 'Wolt clone',
}

const font = Roboto({
  weight: '400',
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
        <Modal
          isOpen
          title="Create an account or log in"
          subtitle="Log in below or create a new Wolt account."
        />
        <Navbar />

        {children}
      </body>
    </html>
  )
}
