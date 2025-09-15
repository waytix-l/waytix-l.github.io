import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const basePath = process.env.NODE_ENV === 'production' ? '/portfolio-lucas-savy' : ''

export const metadata = {
  title: 'Lucas Savy - Portfolio',
  description: 'Portfolio de Lucas Savy, étudiant en B2 Informatique',
  metadataBase: new URL(`https://waytix-l.github.io${basePath}`), // Remplacez par votre username
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Header />
        <main>
          {children}
        </main>
        <footer className="footer">
          <div className="container">
            <p>&copy; 2025 Lucas Savy - B2 Informatique. Tous droits réservés.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}