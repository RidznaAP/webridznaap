"use client";
import React, { useState } from "react";
import Icon from "./assets/Icon";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Harap isi nama, email, dan pesan Anda.");
      return;
    }
    setIsSubmitting(true);
    // Redirect to WhatsApp with pre-filled message
    const msg = encodeURIComponent(
      `Halo Ridzna! 👋\n\nNama: ${formData.name}\nEmail: ${formData.email}${formData.phone ? `\nTelepon: ${formData.phone}` : ""}${formData.subject ? `\nSubjek: ${formData.subject}` : ""}\n\nPesan:\n${formData.message}`
    );
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.open(`https://wa.me/6282261945398?text=${msg}`, "_blank");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 800);
  };

  const fieldStyle = {
    base: { background: "#F5F7FA", border: "1px solid #CBD5E1" },
    focus: { borderColor: "#3B9EDE", boxShadow: "0 0 0 3px rgba(59,158,222,0.12)" },
    blur: { borderColor: "#CBD5E1", boxShadow: "none" },
  };

  return (
    <section
      id="kontak"
      className="pt-24 pb-20 px-6 md:px-12 lg:px-24"
      style={{ background: "linear-gradient(180deg, #E8F0F8 0%, #FFFFFF 100%)" }}
    >
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex flex-col items-center mb-14">
          <span
            className="text-xs font-bold tracking-widest uppercase px-4 py-1 rounded-full mb-3 border"
            style={{ color: "#1B4F8A", background: "#E8F4FD", borderColor: "#B3D4F0" }}
          >
            Hubungi Saya
          </span>
          <h2 className="font-extrabold text-3xl md:text-4xl text-center" style={{ color: "#0A2540" }}>
            Mari Terhubung!
          </h2>
          <div className="section-accent" />
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-stretch">
          {/* Left Column: Contact Form */}
          <div
            className="flex-1 rounded-2xl p-6 md:p-8"
            style={{
              background: "#FFFFFF",
              border: "1px solid #CBD5E1",
              boxShadow: "0 2px 16px rgba(10,37,64,0.06)",
            }}
          >
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center text-center h-full min-h-[400px] gap-4">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-2xl"
                  style={{ background: "#D1FAE5" }}
                >
                  ✓
                </div>
                <h3 className="font-extrabold text-xl md:text-2xl" style={{ color: "#0A2540" }}>
                  Terima Kasih! 🎉
                </h3>
                <p className="text-sm max-w-md" style={{ color: "#4A5568" }}>
                  Pesan Anda sedang diteruskan ke WhatsApp saya. Saya akan segera merespons!
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 px-6 py-3 font-bold text-sm rounded-xl transition-all duration-300"
                  style={{ background: "#0A2540", color: "#FFFFFF", boxShadow: "0 4px 12px rgba(10,37,64,0.2)" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#1B4F8A"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#0A2540"; }}
                >
                  Kirim Pesan Baru
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h3 className="font-bold text-base md:text-lg" style={{ color: "#0A2540" }}>
                  Ada proyek, pertanyaan, atau peluang kolaborasi? Saya terbuka untuk diskusi! 🤝
                </h3>

                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-name" className="text-xs font-bold" style={{ color: "#1A202C" }}>
                    Nama Lengkap <span className="text-red-500">*</span>
                  </label>
                  <div
                    className="relative w-full rounded-xl flex items-center p-3 transition-all duration-200"
                    style={fieldStyle.base}
                    onFocusCapture={(e) => { Object.assign((e.currentTarget as HTMLDivElement).style, fieldStyle.focus); }}
                    onBlurCapture={(e) => { Object.assign((e.currentTarget as HTMLDivElement).style, fieldStyle.blur); }}
                  >
                    <div className="flex items-center" style={{ color: "#4A5568" }}><Icon name="edit" /></div>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="flex-1 pl-3 border-none outline-none bg-transparent text-sm"
                      style={{ color: "#1A202C" }}
                      placeholder="Masukkan nama Anda"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-email" className="text-xs font-bold" style={{ color: "#1A202C" }}>
                    Alamat Email <span className="text-red-500">*</span>
                  </label>
                  <div
                    className="relative w-full rounded-xl flex items-center p-3 transition-all duration-200"
                    style={fieldStyle.base}
                    onFocusCapture={(e) => { Object.assign((e.currentTarget as HTMLDivElement).style, fieldStyle.focus); }}
                    onBlurCapture={(e) => { Object.assign((e.currentTarget as HTMLDivElement).style, fieldStyle.blur); }}
                  >
                    <div className="flex items-center" style={{ color: "#4A5568" }}><Icon name="mail" /></div>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="flex-1 pl-3 border-none outline-none bg-transparent text-sm"
                      style={{ color: "#1A202C" }}
                      placeholder="contoh@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Phone */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-phone" className="text-xs font-bold" style={{ color: "#1A202C" }}>
                      Nomor Telepon
                    </label>
                    <div
                      className="relative w-full rounded-xl flex items-center p-3 transition-all duration-200"
                      style={fieldStyle.base}
                      onFocusCapture={(e) => { Object.assign((e.currentTarget as HTMLDivElement).style, fieldStyle.focus); }}
                      onBlurCapture={(e) => { Object.assign((e.currentTarget as HTMLDivElement).style, fieldStyle.blur); }}
                    >
                      <div className="flex items-center" style={{ color: "#4A5568" }}><Icon name="grid" /></div>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="flex-1 pl-3 border-none outline-none bg-transparent text-sm"
                        style={{ color: "#1A202C" }}
                        placeholder="0812..."
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-subject" className="text-xs font-bold" style={{ color: "#1A202C" }}>
                      Subjek
                    </label>
                    <div
                      className="relative w-full rounded-xl flex items-center p-3 transition-all duration-200"
                      style={fieldStyle.base}
                      onFocusCapture={(e) => { Object.assign((e.currentTarget as HTMLDivElement).style, fieldStyle.focus); }}
                      onBlurCapture={(e) => { Object.assign((e.currentTarget as HTMLDivElement).style, fieldStyle.blur); }}
                    >
                      <div className="flex items-center" style={{ color: "#4A5568" }}><Icon name="page" /></div>
                      <input
                        id="contact-subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleChange}
                        className="flex-1 pl-3 border-none outline-none bg-transparent text-sm"
                        style={{ color: "#1A202C" }}
                        placeholder="Topik pesan"
                      />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-message" className="text-xs font-bold" style={{ color: "#1A202C" }}>
                    Pesan <span className="text-red-500">*</span>
                  </label>
                  <div
                    className="relative w-full h-[140px] rounded-xl flex items-start p-3 transition-all duration-200"
                    style={fieldStyle.base}
                    onFocusCapture={(e) => { Object.assign((e.currentTarget as HTMLDivElement).style, fieldStyle.focus); }}
                    onBlurCapture={(e) => { Object.assign((e.currentTarget as HTMLDivElement).style, fieldStyle.blur); }}
                  >
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="flex-1 pl-3 border-none outline-none bg-transparent resize-none h-full text-sm"
                      style={{ color: "#1A202C" }}
                      placeholder="Tulis pesan Anda di sini..."
                    />
                  </div>
                </div>

                <div className="mt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-fit px-8 py-3.5 font-bold text-sm rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-50 flex items-center justify-center gap-2"
                    style={{ background: "#0A2540", color: "#FFFFFF", boxShadow: "0 4px 16px rgba(10,37,64,0.22)" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#1B4F8A"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#0A2540"; }}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Mengirim...</span>
                      </>
                    ) : (
                      <>
                        <span>💬 Kirim via WhatsApp</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Contact Information Card */}
          <div
            className="w-full lg:w-[380px] rounded-2xl p-6 md:p-8 flex flex-col justify-between relative overflow-hidden"
            style={{
              background: "linear-gradient(145deg, #0A2540 0%, #1B4F8A 100%)",
              boxShadow: "0 8px 40px rgba(10,37,64,0.25)",
            }}
          >
            <div className="absolute -bottom-10 -right-10 w-44 h-44 rounded-full" style={{ background: "rgba(59,158,222,0.1)" }} />
            <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full" style={{ background: "rgba(255,255,255,0.03)" }} />

            <div className="flex flex-col gap-5 relative">
              <div>
                <h3 className="font-extrabold text-xl md:text-2xl leading-snug" style={{ color: "#FFFFFF" }}>
                  Info Kontak
                </h3>
                <p className="text-sm leading-relaxed mt-2" style={{ color: "rgba(255,255,255,0.75)" }}>
                  Saya sangat terbuka untuk peluang kerja, kolaborasi proyek, atau sekadar bertukar pikiran. Hubungi saya!
                </p>
              </div>

              <div className="flex flex-col gap-4">
                {/* Email */}
                <a href="mailto:asepridzna@gmail.com" className="flex items-center gap-4 group p-2 rounded-xl transition-all duration-200 hover:bg-white/5">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform" style={{ background: "rgba(255,255,255,0.1)" }}>
                    <Icon name="mail2" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] font-bold uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.5)" }}>Email</p>
                    <p className="text-xs md:text-sm font-semibold" style={{ color: "#FFFFFF" }}>asepridzna@gmail.com</p>
                  </div>
                </a>

                {/* WhatsApp */}
                <a href="https://wa.me/6282261945398" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group p-2 rounded-xl transition-all duration-200 hover:bg-white/5">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform" style={{ background: "rgba(255,255,255,0.1)" }}>
                    <Icon name="chat2" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] font-bold uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.5)" }}>WhatsApp</p>
                    <p className="text-xs md:text-sm font-semibold" style={{ color: "#FFFFFF" }}>+62 822-6194-5398</p>
                  </div>
                </a>

                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/ridznaap" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group p-2 rounded-xl transition-all duration-200 hover:bg-white/5">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform" style={{ background: "rgba(255,255,255,0.1)" }}>
                    <Icon name="linkedin" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] font-bold uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.5)" }}>LinkedIn</p>
                    <p className="text-xs md:text-sm font-semibold" style={{ color: "#FFFFFF" }}>linkedin.com/in/ridznaap</p>
                  </div>
                </a>

                {/* Instagram */}
                <a href="https://instagram.com/ridzna.ena" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group p-2 rounded-xl transition-all duration-200 hover:bg-white/5">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform" style={{ background: "rgba(255,255,255,0.1)" }}>
                    <Icon name="instagram" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] font-bold uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.5)" }}>Instagram</p>
                    <p className="text-xs md:text-sm font-semibold" style={{ color: "#FFFFFF" }}>@ridzna.ena</p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-4 p-2">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(255,255,255,0.1)" }}>
                    <Icon name="location" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] font-bold uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.5)" }}>Lokasi</p>
                    <p className="text-xs md:text-sm font-semibold leading-relaxed" style={{ color: "#FFFFFF" }}>
                      Serang Baru, Kab. Bekasi, Indonesia
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t flex justify-center text-xs relative" style={{ borderColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.55)" }}>
              <span>🟢 Open to Work · Siap Berkolaborasi</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
