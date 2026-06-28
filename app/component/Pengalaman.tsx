"use client";
import React, { useState } from "react";

const experiences = [
  {
    id: 1,
    company: "Badan Karantina Indonesia – Deputi Karantina Ikan",
    role: "Pengolah Data & Informasi",
    program: "Program Maganghub Kemnakar Batch 2",
    period: "Nov 2025 – Mei 2026",
    periodBadge: "2025 – 2026",
    type: "Internship",
    typeColor: "#065F46",
    typeBg: "#D1FAE5",
    icon: "🐟",
    iconBg: "linear-gradient(135deg, #0A2540, #1B4F8A)",
    bullets: [
      "Membangun Sistem Informasi Pemantauan Hama dan Penyakit Ikan Karantina (SIP-HIPIK) berbasis PHP guna mendigitalisasi dan mempercepat alur pengawasan instansi.",
      "Memproses, membersihkan, dan menganalisis lebih dari 100.000 data rekam jejak ekspor-impor komoditas karantina ikan untuk menghasilkan akurasi pelaporan yang tinggi.",
      "Menjamin validasi data dan meminimalkan anomali input data pada sistem pelaporan berkala.",
    ],
  },
  {
    id: 2,
    company: "Lembaga Sertifikasi Profesi UMP",
    role: "Staf IT · Student Internship",
    program: null,
    period: "Feb 2024 – Nov 2025",
    periodBadge: "2024 – 2025",
    type: "Internship",
    typeColor: "#1B4F8A",
    typeBg: "#E8F4FD",
    icon: "🏛️",
    iconBg: "linear-gradient(135deg, #1B4F8A, #3B9EDE)",
    bullets: [
      "Mengelola sistem uji kompetensi digital dan aset media sosial LSP, berhasil memfasilitasi kelancaran ujian bagi 400+ asesi serta mendukung penambahan 5 skema sertifikasi baru.",
      "Mengawasi manajemen operasional pelaksanaan Uji Kompetensi Mahasiswa secara konsisten sepanjang 6 periode dan kegiatan program kerja.",
      "Mengoptimalkan performa infrastruktur IT melalui troubleshooting perangkat keras/lunak secara berkala guna menekan risiko kendala teknis saat uji kompetensi berlangsung.",
    ],
  },
  {
    id: 3,
    company: "PT Mandatech Mataram Mukti",
    role: "Staf Software Testing",
    program: "Magang Internal Program Studi",
    period: "Sep 2024 – Des 2024",
    periodBadge: "2024",
    type: "Internship",
    typeColor: "#92400E",
    typeBg: "#FEF3C7",
    icon: "🧪",
    iconBg: "linear-gradient(135deg, #78350F, #D97706)",
    bullets: [
      "Melaksanakan pengujian fungsional (functional testing) secara menyeluruh pada platform sobatlazismu.org dan sosialmu.org untuk memastikan stabilitas fitur sebelum dirilis.",
      "Mengidentifikasi, mendokumentasikan, dan menelusuri puluhan bug sistem secara detail guna mempercepat proses perbaikan oleh tim developer.",
      "Meningkatkan standar kualitas dan keandalan produk aplikasi melalui implementasi siklus pengujian sistematis yang terstruktur.",
    ],
  },
  {
    id: 4,
    company: "Afeksidn",
    role: "Staf UI/UX Designer",
    program: "Superteam Internship Batch 3",
    period: "Apr 2024 – Agt 2024",
    periodBadge: "2024",
    type: "Internship",
    typeColor: "#1B4F8A",
    typeBg: "#E8F4FD",
    icon: "🎨",
    iconBg: "linear-gradient(135deg, #6B21A8, #A855F7)",
    bullets: [
      "Merancang arsitektur antarmuka (UI/UX) website admin internal yang intuitif dan adaptif berdasarkan analisis mendalam terhadap kebutuhan pengguna target.",
      "Memastikan seluruh aset visual dan alur navigasi aplikasi memenuhi standar desain industri (design system) demi mendongkrak efisiensi kerja admin.",
    ],
  },
];

export default function Pengalaman() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section
      id="pengalaman"
      className="pt-24 pb-20 px-6 md:px-12 lg:px-24"
      style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F4F7FB 100%)" }}
    >
      <div className="container mx-auto max-w-6xl">

        {/* Header */}
        <div className="flex flex-col items-center mb-14">
          <span
            className="text-xs font-bold tracking-widest uppercase px-4 py-1 rounded-full mb-3 border"
            style={{ color: "#1B4F8A", background: "#E8F4FD", borderColor: "#B3D4F0" }}
          >
            Jejak Karier
          </span>
          <h2 className="font-extrabold text-3xl md:text-4xl text-center" style={{ color: "#0A2540" }}>
            Pengalaman
          </h2>
          <div className="section-accent" />
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Center line */}
          <div
            className="absolute left-6 md:left-8 top-0 bottom-0 w-[2px]"
            style={{ background: "linear-gradient(to bottom, #CBD5E1, #3B9EDE, #CBD5E1)" }}
          />

          <div className="flex flex-col gap-8">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative pl-16 md:pl-20 group">
                {/* Timeline icon */}
                <div
                  className="absolute left-0 top-0 w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
                  style={{
                    background: exp.iconBg,
                    boxShadow: "0 4px 16px rgba(10,37,64,0.2)",
                    border: "3px solid #F5F7FA",
                  }}
                >
                  {exp.icon}
                </div>

                {/* Card */}
                <div
                  className="rounded-2xl p-5 md:p-6 transition-all duration-300 cursor-pointer"
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
                  onClick={() => setExpanded(expanded === exp.id ? null : exp.id)}
                >
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div className="flex-1">
                      <div className="flex flex-wrap gap-2 mb-2">
                        <span
                          className="text-[10px] font-bold px-2.5 py-0.5 rounded-full"
                          style={{ background: exp.typeBg, color: exp.typeColor }}
                        >
                          {exp.type}
                        </span>
                        <span
                          className="text-[10px] font-bold px-2.5 py-0.5 rounded-full"
                          style={{ background: "#F0F4F8", color: "#4A5568" }}
                        >
                          📅 {exp.period}
                        </span>
                      </div>
                      <h3 className="font-extrabold text-base md:text-lg leading-tight" style={{ color: "#0A2540" }}>
                        {exp.company}
                      </h3>
                      <p className="text-sm font-bold mt-0.5" style={{ color: "#3B9EDE" }}>
                        {exp.role}
                      </p>
                      {exp.program && (
                        <p className="text-xs mt-0.5 italic" style={{ color: "#4A5568" }}>
                          {exp.program}
                        </p>
                      )}
                    </div>
                    <button
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200"
                      style={{ background: "#F0F4F8", color: "#4A5568" }}
                      aria-label={expanded === exp.id ? "Collapse" : "Expand"}
                    >
                      <span
                        className="text-sm font-bold transition-transform duration-300"
                        style={{ display: "inline-block", transform: expanded === exp.id ? "rotate(180deg)" : "rotate(0deg)" }}
                      >
                        ▾
                      </span>
                    </button>
                  </div>

                  {/* Expandable bullet points */}
                  {expanded === exp.id && (
                    <div className="mt-4 pt-4" style={{ borderTop: "1px solid #EDF2F7" }}>
                      <ul className="flex flex-col gap-3">
                        {exp.bullets.map((bullet, i) => (
                          <li key={i} className="flex gap-3 text-sm leading-relaxed" style={{ color: "#4A5568" }}>
                            <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: "#3B9EDE", marginTop: "6px" }} />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Click hint */}
                  {expanded !== exp.id && (
                    <p className="text-[10px] mt-3 font-medium" style={{ color: "#9CA3AF" }}>
                      Klik untuk lihat detail →
                    </p>
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
