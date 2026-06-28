"use client";
import React, { useState } from "react";
import Image from "next/image";
import UIUX from "@/public/image/Website layout.png";
import Design from "@/public/image/Graphic designer.png";
import Adobe from "@/public/image/Adobe Illustrator.png";
import Office from "@/public/image/Office.png";
import SosialMedia from "@/public/image/Social media.png";
import Skill from "@/public/image/Skill.png";
import Icon from "./assets/Icon";

const coreSkills = [
  {
    id: 1,
    icon: "📊",
    title: "Data & Analisis",
    desc: "Pengolahan data menggunakan Google Sheets (Pivot Table, VLOOKUP, Dashboard), Power BI untuk visualisasi, serta pelaporan & dokumentasi data operasional.",
    tags: ["Google Sheets", "Power BI", "VLOOKUP", "Dashboard"],
  },
  {
    id: 2,
    icon: "💻",
    title: "IT & Web Development",
    desc: "Pengembangan website berbasis PHP, HTML, CSS, JavaScript, dan MySQL. Berpengalaman dalam web deployment (Hosting, Domain, cPanel, SSL).",
    tags: ["PHP", "HTML/CSS", "MySQL", "JavaScript"],
  },
  {
    id: 3,
    icon: "🧪",
    title: "Software Testing",
    desc: "Pelaksanaan functional testing secara menyeluruh, identifikasi & dokumentasi bug, serta peningkatan standar kualitas produk digital secara sistematis.",
    tags: ["Functional Testing", "Bug Tracking", "Test Case", "QA"],
  },
  {
    id: 4,
    icon: "🎨",
    title: "UI/UX Design",
    desc: "Perancangan antarmuka admin berbasis analisis pengguna menggunakan Figma. Terampil membuat wireframe, prototype interaktif, dan design system.",
    tags: ["Figma", "Wireframing", "Prototype", "Design System"],
  },
];

const toolset = [
  { id: 1, title: "Google Sheets", icon: "📊", isEmoji: true },
  { id: 2, title: "Power BI", icon: "📈", isEmoji: true },
  { id: 3, title: "Figma", iconType: "svg", iconName: "figma", isEmoji: false },
  { id: 4, title: "VS Code", iconType: "svg", iconName: "vsc", isEmoji: false },
  { id: 5, title: "Canva", iconType: "svg", iconName: "canva", isEmoji: false },
  { id: 6, title: "Notion", iconType: "svg", iconName: "notion", isEmoji: false },
  { id: 7, title: "Trello", iconType: "svg", iconName: "trello", isEmoji: false },
  { id: 8, title: "Capcut", iconType: "svg", iconName: "capcut", isEmoji: false },
  { id: 9, title: "Adobe Illus.", iconType: "img", iconImg: Adobe, isEmoji: false },
  { id: 10, title: "MS Office", iconType: "img", iconImg: Office, isEmoji: false },
  { id: 11, title: "MySQL", icon: "🗄️", isEmoji: true },
  { id: 12, title: "PHP", icon: "🐘", isEmoji: true },
];

const softSkills = ["Analitis", "Kolaborasi Lintas Divisi", "Manajemen Waktu", "Adaptif", "Problem Solving", "Komunikasi Profesional"];

const tags = ["Data Analysis", "Web Development", "Software Testing", "UI/UX Design", "Data Visualization"];

export default function SkillSection() {
  const [activeTab, setActiveTab] = useState<"skills" | "tools">("skills");

  return (
    <section
      id="skill"
      className="pt-24 pb-20 px-6 md:px-12 lg:px-24"
      style={{ background: "linear-gradient(180deg, #F4F7FB 0%, #FFFFFF 100%)" }}
    >
      <div className="container mx-auto max-w-6xl">

        {/* Section Header */}
        <div className="flex flex-col items-center mb-14">
          <span
            className="text-xs font-bold tracking-widest uppercase px-4 py-1 rounded-full mb-3 border"
            style={{ color: "#1B4F8A", background: "#E8F4FD", borderColor: "#B3D4F0" }}
          >
            Kemampuan & Alat
          </span>
          <h2 className="font-extrabold text-3xl md:text-4xl text-center" style={{ color: "#0A2540" }}>
            Keahlian & Toolset
          </h2>
          <div className="section-accent" />
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-stretch">

          {/* Left: Tab Panel */}
          <div
            className="flex-1 w-full rounded-2xl p-6 md:p-8 flex flex-col"
            style={{ border: "1px solid #CBD5E1", background: "#FFFFFF", boxShadow: "0 2px 16px rgba(10,37,64,0.06)" }}
          >
            {/* Tabs */}
            <div className="flex justify-center gap-3 pb-6 mb-8" style={{ borderBottom: "1px solid #CBD5E1" }}>
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
                      ? { background: "#0A2540", color: "#FFFFFF", boxShadow: "0 4px 14px rgba(10,37,64,0.25)" }
                      : { background: "#F5F7FA", color: "#4A5568", border: "1px solid #CBD5E1" }
                  }
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Skill cards */}
            <div key={activeTab} className="animate-fadeInUp">
              {activeTab === "skills" ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {coreSkills.map((skill) => (
                  <div
                    key={skill.id}
                    className="flex flex-col p-5 rounded-2xl transition-all duration-200 cursor-default"
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
                        className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl text-2xl"
                        style={{ background: "#FFFFFF", border: "1px solid #CBD5E1" }}
                      >
                        {skill.icon}
                      </div>
                      <h4 className="font-bold text-base md:text-lg" style={{ color: "#0A2540" }}>
                        {skill.title}
                      </h4>
                    </div>
                    <p className="text-xs md:text-sm leading-relaxed mb-3" style={{ color: "#4A5568" }}>
                      {skill.desc}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      {skill.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                          style={{ background: "#E8F4FD", color: "#1B4F8A", border: "1px solid #B3D4F0" }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
                {toolset.map((tool) => (
                  <div
                    key={tool.id}
                    className="flex flex-col items-center justify-center p-3 rounded-xl transition-all duration-200 cursor-default"
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
                    <div className="w-10 h-10 flex items-center justify-center mb-2 transition-transform duration-300 hover:scale-110">
                      {tool.isEmoji ? (
                        <span className="text-2xl">{tool.icon}</span>
                      ) : tool.iconType === "svg" ? (
                        <Icon name={tool.iconName as any} />
                      ) : (
                        <Image src={tool.iconImg as any} alt={tool.title} width={36} height={36} style={{ objectFit: "contain" }} />
                      )}
                    </div>
                    <span className="font-bold text-[10px] text-center leading-snug" style={{ color: "#0A2540" }}>
                      {tool.title}
                    </span>
                  </div>
                ))}
              </div>
              )}
            </div>
          </div>

          {/* Right: Navy Info Card */}
          <div
            className="w-full lg:w-[300px] flex-shrink-0 p-7 md:p-8 rounded-2xl relative overflow-hidden"
            style={{
              background: "linear-gradient(145deg, #0A2540 0%, #1B4F8A 100%)",
              boxShadow: "0 8px 40px rgba(10,37,64,0.28)",
            }}
          >
            {/* Decorative */}
            <div className="absolute -top-8 -right-8 w-36 h-36 rounded-full" style={{ background: "rgba(59,158,222,0.12)" }} />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full" style={{ background: "rgba(255,255,255,0.04)" }} />

            <h3 className="text-xl md:text-2xl font-extrabold leading-snug relative" style={{ color: "#FFFFFF" }}>
              Data & Teknologi
            </h3>
            <p className="text-sm font-semibold mt-1 relative" style={{ color: "#3B9EDE" }}>
              Solusi Berbasis Data
            </p>
            <div className="w-full h-[1px] my-5 relative" style={{ background: "rgba(255,255,255,0.12)" }} />
            <p className="text-sm leading-relaxed relative" style={{ color: "rgba(255,255,255,0.82)" }}>
              Perpaduan analisis data yang kuat dengan kemampuan teknis IT —
              menciptakan solusi digital yang efisien, terukur, dan berdampak nyata untuk organisasi.
            </p>

            <div className="mt-7 flex flex-col gap-3 relative">
              <span className="text-xs font-bold uppercase tracking-widest block" style={{ color: "rgba(255,255,255,0.45)" }}>
                Bidang Ketertarikan:
              </span>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 rounded-full font-semibold"
                    style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "#FFFFFF" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="mt-6 relative">
              <span className="text-xs font-bold uppercase tracking-widest block mb-3" style={{ color: "rgba(255,255,255,0.45)" }}>
                Soft Skills:
              </span>
              <div className="flex flex-col gap-2">
                {softSkills.map((s, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#3B9EDE" }} />
                    <span className="text-xs" style={{ color: "rgba(255,255,255,0.8)" }}>{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
