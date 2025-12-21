import TypewriterEffect from "../TypewriterEffect";
import data from "../../data/data.json";

type HeroProps = {
  appName: string;
  observerRef: React.LegacyRef<HTMLDivElement>
}

export default function Hero(
  {
    appName, observerRef,
  }: HeroProps
) {
  return (
    <section 
    ref={observerRef}
    className='text-base flex flex-col justify-center md:p-4 mobile:-mt- md:m-auto gap-y-5 h-[90vh]'
      id='home'
    >
      <div className='midScreen:leading-[3rem] leading-[3.5rem] tracking-wide font-mono text-cyan-200 text-xl'>
        <TypewriterEffect text="Hello world, my name is..." start="BEGIN" delay={0.4} />
      </div>
      <article className="fluid-text transition-transform flex flex-col gap-y-4">
        <p className="text-blue-50 tracking-wide font-bold mobile:text-3xl">{appName}.</p>

        <p className="text-slate-400 font-bold mobile:text-3xl">I transform complex problems into elegant solutions.</p>
      </article>

      <p className="text-slate-300 tracking-wide leading-7">{data.title}</p>
    </section>
  )
}