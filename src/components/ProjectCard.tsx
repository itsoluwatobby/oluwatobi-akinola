import { FiGithub } from "react-icons/fi";
import { Colors } from '../utils/colors';
import { RiShareBoxLine } from "react-icons/ri";

type ProjectCardProps = {
  project: {
    id: number;
    link: string;
    repoLink: string;
    name: string;
    description: string;
    tools: string[];
    tag: string;
  }
}
export default function ProjectCard({ project }: ProjectCardProps) {
 
  return (
      <article className={`rounded-lg ${Colors.lightNavy} flex flex-col gap-5 p-8 shadow-md`}>
        <a
          href={project.link}
          target="_blank"
          about={project.description.substring(25)}
          className="flex flex-col gap-5"
          >
          <div className="flex flex-col gap-1">
            <h4 className="text-cyan-300 font-mono">{project?.tag}</h4>
            <h4 className='font-semibold text-xl'>{project.name}</h4>
          </div>

          <div className="flex flex-col gap-5 text-slate-300">
            <p className="text-sm">{project.description}</p>

            <div className="flex items-center flow-wrap gap-2">
              {
                project?.tools.map((tool) => (
                  <span key={tool}
                  className='capitalize relative after:absolute after:-right-1 after:content["jvmmb"]'
                  >{tool}</span>
                ))
              }
            </div>
          </div>

        </a>
        
        <div className="flex items-center gap-x-4">
          <a href={project.repoLink} target="_blank"
          >
            <FiGithub className="text-xl" />
          </a>

          <a href={project.link} target="_blank"
          >
            <RiShareBoxLine className="text-2xl text-white" />
          </a>
        </div>

      </article>
  )
}