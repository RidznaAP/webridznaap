"use client";
import { useState, useEffect } from "react";

const navItems = [
  { label: "Beranda", id: "beranda" },
  { label: "Tentang Saya", id: "tentang-saya" },
  { label: "Skill", id: "skill" },
  { label: "Pendidikan", id: "pendidikan" },
  { label: "Pengalaman", id: "pengalaman" },
  { label: "Portofolio", id: "portofolio" },
  { label: "Kontak", id: "kontak" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("beranda");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // IntersectionObserver for tracking current section in view
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -50% 0px", // Trigger when section is in the middle of the viewport
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => {
      navItems.forEach((item) => {
        const el = document.getElementById(item.id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Offset for sticky navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed w-full left-0 top-0 transition-all duration-300 z-50 lg:px-16 md:px-8 px-6 py-4 flex items-center justify-between ${
        isScrolled
          ? "backdrop-blur-md shadow-sm py-3 border-b"
          : "bg-transparent py-5"
      }`}
      style={{
        backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.85)" : "transparent",
        borderColor: isScrolled ? "#CBD5E1" : "transparent",
      }}
    >
      <div>
        <a
          href="#beranda"
          onClick={(e) => handleNavClick(e, "beranda")}
          className="font-extrabold text-xl md:text-2xl tracking-tight transition-transform hover:scale-95 inline-block"
          style={{ color: "#0A2540" }}
        >
          Ridzna Asep Purwanto
        </a>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center gap-8">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className="text-sm font-bold transition-all duration-200 relative py-1"
              style={{
                color: isActive ? "#0A2540" : "#4A5568",
              }}
              onMouseEnter={(e) => {
                if (!isActive) e.currentTarget.style.color = "#0A2540";
              }}
              onMouseLeave={(e) => {
                if (!isActive) e.currentTarget.style.color = "#4A5568";
              }}
            >
              {item.label}
              {isActive && (
                <span
                  className="absolute bottom-0 left-0 w-full h-[2.5px] rounded-full animate-fade-in"
                  style={{ background: "#3B9EDE" }}
                />
              )}
            </a>
          );
        })}
      </div>

      {/* Hamburger Menu Icon */}
      <button
        type="button"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen ? "true" : "false"}
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex flex-col justify-center items-center w-8 h-8 gap-[6px] lg:hidden z-50 focus:outline-none"
      >
        <span
          className="transition-all duration-300 ease-in-out h-[2px] w-6 rounded-full"
          style={{
            background: "#1A202C",
            transform: isOpen ? "rotate(45deg) translate(5px, 6px)" : "none",
          }}
        />
        <span
          className="transition-all duration-300 ease-in-out h-[2px] w-6 rounded-full"
          style={{
            background: "#1A202C",
            opacity: isOpen ? 0 : 1,
          }}
        />
        <span
          className="transition-all duration-300 ease-in-out h-[2px] w-6 rounded-full"
          style={{
            background: "#1A202C",
            transform: isOpen ? "rotate(-45deg) translate(5px, -6px)" : "none",
          }}
        />
      </button>

      {/* Mobile Drawer Menu */}
      <div
        role="menu"
        aria-hidden={isOpen ? "false" : "true"}
        className={`fixed inset-0 w-full h-screen z-40 flex flex-col justify-center items-center lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
        style={{ background: "rgba(255, 255, 255, 0.98)", backdropFilter: "blur(8px)" }}
      >
        <ul className="flex flex-col gap-6 text-center text-xl font-extrabold">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className="block px-6 py-2 transition-all duration-200"
                  style={{
                    color: isActive ? "#0A2540" : "#4A5568",
                    transform: isActive ? "scale(1.1)" : "scale(1)",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.color = "#0A2540";
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.color = "#4A5568";
                  }}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
