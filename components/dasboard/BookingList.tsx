import BookingCard from "./BookingCard";

export default function BookingList() {
  return (
    <div className="space-y-3">
      <BookingCard type="clinic" title="عيادة نور البيان" status="completed" />
      <BookingCard type="lab" title="معمل الأطباء" status="upcoming" />
      <BookingCard type="doctor" title="الدكتور أحمد محمد" status="incomplete" />
      <BookingCard type="hospital" title="مستشفى السعودي الألماني" status="completed" />
    </div>
  );
}
