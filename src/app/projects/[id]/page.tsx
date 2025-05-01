import fs from "node:fs";
import path from "node:path";

const contentRepo: string = path.join(process.cwd(), "content", "projects");

export default async function ProjectPage({ params }: { params: Promise<{ id: string }>}) {
  const { id } = await params;
  let content = fs.readFileSync(path.join(contentRepo, `${id}.md`), "utf-8");

  return <>
    <h1>Project</h1>
    <p>{content}</p> 
  </>
}