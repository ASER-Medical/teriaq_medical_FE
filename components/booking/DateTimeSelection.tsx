// app/book/date-time/page.tsx
"use client";

import { useRef } from "react";
import Image from "next/image";
import { Calendar } from "lucide-react";
import { useBooking } from "@/context/BookingContext";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

export default function DateTimeSelection() {
  const router = useRouter();
  const { entity, selectedDate, setSelectedDate, selectedTime, setSelectedTime } = useBooking();
  const dateInputRef = useRef<HTMLInputElement>(null);

  if (!entity) {
    return (
      <div className="p-20 text-center text-gray-400 font-bold">
        يرجى اختيار مقدم الخدمة أولاً...
      </div>
    );
  }

  const times = ["10:00 صباحا", "8:00 مساءا", "4:00 عصرا"];
  
  // Format for display (Arabic Locale)
  const displayDate = selectedDate 
    ? new Date(selectedDate).toLocaleDateString("ar-EG", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
    : "لم يتم اختيار تاريخ";

  const canProceed = !!selectedDate && !!selectedTime;

  return (
    <div className="w-full max-w-2xl mx-auto py-10" dir="rtl">
      <div className="flex justify-center lg:justify-end mb-10">
        <button
          disabled={!canProceed}
          onClick={() => router.push("/book/book-review")}
          className={cn(
            "bg-[#00B5C1] text-white px-12 py-3.5 rounded-xl font-bold shadow-lg transition-all",
            !canProceed ? "opacity-50 cursor-not-allowed" : "hover:opacity-90 shadow-[#00B5C1]/20"
          )}
        >
          حفظ و متابعة
        </button>
      </div>

      <div className="bg-white rounded-[2.5rem] border border-gray-50 shadow-[0_10px_40px_rgba(0,0,0,0.04)] p-10 md:p-14">
        <div className="flex flex-col items-center text-center mb-10">
          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white shadow-sm mb-4 bg-gray-50">
            <Image
              src={entity.imageUrl || "/default-avatar.png"}
              alt={entity.name}
              width={96}
              height={96}
              className="object-cover w-full h-full"
            />
          </div>
          <h2 className="text-2xl font-bold text-[#031B4E]">{entity.name}</h2>
          <p className="text-gray-400 text-sm mt-1">{entity.subText}</p>
        </div>

        <div className="space-y-3 mb-10">
          <label className="text-gray-400 text-sm block pr-2 font-medium">حدد التاريخ</label>
          <div className="relative">
            <div 
              onClick={() => dateInputRef.current?.showPicker()}
              className="w-full bg-[#F8F9FA] rounded-2xl py-5 px-12 text-[#00B5C1] font-bold text-center cursor-pointer"
            >
              {selectedDate ? displayDate : "اختر التاريخ من هنا"}
            </div>
            <Calendar className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none" size={22} />
            <input
              ref={dateInputRef}
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="absolute inset-0 opacity-0 pointer-events-none"
            />
          </div>
        </div>

        <div className="space-y-4">
          <label className="text-gray-400 text-sm block pr-2 font-medium">اختر الوقت المناسب</label>
          <div className="grid grid-cols-3 gap-4">
            {times.map((t) => (
              <button
                key={t}
                onClick={() => setSelectedTime(t)}
                className={cn(
                  "py-4 rounded-2xl font-bold transition-all text-sm",
                  selectedTime === t ? "bg-[#E0F7F8] text-[#00B5C1]" : "bg-[#F8F9FA] text-gray-400 hover:bg-gray-100"
                )}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}