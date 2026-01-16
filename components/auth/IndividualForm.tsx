"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AuthService } from "@/services/auth.service";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function IndividualForm() {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = Object.fromEntries(new FormData(e.currentTarget));
    try {
      await AuthService.registerIndividual(formData);
      alert("تم التسجيل بنجاح");
    } catch (err: any) {
      alert(err.response?.data?.message || "حدث خطأ");
    } finally {
      setLoading(false);
    }
  };

  const labelStyle = "block text-right text-sm font-bold text-[#1a4b5c] mb-1.5";
  const inputStyle = "bg-[#F9F9F9] border-gray-100 rounded-xl h-12 text-right focus-visible:ring-[#21b3d5] pr-4 pl-10";

  return (
    <div dir="rtl" className="w-full">
      <form onSubmit={submit} className="space-y-4">
        <div>
          <label className={labelStyle}>الاسم بالكامل</label>
          <Input name="full_name" placeholder="هاجر" className={inputStyle} />
        </div>

        <div>
          <label className={labelStyle}>الرقم القومي</label>
          <Input name="national_id" placeholder="ادخل رقمك القومي" className={inputStyle} />
        </div>

        <div>
          <label className={labelStyle}>البريد الإلكتروني</label>
          <Input name="email" placeholder="email@email.com" className={inputStyle} />
        </div>

        <div>
          <label className={labelStyle}>رقم موبايل</label>
          <Input name="phone" placeholder="123 4567 1234" className={inputStyle} />
        </div>

        {/* Password Field with Eye */}
        <div className="relative">
          <label className={labelStyle}>الرقم السري</label>
          <div className="relative">
            <Input 
              type={showPassword ? "text" : "password"} 
              name="password" 
              placeholder="••••" 
              className={inputStyle} 
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        {/* Confirm Password Field with Eye */}
        <div className="relative">
          <label className={labelStyle}>تأكيد الرقم السري</label>
          <div className="relative">
            <Input 
              type={showConfirmPassword ? "text" : "password"} 
              name="confirm_password" 
              placeholder="ادخل الرقم السري" 
              className={inputStyle} 
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        <Button 
          disabled={loading} 
          className="w-full bg-[#21b3d5] hover:bg-[#1ca1bf] text-white h-12 rounded-xl font-bold mt-4 shadow-md transition-all"
        >
          {loading ? "جاري الإرسال..." : "متابعة"}
        </Button>
      </form>
    </div>
  );
}