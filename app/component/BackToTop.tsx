"use client";
import React, { useEffect, useState } from "react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Kembali ke atas"
      className={`fixed bottom-8 right-8 p-3.5 rounded-full z-50 transition-all duration-300 transform hover:scale-110 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      }`}
      style={{
        background: "#0A2540",
        color: "#FFFFFF",
        boxShadow: "0 8px 24px rgba(10,37,64,0.3)",
      }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#1B4F8A"; }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#0A2540"; }}
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19V5M5 12l7-7 7 7"/>
      </svg>
    </button>
  );
}
