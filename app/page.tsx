"use client";

import { links } from "@/app/_constants/links";
import { useLanguage } from "@/app/_contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col justify-center max-w-5xl mx-auto py-12 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="order-2 md:order-1"
        >
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                {t("greeting")}{" "}
                <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  {t("me")}
                </span>
              </h1>
              <h2 className="text-xl pt-4 text-muted-foreground ">
                <span className="text-primary">{t("workTitle")}</span>
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("homeDescription")}
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="gap-2">
                <Link href="/contact">
                  <Mail className="h-4 w-4" />
                  {t("contactMe")}
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2">
                <Link href="/projects">
                  {t("viewProjects")}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <Button asChild variant="ghost" size="sm" className="gap-2">
                <Link href="/resume.pdf" target="_blank">
                  <Download className="h-4 w-4" />
                  {t("resume")}
                </Link>
              </Button>
              <Button asChild variant="ghost" size="sm" className="gap-2">
                <Link href={links.github} target="_blank">
                  <Github className="h-4 w-4" />
                  GitHub
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="order-1 md:order-2 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-purple-600 blur-3xl opacity-20 animate-pulse" />
            <div className="relative w-full h-full rounded-full border-2 border-border overflow-hidden">
              <Image
                src="/images/abdelaziz.jpeg"
                alt="Profile picture"
                fill
                sizes="(max-width: 768px) 16rem, 20rem"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
