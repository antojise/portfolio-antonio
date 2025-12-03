import { getJob } from "@/sanity/sanity.query";

export default async function Job() {
  const jobs = await getJob();

  return (
    <section className="mt-10">
      {jobs && jobs.length > 0 ? (
        <div className="space-y-8">
          {jobs.map((job: any) => (
            <div
              key={job._id}
              className="border border-zinc-800 rounded-lg p-6 hover:border-purple-400 duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">{job.jobTitle}</h3>
                  <p className="text-purple-400">{job.name}</p>
                </div>
                <div className="text-sm text-zinc-400 text-right">
                  {new Date(job.startDate).toLocaleDateString('pt-BR', { month: 'short', year: 'numeric' })} -{' '}
                  {job.endDate 
                    ? new Date(job.endDate).toLocaleDateString('pt-BR', { month: 'short', year: 'numeric' })
                    : 'Presente'}
                </div>
              </div>
              <p className="text-zinc-400">{job.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-zinc-400">Nenhuma experiência cadastrada ainda.</p>
      )}
    </section>
  );
}
