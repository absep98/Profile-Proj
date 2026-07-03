import React from 'react';
import { motion } from 'framer-motion';

// Fades content up as it scrolls into view. Used by every section.
export const Reveal = ({ children, delay = 0, className = '' }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
  >
    {children}
  </motion.div>
);

// Numbered editorial section heading: "01 — Title" over a hairline rule.
export const SectionHeading = ({ number, title }) => (
  <Reveal className="mb-12 md:mb-16">
    <div className="flex items-baseline gap-4">
      <span className="font-mono text-sm text-accent">{number}</span>
      <h2 className="font-display text-3xl md:text-5xl font-semibold text-ink">
        {title}
      </h2>
    </div>
    <div className="mt-5 h-px w-full bg-line" />
  </Reveal>
);
