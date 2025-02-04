"use client";
import ProjectCard from "@/app/_components/ProjectCard";
import { projects } from "@/app/_constants/projects";
import { useLanguage } from "@/app/_contexts/LanguageContext";
import { motion } from "framer-motion";
import { Layout } from "lucide-react";

export default function ProjectsPage() {
  const { t } = useLanguage();

  return (
    <div className="max-w-6xl mx-auto py-12 space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
          <Layout className="h-6 w-6" />
          {t("projects")}
        </h1>
        <p className="text-lg text-muted-foreground">
          {t("projectsDescription")}
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}
