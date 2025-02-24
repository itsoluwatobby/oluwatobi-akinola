import { lazy, useEffect, useState } from "react";
import Title from "../Title";
import data from "../../data/data.json";

const LazyLoadWorkDetails = lazy(() => import('./WorkDetails'));

export default function Experience() {
  const [currentWork, setCurrentWork] = useState<WorkProps>();
  const [prevId, setPrevId] = useState(1);

  useEffect(() => {
    setCurrentWork(data.workDetails[0]);
    setPrevId(data.workDetails[0].id);
  }, [])

  const handleClick = (placeId: number) => {
    setTimeout(() => {
      setCurrentWork(() => data.workDetails.find((work) => work.id === placeId));
    }, 200);
    setPrevId(placeId);
  }
  console.log(prevId)
  return (
    <section
      id='experience'
      className=" h[87vh] pt-10 pb-20 mb-0 mx-auto flex flex-col gap-y-6 lg:w-[80%]"
    >
      <Title bullet="02" page='Where I&apos;ve Worked' />

      <div
        className="pl-5 flex sm:flex-row flex-col items-start sm:gap-3 gap-y-6"
      >
        <div className="sm:border-0 border-b-2 border-b-slate-600 text-slate-400 flex sm:flex-col sm:items-start justify-between items-center h-fit sm:w-fit w-full">
          {
            data.workDetails?.map((place) => (
              <button
                className={`capitalize hover:text-cyan-300 hover:bg-[#112240] h-9 w-24 focus:text-cyan-300 focus:outline-none ring-0 transition-colors sm:text-sm font-mono sm:border-l-2 tracking-wide sm:border-l-gray-500 sm:focus:border-l-cyan-300 sm:pb-0 focus:border-b-2 border-l-gray-500 focus:border-b-cyan-300 ${place.id === prevId ? 'sm:border-l-cyan-300 border-b-cyan-300 text-cyan-300' : ''} sm:focus:border-b-0 sm:border-b-0 border-separate sm:pl-5 sm:text-start`}
                key={place.id}
                onClick={() => handleClick(place.id)}
              >
                {place.name}
              </button>
            ))
          }
        </div>

        {
          currentWork?.id ?
            <LazyLoadWorkDetails
              work={currentWork}
              prevId={prevId}
            />
            : null
        }

      </div>
    </section>
  )
}
