"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { ArrowLeft } from "lucide-react";
import BookingStepper from "@/components/booking/BookingStepper";




interface BookingLayoutProps {
  children: React.ReactNode;
  currentStep: number;
  title: string;
}

export default function BookingLayout({
  children,
  currentStep,
  title,
}: BookingLayoutProps) {
  const router = useRouter();
  return (
    <div
      className="
        w-full
        max-w-[1440px]
        mx-auto
        py-4 sm:py-6
        px-4 sm:px-6 lg:px-10
        bg-white
      "
      dir="rtl"
    >
      {/* Header */}
      <div className="
        flex flex-col-reverse
        sm:flex-row
        sm:items-center
        sm:justify-between
        gap-4
        mb-6 sm:mb-10
      ">
        <h1 className="
          text-base sm:text-xl md:text-2xl
          font-bold
          text-[#031B4E]
          text-center sm:text-right
        ">
          {title}
        </h1>

        <button
          onClick={() => router.push("/book")}
          className="
            self-start sm:self-auto
            p-2.5
            rounded-full
            bg-[#E6F7F9]
            text-[#00B5C1]
            hover:bg-[#d1f1f3]
            active:scale-95
            transition-all
            shadow-sm
          "
          aria-label="Back"
        >
          <ArrowLeft size={22} />
        </button>
      </div>

      {/* Stepper */}
      <div className="mb-8 sm:mb-12 overflow-x-auto no-scrollbar">
        <div className="min-w-[360px] sm:min-w-full">
          <BookingStepper currentStep={currentStep} />
        </div>
      </div>

      {/* Content */}
      <main className="
        w-full
        animate-in
        fade-in
        slide-in-from-bottom-3
        duration-500
      ">
        {children}
      </main>
    </div>
  );
}
