import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

interface Experience {
  title: string;
  company: string;
  duration: string;
  description: string[];
}

interface ExperienceTimelineProps {
  experiences: Experience[];
}

export const ExperienceTimeline = ({ experiences }: ExperienceTimelineProps) => {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-0 md:pl-20"
          >
            {/* Timeline dot */}
            <div className="hidden md:flex absolute left-6 top-1 w-5 h-5 rounded-full bg-primary/20 border-2 border-primary items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-primary" />
            </div>

            <div className="glass rounded-xl p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <div className="flex items-center gap-3 mb-2 md:mb-0">
                  <Briefcase className="w-5 h-5 text-primary md:hidden" />
                  <h3 className="text-lg font-semibold text-foreground">{exp.title}</h3>
                </div>
                <span className="text-sm font-mono text-primary">{exp.duration}</span>
              </div>
              <p className="text-accent font-medium mb-3">{exp.company}</p>
              <ul className="space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary mt-1">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
