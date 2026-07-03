import React, { useState } from 'react'
import { HiChevronRight } from 'react-icons/hi'
import { Reveal, SectionHeading } from './Shared';

const experiences = {
    citrix: {
        company: "Citrix Systems",
        title: "Software Engineer",
        period: "May 2023 — Present · Bengaluru",
        duties: [
            "Built an AI-powered Jenkins log analyzer integrating Claude Code with the Slack API — turns raw nightly CI failures into per-category bug tickets with deduplication and structured Slack summaries, cutting engineer triage time from hours to minutes.",
            "Developed an Azure OpenAI + Playwright automation framework orchestrated by the GPT-4 Computer Use API — eliminated 83% of manual testing cycles across the Citrix admin portal with self-healing browser automation.",
            "Shipped new admin UI capabilities into NetScaler Gateway serving enterprise customers globally — Device Posture Service as a first-class auth factor, EDT Lossy ICA params, Custom Portal Theme CSS and Advanced Policy controls — with parallel backports across the 13.1 and 14.1 release trains.",
            "Optimized React + Redux admin UI components, improving dashboard performance by 40% and cutting load time by 1.2 seconds; authored the Citrix Workspace theme for the admin portal.",
            "Resolved critical CSA script failures reducing login failures by 35% for 1M+ users, migrated JavaScript libraries cutting security vulnerabilities by 30%, and automated CI/CD pipelines via Jenkins reducing release cycle time by 40%."
        ]
    },
    juniper: {
        company: "Juniper Networks",
        title: "Software Engineer 2",
        period: "Jul 2021 — May 2023 · Bengaluru",
        duties: [
            "Built a Negative Event API using Python and Flask enabling 200+ automated test scenarios — clean REST API contracts, structured error responses and comprehensive edge-case coverage for network event handling across MX device deployments.",
            "Enhanced bandwidth monitoring and telemetry reporting features for MX devices — designed, implemented and shipped production-tested backend functionality.",
            "Modernized the automation stack by migrating 50+ legacy scripts to Python with parallel execution support, reducing test cycle time by 35%."
        ]
    }
};

const Experience = () => {
    const [activeTab, setActiveTab] = useState('citrix');

    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">
                <SectionHeading number="02" title="Where I've worked" />

                <Reveal delay={0.1}>
                    <div className="flex flex-col gap-8 md:flex-row md:gap-12">
                        {/* Tab buttons */}
                        <div className="no-scrollbar flex overflow-x-auto border-b border-line md:w-64 md:flex-col md:border-b-0 md:border-l">
                            {Object.entries(experiences).map(([key, value]) => (
                                <button
                                    key={key}
                                    onClick={() => setActiveTab(key)}
                                    className={`whitespace-nowrap px-5 py-3 text-left font-mono text-sm transition-colors duration-300
                                        ${activeTab === key
                                            ? 'border-b-2 border-accent bg-accent-tint text-accent md:-ml-px md:border-b-0 md:border-l-2'
                                            : 'text-soft hover:bg-accent-tint hover:text-ink'}`}
                                >
                                    {value.company}
                                </button>
                            ))}
                        </div>

                        {/* Content */}
                        <div className="flex-1" key={activeTab}>
                            <div className="animate-fade-in-up">
                                <h3 className="font-display text-2xl font-semibold text-ink">
                                    {experiences[activeTab].title}
                                    <span className="text-accent"> · {experiences[activeTab].company}</span>
                                </h3>
                                <p className="mt-2 font-mono text-sm text-soft">
                                    {experiences[activeTab].period}
                                </p>
                                <ul className="mt-6 space-y-4 p-0">
                                    {experiences[activeTab].duties.map((duty, index) => (
                                        <li key={index} className="flex gap-3">
                                            <HiChevronRight className="mt-1 shrink-0 text-accent" />
                                            <span className="leading-relaxed text-soft">{duty}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    )
}

export default Experience
