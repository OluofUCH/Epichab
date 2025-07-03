"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, CircleX } from "lucide-react";
import Image from "next/image";
import PryBtn from "./pryBtn";

interface INavItems {
  path: string;
  title: string;
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToPath = (props: { path: string }) => {
    // e.preventDefault();
    const productSection = document.getElementById(props.path);
    if (productSection) {
      productSection.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const navItems: INavItems[] = [
    { title: "Home", path: "#" },
    { title: "About Us", path: "#" },
    { title: "Services", path: "#" },
    { title: "Referal", path: "#" },
    { title: "Careers", path: "#" },
    { title: "Contact Us", path: "#" },
    { title: "Services", path: "#" },
  ];

  return (
    <header className="fixed h-auto bg-white   w-full shadow-sm border-b border-gray-100  top-0 right-0 left-0 z-50">
      <div className="max-w-full mx-auto lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex">
            <Link
              href="/"
              className="flex items-center relative w-[7rem] aspect-[5.61381/1.1875]"
            >
              <Image
                        src="next.svg"
                        alt="Orthstart Logo"
                        width={180}
                        height={37}
                        priority
                      />
            </Link> 
          </div>

          <nav className="hidden md:flex space-x-8">
            {navItems.map((navItem, index) => (
              <Link
                key={index}
                href={navItem.path}
                className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm transition-colors duration-200"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToPath({ path: navItem.title });
                }}
              >
                {navItem.title}
              </Link>
            ))}
          </nav>

          <div className="flex items-center md:hidden">

            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-md text-[#24BEE0] hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden h-fit fixed inset-0  z-50 bg-gradient-to-r from-blue-600 to-cyan-600">
            <div className="flex flex-col justify-between h-full">
              {/* Header with logo and close button */}
              <div className="flex justify-between items-center h-16 py-4 px-6">
                <Link href="/" className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="flex items-center bg-white">
                      <Image
                        src="/assets/svgs/Logo.svg"
                        alt="Orthstart Logo"
                        width={180}
                        height={37}
                        priority
                      />
                    </div>
                  </div>
                </Link>
                <button
                  onClick={toggleMenu}
                  className="p-2 rounded-md text-white hover:bg-teal-500 transition-colors duration-200"
                >
                  <CircleX size={24} className="text-white" />
                </button>
              </div>
              <div className="flex flex-col gap-16">
                <div className="flex-1 flex flex-col justify-center items-center space-y-12 px-6">
                  {navItems.map((navItem, index) => (
                  <Link
                   key={index}
                    href={navItem.path}
                    className="text-white text-xl font-medium hover:text-teal-100 transition-colors duration-200"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMenuOpen(false);
                      scrollToPath({ path: navItem.title });
                    }}
                  >
                  {navItem.title}
                  </Link>
                  ))}
                </div>

              
              </div>
              <div> </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
