import React, { createContext, useContext, useState, useEffect } from "react";

type Lang = "en" | "fr";

type LangContextType = {
  language: Lang;
  setLanguage: (l: Lang) => void;
  t: (key: string) => string;
};

const translations: Record<Lang, Record<string, any>> = {
  en: {
    nav: { home: "Home", about: "About Me", projects: "Projects" },
    name: "Vinicius Paraizo",
    landing: {
      title: "Vinicius Paraizo",
      hello: "Hello there! ",
      journey: "My Journey in Computer Science",
    },
    about: { title: "About me" },
    projects: { title: "Projects" },
  },
  fr: {
    nav: { home: "Accueil", about: "À propos", projects: "Projets" },
    name: "Vinicius Paraizo",
    landing: {
      title: "Vinicius Paraizo",
      hello: "Bonjour ! ",
      journey: "Mon parcours en informatique",
    },
    about: { title: "À propos de moi" },
    projects: { title: "Projets" },
  },
};

const LanguageContext = createContext<LangContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Lang>(() => {
    try {
      const saved = localStorage.getItem("site_language");
      return (saved as Lang) || "en";
    } catch (e) {
      return "en";
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("site_language", language);
    } catch (e) {
      // ignore
    }
  }, [language]);

  const t = (key: string) => {
    // support paths like "nav.home" or "landing.title"
    const parts = key.split(".");
    let cur: any = translations[language];
    for (const p of parts) {
      if (!cur) return key;
      cur = cur[p];
    }
    return typeof cur === "string" ? cur : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
};

export default LanguageContext;
