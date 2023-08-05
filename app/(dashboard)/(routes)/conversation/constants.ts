import * as z from "zod";

export const formSchema = z.object({
  prompt: z.string().min(1, {
    message: "You Have to put a prompt here",
  }),
});
