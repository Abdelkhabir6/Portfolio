import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  duration: string;
  index: number;
  demoLink?: string;
  githubLink?: string;
}

export const ProjectCard = ({
  title,
  description,
  technologies,
  features,
  duration,
  index,
  demoLink,
  githubLink,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="gradient-border p-6 md:p-8 h-full">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span>{duration}</span>
            </div>
            <div className="flex gap-2">
              {githubLink && (
                <Button variant="ghost" size="icon" asChild>
                  <a href={githubLink} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github className="w-5 h-5" />
                  </a>
                </Button>
              )}
              {demoLink && (
                <Button variant="ghost" size="icon" asChild>
                  <a href={demoLink} target="_blank" rel="noopener noreferrer" aria-label="Demo">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </Button>
              )}
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>

          {/* Description */}
          <p className="text-muted-foreground mb-4 flex-grow">{description}</p>

          {/* Features */}
          <ul className="mb-6 space-y-2">
            {features.slice(0, 4).map((feature, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="text-primary mt-1">▹</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mt-auto">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
