"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/lib/locale-context";
import { Navbar } from "@/components/Navbar";

export default function ProductsPage() {
  const { t } = useLocale();
  const handleNotifyClick = () => {
    const notifyBtn = document.querySelector(".products-page .notify-btn") as HTMLButtonElement;
    const notifyInput = document.querySelector(".products-page .notify-input") as HTMLInputElement;
    if (!notifyBtn || !notifyInput) return;
    if (notifyInput.value.includes("@")) {
      notifyBtn.textContent = t("products.serum.notifyAdded");
      notifyBtn.style.background = "#8B7336";
      notifyInput.value = "";
      setTimeout(() => {
        notifyBtn.textContent = t("products.serum.notifyBtn");
        notifyBtn.style.background = "";
      }, 3000);
    } else {
      notifyInput.style.borderColor = "#D4246E";
      setTimeout(() => (notifyInput.style.borderColor = ""), 2000);
    }
  };

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

        {/* Product 1: Wash Bag */}
        <section className="product-showcase">
          <div className="product-showcase-inner">
            <div className="product-showcase-img reveal-left">
              <div className="product-showcase-img-frame" />
              <Image
                src="/product-wash-bag.jpg"
                alt={t("products.washBag.alt")}
                width={700}
                height={700}
                className="product-showcase-image"
              />
            </div>
            <div className="product-showcase-content reveal-right">
              <span className="product-showcase-badge">{t("products.availableNow")}</span>
              <h2 className="product-showcase-title serif">
                {t("products.washBag.title1")}<br /><em>{t("products.washBag.title2")}</em>
              </h2>
              <p className="product-showcase-desc">{t("productsPage.washBagDesc")}</p>
              <ul className="product-showcase-features">
                <li><span className="feat-dot">✦</span> {t("products.washBag.f1")}</li>
                <li><span className="feat-dot">✦</span> {t("products.washBag.f2")}</li>
                <li><span className="feat-dot">✦</span> {t("products.washBag.f3")}</li>
                <li><span className="feat-dot">✦</span> {t("products.washBag.f4")}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Product 2: Serum */}
        <section className="product-showcase product-showcase-reverse">
          <div className="product-showcase-inner">
            <div className="product-showcase-img reveal-right">
              <div className="product-showcase-img-frame" />
              <Image
                src="/product-serum.jpg"
                alt={t("products.serum.alt")}
                width={700}
                height={700}
                className="product-showcase-image"
              />
            </div>
            <div className="product-showcase-content reveal-left">
              <span className="product-showcase-badge coming-soon">{t("products.comingSoon")}</span>
              <h2 className="product-showcase-title serif">
                {t("products.serum.title1")}<br /><em>{t("products.serum.title2")}</em>
              </h2>
              <p className="product-showcase-desc">{t("productsPage.serumDesc")}</p>
              <ul className="product-showcase-features">
                <li><span className="feat-dot">✦</span> {t("products.serum.f1")}</li>
                <li><span className="feat-dot">✦</span> {t("products.serum.f2")}</li>
                <li><span className="feat-dot">✦</span> {t("products.serum.f3")}</li>
                <li><span className="feat-dot">✦</span> {t("products.serum.f4")}</li>
              </ul>
              <div className="product-notify-block reveal">
                <p className="product-notify-label">{t("productsPage.notifyLabel")}</p>
                <div className="notify-form">
                  <input className="notify-input" type="email" placeholder={t("products.serum.notifyPlaceholder")} />
                  <button className="notify-btn" type="button" onClick={handleNotifyClick}>{t("products.serum.notifyBtn")}</button>
                </div>
                <p className="notify-note">{t("products.serum.notifyNote")}</p>
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
