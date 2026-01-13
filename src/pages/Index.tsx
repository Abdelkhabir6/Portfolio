import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Phone, ExternalLink, GraduationCap, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/portfolio/Navbar';
import { TypewriterText } from '@/components/portfolio/TypewriterText';
import { SectionTitle } from '@/components/portfolio/SectionTitle';
import { SkillBadge } from '@/components/portfolio/SkillBadge';
import { ProjectCard } from '@/components/portfolio/ProjectCard';
import { ExperienceTimeline } from '@/components/portfolio/ExperienceTimeline';
import { ContactForm } from '@/components/portfolio/ContactForm';
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
};

const projects = [
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
    demoLink: '#',
    githubLink: '#',
  },
  {
    title: 'Application de Gestion de Centre de Formation',
    description: 'Application full-stack pour gérer étudiants, formateurs et inscriptions avec messagerie intégrée.',
    technologies: ['MERN Stack', 'MongoDB', 'Express', 'React'],
    features: [
      'Interface responsive et moderne',
      'Authentification sécurisée multi-rôles',
      'Messagerie interne temps réel',
      'Tableau de bord administrateur',
    ],
    duration: 'Avril - Juin 2023',
    demoLink: '#',
    githubLink: '#',
  },
  {
    title: 'Application Web de Gestion Interne',
    description: 'Système de gestion avec automatisation de tâches et architecture scalable pour entreprise.',
    technologies: ['Architecture MVC', 'REST API', 'SQL'],
    features: [
      'Fonctionnalités dynamiques avancées',
      'Automatisation de processus métier',
      'Architecture modulaire et scalable',
    ],
    duration: 'Avril - Juin 2023',
  },
];

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
                  'Expert IoT & Systèmes Complexes',
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

            {/* Stage Banner */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="inline-flex items-center gap-3 px-4 py-3 rounded-lg bg-primary/10 border border-primary/30"
            >
              <span className="text-2xl">🎯</span>
              <span className="text-sm md:text-base text-foreground">
                <strong>Recherche de stage</strong> - 6 mois en développement Full-Stack JavaScript
              </span>
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
                href="https://github.com/abdelkhabirshab"
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
                Je suis un développeur Full-Stack passionné, actuellement en <strong className="text-foreground">Master 2 Informatique</strong> spécialisé 
                en Ingénierie du Web, IoT et Systèmes Complexes à l'Université Le Havre Normandie.
              </p>
              <p>
                Mon parcours m'a permis de développer une expertise solide dans la stack <strong className="text-foreground">JavaScript moderne</strong> (React, Node.js), 
                avec une approche méthodique et orientée performance. J'apprécie particulièrement 
                les défis techniques et la création d'interfaces utilisateur intuitives.
              </p>
              <p>
                Mes compétences s'étendent également à la sécurité applicative, au DevOps et à l'IoT, 
                me permettant d'avoir une vision complète du cycle de développement logiciel.
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
                <div className="w-full h-full bg-muted flex items-center justify-center">
                  <div className="text-6xl">👨‍💻</div>
                </div>
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
                  <span className="text-primary font-mono text-sm">
                    {category === 'frontend' && '< />'}
                    {category === 'backend' && '{ }'}
                    {category === 'database' && '⊛'}
                    {category === 'devops' && '⚙'}
                    {category === 'security' && '🔒'}
                    {category === 'languages' && '#'}
                  </span>
                  {category === 'frontend' && 'Frontend'}
                  {category === 'backend' && 'Backend'}
                  {category === 'database' && 'Bases de données'}
                  {category === 'devops' && 'DevOps & Outils'}
                  {category === 'security' && 'Sécurité'}
                  {category === 'languages' && 'Langages additionnels'}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {items.map((skill, index) => (
                    <SkillBadge key={skill} name={skill} index={index} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-6 mt-16"
          >
            {[
              { value: '3+', label: 'Projets réalisés' },
              { value: '2+', label: 'Années d\'expérience' },
              { value: '15+', label: 'Technologies maîtrisées' },
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
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} {...project} index={index} />
            ))}
          </div>
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
          
          <div className="grid md:grid-cols-2 gap-12">
            <ContactForm />
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="glass rounded-xl p-6 space-y-6">
                <h3 className="text-xl font-semibold text-foreground">Informations de contact</h3>
                
                <div className="space-y-4">
                  <a
                    href="mailto:aabdelkhabir6@gmail.com"
                    className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span>aabdelkhabir6@gmail.com</span>
                  </a>
                  
                  <a
                    href="tel:+33767614739"
                    className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span>07 67 61 47 39</span>
                  </a>
                  
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <MapPin className="w-5 h-5" />
                    <span>Le Havre, France</span>
                  </div>
                  
                  <a
                    href="https://abdelkhabirshab.b12sites.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>abdelkhabirshab.b12sites.com</span>
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href="https://github.com/abdelkhabirshab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass rounded-xl p-4 flex-1 flex items-center justify-center gap-3 text-muted-foreground hover:text-primary hover:border-primary transition-all"
                >
                  <Github className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/abdelkhabir-shab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass rounded-xl p-4 flex-1 flex items-center justify-center gap-3 text-muted-foreground hover:text-primary hover:border-primary transition-all"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
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
            <p className="text-sm text-muted-foreground font-mono">
              Construit avec React, TypeScript & ❤️
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
