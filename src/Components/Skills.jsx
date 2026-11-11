import React from 'react'
import { motion } from 'framer-motion';
import { FaReact, FaJava, FaPython, FaGitAlt, FaRobot } from "react-icons/fa";
import { TbSql, TbDatabaseSearch, TbRoute, TbTestPipe, TbShieldLock } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiGo, SiTypescript, SiNodedotjs, SiExpress, SiFlask, SiFastapi, SiPostgresql, SiRedis,
  SiMongodb, SiSqlite, SiSupabase, SiOpenai, SiPlaywright, SiNextdotjs, SiRedux, SiTailwindcss,
  SiGooglechrome, SiDocker, SiGithubactions, SiJenkins, SiNginx, SiPrometheus, SiRender, SiPytest
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
    category: 'AI / LLM',
    skills: [
      { name: 'RAG & vector search', icon: TbDatabaseSearch },
      { name: 'Tool routing & calling', icon: TbRoute },
      { name: 'Eval harnesses', icon: TbTestPipe },
      { name: 'Prompt-injection hardening', icon: TbShieldLock },
      { name: 'Azure OpenAI', icon: SiOpenai },
      { name: 'Claude Code agents & plugins', icon: FaRobot },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'FastAPI', icon: SiFastapi },
      { name: 'Flask', icon: SiFlask },
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Express.js', icon: SiExpress },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'Redis', icon: SiRedis },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'SQLite', icon: SiSqlite },
      { name: 'Supabase', icon: SiSupabase },
    ],
  },
  {
    category: 'Infra & Testing',
    skills: [
      { name: 'Docker', icon: SiDocker },
      { name: 'GitHub Actions', icon: SiGithubactions },
      { name: 'Jenkins', icon: SiJenkins },
      { name: 'nginx', icon: SiNginx },
      { name: 'Prometheus', icon: SiPrometheus },
      { name: 'Render', icon: SiRender },
      { name: 'Playwright', icon: SiPlaywright },
      { name: 'pytest', icon: SiPytest },
      { name: 'Git', icon: FaGitAlt },
    ],
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'React', icon: FaReact },
      { name: 'Redux', icon: SiRedux },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'Chrome Extensions (MV3)', icon: SiGooglechrome },
    ],
  },
];

const badgeParent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.045, delayChildren: 0.1 } },
};
const badge = {
  hidden: { opacity: 0, y: 14, scale: 0.94 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 380, damping: 24 } },
};

const Skills = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading number="05" title="Skills & technologies" />

        <div className="space-y-12">
          {skillGroups.map((group, groupIndex) => (
            <Reveal key={group.category} delay={0.1 + groupIndex * 0.08}>
              <div className="flex flex-col gap-4 md:flex-row md:gap-12">
                <h3 className="shrink-0 font-mono text-sm uppercase tracking-widest text-accent md:w-44 md:pt-4">
                  {group.category}
                </h3>
                <motion.div
                  className="flex flex-1 flex-wrap gap-3"
                  variants={badgeParent}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: '-40px' }}
                >
                  {group.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      variants={badge}
                      className="group flex items-center gap-3 border border-line bg-raised px-5 py-3 transition-colors duration-300 hover:border-accent"
                      whileHover={{ y: -3 }}
                    >
                      <skill.icon className="text-xl text-soft transition-colors group-hover:text-accent" />
                      <span className="text-sm font-medium text-ink">{skill.name}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4} className="mt-16">
          <p className="text-center font-mono text-sm italic text-soft">
            currently learning: agent tool-calling loops (day 45 of learning AI in public)
          </p>
        </Reveal>
      </div>
    </section>
  )
}

export default Skills
