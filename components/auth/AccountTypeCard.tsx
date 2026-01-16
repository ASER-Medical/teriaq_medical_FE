'use client'
import { Card } from "@/components/ui/card";
import { useRouter } from "next/navigation";

type Props = {
  title: string;
  description: string;
  href: string;
};

export default function AccountTypeCard({
  title,
  description,
  href,
}: Props) {
  const router = useRouter();

  return (
    <Card
      onClick={() => router.push(href)}
      className="cursor-pointer p-6 text-center border-2 hover:border-primary transition"
    >
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="text-sm text-muted-foreground mt-1">
        {description}
      </p>
    </Card>
  );
}
