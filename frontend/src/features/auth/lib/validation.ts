import { z } from "zod";

// TODO -> REFACTOR THE ERROR MESSAGES TRANSLATIONS 

const PasswordSchema = z
  .string()
  .min(8, "errors.password_min")
  .regex(/[0-9]/, "errors.password_num");


export const UserFormSchema = z.object({
  email: z.email("errors.invalid_email"),
  password: PasswordSchema,
});

export const ResetPasswordSchema = z.object({
  password: PasswordSchema,
});

export type UserForm = z.infer<typeof UserFormSchema>;
