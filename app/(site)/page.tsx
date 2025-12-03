import { getProfile } from "@/sanity/sanity.query";
import type { ProfileType } from "@/types";
import HeroSvg from "./icons/HeroSvg";
import Job from "./components/Job";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

export default async function Home() {
  const profile: ProfileType = await getProfile();

  return (
    <main className="scroll-smooth">
      {/* SEÇÃO HERO/SOBRE */}
      <section id="sobre" className="max-w-7xl mx-auto lg:px-16 px-6">
        <div className="flex xl:flex-row flex-col xl:items-center items-start xl:justify-center justify-between gap-x-12 lg:mt-32 mt-20 mb-16">
          {profile && (
            <div className="lg:max-w-2xl max-w-2xl">
              <h1 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight lg:min-w-[700px] min-w-full">
                {profile.headline}
              </h1>
              <p className="text-base text-zinc-400 leading-relaxed">
                {profile.shortBio}
              </p>
              {profile.socialLinks && (
                <ul className="flex items-center gap-x-6 my-10">
                  {Object.entries(profile.socialLinks)
                    .sort()
                    .map(([key, value], id) => (
                      <li key={id}>
                        <a
                          href={value}
                          rel="noreferer noopener"
                          className="flex items-center gap-x-3 mb-5 hover:text-purple-400 duration-300"
                        >
                          {key[0].toUpperCase() + key.toLowerCase().slice(1)}
                        </a>
                      </li>
                    ))}
                </ul>
              )}
            </div>
          )}
          <HeroSvg />
        </div>
      </section>

      {/* SEÇÃO HABILIDADES */}
      <Skills />

      {/* SEÇÃO PROJETOS */}
      <section id="projetos" className="max-w-7xl mx-auto lg:px-16 px-6 mb-20">
        <h2 className="text-3xl font-bold tracking-tight mb-12">Projetos</h2>
        <Projects />
      </section>

      {/* SEÇÃO EXPERIÊNCIA */}
      <section id="experiencia" className="max-w-7xl mx-auto lg:px-16 px-6 mb-20">
        <h2 className="text-3xl font-bold tracking-tight mb-12">Experiência</h2>
        <Job />
      </section>

      {/* SEÇÃO CERTIFICAÇÕES */}
      <Certifications />

      {/* SEÇÃO CONTATO */}
      <Contact />
    </main>
  );
}
