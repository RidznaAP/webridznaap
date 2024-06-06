import Image from "next/image";
import React from "react";
import UMP from "@/public/image/ump.png";
import Icon from "./assets/Icon";

export default function Education() {
  return (
    <div className="pt-[80px] md:pt-[200px] px-5 md:px-[100px] lg:px-[150px] flex flex-col items-center">
      <h1 className="font-extrabold text-black1 text-4xl text-center">
        Pendidikan
      </h1>
      <div className="md:flex gap-10 w-full mt-5 md:mt-10">
        <div className="flex justify-center md:justify-start w-full md:w-auto mb-5 md:mb-0">
          <Image src={UMP} alt="ump" className="w-full md:w-auto" />
        </div>
        <div className="flex w-full">
          <div className="md:ml-20 w-full">
            <div className="flex gap-2 mb-5 md:mb-0">
              <Icon name="line1" />
              <div className="bg-white py-5 px-5 md:px-20 gap-y-2 shadow-lg w-full h-fit mt-6 rounded-md">
                <h3 className="text-black1 font-semibold">2021 - Sekarang</h3>
                <h1 className="font-extrabold text-primary text-xl md:text-2xl">
                  UNIVERSITAS MUHAMMADIYAH PURWOKERTO
                </h1>
                <p className="text-black1">Teknik Informatika</p>
                <p className="text-black1 font-semibold">IPK : 3,68</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Icon name="line2" />
              <div className="bg-white py-5 px-5 md:px-20 gap-y-2 shadow-lg w-full mt-5 rounded-md">
                <h3 className="text-black1 font-semibold">2018 - 2021</h3>
                <h1 className="font-extrabold text-primary text-xl md:text-2xl">
                  SMA NEGERI 3 PURWOKERTO
                </h1>
                <p className="text-black1">IPA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
