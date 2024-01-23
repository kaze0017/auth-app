import React from "react";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

interface FormErrorProps {
  message?: string;
}

export default function FormError({ message }: FormErrorProps) {
  if (!message) return null;
  return (
    <div className="flex py-2 items-center justify-center bg-destructive/15 text-destructive">
      <ExclamationTriangleIcon className="w-4 h-4 text-red-500" />
      <span className="ml-2 text-sm text-red-500">{message}</span>
    </div>
  );
}
