"use client";
import Image from "next/image";
import React from "react";
import UMP from "@/public/image/ump.png";

const educationHistory = [
  {
    period: "2021 - Sekarang",
    institution: "UNIVERSITAS MUHAMMADIYAH PURWOKERTO",
    major: "Teknik Informatika",
    details: "Aktif dalam pengembangan perangkat lunak, pemrograman web, dan perancangan antarmuka pengguna (UI/UX).",
    gpa: "IPK : 3.68 / 4.00",
  },
  {
    period: "2018 - 2021",
    institution: "SMA NEGERI 3 PURWOKERTO",
    major: "Ilmu Pengetahuan Alam (IPA)",
    details: "Fokus pada ilmu eksakta dan logika matematika dasar, aktif dalam berbagai organisasi siswa.",
    gpa: null,
  },
];

export default function Education() {
  return (
    <section
      id="pendidikan"
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
            Riwayat Studi
          </span>
          <h2
            className="font-extrabold text-3xl md:text-4xl text-center"
            style={{ color: "#0A2540" }}
          >
            Pendidikan
          </h2>
          <div
            className="w-14 h-1 rounded-full mt-3"
            style={{ background: "#3B9EDE" }}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">

          {/* University Logo Card */}
          <div className="w-full lg:w-[380px] flex-shrink-0 flex justify-center">
            <div
              className="p-8 rounded-2xl w-full max-w-[340px] flex flex-col items-center text-center transition-shadow duration-300 hover:shadow-lg"
              style={{
                background: "#FFFFFF",
                border: "1px solid #CBD5E1",
                boxShadow: "0 2px 12px rgba(10,37,64,0.07)",
              }}
            >
              <div className="w-44 h-44 relative mb-4">
                <Image
                  src={UMP}
                  alt="Universitas Muhammadiyah Purwokerto"
                  layout="fill"
                  objectFit="contain"
                  className="p-2"
                />
              </div>
              <h4 className="font-bold text-sm md:text-base leading-snug" style={{ color: "#0A2540" }}>
                Kampus Utama
              </h4>
              <p className="text-xs mt-1" style={{ color: "#4A5568" }}>
                Universitas Muhammadiyah Purwokerto
              </p>
            </div>
          </div>

          {/* Vertical Timeline */}
          <div
            className="flex-1 w-full relative pl-7 md:pl-9 flex flex-col gap-8"
            style={{ borderLeft: "2px solid #CBD5E1" }}
          >
            {educationHistory.map((edu, index) => (
              <div key={index} className="relative group">

                {/* Timeline dot */}
                <div
                  className="absolute -left-[34px] md:-left-[42px] top-2 w-5 h-5 rounded-full transition-transform duration-300 group-hover:scale-125 z-10"
                  style={{
                    background: "#0A2540",
                    border: "3px solid #F5F7FA",
                    boxShadow: "0 0 0 2px #3B9EDE",
                  }}
                />

                {/* Card */}
                <div
                  className="p-6 rounded-2xl transition-all duration-300 transform hover:-translate-y-0.5 group"
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
                  {/* Period badge */}
                  <span
                    className="inline-block px-3 py-1 text-xs font-bold rounded-full mb-3"
                    style={{ background: "#E8F4FD", color: "#1B4F8A" }}
                  >
                    {edu.period}
                  </span>

                  <h3
                    className="font-extrabold text-lg md:text-xl leading-tight"
                    style={{ color: "#0A2540" }}
                  >
                    {edu.institution}
                  </h3>

                  <p
                    className="text-sm font-semibold mt-1"
                    style={{ color: "#3B9EDE" }}
                  >
                    {edu.major}
                  </p>

                  <p
                    className="text-xs md:text-sm mt-3 leading-relaxed"
                    style={{ color: "#4A5568" }}
                  >
                    {edu.details}
                  </p>

                  {edu.gpa && (
                    <div
                      className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-lg text-xs font-bold"
                      style={{
                        background: "#E8F4FD",
                        color: "#1B4F8A",
                        border: "1px solid #CBD5E1",
                      }}
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
