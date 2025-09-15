'use client'
import { motion } from 'framer-motion'

export default function About() {
  const skills = [
    'Unity', 'Next.js', 'React', 'Node.js', 
    'React Native', 'Figma', 'C#', 'JavaScript'
  ]

  return (
    <section className="about">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          À propos
        </motion.h2>
        
        <motion.div 
          className="about-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}>
          <p>
            Étudiant en 2ème année d'informatique, j'ai effectué un stage de 7 semaines axé sur le développement 
            de projets innovants. Durant cette période, j'ai travaillé sur trois projets majeurs : 
            un jeu multijoueur avec Unity et Photon Fusion, une application mobile de gestion de matériel, 
            et la refonte complète d'un site web avec Next.js.
          </p>
          <div className="skills">
            <h3>Compétences techniques</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <motion.span 
                  key={skill}
                  className="skill-tag"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}