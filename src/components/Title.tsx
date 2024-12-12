
type TitleProps = {
  bullet: string;
  page: string;
}

export default function Title({ bullet, page }: TitleProps) {
  return (
    <article className="flex items-center w-full gap-x-4">
      <span className="font-mono text-xl text-cyan-200">{bullet}.</span>
      <h3 className="text-gray-300 font-semibold whitespace-nowrap text-2xl">{page}</h3>
      <div className="w-full h-[1px] bg-gray-500" />
    </article>
  )
}