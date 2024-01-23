import React from "react";
import { CheckCircledIcon } from "@radix-ui/react-icons";

interface FormSuccessProps {
  message?: string;
}

export default function FormSuccess({ message }: FormSuccessProps) {
  if (!message) return null;
  return (
    <div className="flex py-2 items-center justify-center bg-emerald-500/15 text-emerald">
      <CheckCircledIcon className="w-4 h-4 text-green-500" />
      <span className="ml-2 text-sm">{message}</span>
    </div>
  );
}
