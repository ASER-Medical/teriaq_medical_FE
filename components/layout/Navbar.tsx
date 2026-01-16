"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex justify-center pt-6 relative z-50">
      <nav className="flex items-center justify-between w-[92%] max-w-6xl py-1 bg-white rounded-full px-6 shadow-xl">
        {/* Desktop User Profile */}
        <div className="hidden md:flex items-center gap-2 text-gray-700 font-semibold ml-10 mr-10">
          <ChevronDown size={16} />
          <Link href="/register">
            <div className="w-7 h-7 rounded-full overflow-hidden border cursor-pointer">
              <Image src="/avatar.png" alt="User" width={30} height={30} className="object-cover" />
            </div>
          </Link>
          <span>هاجر</span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 text-gray-600 font-semibold text-sm">
          <li className="hover:text-[#21b3d5] cursor-pointer">تواصل معنا</li>
          <li className="hover:text-[#21b3d5] cursor-pointer">عننا</li>
          <li className="hover:text-[#21b3d5] cursor-pointer">خدماتنا</li>
          <li className="text-[#21b3d5]">الرئيسية</li>
        </ul>

        <div className="flex items-center justify-between w-full md:w-auto gap-3">
          <button className="md:hidden text-[#21b3d5]" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={32} /> : <Menu size={24} />}
          </button>
          <div className="flex justify-end md:justify-center w-full md:w-auto ml-12 mr-10">
            <Image src="/teriaq.svg" alt="Logo" width={60} height={20} className="object-contain" priority />
          </div>
        </div>
      </nav>

      {/* Render the separated MobileMenu */}
      <MobileMenu isOpen={menuOpen} />
    </div>
  );
}