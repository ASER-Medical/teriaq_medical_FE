"use client";

import Image from "next/image";
import React from "react";
import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  count: number;
  image: string;
  unit: string;
  onClick?: () => void; // This was here, but unused below
}

export default function ServiceCard({
  title,
  description,
  count,
  image,
  unit,
  onClick, // 1. Destructure it here
}: ServiceCardProps) {
  return (
    // 2. Add cursor-pointer and onClick to the wrapper or Card
    <div 
      className="relative w-full max-w-[380px] p-4 cursor-pointer" 
      dir="rtl"
      onClick={onClick} 
    >
      {/* SVG CLIP PATH remains the same */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="card-clip" clipPathUnits="objectBoundingBox">
            <path
              d="M 0,0 
      L 0.85,0 
      Q 1,0 1,0.05 
      L 1,0.68 
      Q 1,0.85 0.9,0.85 
      L 0.88,0.85
      C 0.75,0.85 0.85,1 0.75,1 
      L 0.05,1 
      Q 0,1 0,0.95 
      Z"
            />
          </clipPath>
        </defs>
      </svg>

      <Card
        style={{ clipPath: "url(#card-clip)" }}
        className="relative h-[360px] overflow-hidden border-none bg-[#FAF9F6] p-10 shadow-sm"
      >
        <div className="relative z-10 flex h-full flex-col items-start">
          <div className="mb-10 mr-40">
            <Image
              src={image}
              alt={title}
              width={65}
              height={65}
              className="object-contain"
            />
          </div>

          <div className="mt-auto flex flex-col items-start">
            <h2 className="mb-3 text-[22px] font-bold text-[#001F4D]">
              {title}
            </h2>

            <p className="mb-6 max-w-[280px] text-[13px] leading-relaxed text-slate-500">
              {description}
            </p>

            <div className="flex items-center gap-2 mb-6">
              <div className="h-[1px] w-25 bg-slate-400/40 mr-30" />
            </div>

            <div className="mr-37 flex items-center gap-1 text-xs text-[#001F4D]">
              <span className="text-xs">
                {unit}+{count}
              </span>
              <span className="h-2 w-2 rounded-full bg-[#1ABAE2]" />
            </div>
          </div>
        </div>
      </Card>

      {/* 3. Also add onClick to the button just in case user clicks exactly on it */}
      <button
        onClick={(e) => {
          e.stopPropagation(); // Prevents double-firing if parent also has onClick
          onClick?.();
        }}
        className="absolute bottom-5 right-7.5 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-[#1ABAE2] text-white shadow-lg transition-all hover:scale-110 hover:bg-[#15a3c7]"
        aria-label="View Details"
      >
        <ArrowUpRight size={28} strokeWidth={2.5} />
      </button>
    </div>
  );
}