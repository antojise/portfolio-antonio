import { getProjects } from "@/sanity/sanity.query";
import type { ProjectType } from "@/types";
import Image from "next/image";

export default async function Projects() {
  const projects: ProjectType[] = await getProjects();

  return (
    <div className="mt-12">
      <div className="grid lg:grid-cols-1 grid-cols-1 gap-8">
        {projects.map((project) => (
          <div
            key={project._id}
            className="border border-zinc-800 rounded-lg p-6 hover:border-purple-400 duration-300"
          >
            {/* Header do Projeto */}
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="px-3 py-1 bg-yellow-600/20 text-yellow-400 rounded-full text-sm">
                      ⭐ Destaque
                    </span>
                  )}
                </div>
              </div>
              {project.projectUrl && (
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 duration-300"
                >
                  Ver projeto →
                </a>
              )}
            </div>

            {/* As 3 Colunas */}
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 mt-6">
              {/* Coluna 1: Gap */}
              <div>
                <h4 className="text-sm font-semibold text-purple-400 mb-2 uppercase tracking-wide">
                  🎯 Problema de Negócio
                </h4>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {project.gap}
                </p>
              </div>

              {/* Coluna 2: Solução */}
              <div>
                <h4 className="text-sm font-semibold text-blue-400 mb-2 uppercase tracking-wide">
                  ⚙️ Solução Aplicada
                </h4>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {project.solution}
                </p>
              </div>

              {/* Coluna 3: Impacto */}
              <div>
                <h4 className="text-sm font-semibold text-green-400 mb-2 uppercase tracking-wide">
                  📈 Impacto & Resultado
                </h4>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {project.impact}
                </p>
              </div>
            </div>

            {/* Tecnologias */}
            {project.technologies && project.technologies.length > 0 && (
              <div className="mt-6 pt-4 border-t border-zinc-800">
                <p className="text-sm text-zinc-500 mb-2">Tecnologias:</p>
                <div className="flex gap-2 flex-wrap">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-zinc-800 text-zinc-400 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {projects.length === 0 && (
        <p className="text-zinc-400 text-center py-10">
          Nenhum projeto cadastrado ainda. Adicione projetos no Sanity Studio!
        </p>
      )}
    </div>
  );
}
