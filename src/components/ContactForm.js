'use client'
import { useState } from 'react'
import { Mail, GraduationCap, Send } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulation d'envoi (remplacer par vraie logique)
    setTimeout(() => {
      alert('Message envoyé avec succès !')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setIsSubmitting(false)
    }, 2000)
  }

  return (
    <section className="contact">
      <div className="container">
        <h1 className="section-title">Contact</h1>
        <div className="contact-content">
          <div className="contact-info">
            <h2>Restons en contact</h2>
            <p>N'hésitez pas à me contacter pour discuter de projets, d'opportunités ou simplement pour échanger !</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <Mail size={20} />
                <span>lucas.savy66@ynov.com</span>
              </div>
              <div className="contact-item">
                <GraduationCap size={20} />
                <span>B2 Informatique</span>
              </div>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nom</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Sujet</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                'Envoi en cours...'
              ) : (
                <>
                  Envoyer le message <Send size={16} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}