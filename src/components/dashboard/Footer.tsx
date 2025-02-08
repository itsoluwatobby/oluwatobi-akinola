import { RiBloggerLine, RiTwitterXFill } from "react-icons/ri";
import { Applinks } from "../../utils";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { IconType } from "react-icons";

type SocialType = {
  link: string,
  icon: IconType,
  name: string
}

export default function Footer() {

  const Socials: SocialType[] = [
    { link: Applinks.github, icon: FiGithub, name: 'Github' },
    { link: Applinks.linkedIn, icon: FiLinkedin, name: 'LinkedIn' },
    { link: Applinks.twitter, icon: RiTwitterXFill, name: 'Twitter' },
    { link: Applinks.blog, icon: RiBloggerLine, name: 'Blog' },
  ];
  
  return (
    <footer
      id='base'
      className="pt-5 pb-10 lg:pb-16 mb-0 flex flex-col items-center gap-y-6 bg-inherit"
    >
      <div className='flex items-center gap-10'>
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

      <p className="font-mono opacity-70 text-sm">Designed & build by Oluwatobi Akinola</p>
    </footer>
  )
}