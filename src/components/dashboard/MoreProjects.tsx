import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import { Colors } from '../../utils/colors';
import data from "../../data/data.json";
import MoreProjectCard from "../MoreProjectCard";

export default function MoreProjects() {
  const [count, setCount] = useState(6);
  const [projects, setProjects] = useState<MoreProject[]>([]);

  useEffect(() => {
    const allProjects = [...data.moreProjects]?.sort((a, b) => +b.year - +a.year);
    setProjects(allProjects);
  }, [])

  return (
    <section className="w-full flex flex-col items-center gap-8">
      <div className="flex flex-col items-center gap-3">
        <h2 className='text-center font-mono text-xl text-gray-300'>Other Interesting Projects/Articles</h2>
        <Link to='/projects' className='text-xs text-cyan-100 tracking-widest hover:underline underline-offset-2'>peek in repo</Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pl-3 gap-4 duration-300 transition-transform">
        {
          projects?.slice(0, count)?.map((project) => (
            <MoreProjectCard
              key={project.id}
              project={project}
            />
          ))
        }
      </div>

      <button
        onClick={() => setCount((prev) => prev === 6 ? 9 : 6)}
        className={`w-28 h-10 md:w-24 md:h-9 rounded-md transition-transform grid place-content-center active:-translate-x-0 active:translate-y-0 font-mono text-cyan-300 cursor-pointer ${Colors.lightNavy} border border-cyan-300`}
      >
        view {count === 6 ? 'more' : 'less'}
      </button>
    </section>
  )
}