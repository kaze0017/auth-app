import React from "react";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { FaUserLock } from "react-icons/fa";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface headerProps {
  label: string;
}

export function Header({ label: label }: headerProps) {
  return (
    <div className="w-full flex-col gap-y-4 items-center justify-center text-center">
      <h1
        className={cn(
          "flex space-x-4 text-3xl font-semibold items-center justify-center",
          font.className
        )}
      >
        <FaUserLock /> <span>Auth</span>
      </h1>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
}
