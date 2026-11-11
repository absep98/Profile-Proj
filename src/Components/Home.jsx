import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import { Magnetic } from './Shared';

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] } },
};

// Each letter rises out of a mask, one after another.
const letterParent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.035 } },
};
const letter = {
  hidden: { y: '105%' },
  show: { y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const AnimatedWord = ({ text }) => (
  <motion.span variants={letterParent} className="inline-flex overflow-hidden pb-[0.08em]" aria-hidden="true">
    {text.split('').map((ch, i) => (
      <motion.span key={i} variants={letter} className="inline-block">{ch}</motion.span>
    ))}
  </motion.span>
);

// The things I build, cycled in the tagline.
const BUILDS = ['AI agents', 'Go backends', 'browser extensions', 'Claude Code plugins', 'things'];

const RotatingWord = () => {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % BUILDS.length), 2400);
    return () => clearInterval(id);
  }, []);
  return (
    // Own line below desktop width, so a longer word never changes the line count.
    <span className="relative flex overflow-hidden align-bottom lg:inline-flex">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={BUILDS[i]}
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="inline-block not-italic text-accent"
        >
          {BUILDS[i]}
        </motion.span>
      </AnimatePresence>
      <span className="caret ml-0.5 inline-block w-[2px] self-stretch bg-accent" aria-hidden="true" />
    </span>
  );
};

function Home() {
  return (
    <section className="relative flex min-h-[calc(100vh-4.5rem)] items-center overflow-hidden">
      {/* Oversized watermark initials */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-8 top-1/2 -translate-y-1/2 select-none font-display text-[16rem] font-bold leading-none text-ink opacity-[0.04] md:text-[26rem]"
      >
        AS
      </span>

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-8"
      >
        <motion.p variants={item} className="mb-6 font-mono text-sm text-accent">
          {'// backend engineer · bengaluru, india'}
        </motion.p>

        <motion.h1
          variants={letterParent}
          aria-label="Abhishek Sharma"
          className="font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          <AnimatedWord text="Abhishek" />
          <br />
          <AnimatedWord text="Sharma" />
          <motion.span
            aria-hidden="true"
            className="inline-block text-accent"
            variants={{
              hidden: { scale: 0, opacity: 0 },
              show: { scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 500, damping: 14, delay: 0.55 } },
            }}
          >
            .
          </motion.span>
        </motion.h1>

        <motion.h2
          variants={item}
          className="mt-6 font-display text-2xl font-medium italic text-soft sm:text-3xl"
        >
          I build <RotatingWord /> for fun and learning.
        </motion.h2>

        <motion.p variants={item} className="mt-8 max-w-xl text-lg leading-relaxed text-soft">
          Backend engineer with 5 years in Python and Go, now focused on production
          LLM systems. At Citrix I build AI agents that triage CI failures and test
          our admin portal. After hours I ship small tools: two published extensions,
          three Claude Code plugins, and a RAG assistant I harden with real evals.
        </motion.p>

        <motion.p variants={item} className="mt-6 max-w-xl border-l-2 border-accent pl-4 font-mono text-sm leading-relaxed text-soft">
          <span className="text-accent">now (nov 2026)</span> · day 45 of learning AI in
          public, on tool-calling loops · a private Go side project
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-5">
          <Magnetic>
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              offset={-72}
              className="cursor-pointer border border-ink bg-ink px-7 py-3 text-sm font-semibold text-paper transition-colors duration-300 hover:bg-transparent hover:text-ink"
            >
              See my work
            </ScrollLink>
          </Magnetic>
          <Magnetic>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              offset={-72}
              className="cursor-pointer border border-line px-7 py-3 text-sm font-semibold text-ink transition-colors duration-300 hover:border-accent hover:text-accent"
            >
              Get in touch
            </ScrollLink>
          </Magnetic>
          <span className="hidden h-px w-10 bg-line sm:block" />
          <a
            href="https://github.com/absep98"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-soft transition-colors hover:text-accent"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/abhishek-sharma-688566151/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-soft transition-colors hover:text-accent"
          >
            <FaLinkedin size={22} />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="h-12 w-px animate-pulse bg-gradient-to-b from-transparent via-accent to-transparent" />
      </motion.div>
    </section>
  );
}

export default Home;
