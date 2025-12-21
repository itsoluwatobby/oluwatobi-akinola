import Title from "../Title";
import GetInTouch from '../Button';
import { Applinks } from "../../utils";
import data from "../../data/data.json";

export default function WhatNext() {

  return (
    <section
      id='contact'
      className=" h[87vh] pt-10 pb-20 mb-0 flex flex-col items-center gap-y-6 bg-inherit"
    >
      <Title bullet="05" page="Get In Touch" />

      <p className="opacity-75 text-sm leading-7 pl-5">{data.whatNextOpenStatus[2].content}</p>
        
      <GetInTouch name='Say Hello' link={Applinks.email} />

    </section>
  );
}