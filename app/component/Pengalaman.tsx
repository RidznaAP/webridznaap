import React from "react";
import Afeksi from "@/public/image/Afeksi.png";
import Image from "next/image";

export default function Pengalaman() {
  return (
    <div className="pt-[80px] md:pt-[200px] px-5 md:px-[100px] lg:px-[150px] flex flex-col items-center">
      <h1 className="font-extrabold text-black1 text-[32px] text-center">
        Pengalaman
      </h1>
      <div className="w-full mt-3 p-5 rounded-lg">
        <div className="flex overflow-x-auto scrollbar-hide space-x-5 pb-5">
          {[
            {
              title: "Super Team Afeksi Batch 3",
              role: "UI/UX Designer",
              description:
                "Bertanggung Jawab dalam pembuatan project UI desain website Admin dari tim Afeksi.....",
            },
            {
              title: "Grow Bareng",
              role: "Creative Design",
              description:
                "Bertanggung Jawab dalam pembuatan project UI desain website Admin dari tim Afeksi.....",
            },
            {
              title: "Lembaga Sertifikasi Profesi UMP",
              role: "Content Creator",
              description:
                "Bertanggung Jawab dalam pembuatan project UI desain website Admin dari tim Afeksi.....",
            },
            {
              title: "GenBI Purwokerto 2024",
              role: "Media Komunikasi & Informasi",
              description:
                "Bertanggung Jawab dalam pembuatan project UI desain website Admin dari tim Afeksi.....",
            },
            {
              title: "Study Independent MSIB 5",
              role: "UI/UX Designer",
              description:
                "Bertanggung Jawab dalam pembuatan project UI desain website Admin dari tim Afeksi.....",
            },
            {
              title: "Internship OTCA",
              role: "Graphic Design",
              description:
                "Bertanggung Jawab dalam pembuatan project UI desain website Admin dari tim Afeksi.....",
            },
          ].map((experience, index) => (
            <div
              key={index}
              className="border border-primary bg-white1 rounded-[10px] w-[350px] md:w-[505px] h-[440px] flex-shrink-0"
            >
              <Image
                src={Afeksi}
                alt="Experience Image"
                layout="responsive"
                width={505}
                height={260}
              />
              <div className="p-[10px] gap-[10px] flex flex-col h-[180px] overflow-hidden">
                <h1 className="font-extrabold text-black1 text-lg md:text-xl lg:text-2xl truncate">
                  {experience.title}
                </h1>
                <p className="font-semibold text-primary text-md md:text-lg lg:text-xl truncate">
                  {experience.role}
                </p>
                <p className="text-black1 text-sm md:text-md lg:text-xl line-clamp-3">
                  {experience.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
