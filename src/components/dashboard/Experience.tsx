/* eslint-disable react-hooks/exhaustive-deps */
// import { MdOutlineArrowRight } from "react-icons/md";
import { lazy, useEffect, useState } from "react";
import Title from "../Title";
// import WorkDetails from "./WorkDetails";

const LazyWorkDetails = lazy(() => import('./WorkDetails'));

export default function Experience() {
  const [currentWork, setCurrentWork] = useState<WorkProps>();
  const [prevId, setPrevId] = useState(1);

  const workDetails = [
    {
      id: 1,
      role: 'Backend Engineer',
      name: 'Khefue',
      workPlace: 'Khefue LTD',
      duration: 'May 2022 - Dec 2022',
      stack: [''],
      content: [
        "I create smooth user friendly interfaces, provide excellent server-side and client-side logic, smooth integration of web applications with APIs and external libraries, excellent at providing client-side and server-side authentication and application security.",
        "I'm a great team player and I also excel as a standalone. When it comes to transforming designs into real world apps, I pay close attention to details and also input my contributions where necessary.",
        "I create smooth user friendly interfaces, provide excellent server-side and client-side logic, smooth integration of web applications with APIs and external libraries, excellent at providing client-side and server-side authentication and application security.",
        "I'm a great team player and I also excel as a standalone. When it comes to transforming designs into real world apps, I pay close attention to details and also input my contributions where necessary."
      ]
    },
    {
      id: 2,
      role: 'Full stack Developer',
      name: 'Devheit',
      workPlace: 'Devheit.ng',
      duration: 'May 2022 - Dec 2022',
      stack: [''],
      content: [
        "I create smooth user friendly interfaces, provide excellent server-side and client-side logic, smooth integration of web applications with APIs and external libraries, excellent at providing client-side and server-side authentication and application security.",
        "I'm a great team player and I also excel as a standalone. When it comes to transforming designs into real world apps, I pay close attention to details and also input my contributions where necessary.",
        "I create smooth user friendly interfaces, provide excellent server-side and client-side logic, smooth integration of web applications with APIs and external libraries, excellent at providing client-side and server-side authentication and application security.",
        "I'm a great team player and I also excel as a standalone. When it comes to transforming designs into real world apps, I pay close attention to details and also input my contributions where necessary."
      ]
    },
    {
      id: 3,
      role: 'Backend Engineer',
      name: 'USAF',
      workPlace: 'United states of africa',
      duration: 'May 2022 - Dec 2022',
      stack: [''],
      content: [
        "I create smooth user friendly interfaces, provide excellent server-side and client-side logic, smooth integration of web applications with APIs and external libraries, excellent at providing client-side and server-side authentication and application security.",
        "I'm a great team player and I also excel as a standalone. When it comes to transforming designs into real world apps, I pay close attention to details and also input my contributions where necessary.",
        "I'm a great team player and I also excel as a standalone. When it comes to transforming designs into real world apps, I pay close attention to details and also input my contributions where necessary."
      ]
    },
  ]

  useEffect(() => {
    setCurrentWork(workDetails[0]);
  }, [])

  return (
    <section
      id='experience'
      className=" h[87vh] pt-10 pb-20 mb-0 mx-auto flex flex-col gap-y-6 lg:w-[80%]"
    >
      <Title bullet="02" page='Where I&apos;ve Worked' />

      <div
        className="flex sm:flex-row flex-col items-start sm:gap-3 gap-y-6"
      >
        <div className="sm:border-0 border-b-2 border-b-slate-600 text-slate-400 flex sm:flex-col sm:items-start justify-between items-center h-fit sm:w-fit w-full">
          {
            workDetails.map((place) => (
              <button
              className={`capitalize hover:text-cyan-300 hover:bg-[#112240] h-9 sm:w-28 w-24 focus:text-cyan-300 focus:outline-none ring-0 transition-colors sm:text-sm font-mono sm:border-l-2 sm:border-l-gray-500 sm:focus:border-l-cyan-300 sm:pb-0 focus:border-b-2 border-l-gray-500 focus:border-b-cyan-300 ${place.id === prevId ? 'sm:border-l-cyan-300 border-b-cyan-300 text-cyan-300' : ''} tracking-wide sm:focus:border-b-0 sm:border-b-0 border-separate sm:pl-5 sm:text-start`}
              key={place.id}
              onClick={() => {
                  setTimeout(() => {
                    setCurrentWork(() => workDetails.find((work) => work.id === place.id));
                  }, 200);
  
                  setPrevId(place.id);
                }
              }
              >
                {place.name}
              </button>
            ))
          }
        </div>
        
        {
          currentWork?.id ?
          <LazyWorkDetails
            work={currentWork} 
            prevId={prevId}
          />
          : null
        }
  
      </div>
    </section>
  )
}
