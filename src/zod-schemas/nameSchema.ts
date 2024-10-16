import { z } from "zod";
import { REGEX } from "../regex/regex";

export const nameSchema = z
  .string()
  .min(1, { message: "Min 1 digíto." })
  .max(50, { message: "Max 50 digítos." })
  .refine((name) => !REGEX.startWithSpace.test(name), {
    message: "No empezar con espacios.",
  })
  .refine((name) => !REGEX.endWithSpace.test(name), {
    message: "No finalizar con espacios.",
  })
  .refine((name) => !REGEX.specialCharacters.test(name), {
    message: "Sin carácteres especiales.",
  })
  .refine((name) => !REGEX.numbers.test(name), {
    message: "Sin números.",
  })
  .refine((name) => !name.includes("/"), {
    message: "Sin carácteres especiales.",
  })
  .refine((name) => !name.includes("-"), {
    message: "Sin carácteres especiales.",
  });
