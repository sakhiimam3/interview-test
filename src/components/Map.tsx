import Image from "next/image";
import { ArrowIcon } from "./Icon";
import CustomButton from "./Custombtn";

export default function Mapsection() {
  return (
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-10 h-auto text-white">
  <div className="w-full h-auto">
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

  <div className="max-w-lg p-4 md:p-8 flex flex-col justify-center">
    <h2 className="text-sm md:text-base uppercase mb-8 tracking-wider mb-2 font-playfair  font-medium">
      Experience the groves
    </h2>
    <h1 className="text-3xl md:text-6xl font-bold mb-4  font-playfair  font-medium">Find your place</h1>
    <p className="text-sm md:text-base mb-6 mxw-2xl font-inter">
      Our interactive map will show you the way to the shops and restaurants
      that you want to see.
    </p>
    {/* <button className="bg-amber-400 text-dark-green py-2 px-4 rounded-full inline-flex items-center justify-center transition-colors hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-opacity-50">
      <span className="mr-2">Open the Map</span>
      <ArrowIcon />
    </button> */}
    <CustomButton text="open the map" icon={ArrowIcon} width="200px" />
  </div>
</div>

  );
}
