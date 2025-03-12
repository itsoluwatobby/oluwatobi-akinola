import { Applinks, ModalTags } from '../utils'
import NavButtons from './Navs';
import ResumeButton from './Button';
import { Colors } from '../utils/colors';
// import { LiaTimesSolid } from 'react-icons/lia';

type ModalProps = {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Modal(
  {
    toggle,
  }: ModalProps
) {

  return (
    <aside
      className={`md:hidden z-10 w-full h-screen ${toggle ? 'slide-in fixed right-0 flex' : 'slide-out hidden'}`}
    >
      <div className={`${Colors.lightNavy} h-full opacity-50 flex-auto`}></div>
      <div className={`self-end w-72 flex items-center justify-center ${Colors.navy} h-full shadow-lg relative`}>
        
        <button
          className={`w-10 h-7 rounded-md absolute top-4 right-3 bg-cyan-500 ${Colors.lightNavy}`}
          ></button>
        
        <ul className='flex flex-col gap-y-5 list-none h-[63%]'>
          {
            ModalTags.map((link, bullet) => (
              <NavButtons
                key={link}
                link={link}
                bullet={bullet + 1}
                classNames='flex-col gap-1'
              />
            ))
          }
          <div className='mt-10 self-center'>
            <ResumeButton name='Resume' link={Applinks.resume} />
          </div>
        </ul>
      </div>
    </aside>
  )
}