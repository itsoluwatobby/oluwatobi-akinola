import { MdOutlineArrowRight } from "react-icons/md";
import Title from "../Title";

export default function About() {

  const technologies = ['Javascript', 'Typescript', 'React', 'Tailwindcss', 'Nodejs', 'Redis', 'Websockets', 'GraphQL', 'Databases (MySQL, Postgresql, MongoDB)', 'Cloud Platforms (AWS, GCP and Azure)'];

  return (
    <section
      id='about'
      className=" h[87vh] pt-10 pb-20 mb-0 flex flex-col gap-y-6 bg-red-00"
    >
      <Title bullet="01" page='About Me' />
      <div className='text-slate-300 text-base flex flex-col md:p-6 md:m-auto gap-y-5'>
        <p className="tracking-wide leading-7">
          I'm Oluwatobi Akinola, a software developer who loves turning complex problems into elegant solutions. I would love to be part of your community to impact lives and make technology easier and safer to us.
        </p>

        <p>
          I create smooth user friendly interfaces, provide excellent server-side and client-side logic, smooth integration of web applications with APIs and external libraries, excellent at providing client-side and server-side authentication and application security.
        </p>

        <p>
          I'm a great team player and I also excel as a standalone. When it comes to transforming designs into real world apps, I pay close attention to details and also input my contributions where necessary.
        </p>
      </div>

      <div className='self-stat mt-4 text-slate-300 text-sm flex flex-col md:p-6 gap-y-5 w-full '>
        <p>Here are few technologies I've worked with</p>

        <div className="grid grid-cols-2 gap-1 w-full justify-between">
          {
            technologies?.slice(0,8).map((tech) => (
              <div key={tech}
                className="flex items-center gap-x-2 font-mono text-gray-400 text-pretty"
              >
                <MdOutlineArrowRight className="text-cyan-500 flex-none text-xl mobile:text-base" />
                {tech}
              </div>
            ))
          }

          <div className="flex flex-col gap-1.5 w-full whitespace-nowrap textpretty text-gray-400">
            <p className="flex items-center flex-nowrap font-mono">
              <MdOutlineArrowRight className="text-cyan-500 flex-none text-xl mobile:text-base" />
              {technologies?.at(-2)}
            </p>
            <p className="flex items-center flex-nowrap font-mono">
              <MdOutlineArrowRight className="text-cyan-500 flex-none text-xl mobile:text-base" />
              {technologies?.at(-1)}
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}