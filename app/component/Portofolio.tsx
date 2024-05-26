import React from "react";
import Ewaca from "@/public/image/Ewaca.png";
import Redesign from "@/public/image/Redesign.png";
import Private from "@/public/image/Private.png";
import Salud from "@/public/image/Salud.png";
import Image from "next/image";

export default function Portofolio() {
  return (
    <div className="pt-[80px] md:pt-[200px] px-5 md:px-[100px] lg:px-[150px] flex flex-col items-center">
      <h1 className="font-extrabold text-black1 text-[32px] text-center">
        Portofolio
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-3 p-5 rounded-lg">
        <div className="border border-primary bg-white1 rounded-[10px] w-full md:max-w-[530px] h-[506px]">
          <Image
            src={Ewaca}
            alt="Ewaca"
            width={560}
            height={426}
            className="w-560 h-426"
          />
          <div className="py-2 px-5 flex justify-between items-center">
            <h1 className="font-semibold text-black1 text-2xl">UI/UX EWACA</h1>
            <a
              href="https://medium.com/@asepridzna/membaca-sambil-bermain-melalui-ewaca-ux-case-study-3245522f6f76"
              className="p-2 bg-primary text-sm rounded-md hover:scale-105 text-white1"
            >
              Cek Detail
            </a>
          </div>
        </div>
        <div className="border border-primary bg-white1 rounded-[10px] w-full md:max-w-[560px] h-[506px]">
          <Image
            src={Redesign}
            alt="Redesign"
            width={560}
            height={426}
            className="w-full h-auto"
          />
          <div className="py-2 px-5 flex justify-between items-center">
            <h1 className="font-semibold text-black1 text-2xl">
              Redesign Web PosIDN
            </h1>
            <a
              href="https://medium.com/@asepridzna/membaca-sambil-bermain-melalui-ewaca-ux-case-study-3245522f6f76"
              className="p-2 bg-primary text-sm rounded-md hover:scale-105 text-white1"
            >
              Cek Detail
            </a>
          </div>
        </div>
        <div className="border border-primary bg-white1 rounded-[10px] w-full md:max-w-[560px] h-[506px]">
          <Image
            src={Private}
            alt="Private"
            width={560}
            height={426}
            className="w-560 h-426"
          />
          <div className="py-2 px-5 flex justify-between items-center">
            <h1 className="font-semibold text-black1 text-2xl">
              Proyek Desain Pribadi
            </h1>
            <a
              href="https://medium.com/@asepridzna/membaca-sambil-bermain-melalui-ewaca-ux-case-study-3245522f6f76"
              className="p-2 bg-primary text-sm rounded-md hover:scale-105 text-white1"
            >
              Cek Detail
            </a>
          </div>
        </div>
        <div className="border border-primary bg-white1 rounded-[10px] w-full md:max-w-[560px] h-[506px]">
          <Image
            src={Salud}
            alt="Salud"
            width={560}
            height={426}
            className="w-full h-auto"
          />
          <div className="py-2 px-5 flex justify-between items-center">
            <h1 className="font-semibold text-black1 text-2xl">
              UI Salud Mental
            </h1>
            <a
              href="https://medium.com/@asepridzna/membaca-sambil-bermain-melalui-ewaca-ux-case-study-3245522f6f76"
              className="p-2 bg-primary text-sm rounded-md hover:scale-105 text-white1"
            >
              Cek Detail
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-xl relative -z-10"></div>
    </div>
  );
}
