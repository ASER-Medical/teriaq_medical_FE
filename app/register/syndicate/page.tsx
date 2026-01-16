import AuthLayout from "@/components/layout/AuthLayout";
import FormLayout from "@/components/layout/AuthForm";
import SyndicateForm from "@/components/auth/SyndicateForm";

export default function SyndicatePage() {
  return (
    <FormLayout>
      <div className="w-full max-w-md">
        <h2 className="font-bold text-lg">
         نقابة
        </h2>
        <p className="w-full mb-8">للمؤسسات العامة والنقابات</p>
        <SyndicateForm />
      </div>
    </FormLayout>
  );
}
