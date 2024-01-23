"use server";
import * as z from "zod";

import { LoginSchema } from "@/schemas";

export async function login(value: z.infer<typeof LoginSchema>) {
  const validatedFields = LoginSchema.safeParse(value);
  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }

  return { success: "EMail Sent!" };
}
