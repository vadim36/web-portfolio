import z from "zod";
import projects_json from "@/../content/projects_meta.json";
import { Maybe } from "@/shared";

const ProjectSchema = z.object({
  title: z.string().min(3).max(64),
  description: z.string().max(256).optional(),
  tags: z.array(z.string()).nonempty(),
  image: z.string(),
  github: z.string(),
});

export type Project = z.infer<typeof ProjectSchema>;

export function getProjects(): Maybe<Project[]> {
  const { success, data, error } = z.array(ProjectSchema).safeParse(projects_json);

  if (!success) {
    console.log(error);
    return { ok: false, err: "Sorry, please try again later" };
  }

  return { ok: true, data };
}