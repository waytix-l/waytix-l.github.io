import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Lucas Savy - Portfolio',
  description: 'Portfolio de Lucas Savy, étudiant en B2 Informatique passionné par le développement web, mobile et les jeux vidéo',
  keywords: 'Lucas Savy, portfolio, développeur, informatique, Unity, Next.js, React Native',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
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