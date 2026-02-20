"use client";

import { useLocale } from "@/lib/locale-context";

export function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();

  return (
    <div className="language-switcher">
      <button
        type="button"
        onClick={() => setLocale("en")}
        className={locale === "en" ? "active" : ""}
        aria-label="English"
      >
        EN
      </button>
      <span className="lang-divider">|</span>
      <button
        type="button"
        onClick={() => setLocale("ar")}
        className={locale === "ar" ? "active" : ""}
        aria-label="العربية"
      >
        ع
      </button>
    </div>
  );
}
