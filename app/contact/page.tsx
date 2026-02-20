"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function ContactPage() {
  const navbarRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const navbar = navbarRef.current;
    const handleScroll = () => {
      if (navbar) navbar.classList.toggle("scrolled", window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      <nav id="navbar" ref={navbarRef}>
        <div className="nav-inner">
          <Link href="/" className="nav-logo">
            Lun<span>o</span>r
          </Link>
          <ul className="nav-links">
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/contact" className="nav-active">Contact</Link></li>
          </ul>
        </div>
      </nav>

      <main className="contact-page">
        <section className="contact-page-hero">
          <div className="contact-page-bg" />
          <div className="contact-page-inner">
            <span className="section-tag reveal">Get In Touch</span>
            <h1 className="contact-page-title serif reveal">
              Ready to Begin<br />Your Hair <em>Ritual?</em>
            </h1>
            <p className="contact-page-sub reveal">
              We&apos;d love to hear from you. Reach out for product inquiries, collaborations, or to discover which Lunor collection is right for you.
            </p>
            <div className="gold-line reveal" style={{ marginTop: "24px" }} />
          </div>
        </section>

        <section className="contact-page-links">
          <div className="contact-page-cards">
            <a href="mailto:lunorhairextension@gmail.com" className="contact-card reveal">
              <span className="contact-card-icon">✉</span>
              <h3 className="contact-card-title serif">Email</h3>
              <p className="contact-card-value">lunorhairextension@gmail.com</p>
              <span className="contact-card-hint">We reply within 24 hours</span>
            </a>
            <a href="tel:+905523538559" className="contact-card reveal">
              <span className="contact-card-icon">✆</span>
              <h3 className="contact-card-title serif">Phone</h3>
              <p className="contact-card-value">+90 552 353 85 59</p>
              <span className="contact-card-hint">Call or WhatsApp</span>
            </a>
            <a href="https://instagram.com/lunor.hairextensions" target="_blank" rel="noopener noreferrer" className="contact-card reveal">
              <span className="contact-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </span>
              <h3 className="contact-card-title serif">Instagram</h3>
              <p className="contact-card-value">@lunor.hairextensions</p>
              <span className="contact-card-hint">Follow our journey</span>
            </a>
          </div>
        </section>

        <section className="contact-page-cta">
          <Link href="/" className="btn-outline">Back to Home</Link>
        </section>
      </main>
    </>
  );
}
