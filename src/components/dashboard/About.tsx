import { MdOutlineArrowRight } from "react-icons/md";
import Title from "../Title";
import Profile from './Profile';
import data from "../../data/data.json";

export default function About() {

  return (
    <section
      id='about'
      className=" h[87vh] pt-10 pb-20 mb-0 flex flex-col items-center lg:items-start duration-300 lg:flex-row row-reverse gap-y-12 gap-x-10 transition-all"
    >
      
      {/* <Profile /> */}
  
      <div className="flex flex-col gap-y-6">
        <Title bullet="01" page='About Me' />
        <div className='text-slate-300 text-sm flex flex-col md:p-6 md:m-auto gap-y-5 leading-7 tracking-wide'>
          {
            data.aboutMe.info?.map((note, index) => (
              <p key={index} className="">{note}</p>
            ))
          }
{/* 
          <p>
            I'm a great team player and I also excel as a standalone. When it comes to transforming designs into real world apps, I pay close attention to details and also input my contributions where necessary.
          </p> */}
        </div>

        <div className='self-stat mt-4 text-slate-300 text-sm flex flex-col md:p-6 gap-y-5 w-full '>
          <p>Here are few technologies I've worked with</p>

          <div className="grid grid-cols-2 gap-1 w-full justify-between">
            {
              data.aboutMe.technologies?.slice(0,8).map((tech) => (
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
                {data.aboutMe.technologies?.at(-2)}
              </p>
              <p className="flex items-center flex-nowrap font-mono">
                <MdOutlineArrowRight className="text-cyan-500 flex-none text-xl mobile:text-base" />
                {data.aboutMe.technologies?.at(-1)}
              </p>
            </div>

          </div>
        </div>

        <div className="flex flex-col gap-y-6">
          <Title bullet="" page='Current endeavours' />
          <div className='text-slate-300 text-sm flex flex-col md:p-6 md:m-auto gap-y-5 leading-7 tracking-wide'>
            <ul className="list-itemlist-disc">
            {
              data.aboutMe.activityUpdates.sort((a,b) => b.date.localeCompare(a.date)).map((update) => (
                <li 
                key={update.id}
                className="mb-3 flex flex-col w-full">
                  <p className="">{update.content}</p>
                  <span className="self-end opacity-80 text-xs">{update.date}</span>
                </li>
              ))
            }
            </ul>
          </div>
        </div>

      </div>


      <Profile />

    </section>
  )
}