import React from "react";
import Hero from "./component/Hero";
import Portofolio from "./component/Portofolio";
import About from "./component/About";
import Pengalaman from "./component/Pengalaman";
import Education from "./component/Education";

export default function page() {
  return (
    <>
      <Hero />
      <About />
      <Education />
      <Pengalaman />
      <Portofolio />
    </>
  );
}
