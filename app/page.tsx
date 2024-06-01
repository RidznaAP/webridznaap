import React from "react";
import Hero from "./component/Hero";
import Portofolio from "./component/Portofolio";
import About from "./component/About";

export default function page() {
  return (
    <>
      <Hero />
      <About />
      <Portofolio/>
    </>
  );
}
