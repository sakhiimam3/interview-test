"use client";
import { useState } from "react";
import Image from "next/image";
import { navItems } from "../../mockData";
import Link from "next/link";
import {
    ArrowIcon,
  InstagramIcon,
  SnapChatIcon,
  TiktokIcon,
  Twittericon,
} from "./Icon";
import CustomButton from "./Custombtn";
import { LanguageSwitcher } from "./LanguageSwitch";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="navbar bg-black text-white">
      <div className="container   px-4 py-4">
        <div className="flex max-w-7xl mx-auto items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/imgs/logo.png"
              alt="The Groves Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </div>

          <div className="flex gap-4 items-center">
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
            <CustomButton text="login" icon={ArrowIcon}  width="150px" />
            <LanguageSwitcher />
          </div>
        </div>
         

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? "x" : ""}
        </button>
      </div>

      {/* Mobile Sidebar */}
      {/* {isMobileMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-white hover:bg-gray-800 rounded-md"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )} */}
    </header>
  );
}
