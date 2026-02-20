"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const navbarRef = useRef<HTMLElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const container = particlesRef.current;
    if (!container) return;
    const colors = ["#C9A84C", "#D4246E", "#F2D2D2"];
    for (let i = 0; i < 18; i++) {
      const p = document.createElement("div");
      p.className = "particle";
      p.style.cssText = `
        left: ${Math.random() * 100}%;
        top: ${60 + Math.random() * 40}%;
        width: ${2 + Math.random() * 4}px;
        height: ${2 + Math.random() * 4}px;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        animation-duration: ${4 + Math.random() * 6}s;
        animation-delay: ${Math.random() * 6}s;
      `;
      container.appendChild(p);
    }
    return () => {
      while (container.firstChild) container.removeChild(container.firstChild);
    };
  }, []);

  const handleNotifyClick = () => {
    const notifyBtn = document.querySelector(".notify-btn") as HTMLButtonElement;
    const notifyInput = document.querySelector(".notify-input") as HTMLInputElement;
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

  return (
    <>
      <nav id="navbar" ref={navbarRef}>
        <div className="nav-inner">
          <Link href="/#hero" className="nav-logo">
            Lun<span>o</span>r
          </Link>
          <ul className="nav-links">
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
      </nav>

      <section id="hero">
        <svg className="hero-floral hero-floral-tl" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M80 300 Q120 200 200 180 Q160 120 100 140 Q60 80 120 60 Q180 40 220 100 Q260 40 300 80 Q320 140 260 160 Q340 180 320 240 Q300 300 240 280 Q260 340 200 360 Q140 380 120 320 Q80 360 60 300" stroke="#8B7336" strokeWidth="1.5" fill="none"/>
          <circle cx="200" cy="180" r="8" fill="none" stroke="#8B7336" strokeWidth="1"/>
          <path d="M50 150 Q70 120 100 130" stroke="#8B7336" strokeWidth="1" fill="none"/>
          <path d="M150 50 Q170 20 200 30" stroke="#8B7336" strokeWidth="1" fill="none"/>
          <ellipse cx="310" cy="90" rx="12" ry="20" stroke="#8B7336" strokeWidth="1" fill="none" transform="rotate(-30 310 90)"/>
          <ellipse cx="260" cy="50" rx="8" ry="16" stroke="#8B7336" strokeWidth="1" fill="none" transform="rotate(20 260 50)"/>
          <path d="M100 200 Q80 220 90 250 Q100 270 120 260" stroke="#8B7336" strokeWidth="1" fill="none"/>
        </svg>
        <div className="particles" id="particles" ref={particlesRef} />
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <div className="dot" />
              Premium Hair Extensions
            </div>
            <h1 className="hero-title serif">
              Where <em>Luxury</em><br />
              Meets Hair<br />
              <span className="pink-word">Perfection</span>
            </h1>
            <p className="hero-subtitle">
              Premium formulas crafted to protect, nourish, and extend the life of your extensions — because your hair deserves the finest rituals.
            </p>
            <div className="hero-ctas">
              <Link href="/#extensions" className="btn-primary">Explore Extensions</Link>
              <Link href="/products" className="btn-outline">Discover Products</Link>
            </div>
          </div>
          <div className="hero-image-wrap">
            <Image src="/hero.jpg" alt="Lunor luxury hair care" className="hero-img" width={460} height={460} />
            <span className="hero-sparkle hs1">✦</span>
            <span className="hero-sparkle hs2">✦</span>
            <span className="hero-sparkle hs3">✦</span>
          </div>
        </div>
        <div className="scroll-indicator">
          <span>Scroll</span>
          <div className="scroll-mouse" />
        </div>
      </section>

      <section id="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-img-wrap reveal-left">
              <div className="about-img-frame" />
              <Image src="/about.jpg" alt="Lunor product" className="about-img" width={600} height={600} />
              <div className="about-img-accent">
                <span className="num serif">3+</span>
                <span className="label">years of<br />research</span>
              </div>
            </div>
            <div className="about-text reveal-right">
              <span className="section-tag">Our Story</span>
              <h2 className="section-title serif">
                Born from<br /><em>Passion</em> for<br />Flawless Hair
              </h2>
              <p className="about-body">
                Lunor is a premium beauty brand dedicated to elevating hair extension care and redefining modern hair rituals. Born from a passion for luxury, performance, and innovation — we were created to solve the real problems women face with hair extensions.
              </p>
              <div className="about-quote">
                <p>&quot;We don&apos;t just create products. We create rituals, confidence, and unforgettable hair experiences.&quot;</p>
                <cite>— Lunor, Hair Extensions</cite>
              </div>
              <p className="about-body">
                From our signature Shine Bomb Ampoules to our innovative Extension Survival Kit, every Lunor product is crafted with high-performance formulas, premium ingredients, and luxurious aesthetics.
              </p>
              <Link href="/products" className="btn-primary" style={{ width: "fit-content" }}>Explore Our Products</Link>
            </div>
          </div>
        </div>
      </section>

      <section id="extensions">
        <div className="container">
          <div className="extensions-header reveal">
            <span className="section-tag">Our Collections</span>
            <h2 className="section-title serif" style={{ textAlign: "center" }}>
              Find Your Perfect<br /><em>Extension</em>
            </h2>
            <div className="gold-line" style={{ marginTop: "20px" }} />
          </div>
          <div className="extensions-grid">
            <div className="ext-card reveal" style={{ transitionDelay: "0.1s" }}>
              <span className="ext-card-bg-number">01</span>
              <div className="ext-icon">
                <div className="ext-icon-circle">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#8B7336" strokeWidth="1.5">
                    <path d="M12 2C12 2 8 6 8 11C8 13.8 9.8 16.2 12 17C14.2 16.2 16 13.8 16 11C16 6 12 2 12 2Z"/>
                    <path d="M12 17V22M9 22H15"/>
                  </svg>
                </div>
              </div>
              <span className="ext-card-tag">Most Popular</span>
              <h3 className="ext-card-title serif">Clip-In<br />Extensions</h3>
              <p className="ext-card-desc">
                The perfect solution for instant length and volume — no commitment needed. Easy to apply at home, removable in seconds, and completely damage-free.
              </p>
              <ul className="ext-card-features">
                <li>Instant transformation at home</li>
                <li>Zero damage to natural hair</li>
                <li>Available in all shades & lengths</li>
                <li>Perfect for daily wear or special occasions</li>
              </ul>
            </div>
            <div className="ext-card reveal" style={{ transitionDelay: "0.2s" }}>
              <span className="ext-card-bg-number">02</span>
              <div className="ext-icon">
                <div className="ext-icon-circle">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#8B7336" strokeWidth="1.5">
                    <path d="M5 6H19M5 10H19M5 14H14M5 18H11"/>
                    <path d="M17 14L19 16L23 12"/>
                  </svg>
                </div>
              </div>
              <span className="ext-card-tag">Semi-Permanent</span>
              <h3 className="ext-card-title serif">Tape-In<br />Extensions</h3>
              <p className="ext-card-desc">
                A seamless, natural look that blends effortlessly with your hair. Lightweight adhesive wefts lie flat against the scalp for invisible coverage.
              </p>
              <ul className="ext-card-features">
                <li>Virtually undetectable blend</li>
                <li>Lightweight, flat adhesive wefts</li>
                <li>Lasts 6–8 weeks before re-application</li>
                <li>Gentle on fine, delicate hair</li>
              </ul>
            </div>
            <div className="ext-card reveal" style={{ transitionDelay: "0.3s" }}>
              <span className="ext-card-bg-number">03</span>
              <div className="ext-icon">
                <div className="ext-icon-circle">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#8B7336" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="2"/>
                    <path d="M12 2V4M12 20V22M2 12H4M20 12H22"/>
                    <path d="M5.6 5.6L7 7M17 17L18.4 18.4M18.4 5.6L17 7M7 17L5.6 18.4"/>
                  </svg>
                </div>
              </div>
              <span className="ext-card-tag">Premium Quality</span>
              <h3 className="ext-card-title serif">Nano<br />Extensions</h3>
              <p className="ext-card-desc">
                The finest, most discreet extension technique available. Ultra-tiny nano rings are virtually invisible and protect your natural hair through the process.
              </p>
              <ul className="ext-card-features">
                <li>Smallest, most discreet method</li>
                <li>No heat, glue or chemicals required</li>
                <li>Natural movement & incredible feel</li>
                <li>Reusable and long-lasting result</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="products">
        <div className="container">
          <div className="products-header reveal">
            <span className="section-tag">Our Formulas</span>
            <h2 className="section-title serif" style={{ textAlign: "center" }}>
              Crafted for<br /><em>Extension Perfection</em>
            </h2>
            <div className="gold-line" style={{ marginTop: "20px" }} />
          </div>
          <div className="product-row reveal">
            <div className="product-img-col" style={{ position: "relative" }}>
              <Image src="/product-wash-bag.jpg" alt="Extension Wash Bag" fill style={{ objectFit: "cover" }} sizes="(max-width: 900px) 100vw, 50vw" />
            </div>
            <div className="product-info-col">
              <span className="product-badge">Available Now</span>
              <h3 className="product-name serif">Extension<br /><em>Wash Bag</em></h3>
              <p className="product-desc">
                Washing your extensions has never felt so luxurious. The Lunor Extension Wash Bag is designed to protect your hair during machine washing — preventing tangles, stretch, and damage while keeping every strand perfectly maintained.
              </p>
              <ul className="product-features">
                <li><span className="feat-icon">✦</span> Fine-mesh premium netting protects every strand</li>
                <li><span className="feat-icon">✦</span> Gold tassel & satin drawstring closure</li>
                <li><span className="feat-icon">✦</span> Prevents tangling, matting & heat damage</li>
                <li><span className="feat-icon">✦</span> Elegant gold LUNOR emblem plate</li>
              </ul>
            </div>
          </div>
          <div className="product-row reverse reveal">
            <div className="product-img-col" style={{ position: "relative" }}>
              <Image src="/product-serum.jpg" alt="Extension Detangler Serum" fill style={{ objectFit: "cover" }} sizes="(max-width: 900px) 100vw, 50vw" />
            </div>
            <div className="product-info-col">
              <span className="product-badge coming-soon-badge">Coming Soon</span>
              <h3 className="product-name serif">Extension Detangler<br /><em>Serum</em></h3>
              <p className="product-desc">
                Our most anticipated formula yet. The Lunor Extension Detangler Serum is a lightweight, high-performance treatment designed to eliminate knots, restore silk-smooth texture, and extend the lifespan of your extensions with every use.
              </p>
              <ul className="product-features">
                <li><span className="feat-icon">✦</span> Instant detangle with zero breakage</li>
                <li><span className="feat-icon">✦</span> Restores shine, softness & natural flow</li>
                <li><span className="feat-icon">✦</span> Heat protection up to 230°C</li>
                <li><span className="feat-icon">✦</span> Premium plant-based ingredients</li>
              </ul>
              <p style={{ fontSize: "0.8rem", color: "var(--pink)", fontWeight: 500, marginBottom: "12px", letterSpacing: "1px" }}>
                Be the first to know when it launches:
              </p>
              <div className="notify-form">
                <input className="notify-input" type="email" placeholder="Your email address..." />
                <button className="notify-btn" onClick={handleNotifyClick}>Notify Me</button>
              </div>
              <p className="notify-note">✦ No spam. Launch announcement only.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="values">
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="values-grid">
            <div className="value-item reveal" style={{ transitionDelay: "0.1s" }}>
              <span className="value-icon">🌿</span>
              <h4 className="value-title serif">Premium Ingredients</h4>
              <p className="value-desc">Only the finest botanicals and science-backed compounds in every formula</p>
            </div>
            <div className="value-item reveal" style={{ transitionDelay: "0.2s" }}>
              <span className="value-icon">✨</span>
              <h4 className="value-title serif">Luxury Aesthetics</h4>
              <p className="value-desc">Designed to look as beautiful on your vanity as it performs on your hair</p>
            </div>
            <div className="value-item reveal" style={{ transitionDelay: "0.3s" }}>
              <span className="value-icon">💧</span>
              <h4 className="value-title serif">Nourish & Protect</h4>
              <p className="value-desc">Deep conditioning formulas that restore life to every strand</p>
            </div>
            <div className="value-item reveal" style={{ transitionDelay: "0.4s" }}>
              <span className="value-icon">💎</span>
              <h4 className="value-title serif">Extend Hair Life</h4>
              <p className="value-desc">Engineered to dramatically increase the lifespan of your investment</p>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact">
        <div className="contact-inner reveal">
          <span className="contact-eyebrow">Get In Touch</span>
          <h2 className="contact-title serif">
            Ready to Begin<br />Your Hair <em>Ritual?</em>
          </h2>
          <p className="contact-sub">
            We&apos;d love to hear from you. Reach out for product inquiries, collaborations, or simply to discover which Lunor collection is right for you.
          </p>
          <div className="contact-links">
            <a href="mailto:lunorhairextension@gmail.com" className="contact-link-item">
              <div className="icon">✉</div>
              lunorhairextension@gmail.com
            </a>
            <a href="tel:+905523538559" className="contact-link-item">
              <div className="icon">✆</div>
              +90 552 353 85 59
            </a>
            <a href="#" className="contact-link-item">
              <div className="icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              @lunor.hairextensions
            </a>
          </div>
        </div>
        <div className="footer-bar">
          <div className="footer-logo">Lunor</div>
          <div className="footer-copy">© 2025 Lunor Hair Extensions. All rights reserved.</div>
          <div className="footer-socials">
            <a className="footer-social" href="#" title="Instagram">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a className="footer-social" href="#" title="TikTok">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.19 8.19 0 004.79 1.53V6.78a4.85 4.85 0 01-1.02-.09z"/>
              </svg>
            </a>
            <a className="footer-social" href="#" title="WhatsApp">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
