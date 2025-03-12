import React from 'react'
import { ProjectTable } from '../components';

type ProjectsProps = {
  observerRef: (node: HTMLElement) => void;
}
export default function Projects({ observerRef }: ProjectsProps) {
  return (
    <main className='h-full w-full p-3 py-5 flex flex-col gap-7 items-center '>
      <div 
      ref={observerRef as React.LegacyRef<HTMLDivElement>}
      className='self-start flex flex-col gap-2'>
        <h1 className='text-5xl text-slate-300 font-semibold font-mono'>Repository</h1>
        <span className='text-sm font-mono'>Things I've done so far</span>
      </div>

      <ProjectTable />

    </main> 
  )
}