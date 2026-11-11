import React from 'react'
import { FaHandsHelping } from "react-icons/fa"
import { Reveal, SectionHeading } from './Shared';

const Volunteer = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading number="06" title="Volunteering" />

        <Reveal delay={0.1}>
          <div className="relative border border-line bg-raised p-8 md:p-12">
            {/* Corner accents */}
            <span className="absolute -left-px -top-px h-6 w-6 border-l-2 border-t-2 border-accent" />
            <span className="absolute -bottom-px -right-px h-6 w-6 border-b-2 border-r-2 border-accent" />

            <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-12">
              <div className="flex shrink-0 items-center justify-center border border-line bg-accent-tint p-6">
                <FaHandsHelping className="text-4xl text-accent" />
              </div>

              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-soft">
                  I've been volunteering on a project aimed at revolutionizing education
                  technology. Using React.js and Tailwind CSS, we're crafting dynamic and
                  intuitive interfaces for an enhanced learning experience. It's been
                  rewarding to apply my skills to such a meaningful cause and collaborate
                  with a dedicated team — and I'm excited to keep contributing to a more
                  engaging educational environment.
                </p>

                <div className="flex flex-wrap gap-2">
                  {['React.js', 'Tailwind CSS', 'Education Tech'].map((tech) => (
                    <span
                      key={tech}
                      className="border border-line px-3 py-1 font-mono text-xs text-soft"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Volunteer
