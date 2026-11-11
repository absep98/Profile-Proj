import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaLinkedin, FaArrowAltCircleUp, FaDev } from "react-icons/fa";
import { SiHashnode, SiSubstack } from "react-icons/si";
import { Reveal, SectionHeading } from './Shared';

const socialLinks = [
    {
        name: 'GitHub',
        icon: <FaGithub size={24} />,
        url: 'https://github.com/absep98',
    },
    {
        name: 'LinkedIn',
        icon: <FaLinkedin size={24} />,
        url: 'https://www.linkedin.com/in/abhishek-sharma-688566151/',
    },
    {
        name: 'Hashnode',
        icon: <SiHashnode size={24} />,
        url: 'https://abhishekshr.hashnode.dev/',
    },
    {
        name: 'Dev.to',
        icon: <FaDev size={24} />,
        url: 'https://dev.to/abhishek_sharma_a9792aee8',
    },
    {
        name: 'Substack',
        icon: <SiSubstack size={24} />,
        url: 'https://substack.com/@abhisheksharma539226',
    },
];

const Contact = () => {
    const [showTop, setShowTop] = useState(false);

    useEffect(() => {
        const onScroll = () => setShowTop(window.scrollY > 600);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <section className="px-4 pt-24 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">
                <SectionHeading number="07" title="Let's talk" />

                <div className="mx-auto max-w-2xl pb-24 text-center">
                    <Reveal delay={0.1}>
                        <p className="text-lg leading-relaxed text-soft">
                            A backend or AI role, a bug in one of my extensions, an idea for
                            a Claude Code plugin, or a disagreement with something I wrote:
                            email is the fastest way to reach me, and I read all of it.
                        </p>
                    </Reveal>

                    <Reveal delay={0.2}>
                        <a
                            href="mailto:absep98@gmail.com"
                            className="mt-10 inline-block border border-accent px-10 py-4 font-mono text-sm font-semibold text-accent transition-colors duration-300 hover:bg-accent hover:text-paper"
                        >
                            absep98@gmail.com
                        </a>
                    </Reveal>

                    <Reveal delay={0.3}>
                        <div className="mt-12 flex justify-center gap-8">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.name}
                                    className="flex flex-col items-center gap-2 text-soft transition-colors hover:text-accent"
                                >
                                    {social.icon}
                                    <span className="font-mono text-xs">{social.name}</span>
                                </a>
                            ))}
                        </div>
                    </Reveal>
                </div>
            </div>

            {/* Footer */}
            <footer className="border-t border-line py-8">
                <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 sm:flex-row sm:px-6 lg:px-8">
                    <p className="m-0 font-mono text-xs text-soft">
                        © {new Date().getFullYear()} Abhishek Sharma
                    </p>
                    <p className="m-0 font-mono text-xs text-soft">
                        Built with React & Tailwind CSS · last updated Nov 2026
                    </p>
                </div>
            </footer>

            {/* Scroll to top: appears once you've scrolled past the hero */}
            <AnimatePresence>
                {showTop && (
                    <motion.button
                        key="top"
                        onClick={scrollTop}
                        aria-label="Scroll to top"
                        initial={{ opacity: 0, y: 16, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 16, scale: 0.9 }}
                        transition={{ duration: 0.25 }}
                        className="group fixed bottom-8 right-8 z-30 border border-line bg-raised p-3 text-soft shadow-lg transition-colors duration-300 hover:border-accent hover:text-accent"
                    >
                        <FaArrowAltCircleUp size={20} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
                    </motion.button>
                )}
            </AnimatePresence>
        </section>
    )
}

export default Contact
