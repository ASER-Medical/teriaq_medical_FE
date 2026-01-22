"use client";

import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import BookingLayout from "@/components/layout/BookingLayout";
import SelectionCard from "@/components/booking/SelectionCard";
import { useRouter } from "next/navigation";
import { useBooking } from "@/context/BookingContext";

export default function AddClinicsBookingPage() {
  const router = useRouter();
  const { setEntity, setSelectedSpecialties } = useBooking();

  const [selectedClinicId, setSelectedClinicId] = useState<number | null>(null);
  const [selectedSpecialties, setLocalSelectedSpecialties] = useState<string[]>([]);

  const CLINICS_DATA = [
    {
      id: 1,
      name: "معمل دكتور حسام محمد",
      specialties: ["تحاليل مخ و أعصاب"],
      imageUrl: "/lab.svg",
      rating: "أعلى من ٥٠+ تقييم",
    },
    {
      id: 2,
      name: "معمل دكتور أشرف البدري",
      specialties: ["تحاليل مخ و أعصاب"],
      imageUrl: "/lab.svg",
      rating: "٥٠+ تقييم",
    },
  ];

  const handleCardClick = (clinicId: number, specialties: string[]) => {
    setSelectedClinicId(clinicId);
    if (specialties.length === 1) {
      setLocalSelectedSpecialties([specialties[0]]);
    } else {
      setLocalSelectedSpecialties([]);
    }
  };

  const handleSpecialtyChange = (specialty: string) => {
    setLocalSelectedSpecialties((prev) =>
      prev.includes(specialty)
        ? prev.filter((s) => s !== specialty)
        : [...prev, specialty]
    );
  };

  const canProceed = selectedClinicId !== null && selectedSpecialties.length > 0;

  const handleProceed = () => {
    const clinic = CLINICS_DATA.find((c) => c.id === selectedClinicId);
    if (!clinic) return;

    // Set data in global context
    setEntity({
      name: clinic.name,
      subText: selectedSpecialties.join("، "),
      imageUrl: clinic.imageUrl,
    });
    setSelectedSpecialties(selectedSpecialties);

    router.push("/book/date-time");
  };

  return (
    <DashboardLayout>
      <BookingLayout currentStep={2} title="إضافة حجز جديد">
        <div className="flex flex-col gap-6 animate-in fade-in duration-500">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#031B4E]">
              معامل ( {CLINICS_DATA.length} )
            </h2>

            <button
              disabled={!canProceed}
              onClick={handleProceed}
              className="
                w-full md:w-auto
                px-8 py-2.5
                text-sm sm:text-base
                bg-[#00B5C1]
                text-white
                rounded-xl
                font-bold
                hover:bg-[#009ca6]
                disabled:opacity-50
                transition-all
                shadow-md shadow-[#00B5C1]/20
              "
            >
              حفظ و متابعة
            </button>
          </div>

          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CLINICS_DATA.map((clinic) => (
              <SelectionCard
                key={clinic.id}
                name={clinic.name}
                specialty={clinic.specialties}
                ratingText={clinic.rating}
                imageUrl={clinic.imageUrl}
                isSelected={selectedClinicId === clinic.id}
                selectedSpecialties={
                  selectedClinicId === clinic.id ? selectedSpecialties : []
                }
                onClick={() =>
                  handleCardClick(clinic.id, clinic.specialties)
                }
                onSpecialtyChange={handleSpecialtyChange}
              />
            ))}
          </section>
        </div>
      </BookingLayout>
    </DashboardLayout>
  );
}
