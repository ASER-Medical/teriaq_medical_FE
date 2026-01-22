import { MoreHorizontal } from "lucide-react";
import StatusBadge from "../ui/StatusBadge";
import IconBadge from "../ui/IconBadge";

export default function BookingCard({ title, type, status }: any) {
  return (
    <div className="bg-white border rounded-2xl px-4 py-4 flex flex-col lg:flex-row justify-between gap-4">
      <div className="flex items-center gap-3">
        <IconBadge type={type} />
        <div className="text-sm mr-30 text-gray-500">
          الخميس، 27 نوفمبر
        </div>
      </div>
      <div className="flex flex-1 justify-end items-center gap-10 text-right">
        <div className="text-sm text-gray-500">
          1:00 مساءً - 5:00 مساءً
        </div>
        <StatusBadge status={status} />
        <button className="p-2 rounded-lg hover:bg-gray-100">
          <MoreHorizontal size={18} />
        </button>
      </div>
    </div>
  );
}

