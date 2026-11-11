import React from 'react'
import { FaGithub, FaExternalLinkAlt, FaLock } from "react-icons/fa"
import { FiArrowUpRight } from "react-icons/fi"
import { Reveal, SectionHeading, SpotlightCard } from './Shared';

// `why` lines are my own words, from the README or blog post behind each project.
const projects = [
  {
    title: "Repo Assistant",
    why: "No ML degree, no three-month course first. Learn one concept, build something, ship it, repeat.",
    badge: "Live · learning AI in public · day 45",
    description: "A RAG assistant over 697 chunks of my own daily notes, with a model-based tool router that falls back to rules on bad output, served from FastAPI with a web chat UI. Eval harnesses took retrieval from 5% to 80% and the live endpoint to 90%. I ran six prompt-injection attempts and closed an information-disclosure gap, added token-cost tracking, a TTL cache (and fixed the cache-poisoning bug it caused) and per-IP rate limiting.",
    tech: ["Python", "FastAPI", "ChromaDB", "Groq", "Render"],
    github: "https://github.com/absep98/AI-learning-Kickoff",
    live: "https://repo-assistant-api.onrender.com/chat",
    story: { label: "What 22 days of building AI systems taught me", url: "https://dev.to/abhishek_sharma_a9792aee8/what-22-days-of-building-ai-systems-taught-me-grounding-evals-and-control-83" },
  },
  {
    title: "Personal Analytics Backend",
    why: "I stopped watching tutorials and started building a REST API in Go.",
    badge: "Deployed to a VPS · 16-part build log",
    description: "A Go REST API built from scratch: JWT + bcrypt auth, Redis cache-aside, a three-state circuit breaker, retry with backoff, a worker pool with graceful drain, HMAC-signed webhooks with a dead-letter queue for failed jobs, and a six-layer middleware stack. 51 tests run against real Postgres in GitHub Actions, which also deploys it to a VPS behind nginx.",
    tech: ["Go", "PostgreSQL", "Redis", "Docker", "nginx", "GitHub Actions"],
    github: null, // private repo
    live: null,
    story: { label: "Read the build log, from the first commit", url: "https://dev.to/abhishek_sharma_a9792aee8/why-i-decided-to-learn-go-and-what-my-first-commit-looked-like-38ii" },
  },
  {
    title: "TabInsights",
    why: "I got tired of running four browser extensions, so I built one.",
    badge: "Published · Chrome Web Store · v2.5 · rated 5.0",
    description: "Website blocker, time tracker and Pomodoro focus timer in one extension, with 67 features across time analytics, focus sprints, tab automation and AI productivity insights. Under the hood: a write-lock queue that prevents storage race conditions, Shadow DOM isolation, service-worker restart recovery and a Pro/Free feature-flag gatekeeper.",
    tech: ["JavaScript", "Manifest V3", "Chrome APIs", "Chart.js"],
    github: "https://github.com/absep98/Smart-Tab-Manager-Pro",
    live: "https://chromewebstore.google.com/detail/tabinsights-productivity/jfnfcaeagpcloialnbhibiecbphohebm",
    story: { label: "Why I built it", url: "https://dev.to/abhishek_sharma_a9792aee8/i-got-tired-of-running-4-browser-extensions-so-i-built-one-4i8f" },
  },
  {
    title: "Markdown TTS",
    why: "A VS Code extension that reads your code aloud and narrates git diffs with AI.",
    badge: "Published · VS Code Marketplace · 500+ installs",
    description: "Reads markdown and code aloud through Windows SAPI, macOS say or Edge neural voices, narrates git diffs with an LLM (OpenAI, Anthropic or Groq, on your own key), speaks Claude Code alerts, and lets you dictate into Copilot Chat with your OS's own voice input. Streaming playback; the local voices work offline.",
    tech: ["JavaScript", "VS Code API", "Node.js", "LLM APIs"],
    github: "https://github.com/absep98/Vscode-Extns-Develop",
    live: "https://marketplace.visualstudio.com/items?itemName=AbhishekShr.markdown-tts",
    story: { label: "How it started", url: "https://dev.to/abhishek_sharma_a9792aee8/i-built-a-vs-code-extension-that-reads-your-code-aloud-and-narrates-git-diffs-with-ai-31b4" },
  },
  // Personal projects: shown, but the details stay private. Nothing personal is
  // in this file. The blurred block renders placeholder text, not the real description.
  {
    title: "pfi-engine",
    personal: true,
    badge: "Private · personal project",
    teaser: "A local-first Go engine I built for my own data.",
    tech: ["Go", "SQLite", "WebAssembly"],
    github: null,
    live: null,
  },
  {
    title: "Confidence Gym",
    personal: true,
    badge: "Private · personal project",
    teaser: "A small app I built for myself, with an optional cloud sync.",
    tech: ["JavaScript", "Supabase", "PostgreSQL", "Vercel"],
    github: null,
    live: null,
  },
];

// Smaller things: one line each.
const smallTools = [
  {
    name: "Pipe Up",
    kind: "Claude Code plugin",
    line: "Hear what your coding agent did, without reading it. Speaks only when a session needs you.",
    url: "https://github.com/absep98/pipe-up",
  },
  {
    name: "Waitlight",
    kind: "Claude Code mod",
    line: "One line above the prompt showing which of your other sessions is waiting on you.",
    url: "https://github.com/absep98/waitlight",
  },
  {
    name: "Waypoint",
    kind: "Claude Code plugin",
    line: "Keeps one session goal in front of Claude before every prompt, until you clear it.",
    url: "https://github.com/absep98/waypoint",
  },
  {
    name: "Social Poster",
    kind: "Full-stack app",
    line: "Publish to LinkedIn and Twitter from one dashboard, with scheduling and encrypted credentials.",
    url: "https://github.com/absep98/social-poster",
  },
];

// Neutral filler shown under the blur on personal projects. It says nothing real.
const PLACEHOLDER = "This project is private. It was built to solve a problem of my own, runs mostly on my machine, and is not meant for anyone else yet. The details stay with me for now, but the stack is listed below and I am happy to talk about how it is built.";

const IconLink = ({ href, label, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    title={label}
    className="text-soft transition-colors hover:text-accent"
  >
    {children}
  </a>
);

const Projects = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading number="03" title="Things I've built" />

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={0.05 + (index % 2) * 0.1} className="h-full">
              <SpotlightCard className="group flex flex-col border border-line bg-raised p-8 transition-colors duration-300 hover:border-accent">
                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono text-sm text-accent">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="flex items-center gap-4">
                    {project.github && (
                      <IconLink href={project.github} label={`${project.title} source code`}>
                        <FaGithub size={20} />
                      </IconLink>
                    )}
                    {project.live && (
                      <IconLink href={project.live} label={`${project.title}, live`}>
                        <FaExternalLinkAlt size={16} />
                      </IconLink>
                    )}
                    {!project.github && (
                      <span title="Private repository" className="text-soft opacity-60">
                        <FaLock size={14} />
                      </span>
                    )}
                  </div>
                </div>

                <h3 className="mt-6 font-display text-2xl font-semibold text-ink transition-colors group-hover:text-accent">
                  {project.title}
                </h3>

                {project.badge && (
                  <span className="mt-2 inline-block self-start bg-accent-tint px-2 py-0.5 font-mono text-xs text-accent">
                    {project.badge}
                  </span>
                )}

                {project.why && (
                  <p className="mt-5 font-display text-lg italic leading-snug text-ink">
                    “{project.why}”
                  </p>
                )}

                {project.personal ? (
                  <div className="mt-5 flex-1">
                    <p className="leading-relaxed text-ink">{project.teaser}</p>
                    <div className="relative mt-4 overflow-hidden">
                      <p aria-hidden="true" className="pointer-events-none select-none leading-relaxed text-soft blur-[5px]">
                        {PLACEHOLDER}
                      </p>
                      <span className="absolute inset-0 flex items-center justify-center">
                        <span className="flex items-center gap-2 border border-line bg-paper px-3 py-1.5 font-mono text-xs text-soft">
                          <FaLock size={11} /> personal project, details private
                        </span>
                      </span>
                    </div>
                  </div>
                ) : (
                  <p className="mt-4 flex-1 leading-relaxed text-soft">
                    {project.description}
                  </p>
                )}

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

                {project.story && (
                  <a
                    href={project.story.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-1 self-start border-b border-line pb-0.5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
                  >
                    {project.story.label}
                    <FiArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                )}
              </SpotlightCard>
            </Reveal>
          ))}
        </div>

        {/* Smaller tools */}
        <Reveal delay={0.1} className="mt-20">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="font-display text-2xl font-semibold text-ink">Smaller tools</h3>
            <a
              href="https://dev.to/abhishek_sharma_a9792aee8/i-built-two-small-claude-code-plugins-this-week-heres-what-i-learned-about-hooks-2f29"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-mono text-xs text-soft transition-colors hover:text-accent"
            >
              what I learned about Claude Code hooks <FiArrowUpRight />
            </a>
          </div>
          <ul className="mt-6 border-t border-line p-0">
            {smallTools.map((tool) => (
              <li key={tool.name} className="border-b border-line">
                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group grid gap-1 py-5 transition-colors sm:grid-cols-[11rem_9rem_1fr_auto] sm:items-baseline sm:gap-6"
                >
                  <span className="font-display text-lg font-semibold text-ink transition-all duration-300 group-hover:translate-x-1.5 group-hover:text-accent">
                    {tool.name}
                  </span>
                  <span className="font-mono text-xs text-accent">{tool.kind}</span>
                  <span className="text-soft">{tool.line}</span>
                  <FiArrowUpRight className="hidden text-soft transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent sm:block" />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.2} className="mt-12 text-center">
          <a
            href="https://github.com/absep98"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 font-mono text-sm text-soft transition-colors hover:text-accent"
          >
            <FaGithub />
            <span>Everything else is on GitHub</span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </Reveal>
      </div>
    </section>
  )
}

export default Projects
