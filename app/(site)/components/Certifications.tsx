export default function Certifications() {
  const certifications = [
    { title: "Formação Gestão Ágil de Projetos", org: "Alura" },
    { title: "Formação de Product Analytics", org: "PM3" },
    { title: "Scrum Fundamentals Certified (SFC)", org: "SCRUMstudy" },
    { title: "Microsoft Excel Avançado", org: "Unindústria" },
    { title: "Análise de Dados com Python", org: "UFS" }
  ];

  const awards = [
    { title: "Vencedor Bootcamp 'Adoradores de Startups'", year: "2025" },
    { title: "Vencedor Desafio Mulvi - Hackathon", year: "2024" },
    { title: "Time tático Agile Brazil 2024", year: "2024" }
  ];

  return (
    <section className="max-w-7xl mx-auto lg:px-16 px-6 mb-20">
      <h2 className="text-3xl font-bold tracking-tight mb-12">Certificações & Conquistas</h2>
      
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-6 text-purple-400">Certificações</h3>
          <div className="space-y-4">
            {certifications.map((cert, i) => (
              <div key={i} className="border-l-2 border-purple-400 pl-4">
                <h4 className="font-medium">{cert.title}</h4>
                <p className="text-sm text-zinc-400">{cert.org}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-6 text-purple-400">Conquistas</h3>
          <div className="space-y-4">
            {awards.map((award, i) => (
              <div key={i} className="border-l-2 border-green-400 pl-4">
                <h4 className="font-medium">{award.title}</h4>
                <p className="text-sm text-zinc-400">{award.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
