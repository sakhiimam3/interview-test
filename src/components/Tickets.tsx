"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ImageSlider from "./slider";
import CustomButton from "./Custombtn";
import { ArrowIcon } from "./Icon";

const imageData = [
  { src: "/imgs/card1.png", title: "Little Krazy" },
  { src: "/imgs/card2.png", title: "Hwanim Groves City" },
  { src: "/imgs/card3.png", title: "Picnic Market" },
  { src: "/imgs/card4.png", title: "Lucawn" },
  { src: "/imgs/card1.png", title: "Little Krazy" },
  { src: "/imgs/card2.png", title: "Hwanim Groves City" },
  { src: "/imgs/card3.png", title: "Picnic Market" },
  { src: "/imgs/card4.png", title: "Lucawn" },
];

export default function Tickets() {
  return (
    <div className="container md:py-10">
      <div className="max-w-7xl mx-auto py:2 md:py-10">
          <div className="flex  flex-col mt-5 mb-12  justify-start mx-auto  max-w-[350px] md:max-w-2xl">
           <h1 className="text-3xl  font-playfair capitalize font-medium md:text-3xl lg:text-4xl font-bold text-white mb-4">
          Book General Access ticket and enjoy the attractions for free
          </h1>
          <CustomButton text="booke general access ticket" width="300px" icon={ArrowIcon} />
          </div>
        <ImageSlider
          images={imageData}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 5 },
          }}
          spaceBetween={20}

        />
      </div>
    </div>
  );
}
