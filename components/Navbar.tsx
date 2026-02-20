"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useLocale } from "@/lib/locale-context";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

type NavbarProps = {
  activeLink?: "products" | "contact";
  homeHref?: string;
};

export function Navbar({ activeLink, homeHref = "/#hero" }: NavbarProps) {
  const { t } = useLocale();
  const navbarRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const navbar = navbarRef.current;
    const handleScroll = () => {
      if (navbar) navbar.classList.toggle("scrolled", window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav id="navbar" ref={navbarRef}>
        <div className="nav-inner">
          <button
            type="button"
            className="nav-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            aria-expanded={menuOpen}
          >
            <span className={menuOpen ? "open" : ""} />
            <span className={menuOpen ? "open" : ""} />
            <span className={menuOpen ? "open" : ""} />
          </button>
          <Link href={homeHref} className="nav-logo" onClick={closeMenu}>
            <img src="/logo.png" alt="Lunor Hair Extensions" className="nav-logo-img" />
          </Link>
          <div className="nav-right">
            <LanguageSwitcher />
            <ul className="nav-links">
              <li><Link href="/products" className={activeLink === "products" ? "nav-active" : ""} onClick={closeMenu}>{t("nav.products")}</Link></li>
              <li><Link href="/contact" className={activeLink === "contact" ? "nav-active" : ""} onClick={closeMenu}>{t("nav.contact")}</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      <div className={`nav-overlay ${menuOpen ? "open" : ""}`} onClick={closeMenu} aria-hidden="true" />
      <div className={`nav-menu ${menuOpen ? "open" : ""}`}>
        <Link href="/products" className={activeLink === "products" ? "nav-active" : ""} onClick={closeMenu}>{t("nav.products")}</Link>
        <Link href="/contact" className={activeLink === "contact" ? "nav-active" : ""} onClick={closeMenu}>{t("nav.contact")}</Link>
      </div>
    </>
  );
}
