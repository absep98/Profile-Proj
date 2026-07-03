import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] } },
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
          variants={item}
          className="font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Abhishek
          <br />
          Sharma<span className="text-accent">.</span>
        </motion.h1>

        <motion.h2
          variants={item}
          className="mt-6 font-display text-2xl font-medium italic text-soft sm:text-3xl"
        >
          I build things for fun and learning.
        </motion.h2>

        <motion.p variants={item} className="mt-8 max-w-xl text-lg leading-relaxed text-soft">
          Backend engineer with 4.5 years of experience building production-grade
          systems at scale — deep in Go and Python, integrating AI at Citrix for
          products serving 1M+ users, and shipping side projects from a published
          Chrome extension to a production-ready Go API.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-5">
          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            offset={-72}
            className="cursor-pointer border border-ink bg-ink px-7 py-3 text-sm font-semibold text-paper transition-colors duration-300 hover:bg-transparent hover:text-ink"
          >
            See my work
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            offset={-72}
            className="cursor-pointer border border-line px-7 py-3 text-sm font-semibold text-ink transition-colors duration-300 hover:border-accent hover:text-accent"
          >
            Get in touch
          </ScrollLink>
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
