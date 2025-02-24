import ProjectCard from "../ProjectCard";
import Title from "../Title";
import data from "../../data/data.json";

export default function ProjectView() {

  return (
    <section
      id='work'
      className="h[87vh] pt-10 pb-20 mb-0 flex flex-col gap-y-6 xl:px-14 bg-inherit"
    >
        <Title bullet="03" page="Things I've laid my hands on" />

        <div className="pl-5 flex flex-col gap-y-6">
        {
          data.projects?.map((project) => (
            <ProjectCard 
            key={project.id}
            project={project}
            />
          ))
        }
        </div>
    </section>
  )
}