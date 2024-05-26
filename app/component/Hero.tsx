import Link from "next/link";
import React from "react";
import Icon from "./assets/Icon";
import Ridzna from "@/public/image/ridzna.png";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="md:pt-[200px] pt-[80px] px-5 md:px-[100px] lg:px-[150px] md:flex md:justify-between">
      <div className="max-w-xl relative -z-10">
        <h3 className="text-black2 text-lg">
          Hallo <span className="text-2xl animate-waving-hand">👋</span>
        </h3>

        <h1 className="text-black1 font-extrabold text-2xl md:text-[40px] mt-[10px] animate-typing">
          Saya <span className="text-primary">Ridzna Asep Purwanto</span>
        </h1>

        <h3 className="font-extrabold text-black2 text-lg mt-[10px]">
          UI/UX Designer
        </h3>
        <p className="text-black2 mt-[10px]">
          Di bidang teknologi, saya seorang UI/UX Design dan Creative Design
          yang cukup berpengalaman. Dengan semangat dan keahlian, saya mendorong
          pertumbuhan melalui inovasi digital yang bermakna.
        </p>
        <Link
          href={"/"}
          className="w-fit flex items-center gap-2 px-5 py-[10px] bg-primary rounded-[10px] mt-[10px]"
        >
          <div className="border-b-2 overflow-hidden border-white move-down">
            <Icon name="download" width={24} height={24} />
          </div>
          <span className="text-white text-lg md:text-xl font-semibold">
            Download CV
          </span>
        </Link>
      </div>

      <div className="flex justify-center md:block max-w-xl relative -z-10 md:mt-0 mt-20">
        <div className="bg-black2 rounded-[30px] overflow-hidden rotate-12 w-[300px] h-[400px]">
          <Image
            src={Ridzna}
            alt={"Ridzna Asep Purwanto"}
            width={1000}
            height={1000}
            className="object-cover w-full h-full -rotate-12 -ml-[22px]"
            style={{ height: 426 }}
          />
        </div>
        <div className="absolute -right-24 -top-20 -z-50">
          <Icon name="circle" />
        </div>
        <div className="absolute -left-24 -bottom-20 -z-50">
          <Icon name="circle" />
        </div>
      </div>
    </div>
  );
}
