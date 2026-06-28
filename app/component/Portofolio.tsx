"use client";
import React, { useState } from "react";
import Ewaca from "@/public/image/Ewaca.png";
import Redesign from "@/public/image/Redesign.png";
import Private from "@/public/image/Private.png";
import Salud from "@/public/image/Salud.png";
import SipHipik from "@/public/image/sip-hipik.png";
import Image from "next/image";

const categories = ["Semua", "UI/UX Design", "Graphic Design", "Data & Web"];

const projects = [
  {
    id: 1,
    title: "UI/UX EWACA",
    category: "UI/UX Design",
    image: Ewaca,
    link: "https://medium.com/@asepridzna/membaca-sambil-bermain-melalui-ewaca-ux-case-study-3245522f6f76",
    tags: ["Figma", "UX Case Study", "Mobile App"],
    desc: "Desain aplikasi membaca interaktif untuk anak-anak dengan pendekatan gamifikasi.",
  },
  {
    id: 2,
    title: "Redesign Web PosIDN",
    category: "UI/UX Design",
    image: Redesign,
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7169701607725617152/",
    tags: ["Figma", "Web Redesign", "Desktop"],
    desc: "Redesain antarmuka website PosIDN dengan fokus UX yang lebih modern dan intuitif.",
  },
  {
    id: 3,
    title: "Proyek Desain Pribadi",
    category: "Graphic Design",
    image: Private,
    link: "https://drive.google.com/drive/folders/1XADonrirUvINu-rC_0qvXOUny01uDMZu?usp=sharing",
    tags: ["Illustrator", "Canva", "Creative Poster"],
    desc: "Kumpulan karya desain grafis, poster kreatif, dan materi visual untuk berbagai kebutuhan.",
  },
  {
    id: 4,
    title: "UI Salud Mental",
    category: "UI/UX Design",
    image: Salud,
    link: "https://www.figma.com/proto/dGUQdK4yTjYnwerklhL1NQ/Salud-Mental?page-id=0%3A1&node-id=1-2&viewport=291%2C360%2C0.13&t=IpCNqMqODVlyVquk-1&scaling=scale-down",
    tags: ["Figma", "Prototype", "App UI"],
    desc: "Prototype aplikasi kesehatan mental dengan navigasi yang empati dan ramah pengguna.",
  },
  {
    id: 5,
    title: "SIP-HIPIK – Sistem Informasi Karantina Ikan",
    category: "Data & Web",
    image: SipHipik,
    link: "#",
    tags: ["PHP", "MySQL", "Data Entry", "Sistem Informasi"],
    desc: "Sistem informasi pemantauan hama dan penyakit ikan karantina berbasis PHP untuk Badan Karantina Indonesia. Membantu digitalisasi 100.000+ data rekam jejak ekspor-impor.",
    isHighlight: true,
  },
];

export default function Portofolio() {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filteredProjects =
    activeCategory === "Semua"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="portofolio"
      className="pt-24 pb-20 px-6 md:px-12 lg:px-24"
      style={{ background: "linear-gradient(180deg, #F4F7FB 0%, #E8F0F8 100%)" }}
    >
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-14">
          <span
            className="text-xs font-bold tracking-widest uppercase px-4 py-1 rounded-full mb-3 border"
            style={{ color: "#1B4F8A", background: "#E8F4FD", borderColor: "#B3D4F0" }}
          >
            Karya Pilihan
          </span>
          <h2 className="font-extrabold text-3xl md:text-4xl text-center" style={{ color: "#0A2540" }}>
            Portofolio Proyek
          </h2>
          <div className="section-accent" />
        </div>

        {/* Filter Navigation */}
        <div className="flex justify-center flex-wrap gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className="px-6 py-2.5 rounded-full font-bold text-xs md:text-sm transition-all duration-300 border"
              style={
                activeCategory === category
                  ? { background: "#0A2540", color: "#FFFFFF", borderColor: "#0A2540", boxShadow: "0 4px 14px rgba(10,37,64,0.25)" }
                  : { background: "#FFFFFF", color: "#4A5568", borderColor: "#CBD5E1" }
              }
              onMouseEnter={(e) => {
                if (activeCategory !== category) {
                  const el = e.currentTarget as HTMLButtonElement;
                  el.style.background = "#E8F4FD";
                  el.style.color = "#1B4F8A";
                }
              }}
              onMouseLeave={(e) => {
                if (activeCategory !== category) {
                  const el = e.currentTarget as HTMLButtonElement;
                  el.style.background = "#FFFFFF";
                  el.style.color = "#4A5568";
                }
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div key={activeCategory} className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fadeInUp">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl transition-all duration-300 group overflow-hidden flex flex-col h-full"
              style={{
                background: "#FFFFFF",
                border: project.isHighlight ? "2px solid #3B9EDE" : "1px solid #CBD5E1",
                boxShadow: project.isHighlight
                  ? "0 4px 24px rgba(59,158,222,0.18)"
                  : "0 2px 12px rgba(10,37,64,0.06)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = "#3B9EDE";
                el.style.boxShadow = "0 8px 32px rgba(10,37,64,0.14)";
                el.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = project.isHighlight ? "#3B9EDE" : "#CBD5E1";
                el.style.boxShadow = project.isHighlight
                  ? "0 4px 24px rgba(59,158,222,0.18)"
                  : "0 2px 12px rgba(10,37,64,0.06)";
                el.style.transform = "translateY(0)";
              }}
            >
              {/* Image Cover or Placeholder */}
              <div className="relative w-full h-[220px] md:h-[240px] overflow-hidden flex-shrink-0">
                {project.image ? (
                  <>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      style={{ objectFit: "cover" }}
                      className="transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
                  </>
                ) : (
                  <div
                    className="w-full h-full flex flex-col items-center justify-center"
                    style={{ background: "linear-gradient(135deg, #0A2540 0%, #1B4F8A 100%)" }}
                  >
                    <span className="text-5xl mb-2">💻</span>
                    <p className="text-sm font-bold" style={{ color: "rgba(255,255,255,0.8)" }}>
                      Web Development Project
                    </p>
                    <p className="text-xs mt-1" style={{ color: "#3B9EDE" }}>
                      Badan Karantina Indonesia
                    </p>
                  </div>
                )}
                <span
                  className="absolute top-4 left-4 text-[10px] font-bold px-2.5 py-1 rounded-md border uppercase tracking-wider"
                  style={{ background: "#FFFFFF", color: "#1B4F8A", borderColor: "#CBD5E1" }}
                >
                  {project.category}
                </span>
                {project.isHighlight && (
                  <span
                    className="absolute top-4 right-4 text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider"
                    style={{ background: "#3B9EDE", color: "#FFFFFF" }}
                  >
                    ⭐ Featured
                  </span>
                )}
              </div>

              {/* Card Meta Content */}
              <div className="p-6 flex flex-col justify-between flex-grow gap-4">
                <div>
                  <h3
                    className="font-extrabold text-lg md:text-xl transition-colors duration-200"
                    style={{ color: "#0A2540" }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-sm mt-2 leading-relaxed" style={{ color: "#4A5568" }}>
                    {project.desc}
                  </p>
                  {/* Meta Tags */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] md:text-xs px-2.5 py-0.5 rounded font-semibold border"
                        style={{ background: "#F5F7FA", color: "#4A5568", borderColor: "#CBD5E1" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={project.link}
                    target={project.link !== "#" ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center py-3 px-4 text-xs md:text-sm font-bold rounded-xl transition-all duration-200"
                    style={{
                      background: "#0A2540",
                      color: "#FFFFFF",
                      boxShadow: "0 4px 12px rgba(10,37,64,0.15)",
                      opacity: project.link === "#" ? 0.6 : 1,
                      cursor: project.link === "#" ? "default" : "pointer",
                    }}
                    onMouseEnter={(e) => {
                      if (project.link !== "#") (e.currentTarget as HTMLAnchorElement).style.background = "#1B4F8A";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.background = "#0A2540";
                    }}
                  >
                    {project.link === "#" ? "Proyek Internal (Confidential)" : "Lihat Selengkapnya →"}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all link */}
        <div className="mt-10 flex justify-center">
          <a
            href="https://bit.ly/PortofolioRidznaAP"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 font-bold text-sm rounded-xl border-2 transition-all duration-300"
            style={{ borderColor: "#0A2540", color: "#0A2540", background: "transparent" }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "#0A2540";
              el.style.color = "#FFFFFF";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "transparent";
              el.style.color = "#0A2540";
            }}
          >
            📁 Lihat Semua Portofolio
          </a>
        </div>
      </div>
    </section>
  );
}
