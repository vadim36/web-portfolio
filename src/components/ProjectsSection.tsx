import { Badge, Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../shared";
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

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured online store with payment processing and inventory management.",
    tags: ["Next.js", "Stripe", "MongoDB"],
    image: "/placeholder.svg?height=200&width=300",
    github: "https://github.com/yourusername/project1",
    demo: "https://project1.com",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management tool with real-time updates and team features.",
    tags: ["React", "Firebase", "Tailwind CSS"],
    image: "/placeholder.svg?height=200&width=300",
    github: "https://github.com/yourusername/project2",
    demo: "https://project2.com",
  },
  {
    title: "Portfolio Website",
    description:
      "A responsive portfolio website showcasing projects and skills.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    image: "/placeholder.svg?height=200&width=300",
    github: "https://github.com/yourusername/project3",
    demo: "https://project3.com",
  },
];

export function ProjectsSection() {
  const [currentTag, setCurrentTag] = useState<string[]>([
    "JavaScript",
    "React",
  ]);

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
        {projects.map((project, index) => (
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
                  Code
                </a>
              </Button>
              <Button size="sm" asChild>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
