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
    <footer className=" py-32  border-t  h-screen px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-white">
        <div className="grid grid-cols-1 md:grid-cols-2  gap-24 mb-12">
          <div>
            <h4 className="text-4xl md:text-5xl lg:text-5xl font-playfair  font-medium  mb-8">
              Join us for an <br /> unforgettable experience
            </h4>
          </div>
          <div className="flex flex-col items-end ">
            <h3 className="text-sm uppercase mb-4 font-inter">
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
            <h3 className="text-sm uppercase mb-4">Location</h3>
            <p className="text-sm leading-6">
              Al-Hizam Park
              <br />
              Al-Semairi, Yanbu Al Bahr 46455
              <br />
              Riyadh Saudi Arabia
            </p>
          </div>
          <div>
            <h3 className="text-sm uppercase mb-4">Working hours</h3>
            <p className="text-sm leading-6">
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
          <div>
            <h3 className="text-sm uppercase mb-4">Guest service call</h3>
            <p className="text-sm leading-6">cc@thegroves-sa.com</p>
            <p> 920001672</p>

            <p>+966556631309</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center">
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

        <div className=" pt-8 mt-8 flex font-inter flex-col md:flex-row justify-between items-center text-sm">
          <div className="flex space-x-8 mb-4 md:mb-0">
            <Link href="#" className="hover:underline">
              Terms & Conditions
            </Link>
            <Link href="#" className="hover:underline">
              Privacy Policy
            </Link>
            <p>©2023 The Groves for Entertainment</p>
          </div>

          <div className="flex justify-end space-x-2 mt-4 md:mt-0">
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