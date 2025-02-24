import { useState } from "react";
import { profileHoverEffects } from "../../utils";

export default function Profile() {
  const [hoverIndex, setHoverIndex] = useState(0);
  
    const modifyHoverCount = () => {
      const randomIndex = Math.floor(Math.random() * profileHoverEffects.length);
      setHoverIndex(randomIndex);
    }

  return (
    <figure className="flex-none lg:mt-5 max-w-72 h-80 hover:bg-opacity-80 hover:z-[999] rounded-sm bg-[#00FFFF]">
      <img src="/oluwatobi-akinola.jpg" alt="Oluwatobi Akinola" loading="eager" 
      onMouseEnter={modifyHoverCount}
      className={`translate-x-2 -translate-y-2 ${profileHoverEffects[hoverIndex]} transition-transform duration-150 w-full h-full rounded-sm`} />
    </figure>
  )
}

/**
 * points="90,10 10,50 90,90":
(90, 10): Top right vertex.
(10, 50): Middle left vertex (the tip pointing left).
(90, 90): Bottom right vertex.
 */