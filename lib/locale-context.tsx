"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import en from "@/messages/en.json";
import ar from "@/messages/ar.json";

const messages = { en, ar } as const;
export type Locale = keyof typeof messages;

function getNested(obj: unknown, path: string): string | undefined {
  const keys = path.split(".");
  let current: unknown = obj;
  for (const key of keys) {
    if (current && typeof current === "object" && key in current) {
      current = (current as Record<string, unknown>)[key];
    } else {
      return undefined;
    }
  }
  return typeof current === "string" ? current : undefined;
}

function interpolate(str: string, vars: Record<string, string>): string {
  return str.replace(/\{(\w+)\}/g, (_, key) => vars[key] ?? `{${key}}`);
}

type LocaleContextValue = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: string, vars?: Record<string, string>) => string;
  dir: "ltr" | "rtl";
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

const STORAGE_KEY = "lunor-locale";

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (stored && (stored === "en" || stored === "ar")) {
      setLocaleState(stored);
    }
    setMounted(true);
  }, []);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, l);
    }
  };

  const t = (key: string, vars?: Record<string, string>): string => {
    const msg = getNested(messages[locale], key) ?? getNested(messages.en, key) ?? key;
    return vars ? interpolate(msg, vars) : msg;
  };

  const value: LocaleContextValue = {
    locale,
    setLocale,
    t,
    dir: locale === "ar" ? "rtl" : "ltr",
  };

  return (
    <LocaleContext.Provider value={value}>
      {/* Apply dir and lang to html on mount - done via Layout wrapper */}
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}
