import MyImage from '../Data/image.jpg';
import Pic from '../Data/pic.jpg';
import { IoMdCloudDownload } from "react-icons/io";
import { Reveal, SectionHeading } from './Shared';

const facts = [
  { label: 'Education', value: 'B.Tech IT, PSG College of Technology · GPA 8.28' },
  { label: 'Currently', value: 'Software Engineer @ Citrix, Bengaluru' },
  { label: 'Shipped', value: 'TabInsights (Chrome) & Markdown TTS (VS Code)' },
  { label: 'Focus', value: 'Go, backend systems & AI integration' },
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
                I'm a backend engineer with 4.5 years of experience building
                production-grade systems at scale — strongest in{' '}
                <span className="font-semibold text-ink">Go and Python</span>, with
                real-world AI integration (Azure OpenAI, Claude Code) shipped at
                Citrix for 1M+ users. I learn by building: a Chrome extension
                published on the Web Store, a VS Code extension live on the
                marketplace, and a Go REST API engineered to production standards.
                I care about REST API design, system reliability and building
                products that solve real problems.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
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
                href="https://drive.google.com/file/d/1jIoSbuR9JC3SFgrXlih-y8GE2LT_H4wK/view"
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
