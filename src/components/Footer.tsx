import Image from "next/image";
import Link from "next/link";
import { InstagramIcon, SnapChatIcon, TiktokIcon, Twittericon } from "./Icon";

export default function Footer() {
  const PaymentImages = [
    { Img: "/imgs/visa.png", alt: "Visa icon" },
    { Img: "/imgs/master-card.png", alt: "MasterCard icon" },
    { Img: "/imgs/mask-group.png", alt: "Mask Group icon" },
  ];

  return (
    <footer className="md:py-32 py-5 sm:py-10 border-t  border-gray-600 min-h-screen px-4 md:px-4  lg:px-8">
      <div className="md:max-w-7xl md:mx-auto text-white">
        <div className="grid grid-cols-1 md:grid-cols-2  sm:text-start   gap-8 md:12 lg:gap-24 mb-12">
          <div>
            <h4 className="text-2xl md:text-5xl lg:text-5xl font-playfair  font-medium  md:mb-8">
              Join us for an <br /> unforgettable experience
            </h4>
          </div>
          <div className="flex flex-col items-start  md:items-end ">
            <h3 className="uppercase mb-4 font-inter">
              Download the groves app
            </h3>
            <div className="flex space-x-4">
              <Link href="#" className="w-36 h-12">
                <Image
                  src="/imgs/apple-store.png"
                  alt="Download on the App Store"
                  width={170}
                  height={50}
                  className="w-full h-full object-contain"
                />
              </Link>
              <Link href="#" className="w-36 h-12">
                <Image
                  src="/imgs/google-play.png"
                  alt="Get it on Google Play"
                  width={120}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 font-inter md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="uppercase mb-4 font-inter">Location</h3>
            <p className=" leading-6">
              Al-Hizam Park
              <br />
              Al-Semairi, Yanbu Al Bahr 46455
              <br />
              Riyadh Saudi Arabia
            </p>
          </div>
          <div>
            <h3 className="uppercase mb-4 font-inter">Working hours</h3>
            <p className="leading-6">
              Sun until Thurs: 4:00PM
              <br />
              Fri & Sat: 2:30PM
              <br />
              <br />
              Gates Close at:
              <br />
              Sat until Wed: 12:00AM
              <br />
              Thu & Fri: 12:30AM
            </p>
          </div>
          <div className="font-inter">
            <h3 className="uppercase mb-4 f">Guest service call</h3>
            <p className="leading-6">cc@thegroves-sa.com</p>
            <p > 920001672</p>

            <p>+966556631309</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between item-start md:items-center">
          <div className="mb-6 md:mb-0">
            <Image
              src="/imgs/footer-logo.png"
              alt="The Groves"
              width={286}
              height={65}
              className="h-auto w-auto"
            />
          </div>
          <div className="flex space-x-6 mb-6 md:mb-0">
            <Link href="#" className="hover:underline">
              <TiktokIcon />
            </Link>
            <Link href="#" className="hover:underline">
              <InstagramIcon />
            </Link>
            <Link href="#" className="hover:underline">
              <Twittericon />
            </Link>

            <Link href="#" className="hover:underline">
              <SnapChatIcon />
            </Link>
          </div>
        </div>

        <div className=" pt-8 mt-3 flex font-inter flex-col md:flex-row justify-between items-start md:items-center">
          <div className="flex flex-col md:flex-row space-y-3  md:space-y-0 items-start  md:items-center    md:space-x-8  mb-2 md:mb-4 md:mb-0 ">
            <Link href="#" className="hover:underline">
              Terms & Conditions
            </Link>
            <Link href="#" className="hover:underline">
              Privacy Policy
            </Link>
            <p>©2023 The Groves for Entertainment</p>
          </div>

          <div className="flex space-x-2 mt-1 md:mt-4 md:mt-0">
            {PaymentImages.map((payment, index) => (
              <Image
                key={index}
                src={payment.Img}
                alt={payment.alt}
                width={30}
                height={30}
                className="h-6 w-auto"
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
