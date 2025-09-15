'use client'
import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ProjectCard({ project, slug, index }) {
  return (
    <motion.div 
      className="project-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className="project-image">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            width={320}
            height={200}
            style={{ objectFit: 'cover', borderRadius: '12px' }}
          />
        ) : (
          <div style={{ color: '#6b7280' }}>Image du projet</div>
        )}
      </div>
      
      <div className="project-header">
        <h3>{project.title}</h3>
        <span className="project-duration">
          <Clock size={14} style={{ marginRight: '4px' }} />
          {project.duration}
        </span>
      </div>
      
      <p className="project-description">{project.description}</p>
      
      <div className="project-tech">
        {project.technologies.map((tech) => (
          <span key={tech} className="tech-tag">{tech}</span>
        ))}
      </div>
      
      <Link href={`/project/${slug}`} className="project-link">
        Voir les détails <ArrowRight size={16} />
      </Link>
    </motion.div>
  )
}