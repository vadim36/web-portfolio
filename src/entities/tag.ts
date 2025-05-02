import tags_json from "@/../content/tags.json";
import z from "zod";

export function getTags() {
  const { success, data, error } = z.array(z.string()).safeParse(tags_json);

  if (!success) {
    console.log(error);
    return { ok: false, err: "Sorry, please try again later" };
  }

  return { ok: true, data };
}