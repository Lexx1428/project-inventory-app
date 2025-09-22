// components/login-button.tsx

"use client"; // This is the crucial line!

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export function LoginButton() {
  const router = useRouter();

  return (
    <Button onClick={() => router.push("/login")}>
      Login page
    </Button>
  );
}