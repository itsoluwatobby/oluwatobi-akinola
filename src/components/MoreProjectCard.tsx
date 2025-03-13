import { FiGithub } from "react-icons/fi";
import { Colors } from '../utils/colors';
import { RiShareBoxLine } from "react-icons/ri";
import { VscRepo } from "react-icons/vsc";
import { useState } from "react";

type ProjectCardProps = {
  project: Omit<Project, "thumbnail" | "mobileThumbnail" | "duration" | "tag">;
}

export default function MoreProjectCard({ project }: ProjectCardProps) {
  const [hover, setHover] = useState(false);

  return (
      <article 
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`relative ${project.display ? 'flex' : 'hidden'} rounded-lg ${Colors.lightNavy} flex-col gap-5 p-4 md:p-6 shadow-md hover:-translate-y-2 duration-300 transition-transform`}>

        <div className="w-full flex justify-between items-center">
          <VscRepo className='text-slate-300 text-3xl' />

          <div className="flex items-center gap-x-4 text-slate-300">
            <a href={project.repoLink} target="_blank"
            className={`${project.repoLink ? '' : 'hidden'}`}
            >
              <FiGithub className="text-xl" />
            </a>

            <a href={project.link} target="_blank"
            className={`${hover ? 'text-cyan-300' : 'text-slate-300'}`}
            >
              <RiShareBoxLine className="text-2xl" />
            </a>
          </div>
        </div>

        <a
          href={project.link}
          target="_blank"
          about={project.description.substring(25)}
          className="flex flex-col gap-5"
          >

          <h4 className={`font-semibold text-xl ${hover ? 'text-cyan-300' : 'text-slate-300'}`}>{project.name}</h4>

          <p className="text-xs text-slate-400">{project.description}</p>
        </a>
        
        <div className="flex items-center text-[11px] flex-wrap gap-x-2">
          {
            project?.tools.map((tool) => (
              <span key={tool}
              className={`capitalize relative after:absolute after:-right-1 hover:underline underline-offset-2 transition-transform ${hover ? 'text-cyan-300' : 'text-slate-400'} after:content["jvmmb"]`}
              >{tool}</span>
            ))
          }
        </div>
      
      </article>
  )
}