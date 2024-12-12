import Title from "../Title";

export default function About() {
  return (
    <section
      id='about'
      className="h-[85vh] mb-0 flexflex-col bg-red-00"
    >
      <Title bullet="01" page='About Me' />
      <div className='text-slate-300 text-base flex flex-col md:p-6 md:m-auto gap-y-5'>
        <p className="tracking-wide leading-7">
          I'm Oluwatobi Akinola, a software developer who loves turning complex problems into elegant solutions. I would love to be part of your community to impact lives and make technology easier and safer to us.
        </p>

        <p>
          I create smooth user friendly interfaces, provide excellent server-side and client-side logic, smooth integration of web applications with APIs and external libraries, excellent at providing client-side and server-side authentication and application security.

          I'm a great team player and I also excel as a standalone. When it comes to transforming designs into real world apps, I pay close attention to details and also input my contributions when needed.
        </p>
      </div>
    </section>
  )
}