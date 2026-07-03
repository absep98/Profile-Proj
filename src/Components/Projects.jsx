import React from 'react'
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import { Reveal, SectionHeading } from './Shared';

const projects = [
  {
    title: "TabInsights",
    badge: "Published — Chrome Web Store",
    description: "A Chrome extension with 67 features spanning time analytics, focus sprints, tab automation, website blocking and AI productivity insights. Production-grade internals: a write-lock queue preventing storage race conditions, Shadow DOM isolation, service-worker restart recovery and a Pro/Free feature-flag gatekeeper.",
    tech: ["JavaScript", "Manifest V3", "Chrome APIs", "Chart.js"],
    github: "https://github.com/absep98/Smart-Tab-Manager-Pro",
    live: "https://chromewebstore.google.com/detail/tabinsights-productivity/jfnfcaeagpcloialnbhibiecbphohebm",
  },
  {
    title: "Personal Analytics Backend",
    badge: "Production-grade",
    description: "A production-ready REST API built in Go from scratch — JWT + bcrypt auth with per-user data isolation, Redis cache-aside with write-invalidation, a three-state circuit breaker with half-open recovery, retry with exponential backoff, worker pools and signed webhooks. Structured slog logging and per-endpoint metrics, docker-compose (app + Postgres + Redis + nginx), and a full test suite across the circuit breaker, retry, handlers and middleware.",
    tech: ["Go", "PostgreSQL", "Redis", "Docker", "GitHub Actions"],
    github: null, // private repo (absep98/Go_learn) — no public link
    live: null,
  },
  {
    title: "Markdown TTS",
    badge: "Published — VS Code Marketplace",
    description: "A VS Code extension that reads markdown files aloud — Windows SAPI, macOS say or Edge neural voices — and lets you dictate into Copilot Chat using OS-native voice input. Streaming playback, works offline, no API keys needed.",
    tech: ["VS Code API", "Node.js", "Edge Neural TTS"],
    github: "https://github.com/absep98/Vscode-Extns-Develop",
    live: "https://marketplace.visualstudio.com/items?itemName=AbhishekShr.markdown-tts",
  },
  {
    title: "Social Poster",
    badge: "Shipped",
    description: "A full-stack social media management platform with real-time publishing to the LinkedIn and Twitter APIs — JWT + bcrypt auth, encrypted credential storage, modular service architecture, and a TypeScript + Tailwind dashboard with post scheduling and CRUD operations.",
    tech: ["Next.js 15", "Node.js", "Express", "MongoDB", "TypeScript"],
    github: "https://github.com/absep98/social-poster",
    live: null,
  }
];

const Projects = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading number="03" title="Things I've built" />

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={0.1 + index * 0.1}>
              <article className="group flex h-full flex-col border border-line bg-raised p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent">
                <div className="flex items-start justify-between">
                  <span className="font-mono text-sm text-accent">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="flex gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} source code`}
                        className="text-soft transition-colors hover:text-accent"
                      >
                        <FaGithub size={20} />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} live demo`}
                        className="text-soft transition-colors hover:text-accent"
                      >
                        <FaExternalLinkAlt size={17} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="mt-6 font-display text-2xl font-semibold text-ink transition-colors group-hover:text-accent">
                  {project.title}
                </h3>

                {project.badge && (
                  <span className="mt-2 inline-block bg-accent-tint px-2 py-0.5 font-mono text-xs text-accent">
                    {project.badge}
                  </span>
                )}

                <p className="mt-4 flex-1 leading-relaxed text-soft">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="border border-line px-3 py-1 font-mono text-xs text-soft"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3} className="mt-12 text-center">
          <a
            href="https://github.com/absep98"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 font-mono text-sm text-soft transition-colors hover:text-accent"
          >
            <FaGithub />
            <span>More on GitHub</span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </Reveal>
      </div>
    </section>
  )
}

export default Projects
