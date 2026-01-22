// context/BookingContext.tsx
"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export interface SelectedEntity {
  name: string;
  subText: string;
  imageUrl: string;
}

interface BookingContextType {
  entity: SelectedEntity | null;
  setEntity: (data: SelectedEntity) => void;
  selectedSpecialties: string[];
  setSelectedSpecialties: (specialties: string[]) => void;
  selectedDate: string;
  setSelectedDate: (date: string) => void;
  selectedTime: string;
  setSelectedTime: (time: string) => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [entity, setEntity] = useState<SelectedEntity | null>(null);
  const [selectedSpecialties, setSelectedSpecialties] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");

  return (
    <BookingContext.Provider
      value={{
        entity,
        setEntity,
        selectedSpecialties,
        setSelectedSpecialties,
        selectedDate,
        setSelectedDate,
        selectedTime,
        setSelectedTime,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) throw new Error("useBooking must be used within BookingProvider");
  return context;
};