export const projects = {
  multiplayer: {
    title: "Jeu Multijoueur",
    slug: "jeu-multijoueur",
    duration: "3 semaines",
    technologies: ["Unity", "Photon Fusion", "C#"],
    description: "Développement d'un jeu multijoueur en 3D avec système de serveur dédié",
    image: "/images/image-jeu-multi-stage.png", // Ajoutez vos images dans public/images/
    details: `Le projet de jeu multijoueur a constitué un défi technique majeur qui s'est étalé sur les trois premières semaines du stage. L'objectif était de créer un jeu multijoueur fonctionnel avec des systèmes de serveur robustes.

Après une analyse approfondie des solutions disponibles, Photon Fusion a été retenu comme SDK réseau pour Unity. Ce choix s'est basé sur sa réputation de "SDK de transfert d'état réseau haut de gamme" et ses multiples topologies réseau disponibles.

La première semaine a été consacrée à l'implémentation du mode Host, où un joueur héberge la partie locale. Le système de différenciation des joueurs par couleurs aléatoires (blanc, rouge, bleu, vert) a été mis en place avec succès. Un serveur local a été configuré (IP : 192.168.0.170, Port : 27015) avec détection automatique pour les builds Windows Server.

Une interface de connexion intuitive a été développée, proposant aux joueurs de choisir entre rejoindre une partie existante ou héberger leur propre partie avec connexion automatique.

En semaine 2, l'accent a été mis sur les mécaniques de déplacement du joueur dans l'espace 3D : gestion de la puissance du moteur, navigation libre dans l'environnement, et exécution de tonneaux et manœuvres avancées.

Face aux blocages techniques rencontrés, une refonte complète from scratch a été initiée en semaine 3, permettant une meilleure compréhension de Photon Fusion et un code plus maintenable. La nouvelle orientation s'est portée vers un mode partie partagée avec système de recherche de parties et intégration Unity Cloud Multiplay Hosting.`
  },
  mobile: {
    title: "Application Mobile",
    slug: "application-mobile",
    duration: "4 semaines", 
    technologies: ["React Native", "Figma", "Android"],
    description: "Application de gestion de matériel pour entreprises multiples",
    image: "/images/image-app-mobile.png",
    details: `L'application mobile représente l'un des projets les plus aboutis du stage, répondant à un besoin concret de gestion de stock pour entreprises multiples.

Le projet a débuté par une phase de conception complète sur Figma, permettant de définir précisément les fonctionnalités et l'interface utilisateur avant le développement. Cette approche méthodique a considérablement facilité la suite du processus.

L'application a été conçue autour d'une architecture multi-entreprises, permettant la gestion séparée des stocks pour différentes entités. Cette approche modulaire offre une flexibilité importante pour les utilisateurs gérant plusieurs activités.

L'interface de sélection d'entreprise propose un design épuré permettant la navigation entre différentes entreprises avec un système de basculement rapide entre les contextes.

La page principale d'entreprise offre une vue d'ensemble du matériel avec affichage clair des stocks, une interface responsive s'adaptant aux différentes tailles d'écran, et une correspondance fidèle aux maquettes Figma.

Une attention particulière a été portée à l'expérience utilisateur, avec un design moderne et une navigation intuitive. L'interface reproduit fidèlement les maquettes Figma, démontrant une maîtrise technique et esthétique du développement mobile.

La version 1.0 front-end a été finalisée avec génération d'un APK de test pour validation utilisateur réelle, permettant d'identifier les améliorations nécessaires et d'adapter l'application aux besoins concrets.`
  },
  website: {
    title: "Site Web",
    slug: "site-web",
    duration: "6 semaines",
    technologies: ["Next.js", "React", "Figma", "VantaJS"],
    description: "Refonte complète d'un site web d'entreprise avec design moderne",
    image: "/images/image_site_mageweb.png",
    details: `Le développement du site internet constitue le projet phare du stage, évoluant d'une refonte conceptuelle à un site web moderne et fonctionnel.

L'analyse du site existant a révélé plusieurs points d'amélioration : problèmes de sécurité (certificat SSL expiré), structure de contenu perfectible, design daté nécessitant une modernisation, et navigation complexe dans certaines sections.

Une maquette complète a été développée sur Figma avec des éléments visuels innovants : intégration prévue via Spline pour des éléments 3D interactifs, animations au curseur, fonds animés VantaJS en 2D/3D intégrables facilement via canvas, et CTA proéminent avec couleur principale pour maximiser les conversions.

Le choix de Next.js a nécessité un apprentissage parallèle de React, démontrant une capacité d'adaptation aux technologies modernes du web.

Le Hero Header avancé comprend une navigation responsive moderne, un fond animé VantaJS pour un effet visuel impactant, et un environnement 3D interactif initial (optimisé par la suite).

Le système de contact propose un formulaire fonctionnel avec envoi d'emails, une validation côté client pour une meilleure UX, et une interface épurée encourageant la prise de contact.

La gestion de contenu inclut un système d'articles avec pages individuelles, une architecture évolutive permettant l'ajout facile de contenu, et une navigation intuitive entre les différentes sections.

Face aux problèmes de performance causés par les éléments 3D, une approche pragmatique a été adoptée avec leur retrait temporaire, démontrant une compréhension des enjeux de performance web et une capacité à prioriser l'expérience utilisateur.`
  }
};