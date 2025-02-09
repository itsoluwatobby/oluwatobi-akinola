
type TitleProps = {
  bullet: string;
  page: string;
}

export default function Title({ bullet, page }: TitleProps) {
  return (
    <article className="flex items-center w-full gap-x-3">
      <div className="flex items-center gap-x-2">
        <span className="font-mono text-xl text-cyan-200">{bullet}.</span>
        <h3 className="text-gray-300 font-semibold whitespace-nowrap text-2xl mobile:text-xl">{page}</h3>
      </div>
      <div className="flex-auto h-[1px] bg-gray-500" />
    </article>
  )
}