"use client";

import Certification from "@/app/_components/Certification";
import Experience from "@/app/_components/Experience";
import Skill from "@/app/_components/Skill";
import { certifications } from "@/app/_constants/certifications";
import { experiences } from "@/app/_constants/experiences";
import { skills } from "@/app/_constants/skills";
import { useLanguage } from "@/app/_contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Award, Code, GraduationCap, Trophy, User } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  const { t, language } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto py-12 px-6 space-y-12">
      {/* Hero Section with Profile */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid md:grid-cols-[2fr,1fr] gap-8 items-center"
      >
        <div className="space-y-6">
          <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
            <User className="h-6 w-6" />
            {t("aboutMe")}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t("aboutDescription")}
          </p>
        </div>
        <div className="relative mx-auto w-48 h-48">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-purple-600 blur-2xl opacity-20" />
          <div className="relative w-full h-full rounded-full border-2 border-border overflow-hidden">
            <Image
              src="/images/abdelaziz.jpeg" // Add your profile image here
              alt="Profile picture"
              fill
              sizes="(max-width: 768px) 16rem, 20rem"
              className="object-cover"
            />
          </div>
        </div>
      </motion.div>

      {/* Skills Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="space-y-6"
      >
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <Code className="h-5 w-5" />
          {t("skills")}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {skills.map((skill) => (
            <Skill key={skill} skill={skill} />
          ))}
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="space-y-6"
      >
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <Trophy className="h-5 w-5" />
          {t("experience")}
        </h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Experience key={index} exp={exp} lang={language} />
          ))}
        </div>
      </motion.section>

      {/* Certifications Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="space-y-6"
      >
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <Award className="h-5 w-5" />
          {t("certifications")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <Certification key={cert.id} cert={cert} lang={language} />
          ))}
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="space-y-6"
      >
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <GraduationCap className="h-5 w-5" />
          {t("education")}
        </h2>
        <Card className="border border-border/50 hover:border-primary/50 transition-colors">
          <CardContent className="p-6 space-y-2">
            <h3 className="font-semibold">{t("educationTitle")}</h3>
            <p className="text-sm text-muted-foreground">
              {t("educationDate")}
            </p>
            <p className="text-sm leading-relaxed">
              {t("educationDescription")}
            </p>
          </CardContent>
        </Card>
      </motion.section>
    </div>
  );
}
