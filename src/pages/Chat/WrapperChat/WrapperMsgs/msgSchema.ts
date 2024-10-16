import { z } from "zod";

export const msgsSchema = z.object({
  msg: z.string().max(300, { message: "Maximo 300 dígitos." }),
});

export type MsgsForm = z.infer<typeof msgsSchema>;
