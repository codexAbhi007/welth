import { z } from "zod";

export const accountSchema = z.object({
  name: z.string().min(1, "Name is required"),
  type: z.enum(["CURRENT", "SAVINGS"]),
  balance: z.coerce.number({
    required_error: "Initial balance is required",
    invalid_type_error: "Balance must be a number",
  }).positive("Balance must be greater than 0"),
  isDefault: z.boolean().default(false),
});
