"use client";

import { useLanguage } from "@/app/_contexts/LanguageContext";
import { Project } from "@/app/_types/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { ExternalLink, Github, Info } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Props = {
  project: Project;
};

function ProjectCard({ project }: Props) {
  const { t, language } = useLanguage();
  const router = useRouter();

  const handleCardClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (
      target.tagName === "BUTTON" ||
      target.tagName === "A" ||
      target.closest("button") ||
      target.closest("a")
    ) {
      return;
    }
    router.push(`/projects/${project.id}`);
  };

  const handleLinkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const isGithubUrlObject =
    project.githubUrl && typeof project.githubUrl === "object";
  const hasBackend =
    isGithubUrlObject && "backend" in (project.githubUrl as object);
  const hasFrontend =
    isGithubUrlObject && "frontend" in (project.githubUrl as object);
  const hasSingleGithub = typeof project.githubUrl === "string";

  return (
    <motion.div
      id={project.id}
      key={project.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card
        className="h-full flex flex-col border border-border/50 overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-border"
        onClick={handleCardClick}
      >
        <div className="relative overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            width={600}
            height={400}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <CardHeader>
          <CardTitle>{project.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
            {project.description[language]}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech: string) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 4 && (
              <Badge variant="secondary" className="bg-muted">
                +{project.technologies.length - 4}
              </Badge>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-2">
          <div
            className={`grid ${
              project.liveUrl ? "grid-cols-2" : "grid-cols-1"
            } gap-2 w-full`}
          >
            <Button
              asChild
              variant="secondary"
              size="sm"
              className="w-full"
              onClick={handleLinkClick}
            >
              <Link
                href={`/projects/${project.id}`}
                className="flex items-center justify-center gap-2"
              >
                <Info className="h-4 w-4" />
                <span>{t("viewDetails")}</span>
              </Link>
            </Button>
            {project.liveUrl && (
              <Button
                asChild
                variant="default"
                size="sm"
                className="w-full"
                onClick={handleLinkClick}
              >
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  className="flex items-center justify-center gap-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>{t("viewLive")}</span>
                </Link>
              </Button>
            )}
          </div>

          {(hasSingleGithub || hasBackend || hasFrontend) && (
            <div
              className={`grid ${
                hasBackend && hasFrontend ? "grid-cols-2" : "grid-cols-1"
              } gap-2 w-full`}
            >
              {hasSingleGithub && (
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="w-full"
                  onClick={handleLinkClick}
                >
                  <Link
                    href={project.githubUrl as string}
                    target="_blank"
                    className="flex items-center justify-center gap-2"
                  >
                    <Github className="h-4 w-4" />
                    <span>{t("viewCode")}</span>
                  </Link>
                </Button>
              )}
              {hasBackend && (
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="w-full"
                  onClick={handleLinkClick}
                >
                  <Link
                    href={
                      (
                        project.githubUrl as {
                          backend: string;
                          frontend: string;
                        }
                      ).backend
                    }
                    target="_blank"
                    className="flex items-center justify-center gap-2"
                  >
                    <Github className="h-4 w-4" />
                    <span>{t("backendCode")}</span>
                  </Link>
                </Button>
              )}
              {hasFrontend && (
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="w-full"
                  onClick={handleLinkClick}
                >
                  <Link
                    href={
                      (
                        project.githubUrl as {
                          backend: string;
                          frontend: string;
                        }
                      ).frontend
                    }
                    target="_blank"
                    className="flex items-center justify-center gap-2"
                  >
                    <Github className="h-4 w-4" />
                    <span>{t("frontendCode")}</span>
                  </Link>
                </Button>
              )}
            </div>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}

export default ProjectCard;
