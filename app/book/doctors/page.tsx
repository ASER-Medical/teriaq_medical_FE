"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import DashboardLayout from "@/components/layout/DashboardLayout";
import BookingLayout from "@/components/layout/BookingLayout";
import SelectionCard from "@/components/booking/SelectionCard";
import { useBooking } from "@/context/BookingContext";

const DOCTORS_DATA = [
  { id: 1, name: "دكتور محمد حامد", specialty: "إستشاري مخ و أعصاب", imageUrl: "/doctor1.svg" },
  { id: 2, name: "دكتور هاني عادل", specialty: "إستشاري مخ و أعصاب", imageUrl: "/doctor2.svg" },
  { id: 3, name: "دكتور أشرف البدري", specialty: "إستشاري مخ و أعصاب", imageUrl: "/doctor3.svg" },
  { id: 4, name: "دكتورة هبة جمال", specialty: "أخصائي تجميل", imageUrl: "/doctor4.svg" },
];

export default function AddBookingPage() {
  const [selectedDoctorId, setSelectedDoctorId] = useState<number | null>(null);
  const router = useRouter();
  const { setEntity } = useBooking();

  const handleProceed = () => {
    const doc = DOCTORS_DATA.find(d => d.id === selectedDoctorId);
    if (doc) {
      setEntity({ name: doc.name, subText: doc.specialty, imageUrl: doc.imageUrl });
      router.push("/book/date-time");
    }
  };

  return (
    <DashboardLayout>
      <BookingLayout currentStep={2} title="إضافة حجز جديد">
        <div className="flex flex-col gap-6 animate-in fade-in duration-500">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <h2 className="text-xl lg:text-2xl font-bold text-[#031B4E]">أطباء ( {DOCTORS_DATA.length} )</h2>
            <button
              disabled={!selectedDoctorId}
              onClick={handleProceed}
              className="px-8 py-2.5 bg-[#00B5C1] text-white rounded-xl font-bold disabled:opacity-50 transition-all shadow-md shadow-[#00B5C1]/20"
            >
              حفظ و متابعة
            </button>
          </div>

          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {DOCTORS_DATA.map((doc) => (
              <SelectionCard
                key={doc.id}
                {...doc}
                ratingText="٥٠+ تقييم"
                isSelected={selectedDoctorId === doc.id}
                onClick={() => setSelectedDoctorId(doc.id)}
              />
            ))}
          </section>
        </div>
      </BookingLayout>
    </DashboardLayout>
  );
}