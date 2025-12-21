import { useState } from 'react'
import { MdCancelPresentation, MdOutlineWeb } from 'react-icons/md';
import { Colors } from '../utils/colors';
import { FaMobileAlt } from 'react-icons/fa';

type ProjectPreviewProps = {
  thumbnail: string;
  mobile_thumbnail: string;
  openPreview: boolean;
  closePreview: () => void;
}

type Views = 'web' | 'mobile';
export default function ProjectPreview(
  {
    thumbnail, openPreview,
    mobile_thumbnail, closePreview,
  }: ProjectPreviewProps) {
  const [screenView, setScreenView] = useState<Views>('web');

  return (
    <div className={`${openPreview ? 'block' : 'hidden'} transition-transform duration-200 customScrollBar absolute inset-0 overflow-y-scroll rounded-md w-full ${Colors.lightNavy} pb-2`}>
      <div className={`w-full p-2 flex sticky top-0 z-10 h-8 justify-between items-center rounded-t ${Colors.lightNavy}`}>
        
        <div className='flex items-center gap-2 transition-transform'>
          <MdOutlineWeb 
            onClick={() => setScreenView('web')}
            className={`${screenView === 'web' ? 'text-lg' : 'text-gray-400'} cursor-pointer`}
            />
          <FaMobileAlt 
            onClick={() => setScreenView('mobile')}
            className={`${screenView === 'mobile' ? 'text-lg' : 'text-gray-400'} cursor-pointer`}
          />
        </div>
        
        <MdCancelPresentation 
        onClick={closePreview}
        className='active:scalte-[1.02] cursor-pointer text-xl'
        />
      </div>
      {
        screenView === 'web' ?
          <figure className='rounded-b-md w-full h-full'>
           <img src={`/projects/${thumbnail}`} alt={thumbnail} 
           className='rounded-b-md w-full h-full object-contain overflow-scroll'
           />
          </figure>
        :
        <figure className='self-center mx-auto rounded-b-md w-1/2 lg:w-[40%]'>
          <img src={`/projects/${mobile_thumbnail}`} alt={mobile_thumbnail} 
          className='rounded-b-md w-full h-full object-contain'
          />
        </figure>

      }
    </div>
  )
}