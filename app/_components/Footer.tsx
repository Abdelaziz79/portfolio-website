"use client";

import { links } from "@/app/_constants/links";
import { useLanguage } from "@/app/_contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ExternalLinkIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const { t } = useLanguage();

  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: t("navigation"),
      links: [
        { href: "/", label: t("home") },
        { href: "/about", label: t("about") },
        { href: "/projects", label: t("projects") },
        { href: "/contact", label: t("contact") },
      ],
    },
    {
      title: t("resources"),
      links: [
        { href: "/blog", label: t("blog") },
        { href: "/resume.pdf", label: t("resume") },
      ],
    },
  ];

  const socialLinks = [
    {
      href: links.github,
      icon: GithubIcon,
      label: "GitHub",
    },
    {
      href: links.linkedin,
      icon: LinkedinIcon,
      label: "LinkedIn",
    },
    {
      href: `https://wa.me/${links.phone}`,
      icon: MessageCircle,
      label: "WhatsApp",
    },
    {
      href: `mailto:${links.gmail}`,
      icon: MailIcon,
      label: "Email",
    },
  ];

  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-8 md:py-12">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-3">
            {/* Brand Section - Full width on mobile */}
            <div className="col-span-2 sm:col-span-1 space-y-4">
              <h2 className="text-xl font-bold tracking-tighter">
                <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  {t("title")}
                </span>
              </h2>
              <p className="text-sm text-muted-foreground max-w-xs">
                {t("footerDescription")}
              </p>
              {/* Social Links */}
              <div className="flex gap-2 pt-2">
                {socialLinks.map(({ href, icon: Icon, label }) => (
                  <motion.div
                    key={href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Link href={href} target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-9 w-9 hover:bg-accent"
                      >
                        <Icon className="h-4 w-4" />
                        <span className="sr-only">{label}</span>
                      </Button>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Navigation Links - 2 columns on mobile */}
            {footerLinks.map((section) => (
              <div key={section.title} className="col-span-1">
                <h3 className="font-semibold mb-3 text-sm tracking-wide">
                  {section.title}
                </h3>
                <ul className="space-y-2.5">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1.5 hover:underline"
                      >
                        {link.label}
                        {link.href.startsWith("http") && (
                          <ExternalLinkIcon className="h-3 w-3" />
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t py-6">
          <p className="text-sm text-muted-foreground text-center">
            © {currentYear} {t("title")}. {t("allRightsReserved")}
          </p>
        </div>
      </div>
    </footer>
  );
}
