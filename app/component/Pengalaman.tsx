"use client";
import React, { useRef } from "react";
import Afeksi from "@/public/image/Afeksi.png";
import Image from "next/image";

const experiences = [
  {
    title: "Super Team Afeksi Batch 3",
    role: "UI/UX Designer",
    period: "2023 – 2024",
    description:
      "Bertanggung jawab atas riset pengguna, wireframing, perancangan visual UI web admin, dan prototipe interaktif untuk platform kesehatan mental Afeksi.",
  },
  {
    title: "Grow Bareng",
    role: "Creative Design",
    period: "2023 – 2024",
    description:
      "Mengembangkan aset visual pemasaran digital, konten Instagram kreatif, dan merancang identitas visual yang konsisten untuk memperkuat branding program.",
  },
  {
    title: "Lembaga Sertifikasi Profesi UMP",
    role: "Content Creator",
    period: "2023 – Sekarang",
    description:
      "Memproduksi video edukasi, desain konten promosi skema kompetensi profesi, serta mengelola media sosial resmi LSP UMP untuk menjaring pendaftar sertifikasi.",
  },
  {
    title: "GenBI Purwokerto 2024",
    role: "Media Komunikasi & Informasi",
    period: "2024",
    description:
      "Mengelola arus publikasi humas, merancang infografis edukasi finansial, serta mendokumentasikan program kerja sosial kemasyarakatan GenBI.",
  },
  {
    title: "Study Independent MSIB 5",
    role: "UI/UX Designer",
    period: "2023",
    description:
      "Mengikuti program studi independen bersertifikat UI/UX, berkolaborasi dalam proyek capstone memecahkan masalah pengguna nyata menggunakan Figma.",
  },
  {
    title: "Internship OTCA",
    role: "Graphic Design",
    period: "2022",
    description:
      "Merancang visual promosi media sosial harian, infografis edukasi kelas bahasa asing, dan materi iklan digital untuk One Third Consulting & Abroad.",
  },
];

export default function Pengalaman() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const cardWidth = 360;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -cardWidth : cardWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="pengalaman"
      className="pt-24 pb-20 px-6 md:px-12 lg:px-24"
      style={{ background: "#FFFFFF" }}
    >
      <div className="container mx-auto max-w-6xl">

        {/* Header */}
        <div className="flex flex-col items-center mb-12">
          <span
            className="text-xs font-bold tracking-widest uppercase px-4 py-1 rounded-full mb-3 border"
            style={{ color: "#1B4F8A", background: "#E8F4FD", borderColor: "#CBD5E1" }}
          >
            Jejak Karier
          </span>
          <h2
            className="font-extrabold text-3xl md:text-4xl text-center"
            style={{ color: "#0A2540" }}
          >
            Pengalaman Kerja
          </h2>
          <div className="w-14 h-1 rounded-full mt-3" style={{ background: "#3B9EDE" }} />
        </div>

        {/* Scroll Controls */}
        <div className="flex justify-end gap-3 mb-6">
          {["←", "→"].map((arrow, i) => (
            <button
              key={arrow}
              onClick={() => handleScroll(i === 0 ? "left" : "right")}
              aria-label={i === 0 ? "Scroll left" : "Scroll right"}
              className="w-10 h-10 rounded-full font-bold text-base transition-all duration-200 flex items-center justify-center"
              style={{ border: "1.5px solid #CBD5E1", color: "#0A2540", background: "#F5F7FA" }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLButtonElement;
                el.style.background = "#0A2540";
                el.style.color = "#FFFFFF";
                el.style.borderColor = "#0A2540";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLButtonElement;
                el.style.background = "#F5F7FA";
                el.style.color = "#0A2540";
                el.style.borderColor = "#CBD5E1";
              }}
            >
              {arrow}
            </button>
          ))}
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scrollbar-hide gap-6 pb-4 snap-x snap-mandatory"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="flex-shrink-0 snap-start rounded-2xl overflow-hidden flex flex-col group transition-all duration-300"
              style={{
                width: "300px",
                border: "1px solid #CBD5E1",
                background: "#FFFFFF",
                boxShadow: "0 2px 12px rgba(10,37,64,0.06)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = "#3B9EDE";
                el.style.boxShadow = "0 10px 36px rgba(10,37,64,0.13)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = "#CBD5E1";
                el.style.boxShadow = "0 2px 12px rgba(10,37,64,0.06)";
              }}
            >
              {/* Image */}
              <div className="relative w-full h-[170px] overflow-hidden" style={{ background: "#EBF0F8" }}>
                <Image
                  src={Afeksi}
                  alt={exp.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to top, rgba(10,37,64,0.65) 0%, transparent 60%)",
                  }}
                />
                {/* Period chip */}
                <span
                  className="absolute bottom-4 left-4 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded"
                  style={{ background: "#0A2540", color: "#FFFFFF" }}
                >
                  {exp.period}
                </span>
              </div>

              {/* Info */}
              <div className="p-5 flex flex-col gap-2 flex-grow">
                <h3
                  className="font-extrabold text-base md:text-lg leading-tight line-clamp-1 transition-colors duration-200"
                  style={{ color: "#0A2540" }}
                >
                  {exp.title}
                </h3>
                <p
                  className="font-bold text-xs uppercase tracking-wide"
                  style={{ color: "#3B9EDE" }}
                >
                  {exp.role}
                </p>
                <p
                  className="text-xs md:text-sm leading-relaxed mt-1 line-clamp-4"
                  style={{ color: "#4A5568" }}
                >
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
