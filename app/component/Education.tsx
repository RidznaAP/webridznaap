"use client";
import Image from "next/image";
import React from "react";
import UMP from "@/public/image/ump.png";

const educationHistory = [
  {
    period: "2021 – 2025",
    institution: "UNIVERSITAS MUHAMMADIYAH PURWOKERTO",
    major: "S1 Teknik Informatika",
    details:
      "Fokus studi: Pemrograman, Basis Data, Analisis Sistem, UI/UX Design, Rekayasa Perangkat Lunak. Aktif dalam pengembangan perangkat lunak, pemrograman web, dan perancangan antarmuka pengguna.",
    gpa: "IPK : 3.70 / 4.00",
    badge: "Lulus 2025",
  },
  {
    period: "2018 – 2021",
    institution: "SMA NEGERI 3 PURWOKERTO",
    major: "Ilmu Pengetahuan Alam (IPA)",
    details:
      "Fokus pada ilmu eksakta dan logika matematika dasar, aktif dalam berbagai organisasi siswa.",
    gpa: "Nilai Rata-rata : 86.40",
    badge: null,
  },
];

export default function Education() {
  return (
    <section
      id="pendidikan"
      className="pt-24 pb-20 px-6 md:px-12 lg:px-24"
      style={{ background: "linear-gradient(135deg, #F0F4F8 0%, #E1EAF4 100%)" }}
    >
      <div className="container mx-auto max-w-6xl">

        {/* Section Header */}
        <div className="flex flex-col items-center mb-14">
          <span
            className="text-xs font-bold tracking-widest uppercase px-4 py-1 rounded-full mb-3 border"
            style={{ color: "#1B4F8A", background: "#E8F4FD", borderColor: "#B3D4F0" }}
          >
            Riwayat Studi
          </span>
          <h2 className="font-extrabold text-3xl md:text-4xl text-center" style={{ color: "#0A2540" }}>
            Pendidikan
          </h2>
          <div className="section-accent" />
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">

          {/* University Logo Card */}
          <div className="w-full lg:w-[360px] flex-shrink-0 flex justify-center">
            <div
              className="p-8 rounded-2xl w-full max-w-[320px] flex flex-col items-center text-center transition-shadow duration-300 hover:shadow-lg relative overflow-hidden"
              style={{
                background: "linear-gradient(145deg, #0A2540 0%, #1B4F8A 100%)",
                boxShadow: "0 8px 40px rgba(10,37,64,0.22)",
              }}
            >
              {/* Decorative circles */}
              <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full" style={{ background: "rgba(59,158,222,0.1)" }} />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full" style={{ background: "rgba(255,255,255,0.04)" }} />

              <div className="w-36 h-36 relative mb-5 rounded-2xl overflow-hidden p-2" style={{ background: "rgba(255,255,255,0.95)" }}>
                <Image
                  src={UMP}
                  alt="Universitas Muhammadiyah Purwokerto"
                  fill
                  style={{ objectFit: "contain", padding: "8px" }}
                />
              </div>
              <h4 className="font-extrabold text-base leading-snug relative" style={{ color: "#FFFFFF" }}>
                Universitas Muhammadiyah Purwokerto
              </h4>
              <p className="text-xs mt-1 relative" style={{ color: "rgba(255,255,255,0.65)" }}>
                Purwokerto, Jawa Tengah
              </p>
              <div className="mt-5 px-4 py-2 rounded-full relative" style={{ background: "rgba(59,158,222,0.15)", border: "1px solid rgba(59,158,222,0.35)" }}>
                <p className="text-sm font-extrabold" style={{ color: "#3B9EDE" }}>IPK 3.70 / 4.00</p>
              </div>
              <p className="text-[10px] mt-3 font-semibold relative" style={{ color: "rgba(255,255,255,0.45)" }}>
                Lulus 2025 · S1 Teknik Informatika
              </p>
            </div>
          </div>

          {/* Vertical Timeline */}
          <div
            className="flex-1 w-full relative pl-7 md:pl-9 flex flex-col gap-8 timeline-line"
          >
            {educationHistory.map((edu, index) => (
              <div key={index} className="relative group">

                {/* Timeline dot */}
                <div
                  className="absolute -left-[34px] md:-left-[42px] top-2 w-5 h-5 rounded-full transition-transform duration-300 group-hover:scale-125 z-10"
                  style={{ background: "#0A2540", border: "3px solid #F5F7FA", boxShadow: "0 0 0 2px #3B9EDE" }}
                />

                {/* Card */}
                <div
                  className="p-6 rounded-2xl transition-all duration-300 transform hover:-translate-y-0.5"
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #CBD5E1",
                    boxShadow: "0 2px 12px rgba(10,37,64,0.06)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.borderColor = "#3B9EDE";
                    el.style.boxShadow = "0 8px 28px rgba(10,37,64,0.10)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.borderColor = "#CBD5E1";
                    el.style.boxShadow = "0 2px 12px rgba(10,37,64,0.06)";
                  }}
                >
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    {/* Period badge */}
                    <span
                      className="inline-block px-3 py-1 text-xs font-bold rounded-full"
                      style={{ background: "#E8F4FD", color: "#1B4F8A" }}
                    >
                      {edu.period}
                    </span>
                    {edu.badge && (
                      <span
                        className="inline-block px-3 py-1 text-xs font-bold rounded-full"
                        style={{ background: "#D1FAE5", color: "#065F46" }}
                      >
                        ✓ {edu.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="font-extrabold text-lg md:text-xl leading-tight" style={{ color: "#0A2540" }}>
                    {edu.institution}
                  </h3>

                  <p className="text-sm font-semibold mt-1" style={{ color: "#3B9EDE" }}>
                    {edu.major}
                  </p>

                  <p className="text-xs md:text-sm mt-3 leading-relaxed" style={{ color: "#4A5568" }}>
                    {edu.details}
                  </p>

                  {edu.gpa && (
                    <div
                      className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-lg text-xs font-bold"
                      style={{ background: "#E8F4FD", color: "#1B4F8A", border: "1px solid #B3D4F0" }}
                    >
                      🏆 {edu.gpa}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
