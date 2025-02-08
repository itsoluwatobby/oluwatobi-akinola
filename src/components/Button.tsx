import { useState } from 'react';
import { hoverEffects } from '../utils';
import { Colors } from '../utils/colors';

type ButtonProps = {
  name: string;
  link: string;
}

export default function Button({ name, link }: ButtonProps) {
  const [hoverIndex, setHoverIndex] = useState(0);

  const modifyHoverCount = () => {
    const randomIndex = Math.floor(Math.random() * hoverEffects.length);
    setHoverIndex(randomIndex);
  }

  return (
    <div className='relative'>
      <div className='md:w-24 md:h-9 w-32 h-12 rounded-md bg-cyan-300'></div>
      <a
        href={link}
        // target='_blank'
        download
        onMouseEnter={modifyHoverCount}
        className={`w-32 h-12 md:w-24 md:h-9 rounded-md absolute top-0 transition-transform grid place-content-center active:-translate-x-0 active:translate-y-0 font-mono text-cyan-300 cursor-pointer ${hoverEffects[hoverIndex]} ${Colors.lightNavy} border border-cyan-300`}
      >
        {name}
      </a>
    </div>
  )
}