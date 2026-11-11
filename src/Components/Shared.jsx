import React, { useEffect, useRef, useState } from 'react';
import {
  motion, useInView, useMotionValue, useSpring, useTransform, useScroll, animate,
} from 'framer-motion';

const EASE = [0.21, 0.47, 0.32, 0.98];

// Fades content up as it scrolls into view. Used by every section.
export const Reveal = ({ children, delay = 0, className = '' }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.6, delay, ease: EASE }}
  >
    {children}
  </motion.div>
);

// Numbered editorial section heading. The title rises out of a mask and the
// hairline rule draws itself from left to right.
export const SectionHeading = ({ number, title }) => (
  <motion.div
    className="mb-12 md:mb-16"
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: '-60px' }}
  >
    <div className="flex items-baseline gap-4">
      <motion.span
        className="font-mono text-sm text-accent"
        variants={{ hidden: { opacity: 0, x: -12 }, show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: EASE } } }}
      >
        {number}
      </motion.span>
      <span className="overflow-hidden pb-1">
        <motion.h2
          className="font-display text-3xl font-semibold text-ink md:text-5xl"
          variants={{ hidden: { y: '110%' }, show: { y: 0, transition: { duration: 0.7, delay: 0.05, ease: EASE } } }}
        >
          {title}
        </motion.h2>
      </span>
    </div>
    <motion.div
      className="mt-5 h-px w-full origin-left bg-line"
      variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1, transition: { duration: 1.1, delay: 0.2, ease: EASE } } }}
    />
  </motion.div>
);

// Counts from 0 to `to` the first time it scrolls into view.
export const CountUp = ({ to, suffix = '', duration = 1.6 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return undefined;
    const controls = animate(0, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to, duration]);

  return <span ref={ref}>{value}{suffix}</span>;
};

// Thin accent line across the top of the page that tracks scroll progress.
export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 });
  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-50 h-[2px] origin-left bg-accent"
    />
  );
};

// Card with a soft spotlight that follows the cursor and a gentle 3D tilt.
// Touch devices never fire mouse-move, so they just get the plain card.
export const SpotlightCard = ({ children, className = '' }) => {
  const ref = useRef(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(py, [0, 1], [3, -3]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(px, [0, 1], [-3, 3]), { stiffness: 200, damping: 20 });

  const onMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    px.set(x);
    py.set(y);
    ref.current.style.setProperty('--spot-x', `${x * 100}%`);
    ref.current.style.setProperty('--spot-y', `${y * 100}%`);
  };
  const onLeave = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <div style={{ perspective: 1200 }} className="h-full">
      <motion.article
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className={`spotlight relative h-full ${className}`}
      >
        {children}
      </motion.article>
    </div>
  );
};

// Nudges its child a few pixels toward the cursor while hovered.
export const Magnetic = ({ children, strength = 0.25 }) => {
  const ref = useRef(null);
  const x = useSpring(0, { stiffness: 250, damping: 18 });
  const y = useSpring(0, { stiffness: 250, damping: 18 });

  const onMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((e.clientY - (rect.top + rect.height / 2)) * strength);
  };
  const reset = () => { x.set(0); y.set(0); };

  return (
    <motion.span
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ x, y }}
      className="inline-block"
    >
      {children}
    </motion.span>
  );
};
