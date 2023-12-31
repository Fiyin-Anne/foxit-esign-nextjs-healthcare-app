import './globals.css'
import { Roboto } from 'next/font/google'
import NavBar from './components/NavBar';
import {SocketProvider} from './components/SocketProvider';

const roboto = Roboto({
  weight: '300',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Foxit eSign-Healthcare App',
  description: 'A sample healthcare app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="bumblebee">
      <body className={roboto.className}>
        <SocketProvider>
        <NavBar />
        {children}
        </SocketProvider>
      
      </body>
    </html>
  )
}