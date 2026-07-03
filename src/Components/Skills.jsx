import React from 'react'
import { FaReact, FaJava, FaPython, FaGitAlt, FaRobot } from "react-icons/fa";
import { TbSql } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiGo, SiTypescript, SiNodedotjs, SiExpress, SiFlask, SiPostgresql, SiRedis,
  SiMongodb, SiOpenai, SiPlaywright, SiNextdotjs, SiRedux, SiTailwindcss,
  SiGooglechrome, SiDocker, SiGithubactions, SiJenkins, SiPytest
} from "react-icons/si";
import { Reveal, SectionHeading } from './Shared';

const skillGroups = [
  {
    category: 'Languages',
    skills: [
      { name: 'Go', icon: SiGo },
      { name: 'Python', icon: FaPython },
      { name: 'JavaScript', icon: IoLogoJavascript },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Java', icon: FaJava },
      { name: 'SQL', icon: TbSql },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Express.js', icon: SiExpress },
      { name: 'Flask', icon: SiFlask },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'Redis', icon: SiRedis },
      { name: 'MongoDB', icon: SiMongodb },
    ],
  },
  {
    category: 'AI / LLM',
    skills: [
      { name: 'Azure OpenAI', icon: SiOpenai },
      { name: 'Claude Code', icon: FaRobot },
      { name: 'Playwright', icon: SiPlaywright },
    ],
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'React', icon: FaReact },
      { name: 'Redux', icon: SiRedux },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'Chrome Extensions', icon: SiGooglechrome },
    ],
  },
  {
    category: 'Infra & Testing',
    skills: [
      { name: 'Docker', icon: SiDocker },
      { name: 'GitHub Actions', icon: SiGithubactions },
      { name: 'Jenkins', icon: SiJenkins },
      { name: 'Git', icon: FaGitAlt },
      { name: 'pytest', icon: SiPytest },
    ],
  },
];

const Skills = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading number="04" title="Skills & technologies" />

        <div className="space-y-12">
          {skillGroups.map((group, groupIndex) => (
            <Reveal key={group.category} delay={0.1 + groupIndex * 0.08}>
              <div className="flex flex-col gap-4 md:flex-row md:gap-12">
                <h3 className="shrink-0 font-mono text-sm uppercase tracking-widest text-accent md:w-44 md:pt-4">
                  {group.category}
                </h3>
                <div className="flex flex-1 flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group flex items-center gap-3 border border-line bg-raised px-5 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent"
                    >
                      <skill.icon className="text-xl text-soft transition-colors group-hover:text-accent" />
                      <span className="text-sm font-medium text-ink">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4} className="mt-16">
          <p className="text-center font-mono text-sm italic text-soft">
            ...constantly learning and improving
          </p>
        </Reveal>
      </div>
    </section>
  )
}

export default Skills
