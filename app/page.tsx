import React from "react";
import Hero from "./component/Hero";
import About from "./component/About";
import Skill from "./component/Skill";
import Education from "./component/Education";
import Pengalaman from "./component/Pengalaman";
import Sertifikat from "./component/Sertifikat";
import Organisasi from "./component/Organisasi";
import Portofolio from "./component/Portofolio";
import Contact from "./component/Contact";
import ScrollReveal from "./component/ScrollReveal";

export default function Page() {
  return (
    <>
      <Hero />
      <ScrollReveal><About /></ScrollReveal>
      <ScrollReveal><Skill /></ScrollReveal>
      <ScrollReveal><Education /></ScrollReveal>
      <ScrollReveal><Pengalaman /></ScrollReveal>
      <ScrollReveal><Sertifikat /></ScrollReveal>
      <ScrollReveal><Organisasi /></ScrollReveal>
      <ScrollReveal><Portofolio /></ScrollReveal>
      <ScrollReveal><Contact /></ScrollReveal>
    </>
  );
}
