"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useLocale } from "@/lib/locale-context";
import { Navbar } from "@/components/Navbar";

export default function ContactPage() {
  const { t } = useLocale();
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar activeLink="contact" />

      <main className="contact-page">
        <section className="contact-page-hero">
          <div className="contact-page-bg" />
          <div className="contact-page-inner">
            <span className="section-tag reveal">{t("contact.eyebrow")}</span>
            <h1 className="contact-page-title serif reveal">
              {t("contact.titleLine1")}<br />{t("contact.titleLine2")}{t("contact.titleRitual") ? <> <em>{t("contact.titleRitual")}</em></> : null}
            </h1>
            <p className="contact-page-sub reveal">{t("contact.sub")}</p>
            <div className="gold-line reveal" style={{ marginTop: "24px" }} />
          </div>
        </section>

        <section className="contact-page-links">
          <div className="contact-page-cards">
            <a href="mailto:lunorhairextension@gmail.com" className="contact-card reveal">
              <span className="contact-card-icon">✉</span>
              <h3 className="contact-card-title serif">{t("contact.email")}</h3>
              <p className="contact-card-value">lunorhairextension@gmail.com</p>
              <span className="contact-card-hint">{t("contact.emailHint")}</span>
            </a>
            <a href="tel:+905523538559" className="contact-card reveal">
              <span className="contact-card-icon">✆</span>
              <h3 className="contact-card-title serif">{t("contact.phone")}</h3>
              <p className="contact-card-value"><span dir="ltr">+90 552 353 85 59</span></p>
              <span className="contact-card-hint">{t("contact.phoneHint")}</span>
            </a>
            <a href="https://www.instagram.com/lunor_hair/" target="_blank" rel="noopener noreferrer" className="contact-card reveal">
              <span className="contact-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </span>
              <h3 className="contact-card-title serif">{t("contact.instagram")}</h3>
              <p className="contact-card-value">@lunor_hair</p>
              <span className="contact-card-hint">{t("contact.instagramHint")}</span>
            </a>
            <a href="https://www.facebook.com/lunor.hair/" target="_blank" rel="noopener noreferrer" className="contact-card reveal">
              <span className="contact-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </span>
              <h3 className="contact-card-title serif">{t("contact.facebook")}</h3>
              <p className="contact-card-value">lunor.hair</p>
              <span className="contact-card-hint">{t("contact.facebookHint")}</span>
            </a>
            <a href="https://www.tiktok.com/@lunor_hair?lang=en-GB" target="_blank" rel="noopener noreferrer" className="contact-card reveal">
              <span className="contact-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.19 8.19 0 004.79 1.53V6.78a4.85 4.85 0 01-1.02-.09z"/>
                </svg>
              </span>
              <h3 className="contact-card-title serif">{t("contact.tiktok")}</h3>
              <p className="contact-card-value">@lunor_hair</p>
              <span className="contact-card-hint">{t("contact.tiktokHint")}</span>
            </a>
          </div>
        </section>

        <section className="contact-page-cta">
          <Link href="/" className="btn-outline">{t("contact.backToHome")}</Link>
        </section>
      </main>
    </>
  );
}
