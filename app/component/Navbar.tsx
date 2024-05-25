"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
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

  return (
    <nav
      className={`fixed w-full bg-white lg:px-[60px] md:px-8 px-5 lg:py-6 py-3 flex items-center justify-between ${
        isScrolled ? "border-b-[3px] border-primary" : ""
      }`}
    >
      <div>
        <Link
          href={"/"}
          className="text-primary font-extrabold text-xl md:text-2xl"
        >
          Ridzna Asep Purwanto
        </Link>
      </div>
      <div className="text-black1 hidden lg:flex lg:flex-row lg:gap-10">
        <Link
          href={"/"}
          className="text-lg text-black2 hover:scale-95 hover:border-b-[3px] hover:text-primary hover:duration-300 hover:ease-out hover:font-semibold hover:border-primary"
        >
          Beranda
        </Link>
        <Link
          href={"/"}
          className="text-lg text-black2 hover:scale-95 hover:border-b-[3px] hover:text-primary hover:duration-300 hover:ease-out hover:font-semibold hover:border-primary"
        >
          Tentang Saya
        </Link>
        <Link
          href={"/"}
          className="text-lg text-black2 hover:scale-95 hover:border-b-[3px] hover:text-primary hover:duration-300 hover:ease-out hover:font-semibold hover:border-primary"
        >
          Skill
        </Link>
        <Link
          href={"/"}
          className="text-lg text-black2 hover:scale-95 hover:border-b-[3px] hover:text-primary hover:duration-300 hover:ease-out hover:font-semibold hover:border-primary"
        >
          Pendidikan
        </Link>
        <Link
          href={"/"}
          className="text-lg text-black2 hover:scale-95 hover:border-b-[3px] hover:text-primary hover:duration-300 hover:ease-out hover:font-semibold hover:border-primary"
        >
          Pengalaman
        </Link>
        <Link
          href={"/"}
          className="text-lg text-black2 hover:scale-95 hover:border-b-[3px] hover:text-primary hover:duration-300 hover:ease-out hover:font-semibold hover:border-primary"
        >
          Portofolio
        </Link>
        <Link
          href={"/"}
          className="text-lg text-black2 hover:scale-95 hover:border-b-[3px] hover:text-primary hover:duration-300 hover:ease-out hover:font-semibold hover:border-primary"
        >
          Kontak
        </Link>
      </div>

      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className={`${
          isOpen ? "open" : ""
        } flex flex-col items-center w-fit gap-[7px] cursor-pointer lg:hidden z-50 py-2`}
      >
        <span className="transition-all duration-500 ease-in-out h-[2px] w-5 bg-black rounded-full"></span>
        <span className="transition-all duration-500 ease-in-out h-[2px] w-6 bg-black rounded-full"></span>
        <span className="transition-all duration-500 ease-in-out h-[2px] w-5 bg-black rounded-full"></span>
      </div>
      <div
        className={`w-full text-center flex flex-col absolute top-[60px] left-0 p-5 gap-6 bg-white border-t lg:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-[130%]"
        } transition-all duration-500 ease-in-out`}
      >
        <ul className="text-black2 font-semibold text-left">
          <li className="px-5 py-[10px] hover:text-primary hover:bg-primary/30 hover:ease-in hover:duration-300 hover:scale-95 rounded-md cursor-pointer">
            Beranda
          </li>
          <li className="px-5 py-[10px] hover:text-primary hover:bg-primary/30 hover:ease-in hover:duration-300 hover:scale-95 rounded-md cursor-pointer">
            Tentang Saya
          </li>
          <li className="px-5 py-[10px] hover:text-primary hover:bg-primary/30 hover:ease-in hover:duration-300 hover:scale-95 rounded-md cursor-pointer">
            Skill
          </li>
          <li className="px-5 py-[10px] hover:text-primary hover:bg-primary/30 hover:ease-in hover:duration-300 hover:scale-95 rounded-md cursor-pointer">
            Pendidikan
          </li>
          <li className="px-5 py-[10px] hover:text-primary hover:bg-primary/30 hover:ease-in hover:duration-300 hover:scale-95 rounded-md cursor-pointer">
            Pengalaman
          </li>
          <li className="px-5 py-[10px] hover:text-primary hover:bg-primary/30 hover:ease-in hover:duration-300 hover:scale-95 rounded-md cursor-pointer">
            Portofolio
          </li>
          <li className="px-5 py-[10px] hover:text-primary hover:bg-primary/30 hover:ease-in hover:duration-300 hover:scale-95 rounded-md cursor-pointer">
            Kontak
          </li>
        </ul>
      </div>
    </nav>
  );
}
