import { Plus } from "lucide-react";

export default function DashboardHeader() {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-between mb-8 gap-4">
      <div className="text-right">
        <h1 className="text-2xl font-bold text-gray-800">
          مرحبا بعودتك أحمد 👋
        </h1>
        <p className="text-gray-500 text-sm">
          إدارة رعايتك الصحية في مكان واحد
        </p>
      </div>
    </div>
  );
}
