"use client"

import Link from "next/link";
import React from "react";

const PryBtn = ({
  href,
  action,
  text,
}: {
  href?: string;
  action?: () => void;
  text: string;
}) => {
  return href ? (
    <Link
      href={href}
      className="bg-white hidden lg:flex hover:bg-[#24BEE0] hover:text-gray-200 text-black px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 shadow-[0px 2px 5px 0px rgba(20, 88, 201, 0.17), 0px -2px 0.3px 0px rgba(14, 56, 125, 0.18) inset, 0px 2px 1px 0px rgba(255, 255, 255, 0.22) inset] border border-[#24BEE0] hover:shadow-md"
    >
      {text}
    </Link>
  ) : (
    <button
      onClick={action}
      className="bg-white hidden lg:flex hover:bg-[#24BEE0] hover:text-gray-200 text-black px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 shadow-[0px 2px 5px 0px rgba(20, 88, 201, 0.17), 0px -2px 0.3px 0px rgba(14, 56, 125, 0.18) inset, 0px 2px 1px 0px rgba(255, 255, 255, 0.22) inset] border border-[#24BEE0] hover:shadow-md"
      >
      {text}
    </button>
  );
};

export default PryBtn;
