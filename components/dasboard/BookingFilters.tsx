  import { ChevronDown } from "lucide-react";


  export default function BookingFilters() {
    return (
      <>
        <div className=" border rounded-3xl h-12 py-2 px-5 flex justify-between items-center mb-6 bg-[#EAF6FA]">
          <div className="flex gap-3">
            <Dropdown label="12 شهر" />
            <Dropdown label="تصنيف" />
          </div>
        </div>
      </>
    );
  }

  const Filter = ({ label, active }: any) => (
    <button
      className={` flex items-center px-6 py-2 border-2 z rounded-xl text-sm whitespace-nowrap
      ${active ? "bg-white text-[#031B4E]" : "text-gray-400 hover:bg-gray-100"}`}
    >
      {label}
    </button>
  );


  
  const Dropdown = ({ label }: any) => (
    <button className="flex items-center gap-2 border px-4 py-2 rounded-xl text-sm text-gray-600 bg-white">
      {label}
      <ChevronDown size={14} />
    </button>
  );
