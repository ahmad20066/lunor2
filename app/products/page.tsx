"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProductsPage() {
  const navbarRef = useRef<HTMLElement>(null);

  const handleNotifyClick = () => {
    const notifyBtn = document.querySelector(".products-page .notify-btn") as HTMLButtonElement;
    const notifyInput = document.querySelector(".products-page .notify-input") as HTMLInputElement;
    if (!notifyBtn || !notifyInput) return;
    if (notifyInput.value.includes("@")) {
      notifyBtn.textContent = "✓ Added!";
      notifyBtn.style.background = "#8B7336";
      notifyInput.value = "";
      setTimeout(() => {
        notifyBtn.textContent = "Notify Me";
        notifyBtn.style.background = "";
      }, 3000);
    } else {
      notifyInput.style.borderColor = "#D4246E";
      setTimeout(() => (notifyInput.style.borderColor = ""), 2000);
    }
  };

  useEffect(() => {
    const navbar = navbarRef.current;
    const handleScroll = () => {
      if (navbar) navbar.classList.toggle("scrolled", window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      <nav id="navbar" ref={navbarRef}>
        <div className="nav-inner">
          <Link href="/" className="nav-logo">
            Lun<span>o</span>r
          </Link>
          <ul className="nav-links">
            <li><Link href="/products" className="nav-active">Products</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
      </nav>

      <main className="products-page">
        {/* Page Hero */}
        <section className="products-hero">
          <div className="products-hero-bg" />
          <div className="container products-hero-inner">
            <span className="section-tag reveal">Our Formulas</span>
            <h1 className="products-hero-title serif reveal">
              Crafted for<br /><em>Extension Perfection</em>
            </h1>
            <p className="products-hero-sub reveal">
              Premium care essentials designed to protect, nourish, and extend the life of your hair extensions.
            </p>
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
                alt="Lunor Extension Wash Bag"
                width={700}
                height={700}
                className="product-showcase-image"
              />
            </div>
            <div className="product-showcase-content reveal-right">
              <span className="product-showcase-badge">Available Now</span>
              <h2 className="product-showcase-title serif">
                Extension<br /><em>Wash Bag</em>
              </h2>
              <p className="product-showcase-desc">
                Washing your extensions has never felt so luxurious. The Lunor Extension Wash Bag is designed to protect your hair during machine washing — preventing tangles, stretch, and damage while keeping every strand perfectly maintained.
              </p>
              <ul className="product-showcase-features">
                <li><span className="feat-dot">✦</span> Fine-mesh premium netting protects every strand</li>
                <li><span className="feat-dot">✦</span> Gold tassel & satin drawstring closure</li>
                <li><span className="feat-dot">✦</span> Prevents tangling, matting & heat damage</li>
                <li><span className="feat-dot">✦</span> Elegant gold LUNOR emblem plate</li>
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
                alt="Lunor Extension Detangler Serum"
                width={700}
                height={700}
                className="product-showcase-image"
              />
            </div>
            <div className="product-showcase-content reveal-left">
              <span className="product-showcase-badge coming-soon">Coming Soon</span>
              <h2 className="product-showcase-title serif">
                Extension Detangler<br /><em>Serum</em>
              </h2>
              <p className="product-showcase-desc">
                Our most anticipated formula yet. A lightweight, high-performance treatment designed to eliminate knots, restore silk-smooth texture, and extend the lifespan of your extensions with every use.
              </p>
              <ul className="product-showcase-features">
                <li><span className="feat-dot">✦</span> Instant detangle with zero breakage</li>
                <li><span className="feat-dot">✦</span> Restores shine, softness & natural flow</li>
                <li><span className="feat-dot">✦</span> Heat protection up to 230°C</li>
                <li><span className="feat-dot">✦</span> Premium plant-based ingredients</li>
              </ul>
              <div className="product-notify-block reveal">
                <p className="product-notify-label">Be the first to know when it launches</p>
                <div className="notify-form">
                  <input className="notify-input" type="email" placeholder="Your email address..." />
                  <button className="notify-btn" type="button" onClick={handleNotifyClick}>Notify Me</button>
                </div>
                <p className="notify-note">✦ No spam. Launch announcement only.</p>
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
                <h4 className="products-value-title serif">Premium Ingredients</h4>
                <p className="products-value-desc">Only the finest botanicals in every formula</p>
              </div>
              <div className="products-value-item reveal">
                <span className="products-value-icon">✨</span>
                <h4 className="products-value-title serif">Luxury Aesthetics</h4>
                <p className="products-value-desc">As beautiful on your vanity as on your hair</p>
              </div>
              <div className="products-value-item reveal">
                <span className="products-value-icon">💎</span>
                <h4 className="products-value-title serif">Extend Hair Life</h4>
                <p className="products-value-desc">Engineered to protect your investment</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA strip */}
        <section className="products-cta">
          <div className="container">
            <p className="products-cta-text serif">Questions about our products?</p>
            <Link href="/contact" className="btn-outline" style={{ marginTop: "16px" }}>
              Get In Touch
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
