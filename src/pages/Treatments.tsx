
import { useEffect, useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Heart,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Clock3,
  Smile,
  Search,
  X,
  Lightbulb,
  MoveRight,
} from 'lucide-react';

import { treatments, type Go } from '@/lib/constants';
import { photoAt } from '@/lib/sitePhotos';
import { Cta } from '@/components/Layout';
import { TreatmentJourney } from '@/components/TreatmentJourney';
import { NotFound } from '@/pages/NotFound';

/* ==========================================
   ALL CSS INSIDE THIS TSX FILE
========================================== */

const styles = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Manrope:wght@400;500;600;700;800&display=swap');

.kt-page {
  --navy: #102e39;
  --teal: #087f80;
  --mint: #e8f5ef;
  --text: #61737a;
  --border: #e2ebe7;
  --bg: #f6faf8;
  font-family: 'DM Sans', sans-serif;
  color: var(--navy);
  overflow: clip;
}

.kt-page *,
.kt-page *::before,
.kt-page *::after {
  box-sizing: border-box;
}

.kt-page h1,
.kt-page h2,
.kt-page h3 {
  font-family: 'Manrope', sans-serif;
  letter-spacing: -.045em;
}

.kt-page button,
.kt-page input {
  font-family: inherit;
}

.kt-page button {
  cursor: pointer;
}

.kt-container {
  width: min(1180px, calc(100% - 48px));
  margin: auto;
}

/* ANIMATIONS */

.kt-reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity .7s ease, transform .7s ease;
}

.kt-reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

@keyframes ktFadeUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes ktZoom {
  from { transform: scale(1.1); }
  to { transform: scale(1); }
}

.kt-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: .16em;
  color: var(--teal);
}

.kt-eyebrow::before {
  content: '';
  width: 26px;
  height: 2px;
  background: var(--teal);
}

.kt-heading {
  font-size: clamp(32px, 3.8vw, 52px);
  font-weight: 800;
  line-height: 1.18;
  margin: 20px 0;
}

.kt-heading span {
  color: var(--teal);
}

/* BUTTONS */

.kt-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 22px;
  padding: 17px 25px;
  border-radius: 7px;
  font-size: 13px;
  font-weight: 800;
  border: 0;
  transition: all .35s ease;
}

.kt-btn svg {
  transition: transform .3s;
}

.kt-btn:hover {
  transform: translateY(-4px);
}

.kt-btn:hover svg {
  transform: translate(4px,-3px);
}

.kt-btn-light {
  background: white;
  color: var(--navy);
}

.kt-btn-light:hover {
  background: #dff6ed;
  box-shadow: 0 15px 35px #0002;
}

.kt-btn-outline {
  background: transparent;
  color: white;
  border: 1px solid #ffffff80;
}

.kt-btn-outline:hover {
  background: white;
  color: var(--navy);
}

.kt-btn-primary {
  background: var(--teal);
  color: white;
}

.kt-btn-primary:hover {
  background: var(--navy);
  box-shadow: 0 15px 35px #087f8030;
}

/* HERO */

.kt-hero {
  position: relative;
  min-height: 650px;
  display: flex;
  align-items: center;
  background: #092c35;
  color: white;
  isolation: isolate;
}

.kt-hero-image,
.kt-hero-overlay {
  position: absolute;
  inset: 0;
  z-index: -1;
}

.kt-hero-image {
  overflow: hidden;
}

.kt-hero-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation: ktZoom 12s ease-out both;
}

.kt-hero-overlay {
  background:
    linear-gradient(90deg,rgba(5,32,40,.97),rgba(5,32,40,.78) 48%,rgba(5,32,40,.16)),
    linear-gradient(0deg,rgba(5,32,40,.45),transparent);
}

.kt-hero-content {
  padding-top: 110px;
  padding-bottom: 75px;
}

.kt-hero-copy {
  max-width: 720px;
  animation: ktFadeUp .9s ease both;
}

.kt-hero-pill {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 11px 16px;
  border-radius: 40px;
  border: 1px solid #ffffff55;
  background: #ffffff15;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: .15em;
  backdrop-filter: blur(10px);
}

.kt-hero h1 {
  font-size: clamp(43px,5.5vw,76px);
  line-height: 1.1;
  font-weight: 800;
  margin: 28px 0;
}

.kt-hero h1 span {
  color: #a5e5d1;
}

.kt-hero-copy > p {
  font-size: 16px;
  line-height: 1.9;
  color: #e2eeee;
  max-width: 550px;
}

.kt-hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 13px;
  margin-top: 35px;
}

.kt-hero-bottom {
  display: flex;
  flex-wrap: wrap;
  gap: 35px;
  margin-top: 75px;
  padding-top: 25px;
  border-top: 1px solid #ffffff40;
}

.kt-hero-bottom span {
  display: flex;
  align-items: center;
  gap: 9px;
  font-size: 12px;
  color: #e3f0ed;
  font-weight: 600;
}

.kt-hero-bottom svg {
  color: #a5e5d1;
}

/* INTRO */

.kt-intro {
  padding: 105px 0;
  background: white;
}

.kt-intro-grid {
  display: grid;
  grid-template-columns: 1.1fr .8fr;
  align-items: center;
  gap: 90px;
}

.kt-intro-right p {
  font-size: 16px;
  line-height: 2;
  color: var(--text);
}

.kt-intro-caption {
  margin-top: 25px;
  color: var(--teal);
  font-size: 12px;
  font-weight: 800;
}

/* TREATMENTS */

.kt-treatments {
  padding: 100px 0 115px;
  background: var(--bg);
  scroll-margin-top: 90px;
}

.kt-section-top {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 30px;
  margin-bottom: 45px;
}

.kt-section-top p {
  color: var(--text);
  line-height: 1.8;
  max-width: 550px;
  font-size: 15px;
}

.kt-search {
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 260px;
  padding: 14px 16px;
  border-radius: 9px;
  background: white;
  border: 1px solid var(--border);
  transition: .3s;
}

.kt-search:focus-within {
  border-color: var(--teal);
  box-shadow: 0 0 0 4px #087f8012;
}

.kt-search > svg {
  color: var(--teal);
  flex-shrink: 0;
}

.kt-search input {
  width: 100%;
  min-width: 0;
  outline: 0;
  border: 0;
  background: transparent;
  font-size: 13px;
}

.kt-search button {
  border: 0;
  background: transparent;
  color: var(--text);
  display: flex;
}

.kt-card-grid {
  display: grid;
  grid-template-columns: repeat(3,minmax(0,1fr));
  gap: 25px;
}

.kt-card {
  background: white;
  border-radius: 13px;
  border: 1px solid var(--border);
  overflow: hidden;
  box-shadow: 0 5px 18px #102e3908;
  transition: transform .4s ease, box-shadow .4s ease, border-color .4s ease;
}

.kt-card:hover {
  transform: translateY(-11px);
  border-color: #9ed7c6;
  box-shadow: 0 25px 55px #0b49461c;
}

.kt-card-button {
  display: block;
  width: 100%;
  height: 100%;
  padding: 0;
  text-align: left;
  border: 0;
  background: transparent;
  color: inherit;
}

.kt-card-image {
  height: 235px;
  position: relative;
  overflow: hidden;
  background: #dcebe6;
}

.kt-card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform .8s ease, filter .4s;
}

.kt-card:hover .kt-card-image img {
  transform: scale(1.12);
  filter: saturate(1.15);
}

.kt-card-image::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(0deg,#062e3850,transparent 60%);
}

.kt-card-number {
  position: absolute;
  top: 18px;
  left: 18px;
  z-index: 2;
  background: white;
  border-radius: 5px;
  padding: 9px 12px;
  font-size: 12px;
  font-weight: 800;
}

.kt-card-icon {
  position: absolute;
  z-index: 2;
  bottom: 0;
  right: 18px;
  transform: translateY(50%);
  width: 55px;
  height: 55px;
  border: 4px solid white;
  border-radius: 10px;
  background: var(--teal);
  color: white;
  display: grid;
  place-items: center;
  transition: .35s;
}

.kt-card:hover .kt-card-icon {
  background: var(--navy);
  transform: translateY(50%) rotate(-10deg) scale(1.08);
}

.kt-card-content {
  padding: 35px 25px 23px;
}

.kt-card-label {
  color: var(--teal);
  font-size: 10px;
  letter-spacing: .16em;
  font-weight: 800;
}

.kt-card-content h3 {
  font-size: 21px;
  font-weight: 800;
  line-height: 1.4;
  margin: 12px 0;
  transition: color .3s;
}

.kt-card:hover h3 {
  color: var(--teal);
}

.kt-card-content > p {
  color: var(--text);
  font-size: 13px;
  line-height: 1.9;
  min-height: 75px;
  margin-bottom: 24px;
}

.kt-card-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid var(--border);
  padding-top: 16px;
  font-size: 12px;
  font-weight: 800;
}

.kt-card-arrow {
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  color: var(--teal);
  background: var(--mint);
  transition: .35s;
}

.kt-card:hover .kt-card-arrow {
  color: white;
  background: var(--teal);
  transform: rotate(45deg);
}

.kt-notice {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 23px 25px;
  background: #e8f4ef;
  border: 1px solid #d4e8df;
  border-radius: 9px;
  margin-top: 45px;
}

.kt-notice svg {
  flex-shrink: 0;
  color: var(--teal);
}

.kt-notice p {
  color: #42615d;
  font-size: 13px;
  line-height: 1.8;
  margin: 0;
}

.kt-empty {
  text-align: center;
  padding: 70px 20px;
}

.kt-empty h3 {
  font-size: 22px;
}

.kt-empty p {
  color: var(--text);
}

.kt-empty button {
  border: 0;
  background: transparent;
  color: var(--teal);
  font-weight: 800;
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

/* FEATURE */

.kt-feature {
  padding: 120px 0;
  background: white;
}

.kt-feature-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 90px;
}

.kt-feature-image {
  position: relative;
  height: 560px;
}

.kt-feature-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
  transition: filter .4s;
}

.kt-feature-image:hover img {
  filter: saturate(1.2);
}

.kt-floating {
  position: absolute;
  bottom: 28px;
  right: -25px;
  background: white;
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 21px 24px;
  border-radius: 10px;
  box-shadow: 0 15px 45px #0002;
  transition: transform .3s;
}

.kt-floating:hover {
  transform: translateY(-7px);
}

.kt-floating svg {
  color: var(--teal);
}

.kt-floating strong,
.kt-floating span {
  display: block;
}

.kt-floating strong {
  font-size: 13px;
}

.kt-floating span {
  font-size: 11px;
  color: var(--text);
  margin-top: 5px;
}

.kt-feature-copy > p {
  font-size: 15px;
  line-height: 1.9;
  color: var(--text);
  margin: 22px 0 28px;
}

.kt-feature-list {
  margin-bottom: 35px;
}

.kt-feature-item {
  display: flex;
  gap: 18px;
  padding: 20px 0;
  border-bottom: 1px solid var(--border);
  transition: padding-left .3s;
}

.kt-feature-item:hover {
  padding-left: 10px;
}

.kt-feature-icon {
  flex-shrink: 0;
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  background: var(--mint);
  color: var(--teal);
  border-radius: 9px;
  transition: .3s;
}

.kt-feature-item:hover .kt-feature-icon {
  background: var(--teal);
  color: white;
}

.kt-feature-item h3 {
  margin: 0 0 7px;
  font-size: 16px;
}

.kt-feature-item p {
  color: var(--text);
  font-size: 13px;
  line-height: 1.7;
  margin: 0;
}

/* PROCESS */

.kt-process {
  background: #edf6f1;
  padding: 110px 0 120px;
}

.kt-process-heading {
  text-align: center;
  max-width: 730px;
  margin: 0 auto 55px;
}

.kt-process-grid {
  display: grid;
  grid-template-columns: repeat(4,minmax(0,1fr));
  gap: 20px;
}

.kt-process-card {
  padding: 28px 23px;
  background: white;
  border: 1px solid #dce9e3;
  border-radius: 11px;
  transition: transform .4s, background .4s, box-shadow .4s;
}

.kt-process-card:hover {
  transform: translateY(-10px);
  background: var(--navy);
  box-shadow: 0 22px 45px #0d34372b;
}

.kt-process-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--teal);
  margin-bottom: 40px;
}

.kt-process-top span {
  font-size: 31px;
  font-weight: 800;
}

.kt-process-card h3 {
  font-size: 17px;
  margin-bottom: 12px;
}

.kt-process-card p {
  font-size: 13px;
  line-height: 1.8;
  color: var(--text);
  min-height: 78px;
}

.kt-process-arrow {
  color: var(--teal);
  margin-top: 18px;
  transition: transform .3s;
}

.kt-process-card:hover h3,
.kt-process-card:hover .kt-process-top,
.kt-process-card:hover .kt-process-arrow {
  color: #a6e9d4;
}

.kt-process-card:hover p {
  color: #d5e6e5;
}

.kt-process-card:hover .kt-process-arrow {
  transform: translateX(10px);
}

/* DETAIL HERO */

.kt-detail-hero {
  padding: 105px 0 85px;
  background: #edf6f1;
}

.kt-detail-hero-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 75px;
}

.kt-back {
  display: flex;
  align-items: center;
  gap: 9px;
  background: transparent;
  border: 0;
  color: var(--teal);
  font-size: 12px;
  font-weight: 800;
  margin-bottom: 45px;
}

.kt-back svg {
  transform: rotate(180deg);
}

.kt-detail-hero h1 {
  font-size: clamp(40px,4.7vw,65px);
  line-height: 1.15;
  margin: 22px 0;
  font-weight: 800;
}

.kt-detail-hero-copy > p {
  color: var(--text);
  font-size: 16px;
  line-height: 1.9;
}

.kt-detail-actions {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 32px;
}

.kt-detail-secondary {
  display: flex;
  align-items: center;
  gap: 8px;
  border: 0;
  background: transparent;
  font-size: 13px;
  font-weight: 800;
  color: var(--navy);
}

.kt-detail-secondary:hover {
  color: var(--teal);
}

.kt-detail-image {
  height: 465px;
  position: relative;
}

.kt-detail-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 13px 95px 13px 13px;
  transition: transform .5s;
}

.kt-detail-image:hover img {
  transform: scale(1.025);
}

.kt-detail-image-badge {
  position: absolute;
  bottom: 25px;
  left: -20px;
  display: flex;
  align-items: center;
  gap: 12px;
  background: white;
  padding: 19px 22px;
  border-radius: 8px;
  box-shadow: 0 12px 40px #0002;
  color: var(--teal);
  font-size: 12px;
  font-weight: 800;
}

/* DETAIL CONTENT */

.kt-detail-section {
  padding: 110px 0 120px;
  background: white;
}

.kt-detail-layout {
  display: grid;
  grid-template-columns: minmax(0,1fr) 330px;
  align-items: start;
  gap: 65px;
}

.kt-detail-lead {
  color: var(--text);
  font-size: 16px;
  line-height: 2;
  margin-top: 25px;
}

.kt-highlight {
  display: flex;
  gap: 20px;
  padding: 28px;
  margin: 35px 0 45px;
  background: #edf7f2;
  border-left: 3px solid var(--teal);
  border-radius: 0 10px 10px 0;
}

.kt-highlight > svg {
  color: var(--teal);
  flex-shrink: 0;
}

.kt-highlight h3 {
  font-size: 18px;
  margin: 0 0 10px;
}

.kt-highlight p {
  color: var(--text);
  font-size: 13px;
  line-height: 1.8;
  margin: 0;
}

.kt-benefit {
  display: flex;
  align-items: flex-start;
  gap: 22px;
  padding: 30px 0;
  border-bottom: 1px solid var(--border);
  transition: padding .3s, background .3s;
}

.kt-benefit:hover {
  padding-left: 15px;
  background: #f7faf8;
}

.kt-benefit-number {
  color: var(--teal);
  font-size: 25px;
  font-weight: 800;
}

.kt-benefit-copy {
  flex: 1;
}

.kt-benefit h3 {
  margin: 0 0 10px;
  font-size: 18px;
}

.kt-benefit p {
  color: var(--text);
  font-size: 13px;
  line-height: 1.8;
  margin: 0;
}

.kt-benefit > svg {
  color: var(--teal);
  flex-shrink: 0;
}

/* SIDEBAR */

.kt-sidebar {
  position: sticky;
  top: 110px;
}

.kt-sidebar-panel {
  padding: 28px 23px;
  background: white;
  border: 1px solid var(--border);
  border-radius: 12px;
}

.kt-sidebar-label {
  color: var(--teal);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: .16em;
}

.kt-sidebar-panel h3 {
  font-size: 23px;
  margin: 14px 0 22px;
}

.kt-sidebar-links button {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 6px;
  text-align: left;
  background: transparent;
  border: 0;
  border-bottom: 1px solid var(--border);
  color: var(--navy);
  font-size: 12px;
  font-weight: 700;
  transition: padding .3s, color .3s;
}

.kt-sidebar-links button:hover {
  color: var(--teal);
  padding-left: 13px;
}

.kt-sidebar-links button > span:nth-child(2) {
  flex: 1;
}

.kt-sidebar-icon {
  display: grid;
  place-items: center;
  width: 35px;
  height: 35px;
  flex-shrink: 0;
  background: var(--mint);
  color: var(--teal);
  border-radius: 7px;
}

.kt-sidebar-all {
  display: flex;
  align-items: center;
  gap: 10px;
  background: transparent;
  border: 0;
  color: var(--teal);
  font-size: 12px;
  font-weight: 800;
  margin-top: 23px;
}

.kt-sidebar-cta {
  margin-top: 24px;
  padding: 30px 25px;
  background: var(--navy);
  border-radius: 12px;
  color: white;
}

.kt-sidebar-cta > svg {
  color: #a6e9d4;
}

.kt-sidebar-cta h3 {
  font-size: 25px;
  line-height: 1.35;
  margin: 20px 0 12px;
}

.kt-sidebar-cta p {
  font-size: 13px;
  line-height: 1.8;
  color: #c6d9d8;
}

.kt-sidebar-cta button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 16px;
  margin-top: 23px;
  border: 0;
  border-radius: 6px;
  background: #a6e9d4;
  color: var(--navy);
  font-size: 12px;
  font-weight: 800;
  transition: .3s;
}

.kt-sidebar-cta button:hover {
  background: white;
  transform: translateY(-4px);
}

/* FAQ */

.kt-faq {
  margin-top: 85px;
}

.kt-faq-list {
  margin-top: 30px;
  border-top: 1px solid var(--border);
}

.kt-faq-item {
  border-bottom: 1px solid var(--border);
}

.kt-faq-item > button {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  padding: 22px 5px;
  text-align: left;
  border: 0;
  background: transparent;
  color: var(--navy);
  font-size: 14px;
  font-weight: 800;
  transition: color .3s;
}

.kt-faq-item > button:hover,
.kt-faq-item.active > button {
  color: var(--teal);
}

.kt-faq-toggle {
  display: grid;
  place-items: center;
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  border-radius: 50%;
  background: var(--mint);
  color: var(--teal);
  font-size: 21px;
}

.kt-faq-item.active .kt-faq-toggle {
  background: var(--teal);
  color: white;
}

.kt-faq-answer {
  padding: 0 40px 22px 5px;
  animation: ktFadeUp .3s ease;
}

.kt-faq-answer p {
  color: var(--text);
  font-size: 13px;
  line-height: 1.9;
  margin: 0;
}

/* RESPONSIVE */

@media(max-width:1024px) {
  .kt-intro-grid,
  .kt-feature-grid {
    gap: 45px;
  }

  .kt-card-grid {
    grid-template-columns: repeat(2,minmax(0,1fr));
  }

  .kt-process-grid {
    grid-template-columns: repeat(2,minmax(0,1fr));
  }

  .kt-detail-layout {
    grid-template-columns: minmax(0,1fr) 280px;
    gap: 30px;
  }

  .kt-detail-hero-grid {
    gap: 35px;
  }

  .kt-floating {
    right: 10px;
  }
}

@media(max-width:767px) {
  .kt-container {
    width: min(100% - 36px,540px);
  }

  .kt-hero {
    min-height: 650px;
  }

  .kt-hero-content {
    padding-top: 105px;
    padding-bottom: 45px;
  }

  .kt-hero-overlay {
    background: linear-gradient(90deg,#06252fee,#06252fc0);
  }

  .kt-hero h1 {
    font-size: clamp(39px,9vw,55px);
  }

  .kt-hero-copy > p {
    font-size: 14px;
  }

  .kt-hero-bottom {
    gap: 15px 25px;
    margin-top: 50px;
  }

  .kt-intro,
  .kt-treatments,
  .kt-feature,
  .kt-process,
  .kt-detail-section {
    padding: 75px 0;
  }

  .kt-intro-grid,
  .kt-feature-grid,
  .kt-detail-hero-grid,
  .kt-detail-layout {
    grid-template-columns: 1fr;
    gap: 35px;
  }

  .kt-section-top {
    flex-direction: column;
    align-items: stretch;
  }

  .kt-search {
    min-width: 0;
  }

  .kt-card-grid {
    grid-template-columns: repeat(2,minmax(0,1fr));
    gap: 15px;
  }

  .kt-card-image {
    height: 170px;
  }

  .kt-card-content {
    padding: 30px 16px 18px;
  }

  .kt-card-content h3 {
    font-size: 16px;
  }

  .kt-card-content > p {
    font-size: 12px;
  }

  .kt-feature-image {
    height: 420px;
  }

  .kt-detail-hero {
    padding: 90px 0 60px;
  }

  .kt-detail-image {
    height: 350px;
  }

  .kt-detail-image-badge {
    left: 12px;
  }

  .kt-sidebar {
    position: static;
  }
}

@media(max-width:480px) {
  .kt-card-grid,
  .kt-process-grid {
    grid-template-columns: 1fr;
  }

  .kt-card-image {
    height: 230px;
  }

  .kt-card-content {
    padding: 33px 22px 23px;
  }

  .kt-card-content h3 {
    font-size: 21px;
  }

  .kt-card-content > p {
    min-height: auto;
    font-size: 13px;
  }

  .kt-hero-actions {
    flex-direction: column;
  }

  .kt-btn {
    width: 100%;
  }

  .kt-feature-image {
    height: 330px;
  }

  .kt-floating {
    bottom: 15px;
    padding: 15px;
  }

  .kt-process-card p {
    min-height: 0;
  }

  .kt-detail-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .kt-detail-secondary {
    justify-content: center;
  }

  .kt-detail-image {
    height: 300px;
  }

  .kt-highlight {
    padding: 20px;
  }
}

@media(prefers-reduced-motion:reduce) {
  .kt-page *,
  .kt-page *::before,
  .kt-page *::after {
    animation-duration: .01ms !important;
    transition-duration: .01ms !important;
  }

  .kt-reveal {
    opacity: 1;
    transform: none;
  }
}
`;

/* ==========================================
   IMAGES
========================================== */

const images = {
  hero: photoAt(0),
  clinic: photoAt(1),
};

const treatmentImages = [
  photoAt(2),
  photoAt(3),
  photoAt(4),
  photoAt(5),
  photoAt(6),
];

// Custom images stored in public/images/slides/.
// These apply to both the treatment cards and individual detail pages.

const customTreatmentImages = [ 
{
  match: /general\s*dentistry/i,
  image: '/images/slides/03.jpg.jpeg',
},

  {
    match: /dental\s*implants?|implants?/i,
    image: '/images/slides/1.jpg.jpeg',
  },
  {
    match: /smile\s*design/i,
    image: '/images/slides/1 (6).jpg.jpeg',
  },
  {
    match: /root\s*canal/i,
    image: '/images/slides/02.jpg.jpeg',
  },
  {
    match: /braces|orthodontic/i,
    image: '/images/slides/4 (2).jpg.jpeg',
  },
  {
    match: /teeth\s*whiten/i,
    image: '/images/slides/4.jpg.jpeg',
  },
  {
    match: /crowns?\s*(?:&|and)\s*bridges?/i,
    image: '/images/slides/2.jpg.jpeg',
  },
  {
  match: /clear\s*aligners?/i,
  image: '/images/slides/1636976941859_002.jpg.jpeg',
  }, 
];


function treatmentImage(title: string, index: number): string {
  const custom = customTreatmentImages.find(({ match }) => match.test(title));
  return custom?.image ?? treatmentImages[index % treatmentImages.length];
}


/* ==========================================
   ANIMATION HOOK
========================================== */

function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(
      '.kt-reveal:not(.visible)'
    );

    if (!('IntersectionObserver' in window)) {
      elements.forEach(el => el.classList.add('visible'));
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  });
}

/* ==========================================
   REUSABLE COMPONENTS
========================================== */

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <span className="kt-eyebrow">{children}</span>;
}

function TreatmentCard({
  treatment,
  index,
  go,
}: {
  treatment: (typeof treatments)[number];
  index: number;
  go: Go;
}) {
  const Icon = treatment.icon;

  return (
    <article className="kt-card">
      <button
        className="kt-card-button"
        onClick={() => go(`/treatments/${treatment.slug}`)}
        aria-label={`Explore ${treatment.title}`}
      >
        <div className="kt-card-image">
          <img
            src={treatmentImage(treatment.title, index)}
            alt={treatment.title}
            loading="lazy"
          />

          <span className="kt-card-number">
            {String(index + 1).padStart(2, '0')}
          </span>

          <span className="kt-card-icon">
            <Icon size={23} />
          </span>
        </div>

        <div className="kt-card-content">
          <span className="kt-card-label">DENTAL TREATMENT</span>

          <h3>{treatment.title}</h3>

          <p>{treatment.text}</p>

          <div className="kt-card-bottom">
            <span>Explore treatment</span>
            <span className="kt-card-arrow">
              <ArrowUpRight size={20} />
            </span>
          </div>
        </div>
      </button>
    </article>
  );
}

/* ==========================================
   MAIN TREATMENTS PAGE
========================================== */

export function Treatments({ go }: { go: Go }) {
  const [search, setSearch] = useState('');

  useReveal();

  const filtered = treatments
    .map((treatment, index) => ({ treatment, index }))
    .filter(({ treatment }) =>
      `${treatment.title} ${treatment.text}`
        .toLowerCase()
        .includes(search.toLowerCase().trim())
    );

  return (
    <>
      <style>{styles}</style>

      <main className="kt-page">

        {/* HERO */}

        <section className="kt-hero">
          <div className="kt-hero-image">
            <img src={images.hero} alt="Modern dental care" />
          </div>

          <div className="kt-hero-overlay" />

          <div className="kt-container kt-hero-content">
            <div className="kt-hero-copy">

              <span className="kt-hero-pill">
                <Sparkles size={15} />
                YOUR SMILE, OUR PRIORITY
              </span>

              <h1>
                Exceptional care.
                <br />
                <span>Beautiful smiles.</span>
              </h1>

              <p>
                Discover thoughtful, personalised dental care
                designed around your comfort, confidence and
                long-term oral health.
              </p>

              <div className="kt-hero-actions">
                <button
                  className="kt-btn kt-btn-light"
                  onClick={() =>
                    document
                      .getElementById('kt-treatments')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                >
                  Explore Treatments
                  <ArrowUpRight size={19} />
                </button>

                <button
                  className="kt-btn kt-btn-outline"
                  onClick={() => go('/book-appointment')}
                >
                  Book Consultation
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>

            <div className="kt-hero-bottom">
              <span><Heart size={17} /> Patient-first approach</span>
              <span><ShieldCheck size={17} /> Personalised guidance</span>
              <span><Smile size={17} /> Smile-focused care</span>
            </div>
          </div>
        </section>

        {/* INTRO */}

        <section className="kt-intro">
          <div className="kt-container kt-intro-grid">

            <div className="kt-reveal">
              <Eyebrow>EXPLORE OUR CARE</Eyebrow>

              <h2 className="kt-heading">
                Every smile deserves
                <span> thoughtful care.</span>
              </h2>
            </div>

            <div className="kt-intro-right kt-reveal">
              <p>
                From everyday oral health conversations to exploring
                options for your smile, we believe great dental care
                begins with understanding you.
              </p>

              <div className="kt-intro-caption">
                Personal care. Clear conversations.
              </div>
            </div>
          </div>
        </section>

        {/* TREATMENTS GRID */}

        <section id="kt-treatments" className="kt-treatments">
          <div className="kt-container">

            <div className="kt-section-top">
              <div>
                <Eyebrow>OUR TREATMENT COLLECTION</Eyebrow>

                <h2 className="kt-heading">
                  Explore your <span>care options.</span>
                </h2>

                <p>
                  Learn about dental treatment categories and the
                  conversations you can have with our team.
                </p>
              </div>

              <div className="kt-search">
                <Search size={19} />

                <input
                  type="search"
                  placeholder="Search treatments..."
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  aria-label="Search treatments"
                />

                {search && (
                  <button
                    onClick={() => setSearch('')}
                    aria-label="Clear search"
                  >
                    <X size={17} />
                  </button>
                )}
              </div>
            </div>

            <div className="kt-card-grid">
              {filtered.map(({ treatment, index }) => (
                <TreatmentCard
                  key={treatment.slug}
                  treatment={treatment}
                  index={index}
                  go={go}
                />
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="kt-empty">
                <Search size={32} />
                <h3>No treatments found</h3>
                <p>Try searching with another keyword.</p>
                <button onClick={() => setSearch('')}>
                  View all treatments <ArrowRight size={17} />
                </button>
              </div>
            )}

            <div className="kt-notice">
              <Lightbulb size={24} />
              <p>
                Treatment availability is confirmed by the clinic.
                Every treatment conversation begins with an
                individual consultation.
              </p>
            </div>
          </div>
        </section>

        <TreatmentJourney />

        {/* FEATURE SECTION */}

        <section className="kt-feature">
          <div className="kt-container kt-feature-grid">

            <div className="kt-feature-image kt-reveal">
              <img
                src={images.clinic}
                alt="Modern dental clinic interior"
                loading="lazy"
              />

              <div className="kt-floating">
                <Heart size={22} />
                <div>
                  <strong>Care that listens</strong>
                  <span>Your comfort matters.</span>
                </div>
              </div>
            </div>

            <div className="kt-feature-copy kt-reveal">
              <Eyebrow>THE KEERTI CURE APPROACH</Eyebrow>

              <h2 className="kt-heading">
                Dentistry with
                <span> a human touch.</span>
              </h2>

              <p>
                Your questions deserve attention, your concerns
                deserve understanding, and your treatment decisions
                deserve clarity.
              </p>

              <div className="kt-feature-list">
                {[
                  {
                    icon: Heart,
                    title: 'We listen first',
                    text: 'Your concerns and goals guide the conversation.',
                  },
                  {
                    icon: Stethoscope,
                    title: 'We explain clearly',
                    text: 'Understand relevant options and next steps.',
                  },
                  {
                    icon: ShieldCheck,
                    title: 'We respect your decisions',
                    text: 'Take time to make informed choices.',
                  },
                ].map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div className="kt-feature-item" key={index}>
                      <span className="kt-feature-icon">
                        <Icon size={22} />
                      </span>

                      <div>
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <button
                className="kt-btn kt-btn-primary"
                onClick={() => go('/book-appointment')}
              >
                Request a Consultation
                <ArrowUpRight size={19} />
              </button>
            </div>
          </div>
        </section>

        {/* PROCESS */}

        <section className="kt-process">
          <div className="kt-container">

            <div className="kt-process-heading kt-reveal">
              <Eyebrow>YOUR VISIT, SIMPLIFIED</Eyebrow>

              <h2 className="kt-heading">
                Your journey to
                <span> confident care.</span>
              </h2>
            </div>

            <div className="kt-process-grid">
              {[
                {
                  icon: Clock3,
                  number: '01',
                  title: 'Schedule your visit',
                  text: 'Get in touch to request a convenient consultation.',
                },
                {
                  icon: Heart,
                  number: '02',
                  title: 'Share your concerns',
                  text: 'Discuss your oral health, questions and goals.',
                },
                {
                  icon: Stethoscope,
                  number: '03',
                  title: 'Understand your options',
                  text: 'Receive guidance following an assessment.',
                },
                {
                  icon: Smile,
                  number: '04',
                  title: 'Choose your next step',
                  text: 'Make an informed decision about your dental care.',
                },
              ].map(item => {
                const Icon = item.icon;

                return (
                  <div className="kt-process-card" key={item.number}>
                    <div className="kt-process-top">
                      <span>{item.number}</span>
                      <Icon size={25} />
                    </div>

                    <h3>{item.title}</h3>
                    <p>{item.text}</p>

                    <MoveRight
                      size={22}
                      className="kt-process-arrow"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <Cta go={go} />
      </main>
    </>
  );
}

/* ==========================================
   INDIVIDUAL TREATMENT DETAIL PAGE
========================================== */

export function TreatmentDetail({
  slug,
  go,
}: {
  slug: string;
  go: Go;
}) {
  const [expanded, setExpanded] = useState<number | null>(0);

  useReveal();

  const treatment = treatments.find(item => item.slug === slug);

  if (!treatment) {
    return <NotFound go={go} />;
  }

  const Icon = treatment.icon;
  const currentIndex = treatments.findIndex(t => t.slug === slug);

  const faqs = [
    {
      question: `How do I know if ${treatment.title.toLowerCase()} is right for me?`,
      answer:
        'Your dentist can assess your oral health, listen to your concerns and explain whether this treatment may be suitable for your individual needs.',
    },
    {
      question: 'What should I bring to my consultation?',
      answer:
        'Bring any relevant dental records, medication information and questions you would like to discuss.',
    },
    {
      question: 'Can I ask about alternative treatment options?',
      answer:
        'Yes. You can discuss alternatives, expected benefits, potential risks and other considerations before making a decision.',
    },
  ];

  return (
    <>
      <style>{styles}</style>

      <main className="kt-page">

        {/* DETAIL HERO */}

        <section className="kt-detail-hero">
          <div className="kt-container kt-detail-hero-grid">

            <div className="kt-detail-hero-copy">
              <button
                className="kt-back"
                onClick={() => go('/treatments')}
              >
                <ArrowRight size={17} />
                All Treatments
              </button>

              <Eyebrow>PERSONALISED DENTAL CARE</Eyebrow>

              <h1>{treatment.title}</h1>

              <p>{treatment.text}</p>

              <div className="kt-detail-actions">
                <button
                  className="kt-btn kt-btn-primary"
                  onClick={() => go('/book-appointment')}
                >
                  Book a Consultation
                  <ArrowUpRight size={19} />
                </button>

                <button
                  className="kt-detail-secondary"
                  onClick={() =>
                    document
                      .getElementById('kt-detail-info')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                >
                  Learn more <ChevronRight size={19} />
                </button>
              </div>
            </div>

            <div className="kt-detail-image">
              <img
                src={treatmentImage(treatment.title, currentIndex)}
                alt={treatment.title}
              />

              <div className="kt-detail-image-badge">
                <Icon size={23} />
                <span>Care tailored to you</span>
              </div>
            </div>
          </div>
        </section>

        {/* DETAIL CONTENT */}

        <section id="kt-detail-info" className="kt-detail-section">
          <div className="kt-container kt-detail-layout">

            <div className="kt-detail-main">

              <Eyebrow>UNDERSTANDING YOUR CARE</Eyebrow>

              <h2 className="kt-heading">
                Your smile.
                <span> Your decisions.</span>
              </h2>

              <p className="kt-detail-lead">
                Every smile is unique. At Keerti Cure Dental,
                the first step is understanding your concerns
                and oral health before discussing relevant
                treatment options.
              </p>

              <div className="kt-highlight">
                <Sparkles size={26} />

                <div>
                  <h3>A conversation, not a promise.</h3>

                  <p>
                    Recommendations depend on an individual clinical
                    assessment. Your dentist will help you understand
                    the available options.
                  </p>
                </div>
              </div>

              {/* BENEFITS */}

              {[
                {
                  number: '01',
                  title: 'What to expect',
                  text: 'A clear discussion about your dental concerns, goals and relevant next steps.',
                },
                {
                  number: '02',
                  title: 'Preparing for your visit',
                  text: 'Bring your questions and share anything you would like the team to understand.',
                },
                {
                  number: '03',
                  title: 'After your consultation',
                  text: 'Take time to consider the advice, ask questions and decide what feels right for you.',
                },
              ].map(item => (
                <div className="kt-benefit" key={item.number}>
                  <span className="kt-benefit-number">
                    {item.number}
                  </span>

                  <div className="kt-benefit-copy">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>

                  <Check size={20} />
                </div>
              ))}

              {/* FAQ */}

              <div className="kt-faq">
                <Eyebrow>COMMON QUESTIONS</Eyebrow>

                <h2 className="kt-heading">
                  Questions,
                  <span> answered.</span>
                </h2>

                <div className="kt-faq-list">
                  {faqs.map((faq, index) => (
                    <div
                      className={`kt-faq-item ${
                        expanded === index ? 'active' : ''
                      }`}
                      key={index}
                    >
                      <button
                        aria-expanded={expanded === index}
                        onClick={() =>
                          setExpanded(
                            expanded === index ? null : index
                          )
                        }
                      >
                        <span>{faq.question}</span>

                        <span className="kt-faq-toggle">
                          {expanded === index ? '−' : '+'}
                        </span>
                      </button>

                      {expanded === index && (
                        <div className="kt-faq-answer">
                          <p>{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* SIDEBAR */}

            <aside className="kt-sidebar">
              <div className="kt-sidebar-panel">

                <span className="kt-sidebar-label">
                  DISCOVER MORE
                </span>

                <h3>Explore treatments</h3>

                <div className="kt-sidebar-links">
                  {treatments
                    .filter(t => t.slug !== slug)
                    .slice(0, 6)
                    .map(t => {
                      const SideIcon = t.icon;

                      return (
                        <button
                          key={t.slug}
                          onClick={() =>
                            go(`/treatments/${t.slug}`)
                          }
                        >
                          <span className="kt-sidebar-icon">
                            <SideIcon size={19} />
                          </span>

                          <span>{t.title}</span>

                          <ArrowUpRight size={17} />
                        </button>
                      );
                    })}
                </div>

                <button
                  className="kt-sidebar-all"
                  onClick={() => go('/treatments')}
                >
                  View all treatments
                  <ArrowRight size={17} />
                </button>
              </div>

              <div className="kt-sidebar-cta">
                <Heart size={29} />

                <h3>Let's talk about your smile.</h3>

                <p>
                  Have questions about your dental health?
                  Start with a personalised consultation.
                </p>

                <button
                  onClick={() => go('/book-appointment')}
                >
                  Request Appointment
                  <ArrowUpRight size={19} />
                </button>
              </div>
            </aside>
          </div>
        </section>

        <Cta go={go} />
      </main>
    </>
  );
}
