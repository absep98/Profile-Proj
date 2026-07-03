import React from 'react'
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
    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <section className="px-4 pt-24 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">
                <SectionHeading number="06" title="Let's talk" />

                <div className="mx-auto max-w-2xl pb-24 text-center">
                    <Reveal delay={0.1}>
                        <p className="text-lg leading-relaxed text-soft">
                            I'm on the lookout for exciting new opportunities, and my inbox is
                            always open. Whether you have a question or just want to say hello,
                            I'll do my best to get back to you — promptly, and with a smile.
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
                        Built with React & Tailwind CSS
                    </p>
                </div>
            </footer>

            {/* Scroll to top */}
            <button
                onClick={scrollTop}
                aria-label="Scroll to top"
                className="group fixed bottom-8 right-8 z-30 border border-line bg-raised p-3 text-soft shadow-lg transition-all duration-300 hover:border-accent hover:text-accent"
            >
                <FaArrowAltCircleUp size={20} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
            </button>
        </section>
    )
}

export default Contact
