"use client";

import { Menu } from "lucide-react";

export default function TopBar({
  onMenuClick,
}: {
  onMenuClick: () => void;
}) {
  return (
    <div className="lg:hidden flex items-center justify-between bg-white px-4 py-3 border-b">
      <img src="/logo.png" className="h-8" />

      <button
        onClick={onMenuClick}
        className="p-2 rounded-lg bg-gray-100 active:scale-95 transition"
      >
        <Menu size={22} />
      </button>
    </div>
  );
}
