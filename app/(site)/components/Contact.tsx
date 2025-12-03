export default function Contact() {
  return (
    <section id="contato" className="max-w-7xl mx-auto lg:px-16 px-6 mb-20">
      <h2 className="text-3xl font-bold tracking-tight mb-12">Contato</h2>
      
      <div className="border border-zinc-800 rounded-lg p-8 text-center">
        <p className="text-lg text-zinc-400 mb-8">
          Interessado em conversar sobre projetos, automação ou gestão ágil?
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:antojise@gmail.com"
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg duration-300"
          >
            Email: antojise@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/antônio-josé/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-purple-600 hover:bg-purple-600 rounded-lg duration-300"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
