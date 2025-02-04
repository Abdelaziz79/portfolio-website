"use client";

import { links } from "@/app/_constants/links";
import { useLanguage } from "@/app/_contexts/LanguageContext";
import { useThemeMode } from "@/app/_hooks/useThemeMode";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  CodeIcon,
  GithubIcon,
  GlobeIcon,
  HomeIcon,
  LinkedinIcon,
  MailIcon,
  MenuIcon,
  MoonIcon,
  SunIcon,
  UserIcon,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const { language, toggleLanguage, t, isRTL } = useLanguage();
  const { theme, toggleTheme, mounted } = useThemeMode();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  const navItems = [
    { href: "/", label: t("home"), icon: HomeIcon },
    { href: "/about", label: t("about"), icon: UserIcon },
    { href: "/projects", label: t("projects"), icon: CodeIcon },
    { href: "/contact", label: t("contact"), icon: MailIcon },
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
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        "border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        isScrolled ? "border-border shadow-md" : "border-transparent",
        isRTL ? "flex-row-reverse" : ""
      )}
    >
      {/* Outer container for full-width background */}
      <div className="w-full mx-auto">
        {/* Inner container for content with consistent padding */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo Section */}
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative z-10"
              >
                <h1 className="text-xl font-bold tracking-tighter">
                  <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                    {t("title")}
                  </span>
                </h1>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-4 flex-1 justify-end">
              {/* Main Navigation Items */}
              <div className="flex items-center gap-1">
                {navItems.map(({ href, label, icon: Icon }) => (
                  <Link key={href} href={href}>
                    <Button variant="ghost" className="gap-2 px-3">
                      <Icon className="h-4 w-4" />
                      {label}
                    </Button>
                  </Link>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-2 border-l pl-4 ml-4">
                {socialLinks.map(({ href, icon: Icon, label }) => (
                  <Link
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      className="hover:scale-110 transition-transform w-9 h-9"
                    >
                      <Icon className="h-4 w-4" />
                      <span className="sr-only">{label}</span>
                    </Button>
                  </Link>
                ))}
              </div>

              {/* Language and Theme Toggles */}
              <div className="flex items-center gap-2 border-l pl-4 ml-4">
                <Button
                  variant="ghost"
                  onClick={toggleLanguage}
                  className="gap-2 transition-transform hover:scale-105"
                >
                  <GlobeIcon className="h-4 w-4" />
                  <span className="font-medium">
                    {language === "en" ? "عربي" : "English"}
                  </span>
                </Button>

                <Button
                  variant="ghost"
                  onClick={toggleTheme}
                  className="gap-2 transition-transform hover:scale-105 w-10"
                >
                  <motion.div
                    initial={false}
                    animate={{ rotate: theme === "dark" ? 180 : 0 }}
                  >
                    {theme === "dark" ? (
                      <SunIcon className="h-4 w-4" />
                    ) : (
                      <MoonIcon className="h-4 w-4" />
                    )}
                  </motion.div>
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </div>
            </nav>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="transition-transform hover:scale-105"
                  >
                    <MenuIcon className="h-5 w-5" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[200px]">
                  {navItems.map(({ href, label, icon: Icon }) => (
                    <Link key={href} href={href}>
                      <DropdownMenuItem className="gap-2 cursor-pointer">
                        <Icon className="h-4 w-4" />
                        <span>{label}</span>
                      </DropdownMenuItem>
                    </Link>
                  ))}

                  <DropdownMenuSeparator />

                  {socialLinks.map(({ href, label, icon: Icon }) => (
                    <Link
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <DropdownMenuItem className="gap-2 cursor-pointer">
                        <Icon className="h-4 w-4" />
                        <span>{label}</span>
                      </DropdownMenuItem>
                    </Link>
                  ))}

                  <DropdownMenuSeparator />

                  <DropdownMenuItem
                    onClick={toggleLanguage}
                    className="gap-2 cursor-pointer"
                  >
                    <GlobeIcon className="h-4 w-4" />
                    <span>{language === "en" ? "عربي" : "English"}</span>
                  </DropdownMenuItem>

                  <DropdownMenuItem
                    onClick={toggleTheme}
                    className="gap-2 cursor-pointer"
                  >
                    {theme === "dark" ? (
                      <SunIcon className="h-4 w-4" />
                    ) : (
                      <MoonIcon className="h-4 w-4" />
                    )}
                    <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
