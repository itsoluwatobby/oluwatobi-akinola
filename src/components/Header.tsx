import React, { useState } from 'react'
import { helper, ModalTags, hoverEffects, Applinks } from '../utils';
import { Colors } from '../utils/colors';
import NavButtons from './Navs';
import ResumeButton from './Button';
import { LiaTimesSolid } from 'react-icons/lia';
import { Link, useLocation } from 'react-router-dom';

type HeaderProps = {
  appName: string;
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}
// 50,10 75,25 75,55 50,68 25,55 25,25
export default function Header({ appName, toggle, setToggle }: HeaderProps) {
  const [hoverIndex, setHoverIndex] = useState(0);
  const { pathname } = useLocation();

  const modifyHoverCount = () => {
    const randomIndex = Math.floor(Math.random() * hoverEffects.length);
    setHoverIndex(randomIndex);
  }

  return (
    <header className={`sticky top-0 w-full pl-1 pr-4 pt-7 pb-4 ${Colors.navy} flex items-center justify-between h-20 z-20 shadow-md transition-transform lg:px-10`}>
      <Link to='/'  className='relative'>
        <svg width="63" height="58"
          onMouseEnter={modifyHoverCount}
          className={`absolute transition-transform cursor-pointer ${hoverEffects[hoverIndex]}`}
          xmlns="http://www.w3.org/2000/svg">
          <polygon points="41,11 60,22 60,46 42,55 22,46 22,22"
            fill='#0a192f' stroke="#a5f3fc" strokeWidth="2.5" />

          <text x="41" y="34" fontSize="25" textAnchor="middle" dominantBaseline="middle" fill="#a5f3fc">{helper.getFirstLetter(appName)}</text>
        </svg>
        <svg width="100" height="80" xmlns="http://www.w3.org/2000/svg">
          <polygon points="41,11 60,22 60,46 42,55 22,46 22,22"
            fill='#a5f3fc' stroke="#a5f3fc" strokeWidth="2.5" />
        </svg>
      </Link>

      {
        pathname === '/' ?
        <ul className='hidden md:flex items-center gap-x-6 list-none'>
          {
            ModalTags.map((link, bullet) => (
              <NavButtons
                key={link}
                link={link}
                bullet={bullet + 1}
                classNames='gap-x-1 text-sm'
              />
            ))
          }
          <ResumeButton name='Resume' link={Applinks.resume} />
        </ul> : null
      }

      {
        pathname === '/' 
        ? (
            toggle ?
            <button
              onClick={() => setToggle(false)}
              className={`z-10 w-10 h-7 rounded-md md:hidden absolute top-5 right-3 grid place-content-center cursor-pointer -translate-x-0.5 -translate-y-0.5 transition-transform active:-translate-x-0 active:translate-y-0 ${Colors.navy} border border-cyan-300`}
            >
              <LiaTimesSolid 
                className='cursor-pointer text-cyan-50 shadow w-full text-xl'
              />
            </button>
            :
            <button
              onClick={() => setToggle(prev => !prev)}
              className='h-10 w-10 cursor-pointer md:hidden flex gap-1 p-1'>
              <span className={`flex justify-end transition-transform relative h-[2px] w-[1.7rem] bg-cyan-200 before:absolute before:-top-2.5 before:content-[""] before:h-[2px] before:w-9 before:bg-cyan-200 after:absolute after:-bottom-2.5 after:content-[""] after:h-[2px] after:w-[1.4rem] after:bg-cyan-200`}></span>
            </button>
          ) : null
      }
    </header>
  )
}