import {
  Hero,
  About,
  Experience,
  ProjectView,
  WhatNext,
  MoreProjects,
} from "../components/dashboard";
import { useAppContext } from "../hooks";

type DashboardProp = {
  observerRef: (node: HTMLElement) => void;
}

export default function Dashboard({ observerRef }: DashboardProp) {
  const { appInfo } = useAppContext();

  return (
    <>
      <Hero 
        appName={appInfo.name}
        workPlace={appInfo.workPlace}
        observerRef={observerRef  as React.LegacyRef<HTMLDivElement>}
      />

      <About />

      <Experience />

      <ProjectView />

      <MoreProjects />

      <WhatNext />
    </>
  )
}