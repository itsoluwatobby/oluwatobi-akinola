import { FiGithub, FiLinkedin } from "react-icons/fi";
import { IconType } from "react-icons";
import { RiBloggerLine, RiTwitterXFill } from "react-icons/ri";

type SocialType = {
  link: string,
  icon: IconType,
  name: string
}

export default function LeftSection() {

  const Socials: SocialType[] = [
    { link: 'https://github.com/itsoluwatobby', icon: FiGithub, name: 'Github' },
    { link: 'https://linkedin.com/in/itsoluwatobby', icon: FiLinkedin, name: 'LinkedIn' },
    { link: 'https://twitter.com/itsoluwatobby', icon: RiTwitterXFill, name: 'Twitter' },
    { link: 'https://revolving.vercel.app', icon: RiBloggerLine, name: 'Blog' },
  ];

  return (
    <aside className="flex-none hidden sticky top-20 bottom-0 h-[calc(100vh-85px)] md:flex justify-end flex-col lg:w-28 md:w-16">
      <div className="relative flex flex-col items-center justify-end gap-8 h-[19.5rem]">
        <div className='flex flex-col gap-8 h-fit'>
          {
            Socials.map((social) => (
              <a
                key={social.name}
                href={social.link}
                title={social.name}
                className='text-xl text-slate-400 hover:text-cyan-300 hover:-translate-y-[0.08rem] transition-transform'
                target='_blank'
              >
                <social.icon />
              </a>
            ))
          }
        </div>
        <div className=" w-[1px] h-48 bg-gray-400" />
      </div>
    </aside>
  )
}