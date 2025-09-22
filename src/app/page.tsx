import { redirect } from "next/navigation";
import { LoginButton } from "@/components/login-button";

export default function Login() {
  return (
    <div className="flex justify-center h-screen items-center">


      <LoginButton />
    </div>
  );
}
