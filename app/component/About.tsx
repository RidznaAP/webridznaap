"use client";
import Image from "next/image";
import React from "react";
import RidznaAP from "@/public/image/RidznaAP.png";
import Icon from "./assets/Icon";

const infoDetails = [
  { label: "Pendidikan", value: "S1 Teknik Informatika", icon: "🏫" },
  { label: "Lokasi", value: "Cilacap, Jawa Tengah", icon: "📍" },
  { label: "Status", value: "Mahasiswa Semester 6", icon: "🎓" },
  { label: "Keahlian", value: "UI/UX & Creative Design", icon: "💼" },
];

export default function About() {
  return (
    <section
      id="tentang-saya"
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
            Profil Singkat
          </span>
          <h2
            className="font-extrabold text-3xl md:text-4xl text-center"
            style={{ color: "#0A2540" }}
          >
            Tentang Saya
          </h2>
          <div
            className="w-14 h-1 rounded-full mt-3"
            style={{ background: "#3B9EDE" }}
          />
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">

          {/* Profile Image */}
          <div className="flex-shrink-0 relative w-[270px] h-[350px] md:w-[300px] md:h-[390px] group">
            {/* Glow layer */}
            <div
              className="absolute inset-0 rounded-2xl -z-10 blur-xl transition-opacity duration-300"
              style={{ background: "#EBF0F8", opacity: 0.8 }}
            />
            {/* Offset border */}
            <div
              className="absolute inset-0 rounded-2xl -z-10 translate-x-4 translate-y-4 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"
              style={{ border: "2px solid #CBD5E1" }}
            />
            {/* Image wrapper */}
            <div
              className="w-full h-full rounded-2xl overflow-hidden relative"
              style={{
                border: "1px solid #CBD5E1",
                boxShadow: "0 16px 50px rgba(10,37,64,0.13)",
              }}
            >
              <Image
                src={RidznaAP}
                alt="Ridzna Asep Purwanto"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 group-hover:scale-105"
              />
              {/* Navy bottom overlay */}
              <div
                className="absolute bottom-0 left-0 right-0 h-20"
                style={{
                  background: "linear-gradient(to top, rgba(10,37,64,0.35), transparent)",
                }}
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <h3
              className="text-xl md:text-2xl font-bold leading-snug"
              style={{ color: "#1A202C" }}
            >
              Hai 👋 Saya{" "}
              <span style={{ color: "#0A2540" }}>Ridzna Asep Purwanto</span>,
              seorang desainer UI/UX kreatif yang berbasis di{" "}
              <span style={{ color: "#1B4F8A" }}>Indonesia</span>.
            </h3>

            <p
              className="mt-4 text-base md:text-lg leading-relaxed"
              style={{ color: "#4A5568" }}
            >
              Saya adalah mahasiswa Teknik Informatika semester 6 di Universitas
              Muhammadiyah Purwokerto. Memiliki rasa tanggung jawab sosial yang kuat,
              kemampuan kerja sama tim yang baik, serta cara berpikir yang strategis.
            </p>
            <p
              className="mt-3 text-base md:text-lg leading-relaxed"
              style={{ color: "#4A5568" }}
            >
              Melalui berbagai pelatihan dan proyek praktis, saya terus mengembangkan
              keterampilan untuk merancang antarmuka pengguna yang fungsional, estetik,
              dan berpusat pada kepuasan pengguna.
            </p>

            {/* Info badges grid */}
            <div className="grid grid-cols-2 gap-3 mt-8">
              {infoDetails.map((info, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3.5 rounded-xl transition-all duration-200 hover:shadow-md group"
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #CBD5E1",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "#3B9EDE";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "#CBD5E1";
                  }}
                >
                  <span className="text-xl" role="img" aria-label={info.label}>
                    {info.icon}
                  </span>
                  <div className="text-left">
                    <p
                      className="text-[10px] font-bold uppercase tracking-wider"
                      style={{ color: "#4A5568" }}
                    >
                      {info.label}
                    </p>
                    <p
                      className="text-xs md:text-sm font-bold"
                      style={{ color: "#0A2540" }}
                    >
                      {info.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8 flex justify-center lg:justify-start">
              <a
                href="https://wa.me/6282261945398?text=Halo%20Ridzna%2C%20saya%20tertarik%20dengan%20portofolio%20Anda%20dan%20ingin%20berdiskusi%20lebih%20lanjut."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 font-bold rounded-xl px-6 py-3 transition-all duration-300 transform hover:-translate-y-0.5 border-2"
                style={{
                  background: "#FFFFFF",
                  borderColor: "#0A2540",
                  color: "#0A2540",
                  boxShadow: "0 4px 16px rgba(10,37,64,0.08)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = "#0A2540";
                  el.style.color = "#FFFFFF";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = "#FFFFFF";
                  el.style.color = "#0A2540";
                }}
              >
                <Icon name="chat" />
                <span>Kenal Lebih Dekat</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
