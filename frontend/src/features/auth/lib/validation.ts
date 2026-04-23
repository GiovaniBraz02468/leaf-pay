import { z } from "zod";

const PasswordSchema = z
  .string()
  .min(8, "A senha deve ter no mínimo 8 caracteres")
  .regex(/[0-9]/, "Deve conter pelo menos um número");

  
export const UserFormSchema = z.object({
  email: z.email("Email inválido"),
  password: PasswordSchema,
});

export const ResetPasswordSchema = z.object({
  password: PasswordSchema,
});

export type UserForm = z.infer<typeof UserFormSchema>;
