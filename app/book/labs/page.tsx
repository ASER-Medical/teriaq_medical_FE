"use client";

import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import BookingLayout from "@/components/layout/BookingLayout";
import SelectionCard from "@/components/booking/SelectionCard";
import { useRouter } from "next/navigation";
import { useBooking } from "@/context/BookingContext";


export default function AddLabsBookingPage() {
  const router = useRouter();
  const { setEntity } = useBooking();

  const [selectedLabId, setSelectedLabId] = useState<number | null>(null);
  const [selectedSpecialties, setSelectedSpecialties] = useState<string[]>([]);

  const LABS_DATA = [
    {
      id: 1,
      name: "معمل ألفا",
      specialties: ["أشعة مقطعية","منظار","إكس راي"],
      imageUrl: "/lab.svg",
      rating: "أعلى من ٥٠+ تقييم",
    },
    {
      id: 2,
      name: "معمل ألتراسونيك",
      specialties: ["أشعة مقطعية","منظار","إكس راي"],
      imageUrl: "/lab.svg",
      rating: "٥٠+ تقييم",
    },
  ];

  const handleCardClick = (labId: number, specialties: string[]) => {
    setSelectedLabId(labId);
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
    selectedLabId !== null && selectedSpecialties.length > 0;

  const handleProceed = () => {
    const lab = LABS_DATA.find((l) => l.id === selectedLabId);
    if (!lab) return;

    setEntity({
      name: lab.name,
      subText: selectedSpecialties.join("، "),
      imageUrl: lab.imageUrl,
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
              معامل ( {LABS_DATA.length} )
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

          {/* Labs Grid */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {LABS_DATA.map((lab) => (
              <SelectionCard
                key={lab.id}
                name={lab.name}
                specialty={lab.specialties}
                ratingText={lab.rating}
                imageUrl={lab.imageUrl}
                isSelected={selectedLabId === lab.id}
                selectedSpecialties={
                  selectedLabId === lab.id ? selectedSpecialties : []
                }
                onClick={() => handleCardClick(lab.id, lab.specialties)}
                onSpecialtyChange={handleSpecialtyChange}
              />
            ))}
          </section>
        </div>
      </BookingLayout>
    </DashboardLayout>
  );
}
