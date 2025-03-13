import { FiGithub } from "react-icons/fi";
import { Colors } from '../utils/colors';
import { RiShareBoxLine } from "react-icons/ri";
import { VscOpenPreview } from "react-icons/vsc";
import ProjectPreview from "./PorjectPreview";
import { useState } from "react";
// import { setCustomBackgroundImage } from "../utils/styles";
// import { setCustomBackgroundImage } from "../utils/styles";

type ProjectCardProps = {
  project: Project;
}
export default function ProjectCard({ project }: ProjectCardProps) {
  const [openPreview, setOpenPreview] = useState(false);

  return (
      <article 
      // style={
      //   setCustomBackgroundImage(
      //     `/projects/${project.thumbnail}`,
      //     {
      //       backgroundOpacity: 0.2
      //     }
      //   )
      // }
      className={`relative ${project.display ? 'flex' : 'hidden'} rounded-lg ${Colors.lightNavy} flex-col gap-5 p-5 md:p-8 shadow-md`}>

        {
          (project?.thumbnail || project?.mobileThumbnail) ?
          <VscOpenPreview 
          onClick={() => setOpenPreview(true)}
          className="absolute right-2 top-2 font-semibold cursor-pointer active:scale-[1.03] duration-200 text-xl transition-transform"
          /> : null
        }

        <a
          href={project.link}
          target="_blank"
          about={project.description.substring(25)}
          className="flex flex-col gap-5"
          >
          <div className="flex flex-col gap-1">
            <h4 className="text-cyan-300 font-mono">{project?.tag}</h4>
            <div className="flex flex-col tems-center gap-1">
              <div className="flex items-center gap-5">
                <h4 className='font-semibold text-xl'>{project.name}</h4>
                -
                <span className="text-sm font-mono font-normal text-gray-400 capitalize">{project.role}</span>
              </div>
              <span className="text-sm font-mono font-normal text-gray-400">{project.duration}</span>
            </div>
          </div>

          <div className="flex flex-col gap-5 text-slate-300">
            <p className="text-sm">{project.description}</p>

            <div className="flex items-center text-[13px] flex-wrap gap-x-2">
              {
                project?.tools.map((tool) => (
                  <span key={tool}
                  className='capitalize relative after:absolute after:-right-1 hover:underline underline-offset-2 transition-transform text-cyan-200 after:content["|"]'
                  >{tool}</span>
                ))
              }
            </div>
          </div>

        </a>
        
        <div className="flex items-center gap-x-4">
          <a href={project.repoLink} target="_blank"
          className={`${project.repoLink ? '' : 'hidden'}`}
          >
            <FiGithub className="text-xl" />
          </a>

          <a href={project.link} target="_blank"
          >
            <RiShareBoxLine className="text-2xl text-white" />
          </a>
        </div>

        <ProjectPreview
        thumbnail={project.thumbnail}
        mobile_thumbnail={project.mobileThumbnail}
        openPreview={openPreview}
        closePreview={() => setOpenPreview(false)}
        />

      </article>
  )
}