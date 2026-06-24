"use client";
import React, { useState, useEffect } from "react";
import Icon from "./assets/Icon";
import Ridzna from "@/public/image/ridzna.png";
import Image from "next/image";

const roles = ["UI/UX Designer", "Creative Designer", "Content Creator"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullText = roles[roleIndex];

    const handleType = () => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(100);
        if (currentText === fullText) {
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(50);
        if (currentText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          return;
        }
      }
      timer = setTimeout(handleType, typingSpeed);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, typingSpeed]);

  return (
    <section
      id="beranda"
      className="relative min-h-screen pt-28 pb-16 flex items-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #F5F7FA 0%, #EBF0F8 45%, #F5F7FA 100%)",
      }}
    >
      {/* Decorative navy radial blobs */}
      <div
        className="absolute top-0 right-0 w-[520px] h-[520px] rounded-full -z-10"
        style={{
          background: "radial-gradient(circle at 70% 30%, rgba(10,37,64,0.07), transparent 65%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full -z-10"
        style={{
          background: "radial-gradient(circle at 30% 70%, rgba(27,79,138,0.06), transparent 65%)",
        }}
      />
      {/* Subtle grid */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(10,37,64,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(10,37,64,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-between gap-12 w-full">
        {/* ── Left Content ── */}
        <div className="flex-1 max-w-xl text-left">

          {/* Greeting badge */}
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-semibold rounded-full mb-6 border"
            style={{ background: "#E8F4FD", borderColor: "#CBD5E1", color: "#1B4F8A" }}
          >
            <span className="animate-waving-hand inline-block">👋</span>
            Halo, Saya Siap Berkolaborasi!
          </span>

          {/* Name heading */}
          <h1
            className="font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight"
            style={{ color: "#1A202C" }}
          >
            Ridzna Asep{" "}
            <span
              style={{
                color: "#0A2540",
                borderBottom: "4px solid #3B9EDE",
                display: "inline-block",
                paddingBottom: "3px",
              }}
            >
              Purwanto
            </span>
          </h1>

          {/* Typewriter role */}
          <div className="h-10 mt-4 flex items-center">
            <span className="font-bold text-xl md:text-2xl" style={{ color: "#4A5568" }}>
              Seorang{" "}
              <span
                className="font-extrabold"
                style={{
                  color: "#1B4F8A",
                  borderRight: "2.5px solid #3B9EDE",
                  paddingRight: "4px",
                }}
              >
                {currentText}
              </span>
            </span>
          </div>

          {/* Description */}
          <p
            className="text-base md:text-lg mt-6 leading-relaxed max-w-md"
            style={{ color: "#4A5568" }}
          >
            Berpengalaman dalam desain UI/UX dan Creative Design. Saya menciptakan
            pengalaman digital yang bermakna, fungsional, dan estetik untuk mendorong
            pertumbuhan bisnis melalui inovasi kreatif.
          </p>

          {/* CTA Buttons */}
          <div className="mt-9 flex flex-col sm:flex-row gap-4">
            <a
              href="https://drive.google.com/drive/folders/173KQkLwqag64i-0Wi7yBH1uM4e_5m7YC?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-7 py-3.5 font-bold rounded-xl transition-all duration-300 transform hover:-translate-y-0.5"
              style={{
                background: "#0A2540",
                color: "#FFFFFF",
                boxShadow: "0 4px 20px rgba(10,37,64,0.28)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "#1B4F8A";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                  "0 6px 28px rgba(27,79,138,0.35)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "#0A2540";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                  "0 4px 20px rgba(10,37,64,0.28)";
              }}
            >
              <Icon name="download" width={20} height={20} />
              <span>Download CV</span>
            </a>

            <a
              href="#tentang-saya"
              className="flex items-center justify-center px-7 py-3.5 font-bold rounded-xl transition-all duration-300 border-2"
              style={{ borderColor: "#0A2540", color: "#0A2540", background: "transparent" }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = "#0A2540";
                el.style.color = "#FFFFFF";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = "transparent";
                el.style.color = "#0A2540";
              }}
            >
              Kenali Saya
            </a>
          </div>

          {/* Stats strip */}
          <div
            className="mt-12 flex gap-8 pt-8"
            style={{ borderTop: "1px solid #CBD5E1" }}
          >
            {[
              { val: "3+", label: "Tahun Belajar" },
              { val: "10+", label: "Proyek Selesai" },
              { val: "3.68", label: "IPK" },
            ].map((stat, i) => (
              <div key={i} className="text-left">
                <p
                  className="text-2xl md:text-3xl font-extrabold"
                  style={{ color: "#0A2540" }}
                >
                  {stat.val}
                </p>
                <p
                  className="text-xs font-semibold mt-0.5 uppercase tracking-wider"
                  style={{ color: "#4A5568" }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right Content: Profile Image ── */}
        <div className="flex-1 flex justify-center relative mt-10 md:mt-0">
          <div className="relative w-[280px] h-[360px] md:w-[320px] md:h-[420px] group">

            {/* Offset frame layers */}
            <div
              className="absolute inset-0 rounded-3xl -z-10 translate-x-5 translate-y-5 transition-transform duration-300 group-hover:translate-x-2.5 group-hover:translate-y-2.5"
              style={{ border: "2px solid #CBD5E1" }}
            />
            <div
              className="absolute inset-0 rounded-3xl -z-20 translate-x-10 translate-y-10 transition-transform duration-300 group-hover:translate-x-5 group-hover:translate-y-5"
              style={{ background: "#EBF0F8" }}
            />

            {/* Main image container */}
            <div
              className="w-full h-full rounded-3xl overflow-hidden relative"
              style={{
                border: "1px solid #CBD5E1",
                boxShadow: "0 20px 60px rgba(10,37,64,0.15), 0 4px 16px rgba(10,37,64,0.08)",
              }}
            >
              <Image
                src={Ridzna}
                alt="Ridzna Asep Purwanto"
                layout="fill"
                objectFit="cover"
                priority
                className="transition-transform duration-500 group-hover:scale-105"
              />
              {/* Navy gradient at image bottom */}
              <div
                className="absolute bottom-0 left-0 right-0 h-28"
                style={{
                  background: "linear-gradient(to top, rgba(10,37,64,0.45), transparent)",
                }}
              />
            </div>

            {/* Floating info badge */}
            <div
              className="absolute -bottom-6 -left-6 rounded-2xl p-3.5 flex items-center gap-3"
              style={{
                background: "#FFFFFF",
                border: "1px solid #CBD5E1",
                boxShadow: "0 10px 30px rgba(10,37,64,0.12)",
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                style={{ background: "#E8F4FD" }}
              >
                🎨
              </div>
              <div>
                <p
                  className="text-[10px] font-bold uppercase tracking-widest"
                  style={{ color: "#4A5568" }}
                >
                  Spesialisasi
                </p>
                <p className="text-xs font-extrabold" style={{ color: "#0A2540" }}>
                  UI/UX & Desain
                </p>
              </div>
            </div>

            {/* Cornflower accent dots */}
            <div
              className="absolute -top-3 -right-3 w-7 h-7 rounded-full"
              style={{ background: "#3B9EDE" }}
            />
            <div
              className="absolute top-3 -right-7 w-3.5 h-3.5 rounded-full opacity-50"
              style={{ background: "#1B4F8A" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
