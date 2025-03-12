import { useEffect, useState } from "react";
import data from "../../data/data.json";
import { Data } from "./Data";

export default function ProjectTable() {
  const [projects, setProjects] = useState<Partial<Project>[]>([])

  useEffect(() => {
    setProjects([...data.moreProjects, ...data.projects]);
  }, [])

  return (
    <section className='w-full h-full flex flex-col lg:px-10'>
      <div className="text-slate-400 font-semibold capitalize p-3 text-base gap-1 md:gap-4 flex items-center justify-between">
        <span className="flex-none w-14">Year</span>
        <span className="flex-auto w-full px-2">Title</span>
        <span className="flex-none text-center w-20">Link</span>
      </div>

      {
        projects?.map((project) => (
          <Data
            key={project.id}
            year={project.year!}
            title={project.name!}
            link={project.link ?? ''}
            repo={project.repoLink!}
          />
        ))
      }
    </section>
  )
}
