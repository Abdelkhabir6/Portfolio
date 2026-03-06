import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Phone, GraduationCap, Award, Target, User, Settings, Lock, Heart, BrainCircuit, Cpu, Database, Network, Blocks } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/portfolio/Navbar';
import { TypewriterText } from '@/components/portfolio/TypewriterText';
import { SectionTitle } from '@/components/portfolio/SectionTitle';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { SkillBadge } from '@/components/portfolio/SkillBadge';
import { ProjectCard } from '@/components/portfolio/ProjectCard';
import { ExperienceTimeline } from '@/components/portfolio/ExperienceTimeline';
import { BackgroundEffects } from '@/components/portfolio/BackgroundEffects';
import { ScrollProgress } from '@/components/portfolio/ScrollProgress';
import { BackToTop } from '@/components/portfolio/BackToTop';

const skills = {
  frontend: ['React', 'Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
  backend: ['Node.js', 'Express', 'REST API', 'Microservices', 'Laravel', 'Spring Boot'],
  database: ['MySQL', 'Oracle', 'SQL Server', 'NoSQL', 'MongoDB'],
  devops: ['Docker', 'GitLab CI/CD', 'Git/GitHub', 'Jira', 'Postman'],
  security: ['TLS/SSL', 'RGPD', 'Chiffrement', 'Sécurité applicative'],
  languages: ['Python', 'Java', 'Go', 'SQL'],
  ia_data: ['Machine Learning', 'Deep Learning', 'Big Data', 'Data Viz', 'Python'],
  iot_systems: ['IoT', 'Systèmes Complexes', 'Distribué', 'Parallélisme', 'Blockchain'],
};

const projects = {
  web: [
    {
      title: 'Plateforme de Covoiturage et Envoi de Colis',
      description: 'Site web facilitant les échanges de colis et le covoiturage avec optimisation d\'itinéraires et géocodage intelligent.',
      technologies: ['React', 'Node.js', 'MySQL', 'API Géocodage'],
      features: [
        'Authentification classique et Google OAuth',
        'Interface administrateur complète',
        'Formulaires interactifs et dynamiques',
        'Optimisation des performances et approche data-driven',
      ],
      duration: 'Avril - Juillet 2024',
      githubLink: 'https://github.com/Abdelkhabir6/ColisCar',
    },
    {
      title: 'Plateforme de Recrutement en Ligne',
      description: 'Application web full-stack de gestion du recrutement connectant entreprises, candidats et administrateurs au sein d\'un espace sécurisé et unifié.',
      technologies: ['React', 'Laravel', 'MySQL', 'Sanctum', 'Tailwind CSS'],
      features: [
        'Authentification sécurisée avec 3 rôles (Admin, Entreprise, Candidat)',
        'CRUD complet des offres d\'emploi et candidatures',
        'Upload et gestion des CVs (PDF, DOC, DOCX)',
        'Tableau de bord avec statistiques personnalisées par rôle',
      ],
      duration: 'Février 2025',
      githubLink: 'https://github.com/Abdelkhabir6/Plateforme-de-Recrutement',
    },
  ],
  blockchain: [
    {
      title: 'DApp NFT — Œuvres Raoul Dufy',
      description: 'Application décentralisée complète (DApp) pour minter, vendre et acheter des NFTs inspirés des œuvres de Raoul Dufy, avec gestion automatique des royalties sur la Blockchain Ethereum.',
      technologies: ['Solidity', 'Hardhat', 'React', 'Ethers.js', 'IPFS (Helia)', 'OpenZeppelin'],
      features: [
        'Smart Contract ERC721 + ERC2981 (royalties automatiques à la revente)',
        'Stockage décentralisé des images sur IPFS via Helia',
        'Marketplace intégrée : mise en vente et achat de NFTs',
        'Connexion Wallet MetaMask et vérification de réseau automatique',
      ],
      duration: '2024 - 2025',
      githubLink: 'https://github.com/Abdelkhabir6/non-fungible-token-dufy',
    },
  ],
  iot: [
    {
      title: 'Smart Street Lighting',
      description: 'Système IoT d\'éclairage urbain intelligent pilotant des lampadaires via Arduino, avec monitoring en temps réel, historique de consommation et dashboard web.',
      technologies: ['Arduino', 'Node.js', 'MongoDB', 'Docker', 'HTML/CSS/JS'],
      features: [
        'Pilotage des lampadaires via port série USB (Arduino)',
        'API REST : état, historique, statistiques, santé du système',
        'Dashboard web temps réel avec rafraîchissement 300ms',
        'Stack dockerisée : Frontend + MongoDB + Mongo Express',
      ],
      duration: '2024 - 2025',
      githubLink: 'https://github.com/Abdelkhabir6/smart-street-lighting',
    },
  ],
  ai: [
    {
      title: 'Prédiction CAN 2025 avec MLP',
      description: 'Modèle de Machine Learning (Réseau de Neurones MLP) entraîné sur 204 matchs des 4 dernières éditions de la CAN pour prédire les résultats de la CAN 2025 au Maroc.',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Jupyter Notebook', 'Matplotlib'],
      features: [
        'Dataset consolidé : 204 matchs, 69 features (xG, cotes, stats, cartons)',
        'Modèle MLP multi-classes : victoire domicile / nul / victoire extérieur',
        'Feature engineering : PPG, xG pré-match, possession, corners',
        'Analyse visuelle des performances et matrices de confusion',
      ],
      duration: 'Février 2025',
      githubLink: 'https://github.com/Abdelkhabir6/CAN2025-Predictions',
    },
  ],
  mobile: [
    {
      title: 'Émargement Électronique',
      description: 'Application mobile moderne permettant la gestion des présences étudiantes par scan de QR Code ou saisie manuelle, avec mode hors-ligne et synchronisation Google Sheets.',
      technologies: ['Flutter', 'Dart', 'Sqflite', 'mobile_scanner', 'Google Sheets API', 'PDF/Printing'],
      features: [
        'Scan QR Code instantané avec mobile_scanner',
        'Saisie manuelle avec création d\'étudiant (Nom/Email/Filière)',
        'Mode hors-ligne avec base locale locale (Sqflite) et synchronisation en attente',
        'Synchronisation automatique et export des détails vers Google Sheets',
        'Génération et impression de documents PDF',
      ],
      duration: '2025',
      githubLink: 'https://www-apps.univ-lehavre.fr/forge/flutter/login_app',
    },
  ],
};

const experiences = [
  {
    title: 'Développeur Web Full-Stack',
    company: 'Les 1001 Clicks',
    duration: 'Avril - Juillet 2024',
    description: [
      'Développement full-stack avec React, Node.js et MySQL',
      'Intégration d\'API externes (géocodage, OAuth)',
      'Méthodologie Agile et gestion Git',
      'Optimisation des performances et UX',
    ],
  },
  {
    title: 'Développeur Web',
    company: 'Anapec',
    duration: 'Avril - Juin 2023',
    description: [
      'Conception d\'application web de gestion',
      'Réflexion sur l\'architecture logicielle',
      'Développement de fonctionnalités métier',
    ],
  },
  {
    title: 'Stage d\'Observation',
    company: 'CHU Oujda',
    duration: 'Août - Septembre 2022',
    description: [
      'Gestion de base de données clients',
      'Découverte des systèmes d\'information hospitaliers',
    ],
  },
];

const education = [
  {
    degree: 'Master 2 Informatique',
    field: 'Ingénierie du Web, IoT et Systèmes Complexes',
    school: 'Université Le Havre Normandie',
    year: '2024 - En cours',
  },
  {
    degree: 'Licence Informatique',
    field: 'Informatique Générale',
    school: 'Université Le Havre Normandie',
    year: '2023 - 2024',
  },
  {
    degree: 'DUT Informatique',
    field: 'Développement Logiciel',
    school: 'EST Oujda, Maroc',
    year: '2021 - 2023',
  },
];

const certificates = [
  { name: 'Oracle Database SQL Certified Associate', issuer: 'Oracle' },
  { name: 'Java Programming Certificate', issuer: 'Great Learning Academy' },
  { name: 'EF SET English Certificate', issuer: 'EF Education First' },
];

const Index = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <BackgroundEffects />
      <ScrollProgress />
      <Navbar />
      <BackToTop />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="container max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-primary font-mono text-lg"
            >
              Bonjour, je suis
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold"
            >
              <span className="text-foreground">Abdelkhabir Shab</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-4xl lg:text-5xl font-bold text-muted-foreground"
            >
              <TypewriterText
                texts={[
                  'Développeur Full-Stack JavaScript',
                  'Passionné par React & Node.js',
                  'Curieux d\'IA & Machine Learning',
                ]}
              />
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-muted-foreground text-lg max-w-2xl leading-relaxed"
            >
              Étudiant en M2 Informatique passionné par la création d'applications web
              performantes et scalables. Spécialisé en React, Node.js et IoT.
            </motion.p>

            {/* Stage Banner - Redesigned */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="relative inline-flex max-w-fit"
            >
              {/* Outer glow ring */}
              <motion.div
                className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-500 opacity-70 blur-[2px]"
                animate={{ opacity: [0.5, 0.9, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />

              {/* Card body */}
              <div className="relative flex items-center gap-4 px-5 py-3 rounded-2xl bg-[hsl(222,47%,7%)] border border-white/10 overflow-hidden">

                {/* Shimmer sweep */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'linear', repeatDelay: 1 }}
                />

                {/* Pulsing dot */}
                <div className="relative flex-shrink-0">
                  <motion.div
                    className="absolute inset-0 rounded-full bg-emerald-400 blur-sm"
                    animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  />
                  <div className="relative w-2.5 h-2.5 rounded-full bg-emerald-400" />
                </div>

                {/* Text */}
                <div className="flex items-center gap-2 text-sm font-medium">
                  <span className="text-muted-foreground">Disponible pour un stage</span>
                  <span className="text-white/20">·</span>
                  <span className="font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    <TypewriterText
                      texts={[
                        "6 mois · Full-Stack JS",
                        "6 mois · IA & Deep Learning",
                        "6 mois · IoT & Systèmes",
                        "6 mois · Blockchain & Solidity",
                      ]}
                    />
                  </span>
                </div>

                {/* Pill badge */}
                <motion.span
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1, type: 'spring' }}
                  className="flex-shrink-0 px-2 py-0.5 text-[10px] font-bold tracking-widest uppercase rounded-full bg-gradient-to-r from-red-500/80 to-orange-500/80 text-white border border-white/10"
                >
                  Urgent
                </motion.span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Button variant="hero" size="lg" onClick={() => scrollToSection('#projects')}>
                Voir mes projets
              </Button>
              <Button variant="heroOutline" size="lg" onClick={() => scrollToSection('#contact')}>
                Me contacter
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-6 pt-8"
            >
              <a
                href="https://github.com/Abdelkhabir6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/abdelkhabir-shab"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:aabdelkhabir6@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Mail className="w-6 h-6" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="container max-w-5xl">
          <SectionTitle number="01" title="À propos" />
          <div className="grid md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 space-y-4 text-muted-foreground leading-relaxed"
            >
              <p>
                Actuellement étudiant en Master 2 <strong className="text-foreground">IWOCS</strong> (Ingénierie du Web, des Objets Communicants et des Systèmes Complexes) à l'Université Le Havre Normandie, je combine une solide expérience pratique en <strong className="text-foreground">développement Full-Stack</strong> acquise lors de mes stages avec une formation académique de haut niveau.
              </p>
              <p>
                Ma formation m'a permis de maîtriser un large éventail de technologies allant du <strong className="text-foreground">Web</strong> et <strong className="text-foreground">Mobile</strong> à l'<strong className="text-foreground">Internet des Objets (IoT)</strong>, en intégrant les dimensions critiques de <strong className="text-foreground">Sécurité</strong>, de <strong className="text-foreground">Big Data</strong> et de <strong className="text-foreground">Visualisation de données</strong>.
              </p>
              <p>
                Je possède également une expertise approfondie dans la modélisation de <strong className="text-foreground">Systèmes Complexes</strong> et l'<strong className="text-foreground">Intelligence Artificielle</strong> (Machine Learning, Deep Learning). Mon profil est complété par des compétences en algorithmie avancée (Parallélisme, Graphes, Programmation Fonctionnelle) et en <strong className="text-foreground">Gestion de Projet</strong>, me permettant d'aborder des problématiques variées avec une vision globale.
              </p>
              <div className="flex items-center gap-2 pt-4 text-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Le Havre, France</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="gradient-border aspect-square rounded-2xl overflow-hidden">
                <img
                  src={`${import.meta.env.BASE_URL}profile.png`}
                  alt="Abdelkhabir Shab"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-card/50">
        <div className="container max-w-5xl">
          <SectionTitle number="02" title="Compétences" subtitle="Technologies et outils que je maîtrise" />

          <div className="grid gap-12">
            {Object.entries(skills).map(([category, items], catIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1 }}
              >
                <h3 className="text-lg font-semibold text-foreground mb-4 capitalize flex items-center gap-2">
                  <span className="text-primary font-mono text-sm flex items-center">
                    {category === 'frontend' && '< />'}
                    {category === 'backend' && '{ }'}
                    {category === 'database' && '⊛'}
                    {category === 'devops' && <Settings className="w-4 h-4 ml-1" />}
                    {category === 'security' && <Lock className="w-4 h-4 ml-1" />}
                    {category === 'languages' && '#'}
                    {category === 'ia_data' && <BrainCircuit className="w-4 h-4 ml-1" />}
                    {category === 'iot_systems' && <Cpu className="w-4 h-4 ml-1" />}
                  </span>
                  {category === 'frontend' && 'Frontend'}
                  {category === 'backend' && 'Backend'}
                  {category === 'database' && 'Bases de données'}
                  {category === 'devops' && 'DevOps & Outils'}
                  {category === 'security' && 'Sécurité'}
                  {category === 'languages' && 'Langages additionnels'}
                  {category === 'ia_data' && 'IA & Data'}
                  {category === 'iot_systems' && 'IoT & Systèmes'}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {items.map((skill, index) => (
                    <SkillBadge key={skill} name={skill} index={index} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Dynamic Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-6 mt-16"
          >
            {[
              {
                value: Object.values(projects).flat().length + '+',
                label: 'Projets réalisés'
              },
              {
                value: (experiences.length > 0 ? new Date().getFullYear() - parseInt(experiences[experiences.length - 1].duration.split(' ').pop() || '0') : 0) + '+',
                label: "Années d'expérience"
              },
              {
                value: Object.values(skills).flat().length + '+',
                label: 'Technologies maîtrisées'
              },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6">
        <div className="container max-w-5xl">
          <SectionTitle number="03" title="Projets" subtitle="Quelques projets sur lesquels j'ai travaillé" />
          <Tabs defaultValue="web" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-16 lg:mb-8 h-auto gap-2">
              <TabsTrigger value="web">Dev Web</TabsTrigger>
              <TabsTrigger value="blockchain">Blockchain</TabsTrigger>
              <TabsTrigger value="iot">Arduino & IoT</TabsTrigger>
              <TabsTrigger value="ai">IA & Data</TabsTrigger>
              <TabsTrigger value="mobile">Mobile</TabsTrigger>
            </TabsList>

            <TabsContent value="web">
              <div className="grid md:grid-cols-2 gap-6">
                {projects.web.map((project, index) => (
                  <ProjectCard key={project.title} {...project} index={index} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="blockchain">
              <div className="grid md:grid-cols-2 gap-6">
                {projects.blockchain.map((project, index) => (
                  <ProjectCard key={project.title} {...project} index={index} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="iot">
              <div className="grid md:grid-cols-2 gap-6">
                {projects.iot.map((project, index) => (
                  <ProjectCard key={project.title} {...project} index={index} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="ai">
              <div className="grid md:grid-cols-2 gap-6">
                {projects.ai.map((project, index) => (
                  <ProjectCard key={project.title} {...project} index={index} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="mobile">
              <div className="grid md:grid-cols-2 gap-6">
                {projects.mobile.map((project, index) => (
                  <ProjectCard key={project.title} {...project} index={index} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 bg-card/50">
        <div className="container max-w-5xl">
          <SectionTitle number="04" title="Expérience" subtitle="Mon parcours professionnel" />
          <ExperienceTimeline experiences={experiences} />
        </div>
      </section>

      {/* Education & Certificates */}
      <section className="py-24 px-6">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Education */}
            <div>
              <SectionTitle number="05" title="Formation" />
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="glass rounded-xl p-5"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <GraduationCap className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                        <p className="text-sm text-accent">{edu.field}</p>
                        <p className="text-sm text-muted-foreground mt-1">{edu.school}</p>
                        <p className="text-xs font-mono text-primary mt-2">{edu.year}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certificates */}
            <div>
              <SectionTitle number="06" title="Certifications" />
              <div className="space-y-6">
                {certificates.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="glass rounded-xl p-5"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-secondary/10">
                        <Award className="w-5 h-5 text-secondary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{cert.name}</h4>
                        <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-card/50">
        <div className="container max-w-5xl">
          <SectionTitle
            number="07"
            title="Contact"
            subtitle="N'hésitez pas à me contacter pour discuter d'opportunités !"
          />

          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="glass rounded-xl p-8 space-y-6">
                <h3 className="text-2xl font-semibold text-foreground text-center mb-8">Informations de contact</h3>

                <div className="space-y-6">
                  <a
                    href="mailto:aabdelkhabir6@gmail.com"
                    className="flex items-center gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 text-muted-foreground hover:text-primary transition-all group"
                  >
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wide">Email</div>
                      <div className="font-medium text-foreground">aabdelkhabir6@gmail.com</div>
                    </div>
                  </a>

                  <a
                    href="tel:+33767614739"
                    className="flex items-center gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 text-muted-foreground hover:text-primary transition-all group"
                  >
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wide">Téléphone</div>
                      <div className="font-medium text-foreground">07 67 61 47 39</div>
                    </div>
                  </a>

                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href="https://github.com/Abdelkhabir6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass rounded-xl p-6 flex-1 flex flex-col items-center justify-center gap-3 text-muted-foreground hover:text-primary hover:border-primary transition-all group"
                >
                  <Github className="w-8 h-8 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/abdelkhabir-shab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass rounded-xl p-6 flex-1 flex flex-col items-center justify-center gap-3 text-muted-foreground hover:text-primary hover:border-primary transition-all group"
                >
                  <Linkedin className="w-8 h-8 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">LinkedIn</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="container max-w-5xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Abdelkhabir Shab. Tous droits réservés.
            </p>

          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
