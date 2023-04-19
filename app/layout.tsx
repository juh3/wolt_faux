import getCurrentUser from './actions/getCurrentUser'
import LoginModal from './components/modals/LoginModal'
import RegisterModal from './components/modals/RegisterModal'
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
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser()
  return (
    <html lang="en">
      <body className={font.className}>
        <UserModal />
        <LoginModal />
        <RegisterModal />
        <Navbar currentUser={currentUser} />

        {children}
      </body>
    </html>
  )
}
