import React from "react";
import Ewaca from "@/public/image/Ewaca.png";
import Redesign from "@/public/image/Redesign.png";
import Private from "@/public/image/Private.png";
import Salud from "@/public/image/Salud.png";
import Image from "next/image";
import Link from "next/link";

export default function Portofolio() {
  return (
    <div className="pt-[80px] md:pt-[200px] px-5 md:px-[100px] lg:px-[150px] flex flex-col items-center">
      <h1 className="font-extrabold text-black1 text-[32px] text-center">
        Portofolio
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-3 p-5 rounded-lg">
        <div className="border border-primary bg-white1 rounded-[10px] w-full md:max-w-[530px] ">
          <Image src={Ewaca} alt="Ewaca" width={560} height={426} />
          <div className="p-5 flex justify-between items-center">
            <h1 className="font-semibold text-black1 text-lg md:text-2xl">
              UI/UX EWACA
            </h1>
            <Link
              href="https://medium.com/@asepridzna/membaca-sambil-bermain-melalui-ewaca-ux-case-study-3245522f6f76"
              className="p-2 bg-primary text-sm rounded-md hover:scale-105 text-white1"
            >
              Cek Detail
            </Link>
          </div>
        </div>
        <div className="border border-primary bg-white1 rounded-[10px] w-full md:max-w-[560px]">
          <Image src={Redesign} alt="Redesign" width={560} height={426} />
          <div className="p-5 flex justify-between items-center">
            <h1 className="font-semibold text-black1 text-lg md:text-2xl">
              Redesign Web PosIDN
            </h1>
            <Link
              href="https://www.linkedin.com/feed/update/urn:li:activity:7169701607725617152/"
              className="p-2 bg-primary text-sm rounded-md hover:scale-105 text-white1"
            >
              Cek Detail
            </Link>
          </div>
        </div>
        <div className="border border-primary bg-white1 rounded-[10px] w-full md:max-w-[560px]">
          <Image src={Private} alt="Private" width={560} height={426} />
          <div className="p-5 flex justify-between items-center">
            <h1 className="font-semibold text-black1 text-lg md:text-2xl">
              Proyek Desain Pribadi
            </h1>
            <Link
              href="https://drive.google.com/drive/folders/1XADonrirUvINu-rC_0qvXOUny01uDMZu?usp=sharing"
              className="p-2 bg-primary text-sm rounded-md hover:scale-105 text-white1"
            >
              Cek Detail
            </Link>
          </div>
        </div>
        <div className="border border-primary bg-white1 rounded-[10px] w-full md:max-w-[560px]">
          <Image
            src={Salud}
            alt="Salud"
            width={560}
            height={426}
            className="w-full h-auto"
          />
          <div className="p-5 flex justify-between items-center">
            <h1 className="font-semibold text-black1 text-lg md:text-2xl">
              UI Salud Mental
            </h1>
            <Link
              href="https://www.figma.com/proto/dGUQdK4yTjYnwerklhL1NQ/Salud-Mental?page-id=0%3A1&node-id=1-2&viewport=291%2C360%2C0.13&t=IpCNqMqODVlyVquk-1&scaling=scale-down"
              className="p-2 bg-primary text-sm rounded-md hover:scale-105 text-white1"
            >
              Cek Detail
            </Link>
          </div>
        </div>
      </div>
      <div className="max-w-xl relative -z-10"></div>
    </div>
  );
}
