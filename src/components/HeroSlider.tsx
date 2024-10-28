"use client";
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import CustomButton from './Custombtn';
import { ArrowIcon } from './Icon';

const slides = [
  {
    id: 1,
    title: "Khwaja yanni",
    subTitlte: "The new era of luxury",
    description: "Experience the perfect blend of comfort and elegance in our exclusive venues.",
    image: "/imgs/hero-bg.png"
  },
  {
    id: 2,
    title: "Khwaja yanni",
    subTitlte: "The new era of luxury",
    description: "Experience the perfect blend of comfort and elegance in our exclusive venues.",
    image: "/imgs/hero-bg.png"
  },
  {
    id: 3,
    title: "Khwaja yanni",
    subTitlte: "The new era of luxury",
    description: "Experience the perfect blend of comfort and elegance in our exclusive venues.",
    image: "/imgs/hero-bg.png"
  },
  {
    id: 4,
    title: "Khwaja yanni",
    subTitlte: "The new era of luxury",
    description: "Experience the perfect blend of comfort and elegance in our exclusive venues.",
    image: "/imgs/hero-bg.png"
  }
];

const LuxurySlider = () => {
  return (
    <div className="w-full h-screen">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet w-4 h-4 mx-1 rounded-full bg-white opacity-50 transition duration-300',
          bulletActiveClass: 'swiper-pagination-bullet-active !bg-white !opacity-100'}}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <React.Fragment key={slide.id}>
                    <SwiperSlide  className="relative">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={slide.image}
                alt="Luxury venue"
                layout="fill" 
                objectFit="cover" 
                className="absolute inset-0" 
              />
            </div>

          
            <div className="container absolute top-10 left-0 right-0 flex items-center justify-start pb-12">
              <div className="relative w-full  h-screen max-w-3xl text-white px-4">
              
                <div className="absolute inset-0 bg-black opacity-50 rounded-lg" />

                {/* Text Content */}
                <div className="relative   md:left-8 lg:left-20 p-6">
                  <h6 className="uppercase  font-inter  text-sm md:text-lg font-light mb-8">
                    {slide.title}
                  </h6>
                  <h1 className="text-4xl font-playfair  font-medium max-w-[350px] md:text-6xl font-semibold my-6 leading-tight">
                    {slide.subTitlte}
                  </h1>
                  <p className="text-lg font-inter max-w-[450px] mb-12 md:text-xl  opacity-80 leading-relaxed">
                    {slide.description}
                  </p>
                  <div className='mt-5'>
                  <CustomButton text="Book reservation now" icon={ArrowIcon} width="300px" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <style jsx global>{`
            .swiper-pagination {
              @apply absolute bottom-4 left-4 md:bottom-8 md:left-1/2 md:-translate-x-1/2 md:text-center;
            }
          `}</style></React.Fragment>

        ))}
      </Swiper>
    </div>
  );
};

export default LuxurySlider;
