import {
  Hero,
  About,
  Experience,
  LeftSection,
  RightSection,
  ProjectView,
  WhatNext,
  Footer,
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
    <div className='h-auto w-full flexflex-col'>
      <div className="w-full flex justify-between">
        {/* LEFT */}
        <LeftSection />

        <section className="customScrollBar flex-auto flex flex-col px-10 maxMobile:px-4 mobile:px-4 lg:px-20 overflow-y-scroll">
      
          <Hero 
            appName={appInfo.name}
            workPlace={appInfo.workPlace}
            observerRef={observerRef  as React.LegacyRef<HTMLDivElement>}
          />

          <About />

          <Experience />

          <ProjectView />

          <WhatNext />

          <Footer />

        </section>

        {/* RIGHT */}
        <RightSection email={appInfo.email} />
      </div>
  
      <a href="#home"
        className={`${!intersecting.isIntersecting ? 'fixed' : 'hidden'} bottom-10 right-5 shadow-md border-gray-600 focus:outline-none border-2 animate-pulse rounded-full w-8 h-8 grid place-content-center hover:bg-black hover:text-white transition-colors`}>
        <IoMdArrowUp className='' />
      </a>
    </div>
  )
}