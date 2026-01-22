// app/book/layout.tsx
"use client";

import { ReactNode } from "react";
import { BookingProvider } from "@/context/BookingContext";

export default function BookLayout({ children }: { children: ReactNode }) {
  return <BookingProvider>{children}</BookingProvider>;
}
