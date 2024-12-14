
type RightSectionProps = {
  email: string
}

export default function RightSection({ email }: RightSectionProps) {
  return (
    <aside className="flex-none hidden sticky top-20 bottom-0 h-[calc(100vh-85px)] md:flex justify-end flex-col lg:w-28 md:w-16">
      <div className="relative flex flex-col items-center justify-end gap-32 h-64">
        <a href={`mailto:${email}`} className="text-slate-400 hover:text-cyan-300 font-semibold rotate-90 text-base font-mono tracking-widest hover:underline underline-offset-2">{email}</a>
        <div className=" w-[1px] h-48 bg-gray-400" />
      </div>
    </aside>
  )
}