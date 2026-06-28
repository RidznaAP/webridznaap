"use client";
import Image from "next/image";
import React from "react";
import RidznaAP from "@/public/image/RidznaAP.jpg";
import Icon from "./assets/Icon";

const infoDetails = [
  { label: "Pendidikan", value: "S1 Teknik Informatika (2025)", icon: "🏫" },
  { label: "Lokasi", value: "Serang Baru, Kab. Bekasi", icon: "📍" },
  { label: "Status", value: "Fresh Graduate · Siap Kerja", icon: "🎓" },
  { label: "Keahlian", value: "IT Staff · Data Analyst", icon: "💼" },
];

const highlights = [
  { icon: "📊", label: "Data Analysis", sub: "Google Sheets, Power BI, VLOOKUP" },
  { icon: "💻", label: "Web Development", sub: "PHP, HTML, CSS, MySQL" },
  { icon: "🧪", label: "Software Testing", sub: "Functional & Bug Testing" },
];

export default function About() {
  return (
    <section
      id="tentang-saya"
      className="pt-24 pb-20 px-6 md:px-12 lg:px-24"
      style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F4F7FB 100%)" }}
    >
      <div className="container mx-auto max-w-6xl">

        {/* Section Header */}
        <div className="flex flex-col items-center mb-14">
          <span
            className="text-xs font-bold tracking-widest uppercase px-4 py-1 rounded-full mb-3 border"
            style={{ color: "#1B4F8A", background: "#E8F4FD", borderColor: "#B3D4F0" }}
          >
            Profil Singkat
          </span>
          <h2 className="font-extrabold text-3xl md:text-4xl text-center" style={{ color: "#0A2540" }}>
            Tentang Saya
          </h2>
          <div className="section-accent" />
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">

          {/* Profile Image */}
          <div className="flex-shrink-0 relative w-[270px] h-[350px] md:w-[300px] md:h-[390px] group">
            {/* Glow layer */}
            <div
              className="absolute inset-0 rounded-2xl -z-10 blur-xl transition-opacity duration-300"
              style={{ background: "#DDE8F5", opacity: 0.9 }}
            />
            {/* Offset border */}
            <div
              className="absolute inset-0 rounded-2xl -z-10 translate-x-4 translate-y-4 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"
              style={{ border: "2px solid #B3D4F0" }}
            />
            {/* Image wrapper */}
            <div
              className="w-full h-full rounded-2xl overflow-hidden relative"
              style={{
                border: "1px solid #CBD5E1",
                boxShadow: "0 16px 50px rgba(10,37,64,0.15)",
              }}
            >
              <Image
                src={RidznaAP}
                alt="Ridzna Asep Purwanto"
                fill
                style={{ objectFit: "cover" }}
                className="transition-transform duration-500 group-hover:scale-105"
              />
              {/* Navy bottom overlay */}
              <div
                className="absolute bottom-0 left-0 right-0 h-20"
                style={{ background: "linear-gradient(to top, rgba(10,37,64,0.4), transparent)" }}
              />
            </div>

            {/* IPK badge */}
            <div
              className="absolute -bottom-5 -right-5 rounded-2xl px-4 py-2.5 text-center animate-float"
              style={{
                background: "#0A2540",
                boxShadow: "0 8px 24px rgba(10,37,64,0.3)",
              }}
            >
              <p className="text-xl font-extrabold" style={{ color: "#3B9EDE" }}>3.70</p>
              <p className="text-[9px] font-bold uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.7)" }}>IPK / 4.00</p>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <h3
              className="text-xl md:text-2xl font-bold leading-snug"
              style={{ color: "#1A202C" }}
            >
              Hai 👋 Saya{" "}
              <span style={{ color: "#0A2540" }}>Ridzna Asep Purwanto</span>,{" "}
              Sarjana Komputer yang berfokus pada{" "}
              <span style={{ color: "#1B4F8A" }}>Data & Teknologi Informasi</span>.
            </h3>

            <p className="mt-4 text-base md:text-lg leading-relaxed" style={{ color: "#4A5568" }}>
              Sarjana Komputer (S.Kom) dengan IPK 3.70 dan pengalaman langsung mengelola serta
              menganalisis data operasional di instansi pemerintahan, didukung kemampuan teknis dalam
              pengembangan website dan software testing.
            </p>
            <p className="mt-3 text-base leading-relaxed" style={{ color: "#4A5568" }}>
              Terampil mengolah data menggunakan Google Sheets, Power BI, dan dashboard sistem
              untuk menghasilkan insight yang mendukung pengambilan keputusan. Terbiasa bekerja lintas divisi,
              teliti, dan berorientasi pada solusi berbasis data.
            </p>

            {/* Highlight boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6">
              {highlights.map((h, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center sm:items-start p-3.5 rounded-xl transition-all duration-200 hover:shadow-md text-center sm:text-left"
                  style={{ background: "#FFFFFF", border: "1px solid #CBD5E1" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "#3B9EDE"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "#CBD5E1"; }}
                >
                  <span className="text-2xl mb-1">{h.icon}</span>
                  <p className="text-xs font-extrabold" style={{ color: "#0A2540" }}>{h.label}</p>
                  <p className="text-[10px] mt-0.5 leading-snug" style={{ color: "#4A5568" }}>{h.sub}</p>
                </div>
              ))}
            </div>

            {/* Info badges grid */}
            <div className="grid grid-cols-2 gap-3 mt-5">
              {infoDetails.map((info, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3.5 rounded-xl transition-all duration-200 hover:shadow-md"
                  style={{ background: "#FFFFFF", border: "1px solid #CBD5E1" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "#3B9EDE"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "#CBD5E1"; }}
                >
                  <span className="text-xl" role="img" aria-label={info.label}>{info.icon}</span>
                  <div className="text-left">
                    <p className="text-[10px] font-bold uppercase tracking-wider" style={{ color: "#4A5568" }}>
                      {info.label}
                    </p>
                    <p className="text-xs md:text-sm font-bold" style={{ color: "#0A2540" }}>
                      {info.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">
              <a
                href="https://wa.me/6282261945398?text=Halo%20Ridzna%2C%20saya%20tertarik%20dengan%20portofolio%20Anda%20dan%20ingin%20berdiskusi%20lebih%20lanjut."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 font-bold rounded-xl px-6 py-3 transition-all duration-300 transform hover:-translate-y-0.5 border-2"
                style={{ background: "#FFFFFF", borderColor: "#0A2540", color: "#0A2540", boxShadow: "0 4px 16px rgba(10,37,64,0.08)" }}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = "#0A2540"; el.style.color = "#FFFFFF"; }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = "#FFFFFF"; el.style.color = "#0A2540"; }}
              >
                <Icon name="chat" />
                <span>Kenal Lebih Dekat</span>
              </a>
              <a
                href="https://www.linkedin.com/in/ridznaap"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 font-bold rounded-xl px-6 py-3 transition-all duration-300 transform hover:-translate-y-0.5"
                style={{ background: "#0A2540", color: "#FFFFFF", boxShadow: "0 4px 16px rgba(10,37,64,0.2)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#1B4F8A"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#0A2540"; }}
              >
                <Icon name="linkedin" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
