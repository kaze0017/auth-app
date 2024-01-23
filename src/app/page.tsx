import { Button } from "@/components/ui/button";
import { FaUserLock } from "react-icons/fa";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { LoginButton } from "@/components/auth/login-button";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      <div className="flex flex-col space-y-6 text-center">
        <h1
          className={cn(
            "flex items-center justify-center space-x-4 text-6xl font-semibold text-white drop-shadow-md ",
            font.className
          )}
        >
          <FaUserLock />
          <span>Auth</span>
        </h1>
        <p className="text-white text-lg">simple authentication service</p>
        <LoginButton>
          <Button variant={"secondary"} size={"lg"}>
            Sign in
          </Button>
        </LoginButton>
      </div>
    </main>
  );
}
