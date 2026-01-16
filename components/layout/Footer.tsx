import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";

const XIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="w-full py-10 bg-white" dir="rtl">
      <div className="w-[95%] md:w-[85%] mx-auto bg-gray-100 rounded-[40px] p-6 md:p-12 shadow-sm">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
          <div className="flex items-center gap-5 text-[#031B4E]">
            <Link href="#"><Image src='/x.svg' alt="x" width={25} height={25} /></Link>
            <Link href="#"><Image src='/insta.svg' alt="instagram" width={25} height={25} /></Link>
            <Link href="#"><Image src='/facebook.svg' alt="facebook" width={25} height={25} /></Link>
          </div>

          <ul className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-[#031B4E] font-medium text-base md:text-lg">
            <li className="hover:text-[#21b3d5] cursor-pointer">الرئيسية</li>
            <li className="text-gray-400 hidden md:block">|</li>
            <li className="hover:text-[#21b3d5] cursor-pointer">خدماتنا</li>
            <li className="text-gray-400 hidden md:block">|</li>
            <li className="hover:text-[#21b3d5] cursor-pointer">عننا</li>
            <li className="text-gray-400 hidden md:block">|</li>
            <li className="hover:text-[#21b3d5] cursor-pointer">تواصل معنا</li>
          </ul>

          <div className="flex-shrink-0">
            <Image src="/teriaq.svg" alt="Logo" width={100} height={40} className="object-contain" />
          </div>
        </div>
        <div className="flex flex-col items-center text-center mb-16">
          <h3 className="text-xl md:text-3xl font-bold text-[#031B4E] mb-8">
            تريد الإنضمام إلي فريق العمل؟
          </h3>
          
    
          <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-3 w-full max-w-2xl">
            <button className="w-full md:w-auto whitespace-nowrap bg-[#21b3d5] hover:bg-[#1da1c0] text-white px-10 py-4 rounded-full font-bold transition-all text-lg">
              إنضم الان
            </button>
            <input
              type="email"
              placeholder="بريدك الإلكتروني"
              className="w-full py-4 px-8 rounded-full border border-[#031B4E] focus:outline-none text-right bg-white"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-gray-200 text-sm text-[#031B4E] font-medium gap-4">
          <Link href="/privacy" className="hover:underline order-1 md:order-2 underline">سياسة الخصوصية</Link>
          <p className="order-2 md:order-1">© 2025 منظمة ديل. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}