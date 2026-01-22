"use client";

import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import BookingLayout from "@/components/layout/BookingLayout";
import ServiceCard from "@/components/ServiceCard";
import { useRouter } from "next/navigation";

export default function AddBookingPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <DashboardLayout>
      <BookingLayout 
        currentStep={currentStep} 
        title="إضافة حجز جديد"
      >
        
        {/* Step 1 – Services Grid */}
        {currentStep === 1 && (
          <section
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              xl:grid-cols-3
              gap-8
              mt-4
            "
          >
            <ServiceCard
              title="معامل"
              image="/Flask.svg"
              description="ترتيب المواعيد لإجراء التحاليل والفحوصات المختبرية"
              count={25}
              unit="معمل"
              onClick={() => router.push("/book/labs")}
            />

            <ServiceCard
              title="مستشفيات"
              image="/Hospital.svg"
              description="حجز خدمات المستشفى والإجراءات الطبية"
              count={25}
              unit="مستشفى"
              onClick={() => router.push("/book/hospitals")}
            />

            <ServiceCard
              title="الأطباء"
              image="/Doctor.svg"
              description="حجز مواعيد مع أطباء من مختلف التخصصات الطبية"
              count={25}
              unit="طبيب"
              onClick={() => router.push("/book/doctors")}
            />

            <ServiceCard
              title="العيادات"
              image="/Medical history.svg"
              description="حجز المواعيد في العيادات المتخصصة"
              count={25}
              unit="عيادة"
              onClick={() => router.push("/book/clincs")}
            />
          </section>
        )}

        {/* Step 2 – Specific Selection */}
        {currentStep === 2 && (
          <div className="flex flex-col items-center justify-center min-h-[300px] bg-white rounded-3xl border border-gray-100 shadow-sm p-10">
             <h2 className="text-2xl font-bold text-[#031B4E]">تحديد التخصص</h2>
             <p className="text-gray-400 mt-4 text-lg">محتوى الخطوة الثانية سيظهر هنا...</p>
             <button 
                onClick={() => setCurrentStep(1)}
                className="mt-8 px-6 py-2 bg-[#00B5C1] text-white rounded-xl hover:bg-[#009ca6] transition-all"
             >
                رجوع
             </button>
          </div>
        )}

      </BookingLayout>
    </DashboardLayout>
  );
}