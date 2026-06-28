"use client";
import React from "react";

const quickLinks = [
  { label: "Beranda", id: "beranda" },
  { label: "Tentang Saya", id: "tentang-saya" },
  { label: "Skill", id: "skill" },
  { label: "Pendidikan", id: "pendidikan" },
  { label: "Pengalaman", id: "pengalaman" },
  { label: "Sertifikat", id: "sertifikat" },
  { label: "Organisasi", id: "organisasi" },
  { label: "Portofolio", id: "portofolio" },
  { label: "Kontak", id: "kontak" },
];

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ridznaap", icon: "💼" },
  { label: "Instagram", href: "https://instagram.com/ridzna.ena", icon: "📸" },
  { label: "WhatsApp", href: "https://wa.me/6282261945398", icon: "💬" },
  { label: "Email", href: "mailto:asepridzna@gmail.com", icon: "✉️" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "#0A2540",
        borderTop: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        {/* Main footer content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand Column */}
          <div className="flex flex-col gap-4">
            <div>
              <p className="font-extrabold text-2xl" style={{ color: "#FFFFFF" }}>
                RidznaAP<span style={{ color: "#3B9EDE" }}>.</span>
              </p>
              <p className="text-xs mt-1 font-semibold uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.4)" }}>
                IT Staff · Data Analyst · Web Developer
              </p>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
              Sarjana Komputer dengan pengalaman di instansi pemerintahan, berfokus pada pengelolaan data dan pengembangan sistem informasi.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3 mt-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-base transition-all duration-200 hover:scale-110"
                  style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(59,158,222,0.2)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.08)"; }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-extrabold text-sm uppercase tracking-widest mb-5" style={{ color: "rgba(255,255,255,0.5)" }}>
              Navigasi
            </h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="text-xs font-semibold transition-all duration-200"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "#3B9EDE"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.6)"; }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-extrabold text-sm uppercase tracking-widest mb-5" style={{ color: "rgba(255,255,255,0.5)" }}>
              Kontak
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { icon: "✉️", text: "asepridzna@gmail.com" },
                { icon: "📱", text: "+62 822-6194-5398" },
                { icon: "📍", text: "Serang Baru, Kab. Bekasi" },
                { icon: "💼", text: "linkedin.com/in/ridznaap" },
              ].map((c, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-sm">{c.icon}</span>
                  <span className="text-xs font-semibold" style={{ color: "rgba(255,255,255,0.6)" }}>{c.text}</span>
                </li>
              ))}
            </ul>
            {/* Open to work badge */}
            <div
              className="mt-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold"
              style={{ background: "rgba(59,158,222,0.12)", border: "1px solid rgba(59,158,222,0.3)", color: "#3B9EDE" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse inline-block" />
              Open to Work
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="py-5 flex flex-col sm:flex-row items-center justify-between gap-2"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
        >
          <p className="text-xs font-semibold" style={{ color: "rgba(255,255,255,0.45)" }}>
            &copy; {new Date().getFullYear()} Ridzna Asep Purwanto. All Rights Reserved.
          </p>
          <p className="text-[10px] font-medium" style={{ color: "rgba(255,255,255,0.28)" }}>
            Didesain & Dikembangkan dengan Presisi & Kreativitas ✨
          </p>
        </div>
      </div>
    </footer>
  );
}
