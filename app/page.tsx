import React from "react";
import Hero from "./component/Hero";
import Portofolio from "./component/Portofolio";
import About from "./component/About";
import Pengalaman from "./component/Pengalaman";
import Education from "./component/Education";
import Skill from "./component/Skill";
import Contact from "./component/Contact";

export default function page() {
  return (
    <>
      <Hero />
      <About />
      <Skill />
      <Education />
      <Pengalaman />
      <Portofolio />
      <Contact />
    </>
  );
}
