import { z } from "zod";

export const imgSchema = z
  .instanceof(File) // Valida que sea una instancia de File
  .refine((file) => file.size <= 5 * 1024 * 1024, {
    // Máximo 5MB
    message: "El archivo no debe superar los 5MB",
  })
  .refine(
    (file) =>
      [
        "image/jpeg",
        "image/png",
        "image/webp",
        "image/heic",
        "image/avif",
      ].includes(file.type),
    {
      // Solo archivos JPEG, PNG, WEBP, HEIC y AVIF
      message: "Solo se permiten archivos JPEG, PNG, WEBP, HEIC o AVIF",
    }
  );
