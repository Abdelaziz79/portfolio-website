"use client";

import { links } from "@/app/_constants/links";
import { useLanguage } from "@/app/_contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const { t, isRTL } = useLanguage();
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { href: "/", label: t("home") },
    { href: "/about", label: t("about") },
    { href: "/projects", label: t("projects") },
    { href: "/contact", label: t("contact") },
    { href: "/blog", label: t("blog") },
    { href: "/resume.pdf", label: t("resume"), external: true },
    { href: "/cv.pdf", label: t("cv"), external: true },
  ];

  const socialLinks = [
    { href: links.github, icon: Github, label: "GitHub" },
    { href: links.linkedin, icon: Linkedin, label: "LinkedIn" },
    {
      href: `https://wa.me/${links.phone}`,
      icon: MessageCircle,
      label: "WhatsApp",
    },
    { href: `mailto:${links.gmail}`, icon: Mail, label: "Email" },
  ];

  return (
    <footer className="mt-auto border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        {/* Main Content */}
        <div className="py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Brand */}
            <div className="text-center lg:text-start">
              <Link href="/" className="inline-block">
                <h2 className="text-xl font-semibold">{t("title")}</h2>
              </Link>
            </div>

            {/* Navigation */}
            <nav
              className="flex flex-wrap items-center justify-center gap-6"
              dir={isRTL ? "rtl" : "ltr"}
            >
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                  {(link.href.startsWith("http") || link.external) && (
                    <ExternalLink className="h-3 w-3" />
                  )}
                </Link>
              ))}
            </nav>

            {/* Social Links */}
            <div className="flex items-center gap-2">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <motion.div
                  key={href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href={href} target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon" className="h-9 w-9">
                      <Icon className="h-4 w-4" />
                      <span className="sr-only">{label}</span>
                    </Button>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t py-5">
          <p className="text-center text-sm text-muted-foreground">
            © {currentYear} {t("allRightsReserved")}
          </p>
        </div>
      </div>
    </footer>
  );
}
