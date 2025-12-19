"use client";

import { useLanguage } from "@/app/_contexts/LanguageContext";
import { Project } from "@/app/_types/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Calendar,
  ExternalLink,
  Github,
  Heart,
  Image as ImageIconLucide,
  Sparkles,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import ImagesModal from "./ImagesModal";

interface ProjectDetailProps {
  project: Project;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const { t, language } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [visibleScreenshots, setVisibleScreenshots] = useState(3);
  const [imageErrors, setImageErrors] = useState<boolean[]>(
    project.screenshots?.map(() => false) || []
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("last_visited_project_id", project.id);
    }
  }, [project.id]);

  useEffect(() => {
    setVisibleScreenshots(3);
    setImageErrors(project.screenshots?.map(() => false) || []);
    setIsModalOpen(false);
    setSelectedImageIndex(0);
  }, [project]);

  const handleImageError = useCallback((index: number) => {
    setImageErrors((prev) => {
      const newErrors = [...prev];
      newErrors[index] = true;
      return newErrors;
    });
  }, []);

  const openModal = useCallback((index: number) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const navigatePrevious = useCallback(() => {
    if (!project.screenshots) return;
    setSelectedImageIndex((prev) =>
      prev > 0 ? prev - 1 : project.screenshots.length - 1
    );
  }, [project.screenshots]);

  const navigateNext = useCallback(() => {
    if (!project.screenshots) return;
    setSelectedImageIndex((prev) =>
      prev < project.screenshots.length - 1 ? prev + 1 : 0
    );
  }, [project.screenshots]);

  const loadMoreScreenshots = useCallback(() => {
    setVisibleScreenshots((prev) =>
      Math.min(prev + 3, project.screenshots?.length || 0)
    );
  }, [project.screenshots]);

  const isGithubUrlObject =
    project.githubUrl && typeof project.githubUrl === "object";
  const hasBackend =
    isGithubUrlObject && "backend" in (project.githubUrl as object);
  const hasFrontend =
    isGithubUrlObject && "frontend" in (project.githubUrl as object);
  const hasSingleGithub = typeof project.githubUrl === "string";

  return (
    <div className="max-w-6xl mx-auto py-12 space-y-8">
      {project.screenshots && (
        <ImagesModal
          isOpen={isModalOpen}
          screenshots={project.screenshots}
          selectedIndex={selectedImageIndex}
          imageErrors={imageErrors}
          projectTitle={project.title}
          onClose={closeModal}
          onNavigatePrevious={navigatePrevious}
          onNavigateNext={navigateNext}
          onSelectImage={setSelectedImageIndex}
          onImageError={handleImageError}
        />
      )}

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <Button
          asChild
          variant="ghost"
          className="gap-2 mb-8 hover:translate-x-1 transition-transform"
        >
          <Link href="/projects">
            <ArrowLeft className="h-4 w-4" />
            {t("backToProjects")}
          </Link>
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="space-y-6"
      >
        <h1 className="text-4xl font-bold tracking-tight">{project.title}</h1>
        <div className="flex flex-wrap gap-6 text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            <span>{project.duration[language]}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            <span>{project.team[language]}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          {project.liveUrl && (
            <Button asChild className="gap-2 transition-all hover:scale-105">
              <Link href={project.liveUrl} target="_blank">
                <ExternalLink className="h-4 w-4" />
                {t("viewLive")}
              </Link>
            </Button>
          )}

          {hasSingleGithub && (
            <Button
              asChild
              variant="outline"
              className="gap-2 transition-all hover:scale-105"
            >
              <Link href={project.githubUrl as string} target="_blank">
                <Github className="h-4 w-4" />
                {t("viewCode")}
              </Link>
            </Button>
          )}

          {hasBackend && (
            <Button
              asChild
              variant="outline"
              className="gap-2 transition-all hover:scale-105"
            >
              <Link
                href={
                  (project.githubUrl as { backend: string; frontend: string })
                    .backend
                }
                target="_blank"
              >
                <Github className="h-4 w-4" />
                {t("backendCode")}
              </Link>
            </Button>
          )}

          {hasFrontend && (
            <Button
              asChild
              variant="outline"
              className="gap-2 transition-all hover:scale-105"
            >
              <Link
                href={
                  (project.githubUrl as { backend: string; frontend: string })
                    .frontend
                }
                target="_blank"
              >
                <Github className="h-4 w-4" />
                {t("frontendCode")}
              </Link>
            </Button>
          )}
        </div>
      </motion.div>

      {project.screenshots && project.screenshots.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4, ease: "easeOut" }}
          className="relative h-[500px] overflow-hidden rounded-xl border border-border shadow-lg cursor-pointer group bg-muted/30"
          onClick={() => openModal(0)}
        >
          {imageErrors[0] ? (
            <div className="w-full h-full flex flex-col items-center justify-center text-muted-foreground">
              <ImageIconLucide className="w-16 h-16 mb-3 opacity-50" />
              <p className="text-sm font-medium">Image not available</p>
            </div>
          ) : (
            <>
              <Image
                src={project.screenshots[0]}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                priority
                quality={95}
                onError={() => handleImageError(0)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-border opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-medium flex items-center gap-2">
                  <ImageIconLucide className="w-4 h-4" />
                  Click to view full size
                </p>
              </div>
            </>
          )}
        </motion.div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
          className="lg:col-span-2 space-y-8"
        >
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">{t("overview")}</h2>
            <p className="text-muted-foreground leading-relaxed">
              {project.fullDescription[language]}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">{t("keyFeatures")}</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project?.features[language]?.map((feature: string) => (
                <motion.li
                  key={feature}
                  className="flex items-start gap-2"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Sparkles className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </section>

          {project.acknowledgment && (
            <Card className="transition-shadow hover:shadow-md">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold text-lg">
                    {t("acknowledgment")}
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  {project.acknowledgment[language]}
                </p>
                {project.acknowledgment.link && (
                  <Button
                    asChild
                    variant="link"
                    className="p-0 hover:translate-x-1 transition-transform"
                  >
                    <Link href={project.acknowledgment.link} target="_blank">
                      {t("learnMore")} <ExternalLink className="h-4 w-4 ml-1" />
                    </Link>
                  </Button>
                )}
              </CardContent>
            </Card>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4, ease: "easeOut" }}
          className="space-y-6"
        >
          <Card className="transition-shadow hover:shadow-md">
            <CardContent className="p-6 space-y-4">
              <h3 className="font-semibold text-lg">{t("technologies")}</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech: string) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="transition-all hover:scale-105"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {project.screenshots && project.screenshots.length > 0 && (
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">{t("screenshots")}</h3>
              <div className="grid grid-cols-1 gap-3">
                {project.screenshots
                  .slice(0, visibleScreenshots)
                  .map((screenshot: string, index: number) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.3 }}
                      className="relative h-48 rounded-lg overflow-hidden cursor-pointer group border border-border"
                      onClick={() => openModal(index)}
                    >
                      {imageErrors[index] ? (
                        <div className="w-full h-full flex flex-col items-center justify-center bg-muted/30">
                          <ImageIconLucide className="w-10 h-10 text-muted-foreground/50" />
                          <p className="mt-1 text-xs text-muted-foreground/50">
                            No image
                          </p>
                        </div>
                      ) : (
                        <>
                          <Image
                            src={screenshot}
                            alt={`Screenshot ${index + 1}`}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                            onError={() => handleImageError(index)}
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                        </>
                      )}
                    </motion.div>
                  ))}
              </div>

              {project.screenshots.length > visibleScreenshots && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                >
                  <Button
                    variant="outline"
                    className="w-full transition-all hover:scale-[1.02]"
                    onClick={loadMoreScreenshots}
                  >
                    {t("loadMore") || "Load More"}
                  </Button>
                </motion.div>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
