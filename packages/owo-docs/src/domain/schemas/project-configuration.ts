import { z } from "zod";

export const VersionKeySchema = z.string().regex(/^\d+\.\d+\.\d+$/);

export const ProjectConfigurationSchema = z.object({
  name: z.string().min(1),
  defaultVersion: VersionSchema,
  description: z.optional(z.string().min(1)),
  versions: z.array(),
});

export type ProjectConfiguration = z.infer<typeof ProjectConfigurationSchema>;
