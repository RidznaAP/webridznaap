import React from "react";
import Icon from "./assets/Icon";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="pt-[80px] md:pt-[200px] px-5 md:px-[100px] lg:px-[150px] flex flex-col items-center">
      <h1 className="font-extrabold text-black1 text-4xl text-center">
        Contact
      </h1>
      <div className="md:flex gap-5 py-6">
        <div className="w-full max-w-[630px] flex flex-col gap-[10px]">
          <h1 className="font-bold text-2xl text-black1">
            Feel free to contact me via the email information available. I will
            respond immediately!
          </h1>
          <div className="relative w-full border border-black1 rounded-lg flex items-center p-3.5">
            <div className="flex items-center pr-2">
              <Icon name="edit" />
            </div>
            <input
              type="text"
              className="flex-1 pl-3 border-none outline-none"
              placeholder="Your Name"
            />
          </div>
          <div className="relative w-full border border-black1 rounded-lg flex items-center p-3.5">
            <div className="flex items-center pr-2">
              <Icon name="mail" />
            </div>
            <input
              type="text"
              className="flex-1 pl-3 border-none outline-none"
              placeholder="Your Email"
            />
          </div>
          <div className="relative w-full border border-black1 rounded-lg flex items-center p-3.5">
            <div className="flex items-center pr-2">
              <Icon name="grid" />
            </div>
            <input
              type="text"
              className="flex-1 pl-3 border-none outline-none"
              placeholder="Your Number Phone"
            />
          </div>
          <div className="relative w-full border border-black1 rounded-lg flex items-center p-3.5">
            <div className="flex items-center pr-2">
              <Icon name="page" />
            </div>
            <input
              type="text"
              className="flex-1 pl-3 border-none outline-none"
              placeholder="Subject"
            />
          </div>
          <div className="relative w-full h-[150px] border border-black1 rounded-lg flex items-center p-3.5">
            <textarea
              className="flex-1 pl-3 border-none outline-none"
              placeholder="Your Message"
            />
          </div>
          <div className="relative flex justify-center items-center">
            <Link
              href=""
              className="p-2 font-semibold bg-primary text-sm rounded-md hover:scale-105 text-white1 w-[263px] flex items-center justify-center"
            >
              Submit
            </Link>
          </div>
        </div>
        <div className="w-full max-w-[479px] rounded-lg bg-primary flex flex-col gap-[10px]">
          <h1 className="font-semibold text-base text-white1 pt-5 px-5">
            Im always open to new discussions and interesting collaborations😉
            If you have a project, idea or question.
          </h1>
          <div className="px-5 pt-6 gap-[10px] text-base text-white1 flex">
            <Icon name="chat2" />
            <span>082261945398</span>
          </div>
          <div className="px-5 pt-6 gap-[10px] text-base text-white1 flex">
            <Icon name="instagram" />
            <span>@ridzna.ena</span>
          </div>
          <div className="px-5 pt-6 gap-[10px] text-base text-white1 flex">
            <Icon name="linkedin" />
            <span>Ridzna Asep Purwanto</span>
          </div>
          <div className="px-5 pt-6 gap-[10px] text-base text-white1 flex">
            <Icon name="youtube" />
            <span>Ridzna Asep Purwanto</span>
          </div>
          <div className="px-5 pt-6 gap-[10px] text-base text-white1 flex">
            <Icon name="mail2" />
            <span>asepridzna@gmail.com</span>
          </div>
          <div className="px-5 pt-6 gap-[10px] text-base text-white1 flex">
            <Icon name="location" />
            <span>
              RT 01 RW 01 Panulisan Barat, Dayeuhluhur, Cilacap, Jawa Tengah.
              53266
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
