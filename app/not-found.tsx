"use client";

import { useLanguage } from "@/app/_contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Home } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFoundPage() {
  const { t } = useLanguage();
  const router = useRouter();

  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 py-12 text-center">
        {/* Animated 404 Number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-8xl font-bold text-primary mb-2">404</h1>
          <div className="h-2 w-24 bg-primary mx-auto rounded-full" />
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-4 mb-8"
        >
          <h2 className="text-3xl font-bold">{t("pageNotFound")}</h2>
          <p className="text-muted-foreground text-lg">
            {t("notFoundDescription")}
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button asChild size="lg" className="gap-2">
            <Link href="/">
              <Home className="h-5 w-5" />
              {t("backToHome")}
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className=" cursor-pointer"
            onClick={() => router.back()}
          >
            <span>{t("goBack")}</span>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
