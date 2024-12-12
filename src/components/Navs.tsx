import React from 'react'

type NavButtonsProps = {
  link: string;
  bullet: number;
  classNames: string;
}

export default function NavButtons(
  {
    link, bullet, classNames
  }: NavButtonsProps
) {

  return (
    <li key={link}
    className={`flex items-center ${classNames}`}
    >
      <span className="font-mono text-lg text-cyan-200">0{bullet}.</span>
      <a href={`#${link}`}
      className="hover:underline underline-offset-2 transition-transform text-slate-300 capitalize font-medium whitespace-nowrap md:text-base text-lg font-mono tracking-wide"
      >{link}</a>
    </li>
  )
}