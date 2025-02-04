"use client";

import { useLanguage } from "@/app/_contexts/LanguageContext";
import { Project } from "@/app/_types/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Calendar,
  ExternalLink,
  Github,
  Heart,
  Sparkles,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface ProjectDetailProps {
  project: Project;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const { t, language } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const ImageDialog = () => (
    <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-0">
        <DialogTitle className="sr-only">Project Image Preview</DialogTitle>
        {selectedImage && (
          <div className="relative w-full aspect-square">
            <Image
              src={selectedImage}
              alt="Project screenshot"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              quality={100}
              priority
            />
          </div>
        )}
      </DialogContent>
    </Dialog>
  );

  return (
    <div className="max-w-6xl mx-auto py-12 space-y-8">
      <ImageDialog />

      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <Button asChild variant="ghost" className="gap-2 mb-8">
          <Link href="/projects">
            <ArrowLeft className="h-4 w-4" />
            {t("backToProjects")}
          </Link>
        </Button>
      </motion.div>

      {/* Project Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        <h1 className="text-4xl font-bold tracking-tight">{project.title}</h1>

        {/* Project Meta */}
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

        {/* Action Buttons */}
        <div className="flex gap-4">
          {project.liveUrl && (
            <Button asChild className="gap-2">
              <Link href={project.liveUrl} target="_blank">
                <ExternalLink className="h-4 w-4" />
                {t("viewLive")}
              </Link>
            </Button>
          )}
          {project.githubUrl && (
            <Button asChild variant="outline" className="gap-2">
              <Link href={project.githubUrl} target="_blank">
                <Github className="h-4 w-4" />
                {t("viewCode")}
              </Link>
            </Button>
          )}
        </div>
      </motion.div>

      {/* Main Image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="relative h-[400px] overflow-hidden rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
        onClick={() => setSelectedImage(project.image)}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-2 space-y-8"
        >
          {/* Overview */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">{t("overview")}</h2>
            <p className="text-muted-foreground leading-relaxed">
              {project.fullDescription[language]}
            </p>
          </section>

          {/* Features */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">{t("keyFeatures")}</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project?.features[language]?.map((feature: string) => (
                <li key={feature} className="flex items-start gap-2">
                  <Sparkles className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Challenges & Solutions */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">
              {t("challengesAndSolutions")}
            </h2>
            <Card>
              <CardContent className="grid md:grid-cols-2 gap-6 p-6">
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">{t("challenges")}</h3>
                  <p className="text-muted-foreground">
                    {project.challenges[language].join(", ")}
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">{t("solutions")}</h3>
                  <p className="text-muted-foreground">
                    {project.solutions[language].join(", ")}
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>
        </motion.div>

        {/* Sidebar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-6"
        >
          {/* Technologies */}
          <Card>
            <CardContent className="p-6 space-y-4">
              <h3 className="font-semibold text-lg">{t("technologies")}</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech: string) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Acknowledgment Section */}
          {project.acknowledgment && (
            <Card>
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
                  <Button asChild variant="link" className="p-0">
                    <Link href={project.acknowledgment.link} target="_blank">
                      {t("learnMore")} <ExternalLink className="h-4 w-4 ml-1" />
                    </Link>
                  </Button>
                )}
              </CardContent>
            </Card>
          )}

          {/* Screenshots */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">{t("screenshots")}</h3>
            <div className="space-y-4">
              {project?.screenshots?.map(
                (screenshot: string, index: number) => (
                  <div
                    key={index}
                    className="relative h-48 rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => setSelectedImage(screenshot)}
                  >
                    <Image
                      src={screenshot}
                      alt={`Screenshot ${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                      className="object-cover"
                    />
                  </div>
                )
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
