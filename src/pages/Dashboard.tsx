import {
  Hero,
  About,
  Experience,
} from "../components/dashboard";
import { useAppContext } from "../hooks";
import { IoMdArrowUp } from "react-icons/io";
import { useIntersectionObserver } from "../hooks";

export default function Dashboard() {
  const { appName } = useAppContext();
  const { intersecting, observerRef } = useIntersectionObserver(
    { screenPosition: '0px', threshold: 0.9 },
  );

  return (
    <div className='h-auto w-full flex flex-col px10'>
      <div className="w-full flex justify-between">
        <aside className="hidden flex-none md:flex"></aside>

        <section className="flex-auto flex flex-col px-10 md:overflow-y-scroll">
          <Hero 
            appName={appName}
            workPlace="DevHeit"
            observerRef={observerRef  as React.LegacyRef<HTMLDivElement>}
          />

          <About />

          <Experience />
        </section>

        <aside className="flex-none hidden bg-red-600 h-full bottom-5right-3 md:flex flex-col gap-4 w-10 justify-end">
          <h3 className="text-cyan-300 font-semibold rotate-90 whitespace-nowrap text-2xl">itsoluwatobby@gmail.com</h3>
          <div className="w-full h-[1px] bg-gray-500" />
        </aside>
      </div>
  
      <a href="#home"
        className={`${!intersecting.isIntersecting ? 'fixed' : 'hidden'} bottom-10 right-5 shadow-md border-gray-600 focus:outline-none border-2 animate-pulse rounded-full w-8 h-8 grid place-content-center hover:bg-black hover:text-white transition-colors`}>
        <IoMdArrowUp className='' />
      </a>
    </div>
  )
}