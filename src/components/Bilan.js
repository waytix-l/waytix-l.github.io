'use client'
import { motion } from 'framer-motion'

export default function Bilan() {
  return (
    <section className="bilan" id="bilan">
        <div className="bilan-container">
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                >
                Bilan personnel
            </motion.h2>

            <motion.div
                className="bilan-content"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
            >
                <p>
                    Mon stage de 7 semaines a été une véritable immersion dans le métier de développeur. J’ai travaillé sur trois projets variés (jeu multijoueur, application mobile, site web), ce qui m’a permis de découvrir la diversité des compétences nécessaires : performance réseau, UX mobile, et optimisation web.
                </p>
            
            </motion.div>

            <motion.div
                className="entreprise-content"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
            >
                <p>
                    J’ai acquis une maîtrise pratique de technologies modernes (Unity avec Photon Fusion, Next.js/React, React Native) et appris à travailler de manière autonome, notamment en m’autoformant rapidement sur de nouveaux outils. J’ai aussi renforcé ma méthodologie avec la conception sur Figma, l’architecture modulaire et les bonnes pratiques de versionning et documentation.
                </p>
            
            </motion.div>

            <motion.div
                className="entreprise-content"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
            >
                <p>
                    La principale difficulté a été le multijoueur avec Photon Fusion : elle a révélé ma persévérance et mes capacités d’auto-formation, mais aussi ma tendance au perfectionnisme. Cette expérience m’a appris à mieux équilibrer ambition technique et efficacité.
                </p>
            
            </motion.div>

            <motion.div
                className="entreprise-content"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
            >
                <p>
                    Ce stage a confirmé mon choix de carrière dans le développement full-stack, avec un intérêt particulier pour le web et le mobile. À court terme, je souhaite approfondir l’écosystème React et le déploiement cloud ; à moyen terme, évoluer vers un rôle de lead developer.
                </p>
            
            </motion.div>

        </div>

        
    </section>
  )
}