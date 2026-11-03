
import { useState, type FormEvent } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Facebook,
  Instagram,
  Youtube,
  Phone,
  MapPin,
  MessageCircle,
  Send,
  Heart,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  ChevronRight,
  Loader2,
  AlertCircle,
} from 'lucide-react';

import { supabase } from '@/lib/supabase';
import {
  phone,
  phoneLink,
  maps,
  instagram,
  facebook,
  type Go,
} from '@/lib/constants';
import { Cta } from '@/components/Layout';
import { ClinicHours } from '@/components/ClinicHours';
import { photoAt } from '@/lib/sitePhotos';

/* ============================================
   PREMIUM CONTACT PAGE CSS
   ALL STYLES INSIDE THIS FILE
============================================ */

const contactStyles = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Manrope:wght@400;500;600;700;800&display=swap');

.kc-contact {
  --kc-navy: #102e39;
  --kc-deep: #09252e;
  --kc-teal: #087f80;
  --kc-teal-dark: #066467;
  --kc-mint: #e9f6f0;
  --kc-soft: #f5faf7;
  --kc-text: #60737b;
  --kc-border: #e0eae5;
  --kc-white: #ffffff;

  font-family: 'DM Sans', sans-serif;
  color: var(--kc-navy);
  overflow: clip;
}

.kc-contact *,
.kc-contact *::before,
.kc-contact *::after {
  box-sizing: border-box;
}

.kc-contact h1,
.kc-contact h2,
.kc-contact h3,
.kc-contact h4 {
  font-family: 'Manrope', sans-serif;
  letter-spacing: -0.045em;
}

.kc-contact button,
.kc-contact input,
.kc-contact textarea,
.kc-contact select {
  font-family: 'DM Sans', sans-serif;
}

.kc-contact button {
  cursor: pointer;
}

.kc-container {
  width: min(1180px, calc(100% - 48px));
  margin-inline: auto;
}

/* ============================================
   KEYFRAME ANIMATIONS
============================================ */

@keyframes kcFadeUp {
  from {
    opacity: 0;
    transform: translateY(35px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes kcFadeLeft {
  from {
    opacity: 0;
    transform: translateX(-35px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes kcZoom {
  from {
    transform: scale(1.12);
  }
  to {
    transform: scale(1);
  }
}

@keyframes kcFloat {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-9px);
  }
}

@keyframes kcPulse {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(8,127,128,.25);
  }
  60% {
    box-shadow: 0 0 0 12px rgba(8,127,128,0);
  }
}

@keyframes kcSpin {
  to {
    transform: rotate(360deg);
  }
}

/* ============================================
   TYPOGRAPHY
============================================ */

.kc-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 11px;
  color: var(--kc-teal);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: .17em;
  text-transform: uppercase;
}

.kc-eyebrow::before {
  content: '';
  width: 26px;
  height: 2px;
  background: currentColor;
}

.kc-heading {
  font-size: clamp(33px, 3.8vw, 52px);
  line-height: 1.16;
  font-weight: 800;
  margin: 18px 0;
}

.kc-heading span {
  color: var(--kc-teal);
}

.kc-description {
  color: var(--kc-text);
  font-size: 15px;
  line-height: 1.95;
}

/* ============================================
   HERO SECTION
============================================ */

.kc-hero {
  position: relative;
  min-height: 530px;
  display: flex;
  align-items: center;
  background: var(--kc-deep);
  color: white;
  isolation: isolate;
}

.kc-hero-photo,
.kc-hero-overlay {
  position: absolute;
  inset: 0;
  z-index: -1;
}

.kc-hero-photo {
  overflow: hidden;
}

.kc-hero-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 45%;
  animation: kcZoom 12s ease-out both;
}

.kc-hero-overlay {
  background:
    linear-gradient(
      90deg,
      rgba(4,32,40,.97) 0%,
      rgba(4,32,40,.88) 42%,
      rgba(4,32,40,.32) 100%
    ),
    linear-gradient(
      0deg,
      rgba(4,32,40,.35),
      transparent 60%
    );
}

.kc-hero-content {
  padding-top: 110px;
  padding-bottom: 90px;
}

.kc-hero-copy {
  max-width: 720px;
  animation: kcFadeUp .9s ease both;
}

.kc-hero-pill {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 11px 17px;
  border-radius: 50px;
  border: 1px solid #ffffff55;
  background: #ffffff15;
  backdrop-filter: blur(12px);
  color: #d9f5ea;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: .16em;
}

.kc-hero h1 {
  font-size: clamp(44px, 5.5vw, 76px);
  line-height: 1.09;
  font-weight: 800;
  letter-spacing: -.06em;
  margin: 27px 0;
}

.kc-hero h1 span {
  color: #a5e5d1;
}

.kc-hero-copy > p {
  max-width: 550px;
  color: #d9eae8;
  font-size: 16px;
  line-height: 1.95;
}

.kc-hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 33px;
}

.kc-hero-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 23px;
  padding: 17px 25px;
  border-radius: 7px;
  text-decoration: none;
  font-size: 13px;
  font-weight: 800;
  transition: all .35s ease;
}

.kc-hero-btn svg {
  transition: transform .3s;
}

.kc-hero-btn:hover {
  transform: translateY(-4px);
}

.kc-hero-btn:hover svg {
  transform: translate(4px,-3px);
}

.kc-hero-btn-primary {
  background: white;
  color: var(--kc-navy);
  border: 1px solid white;
}

.kc-hero-btn-primary:hover {
  background: #dff5ea;
  box-shadow: 0 15px 35px #0002;
}

.kc-hero-btn-outline {
  background: transparent;
  color: white;
  border: 1px solid #ffffff80;
}

.kc-hero-btn-outline:hover {
  background: white;
  color: var(--kc-navy);
}

/* ============================================
   INTRO
============================================ */

.kc-intro {
  padding: 100px 0 80px;
  background: white;
}

.kc-intro-grid {
  display: grid;
  grid-template-columns: 1.1fr .85fr;
  gap: 100px;
  align-items: center;
}

.kc-intro-right p {
  color: var(--kc-text);
  font-size: 16px;
  line-height: 2;
}

.kc-intro-line {
  display: flex;
  align-items: center;
  gap: 13px;
  margin-top: 25px;
  font-size: 12px;
  font-weight: 800;
  color: var(--kc-teal);
}

.kc-intro-line::before {
  content: '';
  width: 40px;
  height: 1px;
  background: var(--kc-teal);
}

/* ============================================
   CONTACT SECTION
============================================ */

.kc-main-section {
  padding: 90px 0 120px;
  background: var(--kc-soft);
}

.kc-contact-grid {
  display: grid;
  grid-template-columns: .9fr 1.1fr;
  gap: 70px;
  align-items: start;
}

.kc-info-heading {
  margin-bottom: 35px;
}

.kc-info-heading h2 {
  font-size: clamp(30px, 3vw, 42px);
  line-height: 1.2;
  margin: 17px 0;
}

.kc-info-heading h2 span {
  color: var(--kc-teal);
}

.kc-info-heading p {
  color: var(--kc-text);
  font-size: 14px;
  line-height: 1.9;
}

/* CONTACT CARDS */

.kc-contact-cards {
  display: flex;
  flex-direction: column;
  gap: 17px;
}

.kc-contact-card {
  position: relative;
  display: flex;
  align-items: center;
  gap: 18px;
  width: 100%;
  text-align: left;
  padding: 24px;
  border-radius: 12px;
  background: white;
  border: 1px solid var(--kc-border);
  text-decoration: none;
  color: var(--kc-navy);
  overflow: hidden;
  transition:
    transform .35s ease,
    background .35s ease,
    box-shadow .35s ease,
    border-color .35s ease;
}

.kc-contact-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 4px;
  background: var(--kc-teal);
  transform: scaleY(0);
  transform-origin: bottom;
  transition: transform .4s ease;
}

.kc-contact-card:hover {
  transform: translateX(9px);
  background: #f0faf5;
  border-color: #abd9cb;
  box-shadow: 0 15px 40px #0b494615;
}

.kc-contact-card:hover::before {
  transform: scaleY(1);
}

.kc-contact-icon {
  width: 57px;
  height: 57px;
  flex-shrink: 0;
  display: grid;
  place-items: center;
  border-radius: 10px;
  background: var(--kc-mint);
  color: var(--kc-teal);
  transition: all .35s ease;
}

.kc-contact-card:hover .kc-contact-icon {
  background: var(--kc-teal);
  color: white;
  transform: rotate(-8deg) scale(1.06);
}

.kc-contact-card-copy {
  flex: 1;
  min-width: 0;
}

.kc-contact-card-copy small {
  display: block;
  color: var(--kc-text);
  font-size: 11px;
  font-weight: 700;
  margin-bottom: 8px;
}

.kc-contact-card-copy strong {
  display: block;
  font-size: 15px;
  font-weight: 800;
  overflow-wrap: anywhere;
}

.kc-contact-arrow {
  flex-shrink: 0;
  color: var(--kc-teal);
  transition: transform .3s;
}

.kc-contact-card:hover .kc-contact-arrow {
  transform: translate(4px,-4px);
}

/* ============================================
   SOCIAL MEDIA - INSTAGRAM, FACEBOOK, YOUTUBE
============================================ */

.kc-social-section {
  margin-top: 40px;
}

.kc-social-section h3 {
  font-size: 17px;
  margin-bottom: 19px;
}

.kc-social-links {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.kc-social-link {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 14px 15px;
  background: white;
  border: 1px solid var(--kc-border);
  border-radius: 8px;
  text-decoration: none;
  color: var(--kc-navy);
  font-size: 12px;
  font-weight: 800;
  transition: all .35s ease;
}

.kc-social-link svg {
  width: 19px;
  height: 19px;
  flex-shrink: 0;
}

.kc-social-link svg:last-child {
  width: 14px;
  height: 14px;
  transition: transform .3s ease;
}

.kc-social-link:hover {
  transform: translateY(-5px);
  background: var(--kc-teal);
  color: white;
  border-color: var(--kc-teal);
  box-shadow: 0 12px 30px #087f8025;
}

.kc-social-link:hover svg:last-child {
  transform: translate(3px, -3px);
}

/* ============================================
   FORM CARD
============================================ */

.kc-form-card {
  position: relative;
  padding: 45px;
  border-radius: 17px;
  background: white;
  border: 1px solid var(--kc-border);
  box-shadow: 0 22px 65px #102e390c;
  animation: kcFadeUp .8s ease both;
}

.kc-form-top-icon {
  display: grid;
  place-items: center;
  width: 54px;
  height: 54px;
  border-radius: 12px;
  color: var(--kc-teal);
  background: var(--kc-mint);
  margin-bottom: 23px;
}

.kc-form-header {
  margin-bottom: 32px;
}

.kc-form-header h2 {
  font-size: clamp(28px, 3vw, 39px);
  line-height: 1.2;
  font-weight: 800;
  margin: 15px 0;
}

.kc-form-header h2 span {
  color: var(--kc-teal);
}

.kc-form-header p {
  color: var(--kc-text);
  font-size: 13px;
  line-height: 1.8;
}

/* INPUT FIELDS */

.kc-form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
}

.kc-field {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 23px;
}

.kc-field label {
  font-size: 12px;
  font-weight: 800;
  color: var(--kc-navy);
}

.kc-field label span {
  color: #92a2a4;
  font-weight: 500;
}

.kc-field input,
.kc-field textarea,
.kc-field select {
  width: 100%;
  padding: 15px 17px;
  border: 1px solid #dce6e1;
  border-radius: 8px;
  background: #fbfdfc;
  color: var(--kc-navy);
  font-size: 13px;
  outline: none;
  transition:
    border-color .3s ease,
    box-shadow .3s ease,
    background .3s ease,
    transform .3s ease;
}

.kc-field input:hover,
.kc-field textarea:hover,
.kc-field select:hover {
  border-color: #9acdc0;
  background: white;
}

.kc-field input:focus,
.kc-field textarea:focus,
.kc-field select:focus {
  background: white;
  border-color: var(--kc-teal);
  box-shadow: 0 0 0 4px #087f8010;
  transform: translateY(-2px);
}

.kc-field input::placeholder,
.kc-field textarea::placeholder {
  color: #a0adb0;
}

.kc-field textarea {
  min-height: 135px;
  resize: vertical;
  line-height: 1.7;
}

.kc-field select {
  appearance: none;
  cursor: pointer;
}

.kc-select-wrap {
  position: relative;
}

.kc-select-wrap select {
  padding-right: 40px;
}

.kc-select-wrap > svg {
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%) rotate(90deg);
  pointer-events: none;
  color: var(--kc-teal);
}

/* CONSENT */

.kc-consent {
  display: flex;
  align-items: flex-start;
  gap: 11px;
  margin: 4px 0 25px;
  cursor: pointer;
}

.kc-consent input {
  margin-top: 4px;
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  accent-color: var(--kc-teal);
  cursor: pointer;
}

.kc-consent span {
  color: var(--kc-text);
  font-size: 12px;
  line-height: 1.8;
}

/* SUBMIT BUTTON */

.kc-submit {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding: 18px 25px;
  background: var(--kc-teal);
  color: white;
  border: 0;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 800;
  transition: all .35s ease;
}

.kc-submit svg {
  transition: transform .3s;
}

.kc-submit:hover:not(:disabled) {
  transform: translateY(-4px);
  background: var(--kc-navy);
  box-shadow: 0 15px 35px #087f8030;
}

.kc-submit:hover:not(:disabled) svg {
  transform: translate(5px,-3px);
}

.kc-submit:disabled {
  opacity: .65;
  cursor: not-allowed;
}

.kc-form-footnote {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 20px;
  color: #819396;
  font-size: 11px;
  text-align: center;
}

.kc-form-footnote svg {
  color: var(--kc-teal);
  flex-shrink: 0;
}

/* ERROR */

.kc-form-error {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 14px 16px;
  margin-bottom: 20px;
  border: 1px solid #f3c9c9;
  background: #fff4f4;
  border-radius: 8px;
  color: #a33131;
  font-size: 12px;
  line-height: 1.6;
}

.kc-form-error svg {
  flex-shrink: 0;
}

/* SUCCESS */

.kc-success {
  text-align: center;
  padding: 45px 10px;
  animation: kcFadeUp .6s ease both;
}

.kc-success-icon {
  width: 90px;
  height: 90px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: var(--kc-mint);
  color: var(--kc-teal);
  margin: 0 auto 28px;
  animation: kcPulse 2.5s infinite;
}

.kc-success h2 {
  font-size: 32px;
  margin: 0 0 16px;
}

.kc-success p {
  color: var(--kc-text);
  font-size: 14px;
  line-height: 1.9;
  max-width: 390px;
  margin: 0 auto 28px;
}

.kc-success button {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 15px 22px;
  background: var(--kc-teal);
  color: white;
  border: 0;
  border-radius: 7px;
  font-size: 12px;
  font-weight: 800;
  transition: .3s;
}

.kc-success button:hover {
  background: var(--kc-navy);
  transform: translateY(-4px);
}

/* ============================================
   VISIT SECTION
============================================ */

.kc-visit-section {
  padding: 115px 0;
  background: white;
}

.kc-visit-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 85px;
  align-items: center;
}

.kc-visit-image {
  height: 520px;
  position: relative;
}

.kc-visit-image > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
  transition: filter .4s;
}

.kc-visit-image:hover > img {
  filter: saturate(1.2);
}

.kc-visit-floating {
  position: absolute;
  bottom: 30px;
  right: -25px;
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 21px 24px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 15px 45px #0002;
  animation: kcFloat 5s ease-in-out infinite;
}

.kc-visit-floating svg {
  color: var(--kc-teal);
}

.kc-visit-floating strong,
.kc-visit-floating span {
  display: block;
}

.kc-visit-floating strong {
  font-size: 13px;
}

.kc-visit-floating span {
  color: var(--kc-text);
  font-size: 11px;
  margin-top: 5px;
}

.kc-visit-content > p {
  color: var(--kc-text);
  font-size: 15px;
  line-height: 1.95;
  margin: 23px 0 30px;
}

.kc-visit-points {
  margin-bottom: 35px;
}

.kc-visit-point {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 19px 0;
  border-bottom: 1px solid var(--kc-border);
  transition: padding-left .3s;
}

.kc-visit-point:hover {
  padding-left: 10px;
}

.kc-visit-point > span {
  width: 44px;
  height: 44px;
  flex-shrink: 0;
  display: grid;
  place-items: center;
  border-radius: 9px;
  background: var(--kc-mint);
  color: var(--kc-teal);
  transition: .3s;
}

.kc-visit-point:hover > span {
  background: var(--kc-teal);
  color: white;
}

.kc-visit-point strong {
  font-size: 14px;
}

.kc-directions-btn {
  display: inline-flex;
  align-items: center;
  gap: 20px;
  padding: 17px 24px;
  background: var(--kc-teal);
  border-radius: 7px;
  color: white;
  text-decoration: none;
  font-size: 13px;
  font-weight: 800;
  transition: all .35s;
}

.kc-directions-btn:hover {
  background: var(--kc-navy);
  transform: translateY(-4px);
  box-shadow: 0 15px 35px #087f8030;
}

.kc-directions-btn svg {
  transition: transform .3s;
}

.kc-directions-btn:hover svg {
  transform: translate(4px,-3px);
}

/* ============================================
   RESPONSIVE DESIGN
============================================ */

@media (max-width: 1024px) {
  .kc-contact-grid {
    gap: 35px;
  }

  .kc-form-card {
    padding: 32px;
  }

  .kc-intro-grid,
  .kc-visit-grid {
    gap: 45px;
  }
}

@media (max-width: 767px) {
  .kc-container {
    width: min(100% - 36px, 540px);
  }

  .kc-hero {
    min-height: 550px;
  }

  .kc-hero-content {
    padding-top: 100px;
    padding-bottom: 65px;
  }

  .kc-hero-overlay {
    background: linear-gradient(
      90deg,
      rgba(4,32,40,.96),
      rgba(4,32,40,.75)
    );
  }

  .kc-hero h1 {
    font-size: clamp(40px, 9vw, 55px);
  }

  .kc-hero-copy > p {
    font-size: 14px;
  }

  .kc-intro,
  .kc-main-section,
  .kc-visit-section {
    padding: 75px 0;
  }

  .kc-intro-grid,
  .kc-contact-grid,
  .kc-visit-grid {
    grid-template-columns: 1fr;
    gap: 35px;
  }

  .kc-form-card {
    padding: 28px 23px;
  }

  .kc-visit-image {
    height: 390px;
  }

  .kc-visit-floating {
    right: 10px;
    bottom: 15px;
  }
}

@media (max-width: 480px) {
  .kc-hero-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .kc-hero-btn {
    width: 100%;
  }

  .kc-form-row {
    grid-template-columns: 1fr;
    gap: 0;
  }

  .kc-contact-card {
    padding: 18px 15px;
    gap: 13px;
  }

  .kc-contact-icon {
    width: 48px;
    height: 48px;
  }

  .kc-contact-card-copy strong {
    font-size: 13px;
  }

  .kc-social-links {
    flex-direction: column;
  }

  .kc-social-link {
    justify-content: center;
  }

  .kc-visit-image {
    height: 310px;
  }

  .kc-visit-floating {
    padding: 14px;
  }

  .kc-form-card {
    padding: 25px 18px;
  }

  .kc-heading {
    font-size: 34px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .kc-contact *,
  .kc-contact *::before,
  .kc-contact *::after {
    animation-duration: .01ms !important;
    transition-duration: .01ms !important;
    scroll-behavior: auto !important;
  }
}
`;

/* ============================================
   IMAGES
============================================ */

const contactImages = {
  hero: photoAt(7),
  clinic: photoAt(8),
};

const youtube =
  'https://www.youtube.com/@KeertiCureDental';

/* ============================================
   CONTACT PAGE
============================================ */

export function Contact({ go }: { go: Go }) {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const submit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (loading) return;

    setLoading(true);
    setError('');

    const form = event.currentTarget;
    const data = new FormData(form);

    const fullName = String(
      data.get('fullName') || ''
    ).trim();

    const contactPhone = String(
      data.get('phone') || ''
    ).trim();

    const email = String(
      data.get('email') || ''
    ).trim();

    const subject = String(
      data.get('subject') || ''
    ).trim();

    const message = String(
      data.get('message') || ''
    ).trim();

    const privacyConsent =
      data.get('privacyConsent') === 'on';

    if (
      !fullName ||
      !contactPhone ||
      !subject ||
      !message
    ) {
      setError(
        'Please complete all required fields.'
      );
      setLoading(false);
      return;
    }

    if (!privacyConsent) {
      setError(
        'Please agree to the privacy consent before submitting.'
      );
      setLoading(false);
      return;
    }

    if (!supabase) {
      setError(
        'The contact form is temporarily unavailable. Please call the clinic directly.'
      );
      setLoading(false);
      return;
    }

    try {
      const { error: insertError } = await supabase
        .from('contact_messages')
        .insert({
          full_name: fullName,
          phone: contactPhone,
          email: email || null,
          subject,
          message,
          privacy_consent: privacyConsent,
        });

      if (insertError) {
        throw insertError;
      }

      setSent(true);
      form.reset();
    } catch (err) {
      console.error(
        'Contact form submission failed:',
        err
      );

      setError(
        'Your message could not be sent. Please try again or contact the clinic by phone.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>{contactStyles}</style>

      <main className="kc-contact">

        {/* ==================================
            HERO SECTION
        ================================== */}

        <section className="kc-hero">
          <div className="kc-hero-photo">
            <img
              src={contactImages.hero}
              alt="Dental care at Keerti Cure Dental"
            />
          </div>

          <div className="kc-hero-overlay" />

          <div className="kc-container kc-hero-content">
            <div className="kc-hero-copy">

              <span className="kc-hero-pill">
                <Sparkles size={15} />
                WE ARE HERE FOR YOU
              </span>

              <h1>
                Let's start a
                <br />
                <span>conversation.</span>
              </h1>

              <p>
                Have a question about your dental health?
                Our team is here to listen, guide and help
                you take the next step towards a confident
                smile.
              </p>

              <div className="kc-hero-actions">

                <a
                  className="kc-hero-btn kc-hero-btn-primary"
                  href="#kc-contact-form"
                >
                  Send an Enquiry
                  <ArrowUpRight size={19} />
                </a>

                <a
                  className="kc-hero-btn kc-hero-btn-outline"
                  href={phoneLink}
                >
                  Call Our Clinic
                  <Phone size={18} />
                </a>

              </div>
            </div>
          </div>
        </section>

        {/* ==================================
            INTRO SECTION
        ================================== */}

        <section className="kc-intro">
          <div className="kc-container kc-intro-grid">

            <div>
              <span className="kc-eyebrow">
                GET IN TOUCH
              </span>

              <h2 className="kc-heading">
                Your questions
                <span> matter to us.</span>
              </h2>
            </div>

            <div className="kc-intro-right">
              <p>
                Whether you would like to ask about a
                treatment, request a consultation or
                simply find your way to the clinic,
                we have made connecting with us
                easy and convenient.
              </p>

              <div className="kc-intro-line">
                Real conversations. Thoughtful care.
              </div>
            </div>

          </div>
        </section>

        {/* ==================================
            CONTACT INFO + FORM
        ================================== */}

        <section
          className="kc-main-section"
          id="kc-contact-form"
        >
          <div className="kc-container kc-contact-grid">

            {/* LEFT SIDE CONTACT INFO */}

            <div className="kc-contact-info">

              <div className="kc-info-heading">
                <span className="kc-eyebrow">
                  CONTACT DETAILS
                </span>

                <h2>
                  Reach Keerti
                  <br />
                  <span>Cure Dental.</span>
                </h2>

                <p>
                  Choose the most convenient way to
                  connect with our team. We are happy
                  to hear from you.
                </p>
              </div>

              <div className="kc-contact-cards">

                {/* PHONE */}

                <a
                  className="kc-contact-card"
                  href={phoneLink}
                >
                  <span className="kc-contact-icon">
                    <Phone size={24} />
                  </span>

                  <div className="kc-contact-card-copy">
                    <small>CALL THE CLINIC</small>
                    <strong>{phone}</strong>
                  </div>

                  <ArrowUpRight
                    size={20}
                    className="kc-contact-arrow"
                  />
                </a>

                {/* LOCATION */}

                <a
                  className="kc-contact-card"
                  href={maps}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="kc-contact-icon">
                    <MapPin size={25} />
                  </span>

                  <div className="kc-contact-card-copy">
                    <small>VISIT OUR CLINIC</small>
                    <strong>
                      Open Google Maps Directions
                    </strong>
                  </div>

                  <ArrowUpRight
                    size={20}
                    className="kc-contact-arrow"
                  />
                </a>

                {/* APPOINTMENT */}

                <button
                  type="button"
                  className="kc-contact-card"
                  onClick={() => go('/book-appointment')}
                >
                  <span className="kc-contact-icon">
                    <Heart size={25} />
                  </span>

                  <div className="kc-contact-card-copy">
                    <small>NEED DENTAL CARE?</small>
                    <strong>
                      Request an Appointment
                    </strong>
                  </div>

                  <ArrowUpRight
                    size={20}
                    className="kc-contact-arrow"
                  />
                </button>

              </div>

              {/* ==================================
                  SOCIAL LINKS
                  INSTAGRAM + FACEBOOK + YOUTUBE
              ================================== */}

              <div className="kc-social-section">
                <h3>
                  Connect with us socially
                </h3>

                <div className="kc-social-links">

                  {/* INSTAGRAM */}

                  <a
                    className="kc-social-link"
                    href={instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Keerti Cure Dental Instagram"
                  >
                    <Instagram size={19} />
                    Instagram
                    <ArrowUpRight size={15} />
                  </a>

                  {/* FACEBOOK */}

                  <a
                    className="kc-social-link"
                    href={facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Keerti Cure Dental Facebook"
                  >
                    <Facebook size={19} />
                    Facebook
                    <ArrowUpRight size={15} />
                  </a>

                  {/* YOUTUBE - NEW */}

                  <a
                    className="kc-social-link"
                    href={youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Keerti Cure Dental YouTube"
                  >
                    <Youtube size={19} />
                    YouTube
                    <ArrowUpRight size={15} />
                  </a>

                </div>
              </div>
            </div>

            {/* ==================================
                RIGHT SIDE CONTACT FORM
            ================================== */}

            <div className="kc-form-card">

              {sent ? (

                /* SUCCESS STATE */

                <div className="kc-success">

                  <div className="kc-success-icon">
                    <CheckCircle2 size={47} />
                  </div>

                  <h2>Message received!</h2>

                  <p>
                    Thank you for reaching out to
                    Keerti Cure Dental. Your enquiry
                    has been submitted successfully.
                    Our clinic team can follow up
                    with you directly.
                  </p>

                  <button
                    type="button"
                    onClick={() => {
                      setSent(false);
                      setError('');
                    }}
                  >
                    Send Another Message
                    <ArrowRight size={18} />
                  </button>

                </div>

              ) : (

                /* CONTACT FORM */

                <form onSubmit={submit}>

                  <div className="kc-form-top-icon">
                    <MessageCircle size={26} />
                  </div>

                  <div className="kc-form-header">

                    <span className="kc-eyebrow">
                      SEND AN ENQUIRY
                    </span>

                    <h2>
                      How can we
                      <span> help you?</span>
                    </h2>

                    <p>
                      Fill out the form below and
                      share your question with our team.
                    </p>

                  </div>

                  {/* NAME + PHONE */}

                  <div className="kc-form-row">

                    <div className="kc-field">
                      <label htmlFor="kc-full-name">
                        Full Name *
                      </label>

                      <input
                        id="kc-full-name"
                        name="fullName"
                        type="text"
                        placeholder="Enter your full name"
                        autoComplete="name"
                        required
                      />
                    </div>

                    <div className="kc-field">
                      <label htmlFor="kc-phone">
                        Phone Number *
                      </label>

                      <input
                        id="kc-phone"
                        name="phone"
                        type="tel"
                        placeholder="Enter phone number"
                        autoComplete="tel"
                        required
                      />
                    </div>

                  </div>

                  {/* EMAIL + SUBJECT */}

                  <div className="kc-form-row">

                    <div className="kc-field">
                      <label htmlFor="kc-email">
                        Email Address
                        <span> (Optional)</span>
                      </label>

                      <input
                        id="kc-email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        autoComplete="email"
                      />
                    </div>

                    <div className="kc-field">
                      <label htmlFor="kc-subject">
                        Subject *
                      </label>

                      <div className="kc-select-wrap">

                        <select
                          id="kc-subject"
                          name="subject"
                          defaultValue=""
                          required
                        >
                          <option value="" disabled>
                            Select a subject
                          </option>

                          <option value="General Enquiry">
                            General Enquiry
                          </option>

                          <option value="Dental Treatment Enquiry">
                            Dental Treatment Enquiry
                          </option>

                          <option value="Appointment Enquiry">
                            Appointment Enquiry
                          </option>

                          <option value="Clinic Information">
                            Clinic Information
                          </option>

                          <option value="Other Question">
                            Other Question
                          </option>
                        </select>

                        <ChevronRight size={18} />

                      </div>
                    </div>

                  </div>

                  {/* MESSAGE */}

                  <div className="kc-field">
                    <label htmlFor="kc-message">
                      Your Message *
                    </label>

                    <textarea
                      id="kc-message"
                      name="message"
                      rows={5}
                      placeholder="Tell us a little about your question or concern..."
                      required
                    />
                  </div>

                  {/* CONSENT */}

                  <label className="kc-consent">
                    <input
                      type="checkbox"
                      name="privacyConsent"
                      required
                    />

                    <span>
                      I agree that Keerti Cure Dental
                      may use the information I provide
                      to respond to my enquiry.
                    </span>
                  </label>

                  {/* ERROR */}

                  {error && (
                    <div
                      className="kc-form-error"
                      role="alert"
                    >
                      <AlertCircle size={19} />
                      <span>{error}</span>
                    </div>
                  )}

                  {/* SUBMIT */}

                  <button
                    type="submit"
                    className="kc-submit"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <Loader2
                          size={19}
                          className="kc-loading-icon"
                          style={{
                            animation:
                              'kcSpin 1s linear infinite',
                          }}
                        />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Your Message
                        <Send size={18} />
                      </>
                    )}
                  </button>

                  <div className="kc-form-footnote">
                    <ShieldCheck size={16} />
                    Your information is used to respond
                    to your enquiry.
                  </div>

                </form>
              )}

            </div>
          </div>
        </section>

        {/* ==================================
            VISIT OUR CLINIC SECTION
        ================================== */}

        <section className="kc-visit-section">
          <div className="kc-container kc-visit-grid">

            {/* IMAGE */}

            <div className="kc-visit-image">

              <img
                src={contactImages.clinic}
                alt="Modern dental clinic interior"
                loading="lazy"
              />

              <div className="kc-visit-floating">
                <MapPin size={23} />

                <div>
                  <strong>
                    Find your way to us
                  </strong>
                  <span>
                    Directions made simple.
                  </span>
                </div>
              </div>

            </div>

            {/* CONTENT */}

            <div className="kc-visit-content">

              <span className="kc-eyebrow">
                VISIT OUR CLINIC
              </span>

              <h2 className="kc-heading">
                Your smile journey
                <span> starts here.</span>
              </h2>

              <p>
                Planning your visit? Use Google Maps
                to find directions to Keerti Cure Dental.
                If you have questions before arriving,
                our team is just a phone call away.
              </p>

              <div className="kc-visit-points">

                <div className="kc-visit-point">
                  <span>
                    <MapPin size={21} />
                  </span>
                  <strong>
                    Easy access to Google Maps directions
                  </strong>
                </div>

                <div className="kc-visit-point">
                  <span>
                    <Phone size={21} />
                  </span>
                  <strong>
                    Contact the clinic before visiting
                  </strong>
                </div>

                <div className="kc-visit-point">
                  <span>
                    <Heart size={21} />
                  </span>
                  <strong>
                    Personalised dental consultations
                  </strong>
                </div>

              </div>

              <a
                className="kc-directions-btn"
                href={maps}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions
                <ArrowUpRight size={19} />
              </a>

            </div>
          </div>
        </section>

        {/* CLINIC HOURS */}

        <ClinicHours />

        {/* EXISTING CTA */}

        <Cta go={go} />

      </main>
    </>
  );
}
