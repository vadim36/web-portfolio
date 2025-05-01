import { getProjects } from "@/entities/project";
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../shared";
import { useState } from "react";

const tags: string[] = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Git",
  "AWS",
  "Docker",
  "GraphQL",
  "REST API",
];

const { ok, data: projects, err } = getProjects();

export function ProjectsSection() {
  const [currentTag, setCurrentTag] = useState<string[]>([
    "JavaScript",
    "React",
  ]);

  if (!ok) {
    return <h1>{err}</h1>;
  }

  return (
    <section id="projects" className="py-12 md:py-24 scroll-mt-16">
      <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">
        Избранные проекты
      </h2>
      <h3 className="text-2xl font-bold tracking-tighter mb-8 text-center">
        Здесь расскажем какие я разрабатывал проекты, какие проблемы решил и
        какой опыт получил
      </h3>
      <div className="flex gap-2">
        {tags.map((skill) => (
          <Badge
            className="text-2xl"
            variant={
              currentTag.some((t) => t === skill) ? "default" : "secondary"
            }
            onClick={() => {
              if (currentTag.some((t) => t === skill)) {
                return setCurrentTag([
                  ...currentTag.filter((t) => t !== skill),
                ]);
              }

              setCurrentTag([...currentTag, skill]);
            }}
            key={skill}
          >
            {skill}
          </Badge>
        ))}
      </div>
      <div className="border-2 my-5"></div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects!.map((project, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="aspect-video relative">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-muted px-2 py-1 rounded-md text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm" asChild>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Код
                </a>
              </Button>
              {project.docsId && <Button size="sm" asChild>
                <a rel="noopener noreferrer">Читать подробнее</a>
              </Button>}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
