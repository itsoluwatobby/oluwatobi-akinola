import { Hero } from "../components/dashboard";
import { useAppContext } from "../hooks";

export default function Dashboard() {
  const { appName } = useAppContext();

  return (
    <div className='h-full w-full flex flex-col p-10'>
      <Hero 
        appName={appName}
        workPlace="DevHeit"
      />
    </div>
  )
}