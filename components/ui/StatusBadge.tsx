export default function StatusBadge({ status }: any) {
  const map: any = {
    completed: ["حجز مكتمل", "bg-green-50 text-green-600"],
    upcoming: ["حجز قادم", "bg-blue-50 text-blue-600"],
    incomplete: ["حجز غير مكتمل", "bg-red-50 text-red-600"],
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs ${map[status][1]}`}>
      {map[status][0]}
    </span>
  );
}
