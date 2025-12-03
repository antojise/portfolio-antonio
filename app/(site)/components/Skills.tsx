export default function Skills() {
  const skills = {
    gestao: [
      "Scrum & Kanban",
      "BPMN (Bizagi)",
      "Azure DevOps",
      "ClickUp",
      "Gestão de Ciclo de Vida",
      "Análise de Riscos"
    ],
    dados: [
      "Power BI",
      "Looker Studio",
      "SQL",
      "Python",
      "Excel Avançado",
      "Dashboards & KPIs"
    ],
    automacao: [
      "n8n",
      "Make",
      "Apps Script",
      ".NET",
      "Integração de APIs"
    ]
  };

  return (
    <section id="habilidades" className="max-w-7xl mx-auto lg:px-16 px-6 mb-20">
      <h2 className="text-3xl font-bold tracking-tight mb-12">Habilidades</h2>
      
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
        <div className="border border-zinc-800 rounded-lg p-6 hover:border-purple-400 duration-300">
          <h3 className="text-xl font-semibold mb-4 text-purple-400">Gestão & Estratégia</h3>
          <ul className="space-y-2">
            {skills.gestao.map((skill, i) => (
              <li key={i} className="text-zinc-400">• {skill}</li>
            ))}
          </ul>
        </div>

        <div className="border border-zinc-800 rounded-lg p-6 hover:border-purple-400 duration-300">
          <h3 className="text-xl font-semibold mb-4 text-purple-400">Análise de Dados & BI</h3>
          <ul className="space-y-2">
            {skills.dados.map((skill, i) => (
              <li key={i} className="text-zinc-400">• {skill}</li>
            ))}
          </ul>
        </div>

        <div className="border border-zinc-800 rounded-lg p-6 hover:border-purple-400 duration-300">
          <h3 className="text-xl font-semibold mb-4 text-purple-400">Automação & Integrações</h3>
          <ul className="space-y-2">
            {skills.automacao.map((skill, i) => (
              <li key={i} className="text-zinc-400">• {skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
