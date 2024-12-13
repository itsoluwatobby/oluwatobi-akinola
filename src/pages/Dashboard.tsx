import {
  Hero,
  About,
  Experience,
} from "../components/dashboard";
import { useAppContext } from "../hooks";
import { IoMdArrowUp } from "react-icons/io";
import { useIntersectionObserver } from "../hooks";

export default function Dashboard() {
  const { appInfo } = useAppContext();
  const { intersecting, observerRef } = useIntersectionObserver(
    { screenPosition: '0px', threshold: 0.9 },
  );

  return (
    <div className='h-auto w-full flex flex-col px10'>
      <div className="w-full flex justify-between">
      <aside className="flex-none hidden sticky top-20 bottom-0 h-[calc(100vh-85px)] md:flex justify-end flex-col lg:w-28 md:w-16">
          <div className="relative flex flex-col items-center justify-end gap-32 h-64">
            <a href={`mailto:${appInfo.email}`} className="text-slate-400 hover:text-cyan-300 font-semibold rotate-90 text-base font-mono tracking-widest hover:underline underline-offset-2">{appInfo.email}</a>
            <div className=" w-[1px] h-48 bg-gray-400" />
          </div>
        </aside>

        <section className="customScrollBar flex-auto flex flex-col px-10 md:px-4 lg:px-14 md:overflow-y-scroll">
      
          <Hero 
            appName={appInfo.name}
            workPlace="DevHeit"
            observerRef={observerRef  as React.LegacyRef<HTMLDivElement>}
          />

          <About />

          <Experience />

        </section>

        <aside className="flex-none hidden sticky top-20 bottom-0 h-[calc(100vh-85px)] md:flex justify-end flex-col lg:w-28 md:w-16">
          <div className="relative flex flex-col items-center justify-end gap-32 h-64">
            <a href={`mailto:${appInfo.email}`} className="text-slate-400 hover:text-cyan-300 font-semibold rotate-90 text-base font-mono tracking-widest hover:underline underline-offset-2">{appInfo.email}</a>
            <div className=" w-[1px] h-48 bg-gray-400" />
          </div>
        </aside>
      </div>
  
      <a href="#home"
        className={`${!intersecting.isIntersecting ? 'fixed' : 'hidden'} bottom-10 right-5 shadow-md border-gray-600 focus:outline-none border-2 animate-pulse rounded-full w-8 h-8 grid place-content-center hover:bg-black hover:text-white transition-colors`}>
        <IoMdArrowUp className='' />
      </a>
    </div>
  )
}