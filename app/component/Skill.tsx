"use client";
import React, { useState } from "react";
import UIUX from "@/public/image/Website layout.png";
import Design from "@/public/image/Graphic designer.png";
import Adobe from "@/public/image/Adobe Illustrator.png";
import Office from "@/public/image/Office.png";
import SosialMedia from "@/public/image/Social media.png";
import EditingVideo from "@/public/image/Video editing.png";
import Image from "next/image";
import Icon from "./assets/Icon";

const coreSkills = [
  { id: 1, title: "UI/UX Design", icon: UIUX, desc: "Riset pengguna, wireframing, dan desain prototipe interaktif berbasis Figma." },
  { id: 2, title: "Creative Design", icon: Design, desc: "Pembuatan materi kreatif visual dan identitas brand grafis yang kuat." },
  { id: 3, title: "SocMed Management", icon: SosialMedia, desc: "Perencanaan strategi konten dan pengelolaan kampanye media sosial." },
  { id: 4, title: "Video Editing", icon: EditingVideo, desc: "Penyusunan video promosi kreatif dan pasca-produksi media digital." },
];

const toolset = [
  { id: 1, title: "Figma", iconType: "svg", iconName: "figma" },
  { id: 2, title: "Adobe Illustrator", iconType: "img", iconImg: Adobe },
  { id: 3, title: "Canva", iconType: "svg", iconName: "canva" },
  { id: 4, title: "VS Code", iconType: "svg", iconName: "vsc" },
  { id: 5, title: "Miro", iconType: "svg", iconName: "miro" },
  { id: 6, title: "Capcut", iconType: "svg", iconName: "capcut" },
  { id: 7, title: "Notion", iconType: "svg", iconName: "notion" },
  { id: 8, title: "Trello", iconType: "svg", iconName: "trello" },
  { id: 9, title: "MS Office", iconType: "img", iconImg: Office },
];

const tags = ["UI/UX Design", "Web Dev", "Video Editing", "SocMed Marketing", "Digital Branding"];

export default function Skill() {
  const [activeTab, setActiveTab] = useState<"skills" | "tools">("skills");

  return (
    <section
      id="skill"
      className="pt-24 pb-20 px-6 md:px-12 lg:px-24"
      style={{ background: "#FFFFFF" }}
    >
      <div className="container mx-auto max-w-6xl">

        {/* Section Header */}
        <div className="flex flex-col items-center mb-14">
          <span
            className="text-xs font-bold tracking-widest uppercase px-4 py-1 rounded-full mb-3 border"
            style={{ color: "#1B4F8A", background: "#E8F4FD", borderColor: "#CBD5E1" }}
          >
            Kemampuan & Alat
          </span>
          <h2
            className="font-extrabold text-3xl md:text-4xl text-center"
            style={{ color: "#0A2540" }}
          >
            Keahlian & Toolset
          </h2>
          <div
            className="w-14 h-1 rounded-full mt-3"
            style={{ background: "#3B9EDE" }}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-start">

          {/* Left: Tab Panel */}
          <div
            className="flex-1 w-full rounded-2xl p-6 md:p-8"
            style={{ border: "1px solid #CBD5E1", background: "#FFFFFF", boxShadow: "0 2px 16px rgba(10,37,64,0.06)" }}
          >
            {/* Tabs */}
            <div
              className="flex justify-center gap-3 pb-6 mb-8"
              style={{ borderBottom: "1px solid #CBD5E1" }}
            >
              {[
                { key: "skills", label: "💼 Keahlian Utama" },
                { key: "tools", label: "🛠️ Perangkat Lunak" },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key as "skills" | "tools")}
                  className="px-5 py-2.5 font-bold rounded-xl text-sm transition-all duration-300"
                  style={
                    activeTab === tab.key
                      ? {
                          background: "#0A2540",
                          color: "#FFFFFF",
                          boxShadow: "0 4px 14px rgba(10,37,64,0.25)",
                        }
                      : {
                          background: "#F5F7FA",
                          color: "#4A5568",
                          border: "1px solid #CBD5E1",
                        }
                  }
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Skill cards */}
            {activeTab === "skills" ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {coreSkills.map((skill) => (
                  <div
                    key={skill.id}
                    className="flex flex-col p-5 rounded-2xl transition-all duration-200 group cursor-default"
                    style={{ background: "#F5F7FA", border: "1px solid #CBD5E1" }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLDivElement;
                      el.style.borderColor = "#3B9EDE";
                      el.style.boxShadow = "0 4px 16px rgba(59,158,222,0.12)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLDivElement;
                      el.style.borderColor = "#CBD5E1";
                      el.style.boxShadow = "none";
                    }}
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <div
                        className="w-12 h-12 flex-shrink-0 flex items-center justify-center p-2 rounded-xl transition-transform duration-300 group-hover:scale-105"
                        style={{ background: "#FFFFFF", border: "1px solid #CBD5E1" }}
                      >
                        <Image src={skill.icon} alt={skill.title} objectFit="contain" className="w-full h-full" />
                      </div>
                      <h4 className="font-bold text-base md:text-lg" style={{ color: "#0A2540" }}>
                        {skill.title}
                      </h4>
                    </div>
                    <p className="text-xs md:text-sm leading-relaxed" style={{ color: "#4A5568" }}>
                      {skill.desc}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
                {toolset.map((tool) => (
                  <div
                    key={tool.id}
                    className="flex flex-col items-center justify-center p-4 rounded-xl transition-all duration-200 group cursor-default"
                    style={{ background: "#F5F7FA", border: "1px solid #CBD5E1" }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLDivElement;
                      el.style.borderColor = "#3B9EDE";
                      el.style.boxShadow = "0 4px 12px rgba(59,158,222,0.12)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLDivElement;
                      el.style.borderColor = "#CBD5E1";
                      el.style.boxShadow = "none";
                    }}
                  >
                    <div className="w-12 h-12 flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110">
                      {tool.iconType === "svg" ? (
                        <Icon name={tool.iconName as any} />
                      ) : (
                        <Image src={tool.iconImg as any} alt={tool.title} width={40} height={40} objectFit="contain" />
                      )}
                    </div>
                    <span className="font-bold text-xs text-center leading-snug" style={{ color: "#0A2540" }}>
                      {tool.title}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right: Navy Info Card */}
          <div
            className="w-full lg:w-[320px] flex-shrink-0 p-7 md:p-8 rounded-2xl relative overflow-hidden"
            style={{
              background: "linear-gradient(145deg, #0A2540 0%, #1B4F8A 100%)",
              boxShadow: "0 8px 40px rgba(10,37,64,0.25)",
            }}
          >
            {/* Decorative */}
            <div
              className="absolute -top-8 -right-8 w-36 h-36 rounded-full"
              style={{ background: "rgba(59,158,222,0.12)" }}
            />
            <div
              className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full"
              style={{ background: "rgba(255,255,255,0.04)" }}
            />

            <h3 className="text-xl md:text-2xl font-extrabold leading-snug relative" style={{ color: "#FFFFFF" }}>
              Kreativitas & Teknologi
            </h3>
            <p className="text-sm font-semibold mt-1 relative" style={{ color: "#3B9EDE" }}>
              Solusi Digital Modern
            </p>
            <div className="w-full h-[1px] my-5 relative" style={{ background: "rgba(255,255,255,0.12)" }} />
            <p className="text-sm leading-relaxed relative" style={{ color: "rgba(255,255,255,0.82)" }}>
              Perpaduan estetika seni kreatif dengan teknologi rekayasa informatika —
              menciptakan solusi digital terbaik yang fungsional, estetik, dan berpusat
              pada pengguna.
            </p>

            <div className="mt-7 flex flex-col gap-3 relative">
              <span
                className="text-xs font-bold uppercase tracking-widest block"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                Bidang Ketertarikan:
              </span>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 rounded-full font-semibold"
                    style={{
                      background: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.15)",
                      color: "#FFFFFF",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
