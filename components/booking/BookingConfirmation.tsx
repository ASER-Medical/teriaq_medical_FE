// components/booking/BookingReviewCard.tsx
import Image from "next/image";

interface BookingReviewCardProps {
  doctorName: string;
  specialty: string;
  date: string;
  time: string;
  imageSrc: string;
}

export default function BookingReviewCard({ doctorName, specialty, date, time, imageSrc }: BookingReviewCardProps) {
  // Convert "2026-05-12" to "12 مايو 2026"
  const formattedDate = new Date(date).toLocaleDateString("ar-EG", {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className="w-full max-w-3xl mx-auto" dir="rtl">
      <div className="bg-white border border-[#E5E7EB] rounded-[2rem] p-8 md:p-12 shadow-sm">
        <div className="flex flex-col items-center text-center mb-10">
          <div className="relative w-24 h-24 mb-4">
            <Image
              src={imageSrc}
              alt={doctorName}
              fill
              className="rounded-full object-cover border-4 border-[#F0F9FA]"
            />
          </div>
          <h3 className="text-2xl font-bold text-[#031B4E]">{doctorName}</h3>
          <p className="text-[#00B5C1] font-medium mt-1">{specialty}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <p className="text-center font-bold text-[#031B4E]">التاريخ</p>
            <div className="bg-[#F0F9FA] text-[#00B5C1] py-4 rounded-2xl text-center font-bold border border-[#E0F7F8]">
              {formattedDate}
            </div>
          </div>
          
          <div className="space-y-3">
            <p className="text-center font-bold text-[#031B4E]">الوقت</p>
            <div className="bg-[#F0F9FA] text-[#00B5C1] py-4 rounded-2xl text-center font-bold border border-[#E0F7F8]">
              {time}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-4 mt-8">
        <button className="w-full md:flex-1 bg-[#00B5C1] text-white py-4 rounded-xl font-bold hover:bg-[#009da7] transition-all shadow-lg shadow-[#00B5C1]/20">
          تأكيد الحجز
        </button>
        <button className="w-full md:w-auto px-12 py-4 border-2 border-[#00B5C1] text-[#00B5C1] rounded-xl font-bold hover:bg-[#f0fdfa] transition-all">
          تعديل
        </button>
      </div>
    </div>
  );
}