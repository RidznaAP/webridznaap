import Image from "next/image";
import React from "react";
import RidznaAP from "@/public/image/RidznaAP.png";
import Link from "next/link";
import Icon from "./assets/Icon";

export default function About() {
  return (
    <div className="pt-[80px] md:pt-[200px] px-5 md:px-[100px] lg:px-[150px] flex flex-col items-center">
      <h1 className="font-extrabold text-black1 text-[32px] text-center">
        Tentang Saya
      </h1>
      <div className="lg:flex items-center gap-24 mt-10">
        <div className="relative flex justify-center lg:justify-start mt-5 lg:mt-0 -z-50">
          <div className="bg-primary rounded-[30px] p-5 md:p-10 lg:p-5 xl:p-10 w-[300px] h-[400px]">
            <div className="relative w-[300px] h-[400px] -mt-10 -ml-6">
              <div className="absolute inset-0 bg-black2 rounded-[30px] overflow-hidden transform -rotate-[18deg]">
                <Image
                  src={RidznaAP}
                  alt="RidznaAP"
                  layout="fill"
                  objectFit="cover"
                  className="transform rotate-[18deg] ml-[30px]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 lg:mt-0 text-center lg:text-left">
          <h1 className="text-2xl font-bold text-black2">
            Hai 👋 saya{" "}
            <span className="text-primary">Ridzna Asep Purwanto</span> UI/UX
            Designer 🎭 berasal dari
            <span className="text-primary"> Indonesia</span>
          </h1>
          <p className="text-black2 my-[10px]">
            Mahasiswa Teknik Informatika semester 6 Universitas Muhammadiyah
            Purwokerto yang memiliki rasa tanggung jawab sosial yang kuat, dapat
            bekerja dalam tim, dan mampu berpikir strategis. Mendapatkan
            pengalaman di dunia teknologi untuk berbagai pelatihan dan berhasil
            mencapai hasil yang berharga. Dengan semangat, pengetahuan dan
            pengalaman di dunia teknologi digital, saya berkembang pesat dalam
            mengembangkan kemajuan teknologi digital yang mendorong pertumbuhan
            dan melibatkan unsur-unsur di dalamnya.
          </p>

          <Link
            href="https://wa.me/6282261945398"
            className="w-full flex items-center justify-center lg:justify-start lg:max-w-[258px] gap-2 border border-primary rounded-[10px] px-5 py-[5px] text-primary font-semibold text-xl"
          >
            <Icon name="chat" />
            <span>Kenal Lebih Dekat</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
