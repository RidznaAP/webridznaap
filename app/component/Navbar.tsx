"use client";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white  lg:px-[60px] py-4 lg:py-6 flex items-center gap-[100px] ">
      <div>
        <h1 className="text-primary font-extrabold text-[24px]">
          Ridzna Asep Purwanto
        </h1>
      </div>
      <div className="text-black1 hidden lg:flex lg:flex-row lg:gap-10">
        <h1 className="underline-offset-auto hover:underline">Beranda</h1>
        <h1 className="underline-offset-auto hover:underline">Tentang Saya</h1>
        <h1 className="underline-offset-auto hover:underline">Skill</h1>
        <h1 className="underline-offset-auto hover:underline">Pendidikan</h1>
        <h1 className="underline-offset-auto hover:underline">Pengalaman</h1>
        <h1 className="underline-offset-auto hover:underline">Portofolio</h1>
        <h1 className="underline-offset-auto hover:underline">Kontak</h1>
      </div>
      <div className="hidden lg:flex gap-4"></div> {/* Corrected gap- */}
      {/* Hamburger */}
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className={`${
          isOpen ? "open" : ""
        } flex flex-col items-center w-fit gap-[7px] cursor-pointer lg:hidden z-50 py-2`}
      >
        <span className="transition-all duration-500 ease-in-out h-[2px] w-5 bg-black rounded-full"></span>
        <span className="transition-all duration-500 ease-in-out h-[2px] w-4 bg-black rounded-full"></span>
        <span className="transition-all duration-500 ease-in-out h-[2px] w-5 bg-black rounded-full"></span>
      </div>
      <div
        className={`w-full text-center flex flex-col absolute top-[64px] left-0 p-5 gap-6 bg-primary border-t lg:hidden border-black2/20 ${
          isOpen ? "translate-y-0" : "-translate-y-[130%]"
        } transition-all duration-500 ease-in-out`}
      >
        <ul className="text-white text-lg font-semibold">
          <li className="px-12 py-[10px] border-b-2 border-white hover:bg-white hover:text-black1 cursor-pointer">
            Home
          </li>
          <li className="px-12 py-[10px] border-b-2 border-white hover:bg-white hover:text-black1 cursor-pointer">
            About
          </li>
          <li className="px-12 py-[10px] border-b-2 border-white hover:bg-white hover:text-black1 cursor-pointer">
            Skills
          </li>
          <li className="px-12 py-[10px] border-b-2 border-white hover:bg-white hover:text-black1 cursor-pointer">
            Educations
          </li>
          <li className="px-12 py-[10px] border-b-2 border-white hover:bg-white hover:text-black1 cursor-pointer">
            Experiences
          </li>
          <li className="px-12 py-[10px] border-b-2 border-white hover:bg-white hover:text-black1 cursor-pointer">
            Portofolio
          </li>
          <li className="px-12 py-[10px] border-b-2 border-white hover:bg-white hover:text-black1 cursor-pointer">
            Contact
          </li>
        </ul>
        {/* Add your dropdown menu items here */}
      </div>
    </nav>
  );
}
