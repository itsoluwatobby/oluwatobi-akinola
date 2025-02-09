
type WorkDetailsProps = {
  work: WorkProps;
  prevId: number;
}

export default function WorkDetails({ work, prevId }: WorkDetailsProps) {

  return (
    <article className={`${prevId === work.id ? 'content-changed' : ''} flex flex-col mdm-auto gap-y-5`}>
      <div className="flex flex-col gap-2">
        <h5 className="text-lg text-slate-200 font-medium leading-5">{work?.role} <span className="text-cyan-300 capitalize">@ {work?.workPlace}</span></h5>
        <span className="text-slate-400 text-sm font-mono">{work?.duration}</span>
      </div>

      <div className="text-sm flex flex-col gap-2 text-slate-300">
        {
          work?.content.map((con, index) => (
            <div
            key={index}
            className="flex gap-4"
            >
              <span className="sm:block hidden text-cyan-400">{'>'}</span>
              <p className="">{con}</p>
            </div>
          ))
        }
      </div>
    </article>
  )
}