import Title from "../Title";
import GetInTouch from '../Button';
import { Applinks } from "../../utils";

export default function WhatNext() {

  return (
    <section
      id='projects'
      className=" h[87vh] pt-10 pb-20 mb-0 flex flex-col gap-y-6 bg-inherit"
    >
        <Title bullet="04" page="Get In Touch" />

        <div className='flex flex-col gap-y-4 items-center'>
          <p className="opacity-75">
          I’m currently looking for new opportunities and my inbox is always open. Whether you have a question or have an opportunity for me, I’ll always get back to you!
          </p>

          <GetInTouch name='Say Hello' link={Applinks.email} />
        </div>

    </section>
  );
}