import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

interface ImageData {
  src: string;
  title: string;
}

interface ImageSliderProps {
  images: ImageData[];
  spaceBetween?: number;
  slidesPerView?: number;
  breakpoints?: {
    [width: number]: {
      slidesPerView: number;
    };
  };
}

const ImageSlider: FC<ImageSliderProps> = ({
  images,
  spaceBetween = 20,
  slidesPerView = 2,
  breakpoints = {
    640: { slidesPerView: 3 },
    1024: { slidesPerView: 5 },
  },
}) => {
  return (
    <Swiper spaceBetween={spaceBetween} slidesPerView={slidesPerView} breakpoints={breakpoints}>
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div className="group relative">
            <div className="overflow-hidden pointer rounded-lg transform scale-90 transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:-rotate-x-6 group-hover:rotate-y-3">
              <Image src={image.src} alt={image.title} width={300} height={400} className="rounded-lg" />
            </div>
            <p className="text-center text-2xl font-playfair  font-medium text-white my-2">{image.title}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;
