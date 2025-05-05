import { getProjects } from "@/entities/project";
import { getTags } from "@/entities/tag";
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared";
import { useMemo, useState } from "react";

const { ok: projectsOk, data: projects, err: projectsErr } = getProjects();
const { ok: tagsOk, data: tags, err: tagsErr } = getTags();

export function ProjectsSection() {
  if (!projectsOk && !tagsOk) {
    return (
      <h1>
        {projectsErr} {tagsErr}
      </h1>
    );
  }

  const [currentTags, setCurrentTags] = useState<string[]>([]);

  const filteredProjects = useMemo(() => {
    return projects?.filter((project) => {
      return (
        currentTags.every((currentTag) => {
          return project.tags.some((tag) => currentTag === tag);
        }) || currentTags.length === 0
      );
    });
  }, [currentTags]);

  function toggleTag(skill: string, isTagCurrent: boolean) {
    if (isTagCurrent) {
      return setCurrentTags([...currentTags.filter((t) => t !== skill)]);
    }

    setCurrentTags([...currentTags, skill]);
  }

  return (
    <section className="mt-15" id="projects">
      <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">
        Избранные проекты
      </h2>
      <h3 className="text-2xl font-bold tracking-tighter mb-8 text-center">
        Здесь расскажем какие я разрабатывал проекты, какие проблемы решил и
        какой опыт получил
      </h3>
      <div className="border-2 my-5"></div>
      <h3 className="text-2xl font-bold tracking-tighter mb-8 text-center">
        Основные технологии
      </h3>
      <div className="flex gap-2 flex-wrap">
        {tags!.map((skill) => {
          const isTagCurrent: boolean = currentTags.some((t) => t === skill);

          return (
            <Badge
              className="text-2xl"
              variant={isTagCurrent ? "default" : "secondary"}
              onClick={() => toggleTag(skill, isTagCurrent)}
              key={skill}
            >
              {skill}
            </Badge>
          );
        })}
      </div>
      <div className="border-2 my-5"></div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects!.map((project) => (
          <Card key={project.github} className="overflow-hidden">
            {project.image && (
              <div className="aspect-video relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover"
                />
              </div>
            )}
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-3.5">
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
              <strong className="text-lg font-semibold">
                Ключевые технические особенности:
              </strong>
              <ul className="list-disc mx-5">
                {project.keyFeatures.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
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
              {project.articleId && (
                <Button size="sm" asChild>
                  <a href={project.articleId}>Статья на Хабре</a>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="border-2 my-5"></div>
    </section>
  );
}
