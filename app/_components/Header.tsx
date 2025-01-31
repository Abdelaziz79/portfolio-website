// app/_components/Header.tsx
"use client";

import { useLanguage } from "@/app/_contexts/LanguageContext";
import { useThemeMode } from "@/app/_hooks/useThemeMode";

export default function Header() {
  const { language, toggleLanguage, t, isRTL } = useLanguage();
  const { theme, toggleTheme, mounted } = useThemeMode();

  if (!mounted) {
    return null;
  }

  return (
    <header
      className={`flex justify-between p-4 ${isRTL ? "flex-row-reverse" : ""} `}
    >
      <h1>{t("title")}</h1>
      <div className="flex gap-4">
        <button onClick={toggleLanguage}>
          {language === "en" ? "عربي" : "English"}
        </button>
        <button onClick={toggleTheme}>{theme === "dark" ? "☀️" : "🌙"}</button>
      </div>
    </header>
  );
}
