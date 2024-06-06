import React from "react";
import UIUX from "@/public/image/Website layout.png";
import Design from "@/public/image/Graphic designer.png";
import Adobe from "@/public/image/Adobe Illustrator.png";
import Office from "@/public/image/Office.png";
import SosialMedia from "@/public/image/Social media.png";
import EditingVideo from "@/public/image/Video editing.png";
import IconSkill from "@/public/image/Skill.png";
import Pencil from "@/public/image/Pencil.png";
import Image from "next/image";
import Icon from "./assets/Icon";

const toolset = [
  {
    id: 1,
    title: "UI/UX Design",
    skillset: <Image alt={"UI/UX Design"} src={UIUX} />,
  },
  {
    id: 2,
    title: "Creative Design",
    skillset: <Image alt={"Graphic Design"} src={Design} />,
  },
  {
    id: 3,
    title: "SocMed Manegement",
    skillset: <Image alt={"SocMed Manegement"} src={SosialMedia} />,
  },
  {
    id: 4,
    title: "Video Editing",
    skillset: <Image alt={"Video Editing"} src={EditingVideo} />,
  },
  {
    id: 5,
    title: "Figma",
    skillset: <Icon name="figma" />,
  },
  {
    id: 6,
    title: "Office",
    skillset: <Image alt={"Office"} src={Office} />,
  },
  {
    id: 7,
    title: "Miro",
    skillset: <Icon name="miro" />,
  },

  {
    id: 8,
    title: "Adobe Illustrator",
    skillset: <Image alt={"Adobe Illustrator"} src={Adobe} />,
  },
  {
    id: 9,
    title: "Canva",
    skillset: <Icon name="canva" />,
  },
  {
    id: 10,
    title: "Visual Studio Code",
    skillset: <Icon name="vsc" />,
  },
  {
    id: 11,
    title: "Capcut",
    skillset: <Icon name="capcut" />,
  },
  {
    id: 12,
    title: "Notion",
    skillset: <Icon name="notion" />,
  },
  {
    id: 13,
    title: "Trello",
    skillset: <Icon name="trello" />,
  },
];

export default function Skill() {
  return (
    <div className="pt-[80px] md:pt-[200px] px-5 md:px-[100px] lg:px-[150px] flex flex-col items-center">
      <h1 className="font-extrabold text-black1 text-4xl text-center">Skill</h1>
      <div className="md:flex gap-5">
        <div className="py-5 px-[10px] bg-white shadow-lg w-full rounded-md">
          <div className="flex gap-[10px] items-center justify-center">
            <div className="flex items-center">
              <Image alt="Icon Skill" src={IconSkill} />
              <h2 className="text-xl font-semibold text-primary">Skillset</h2>
            </div>
            <div className="flex items-center">
              <Image alt="Pencil" src={Pencil} />
              <h2 className="text-xl font-semibold text-black1">Toolset</h2>
            </div>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mt-5">
            {toolset.map((tool) => (
              <div
                key={tool.id}
                className="flex flex-col items-center justify-center p-[10px]"
              >
                <div>{tool.skillset}</div>
                <h4 className="text-black1 text-sm text-center">
                  {tool.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
        <div className="items-center max-w-[365px] max-h-[500px]">
          <h2 className="text-black1 text-2xl font-bold mt-10 md:text-right">
            <span className="text-primary">Kreativitas</span> dan{" "}
            <span className="text-primary">Teknologi</span> untuk Solusi{" "}
            <span className="text-primary">Digital Modern</span>
          </h2>
          <p className="mt-5 md:text-right text-black1">
            Ketertarikan Saya: UI/UX Design, Web Development, Front-End Web,
            Data Analysis, Social Media Marketing, Digital Marketing,Video
            Editing
          </p>
        </div>
      </div>
    </div>
  );
}
