"use client";

import { useLanguage } from "@/app/_contexts/LanguageContext";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowLeft, Home } from "lucide-react";
import Link from "next/link";

function ProjectNotFound() {
  const { t } = useLanguage();
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-6"
      >
        <h1 className="text-4xl font-bold tracking-tight">
          {t("projectNotFound")}
        </h1>
        <p className="text-muted-foreground text-lg max-w-md mx-auto">
          {t("projectNotFoundDescription")}
        </p>
        <div className="flex gap-4 justify-center mt-8">
          <Link
            href="/projects"
            className={cn(buttonVariants({ variant: "default" }), "gap-2")}
          >
            <ArrowLeft className="h-4 w-4" />
            {t("backToProjects")}
          </Link>
          <Link
            href="/"
            className={cn(buttonVariants({ variant: "outline" }), "gap-2")}
          >
            <Home className="h-4 w-4" />
            {t("backToHome")}
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default ProjectNotFound;
