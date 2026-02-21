"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/lib/locale-context";
import { Navbar } from "@/components/Navbar";

export default function ProductsPage() {
  const { t } = useLocale();

  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar activeLink="products" />

      <main className="products-page">
        {/* Page Hero */}
        <section className="products-hero">
          <div className="products-hero-bg" />
          <div className="container products-hero-inner">
            <span className="section-tag reveal">{t("productsPage.tag")}</span>
            <h1 className="products-hero-title serif reveal">
              {t("productsPage.titleLine1")}<br /><em>{t("productsPage.perfection")}</em>
            </h1>
            <p className="products-hero-sub reveal">{t("productsPage.subtitle")}</p>
            <div className="gold-line reveal" style={{ marginTop: "24px" }} />
          </div>
        </section>

        {/* Product Module 1: Wash Bag - Image left, card right */}
        <section className="product-module">
          <div className="product-module-inner product-module-layout-1">
            <div className="product-module-shape product-module-shape-tl" aria-hidden />
            <div className="product-module-shape product-module-shape-tr" aria-hidden />
            <div className="product-module-img-wrap reveal-left">
              <div className="product-module-gallery">
                <Image src="/images/bag 1.2.png" alt={t("products.washBag.alt")} width={400} height={400} className="product-module-img product-module-img-main" />
                <Image src="/images/bag 2.2png.png" alt={t("products.washBag.alt")} width={400} height={400} className="product-module-img product-module-img-secondary" />
              </div>
            </div>
            <div className="product-module-card-wrap product-module-card-right reveal-right">
              <div className="product-module-card">
                <span className="product-module-date">{t("products.availableNow")}</span>
                <h2 className="product-module-title serif">
                  {t("products.washBag.title1")} <em>{t("products.washBag.title2")}</em>
                </h2>
                <div className="product-module-divider" />
                <p className="product-module-desc">{t("productsPage.washBagDesc")}</p>
                <ul className="product-module-features">
                  <li><span className="feat-dot">✦</span> {t("products.washBag.f1")}</li>
                  <li><span className="feat-dot">✦</span> {t("products.washBag.f2")}</li>
                  <li><span className="feat-dot">✦</span> {t("products.washBag.f3")}</li>
                  <li><span className="feat-dot">✦</span> {t("products.washBag.f4")}</li>
                </ul>
                <Link href="/contact" className="product-module-btn">{t("productsPage.getInTouch")}</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Product Module 2: Serum - Card left, image right */}
        <section className="product-module product-module-alt">
          <div className="product-module-inner product-module-layout-2">
            <div className="product-module-shape product-module-shape-bl" aria-hidden />
            <div className="product-module-shape product-module-shape-br" aria-hidden />
            <div className="product-module-card-wrap product-module-card-left reveal-left">
              <div className="product-module-card">
                <span className="product-module-date product-module-date-coming">{t("products.comingSoon")}</span>
                <h2 className="product-module-title serif">
                  {t("products.serum.title1")} <em>{t("products.serum.title2")}</em>
                </h2>
                <div className="product-module-divider" />
                <p className="product-module-desc">{t("productsPage.serumDesc")}</p>
                <ul className="product-module-features">
                  <li><span className="feat-dot">✦</span> {t("products.serum.f1")}</li>
                  <li><span className="feat-dot">✦</span> {t("products.serum.f2")}</li>
                  <li><span className="feat-dot">✦</span> {t("products.serum.f3")}</li>
                  <li><span className="feat-dot">✦</span> {t("products.serum.f4")}</li>
                </ul>
                <Link href="/contact" className="product-module-btn">{t("productsPage.getInTouch")}</Link>
              </div>
            </div>
            <div className="product-module-img-wrap reveal-right">
              <div className="product-module-gallery">
                <Image src="/images/serum 1.2.png" alt={t("products.serum.alt")} width={400} height={400} className="product-module-img product-module-img-main" />
                <Image src="/images/serum 2.2.png" alt={t("products.serum.alt")} width={400} height={400} className="product-module-img product-module-img-secondary" />
              </div>
            </div>
          </div>
        </section>

        {/* Values teaser */}
        <section className="products-values">
          <div className="container">
            <div className="products-values-grid">
              <div className="products-value-item reveal">
                <span className="products-value-icon">🌿</span>
                <h4 className="products-value-title serif">{t("productsPage.values.ingredients")}</h4>
                <p className="products-value-desc">{t("productsPage.values.ingredientsDesc")}</p>
              </div>
              <div className="products-value-item reveal">
                <span className="products-value-icon">✨</span>
                <h4 className="products-value-title serif">{t("productsPage.values.aesthetics")}</h4>
                <p className="products-value-desc">{t("productsPage.values.aestheticsDesc")}</p>
              </div>
              <div className="products-value-item reveal">
                <span className="products-value-icon">💎</span>
                <h4 className="products-value-title serif">{t("productsPage.values.extendLife")}</h4>
                <p className="products-value-desc">{t("productsPage.values.extendLifeDesc")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA strip */}
        <section className="products-cta">
          <div className="container">
            <p className="products-cta-text serif">{t("productsPage.ctaText")}</p>
            <Link href="/contact" className="btn-outline" style={{ marginTop: "16px" }}>
              {t("productsPage.getInTouch")}
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
