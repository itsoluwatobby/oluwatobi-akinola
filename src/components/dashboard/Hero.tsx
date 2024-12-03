
type HeroProps = {
  appName: string;
  workPlace: string;
}

export default function Hero({ appName, workPlace }: HeroProps) {
  return (
    <div>
      <div className='text-base flex flex-col md:p-6 md:m-auto gap-y-5'>
        <p className="text-cyan-200 tracking-wide font-mono">Hello world, my name is...</p>

        <article className="flex flex-col gap-y-4">
          <p className="text-4xl text-blue-50 tracking-wide font-bold mobile:text-3xl">{appName}.</p>
          
          <p className="text-4xl text-slate-400 font-bold mobile:text-3xl">I transform complex problems into elegant solutions.</p>
        </article>

        <p className="text-slate-300 tracking-wide leading-7">
        I'm a software developer specialized in building skilled web applications. Presently building user centered applications and services at <span className="text-[#a5f3fc]">{workPlace}</span> and I'm committed to delivering high-quality solutions.
        </p>
      </div>
    </div>
  )
}