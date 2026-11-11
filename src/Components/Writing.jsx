import React from 'react'
import { FiArrowUpRight } from "react-icons/fi"
import { Reveal, SectionHeading } from './Shared';

const DEVTO = 'https://dev.to/abhishek_sharma_a9792aee8';

const posts = [
  {
    date: 'Sep 2026',
    tag: 'AI',
    title: 'What happens to your CI when AI writes 80 percent of your code',
    url: `${DEVTO}/what-happens-to-your-ci-when-ai-writes-80-percent-of-your-code-4haf`,
  },
  {
    date: 'Sep 2026',
    tag: 'AI',
    title: 'What 22 days of building AI systems taught me: grounding, evals and control',
    url: `${DEVTO}/what-22-days-of-building-ai-systems-taught-me-grounding-evals-and-control-83`,
  },
  {
    date: 'Aug 2026',
    tag: 'Tools',
    title: "I built two small Claude Code plugins this week. Here's what I learned about hooks",
    url: `${DEVTO}/i-built-two-small-claude-code-plugins-this-week-heres-what-i-learned-about-hooks-2f29`,
  },
  {
    date: 'May 2026',
    tag: 'Go',
    title: "I deployed my Go backend to a real VPS. Here's exactly what happened",
    url: `${DEVTO}/i-deployed-my-go-backend-to-a-real-vps-heres-exactly-what-happened-2dpj`,
  },
  {
    date: 'May 2026',
    tag: 'Go',
    title: 'My webhooks were sending data anyone could fake. HMAC signing fixed that',
    url: `${DEVTO}/my-webhooks-were-sending-data-anyone-could-fake-hmac-signing-fixed-that-gpm`,
  },
  {
    date: 'Apr 2026',
    tag: 'Go',
    title: 'My backend crashed every time Redis went down. Three patterns fixed that',
    url: `${DEVTO}/my-backend-crashed-every-time-redis-went-down-three-patterns-fixed-that-43j2`,
  },
];

const Writing = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading number="04" title="Writing" />

        <Reveal delay={0.1}>
          <p className="max-w-2xl text-lg leading-relaxed text-soft">
            I write up what I build, mostly the part where it broke and what fixed it.
            Thirty posts so far: a Go series written while I built my backend, notes from
            learning AI in public, and a weekly roundup on AI, Indian markets and fintech.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <ul className="mt-10 border-t border-line p-0">
            {posts.map((post) => (
              <li key={post.url} className="border-b border-line">
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group grid grid-cols-[1fr_auto] items-baseline gap-x-4 gap-y-1 py-5 sm:grid-cols-[6.5rem_3.5rem_1fr_auto] sm:gap-x-6"
                >
                  <span className="order-2 col-span-2 font-mono text-xs text-soft sm:order-none sm:col-span-1">
                    {post.date}
                    <span className="ml-3 text-accent sm:hidden">{post.tag}</span>
                  </span>
                  <span className="hidden font-mono text-xs text-accent sm:inline">{post.tag}</span>
                  <span className="font-display text-lg leading-snug text-ink transition-colors group-hover:text-accent sm:text-xl">
                    {post.title}
                  </span>
                  <FiArrowUpRight className="text-soft transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.2} className="mt-10 flex flex-wrap gap-x-8 gap-y-3 font-mono text-sm">
          <a href={DEVTO} target="_blank" rel="noopener noreferrer" className="text-soft transition-colors hover:text-accent">
            All 30 posts on dev.to →
          </a>
          <a href="https://abhishekshr.hashnode.dev/" target="_blank" rel="noopener noreferrer" className="text-soft transition-colors hover:text-accent">
            Hashnode →
          </a>
          <a href="https://substack.com/@abhisheksharma539226" target="_blank" rel="noopener noreferrer" className="text-soft transition-colors hover:text-accent">
            Substack →
          </a>
        </Reveal>
      </div>
    </section>
  )
}

export default Writing
