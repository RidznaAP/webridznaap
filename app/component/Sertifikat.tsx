"use client";
import React from "react";

const certificates = [
  {
    id: 1,
    title: "Sertifikat Kompetensi Content Creator",
    issuer: "BNSP – Badan Nasional Sertifikasi Profesi",
    icon: "📜",
    color: "#065F46",
    bg: "#D1FAE5",
    borderColor: "#6EE7B7",
    accentBg: "linear-gradient(135deg, #065F46, #10B981)",
  },
  {
    id: 2,
    title: "MSIB 5 Kampus Merdeka – UI/UX Design",
    issuer: "Skilvul · Kemdikbud",
    icon: "🎓",
    color: "#1B4F8A",
    bg: "#E8F4FD",
    borderColor: "#93C5FD",
    accentBg: "linear-gradient(135deg, #1B4F8A, #3B9EDE)",
  },
  {
    id: 3,
    title: "Sertifikat Internship UI/UX Designer",
    issuer: "Superteam Batch 3, Afeksidn",
    icon: "🎨",
    color: "#6B21A8",
    bg: "#F3E8FF",
    borderColor: "#D8B4FE",
    accentBg: "linear-gradient(135deg, #6B21A8, #A855F7)",
  },
  {
    id: 4,
    title: "Sertifikat Magang Software Testing",
    issuer: "PT Mandatech Mataram Mukti",
    icon: "🧪",
    color: "#92400E",
    bg: "#FEF3C7",
    borderColor: "#FCD34D",
    accentBg: "linear-gradient(135deg, #92400E, #D97706)",
  },
  {
    id: 5,
    title: "Sertifikat Keanggotaan GenBI Purwokerto 2024",
    issuer: "Bank Indonesia",
    icon: "🏦",
    color: "#0A2540",
    bg: "#EBF0F8",
    borderColor: "#93C5FD",
    accentBg: "linear-gradient(135deg, #0A2540, #1B4F8A)",
  },
  {
    id: 6,
    title: "Sertifikat Internship Graphic Designer",
    issuer: "OTCA – One Third Consulting & Abroad",
    icon: "✏️",
    color: "#9F1239",
    bg: "#FFE4E6",
    borderColor: "#FDA4AF",
    accentBg: "linear-gradient(135deg, #9F1239, #F43F5E)",
  },
];

export default function Sertifikat() {
  return (
    <section
      id="sertifikat"
      className="pt-24 pb-20 px-6 md:px-12 lg:px-24"
      style={{ background: "radial-gradient(circle at 50% 0%, #F4F7FB 0%, #FFFFFF 100%)" }}
    >
      <div className="container mx-auto max-w-6xl">

        {/* Section Header */}
        <div className="flex flex-col items-center mb-14">
          <span
            className="text-xs font-bold tracking-widest uppercase px-4 py-1 rounded-full mb-3 border"
            style={{ color: "#1B4F8A", background: "#E8F4FD", borderColor: "#B3D4F0" }}
          >
            Pencapaian
          </span>
          <h2 className="font-extrabold text-3xl md:text-4xl text-center" style={{ color: "#0A2540" }}>
            Sertifikat & Penghargaan
          </h2>
          <div className="section-accent" />
          <p className="text-sm mt-4 text-center max-w-lg" style={{ color: "#4A5568" }}>
            Berbagai sertifikat kompetensi yang telah diraih sebagai bukti nyata keahlian dan komitmen terhadap pengembangan diri secara profesional.
          </p>
        </div>

        {/* Certificate Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={cert.id}
              className="rounded-2xl overflow-hidden transition-all duration-300 flex flex-col group"
              style={{
                background: "#FFFFFF",
                border: `1px solid #CBD5E1`,
                boxShadow: "0 2px 12px rgba(10,37,64,0.06)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = cert.borderColor;
                el.style.boxShadow = "0 8px 32px rgba(10,37,64,0.13)";
                el.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = "#CBD5E1";
                el.style.boxShadow = "0 2px 12px rgba(10,37,64,0.06)";
                el.style.transform = "translateY(0)";
              }}
            >
              {/* Top accent bar */}
              <div className="h-1.5 w-full" style={{ background: cert.accentBg }} />

              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: cert.bg }}
                  >
                    {cert.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-extrabold text-sm md:text-base leading-tight" style={{ color: "#0A2540" }}>
                      {cert.title}
                    </h3>
                    <p className="text-xs mt-1.5 font-semibold" style={{ color: cert.color }}>
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                {/* Verified badge */}
                <div className="mt-4 flex items-center gap-1.5">
                  <span className="text-xs font-bold" style={{ color: "#10B981" }}>✓ Terverifikasi</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex justify-center">
          <a
            href="https://drive.google.com/drive/folders/1vBqTOpzbmgYnWdPV-xmUssopvgwPX9X2?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 font-bold rounded-xl transition-all duration-300 transform hover:-translate-y-0.5"
            style={{
              background: "#0A2540",
              color: "#FFFFFF",
              boxShadow: "0 4px 20px rgba(10,37,64,0.25)",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#1B4F8A"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#0A2540"; }}
          >
            📄 Lihat Semua Dokumen
          </a>
        </div>
      </div>
    </section>
  );
}
