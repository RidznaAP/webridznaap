"use client";
import React, { useState } from "react";
import Ewaca from "@/public/image/Ewaca.png";
import Redesign from "@/public/image/Redesign.png";
import Private from "@/public/image/Private.png";
import Salud from "@/public/image/Salud.png";
import Image from "next/image";

const categories = ["Semua", "UI/UX Design", "Graphic Design"];

const projects = [
  {
    id: 1,
    title: "UI/UX EWACA",
    category: "UI/UX Design",
    image: Ewaca,
    link: "https://medium.com/@asepridzna/membaca-sambil-bermain-melalui-ewaca-ux-case-study-3245522f6f76",
    tags: ["Figma", "UX Case Study", "Mobile App"],
  },
  {
    id: 2,
    title: "Redesign Web PosIDN",
    category: "UI/UX Design",
    image: Redesign,
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7169701607725617152/",
    tags: ["Figma", "Web Redesign", "Desktop"],
  },
  {
    id: 3,
    title: "Proyek Desain Pribadi",
    category: "Graphic Design",
    image: Private,
    link: "https://drive.google.com/drive/folders/1XADonrirUvINu-rC_0qvXOUny01uDMZu?usp=sharing",
    tags: ["Illustrator", "Canva", "Creative Poster"],
  },
  {
    id: 4,
    title: "UI Salud Mental",
    category: "UI/UX Design",
    image: Salud,
    link: "https://www.figma.com/proto/dGUQdK4yTjYnwerklhL1NQ/Salud-Mental?page-id=0%3A1&node-id=1-2&viewport=291%2C360%2C0.13&t=IpCNqMqODVlyVquk-1&scaling=scale-down",
    tags: ["Figma", "Prototype", "App UI"],
  },
];

export default function Portofolio() {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filteredProjects = activeCategory === "Semua"
    ? projects
    : projects.filter((project) => project.category === activeCategory);

  return (
    <section
      id="portofolio"
      className="pt-24 pb-20 px-6 md:px-12 lg:px-24"
      style={{ background: "#F5F7FA" }}
    >
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-14">
          <span
            className="text-xs font-bold tracking-widest uppercase px-4 py-1 rounded-full mb-3 border"
            style={{ color: "#1B4F8A", background: "#E8F4FD", borderColor: "#CBD5E1" }}
          >
            Karya Pilihan
          </span>
          <h2
            className="font-extrabold text-3xl md:text-4xl text-center"
            style={{ color: "#0A2540" }}
          >
            Portofolio Proyek
          </h2>
          <div
            className="w-14 h-1 rounded-full mt-3"
            style={{ background: "#3B9EDE" }}
          />
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
                  ? {
                      background: "#0A2540",
                      color: "#FFFFFF",
                      borderColor: "#0A2540",
                      boxShadow: "0 4px 14px rgba(10,37,64,0.25)",
                    }
                  : {
                      background: "#FFFFFF",
                      color: "#4A5568",
                      borderColor: "#CBD5E1",
                    }
              }
              onMouseEnter={(e) => {
                if (activeCategory !== category) {
                  const el = e.currentTarget as HTMLButtonElement;
                  el.style.background = "#E8F4FD";
                  el.style.color = "#1B4F8A";
                  el.style.borderColor = "#CBD5E1";
                }
              }}
              onMouseLeave={(e) => {
                if (activeCategory !== category) {
                  const el = e.currentTarget as HTMLButtonElement;
                  el.style.background = "#FFFFFF";
                  el.style.color = "#4A5568";
                  el.style.borderColor = "#CBD5E1";
                }
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl transition-all duration-300 group overflow-hidden flex flex-col h-full"
              style={{
                background: "#FFFFFF",
                border: "1px solid #CBD5E1",
                boxShadow: "0 2px 12px rgba(10,37,64,0.06)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = "#3B9EDE";
                el.style.boxShadow = "0 8px 28px rgba(10,37,64,0.13)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = "#CBD5E1";
                el.style.boxShadow = "0 2px 12px rgba(10,37,64,0.06)";
              }}
            >
              {/* Image Cover */}
              <div className="relative w-full h-[220px] md:h-[260px] bg-slate-100 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/25 transition-colors duration-300" />
                <span
                  className="absolute top-4 left-4 text-[10px] font-bold px-2.5 py-1 rounded-md border uppercase tracking-wider"
                  style={{
                    background: "#FFFFFF",
                    color: "#1B4F8A",
                    borderColor: "#CBD5E1",
                  }}
                >
                  {project.category}
                </span>
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
                  
                  {/* Meta Tags */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] md:text-xs px-2.5 py-0.5 rounded font-semibold border"
                        style={{
                          background: "#F5F7FA",
                          color: "#4A5568",
                          borderColor: "#CBD5E1",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center py-3 px-4 text-xs md:text-sm font-bold rounded-xl transition-all duration-200"
                    style={{
                      background: "#0A2540",
                      color: "#FFFFFF",
                      boxShadow: "0 4px 12px rgba(10,37,64,0.15)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.background = "#1B4F8A";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.background = "#0A2540";
                    }}
                  >
                    Lihat Selengkapnya
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
