import Image from "next/image";
import { ArrowIcon } from "./Icon";
import CustomButton from "./Custombtn";

export default function Mapsection() {
  return (
    <div className="grid grid-cols-1 items-center lg:grid-cols-2 gap-3  md:gap-8  my-10  text-white">
      <div className="w-full h-auto order-2 lg:order-1">
        <Image
          src="/imgs/map.png"
          alt="Interactive map of The Groves"
          layout="responsive"
          width={400}
          height={300}
          objectFit="cover"
          className="drop-shadow-2xl"
        />
      </div>

      <div className="p-4 md:p-8   flex flex-col   order-1 lg:order-2">
        <h2 className="md:text-base uppercase mb-8 tracking-wider font-inter font-medium">
          Experience the groves
        </h2>
        <h1 className="text-3xl md:text-6xl  mb-4 font-playfair font-medium">
          Find your place
        </h1>
        <p className="md:text-base mb-6 max-w-2xl font-inter">
          Our interactive map will show you the way to the shops and restaurants
          that you want to see.
        </p>
        <CustomButton text="Open the Map" icon={ArrowIcon} width="200px" />
      </div>
    </div>
  );
}
