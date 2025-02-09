import ProjectCard from "../ProjectCard";
import Title from "../Title";

export default function ProjectView() {
  const  projects = [
    {
      id: 1,
      link: 'http://localhost:5173',
      repoLink: 'http://localhost:5173',
      name: 'Twitter clone',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio sequi in nulla magnam, vero praesentium officiis, quaerat temporibus explicabo distinctio maiores nam sapiente ullam a. Aspernatur provident natus possimus tempora.',
      tools: ['Github', 'react', 'tailwind', 'nodejs', 'express.js'],
      tag: 'Featured Project',
    },
    {
      id: 2,
      link: 'http://localhost:5173',
      repoLink: 'http://localhost:5173',
      name: 'Twitter clone',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio sequi in nulla magnam, vero praesentium officiis, quaerat temporibus explicabo distinctio maiores nam sapiente ullam a. Aspernatur provident natus possimus tempora.',
      tools: ['Github', 'react', 'tailwind', 'nodejs', 'express.js'],
      tag: 'Featured Project',
    },
  ];

  return (
    <section
      id='work'
      className="h[87vh] pt-10 pb-20 mb-0 flex flex-col gap-y-6 bg-inherit"
    >
        <Title bullet="03" page="Things I've laid my hands on" />

        {
          projects?.map((project) => (
            <ProjectCard 
            key={project.id}
            project={project}
            />
          ))
        }
    </section>
  )
}