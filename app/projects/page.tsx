"use client";

import ProjectCard from "@/app/_components/ProjectCard";
import { useLanguage } from "@/app/_contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Layers } from "lucide-react";
import { useState } from "react";
import { projects } from "../_constants/projects";

export default function ProjectsPage() {
  const { t } = useLanguage();
  const [visibleProjects, setVisibleProjects] = useState(6);

  const loadMoreProjects = () => {
    setVisibleProjects((prev) => Math.min(prev + 6, projects.length));
  };

  const hasMoreProjects = visibleProjects < projects.length;

  return (
    <div className="max-w-7xl mx-auto py-12 space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-4"
      >
        <div className="flex items-center gap-2">
          <Layers className="h-6 w-6" />
          <h1 className="text-4xl font-bold tracking-tight">{t("projects")}</h1>
        </div>
        <p className="text-muted-foreground text-lg">
          {t("projectsDescription")}
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.slice(0, visibleProjects).map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Load More Button */}
      {hasMoreProjects && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="flex justify-center pt-4"
        >
          <Button
            onClick={loadMoreProjects}
            variant="outline"
            size="lg"
            className="min-w-[200px] transition-all hover:scale-[1.02]"
          >
            {t("loadMore")}
          </Button>
        </motion.div>
      )}

      {/* End Message */}
      {!hasMoreProjects && projects.length > 6 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="flex justify-center pt-4"
        >
          <p className="text-muted-foreground text-sm">
            {t("allProjectsLoaded")}
          </p>
        </motion.div>
      )}
    </div>
  );
}
