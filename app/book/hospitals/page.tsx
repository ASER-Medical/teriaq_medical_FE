"use client";

import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import BookingLayout from "@/components/layout/BookingLayout";
import SelectionCard from "@/components/booking/SelectionCard";
import { useRouter } from "next/navigation";
import { useBooking } from "@/context/BookingContext";

export default function AddHospitalsBookingPage() {
  const router = useRouter();
  const { setEntity } = useBooking();

  const [selectedHospitalId, setSelectedHospitalId] = useState<number | null>(null);
  const [selectedSpecialties, setSelectedSpecialties] = useState<string[]>([]);

  const HOSPITALS_DATA = [
    {
      id: 1,
      name: "مستشفى الأمل",
      specialties: ["مخ وأعصاب","باطنة","مسالك بولية","طب نفسي","أسنان","رمد"],
      imageUrl: "/hos1.svg",
      rating: "أعلى من ٥٠+ تقييم",
    },
    {
      id: 2,
      name: "مستشفى الرجاء الدولي",
      specialties: ["مخ وأعصاب","باطنة","مسالك بولية"],
      imageUrl: "/hos1.svg",
      rating: "٥٠+ تقييم",
    },
    {
      id: 3,
      name: "مستشفى السعودي الألماني",
      specialties: ["مخ وأعصاب","باطنة","مسالك بولية"],
      imageUrl: "/hos1.svg",
      rating: "٥٠+ تقييم",
    },
  ];

  const handleCardClick = (hospitalId: number, specialties: string[]) => {
    setSelectedHospitalId(hospitalId);
    if (specialties.length === 1) {
      setSelectedSpecialties([specialties[0]]);
    } else {
      setSelectedSpecialties([]);
    }
  };

  const handleSpecialtyChange = (specialty: string) => {
    setSelectedSpecialties((prev) =>
      prev.includes(specialty)
        ? prev.filter((s) => s !== specialty)
        : [...prev, specialty]
    );
  };

  const canProceed =
    selectedHospitalId !== null && selectedSpecialties.length > 0;

  const handleProceed = () => {
    const hospital = HOSPITALS_DATA.find((h) => h.id === selectedHospitalId);
    if (!hospital) return;

    setEntity({
      name: hospital.name,
      subText: selectedSpecialties.join("، "),
      imageUrl: hospital.imageUrl,
    });

    router.push("/book/date-time");
  };

  return (
    <DashboardLayout>
      <BookingLayout currentStep={2} title="إضافة حجز جديد">
        <div className="flex flex-col gap-6 animate-in fade-in duration-500">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#031B4E] text-center md:text-right">
              مستشفيات ( {HOSPITALS_DATA.length} )
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

          {/* Hospitals Grid */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {HOSPITALS_DATA.map((hospital) => (
              <SelectionCard
                key={hospital.id}
                name={hospital.name}
                specialty={hospital.specialties}
                ratingText={hospital.rating}
                imageUrl={hospital.imageUrl}
                isSelected={selectedHospitalId === hospital.id}
                selectedSpecialties={
                  selectedHospitalId === hospital.id ? selectedSpecialties : []
                }
                onClick={() =>
                  handleCardClick(hospital.id, hospital.specialties)
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
