import React from "react";
import { SVGProps } from "react";

interface CustomButtonProps {
  text: string;
  icon?: React.FC<SVGProps<SVGSVGElement>>;
  onClick?: () => void;
  width?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  icon: Icon,
  onClick,
  width, 
}) => {
  return (
    <button
      onClick={onClick}
      className={`bg-gradient-to-r flex  text-white  ${Icon ? "justify-between":"justify-center" }  capitalize font-medium from-[#DCBB75] to-[#AD8749] py-3 px-4 rounded-xl inline-flex items-center justify-center transition-colors hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-opacity-50`}
      style={{width:width}}
    >
      <>
        <span className="font-inter">{text}</span>
        {Icon && <Icon className="w-5 h-5" />} 
      </>
    </button>
  );
};

export default CustomButton;
