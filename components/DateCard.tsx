import React from 'react';
import Image from 'next/image';

const DateCard = () => {
  const schedule = [
    { day: 'السبت', time: '07:30 – 09:30' },
    { day: 'الاحد', time: '07:30 – 09:30' },
    { day: 'الاثنين', time: '07:30 – 09:30' },
    { day: 'الثلاثاء', time: '07:30 – 09:30' },
    { day: 'الاربع', time: '07:30 – 09:30' },
    { day: 'الخميس', time: '07:30 – 09:30' },
  ];

  return (
    <div className="relative mt-10 w-64 font-sans" dir="rtl">
      {/* Top Floating Icon - صغرنا الحجم قليلاً ليتناسب مع البطاقة الأصغر */}
      <div className="absolute -top-8 -right-3 z-10 flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-orange-500 shadow-sm">
        <Image
          src='/clock.svg'
          alt='clock'
          width={40} // تم تصحيح العرض هنا لأن 200 كان كبيراً جداً كقيمة مرررة
          height={40}
          className='object-contain'
        />
      </div>

      {/* Main Card - تم تقليل الـ p-8 إلى p-5 والـ pt-10 إلى pt-8 */}
      <div className="overflow-hidden rounded-3xl bg-[#21b3d5] p-5 pt-8 text-white shadow-lg">
        {/* تقليل الهامش السفلي mb-6 إلى mb-3 وحجم الخط من 2xl إلى xl */}
        <h2 className="mb-3 text-xl font-bold">مواعيد العمل</h2>
        
        {/* تقليل المسافة بين العناصر space-y-4 إلى space-y-2 */}
        <div className="space-y-2">
          {schedule.map((item, index) => (
            <div key={index} className="flex justify-between items-center border-b border-white/10 pb-1 last:border-0">
              <span className="text-sm font-medium opacity-90">{item.day}</span>
              <span className="text-sm font-bold tracking-wide">{item.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DateCard;