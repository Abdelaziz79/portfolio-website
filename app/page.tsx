"use client";

import { links } from "@/app/_constants/links";
import { useLanguage } from "@/app/_contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Download, Github, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  const { t, isRTL } = useLanguage();

  return (
    <>
      <div className="min-h-[calc(100vh-4rem)] flex flex-col justify-center max-w-5xl mx-auto py-12 px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="order-2 md:order-1"
          >
            <div className="space-y-6">
              <div className="space-y-2">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
                    {t("workTitle")}
                  </p>
                  <h1 className="text-4xl font-bold tracking-tight sm:text-5xl pt-4">
                    {t("greeting")}{" "}
                    <span className="text-primary">{t("me")}</span>
                  </h1>
                </motion.div>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-lg text-muted-foreground leading-relaxed max-w-lg"
              >
                {t("homeDescription")}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button
                  asChild
                  size="lg"
                  className="gap-2 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <Link href="/contact">
                    <Mail className="h-4 w-4" />
                    {t("contactMe")}
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="gap-2 hover:bg-accent"
                >
                  <Link href="/projects">
                    {t("viewProjects")}
                    {isRTL ? (
                      <ArrowLeft className="h-4 w-4" />
                    ) : (
                      <ArrowRight className="h-4 w-4" />
                    )}
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex items-center gap-3 pt-6 border-t border-border/50"
              >
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="gap-2 hover:text-primary"
                >
                  <Link href="/resume.pdf" target="_blank">
                    <Download className="h-4 w-4" />
                    Resume
                  </Link>
                </Button>
                <div className="h-4 w-px bg-border" />
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="gap-2 hover:text-primary"
                >
                  <Link href="/cv.pdf" target="_blank">
                    <Download className="h-4 w-4" />
                    CV
                  </Link>
                </Button>
                <div className="h-4 w-px bg-border" />
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="gap-2 hover:text-primary"
                >
                  <Link href={links.github} target="_blank">
                    <Github className="h-4 w-4" />
                    GitHub
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="order-1 md:order-2 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 via-purple-500/5 to-primary/10 blur-xl" />
              <div className="relative w-full h-full rounded-full border border-border/50 overflow-hidden shadow-2xl bg-background">
                <Image
                  src="/images/abdelaziz.png"
                  alt="Profile picture"
                  fill
                  sizes="(max-width: 768px) 18rem, 24rem"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary/5 to-purple-500/5 blur-lg -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
