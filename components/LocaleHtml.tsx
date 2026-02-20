"use client";

import { useEffect } from "react";
import { useLocale } from "@/lib/locale-context";

export function LocaleHtml() {
  const { locale, dir } = useLocale();

  useEffect(() => {
    document.documentElement.lang = locale === "ar" ? "ar" : "en";
    document.documentElement.dir = dir;
  }, [locale, dir]);

  return null;
}
