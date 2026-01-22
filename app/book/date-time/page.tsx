"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import BookingLayout from "@/components/layout/BookingLayout";
import DateTimeSelection from "@/components/booking/DateTimeSelection";

export default function DateTimeSelectionPage() {
  return (
    <DashboardLayout>
      <BookingLayout currentStep={3} title="تحديد الوقت والتاريخ">
        {/* NO props needed! Data comes from useBooking context */}
        <DateTimeSelection />
      </BookingLayout>
    </DashboardLayout>
  );
}
