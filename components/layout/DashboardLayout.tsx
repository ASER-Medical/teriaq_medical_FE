"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

interface DashboardLayoutProps {
  children: React.ReactNode;
  showTopBar?: boolean;
}

export default function DashboardLayout({
  children,
  showTopBar = true,
}: DashboardLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#F9FAFB]" dir="rtl">

      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {/* Mobile Sidebar Drawer */}
      {isSidebarOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/40 z-40 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />

          {/* Drawer */}
          <div className="
            fixed
            inset-y-0
            right-0
            z-50
            w-[260px]
            bg-white
            shadow-xl
            lg:hidden
            animate-in
            slide-in-from-right
            duration-300
          ">
            <Sidebar onClose={() => setIsSidebarOpen(false)} />
          </div>
        </>
      )}

      {/* Main Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {showTopBar && (
          <TopBar onMenuClick={() => setIsSidebarOpen(true)} />
        )}

        <main className="flex-1 w-full px-3 sm:px-6 lg:px-8 py-4">
          {children}
        </main>
      </div>
    </div>
  );
}
