'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="cta">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Intéressé par mon profil ?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          N&aposhésitez pas à me contacter pour discuter de vos projets ou opportunités
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link href="/contact" className="btn btn-primary">
            Me contacter
          </Link>
        </motion.div>
      </div>
    </section>
  )
}