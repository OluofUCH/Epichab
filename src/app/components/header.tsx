"use client";
import {usePathname} from 'next/navigation'
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
  
    const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToPath = (props: { path: string }) => {
      setIsMenuOpen(false);
      window.location.href=props.path
  };

   const navItems: INavItems[] = [
    { title: "Home", path: "/" },
    { title: "About Us", path: "/about" },
    { title: "Services", path: "/services" },
    { title: "Team", path: "/team" },
    { title: "Careers", path: "career" },
    { title: "Contact Us", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/10  backdrop-blur-lg bg-white/80 ">
      <div className="max-w-full mx-auto lg:px-8">
        <div className="flex justify-between items-center h-16">
           {/* Logo */}
            <div className="Logo flex items-center">
          <Link href="/">
              <Image 
                src="/images/logoi.png"
                alt="Framp" 
                width={120} 
                height={40} 
                className="h-14 w-auto"
              />
          </Link>
          </div>
          

          <nav className="hidden md:flex space-x-8">
            {navItems.map((navItem, index) => (
              <Link
                key={index}
                href={navItem.path}
                className={`${pathname === navItem.path ? "text-blue-500 " : "text-gray-600" } hover:text-gray-900 px-3 py-2 text-sm transition-colors duration-200`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToPath({ path: navItem.path });
                }}
              >
                {navItem.title}
              </Link>
            ))}
          </nav>

          <div className="flex items-center">

            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-md text-blue-500 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className={`md:hidden h-screen fixed inset-x-0 bg-white/95 dark:bg-black/95 backdrop-blur-mdtransition-all duration-300 ease-in-out${isMenuOpen ? 'top-0 sm:top-[61px] opacity-100 visible' : '-top-[100vh] opacity-0 invisible'}border-b border-black/10 dark:border-white/10
      `}>
            <div className="flex flex-col justify-between h-full">
            
              <div className="flex flex-col gap-16">
                <div className="flex-1 flex flex-col justify-center pt-4 items-center space-y-12 px-6">
                 
                  {navItems.map((navItem, index) => (
              <Link
                key={index}
                href={navItem.path}
                className={`${pathname === navItem.path ? "text-blue-500 " : "text-white" } text-xl font-medium hover:text-teal-100 transition-colors duration-200`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToPath({ path: navItem.path });
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
