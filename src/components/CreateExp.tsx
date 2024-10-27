"use client"
import React from "react";
import CustomButton from "./Custombtn";
import { ArrowIcon } from "./Icon";
import ImageSlider from "./slider";

const CreateExp = () => {
  const imageData = [
    { src: "/imgs/card1.png", title: "Resturants" },
    { src: "/imgs/card2.png", title: "Events" },
    { src: "/imgs/card3.png", title: "Party" },
    { src: "/imgs/card4.png", title: "Lorem" },
    { src: "/imgs/card1.png", title: "Little Krazy" },
    { src: "/imgs/card2.png", title: "Hwanim Groves City" },
    { src: "/imgs/card3.png", title: "Picnic Market" },
    { src: "/imgs/card4.png", title: "Lucawn" },
  ];

  return (
    <div className="container  my-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-16 items-center">
          <div className="w-[30%]">
            <h2 className="text-4xl capitalize  font-playfair  font-medium		 md:text-3xl lg:text-6xl font-bold text-white mb-6">
              curate your experience as you like{" "}
            </h2>
            <CustomButton text="book tickets" width="200px" icon={ArrowIcon} />.
          </div>
          <div className="w-[60%]">
            <ImageSlider
              images={imageData}
              breakpoints={{
                640: { slidesPerView: 3 },
                1024: { slidesPerView: 3 },
              }}
              spaceBetween={10}
              slidesPerView={3}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateExp;
