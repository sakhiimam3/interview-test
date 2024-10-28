
"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
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
import { navItems } from "../../mockData";
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    // Initial check
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header className="navbar bg-black text-white relative">
        <div className="container px-4 py-4">
          <div className="hidden md:flex max-w-7xl mx-auto items-center justify-between">
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

            {/* Desktop Social Icons, Buttons, and Language Switcher */}
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
              <CustomButton text="Log in" icon={ArrowIcon} width="150px" />
              <LanguageSwitcher />
            </div>
          </div>
          <div className="flex  items-center justify-between px-4 md:hidden">
            <Image
              src="/imgs/logo.png"
              alt="The Groves Logo"
              width={100}
              height={40}
              className="h-10 w-auto"
            />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 pointer text-gray-200 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {!isOpen && <CiMenuBurger fontSize={"26px"} />
              }
            </button>
          </div>
          
        </div>

        {/* Mobile Menu Overlay and Dropdown */}
        {isMobile && isOpen && (
          <>
            {/* Black background overlay */}
            <div className="fixed inset-0 bg-black opacity-10 z-[998]" onClick={() => setIsOpen(false)}></div>
            
            {/* Mobile Menu */}
            <div className="fixed top-0  py-3 left-0 w-full h-full bg-black text-white z-[999]">
              {/* Mobile Header with Menu Button */}
          <div className="flex  items-center justify-between px-4 md:hidden">
            <Image
              src="/imgs/logo.png"
              alt="The Groves Logo"
              width={100}
              height={40}
              className="h-10 w-auto"
            />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 pointer text-gray-200 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <IoClose fontSize={"26px"} /> : <CiMenuBurger fontSize={"26px"} />
              }
            </button>
          </div>
              <div className="flex flex-col items-start p-6 space-y-4">
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="px-4 py-2 text-base font-medium hover:bg-gray-700 rounded-md w-full text-left border-b border-gray-00"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                
                {/* Responsive Language Switcher */}
                
                  <LanguageSwitcher />
                
                <CustomButton text="Log in" width={"200px"} />
              </div>
            </div>
          </>
        )}

        {/* Desktop Navigation */}
        <nav className="hidden md:flex justify-around  mx-auto px-4 py-1 border-t border-b border-gray-500">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="px-3 lg:px-6 py-4 text-gray-300 hover:text-white text-xs lg:text-sm font-medium tracking-wider "
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </header>
    </>
  );
}
