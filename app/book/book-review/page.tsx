// app/book/book-review/page.tsx
"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import BookingLayout from "@/components/layout/BookingLayout";
import BookingReviewCard from "@/components/booking/BookingConfirmation";
import { useBooking } from "@/context/BookingContext";

export default function ReviewBookingPage() {
  const { entity, selectedSpecialties, selectedDate, selectedTime } = useBooking();

  // We check for the essentials. If specialties array is empty, we fall back to the subText.
  const hasRequiredData = !!entity && !!selectedDate && !!selectedTime;

  return (
    <DashboardLayout>
      <BookingLayout title="مراجعة الحجز" currentStep={4}>
        {!hasRequiredData ? (
          <div className="p-10 text-center text-gray-400 font-bold border-2 border-dashed rounded-2xl">
            <p className="text-xl mb-2">⚠️ بيانات ناقصة</p>
            <p>يرجى التأكد من اختيار الطبيب، التاريخ، والوقت.</p>
          </div>
        ) : (
          <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <BookingReviewCard
              doctorName={entity.name}
              // Fallback to subText if specialties array is empty
              specialty={selectedSpecialties.length > 0 ? selectedSpecialties.join("، ") : entity.subText}
              date={selectedDate}
              time={selectedTime}
              imageSrc={entity.imageUrl || "/default-avatar.png"}
            />
          </div>
        )}
      </BookingLayout>
    </DashboardLayout>
  );
}