import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  number?: string;
}

export const SectionTitle = ({ title, subtitle, number }: SectionTitleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <div className="flex items-center gap-4 mb-4">
        {number && (
          <span className="text-primary font-mono text-lg">{number}.</span>
        )}
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">{title}</h2>
        <div className="hidden md:block flex-1 h-px bg-border" />
      </div>
      {subtitle && (
        <p className="text-muted-foreground text-lg max-w-2xl">{subtitle}</p>
      )}
    </motion.div>
  );
};
