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
    // Simulate API request submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <section
      id="kontak"
      className="pt-24 pb-20 px-6 md:px-12 lg:px-24"
      style={{ background: "#FFFFFF" }}
    >
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex flex-col items-center mb-14">
          <span
            className="text-xs font-bold tracking-widest uppercase px-4 py-1 rounded-full mb-3 border"
            style={{ color: "#1B4F8A", background: "#E8F4FD", borderColor: "#CBD5E1" }}
          >
            Hubungi Saya
          </span>
          <h2
            className="font-extrabold text-3xl md:text-4xl text-center"
            style={{ color: "#0A2540" }}
          >
            Hubungi / Kontak
          </h2>
          <div
            className="w-14 h-1 rounded-full mt-3"
            style={{ background: "#3B9EDE" }}
          />
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
                  className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold"
                  style={{ background: "#E8F4FD", color: "#1B4F8A" }}
                >
                  ✓
                </div>
                <h3 className="font-extrabold text-xl md:text-2xl" style={{ color: "#0A2540" }}>
                  Pesan Terkirim!
                </h3>
                <p className="text-sm max-w-md" style={{ color: "#4A5568" }}>
                  Terima kasih telah menghubungi saya. Saya telah menerima pesan Anda dan akan merespons melalui email secepatnya.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 px-6 py-3 font-bold text-sm rounded-xl transition-all duration-300"
                  style={{
                    background: "#0A2540",
                    color: "#FFFFFF",
                    boxShadow: "0 4px 12px rgba(10,37,64,0.2)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = "#1B4F8A";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = "#0A2540";
                  }}
                >
                  Kirim Pesan Baru
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h3 className="font-bold text-base md:text-lg" style={{ color: "#0A2540" }}>
                  Ada proyek atau pertanyaan? Silakan hubungi saya langsung!
                </h3>

                {/* Name Field */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-xs font-bold" style={{ color: "#1A202C" }}>
                    Nama Lengkap <span className="text-red-500">*</span>
                  </label>
                  <div
                    className="relative w-full rounded-xl flex items-center p-3 transition-all duration-200"
                    style={{
                      background: "#F5F7FA",
                      border: "1px solid #CBD5E1",
                    }}
                    onFocusCapture={(e) => {
                      (e.currentTarget as HTMLDivElement).style.borderColor = "#3B9EDE";
                      (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 0 3px rgba(59,158,222,0.15)";
                    }}
                    onBlurCapture={(e) => {
                      (e.currentTarget as HTMLDivElement).style.borderColor = "#CBD5E1";
                      (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                    }}
                  >
                    <div className="flex items-center" style={{ color: "#4A5568" }}>
                      <Icon name="edit" />
                    </div>
                    <input
                      id="name"
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

                {/* Email Field */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs font-bold" style={{ color: "#1A202C" }}>
                    Alamat Email <span className="text-red-500">*</span>
                  </label>
                  <div
                    className="relative w-full rounded-xl flex items-center p-3 transition-all duration-200"
                    style={{
                      background: "#F5F7FA",
                      border: "1px solid #CBD5E1",
                    }}
                    onFocusCapture={(e) => {
                      (e.currentTarget as HTMLDivElement).style.borderColor = "#3B9EDE";
                      (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 0 3px rgba(59,158,222,0.15)";
                    }}
                    onBlurCapture={(e) => {
                      (e.currentTarget as HTMLDivElement).style.borderColor = "#CBD5E1";
                      (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                    }}
                  >
                    <div className="flex items-center" style={{ color: "#4A5568" }}>
                      <Icon name="mail" />
                    </div>
                    <input
                      id="email"
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
                  {/* Phone Field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="text-xs font-bold" style={{ color: "#1A202C" }}>
                      Nomor Telepon
                    </label>
                    <div
                      className="relative w-full rounded-xl flex items-center p-3 transition-all duration-200"
                      style={{
                        background: "#F5F7FA",
                        border: "1px solid #CBD5E1",
                      }}
                      onFocusCapture={(e) => {
                        (e.currentTarget as HTMLDivElement).style.borderColor = "#3B9EDE";
                        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 0 3px rgba(59,158,222,0.15)";
                      }}
                      onBlurCapture={(e) => {
                        (e.currentTarget as HTMLDivElement).style.borderColor = "#CBD5E1";
                        (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                      }}
                    >
                      <div className="flex items-center" style={{ color: "#4A5568" }}>
                        <Icon name="grid" />
                      </div>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="flex-1 pl-3 border-none outline-none bg-transparent text-sm"
                        style={{ color: "#1A202C" }}
                        placeholder="contoh: 0812..."
                      />
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="subject" className="text-xs font-bold" style={{ color: "#1A202C" }}>
                      Subjek
                    </label>
                    <div
                      className="relative w-full rounded-xl flex items-center p-3 transition-all duration-200"
                      style={{
                        background: "#F5F7FA",
                        border: "1px solid #CBD5E1",
                      }}
                      onFocusCapture={(e) => {
                        (e.currentTarget as HTMLDivElement).style.borderColor = "#3B9EDE";
                        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 0 3px rgba(59,158,222,0.15)";
                      }}
                      onBlurCapture={(e) => {
                        (e.currentTarget as HTMLDivElement).style.borderColor = "#CBD5E1";
                        (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                      }}
                    >
                      <div className="flex items-center" style={{ color: "#4A5568" }}>
                        <Icon name="page" />
                      </div>
                      <input
                        id="subject"
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

                {/* Message Field */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs font-bold" style={{ color: "#1A202C" }}>
                    Pesan <span className="text-red-500">*</span>
                  </label>
                  <div
                    className="relative w-full h-[150px] rounded-xl flex items-start p-3 transition-all duration-200"
                    style={{
                      background: "#F5F7FA",
                      border: "1px solid #CBD5E1",
                    }}
                    onFocusCapture={(e) => {
                      (e.currentTarget as HTMLDivElement).style.borderColor = "#3B9EDE";
                      (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 0 3px rgba(59,158,222,0.15)";
                    }}
                    onBlurCapture={(e) => {
                      (e.currentTarget as HTMLDivElement).style.borderColor = "#CBD5E1";
                      (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                    }}
                  >
                    <textarea
                      id="message"
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
                    style={{
                      background: "#0A2540",
                      color: "#FFFFFF",
                      boxShadow: "0 4px 16px rgba(10,37,64,0.22)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.background = "#1B4F8A";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.background = "#0A2540";
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        <span>Mengirim...</span>
                      </>
                    ) : (
                      <span>Kirim Pesan</span>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Contact Information Card */}
          <div
            className="w-full lg:w-[400px] rounded-2xl p-6 md:p-8 flex flex-col justify-between relative overflow-hidden"
            style={{
              background: "linear-gradient(145deg, #0A2540 0%, #1B4F8A 100%)",
              boxShadow: "0 8px 40px rgba(10,37,64,0.25)",
            }}
          >
            {/* Background elements */}
            <div
              className="absolute -bottom-10 -right-10 w-44 h-44 rounded-full"
              style={{ background: "rgba(59,158,222,0.12)" }}
            />
            
            <div className="flex flex-col gap-6 relative">
              <h3 className="font-extrabold text-xl md:text-2xl leading-snug" style={{ color: "#FFFFFF" }}>
                Mari Terhubung!
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.85)" }}>
                Saya sangat terbuka untuk diskusi proyek baru, kolaborasi kreatif, atau sekadar bertukar pikiran. Hubungi saya melalui kontak di bawah ini.
              </p>

              <div className="flex flex-col gap-5 mt-4">
                {/* Email */}
                <a
                  href="mailto:asepridzna@gmail.com"
                  className="flex items-center gap-4 group p-2 rounded-xl transition-all duration-200 hover:bg-white/5"
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-105" style={{ background: "rgba(255,255,255,0.1)" }}>
                    <Icon name="mail2" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] font-bold uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.55)" }}>Email</p>
                    <p className="text-xs md:text-sm font-semibold" style={{ color: "#FFFFFF" }}>asepridzna@gmail.com</p>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/6282261945398"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group p-2 rounded-xl transition-all duration-200 hover:bg-white/5"
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-105" style={{ background: "rgba(255,255,255,0.1)" }}>
                    <Icon name="chat2" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] font-bold uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.55)" }}>WhatsApp</p>
                    <p className="text-xs md:text-sm font-semibold" style={{ color: "#FFFFFF" }}>0822 6194 5398</p>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com/ridzna.ena"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group p-2 rounded-xl transition-all duration-200 hover:bg-white/5"
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-105" style={{ background: "rgba(255,255,255,0.1)" }}>
                    <Icon name="instagram" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] font-bold uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.55)" }}>Instagram</p>
                    <p className="text-xs md:text-sm font-semibold" style={{ color: "#FFFFFF" }}>@ridzna.ena</p>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/ridzna-asep-purwanto-874287239"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group p-2 rounded-xl transition-all duration-200 hover:bg-white/5"
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-105" style={{ background: "rgba(255,255,255,0.1)" }}>
                    <Icon name="linkedin" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] font-bold uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.55)" }}>LinkedIn</p>
                    <p className="text-xs md:text-sm font-semibold" style={{ color: "#FFFFFF" }}>Ridzna Asep Purwanto</p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-4 p-2">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(255,255,255,0.1)" }}>
                    <Icon name="location" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] font-bold uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.55)" }}>Alamat</p>
                    <p className="text-xs md:text-sm font-semibold leading-relaxed" style={{ color: "#FFFFFF" }}>
                      Cilacap, Jawa Tengah, Indonesia.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t flex justify-center text-xs relative" style={{ borderColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.6)" }}>
              <span>Ready for opportunities 🌍</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
