import { FiGithub } from "react-icons/fi";
import { RiShareBoxLine } from "react-icons/ri";

type DataProps = {
  year: string;
  title: string;
  link: string;
  repo: string;
}

export const Data = ({ year, title, link, repo }: DataProps) => {
  console.log(year)
  return (
    <div className="text-slate-400 bg-opacity-20 hover:bg-slate-700 rounded-md capitalize p-3 py-2 text-sm gap-1 md:gap-4 flex items-center justify-between transition-all duration-300 cursor-default">
      <span className="flex-none w-14 text-cyan-200">{year}</span>
      <span className="flex-auto w-full px-2 whitespace-pre-wrap">{title}</span>
      <div className="flex-none flex items-center gap-x-3 text-slate-300 w-20">
        <a href={repo} target="_blank"
          className={`${repo ? '' : 'hidden'} hover:bg-slate-800 p-1 rounded-sm`}
        >
          <FiGithub className="text-xl" />
        </a>

        <a href={link} target="_blank"
          className='hover:text-cyan-300 hover:bg-slate-800 p-1 rounded-sm'
        >
          <RiShareBoxLine className="text-2xl" />
        </a>
      </div>
    </div>
  )
}