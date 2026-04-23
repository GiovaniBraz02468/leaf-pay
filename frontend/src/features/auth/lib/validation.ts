import { z } from "zod";

export const UserFormSchema = z.object({
  email: z.email("Email inválido"),
  password: z
    .string()
    .min(8, "A senha deve ter no mínimo 8 caracteres")
    .regex(/[0-9]/, "Deve conter pelo menos um número"),
});

export type UserForm = z.infer<typeof UserFormSchema>;
