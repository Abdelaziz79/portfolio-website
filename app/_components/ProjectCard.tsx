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

type Props = {
  project: Project;
  index: number;
};

function ProjectCard({ project, index }: Props) {
  const { t, language } = useLanguage();
  return (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Card className="h-full flex flex-col border border-border/50 overflow-hidden group">
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
          <p className="text-sm text-muted-foreground mb-4">
            {project.description[language]}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech: string) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="grid grid-cols-3 gap-2">
          <Button asChild variant="secondary" size="sm" className="w-full">
            <Link
              href={`/projects/${project.id}`}
              className="flex items-center justify-center gap-2"
            >
              <Info className="h-4 w-4" />
              <span>{t("viewDetails")}</span>
            </Link>
          </Button>
          {project.liveUrl && (
            <Button asChild variant="default" size="sm" className="w-full">
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
          {project.githubUrl && (
            <Button asChild variant="outline" size="sm" className="w-full">
              <Link
                href={project.githubUrl}
                target="_blank"
                className="flex items-center justify-center gap-2"
              >
                <Github className="h-4 w-4" />
                <span className="">{t("viewCode")}</span>
              </Link>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}

export default ProjectCard;
