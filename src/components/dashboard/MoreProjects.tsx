import { Link } from "react-router-dom";
import data from "../../data/data.json";
import MoreProjectCard from "../MoreProjectCard";

export default function MoreProjects() {
  return (
    <section className="w-full flex flex-col items-center gap-8">
      <div className="flex flex-col items-center gap-3">
        <h2 className='text-center font-mono text-xl text-gray-300'>Other Interesting Projects/Articles</h2>
        <Link to='/projects' className='text-xs text-cyan-100 tracking-widest hover:underline underline-offset-2'>peek in repo</Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pl-3 gap-4">
        {
          data.moreProjects?.map((project) => (
            <MoreProjectCard
              key={project.id}
              project={project}
            />
          ))
        }
      </div>
    </section>
  )
}