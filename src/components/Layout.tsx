
import { type ReactNode } from "react";
import { ArrowRight, Phone, MapPin } from "lucide-react";

import { phone, phoneLink } from "@/lib/constants";

import type { Go, Treatment } from "@/lib/constants";

/* ============================================
   PREMIUM DESIGN SYSTEM
   ALL CSS INSIDE THIS SINGLE FILE
============================================ */

const layoutStyles = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Manrope:wght@400;500;600;700;800&display=swap');

:root {
  --kc-primary: #087f83;
  --kc-primary-dark: #065e64;
  --kc-navy: #082f38;
  --kc-navy-deep: #05252d;
  --kc-mint: #d7f5eb;
  --kc-light: #f4fbf8;
  --kc-gold: #e8b66c;
  --kc-muted: #687b80;
  --kc-border: #e1eeea;
  --kc-ease: cubic-bezier(.22,1,.36,1);
}

.kc-site-header,
.kc-site-header *,
.kc-topbar,
.kc-topbar *,
.kc-footer,
.kc-footer * {
  box-sizing: border-box;
}

.kc-site-header,
.kc-topbar,
.kc-footer,
.kc-page-hero,
.kc-section-heading,
.kc-treatment-card,
.kc-cta {
  font-family: "DM Sans", sans-serif;
}

.kc-site-header button,
.kc-footer button,
.kc-topbar button {
  font: inherit;
  cursor: pointer;
}

.kc-site-header a,
.kc-topbar a,
.kc-footer a {
  text-decoration: none;
}

.kc-container {
  width: min(1320px, calc(100% - 64px));
  margin-inline: auto;
}

/* ============================================
   TOP CONTACT BAR
============================================ */

.kc-topbar {
  position: relative;
  z-index: 120;
  background: var(--kc-navy-deep);
  color: #fff;
  font-size: 12px;
}

.kc-topbar-inner {
  min-height: 42px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.kc-topbar-left,
.kc-topbar-right,
.kc-topbar-item {
  display: flex;
  align-items: center;
}

.kc-topbar-left,
.kc-topbar-right {
  gap: 26px;
}

.kc-topbar-item {
  gap: 8px;
  color: rgba(255,255,255,.82);
  transition: color .3s;
}

.kc-topbar-item svg {
  color: #a7e8d7;
}

.kc-topbar-item strong {
  color: #fff;
  font-weight: 700;
}

.kc-topbar-item:hover {
  color: #a7e8d7;
}

.kc-topbar-divider {
  width: 1px;
  height: 15px;
  background: rgba(255,255,255,.2);
}

.kc-topbar-socials {
  display: flex;
  align-items: center;
  gap: 9px;
}

.kc-topbar-socials a {
  width: 26px;
  height: 26px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  color: white;
  transition: .3s var(--kc-ease);
}

.kc-topbar-socials a:hover {
  background: rgba(255,255,255,.14);
  color: #a7e8d7;
  transform: translateY(-3px);
}

/* ============================================
   PREMIUM STICKY NAVBAR
============================================ */

.kc-site-header {
  position: sticky;
  top: 0;
  z-index: 110;
  width: 100%;
  background: rgba(255,255,255,.98);
  border-bottom: 1px solid rgba(8,80,80,.08);
  transition:
    background .35s ease,
    box-shadow .35s ease,
    border-color .35s ease;
}

.kc-site-header.kc-scrolled {
  background: rgba(255,255,255,.93);
  backdrop-filter: blur(22px);
  -webkit-backdrop-filter: blur(22px);
  box-shadow: 0 12px 38px rgba(5,47,56,.09);
  border-color: rgba(8,127,131,.1);
}

.kc-nav {
  min-height: 92px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  transition: min-height .35s ease;
}

.kc-scrolled .kc-nav {
  min-height: 76px;
}

/* LOGO */

.kc-logo-button {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  padding: 0;
  background: transparent;
  border: 0;
}

.kc-logo-button img {
  display: block;
  width: auto;
  max-width: 205px;
  height: 64px;
  object-fit: contain;
  transition: transform .4s var(--kc-ease), height .35s;
}

.kc-logo-button:hover img {
  transform: scale(1.035);
}

.kc-scrolled .kc-logo-button img {
  height: 55px;
}

/* DESKTOP LINKS */

.kc-nav-links {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(12px, 1.45vw, 26px);
  margin-left: auto;
}

.kc-nav-link {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 35px 0;
  border: 0;
  background: none;
  color: #28444a;
  font-size: 12.5px;
  font-weight: 700;
  white-space: nowrap;
  transition: color .3s ease;
}

.kc-scrolled .kc-nav-link {
  padding-block: 27px;
}

.kc-nav-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 23px;
  width: 100%;
  height: 2px;
  border-radius: 4px;
  background: var(--kc-primary);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform .4s var(--kc-ease);
}

.kc-nav-link:hover,
.kc-nav-link.kc-active {
  color: var(--kc-primary);
}

.kc-nav-link:hover::after,
.kc-nav-link.kc-active::after {
  transform: scaleX(1);
}

.kc-nav-link svg {
  transition: transform .3s ease;
}

/* TREATMENTS MEGA MENU */

.kc-dropdown-parent {
  position: relative;
}

.kc-dropdown-parent:hover .kc-dropdown-trigger svg,
.kc-dropdown-parent.kc-dropdown-open .kc-dropdown-trigger svg {
  transform: rotate(180deg);
}

.kc-mega-menu {
  position: absolute;
  top: calc(100% - 2px);
  left: 50%;
  width: min(780px, 90vw);
  display: grid;
  grid-template-columns: 255px 1fr;
  transform: translate(-50%, 15px);
  background: white;
  border: 1px solid var(--kc-border);
  border-radius: 16px;
  box-shadow: 0 30px 80px rgba(5,47,56,.15);
  overflow: hidden;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition:
    opacity .3s ease,
    transform .4s var(--kc-ease),
    visibility .3s;
}

.kc-dropdown-parent:hover .kc-mega-menu,
.kc-dropdown-parent:focus-within .kc-mega-menu,
.kc-dropdown-parent.kc-dropdown-open .kc-mega-menu {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
  transform: translate(-50%, 0);
}

.kc-mega-feature {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px;
  background: linear-gradient(145deg, #083f49, #087f83);
  color: white;
  overflow: hidden;
}

.kc-mega-feature::after {
  content: "";
  position: absolute;
  right: -85px;
  bottom: -85px;
  width: 210px;
  height: 210px;
  border: 1px solid rgba(255,255,255,.18);
  border-radius: 50%;
  box-shadow: 0 0 0 35px rgba(255,255,255,.04);
}

.kc-mega-icon {
  width: 52px;
  height: 52px;
  display: grid;
  place-items: center;
  background: rgba(255,255,255,.14);
  border-radius: 14px;
  color: #c5f4e5;
}

.kc-mega-eyebrow {
  display: block;
  margin: 25px 0 12px;
  color: #b9eee0;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.kc-mega-feature h3 {
  margin: 0 0 15px;
  color: white;
  font-family: "Manrope", sans-serif;
  font-size: 25px;
  line-height: 1.25;
  letter-spacing: -.8px;
}

.kc-mega-feature p {
  color: rgba(255,255,255,.77);
  font-size: 12px;
  line-height: 1.8;
}

.kc-mega-cta {
  position: relative;
  z-index: 2;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  align-self: flex-start;
  padding: 12px 0;
  border: 0;
  background: transparent;
  color: #c5f4e5;
  font-size: 12px;
  font-weight: 800;
}

.kc-mega-cta svg {
  transition: transform .3s;
}

.kc-mega-cta:hover svg {
  transform: translateX(5px);
}

.kc-mega-content {
  padding: 26px;
}

.kc-mega-content-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
}

.kc-mega-content-heading strong {
  color: var(--kc-navy);
  font-size: 13px;
}

.kc-mega-content-heading span {
  color: var(--kc-muted);
  font-size: 11px;
}

.kc-mega-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 7px;
  max-height: 360px;
  overflow-y: auto;
}

.kc-mega-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 13px 12px;
  background: #f7fbfa;
  border: 1px solid transparent;
  border-radius: 9px;
  color: #315158;
  text-align: left;
  font-size: 12px;
  font-weight: 650;
  transition: .3s var(--kc-ease);
}

.kc-mega-item svg {
  flex-shrink: 0;
  color: var(--kc-primary);
}

.kc-mega-item:hover {
  background: #e8f7f1;
  border-color: #bfe8dd;
  color: var(--kc-primary);
  transform: translateX(4px);
}

/* BOOKING BUTTON */

.kc-nav-book {
  position: relative;
  flex-shrink: 0;
  min-height: 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 0 18px;
  border: 1px solid var(--kc-primary);
  border-radius: 8px;
  background: var(--kc-primary);
  color: white;
  font-size: 12px;
  font-weight: 800;
  white-space: nowrap;
  overflow: hidden;
  transition: .4s var(--kc-ease);
}

.kc-nav-book::before {
  content: "";
  position: absolute;
  inset: 0;
  background: var(--kc-navy);
  transform: translateY(102%);
  transition: transform .45s var(--kc-ease);
}

.kc-nav-book:hover::before {
  transform: translateY(0);
}

.kc-nav-book:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 26px rgba(8,127,131,.24);
}

.kc-nav-book span,
.kc-nav-book svg {
  position: relative;
  z-index: 1;
}

.kc-nav-book svg {
  transition: transform .3s;
}

.kc-nav-book:hover svg {
  transform: translate(3px,-2px);
}

/* MOBILE TOGGLE */

.kc-menu-toggle {
  display: none;
  align-items: center;
  justify-content: center;
  width: 46px;
  height: 46px;
  border: 1px solid var(--kc-border);
  border-radius: 10px;
  background: var(--kc-light);
  color: var(--kc-navy);
  transition: .3s;
}

.kc-menu-toggle:hover {
  background: var(--kc-primary);
  color: white;
}

.kc-mobile-overlay {
  display: none;
}

.kc-mobile-top,
.kc-mobile-book,
.kc-mobile-footer {
  display: none;
}

/* ============================================
   PAGE HERO
============================================ */

.kc-page-hero {
  position: relative;
  padding: 100px 0;
  background: linear-gradient(125deg, #062e37, #0a656b);
  color: white;
  overflow: hidden;
}

.kc-page-hero::after {
  content: "";
  position: absolute;
  top: -180px;
  right: -80px;
  width: 500px;
  height: 500px;
  border: 1px solid rgba(255,255,255,.13);
  border-radius: 50%;
  box-shadow: 0 0 0 70px rgba(255,255,255,.025);
}

.kc-page-hero .container {
  position: relative;
  z-index: 2;
}

.kc-page-hero .eyebrow {
  color: #b9eee0;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.kc-page-hero h1 {
  max-width: 850px;
  margin: 20px 0;
  color: white;
  font-family: "Manrope", sans-serif;
  font-size: clamp(42px,5vw,72px);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -.05em;
}

.kc-page-hero p {
  max-width: 610px;
  color: rgba(255,255,255,.8);
  font-size: 16px;
  line-height: 1.85;
}

/* ============================================
   SECTION HEADINGS
============================================ */

.kc-section-heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 30px;
  margin-bottom: 45px;
}

.kc-section-heading .eyebrow {
  color: var(--kc-primary);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.kc-section-heading h2 {
  margin: 16px 0;
  color: var(--kc-navy);
  font-family: "Manrope", sans-serif;
  font-size: clamp(34px,4vw,54px);
  font-weight: 800;
  line-height: 1.16;
  letter-spacing: -.045em;
}

.kc-section-heading p {
  max-width: 650px;
  color: var(--kc-muted);
  line-height: 1.8;
}

/* ============================================
   TREATMENT CARD
============================================ */

.kc-treatment-card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 280px;
  width: 100%;
  padding: 30px;
  border: 1px solid var(--kc-border);
  border-radius: 15px;
  background: white;
  text-align: left;
  cursor: pointer;
  overflow: hidden;
  transition: .5s var(--kc-ease);
}

.kc-treatment-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(145deg, #087f83, #064a53);
  transform: translateY(101%);
  transition: transform .55s var(--kc-ease);
}

.kc-treatment-card:hover::before {
  transform: translateY(0);
}

.kc-treatment-card:hover {
  transform: translateY(-10px);
  border-color: var(--kc-primary);
  box-shadow: 0 25px 50px rgba(5,80,85,.15);
}

.kc-treatment-card > * {
  position: relative;
  z-index: 1;
}

.kc-treatment-icon {
  display: grid;
  place-items: center;
  width: 62px;
  height: 62px;
  margin-bottom: 23px;
  border-radius: 14px;
  background: #e7f7f1;
  color: var(--kc-primary);
  transition: .45s var(--kc-ease);
}

.kc-treatment-card:hover .kc-treatment-icon {
  background: white;
  transform: rotate(-8deg) scale(1.08);
}

.kc-treatment-card h3 {
  margin: 0 0 12px;
  color: var(--kc-navy);
  font-size: 21px;
  font-weight: 800;
}

.kc-treatment-card p {
  margin: 0;
  color: var(--kc-muted);
  font-size: 13px;
  line-height: 1.8;
}

.kc-treatment-card:hover h3,
.kc-treatment-card:hover p {
  color: white;
}

.kc-card-arrow {
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  margin-top: auto;
  align-self: flex-end;
  border-radius: 50%;
  background: #e7f7f1;
  color: var(--kc-primary);
  transition: .35s;
}

.kc-treatment-card:hover .kc-card-arrow {
  background: white;
  transform: rotate(-35deg);
}

/* ============================================
   CTA
============================================ */

.kc-cta {
  padding: 90px 0;
  background: var(--kc-navy);
  color: white;
}

.kc-cta-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
}

.kc-cta h2 {
  max-width: 700px;
  margin: 18px 0;
  color: white;
  font-family: "Manrope", sans-serif;
  font-size: clamp(32px,4vw,52px);
  line-height: 1.18;
}

.kc-cta p {
  max-width: 590px;
  color: rgba(255,255,255,.7);
  line-height: 1.8;
}

.kc-cta .eyebrow {
  color: #b9eee0;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.kc-cta-actions {
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex-shrink: 0;
}

.kc-cta-button {
  min-height: 52px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 15px 23px;
  border: 1px solid transparent;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 800;
  transition: .35s var(--kc-ease);
}

.kc-cta-button.primary {
  background: #b9eee0;
  color: var(--kc-navy);
}

.kc-cta-button.secondary {
  background: transparent;
  color: white;
  border-color: rgba(255,255,255,.35);
}

.kc-cta-button:hover {
  transform: translateY(-4px);
}

/* ============================================
   PREMIUM FOOTER
============================================ */

.kc-footer {
  background: #041f27;
  color: white;
}

.kc-footer-grid {
  display: grid;
  grid-template-columns: 1.4fr .75fr 1fr 1fr;
  gap: 55px;
  padding-top: 85px;
  padding-bottom: 70px;
}

.kc-footer-logo {
  max-width: 200px;
  max-height: 85px;
  object-fit: contain;
}

.kc-footer-intro {
  max-width: 320px;
  margin: 25px 0;
  color: rgba(255,255,255,.62);
  font-size: 13px;
  line-height: 1.9;
}

.kc-footer h4 {
  margin: 0 0 25px;
  color: white;
  font-size: 14px;
  font-weight: 800;
}

.kc-footer-column > button,
.kc-footer-column > a:not(.kc-footer-cta) {
  display: flex;
  align-items: center;
  gap: 9px;
  width: fit-content;
  margin-bottom: 15px;
  padding: 0;
  border: 0;
  background: none;
  color: rgba(255,255,255,.62);
  text-align: left;
  font-size: 12.5px;
  line-height: 1.6;
  transition: .3s;
}

.kc-footer-column > button:hover,
.kc-footer-column > a:hover {
  color: #b9eee0;
  transform: translateX(5px);
}

.kc-footer-social {
  display: flex;
  gap: 10px;
}

.kc-footer-social a {
  width: 39px;
  height: 39px;
  display: grid;
  place-items: center;
  border: 1px solid rgba(255,255,255,.15);
  border-radius: 9px;
  color: white;
  transition: .3s;
}

.kc-footer-social a:hover {
  background: var(--kc-primary);
  border-color: var(--kc-primary);
  transform: translateY(-4px);
}

.kc-footer-cta {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-top: 15px;
  padding: 14px 18px;
  border: 0;
  border-radius: 7px;
  background: var(--kc-primary);
  color: white;
  font-size: 12px;
  font-weight: 800;
  transition: .3s;
}

.kc-footer-cta:hover {
  background: #0b999b;
  transform: translateY(-3px);
}

.kc-footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding-top: 25px;
  padding-bottom: 25px;
  border-top: 1px solid rgba(255,255,255,.12);
  color: rgba(255,255,255,.45);
  font-size: 12px;
}

.kc-footer-bottom button {
  margin-left: 20px;
  padding: 0;
  border: 0;
  background: none;
  color: inherit;
}

.kc-footer-bottom button:hover {
  color: white;
}

/* ============================================
   TABLET RESPONSIVENESS
============================================ */

@media (max-width: 1200px) {
  .kc-nav-links {
    gap: 13px;
  }

  .kc-nav-link {
    font-size: 11.5px;
  }

  .kc-logo-button img {
    max-width: 170px;
  }

  .kc-nav-book {
    padding-inline: 13px;
    font-size: 11px;
  }
}

/* ============================================
   MOBILE NAVIGATION
============================================ */

@media (max-width: 1050px) {

  .kc-container {
    width: min(100% - 36px, 900px);
  }

  .kc-topbar-inner {
    min-height: 38px;
  }

  .kc-topbar-left {
    gap: 12px;
  }

  .kc-topbar-item {
    font-size: 11px;
  }

  .kc-topbar-right .kc-topbar-item {
    display: none;
  }

  .kc-nav {
    min-height: 76px;
  }

  .kc-scrolled .kc-nav {
    min-height: 68px;
  }

  .kc-logo-button img,
  .kc-scrolled .kc-logo-button img {
    height: 54px;
    max-width: 175px;
  }

  .kc-menu-toggle {
    display: flex;
    flex-shrink: 0;
  }

  .kc-nav-book {
    margin-left: auto;
  }

  .kc-nav-links {
    position: fixed;
    z-index: 130;
    top: 0;
    right: 0;
    width: min(410px, 90vw);
    height: 100dvh;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    gap: 0;
    padding: 24px;
    margin: 0;
    background: white;
    box-shadow: -20px 0 65px rgba(0,0,0,.12);
    overflow-y: auto;
    transform: translateX(110%);
    visibility: hidden;
    transition:
      transform .5s var(--kc-ease),
      visibility .5s;
  }

  .kc-nav-links.kc-mobile-open {
    transform: translateX(0);
    visibility: visible;
  }

  .kc-mobile-overlay {
    position: fixed;
    z-index: 125;
    inset: 0;
    display: block;
    border: 0;
    background: rgba(2,25,31,.65);
    backdrop-filter: blur(5px);
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transition: opacity .35s, visibility .35s;
  }

  .kc-mobile-overlay.kc-overlay-open {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }

  .kc-mobile-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 25px;
    padding-bottom: 20px;
    border-bottom: 1px solid var(--kc-border);
  }

  .kc-mobile-top img {
    width: 145px;
    max-height: 65px;
    object-fit: contain;
  }

  .kc-mobile-close {
    display: grid;
    place-items: center;
    width: 42px;
    height: 42px;
    border: 1px solid var(--kc-border);
    border-radius: 9px;
    background: #f2f9f6;
    color: var(--kc-navy);
  }

  .kc-nav-link,
  .kc-scrolled .kc-nav-link {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 16px 5px;
    border-bottom: 1px solid #edf3f0;
    font-size: 15px;
    text-align: left;
  }

  .kc-nav-link::after {
    display: none;
  }

  .kc-dropdown-parent {
    width: 100%;
  }

  .kc-mega-menu {
    position: static;
    width: 100%;
    display: block;
    max-height: 0;
    padding: 0;
    border: 0;
    border-radius: 0;
    box-shadow: none;
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
    overflow: hidden;
    transform: none;
    transition: max-height .45s ease;
  }

  .kc-dropdown-parent:hover .kc-mega-menu,
  .kc-dropdown-parent:focus-within .kc-mega-menu {
    transform: none;
  }

  .kc-dropdown-parent:not(.kc-dropdown-open) .kc-mega-menu {
    max-height: 0;
  }

  .kc-dropdown-parent.kc-dropdown-open .kc-mega-menu {
    max-height: 600px;
    margin-bottom: 12px;
  }

  .kc-mega-feature {
    display: none;
  }

  .kc-mega-content {
    padding: 15px 0;
  }

  .kc-mega-grid {
    grid-template-columns: 1fr;
    max-height: 350px;
  }

  .kc-mega-item {
    padding: 12px;
  }

  .kc-mobile-book {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 100%;
    margin-top: 28px;
    padding: 16px;
    border: 0;
    border-radius: 9px;
    background: var(--kc-primary);
    color: white;
    font-size: 13px;
    font-weight: 800;
  }

  .kc-mobile-footer {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-top: 25px;
  }

  .kc-mobile-footer a {
    display: grid;
    place-items: center;
    width: 40px;
    height: 40px;
    border: 1px solid var(--kc-border);
    border-radius: 50%;
    color: var(--kc-primary);
  }

  .kc-footer-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 45px;
  }

  .kc-cta-inner {
    flex-direction: column;
    align-items: flex-start;
  }

  .kc-cta-actions {
    flex-direction: row;
  }
}

@media (max-width: 600px) {
  .kc-container {
    width: calc(100% - 32px);
  }

  .kc-topbar-right {
    display: none;
  }

  .kc-topbar-item {
    font-size: 10px;
  }

  .kc-topbar-left .kc-topbar-item:nth-of-type(2),
  .kc-topbar-divider {
    display: none;
  }

  .kc-nav-book {
    display: none;
  }

  .kc-nav {
    min-height: 68px;
  }

  .kc-logo-button img,
  .kc-scrolled .kc-logo-button img {
    height: 49px;
    max-width: 160px;
  }

  .kc-menu-toggle {
    margin-left: auto;
  }

  .kc-page-hero {
    padding: 70px 0;
  }

  .kc-section-heading {
    display: block;
  }

  .kc-cta {
    padding: 65px 0;
  }

  .kc-cta-actions {
    flex-direction: column;
    width: 100%;
  }

  .kc-footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 35px 20px;
    padding-top: 60px;
  }

  .kc-footer-grid > div:first-child {
    grid-column: 1 / -1;
  }

  .kc-footer-grid > div:last-child {
    grid-column: 1 / -1;
  }

  .kc-footer-bottom {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (prefers-reduced-motion: reduce) {
  .kc-site-header *,
  .kc-footer *,
  .kc-treatment-card *,
  .kc-site-header *::before,
  .kc-treatment-card *::before {
    animation: none !important;
    transition-duration: .01ms !important;
  }
}
`;

/* ============================================
   STYLE INJECTION
============================================ */

export function LayoutStyles() {
  return <style>{layoutStyles}</style>;
}

/* ============================================
   REUSABLE COMPONENTS
============================================ */

export function MapPinIcon() {
  return <MapPin size={15} />;
}

export function PageHero({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <>
      <LayoutStyles />
      <section className="page-hero kc-page-hero">
        <div className="container">
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
      </section>
    </>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  action,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  action?: ReactNode;
}) {
  return (
    <>
      <LayoutStyles />
      <div className="section-heading kc-section-heading">
        <div>
          <span className="eyebrow">{eyebrow}</span>
          <h2>{title}</h2>
          {text && <p>{text}</p>}
        </div>
        {action}
      </div>
    </>
  );
}

export function TreatmentCard({
  treatment,
  go,
}: {
  treatment: Treatment;
  go: Go;
}) {
  const Icon = treatment.icon;

  return (
    <>
      <LayoutStyles />
      <button
        className={`treatment-card kc-treatment-card ${treatment.color}`}
        onClick={() => go(`/treatments/${treatment.slug}`)}
      >
        <span className="treatment-icon kc-treatment-icon">
          <Icon size={28} />
        </span>

        <h3>{treatment.title}</h3>
        <p>{treatment.text}</p>

        <span className="card-arrow kc-card-arrow">
          <ArrowRight size={18} />
        </span>
      </button>
    </>
  );
}

export function Cta({ go }: { go: Go }) {
  return (
    <>
      <LayoutStyles />
      <section className="cta kc-cta">
        <div className="container cta-inner kc-cta-inner">
          <div>
            <span className="eyebrow">Ready when you are</span>
            <h2>Take the next step toward a healthier smile.</h2>
            <p>
              Connect with Keerti Cure Dental to discuss your concerns
              and request a consultation.
            </p>
          </div>

          <div className="cta-actions kc-cta-actions">
            <button
              className="kc-cta-button primary"
              onClick={() => go("/book-appointment")}
            >
              Book an appointment <ArrowRight size={17} />
            </button>

            <a className="kc-cta-button secondary" href={phoneLink}>
              <Phone size={17} /> Call {phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

/* ============================================
   PREMIUM NAVBAR (re-exported from Header.tsx)
============================================ */

export { Header } from "@/components/Header";

/* ============================================
   PREMIUM FOOTER (re-exported from Footer.tsx)
============================================ */

export { Footer } from "@/components/Footer";
