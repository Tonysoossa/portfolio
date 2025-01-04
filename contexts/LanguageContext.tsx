"use client";
import React, { createContext, useState, useContext } from "react";

// Import des fichiers de traductions
import fr from "../translations/fr";
import en from "../translations/en";

// Type pour les traductions
type Translations = typeof fr;

// Type pour le contexte de langue
type LanguageContextType = {
  language: "fr" | "en";
  translations: Translations;
  toggleLanguage: () => void;
};

// Initialisation du contexte
export const LanguageContext = createContext<LanguageContextType>({
  language: "fr",
  translations: fr,
  toggleLanguage: () => {},
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<"fr" | "en">("fr");

  // Traductions basées sur la langue actuelle
  const translations = language === "fr" ? fr : en;

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "fr" ? "en" : "fr"));
  };

  return (
    <LanguageContext.Provider value={{ language, translations, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook personnalisé pour utiliser le contexte
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
