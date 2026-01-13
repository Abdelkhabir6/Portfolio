import { motion } from 'framer-motion';

interface SkillBadgeProps {
  name: string;
  index: number;
}

export const SkillBadge = ({ name, index }: SkillBadgeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.05, y: -2 }}
      className="px-4 py-2 rounded-lg bg-muted/50 border border-border text-sm font-medium text-foreground hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-default"
    >
      {name}
    </motion.div>
  );
};
