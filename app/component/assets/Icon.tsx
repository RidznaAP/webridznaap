import React from "react";

interface IconProps {
  name: "download" | "circle";
  className?: string;
  width?: number;
  height?: number;
}

const Icon = ({ name, className, width, height }: IconProps) => {
  switch (name) {
    case "download":
      return (
        <svg
          width={width}
          height={height}
          viewBox="0 0 23 27"
          className="animate-rain-arrow"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.3904 11.697C21.2996 11.4839 21.1574 11.3042 20.9803 11.1783C20.8033 11.0524 20.5984 10.9856 20.3893 10.9855H15.9446V2.1857C15.9446 1.85229 15.8275 1.53254 15.6191 1.29679C15.4107 1.06103 15.1281 0.928589 14.8334 0.928589H8.1663C7.87159 0.928589 7.58896 1.06103 7.38058 1.29679C7.17219 1.53254 7.05512 1.85229 7.05512 2.1857V10.9855H2.6104C2.4012 10.9859 2.19634 11.053 2.01935 11.1792C1.84235 11.3054 1.7004 11.4854 1.60978 11.6988C1.51916 11.9121 1.48355 12.15 1.50703 12.3852C1.53052 12.6203 1.61216 12.8432 1.74257 13.0283L10.632 25.5994C10.7361 25.7467 10.8682 25.8656 11.0184 25.9473C11.1686 26.029 11.3332 26.0714 11.4998 26.0714C11.6665 26.0714 11.8311 26.029 11.9813 25.9473C12.1315 25.8656 12.2636 25.7467 12.3677 25.5994L21.2571 13.0283C21.5238 12.6499 21.5749 12.1332 21.3904 11.697Z"
            fill="#fff"
          />
        </svg>
      );
    case "circle":
      return (
        <svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="200" height="200" rx="100" fill="#2185D5" />
        </svg>
      );
    default:
      return null;
  }
};

export default Icon;
