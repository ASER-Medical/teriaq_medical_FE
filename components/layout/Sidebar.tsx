"use client";

import Image from "next/image";
import { LogOut, X } from "lucide-react";

export default function Sidebar({ onClose }: { onClose?: () => void }) {
  return (
    <aside className="
      h-full
      w-[260px]
      bg-white
      border-l
      px-6
      py-6
      flex
      flex-col
    ">
      {/* Mobile Header */}
      {onClose && (
        <div className="flex items-center justify-between mb-6 lg:hidden">
          <img src="/teriaq.svg" className="h-8" />
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100"
          >
            <X size={22} />
          </button>
        </div>
      )}

      {/* Desktop Logo */}
      {!onClose && (
        <img src="/teriaq.svg" className="h-12 mx-auto mb-10" />
      )}

      {/* Navigation */}
      <nav className="space-y-3 flex-1">
        <NavItem
          icon={<Image src="/calander.svg" alt="calendar" width={20} height={20} />}
          label="الحجوزات"
          active
          onClick={onClose}
        />

        <NavItem
          icon={<Image src="/call.svg" alt="call" width={20} height={20} />}
          label="إستشارة أونلاين"
          badge="متاح قريباً"
          onClick={onClose}
        />

        <NavItem
          icon={<Image src="/profile.svg" alt="profile" width={20} height={20} />}
          label="الملف الشخصي"
          onClick={onClose}
        />
      </nav>

      {/* Logout */}
      <button className="
        flex items-center gap-3
        text-red-500
        hover:bg-red-50
        px-4 py-3
        rounded-xl
      ">
        <LogOut size={20} />
        تسجيل الخروج
      </button>
    </aside>
  );
}

function NavItem({ icon, label, active, badge, onClick }: any) {
  return (
    <div
      onClick={onClick}
      className={`
        flex items-center
        px-4 py-3
        rounded-xl
        cursor-pointer
        transition
        ${
          active
            ? "bg-cyan-500 text-white"
            : "text-gray-600 hover:bg-gray-50"
        }
      `}
    >
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">{label}</span>
        {badge && (
          <span className="text-[10px] bg-cyan-100 text-cyan-600 px-2 py-0.5 rounded-full">
            {badge}
          </span>
        )}
      </div>

      <div className="mr-auto">{icon}</div>
    </div>
  );
}
