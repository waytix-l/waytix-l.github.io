'use client'

import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="error-page">
      <div className="container">
        <div className="error-content">
          <h1 className="error-code">404</h1>
          <h2 className="error-title">Page non trouvée</h2>
          <p className="error-description">
            Désolé, la page que vous recherchez n&aposexiste pas.
          </p>
          <Link href="/" className="btn btn-primary">
            Retour à l&aposaccueil
          </Link>
        </div>
      </div>

      <style jsx>{`
        .error-page {
          padding: 150px 0;
          text-align: center;
        }

        .error-code {
          font-size: 8rem;
          font-weight: 900;
          color: var(--primary-color);
          line-height: 1;
          margin-bottom: 1rem;
        }

        .error-title {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .error-description {
          font-size: 1.125rem;
          color: var(--text-secondary);
          margin-bottom: 2rem;
        }
      `}</style>
    </section>
  )
}