"use client";
import React from "react";

const organisations = [
  {
    id: 1,
    org: "Generasi Baru Indonesia (GenBI) Purwokerto – Bank Indonesia",
    role: "Staf Departemen Komunikasi dan Informasi",
    period: "2024 – 2025",
    icon: "🏦",
    iconBg: "linear-gradient(135deg, #0A2540, #1B4F8A)",
    type: "Organisasi Beasiswa",
    typeBg: "#E8F4FD",
    typeColor: "#1B4F8A",
    bullets: [
      "Mengelola website dan produksi konten digital komunitas penerima beasiswa Bank Indonesia.",
      "Bertugas sebagai PDD (Publikasi, Dokumentasi, Desain) dalam kegiatan kemasyarakatan secara langsung.",
      "Garda terdepan dalam menyosialisasikan dan mengkomunikasikan berbagai kebijakan Bank Indonesia.",
    ],
  },
  {
    id: 2,
    org: "Grow Bareng",
    role: "Head Creative Design & Social Media",
    period: "April 2023 – Sekarang",
    icon: "🌱",
    iconBg: "linear-gradient(135deg, #065F46, #10B981)",
    type: "Volunteer · Aktif",
    typeBg: "#D1FAE5",
    typeColor: "#065F46",
    bullets: [
      "Memimpin tim desain dari Batch 4 hingga Batch 12 (aktif) dalam komunitas pengembangan diri.",
      "Berkontribusi pada pertumbuhan komunitas menjadi 15.000+ followers Instagram & 6.000+ anggota Telegram.",
      "Merancang panduan brand dan kebutuhan desain sosial media secara konsisten.",
    ],
  },
];

export default function Organisasi() {
  return (
    <section
      id="organisasi"
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
            Kontribusi Sosial
          </span>
          <h2 className="font-extrabold text-3xl md:text-4xl text-center" style={{ color: "#0A2540" }}>
            Organisasi
          </h2>
          <div className="section-accent" />
        </div>


        {/* Organisation Cards */}
        <div className="flex flex-col gap-6">
          {organisations.map((org) => (
            <div
              key={org.id}
              className="rounded-2xl overflow-hidden transition-all duration-300 group"
              style={{
                background: "#FFFFFF",
                border: "1px solid #CBD5E1",
                boxShadow: "0 2px 12px rgba(10,37,64,0.06)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = "#3B9EDE";
                el.style.boxShadow = "0 8px 32px rgba(10,37,64,0.12)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = "#CBD5E1";
                el.style.boxShadow = "0 2px 12px rgba(10,37,64,0.06)";
              }}
            >
              <div className="flex flex-col md:flex-row">
                {/* Left icon panel */}
                <div
                  className="md:w-24 flex items-center justify-center p-6 md:p-0 flex-shrink-0"
                  style={{ background: org.iconBg }}
                >
                  <span className="text-4xl">{org.icon}</span>
                </div>

                {/* Content */}
                <div className="flex-1 p-5 md:p-6">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span
                      className="text-[10px] font-bold px-2.5 py-0.5 rounded-full"
                      style={{ background: org.typeBg, color: org.typeColor }}
                    >
                      {org.type}
                    </span>
                    <span
                      className="text-[10px] font-bold px-2.5 py-0.5 rounded-full"
                      style={{ background: "#F0F4F8", color: "#4A5568" }}
                    >
                      📅 {org.period}
                    </span>
                  </div>

                  <h3 className="font-extrabold text-base md:text-lg leading-tight" style={{ color: "#0A2540" }}>
                    {org.org}
                  </h3>
                  <p className="text-sm font-bold mt-1" style={{ color: "#3B9EDE" }}>
                    {org.role}
                  </p>

                  <ul className="mt-4 flex flex-col gap-2.5">
                    {org.bullets.map((b, i) => (
                      <li key={i} className="flex gap-3 text-sm leading-relaxed" style={{ color: "#4A5568" }}>
                        <span
                          className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-[7px]"
                          style={{ background: "#3B9EDE" }}
                        />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
