import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Clock } from 'lucide-react'
import { projects } from '@/data/projects'

// Cette fonction génère les routes statiques
export async function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({
    slug: slug,
  }))
}

// Cette fonction génère les métadonnées
export async function generateMetadata({ params }) {
  const project = projects[params.slug]
  
  if (!project) {
    return {
      title: 'Projet non trouvé',
    }
  }

  return {
    title: `${project.title} - Lucas Savy`,
    description: project.description,
  }
}

// Composant principal de la page
export default function ProjectDetail({ params }) {
  const project = projects[params.slug]

  if (!project) {
    notFound()
  }

  return (
    <section className="project-detail">
      <div className="container">
        <div className="project-detail-header">
          <Link href="/" className="back-link">
            <ArrowLeft size={16} /> Retour aux projets
          </Link>
          
          <h1 className="project-title">{project.title}</h1>
          
          <div className="project-meta">
            <span className="duration">
              <Clock size={16} /> {project.duration}
            </span>
            <div className="technologies">
              {project.technologies.map((tech) => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="project-content">
          <div className="project-description">
            {project.details.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
        
        <div className="project-navigation">
          <Link href="/" className="btn btn-primary">
            Voir tous les projets
          </Link>
          <Link href="/contact" className="btn btn-secondary">
            Me contacter
          </Link>
        </div>
      </div>
    </section>
  )
}