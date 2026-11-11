import MyImage from '../Data/image.jpg';
import Pic from '../Data/pic.jpg';
import { IoMdCloudDownload } from "react-icons/io";
import { Reveal, SectionHeading, CountUp } from './Shared';

const facts = [
  { label: 'Currently', value: 'Software Engineer @ Citrix, Bengaluru' },
  { label: 'Focus', value: 'Production LLM systems, Go & Python backends' },
  { label: 'Education', value: 'B.Tech IT, PSG College of Technology · GPA 8.28' },
  { label: 'Certified', value: 'HackerRank: Java & Python · PMSSS Scholar' },
];

const stats = [
  { to: 5, suffix: '+', label: 'years building backends' },
  { to: 500, suffix: '+', label: 'installs across my extensions' },
  { to: 83, suffix: '%', label: 'fewer manual test cycles at Citrix' },
  { to: 30, suffix: '', label: 'posts on what I build and what broke' },
];

const MainCont = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading number="01" title="About me" />

        <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
          {/* Photo with offset frame; second photo revealed on hover */}
          <Reveal className="flex justify-center lg:w-2/5 lg:justify-start" delay={0.1}>
            <div className="group relative mt-2 h-[300px] w-[280px] sm:h-[340px] sm:w-[320px]">
              <div className="absolute inset-0 translate-x-4 translate-y-4 border border-accent transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />
              <img
                src={MyImage}
                alt="Abhishek Sharma"
                className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-500 group-hover:opacity-0"
              />
              <img
                src={Pic}
                alt="Abhishek Sharma, alternate"
                className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
            </div>
          </Reveal>

          {/* Bio + facts + resume */}
          <div className="space-y-10 lg:w-3/5">
            <Reveal delay={0.15}>
              <p className="text-lg leading-relaxed text-soft">
                I'm a backend engineer with five years in{' '}
                <span className="font-semibold text-ink">Python and Go</span>. These
                days most of my work is about making LLM systems behave in production:
                grounding answers, writing evals, and stopping prompt injection. At
                Citrix that means AI agents for CI triage and browser testing; at home
                it means a RAG assistant I keep breaking on purpose.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <p className="text-lg leading-relaxed text-soft">
                I learn by building and then writing down what went wrong. Earlier
                this year I learned Go by building a backend from scratch and wrote
                16 posts about it, from the first commit to deploying it on a VPS.
                Most of my side projects start as something that annoyed me: four
                browser extensions doing one job, or not knowing which Claude Code
                session was waiting on me.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="grid grid-cols-2 gap-y-6 border-y border-line py-6 sm:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="pr-4">
                    <div className="font-display text-4xl font-semibold text-ink md:text-5xl">
                      <CountUp to={stat.to} suffix={stat.suffix} />
                    </div>
                    <p className="mt-1 text-sm leading-snug text-soft">{stat.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <dl className="grid grid-cols-1 gap-px overflow-hidden border border-line bg-line sm:grid-cols-2">
                {facts.map((fact) => (
                  <div key={fact.label} className="bg-raised p-5">
                    <dt className="font-mono text-xs uppercase tracking-widest text-accent">
                      {fact.label}
                    </dt>
                    <dd className="mt-2 m-0 font-medium text-ink">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={0.25}>
              <a
                href={`${process.env.PUBLIC_URL}/Abhishek_Sharma_Resume.pdf`}
                download="Abhishek_Sharma_Resume.pdf"
                rel="noreferrer"
                target="_blank"
                className="group inline-flex items-center gap-3 border border-ink bg-ink px-7 py-3 text-sm font-semibold text-paper transition-colors duration-300 hover:bg-transparent hover:text-ink"
              >
                <span>Download Resume</span>
                <IoMdCloudDownload className="text-lg transition-transform group-hover:-translate-y-0.5" />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MainCont;
