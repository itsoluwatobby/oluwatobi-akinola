import Title from "../Title";
import GetInTouch from '../Button';
import { Applinks } from "../../utils";

export default function WhatNext() {

  return (
    <section
      id='contact'
      className=" h[87vh] pt-10 pb-20 mb-0 flex flex-col items-center gap-y-6 bg-inherit"
    >
      <Title bullet="04" page="Get In Touch" />

      <p className="opacity-75 text-sm">
      I’m currently looking for new opportunities and my inbox is always open. Whether you have a question or have an opportunity for me, I’ll always get back to you!
      </p>
        
      <GetInTouch name='Say Hello' link={Applinks.email} />

    </section>
  );
}