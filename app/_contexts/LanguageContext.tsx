"use client";

import ar from "@/app/_locales/ar";
import en from "@/app/_locales/en";
import React, { createContext, useContext, useEffect, useState } from "react";

export type Language = "en" | "ar";
export type Translations = typeof en;

interface LanguageContextType {
  language: Language;
  isRTL: boolean;
  toggleLanguage: () => void;
  t: (key: keyof Translations) => string;
}

const translations = {
  en,
  ar,
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [currentLocale, setCurrentLocale] = useState<Language>("en");

  useEffect(() => {
    // Get language from localStorage or browser preference
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage) {
      setCurrentLocale(savedLanguage);
      updateDocumentSettings(savedLanguage);
    }
  }, []);

  const updateDocumentSettings = (locale: Language) => {
    // Update direction
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";

    // Update lang attribute
    document.documentElement.lang = locale;
  };

  const toggleLanguage = () => {
    const newLocale = currentLocale === "en" ? "ar" : "en";
    updateDocumentSettings(newLocale);
    setCurrentLocale(newLocale);
    localStorage.setItem("language", newLocale);
  };

  const t = (key: keyof Translations): string => {
    return translations[currentLocale]?.[key] || translations.en[key];
  };

  const value = {
    language: currentLocale,
    isRTL: currentLocale === "ar",
    toggleLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      <div
        className={`${currentLocale === "ar" ? "font-arabic" : "font-latin"} `}
      >
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

// Custom hook to use the language context
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
