import React from "react";

export default function Footer() {
  return (
    <footer
      className="py-10 border-t"
      style={{
        background: "#0A2540",
        borderColor: "rgba(255,255,255,0.08)",
      }}
    >
      <div className="container mx-auto px-6 text-center">
        <p className="text-xs md:text-sm font-semibold" style={{ color: "rgba(255,255,255,0.6)" }}>
          &copy; {new Date().getFullYear()} RidznaAP Portfolio. All Rights Reserved.
        </p>
        <p className="text-[10px] mt-2 font-medium" style={{ color: "rgba(255,255,255,0.35)" }}>
          Didesain & Dikembangkan dengan Presisi & Kreativitas.
        </p>
      </div>
    </footer>
  );
}
