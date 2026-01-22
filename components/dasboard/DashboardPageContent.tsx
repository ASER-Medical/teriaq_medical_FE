import DashboardHeader from "./DashboardHeader";
import BookingFilters from "./BookingFilters";
import BookingList from "./BookingList";

export default function DashboardPageContent() {
  return (
    <>
      <DashboardHeader />
      <div className="bg-[#ffffff] rounded-2xl p-4 lg:p-6">
        <BookingFilters />
        <BookingList />
      </div>
    </>
  );
}
