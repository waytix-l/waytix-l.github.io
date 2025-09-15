'use client'
import { motion } from 'framer-motion'

export default function Entreprise() {
  return (
    <section className="entreprise" id="entreprise">
        <div className="entreprise-container">
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                >
                Mon Entreprise de Stage
            </motion.h2>

            <motion.div
                className="entreprise-content"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
            >
                <p>
                    J&aposai eu l&aposopportunité d&aposeffectuer mon stage chez MageWeb, une agence web basé sur Montpellier spécialisée dans la création de sites internet et d&aposapplications mobiles, proposant également des formations ainsi que des services en positionnement SEO. 
                    Ce stage a duré 175 heures, étalées sur 7 semaines. 
                    MageWeb se distingue par son approche innovante et son engagement envers la qualité, offrant des solutions sur mesure à ses clients.
                </p>
                <p>
                    Durant mon stage, j&aposai pu approndir mes connaissances techniques et pratiques en travaillant sur des projets concrets, détaillés ci-dessous, mais aussi découvrir de nouvelles technologies, que ce soit pour le développement web, mobile ou encore de jeux vidéos. 
                </p>
            </motion.div>

        </div>

        
    </section>
  )
}