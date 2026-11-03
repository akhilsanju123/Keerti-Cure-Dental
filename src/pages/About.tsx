
import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";

import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Award,
  CheckCircle2,
  ChevronDown,
  Heart,
  HeartHandshake,
  HeartPulse,
  MessageCircle,
  Quote,
  ShieldCheck,
  Smile,
  Sparkles,
  Stethoscope,
  Users,
} from "lucide-react";

import { heroImage, type Go } from "@/lib/constants";
import { Cta } from "@/components/Layout";
import { CmdMessage } from "@/components/CmdMessage";
import { doctorPhoto } from "@/lib/sitePhotos";

/* =========================================================
   KEERTI CURE DENTAL — ABOUT US
========================================================= */

// Image location: public/images/slides/Aboutus2.jpeg
const storyImage = "/images/slides/Aboutus2.jpeg";

const philosophyCards = [
  {
    icon: HeartHandshake,
    number: "01",
    title: "Care That Listens",
    description:
      "Your concerns, questions and comfort matter. Every consultation starts with understanding you.",
  },
  {
    icon: MessageCircle,
    number: "02",
    title: "Clarity At Every Step",
    description:
      "We explain relevant findings and possible dental care options in simple, understandable language.",
  },
  {
    icon: ShieldCheck,
    number: "03",
    title: "Thoughtful Decisions",
    description:
      "Our approach supports informed decisions based on individual needs and appropriate guidance.",
  },
  {
    icon: Smile,
    number: "04",
    title: "Confidence In Your Smile",
    description:
      "Helping patients understand their oral health and develop better everyday care habits.",
  },
];

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description:
      "Respectful conversations that acknowledge each patient's concerns.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "Clear and transparent communication about dental care options.",
  },
  {
    icon: Users,
    title: "Individual Attention",
    description:
      "Understanding that every patient's needs and goals are different.",
  },
  {
    icon: Award,
    title: "Commitment To Care",
    description:
      "Encouraging practical habits that support ongoing oral health.",
  },
];

const careSteps = [
  {
    number: "01",
    title: "Start With Your Story",
    description:
      "Share your concerns, symptoms and expectations with your dentist.",
  },
  {
    number: "02",
    title: "Understand Your Needs",
    description:
      "Review your oral health and discuss relevant findings.",
  },
  {
    number: "03",
    title: "Explore Your Options",
    description:
      "Understand suitable treatment options and possible next steps.",
  },
  {
    number: "04",
    title: "Continue With Confidence",
    description:
      "Receive practical guidance for follow-up care and healthy habits.",
  },
];

const faqs = [
  {
    question: "What is Keerti Cure Dental's care philosophy?",
    answer:
      "Our approach focuses on listening to patient concerns, explaining dental care options clearly and supporting informed oral health decisions.",
  },
  {
    question: "Can I ask questions before starting treatment?",
    answer:
      "Yes. A consultation provides an opportunity to discuss your concerns, understand relevant findings and explore suitable care options.",
  },
  {
    question: "How can I book an appointment?",
    answer:
      "You can request an appointment through the website or contact the clinic directly. Appointment requests are subject to confirmation.",
  },
];

/* =========================================================
   STYLES
========================================================= */

const styles = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Manrope:wght@400;500;600;700;800&display=swap');

.kc-about {
  --kc-primary: #087f83;
  --kc-primary-dark: #05646a;
  --kc-dark: #052d37;
  --kc-deep: #031e27;
  --kc-mint: #b9f1df;
  --kc-soft: #f0faf6;
  --kc-border: #dfebe7;
  --kc-muted: #61777c;
  --kc-ease: cubic-bezier(.22,1,.36,1);

  width: 100%;
  overflow: clip;
  background: #fff;
  color: var(--kc-dark);
  font-family: "DM Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
}

.kc-about *,
.kc-about *::before,
.kc-about *::after {
  box-sizing: border-box;
}

.kc-about button {
  cursor: pointer;
  font-family: inherit;
}

.kc-about img {
  display: block;
  width: 100%;
}

.kc-about h1,
.kc-about h2,
.kc-about h3 {
  font-family: "Manrope", sans-serif;
  font-weight: 800;
  letter-spacing: -.055em;
  line-height: 1.16;
}

.kc-about p {
  color: var(--kc-muted);
  font-size: 15px;
  line-height: 1.9;
}

.kc-container {
  width: min(1240px, calc(100% - 48px));
  margin-inline: auto;
}

.kc-section {
  position: relative;
  padding: 110px 0;
}

.kc-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 11px;
  color: var(--kc-primary);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.kc-eyebrow::before {
  content: "";
  width: 28px;
  height: 2px;
  background: currentColor;
}

.kc-heading {
  margin: 20px 0 24px;
  font-size: clamp(35px,4.5vw,60px);
}

.kc-heading em {
  color: var(--kc-primary);
  font-style: normal;
}

.kc-center {
  max-width: 790px;
  margin: 0 auto 58px;
  text-align: center;
}

.kc-center .kc-eyebrow {
  justify-content: center;
}

/* BUTTONS */

.kc-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 13px;
  min-height: 56px;
  padding: 15px 25px;
  border: 1px solid transparent;
  border-radius: 9px;
  overflow: hidden;
  background: var(--kc-primary);
  color: white;
  font-size: 13px;
  font-weight: 800;
  transition:
    transform .4s var(--kc-ease),
    background .3s,
    box-shadow .4s;
}

.kc-button::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(255,255,255,.16);
  transform: translateX(-101%);
  transition: transform .5s var(--kc-ease);
}

.kc-button:hover::before {
  transform: translateX(0);
}

.kc-button:hover {
  transform: translateY(-5px);
  background: var(--kc-primary-dark);
  box-shadow: 0 18px 38px rgba(8,127,131,.24);
}

.kc-button > * {
  position: relative;
  z-index: 1;
}

.kc-button svg {
  transition: transform .35s;
}

.kc-button:hover svg {
  transform: translate(5px,-3px);
}

.kc-button-outline {
  background: rgba(255,255,255,.08);
  border-color: rgba(255,255,255,.45);
  backdrop-filter: blur(10px);
}

.kc-button-outline:hover {
  background: rgba(255,255,255,.18);
}

/* HERO */

.kc-hero {
  position: relative;
  display: grid;
  grid-template-columns: 52% 48%;
  min-height: 690px;
  overflow: hidden;
  background: var(--kc-deep);
}

.kc-hero-bg {
  position: relative;
  grid-column: 2;
  grid-row: 1;
  overflow: hidden;
}

.kc-hero-bg img {
  width: 100%;
  height: 100%;
  min-height: 690px;
  object-fit: cover;
  object-position: center;
  animation: kcHeroZoom 13s ease-out both;
  transition: transform 1s var(--kc-ease);
}

.kc-hero-bg:hover img {
  transform: scale(1.07);
}

.kc-hero-inner {
  position: relative;
  z-index: 2;
  grid-column: 1;
  grid-row: 1;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 100px 7vw;
}

.kc-hero-content {
  max-width: 620px;
}

.kc-hero .kc-eyebrow {
  color: var(--kc-mint);
  animation: kcFadeUp .8s .1s both;
}

.kc-hero h1 {
  margin: 26px 0;
  color: white;
  font-size: clamp(45px,5vw,76px);
  line-height: 1.09;
  animation: kcFadeUp 1s .25s both;
}

.kc-hero h1 em {
  display: block;
  color: var(--kc-mint);
  font-style: normal;
}

.kc-hero p {
  max-width: 570px;
  color: rgba(255,255,255,.82);
  font-size: 16px;
  animation: kcFadeUp 1s .4s both;
}

.kc-hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 32px;
  animation: kcFadeUp 1s .55s both;
}

.kc-hero-side-label {
  position: absolute;
  z-index: 2;
  right: 32px;
  bottom: 32px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px 20px;
  border-radius: 9px;
  background: rgba(255,255,255,.93);
  color: var(--kc-dark);
  font-size: 12px;
  font-weight: 800;
  backdrop-filter: blur(15px);
  box-shadow: 0 15px 35px rgba(0,0,0,.1);
  animation: kcFloat 5s ease-in-out infinite;
}

.kc-hero-side-label svg {
  color: var(--kc-primary);
}

.kc-hero-scroll {
  position: absolute;
  z-index: 3;
  left: 7vw;
  bottom: 32px;
  display: flex;
  align-items: center;
  gap: 10px;
  border: 0;
  background: transparent;
  color: rgba(255,255,255,.75);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 2px;
  transition: color .3s;
}

.kc-hero-scroll:hover {
  color: var(--kc-mint);
}

.kc-hero-scroll svg {
  animation: kcBounce 2s ease-in-out infinite;
}

/* OUR STORY */

.kc-story-grid {
  display: grid;
  grid-template-columns: .95fr 1.05fr;
  align-items: center;
  gap: 90px;
}

.kc-story-copy p {
  margin-bottom: 20px;
}

.kc-story-line {
  width: 70px;
  height: 3px;
  margin: 27px 0;
  background: var(--kc-primary);
}

.kc-story-points {
  display: grid;
  gap: 14px;
  margin: 30px 0;
}

.kc-story-point {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 17px 20px;
  border: 1px solid var(--kc-border);
  border-radius: 10px;
  background: #f6fbf9;
  font-size: 14px;
  font-weight: 700;
  transition:
    transform .35s var(--kc-ease),
    background .35s,
    box-shadow .35s,
    border-color .35s;
}

.kc-story-point svg {
  flex-shrink: 0;
  color: var(--kc-primary);
  transition: transform .35s;
}

.kc-story-point:hover {
  transform: translateX(10px);
  background: #e8f7f1;
  border-color: #a9d9cb;
  box-shadow: 0 12px 30px rgba(5,65,70,.08);
}

.kc-story-point:hover svg {
  transform: scale(1.2) rotate(8deg);
}

/* OUR STORY IMAGE — Aboutus2.jpeg */

.kc-story-image {
  position: relative;
  height: 580px;
  overflow: hidden;
  border-radius: 18px;
  background: var(--kc-soft);
  box-shadow: 0 22px 55px rgba(5,65,70,.1);
  transition: box-shadow .5s var(--kc-ease);
}

.kc-story-image:hover {
  box-shadow: 0 30px 65px rgba(5,65,70,.18);
}

.kc-story-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 1s var(--kc-ease);
}

.kc-story-image:hover img {
  transform: scale(1.1);
}

.kc-story-image::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    transparent 60%,
    rgba(3,30,39,.4)
  );
  pointer-events: none;
}

.kc-story-image-label {
  position: absolute;
  z-index: 2;
  bottom: 30px;
  left: 30px;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  border-radius: 9px;
  background: rgba(255,255,255,.94);
  color: var(--kc-dark);
  font-size: 13px;
  font-weight: 800;
  backdrop-filter: blur(12px);
  transition:
    transform .4s var(--kc-ease),
    background .4s;
}

.kc-story-image:hover .kc-story-image-label {
  transform: translateY(-7px);
  background: white;
}

.kc-story-image-label svg {
  color: var(--kc-primary);
}

/* PHILOSOPHY */

.kc-soft {
  background: var(--kc-soft);
}

.kc-philosophy-grid {
  display: grid;
  grid-template-columns: repeat(4,1fr);
  gap: 23px;
}

.kc-philosophy-card {
  position: relative;
  min-height: 325px;
  padding: 32px 26px;
  border: 1px solid var(--kc-border);
  border-radius: 17px;
  overflow: hidden;
  background: white;
  transition:
    transform .5s var(--kc-ease),
    box-shadow .4s,
    border-color .4s;
}

.kc-philosophy-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(145deg,#087f83,#064b55);
  transform: translateY(101%);
  transition: transform .55s var(--kc-ease);
}

.kc-philosophy-card:hover::before {
  transform: translateY(0);
}

.kc-philosophy-card:hover {
  transform: translateY(-14px);
  border-color: var(--kc-primary);
  box-shadow: 0 25px 50px rgba(5,70,75,.16);
}

.kc-philosophy-card > * {
  position: relative;
  z-index: 2;
}

.kc-card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 35px;
}

.kc-card-icon {
  display: grid;
  place-items: center;
  width: 66px;
  height: 66px;
  border-radius: 16px;
  background: #e8f7f1;
  color: var(--kc-primary);
  transition: transform .45s var(--kc-ease);
}

.kc-philosophy-card:hover .kc-card-icon {
  transform: rotate(-12deg) scale(1.1);
  background: white;
}

.kc-card-number {
  color: #91a5a3;
  font-size: 12px;
  font-weight: 800;
}

.kc-philosophy-card h3 {
  margin: 0 0 15px;
  font-size: 20px;
}

.kc-philosophy-card p {
  margin: 0;
  font-size: 13px;
}

.kc-philosophy-card:hover h3,
.kc-philosophy-card:hover p,
.kc-philosophy-card:hover .kc-card-number {
  color: white;
}

/* DOCTOR / LEADERSHIP */

.kc-doctor-image {
  position: relative;
  min-height: 590px;
  border-radius: 20px;
  overflow: hidden;
  background: linear-gradient(145deg,#e2f5ee,#b7e4d5);
}

.kc-doctor-image > img {
  width: 100%;
  height: 590px;
  object-fit: cover;
  object-position: top center;
  transition: transform 1s var(--kc-ease);
}

.kc-doctor-image:hover > img {
  transform: scale(1.07);
}

.kc-doctor-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 18px;
  min-height: 590px;
  padding: 35px;
  color: var(--kc-primary);
  text-align: center;
}

.kc-doctor-placeholder strong {
  font-family: "Manrope",sans-serif;
  font-size: 20px;
}

.kc-doctor-placeholder span {
  max-width: 320px;
  font-size: 13px;
  line-height: 1.7;
}

.kc-doctor-photo-label {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 75px 35px 35px;
  background: linear-gradient(transparent,rgba(2,28,36,.88));
  color: white;
}

.kc-doctor-photo-label h3 {
  margin: 0 0 7px;
  color: white;
  font-size: 29px;
}

.kc-doctor-photo-label p {
  margin: 0;
  color: rgba(255,255,255,.85);
  font-size: 13px;
}

.kc-doctor-role {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 23px;
  padding: 11px 16px;
  border-radius: 8px;
  background: #e8f7f1;
  color: var(--kc-primary);
  font-size: 12px;
  font-weight: 800;
}

.kc-doctor-copy p {
  margin-bottom: 22px;
}

.kc-doctor-quote {
  display: flex;
  gap: 17px;
  margin: 28px 0;
  padding: 25px;
  border-left: 3px solid var(--kc-primary);
  border-radius: 0 10px 10px 0;
  background: var(--kc-soft);
}

.kc-doctor-quote svg {
  flex-shrink: 0;
  color: var(--kc-primary);
}

.kc-doctor-quote p {
  margin: 0;
  font-size: 13px;
  font-style: italic;
}

.kc-leadership {
  background: linear-gradient(155deg,#ffffff 0%,#f4fbf8 100%);
}

.kc-leadership-intro {
  max-width: 850px;
  margin: 0 auto 55px;
  text-align: center;
}

.kc-leadership-intro .kc-eyebrow {
  justify-content: center;
}

.kc-leadership-intro .kc-heading {
  margin-bottom: 16px;
}

.kc-leadership-intro p {
  max-width: 650px;
  margin: 0 auto;
}

.kc-leadership-panel {
  display: grid;
  grid-template-columns: minmax(0,.9fr) minmax(0,1.1fr);
  align-items: center;
  gap: clamp(30px,5vw,85px);
  padding: clamp(16px,2.5vw,34px);
  border: 1px solid #e1eeea;
  border-radius: 28px;
  background: #fff;
  box-shadow: 0 22px 70px rgba(5,65,70,.07);
}

.kc-leadership-photo {
  min-height: 610px;
  border-radius: 22px;
  box-shadow: 0 18px 45px rgba(5,65,70,.12);
  transition:
    transform .5s var(--kc-ease),
    box-shadow .5s;
}

.kc-leadership-photo:hover {
  transform: translateY(-7px);
  box-shadow: 0 28px 65px rgba(5,65,70,.18);
}

.kc-leadership-photo > img {
  height: 610px;
}

.kc-leadership-photo .kc-doctor-photo-label {
  transition: padding-bottom .4s var(--kc-ease);
}

.kc-leadership-photo:hover .kc-doctor-photo-label {
  padding-bottom: 44px;
}

.kc-leadership-copy {
  padding: 20px 10px 20px 0;
}

.kc-leadership-name {
  margin: 0;
  font-size: clamp(32px,3.8vw,51px);
  line-height: 1.17;
}

.kc-leadership-name em {
  color: var(--kc-primary);
  font-style: normal;
}

.kc-leadership-degree {
  margin-top: 10px;
  color: var(--kc-primary);
  font-size: 17px;
  font-weight: 800;
  letter-spacing: .12em;
}

.kc-leadership-copy .kc-story-line {
  margin: 25px 0;
}

.kc-leadership-highlights {
  display: grid;
  gap: 12px;
  margin: 27px 0;
}

.kc-leadership-highlight {
  display: flex;
  align-items: center;
  gap: 13px;
  padding: 14px 17px;
  border: 1px solid #dfebe7;
  border-radius: 12px;
  background: #f8fcfa;
  color: var(--kc-dark);
  font-size: 13px;
  font-weight: 700;
  transition:
    transform .35s var(--kc-ease),
    background .35s,
    border-color .35s,
    box-shadow .35s;
}

.kc-leadership-highlight svg {
  flex-shrink: 0;
  color: var(--kc-primary);
  transition: transform .35s var(--kc-ease);
}

.kc-leadership-highlight:hover {
  transform: translateX(7px);
  background: #eaf8f2;
  border-color: #a6d7ca;
  box-shadow: 0 10px 24px rgba(8,127,131,.08);
}

.kc-leadership-highlight:hover svg {
  transform: scale(1.15) rotate(-7deg);
}

.kc-leadership-quote {
  transition:
    transform .35s var(--kc-ease),
    background .35s,
    box-shadow .35s;
}

.kc-leadership-quote:hover {
  transform: translateY(-4px);
  background: #e8f7f1;
  box-shadow: 0 12px 28px rgba(5,65,70,.07);
}

/* MISSION AND VISION */

.kc-mission {
  background: var(--kc-dark);
}

.kc-mission-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 28px;
}

.kc-mission-card {
  position: relative;
  min-height: 340px;
  padding: 45px;
  border: 1px solid rgba(255,255,255,.15);
  border-radius: 18px;
  overflow: hidden;
  background: rgba(255,255,255,.045);
  transition:
    transform .5s var(--kc-ease),
    background .4s,
    box-shadow .4s;
}

.kc-mission-card:hover {
  transform: translateY(-12px);
  background: var(--kc-primary);
  box-shadow: 0 25px 55px rgba(0,0,0,.15);
}

.kc-mission-card > svg {
  margin-bottom: 32px;
  color: var(--kc-mint);
  transition: transform .4s;
}

.kc-mission-card:hover > svg {
  transform: rotate(-12deg) scale(1.15);
}

.kc-mission-card .kc-eyebrow {
  color: var(--kc-mint);
}

.kc-mission-card h2 {
  margin: 19px 0 0;
  color: white;
  font-size: clamp(25px,2.6vw,35px);
  line-height: 1.32;
}

/* VALUES */

.kc-values-grid {
  display: grid;
  grid-template-columns: repeat(4,1fr);
  gap: 22px;
}

.kc-value-card {
  padding: 33px 26px;
  border: 1px solid var(--kc-border);
  border-radius: 15px;
  background: white;
  transition:
    transform .4s var(--kc-ease),
    background .4s,
    box-shadow .4s;
}

.kc-value-card:hover {
  transform: translateY(-12px);
  background: var(--kc-soft);
  box-shadow: 0 20px 45px rgba(5,65,70,.1);
}

.kc-value-card svg {
  margin-bottom: 28px;
  color: var(--kc-primary);
  transition: transform .4s;
}

.kc-value-card:hover svg {
  transform: rotate(-12deg) scale(1.15);
}

.kc-value-card h3 {
  margin: 0 0 14px;
  font-size: 20px;
}

.kc-value-card p {
  margin: 0;
  font-size: 13px;
}

/* CARE JOURNEY */

.kc-journey-grid {
  display: grid;
  grid-template-columns: repeat(4,1fr);
  gap: 23px;
}

.kc-journey-card {
  position: relative;
  padding: 32px 26px;
  border: 1px solid var(--kc-border);
  border-radius: 15px;
  background: white;
  transition:
    transform .4s var(--kc-ease),
    box-shadow .4s;
}

.kc-journey-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 20px 45px rgba(5,65,70,.1);
}

.kc-journey-number {
  display: block;
  margin-bottom: 30px;
  color: var(--kc-primary);
  font-family: "Manrope",sans-serif;
  font-size: 38px;
  font-weight: 800;
}

.kc-journey-card h3 {
  margin: 0 0 14px;
  font-size: 19px;
}

.kc-journey-card p {
  margin: 0;
  font-size: 13px;
}

/* QUOTE */

.kc-quote {
  padding: 105px 0;
  background: linear-gradient(130deg,#087f83,#054b55);
  text-align: center;
}

.kc-quote svg {
  margin-bottom: 22px;
  color: var(--kc-mint);
}

.kc-quote blockquote {
  max-width: 900px;
  margin: 0 auto 25px;
  color: white;
  font-family: "Manrope",sans-serif;
  font-size: clamp(26px,3.5vw,45px);
  font-weight: 800;
  letter-spacing: -.045em;
  line-height: 1.4;
}

.kc-quote span {
  color: var(--kc-mint);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 1px;
}

/* FAQ */

.kc-faq-grid {
  display: grid;
  grid-template-columns: .85fr 1.15fr;
  gap: 80px;
}

.kc-faq-item {
  border-bottom: 1px solid var(--kc-border);
}

.kc-faq-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  width: 100%;
  padding: 25px 0;
  border: 0;
  background: transparent;
  color: var(--kc-dark);
  text-align: left;
  font-size: 15px;
  font-weight: 800;
  transition: color .3s;
}

.kc-faq-question:hover {
  color: var(--kc-primary);
}

.kc-faq-question svg {
  flex-shrink: 0;
  color: var(--kc-primary);
  transition: transform .35s;
}

.kc-faq-question[aria-expanded="true"] svg {
  transform: rotate(180deg);
}

.kc-faq-answer {
  padding: 0 30px 24px 0;
  animation: kcFadeUp .35s ease both;
}

.kc-faq-answer p {
  margin: 0;
  font-size: 14px;
}

/* SCROLL REVEALS */

.kc-reveal {
  opacity: 1;
  transform: none;
}

.kc-reveal.kc-animate {
  opacity: 0;
  transform: translateY(45px);
  transition:
    opacity .8s ease,
    transform .9s var(--kc-ease);
  transition-delay: var(--delay,0ms);
}

.kc-reveal.kc-animate.kc-visible {
  opacity: 1;
  transform: translateY(0);
}

/* KEYFRAMES */

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

@keyframes kcHeroZoom {
  from { transform: scale(1.14); }
  to { transform: scale(1); }
}

@keyframes kcFloat {
  0%,100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}

@keyframes kcBounce {
  0%,100% { transform: translateY(0); }
  50% { transform: translateY(7px); }
}

/* TABLET */

@media(max-width:1050px) {
  .kc-story-grid {
    gap: 50px;
  }

  .kc-philosophy-grid,
  .kc-values-grid,
  .kc-journey-grid {
    grid-template-columns: repeat(2,1fr);
  }
}

/* MOBILE HERO */

@media(max-width:900px) {
  .kc-hero {
    display: block;
    min-height: 650px;
  }

  .kc-hero-bg {
    position: absolute;
    inset: 0;
  }

  .kc-hero-bg::after {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(2,27,36,.8);
  }

  .kc-hero-bg img {
    min-height: 650px;
  }

  .kc-hero-inner {
    position: relative;
    z-index: 2;
    min-height: 650px;
    padding: 100px 30px;
  }

  .kc-hero h1 {
    font-size: clamp(42px,7vw,62px);
  }

  .kc-hero-scroll {
    left: 30px;
  }

  .kc-hero-side-label {
    display: none;
  }

  .kc-leadership-panel {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .kc-leadership-copy {
    padding: 5px 10px 15px;
  }

  .kc-leadership-photo,
  .kc-leadership-photo > img {
    min-height: 500px;
    height: 500px;
  }
}

/* RESPONSIVE */

@media(max-width:768px) {
  .kc-container {
    width: calc(100% - 36px);
  }

  .kc-section {
    padding: 75px 0;
  }

  .kc-heading {
    font-size: clamp(32px,7vw,45px);
  }

  .kc-story-grid,
  .kc-faq-grid {
    grid-template-columns: 1fr;
  }

  .kc-story-image {
    height: 450px;
  }

  .kc-mission-grid {
    grid-template-columns: 1fr;
  }
}

/* SMALL MOBILE */

@media(max-width:520px) {
  .kc-hero {
    min-height: 620px;
  }

  .kc-hero-inner {
    min-height: 620px;
    padding: 95px 20px;
  }

  .kc-hero h1 {
    font-size: 41px;
  }

  .kc-hero-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .kc-story-image {
    height: 350px;
  }

  .kc-story-image-label {
    left: 15px;
    bottom: 15px;
    font-size: 11px;
  }

  .kc-philosophy-grid,
  .kc-values-grid,
  .kc-journey-grid {
    grid-template-columns: 1fr;
  }

  .kc-philosophy-card {
    min-height: auto;
  }

  .kc-mission-card {
    min-height: 300px;
    padding: 30px;
  }

  .kc-quote {
    padding: 75px 0;
  }

  .kc-leadership-intro {
    margin-bottom: 32px;
  }

  .kc-leadership-panel {
    padding: 12px;
    border-radius: 20px;
  }

  .kc-leadership-photo,
  .kc-leadership-photo > img {
    min-height: 400px;
    height: 400px;
  }

  .kc-leadership-copy {
    padding: 12px 6px 18px;
  }

  .kc-leadership-name {
    font-size: 32px;
  }

  .kc-leadership-photo .kc-doctor-photo-label {
    padding: 60px 18px 22px;
  }

  .kc-leadership-photo .kc-doctor-photo-label h3 {
    font-size: 21px;
  }
}

@media(prefers-reduced-motion:reduce) {
  .kc-about *,
  .kc-about *::before,
  .kc-about *::after {
    animation: none !important;
    transition: none !important;
  }

  .kc-reveal.kc-animate {
    opacity: 1;
    transform: none;
  }
}
`;

/* =========================================================
   ABOUT PAGE COMPONENT
========================================================= */

export function About({ go }: { go: Go }) {
  const rootRef = useRef<HTMLDivElement>(null);

  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [doctorImageError, setDoctorImageError] = useState(false);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const elements =
      root.querySelectorAll<HTMLElement>(".kc-reveal");

    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("kc-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -25px 0px",
      }
    );

    elements.forEach((element) => {
      element.classList.add("kc-animate");
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const stagger = (index: number): CSSProperties =>
    ({
      "--delay": `${index * 100}ms`,
    } as CSSProperties);

  const scrollToStory = () => {
    document
      .getElementById("kc-about-story")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="kc-about" ref={rootRef}>
        <style>{styles}</style>

        {/* HERO */}

        <section className="kc-hero">
          <div className="kc-hero-bg">
            <img
              src={heroImage}
              alt="Keerti Cure Dental clinic"
            />

            <div className="kc-hero-side-label">
              <Sparkles size={19} />
              KEERTI CURE DENTAL
            </div>
          </div>

          <div className="kc-hero-inner">
            <div className="kc-hero-content">
              <span className="kc-eyebrow">
                WELCOME TO KEERTI CURE
              </span>

              <h1>
                Your Smile.
                <em> Our Commitment.</em>
              </h1>

              <p>
                We believe great dental care begins
                with understanding the person behind
                every smile. Discover our approach
                to thoughtful and personalised care.
              </p>

              <div className="kc-hero-actions">
                <button
                  className="kc-button"
                  onClick={() => go("/contact")}
                >
                  <span>Book a Consultation</span>
                  <ArrowUpRight size={18} />
                </button>

                <button
                  className="kc-button kc-button-outline"
                  onClick={scrollToStory}
                >
                  <span>Our Story</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>

          <button
            className="kc-hero-scroll"
            onClick={scrollToStory}
          >
            SCROLL TO EXPLORE
            <ArrowDown size={17} />
          </button>
        </section>

        {/* OUR STORY — NEW IMAGE ADDED */}

        <section
          className="kc-section"
          id="kc-about-story"
        >
          <div className="kc-container kc-story-grid">
            <div className="kc-story-copy kc-reveal">
              <span className="kc-eyebrow">
                OUR STORY
              </span>

              <h2 className="kc-heading">
                More Than Dentistry.
                <em> A Relationship Built On Trust.</em>
              </h2>

              <div className="kc-story-line" />

              <p>
                At Keerti Cure Dental, we believe
                every smile has a story.
                Our approach begins with listening
                to your concerns and understanding
                your individual needs.
              </p>

              <p>
                We focus on clear communication,
                thoughtful consultations and
                helping you make informed decisions
                about your oral health.
              </p>

              <div className="kc-story-points">
                {[
                  "Patient-first consultations",
                  "Clear communication and guidance",
                  "Personalised dental care",
                ].map((item) => (
                  <div
                    className="kc-story-point"
                    key={item}
                  >
                    <CheckCircle2 size={21} />
                    {item}
                  </div>
                ))}
              </div>

              <button
                className="kc-button"
                onClick={() => go("/contact")}
              >
                <span>Connect With Our Team</span>
                <ArrowUpRight size={18} />
              </button>
            </div>

            <div className="kc-story-image kc-reveal">
              <img
                src={storyImage}
                alt="Keerti Cure Dental — Our Story"
                loading="lazy"
              />

              <div className="kc-story-image-label">
                <HeartPulse size={23} />
                Every Smile Matters
              </div>
            </div>
          </div>
        </section>

        {/* CARE PHILOSOPHY */}

        <section className="kc-section kc-soft">
          <div className="kc-container">
            <div className="kc-center kc-reveal">
              <span className="kc-eyebrow">
                OUR CARE PHILOSOPHY
              </span>

              <h2 className="kc-heading">
                Dentistry is personal.
                <em> Your care should be too.</em>
              </h2>

              <p>
                Our approach is shaped by listening,
                understanding and clear patient
                communication.
              </p>
            </div>

            <div className="kc-philosophy-grid">
              {philosophyCards.map(
                (
                  { icon: Icon, number, title, description },
                  index
                ) => (
                  <article
                    className="kc-philosophy-card kc-reveal"
                    style={stagger(index)}
                    key={number}
                  >
                    <div className="kc-card-top">
                      <div className="kc-card-icon">
                        <Icon size={28} />
                      </div>

                      <span className="kc-card-number">
                        {number}
                      </span>
                    </div>

                    <h3>{title}</h3>
                    <p>{description}</p>
                  </article>
                )
              )}
            </div>
          </div>
        </section>

        {/* LEADERSHIP — CMD */}

        <section
          className="kc-section kc-leadership"
          aria-labelledby="kc-leadership-title"
        >
          <div className="kc-container">
            <div className="kc-leadership-intro kc-reveal">
              <span className="kc-eyebrow">
                OUR LEADERSHIP
              </span>

              <h2
                className="kc-heading"
                id="kc-leadership-title"
              >
                Chairman &amp;{" "}
                <em>Managing Director (CMD)</em>
              </h2>

              <p>
                Meet the leadership behind our commitment
                to thoughtful, patient-focused dental care.
              </p>
            </div>

            <div className="kc-leadership-panel">
              <div className="kc-doctor-image kc-leadership-photo kc-reveal">
                {!doctorImageError ? (
                  <img
                    src={doctorPhoto}
                    alt="Dr. Sandeep Kokkeragadda, MDS"
                    loading="lazy"
                    onError={() => setDoctorImageError(true)}
                  />
                ) : (
                  <div className="kc-doctor-placeholder">
                    <Stethoscope
                      size={80}
                      strokeWidth={1.3}
                    />
                    <strong>
                      Dr. Sandeep Kokkeragadda, MDS
                    </strong>
                    <span>
                      Doctor photograph is currently
                      unavailable.
                    </span>
                  </div>
                )}

                <div className="kc-doctor-photo-label">
                  <h3>
                    Dr. Sandeep Kokkeragadda, MDS
                  </h3>
                  <p>
                    Chairman &amp; Managing Director
                  </p>
                </div>
              </div>

              <div className="kc-doctor-copy kc-leadership-copy kc-reveal">
                <div className="kc-doctor-role">
                  <Award size={18} />
                  CHAIRMAN &amp; MANAGING DIRECTOR
                </div>

                <h3 className="kc-leadership-name">
                  Dr. Sandeep{" "}
                  <em>Kokkeragadda</em>
                </h3>

                <div className="kc-leadership-degree">
                  MDS
                </div>

                <div className="kc-story-line" />

                <p>
                  At Keerti Cure Dental, our approach to
                  dentistry is built around understanding
                  each patient as an individual. Under
                  the leadership of Dr. Sandeep
                  Kokkeragadda, our focus is on respectful
                  communication, patient comfort and
                  informed decisions about oral health.
                </p>

                <p>
                  We believe that a good dental experience
                  begins with listening. From the first
                  consultation to guidance after treatment,
                  our goal is to help patients understand
                  their options and feel supported
                  throughout their care journey.
                </p>

                <div className="kc-leadership-highlights">
                  <div className="kc-leadership-highlight">
                    <HeartHandshake size={21} />
                    <span>Patient-first approach</span>
                  </div>

                  <div className="kc-leadership-highlight">
                    <MessageCircle size={21} />
                    <span>Clear communication</span>
                  </div>

                  <div className="kc-leadership-highlight">
                    <ShieldCheck size={21} />
                    <span>Thoughtful dental care</span>
                  </div>
                </div>

                <div className="kc-doctor-quote kc-leadership-quote">
                  <Quote size={26} />
                  <p>
                    Our philosophy is simple: listen
                    carefully, explain clearly and make
                    every patient feel valued.
                  </p>
                </div>

                <button
                  type="button"
                  className="kc-button"
                  onClick={() => go("/contact")}
                >
                  <span>Book a Consultation</span>
                  <ArrowUpRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </section>

        <CmdMessage />

        {/* MISSION AND VISION */}

        <section className="kc-section kc-mission">
          <div className="kc-container kc-mission-grid">
            <article className="kc-mission-card kc-reveal">
              <HeartPulse size={35} />

              <span className="kc-eyebrow">
                OUR MISSION
              </span>

              <h2>
                Support better oral health through
                personalised consultations,
                thoughtful care and clear guidance.
              </h2>
            </article>

            <article
              className="kc-mission-card kc-reveal"
              style={stagger(1)}
            >
              <Sparkles size={35} />

              <span className="kc-eyebrow">
                OUR VISION
              </span>

              <h2>
                Create a welcoming dental experience
                that encourages people to prioritise
                their oral health.
              </h2>
            </article>
          </div>
        </section>

        {/* CORE VALUES */}

        <section className="kc-section">
          <div className="kc-container">
            <div className="kc-center kc-reveal">
              <span className="kc-eyebrow">
                WHAT GUIDES US
              </span>

              <h2 className="kc-heading">
                Our values.
                <em> Your experience.</em>
              </h2>

              <p>
                The principles that shape
                how we communicate and care.
              </p>
            </div>

            <div className="kc-values-grid">
              {values.map(
                ({ icon: Icon, title, description }, index) => (
                  <article
                    className="kc-value-card kc-reveal"
                    style={stagger(index)}
                    key={title}
                  >
                    <Icon size={30} />
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </article>
                )
              )}
            </div>
          </div>
        </section>

        {/* CARE JOURNEY */}

        <section className="kc-section kc-soft">
          <div className="kc-container">
            <div className="kc-center kc-reveal">
              <span className="kc-eyebrow">
                YOUR CARE JOURNEY
              </span>

              <h2 className="kc-heading">
                You are never
                <em> left guessing.</em>
              </h2>

              <p>
                A clear approach to understanding
                your oral health and possible
                next steps.
              </p>
            </div>

            <div className="kc-journey-grid">
              {careSteps.map((step, index) => (
                <article
                  className="kc-journey-card kc-reveal"
                  style={stagger(index)}
                  key={step.number}
                >
                  <span className="kc-journey-number">
                    {step.number}
                  </span>

                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* QUOTE */}

        <section className="kc-quote">
          <div className="kc-container kc-reveal">
            <Quote size={45} />

            <blockquote>
              "The right dental experience is
              not only about treatment.
              It is about feeling heard
              before it begins."
            </blockquote>

            <span>— KEERTI CURE DENTAL</span>
          </div>
        </section>

        {/* FAQ */}

        <section className="kc-section">
          <div className="kc-container kc-faq-grid">
            <div className="kc-reveal">
              <span className="kc-eyebrow">
                COMMON QUESTIONS
              </span>

              <h2 className="kc-heading">
                Questions?
                <em> We are here to help.</em>
              </h2>

              <p>
                Learn more about our approach
                and your first consultation.
              </p>
            </div>

            <div className="kc-reveal">
              {faqs.map((faq, index) => (
                <div
                  className="kc-faq-item"
                  key={faq.question}
                >
                  <button
                    className="kc-faq-question"
                    aria-expanded={openFaq === index}
                    aria-controls={`kc-faq-${index}`}
                    onClick={() =>
                      setOpenFaq(
                        openFaq === index ? null : index
                      )
                    }
                  >
                    <span>{faq.question}</span>
                    <ChevronDown size={19} />
                  </button>

                  {openFaq === index && (
                    <div
                      className="kc-faq-answer"
                      id={`kc-faq-${index}`}
                    >
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Cta go={go} />
    </>
  );
}

export default About;
