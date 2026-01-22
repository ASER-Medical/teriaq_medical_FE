export default function IconBadge({ type }: any) {
  const map: any = {
    clinic: "عيادة",
    lab: "معامل",
    doctor: "أطباء",
    hospital: "مستشفيات",
  };

  return (
    <div className="flex flex-col items-center gap-1">
      <div className="w-10 h-10 bg-blue-100 rounded-full" />
      <span className="text-xs text-gray-400">{map[type]}</span>
    </div>
  );
}
