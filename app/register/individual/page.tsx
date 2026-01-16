import AuthLayout from "@/components/layout/AuthLayout";
import IndividualForm from "@/components/auth/IndividualForm";
import FormLayout from "@/components/layout/AuthForm";
export default function IndividualPage() {
  return (
    <FormLayout>
      <div className="w-full max-w-md">
        <h2 className="font-bold text-lg ">
          أفراد غير نقابية
        </h2>
        <p className="mb-8">أفراد عادية</p>
        <IndividualForm />
      </div>
    </FormLayout>
  );
}
