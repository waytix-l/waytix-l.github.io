'use client'
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
import { projects } from '@/data/projects'

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Mes Projets de Stage
        </motion.h2>
        
        <div className="projects-grid">
          {Object.entries(projects).map(([slug, project], index) => (
            <ProjectCard 
              key={slug}
              project={project}
              slug={slug}
              index={index}
            />
          ))}
        </div>

          <motion.div
            className="projects-infos"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p>Les projets présentés sont issus de mon stage de fin d'études en tant que développeur web/mobile chez Mageweb. Ils illustrent mes compétences techniques et ma capacité à mener des projets concrets. J'ai travaillé seul et je devais réaliser un rapport de stage par semaine à mon maitre de stage afin de faire un point sur mon avancée.</p>
          </motion.div>

      </div>
    </section>
  )
}