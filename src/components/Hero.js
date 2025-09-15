'use client'
import Link from 'next/link'
import { Code, ArrowRight, Cloudy } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero-title">
            Bonjour, je suis <span className="gradient-text">Lucas Savy</span>
          </h1>
          <p className="hero-subtitle">
            Étudiant en B2 Informatique passionné par le développement web, mobile et les jeux vidéo
          </p>
          <div className="hero-buttons">
            <Link href="#projects" className="btn btn-primary">
              Découvrir mes projets
            </Link>
            <Link href="/contact" className="btn btn-secondary">
              Me contacter
            </Link>
          </div>
        </motion.div>
        
        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="floating-card">
            <Code size={64} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}