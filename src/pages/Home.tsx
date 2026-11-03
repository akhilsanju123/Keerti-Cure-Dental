
import { useEffect, useRef, useState } from "react";
import type { CSSProperties, MouseEvent } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  ArrowUp,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  ShieldCheck,
  HeartPulse,
  Sparkles,
  CalendarDays,
  MessageCircle,
  Lightbulb,
  Smile,
  Clock3,
  Heart,
  Plus,
  Minus,
  MoveDown,
  Star,
  Quote,
} from "lucide-react";

import {
  treatments,
  careImage,
  type Go,
} from "@/lib/constants";

import { AppointmentForm } from "@/components/AppointmentForm";
import { ClinicHours } from "@/components/ClinicHours";
import { ClinicFacilities } from "@/components/ClinicFacilities";
import { WhyChooseHighlights } from "@/components/WhyChooseHighlights";
import { TreatmentJourney } from "@/components/TreatmentJourney";

/* =========================================================
   KEERTI CURE DENTAL
   COMPLETE PREMIUM HOME PAGE
   Fonts: Manrope + DM Sans
   All CSS inside this file
========================================================= */

const SLIDE_TIME = 6500;

const slides = [
  {
    id: "01",
    eyebrow: "WELCOME TO KEERTI CURE DENTAL",
    heading: "Every smile",
    second: "has a story.",
    accent: "Let's care for yours.",
    description:
      "Discover thoughtful dental care where comfort, confidence and your individual needs come first.",
    image: "/images/slides/002_(1).jpg.jpeg",
    primary: "Book an Appointment",
    secondary: "Explore Treatments",
    primaryPath: "/book-appointment",
    secondaryPath: "/treatments",
  },
  {
    id: "02",
    eyebrow: "MODERN DENTAL CARE",
    heading: "Your confidence.",
    second: "Your comfort.",
    accent: "Your beautiful smile.",
    description:
      "Explore personalised dental consultations and treatment options designed around your oral health.",
    image: "/images/slides/004.jpg.jpeg",
    primary: "Explore Our Care",
    secondary: "Book Consultation",
    primaryPath: "/treatments",
    secondaryPath: "/book-appointment",
  },
  {
    id: "03",
    eyebrow: "COMPASSIONATE DENTISTRY",
    heading: "A healthier smile.",
    second: "A happier you.",
    accent: "Care that feels different.",
    description:
      "From your first conversation to your follow-up guidance, experience dental care built on trust and understanding.",
    image: "/images/slides/1636976941859_002.jpg.jpeg",
    primary: "Start Your Journey",
    secondary: "About Our Clinic",
    primaryPath: "/book-appointment",
    secondaryPath: "/about-us",
  },
  {
    id: "04",
    eyebrow: "PREVENTIVE DENTAL CARE",
    heading: "Small habits.",
    second: "Stronger smiles.",
    accent: "Guidance that lasts.",
    description: "Build simple routines that help protect your teeth and gums every day.",
    image: "/images/slides/50 copy.jpeg",
    primary: "Book a Checkup",
    secondary: "Learn About Care",
    primaryPath: "/book-appointment",
    secondaryPath: "/treatments",
  },
  {
    id: "05",
    eyebrow: "PERSONALISED CONSULTATIONS",
    heading: "Understand your options.",
    second: "Choose with confidence.",
    accent: "Clear conversations first.",
    description: "Talk through your concerns and receive a treatment plan shaped around your needs.",
    image: "/images/slides/40.jpeg",
    primary: "Meet Our Team",
    secondary: "Book Consultation",
    primaryPath: "/doctors",
    secondaryPath: "/book-appointment",
  },
  {
    id: "06",
    eyebrow: "ADVANCED DENTAL TECHNOLOGY",
    heading: "Precision when it matters.",
    second: "Comfort at every step.",
    accent: "Modern care, thoughtfully delivered.",
    description: "Use modern diagnostics and techniques with a calm, patient-first approach.",
    image: "/images/slides/39.jpeg",
    primary: "Explore Our Care",
    secondary: "Visit Our Clinic",
    primaryPath: "/treatments",
    secondaryPath: "/contact",
  },
  {
    id: "07",
    eyebrow: "A CALMER DENTAL VISIT",
    heading: "Feel heard.",
    second: "Feel cared for.",
    accent: "Your comfort comes first.",
    description: "From your first call to follow-up care, our team is here to make every step feel easier.",
    image: "/images/slides/66.jpeg",
    primary: "Start Your Visit",
    secondary: "Why Choose Us",
    primaryPath: "/book-appointment",
    secondaryPath: "/about-us",
  },
  {
    id: "08",
    eyebrow: "SMILE RESTORATION",
    heading: "Restore your smile.",
    second: "Restore your confidence.",
    accent: "Thoughtful care for every age.",
    description: "Discover restorative and cosmetic options with clear guidance from our dental team.",
    image: "/images/slides/72.jpeg",
    primary: "Explore Treatments",
    secondary: "Book Consultation",
    primaryPath: "/treatments",
    secondaryPath: "/book-appointment",
  },
  {
    id: "09",
    eyebrow: "PATIENT-CENTRED DENTISTRY",
    heading: "A better dental experience.",
    second: "Starts with listening.",
    accent: "Care designed around you.",
    description: "Share what matters to you and let us guide you towards suitable next steps.",
    image: "/images/slides/WhatsApp_Image_2026-11-02_at_11.39.01_AM.jpeg",
    primary: "Talk To Our Team",
    secondary: "Contact The Clinic",
    primaryPath: "/book-appointment",
    secondaryPath: "/contact",
  },
  {
    id: "10",
    eyebrow: "YOUR SMILE JOURNEY",
    heading: "Start today.",
    second: "Smile brighter.",
    accent: "We are here for you.",
    description: "Take the first step towards comfortable, personalised dental care at Keerti Cure Dental.",
    image: "/images/slides/WhatsApp_Image_2026-11-02_at_11.49.50_AM.jpeg",
    primary: "Book an Appointment",
    secondary: "Explore Our Services",
    primaryPath: "/book-appointment",
    secondaryPath: "/our-services",
  },
];

const features = [
  {
    icon: HeartPulse,
    number: "01",
    title: "Patient-First Care",
    description:
      "Your comfort, concerns and individual goals guide every conversation.",
  },
  {
    icon: ShieldCheck,
    number: "02",
    title: "Clear Guidance",
    description:
      "Understand your dental options with simple and thoughtful explanations.",
  },
  {
    icon: Sparkles,
    number: "03",
    title: "Comfortable Experience",
    description:
      "A calm and welcoming approach to your dental appointments.",
  },
  {
    icon: Smile,
    number: "04",
    title: "Lasting Oral Wellness",
    description:
      "Helpful guidance to care for your smile between visits.",
  },
];

const steps = [
  {
    number: "01",
    icon: CalendarDays,
    title: "Book Your Visit",
    description:
      "Request your consultation with our dental care team.",
  },
  {
    number: "02",
    icon: MessageCircle,
    title: "Share Your Concerns",
    description:
      "Discuss your dental questions and oral health goals.",
  },
  {
    number: "03",
    icon: Lightbulb,
    title: "Explore Your Options",
    description:
      "Receive personalised explanations and care guidance.",
  },
  {
    number: "04",
    icon: Heart,
    title: "Smile With Confidence",
    description:
      "Move forward with a suitable dental care plan.",
  },
];

const promotionalImages = [
  "/images/slides/4.jpg.jpeg",
  "/images/slides/5_(6).jpg.jpeg",
  "/images/slides/5_(4).jpg.jpeg",
  "/images/slides/5_(3).jpg.jpeg",
  "/images/slides/5_(2).jpg.jpeg",
];

const blogs = [
  {
    title: "Professional Teeth Whitening",
    category: "COSMETIC CARE",
    time: "4 MIN READ",
    image: promotionalImages[0],
  },
  {
    title: "Healthy Teeth Start With Regular Checkups",
    category: "PREVENTIVE CARE",
    time: "5 MIN READ",
    image: promotionalImages[1],
  },
  {
    title: "A Confident Smile With Braces",
    category: "ORTHODONTICS",
    time: "3 MIN READ",
    image: promotionalImages[2],
  },
];

const faqs = [
  {
    question: "How can I book an appointment?",
    answer:
      "You can request an appointment using the booking form or visit our appointment page. Our team will contact you to confirm availability.",
  },
  {
    question: "What happens during my first dental visit?",
    answer:
      "Your dentist will listen to your concerns, assess your oral health as appropriate, and discuss suitable next steps.",
  },
  {
    question: "Can I discuss treatment options before deciding?",
    answer:
      "Yes. We encourage patients to ask questions and understand their treatment options before making a decision.",
  },
  {
    question: "How often should I schedule dental checkups?",
    answer:
      "The ideal frequency depends on your oral health needs. Your dentist can recommend an appropriate schedule.",
  },
];

const testimonials = [
  {
    name: "Karajada Aruna Kumari",
    rating: 5,
    text: "Thank you Dr. Sandeep Kokkeragadda and his team. My father went for root canal, implant and tooth removal treatment and the service was superb. The doctor listened to our concerns carefully and cleared all our doubts. Treatment charges are reasonable.",
  },
  {
    name: "Kenguva Jagadeesh",
    rating: 5,
    text: "Best dentist in Visakhapatnam. Thanks Dr. Sandeep Kokkeragadda. Implants treatment done by him and the results were excellent. Highly recommend to everyone.",
  },
  {
    name: "Sneha Maredla",
    rating: 5,
    text: "Dr. Sandeep is very friendly. Diagnoses perfectly and gives painless treatment. Strongly recommended for any kind of dental issues.",
  },
  {
    name: "Ravi Kumar",
    rating: 5,
    text: "Dr. Sandeep is very good and friendly, takes very good care. He first does analysis, shares the suggestions and then proceeds further with next steps. Very professional approach.",
  },
  {
    name: "Lakshmi Prasanna",
    rating: 5,
    text: "It was a great experience getting an RCT done for my father at Keerti Cure Dental. Dr. Sandeep Kokkeragadda is an exceptional doctor with a wealth of knowledge and expertise.",
  },
  {
    name: "Sai Teja",
    rating: 5,
    text: "I had a wisdom tooth removed here and the whole process was painless. The staff made me feel comfortable throughout. One of the best dental clinics in Vizag.",
  },
  {
    name: "Divya Sree",
    rating: 5,
    text: "The clinic is clean and hygienic. Dr. Sandeep explained every step of my root canal treatment clearly. I never felt anxious at any point. Truly thankful.",
  },
  {
    name: "Venkat Rao",
    rating: 5,
    text: "Got my dental implants done here. The treatment was smooth and the charges were reasonable compared to other clinics. Dr. Sandeep is highly skilled.",
  },
  {
    name: "Anusha Reddy",
    rating: 5,
    text: "Wonderful experience at Keerti Cure Dental. The doctor patiently answered all my questions about my teeth alignment. Felt confident going ahead with the treatment.",
  },
  {
    name: "Gopi Krishna",
    rating: 5,
    text: "Visited for a toothache and the doctor diagnosed it quickly. Treatment started the same day and I had relief by evening. Very efficient and caring team.",
  },
  {
    name: "Harika Devi",
    rating: 5,
    text: "My mother got dentures fitted here and we are very satisfied with the results. The clinic maintains high standards of hygiene and the staff is polite.",
  },
  {
    name: "Manoj Kumar",
    rating: 5,
    text: "Best dental care I have received so far. Dr. Sandeep is calm, listens patiently and suggests only what is needed. No unnecessary treatments or charges.",
  },
  {
    name: "Swapna Bindu",
    rating: 5,
    text: "I was nervous about my root canal but the doctor made it completely painless. The whole procedure was done in a single sitting. Very happy with the outcome.",
  },
  {
    name: "Ramesh Babu",
    rating: 5,
    text: "Took my son for a cavity treatment. Dr. Sandeep was so friendly that my child did not feel scared at all. Great with kids and very experienced.",
  },
  {
    name: "Jyothi Lakshmi",
    rating: 5,
    text: "Had a scaling and polishing session here. The clinic is modern and well-equipped. The dentist was gentle and the results were great. Definitely my go-to clinic now.",
  },
  {
    name: "Pavan Teja",
    rating: 5,
    text: "I got my braces done at Keerti Cure Dental. The progress has been amazing and the doctor reviews the treatment regularly. Very professional and caring.",
  },
  {
    name: "Saritha Chowdary",
    rating: 5,
    text: "The team is very supportive and the doctor's expertise is clearly visible in his work. My implant feels natural and there was no pain after the procedure.",
  },
  {
    name: "Naga Sri",
    rating: 5,
    text: "Visited for a cosmetic filling and the result looks completely natural. Dr. Sandeep pays attention to every small detail. Highly satisfied.",
  },
  {
    name: "Vamsi Krishna",
    rating: 5,
    text: "Excellent service and a very calm environment. The doctor explained the entire treatment plan before starting. No hidden charges, very transparent.",
  },
  {
    name: "Pooja Sri",
    rating: 5,
    text: "I had a dental emergency and they took me in without any wait. Quick relief and proper guidance for follow-up care. Grateful for the prompt help.",
  },
];

const treatmentImages = [
  promotionalImages[3],
  promotionalImages[4],
  "/images/slides/4_(3).jpg.jpeg",
  "/images/slides/4_(2).jpg.jpeg",
  "/images/slides/4_(1).jpg.jpeg",
  "/images/slides/04.jpg.jpeg",
];

/* =========================================================
   COMPLETE CSS
========================================================= */

const styles = `
/* OUR CLINIC: keep the technology panel content-height instead of
   stretching it to match the taller image gallery. */
.kd-home .kd-premium-facilities :is(section, div)[class*="grid"] {
  align-items: start;
}
.kd-home .kd-premium-facilities :is(section, div)[class*="grid"] > :first-child {
  align-self: start;
  height: fit-content;
  min-height: 0;
}
.kd-home .kd-premium-facilities :is(article, aside)[class*="card"],
.kd-home .kd-premium-facilities :is(article, aside)[class*="panel"] {
  min-height: 0;
}

@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Manrope:wght@400;500;600;700;800&display=swap');

.kd-home {
  --kd-dark: #062d35;
  --kd-deep: #03242b;
  --kd-primary: #087f83;
  --kd-primary-light: #11aaa4;
  --kd-mint: #b9f1df;
  --kd-soft: #effaf6;
  --kd-text: #526d72;
  --kd-border: #deebe7;
  --kd-ease: cubic-bezier(.22,1,.36,1);

  position: relative;
  overflow: clip;
  background: #fff;
  color: var(--kd-dark);
  font-family: 'DM Sans', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.75;
  letter-spacing: -.01em;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

.kd-home *,
.kd-home *::before,
.kd-home *::after {
  box-sizing: border-box;
}

.kd-home .kd-container {
  width: min(1240px, calc(100% - 48px));
  margin-inline: auto;
}

.kd-home button,
.kd-home input,
.kd-home select,
.kd-home textarea,
.kd-home label {
  font-family: 'DM Sans', sans-serif;
}

.kd-home button {
  cursor: pointer;
}

.kd-home img {
  display: block;
  width: 100%;
}

.kd-home h1,
.kd-home h2,
.kd-home h3,
.kd-home h4,
.kd-home h5,
.kd-home h6 {
  margin-top: 0;
  font-family: 'Manrope', sans-serif;
  font-weight: 800;
  letter-spacing: -.055em;
  line-height: 1.15;
}

.kd-home p {
  margin-top: 0;
  color: var(--kd-text);
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.9;
  letter-spacing: -.005em;
}

.kd-section {
  position: relative;
  padding: 115px 0;
}

.kd-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  color: var(--kd-primary);
  font-family: 'DM Sans', sans-serif;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 2.2px;
  text-transform: uppercase;
}

.kd-eyebrow::before {
  content: "";
  width: 30px;
  height: 2px;
  background: currentColor;
}

.kd-heading {
  margin: 20px 0;
  color: var(--kd-dark);
  font-family: 'Manrope', sans-serif;
  font-size: clamp(35px, 4.3vw, 60px);
  font-weight: 800;
  line-height: 1.17;
  letter-spacing: -.055em;
}

.kd-heading em {
  color: var(--kd-primary);
  font-style: normal;
}

/* SCROLL REVEAL */

.kd-reveal {
  opacity: 0;
  transform: translate3d(0,65px,0);
  filter: blur(7px);
  transition:
    opacity .9s ease,
    transform 1s var(--kd-ease),
    filter 1s ease;
  transition-delay: var(--kd-delay,0ms);
}

.kd-reveal.kd-visible {
  opacity: 1;
  transform: translate3d(0,0,0);
  filter: blur(0);
}

.kd-from-left {
  transform: translate3d(-75px,0,0);
}

.kd-from-right {
  transform: translate3d(75px,0,0);
}

.kd-zoom-in {
  transform: scale(.88);
}

.kd-from-left.kd-visible,
.kd-from-right.kd-visible {
  transform: translate3d(0,0,0);
}

.kd-zoom-in.kd-visible {
  transform: scale(1);
}

/* SCROLL PROGRESS */

.kd-scroll-progress {
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  pointer-events: none;
}

.kd-scroll-progress span {
  display: block;
  height: 100%;
  width: 100%;
  transform: scaleX(var(--kd-progress,0));
  transform-origin: left;
  background: linear-gradient(90deg,#0b777c,#2cd6bd,#b9f1df);
  box-shadow: 0 0 14px rgba(44,214,189,.55);
}

/* BUTTONS */

.kd-btn {
  position: relative;
  isolation: isolate;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  min-height: 58px;
  padding: 16px 27px;
  border: 1px solid transparent;
  border-radius: 9px;
  overflow: hidden;
  font-family: 'DM Sans', sans-serif;
  font-size: 13px;
  font-weight: 800;
  letter-spacing: .01em;
  text-decoration: none;
  transition:
    transform .4s var(--kd-ease),
    background .35s ease,
    color .35s ease,
    box-shadow .4s ease,
    border-color .35s ease;
}

.kd-btn::before {
  content: "";
  position: absolute;
  z-index: -1;
  inset: 0;
  background: rgba(255,255,255,.14);
  transform: translateX(-102%) skewX(-18deg);
  transition: transform .65s var(--kd-ease);
}

.kd-btn:hover::before {
  transform: translateX(0) skewX(0);
}

.kd-btn:hover {
  transform: translateY(-5px);
}

.kd-btn svg {
  transition: transform .4s var(--kd-ease);
}

.kd-btn:hover svg {
  transform: translate(5px,-3px);
}

.kd-btn-primary {
  background: var(--kd-primary);
  color: #fff;
  box-shadow: 0 12px 30px rgba(8,127,131,.23);
}

.kd-btn-primary:hover {
  background: #066b70;
  box-shadow: 0 20px 42px rgba(8,127,131,.32);
}

.kd-btn-white {
  background: #fff;
  color: var(--kd-dark);
}

.kd-btn-white:hover {
  background: var(--kd-mint);
}

.kd-btn-outline {
  border-color: rgba(255,255,255,.45);
  background: rgba(255,255,255,.08);
  color: #fff;
  backdrop-filter: blur(12px);
}

.kd-btn-outline:hover {
  border-color: #fff;
  background: rgba(255,255,255,.18);
}

.kd-link {
  display: inline-flex;
  align-items: center;
  gap: 13px;
  padding: 10px 0;
  border: 0;
  background: none;
  color: var(--kd-primary);
  font-family: 'DM Sans', sans-serif;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: .7px;
  text-transform: uppercase;
}

.kd-link svg {
  transition: transform .4s var(--kd-ease);
}

.kd-link:hover svg {
  transform: translate(7px,-5px);
}

/* HERO */

.kd-hero {
  position: relative;
  height: min(820px,92vh);
  min-height: 670px;
  overflow: hidden;
  background: var(--kd-deep);
}

.kd-slide {
  position: absolute;
  inset: 0;
  opacity: 0;
  visibility: hidden;
  transition: opacity 1.15s ease, visibility 1.15s;
}

.kd-slide.kd-active {
  z-index: 2;
  opacity: 1;
  visibility: visible;
}

.kd-slide-image {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.kd-slide-image img {
  height: 100%;
  object-fit: cover;
  transform: scale(1.15);
  transition: transform 7s linear;
}

.kd-slide.kd-active .kd-slide-image img {
  transform: scale(1);
}

.kd-slide-overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      90deg,
      rgba(2,32,39,.97) 0%,
      rgba(2,32,39,.86) 37%,
      rgba(2,32,39,.46) 73%,
      rgba(2,32,39,.2) 100%
    ),
    linear-gradient(0deg,rgba(2,32,39,.5),transparent 45%);
}

.kd-hero-orbit {
  position: absolute;
  right: -180px;
  top: -180px;
  width: 600px;
  height: 600px;
  border: 1px solid rgba(255,255,255,.14);
  border-radius: 50%;
  box-shadow:
    0 0 0 100px rgba(255,255,255,.025),
    0 0 0 200px rgba(255,255,255,.012);
  pointer-events: none;
  animation: kdOrbit 16s linear infinite;
}

.kd-hero-inner {
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  padding-bottom: 100px;
}

.kd-hero-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  color: var(--kd-mint);
  font-family: 'DM Sans', sans-serif;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 2.2px;
}

.kd-hero-eyebrow::before {
  content: "";
  width: 32px;
  height: 2px;
  background: currentColor;
}

.kd-hero h1 {
  max-width: 900px;
  margin: 28px 0;
  color: #fff;
  font-family: 'Manrope', sans-serif;
  font-size: clamp(48px,6.2vw,88px);
  font-weight: 800;
  line-height: 1.08;
  letter-spacing: -.065em;
}

.kd-hero h1 span,
.kd-hero h1 em {
  display: block;
}

.kd-hero h1 em {
  color: var(--kd-mint);
  font-style: normal;
}

.kd-hero-description {
  max-width: 540px;
  color: rgba(255,255,255,.82) !important;
  font-size: 16px;
}

.kd-hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 25px;
}

.kd-slide.kd-active .kd-hero-eyebrow {
  animation: kdEnter .9s .1s both;
}

.kd-slide.kd-active h1 {
  animation: kdEnter 1.05s .25s both;
}

.kd-slide.kd-active .kd-hero-description {
  animation: kdEnter 1.05s .4s both;
}

.kd-slide.kd-active .kd-hero-actions {
  animation: kdEnter 1.05s .55s both;
}

.kd-hero-controls {
  position: absolute;
  z-index: 8;
  bottom: 42px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  pointer-events: none;
}

.kd-hero-dots,
.kd-hero-arrows {
  display: flex;
  align-items: center;
  gap: 12px;
  pointer-events: auto;
}

.kd-dot {
  width: 31px;
  height: 4px;
  padding: 0;
  border: 0;
  border-radius: 10px;
  background: rgba(255,255,255,.35);
  transition: width .4s ease, background .4s ease;
}

.kd-dot.kd-active {
  width: 66px;
  background: var(--kd-mint);
}

.kd-arrow {
  display: grid;
  place-items: center;
  width: 50px;
  height: 50px;
  border: 1px solid rgba(255,255,255,.4);
  border-radius: 50%;
  background: rgba(255,255,255,.1);
  color: #fff;
  backdrop-filter: blur(10px);
  transition: transform .4s var(--kd-ease), background .35s ease;
}

.kd-arrow:hover {
  transform: scale(1.12);
  background: var(--kd-primary);
}

.kd-slide-count {
  position: absolute;
  z-index: 6;
  right: 4%;
  top: 50%;
  transform: translateY(-50%);
  writing-mode: vertical-rl;
  color: rgba(255,255,255,.8);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 3px;
}

.kd-slide-progress {
  position: absolute;
  z-index: 9;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 3px;
  background: rgba(255,255,255,.2);
}

.kd-slide-progress span {
  display: block;
  height: 100%;
  width: 0;
  background: var(--kd-mint);
  animation: kdSlideProgress 6.5s linear forwards;
}

.kd-scroll-cue {
  position: absolute;
  z-index: 6;
  bottom: 45px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  color: rgba(255,255,255,.7);
  font-size: 10px;
  letter-spacing: 2px;
  pointer-events: none;
}

.kd-scroll-cue svg {
  animation: kdBounce 2s ease-in-out infinite;
}

/* TRUST STRIP */

.kd-trust-strip {
  background: var(--kd-primary);
}

.kd-trust-grid {
  display: grid;
  grid-template-columns: repeat(3,1fr);
}

.kd-trust-item {
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 30px 24px;
  color: #fff;
  border-right: 1px solid rgba(255,255,255,.18);
  transition: background .4s ease;
}

.kd-trust-item:first-child {
  border-left: 1px solid rgba(255,255,255,.18);
}

.kd-trust-item:hover {
  background: rgba(0,0,0,.13);
}

.kd-trust-icon {
  display: grid;
  place-items: center;
  width: 54px;
  height: 54px;
  flex-shrink: 0;
  border-radius: 16px;
  background: rgba(255,255,255,.14);
  transition: transform .5s var(--kd-ease);
}

.kd-trust-item:hover .kd-trust-icon {
  transform: rotate(-12deg) scale(1.13);
}

.kd-trust-item strong,
.kd-trust-item small {
  display: block;
}

.kd-trust-item strong {
  font-family: 'Manrope', sans-serif;
  font-size: 14px;
  font-weight: 800;
}

.kd-trust-item small {
  margin-top: 5px;
  opacity: .82;
  font-size: 12px;
}

/* ABOUT */

.kd-about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 100px;
}

.kd-about-visual {
  position: relative;
  min-height: 575px;
}

.kd-about-main {
  position: absolute;
  top: 0;
  left: 0;
  width: 86%;
  height: 490px;
  overflow: hidden;
  border-radius: 180px 16px 16px 16px;
  background: var(--kd-soft);
}

.kd-about-main img,
.kd-about-small img {
  height: 100%;
  object-fit: cover;
  transition: transform 1.1s var(--kd-ease);
}

.kd-about-main:hover img,
.kd-about-small:hover img {
  transform: scale(1.12);
}

.kd-about-small {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 50%;
  height: 260px;
  border: 8px solid #fff;
  border-radius: 16px 16px 110px 16px;
  overflow: hidden;
  box-shadow: 0 22px 50px rgba(5,50,50,.17);
}

.kd-about-badge {
  position: absolute;
  z-index: 3;
  left: -18px;
  bottom: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 9px;
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background: var(--kd-primary);
  color: #fff;
  box-shadow: 0 18px 40px rgba(8,127,131,.26);
  animation: kdFloat 5s ease-in-out infinite;
}

.kd-about-badge span {
  max-width: 95px;
  font-size: 10px;
  font-weight: 800;
  line-height: 1.4;
  letter-spacing: .7px;
  text-align: center;
}

.kd-about-content p {
  margin-bottom: 17px;
}

.kd-check-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
  margin: 32px 0;
}

.kd-check-item {
  display: flex;
  align-items: center;
  gap: 9px;
  font-size: 12px;
  font-weight: 700;
  transition: transform .3s ease;
}

.kd-check-item:hover {
  transform: translateX(5px);
}

.kd-check-item svg {
  flex-shrink: 0;
  color: var(--kd-primary);
}

/* SECTION TOP */

.kd-section-top {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 35px;
  margin-bottom: 48px;
}

.kd-section-top p {
  max-width: 560px;
  margin-bottom: 0;
}

/* TREATMENTS */

.kd-treatments {
  background: var(--kd-soft);
}

.kd-treatment-grid {
  display: grid;
  grid-template-columns: repeat(3,minmax(0,1fr));
  gap: 26px;
}

.kd-treatment-card {
  position: relative;
  isolation: isolate;
  width: 100%;
  height: 400px;
  padding: 0;
  border: 0;
  border-radius: 18px;
  overflow: hidden;
  background: var(--kd-deep);
  color: #fff;
  text-align: left;
  transform-style: preserve-3d;
  transition: transform .35s ease, box-shadow .4s ease;
}

.kd-treatment-card:hover {
  box-shadow: 0 30px 65px rgba(5,60,65,.27);
}

.kd-treatment-image {
  position: absolute;
  inset: 0;
}

.kd-treatment-image img {
  height: 100%;
  object-fit: cover;
  transition: transform 1s var(--kd-ease);
}

.kd-treatment-card:hover img {
  transform: scale(1.15);
}

.kd-treatment-card::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    0deg,
    rgba(3,32,40,.98) 0%,
    rgba(3,32,40,.65) 43%,
    rgba(3,32,40,.06) 90%
  );
}

.kd-card-glow {
  position: absolute;
  z-index: 3;
  inset: 0;
  opacity: 0;
  pointer-events: none;
  background: radial-gradient(
    300px circle at var(--mouse-x,50%) var(--mouse-y,50%),
    rgba(185,241,223,.22),
    transparent 70%
  );
  transition: opacity .35s ease;
}

.kd-treatment-card:hover .kd-card-glow {
  opacity: 1;
}

.kd-treatment-number {
  position: absolute;
  z-index: 4;
  top: 25px;
  left: 27px;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 2px;
}

.kd-treatment-content {
  position: absolute;
  z-index: 4;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 31px;
  transform: translateY(7px);
  transition: transform .45s var(--kd-ease);
}

.kd-treatment-card:hover .kd-treatment-content {
  transform: translateY(0);
}

.kd-treatment-content h3 {
  margin: 0 0 13px;
  color: #fff;
  font-family: 'Manrope', sans-serif;
  font-size: 25px;
  font-weight: 800;
  line-height: 1.2;
}

.kd-treatment-content p {
  color: rgba(255,255,255,.78);
  font-size: 12px;
}

.kd-treatment-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 18px;
  border-top: 1px solid rgba(255,255,255,.25);
  color: var(--kd-mint);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1px;
}

.kd-treatment-bottom svg {
  transition: transform .4s ease;
}

.kd-treatment-card:hover .kd-treatment-bottom svg {
  transform: translate(7px,-7px);
}

/* VALUES */

.kd-values {
  position: relative;
  overflow: hidden;
  background: var(--kd-dark);
  color: #fff;
}

.kd-values .kd-heading {
  color: #fff;
}

.kd-values .kd-heading em {
  color: var(--kd-mint);
}

.kd-values .kd-eyebrow {
  color: var(--kd-mint);
}

.kd-values .kd-section-top p {
  color: rgba(255,255,255,.7);
}

.kd-values-grid {
  display: grid;
  grid-template-columns: repeat(4,minmax(0,1fr));
  gap: 20px;
}

.kd-value-card {
  position: relative;
  min-height: 325px;
  padding: 32px 25px;
  border: 1px solid rgba(255,255,255,.14);
  border-radius: 16px;
  overflow: hidden;
  background: rgba(255,255,255,.045);
  transition:
    transform .5s var(--kd-ease),
    background .4s ease,
    border-color .4s ease,
    box-shadow .4s ease;
}

.kd-value-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(185,241,223,.12),
    transparent 60%
  );
  opacity: 0;
  transition: opacity .4s ease;
}

.kd-value-card:hover {
  transform: translateY(-14px);
  background: var(--kd-primary);
  border-color: var(--kd-primary);
  box-shadow: 0 24px 50px rgba(0,0,0,.18);
}

.kd-value-card:hover::before {
  opacity: 1;
}

.kd-value-number {
  position: absolute;
  right: 25px;
  top: 30px;
  color: rgba(255,255,255,.3);
  font-size: 13px;
}

.kd-value-icon {
  position: relative;
  z-index: 2;
  display: grid;
  place-items: center;
  width: 70px;
  height: 70px;
  margin-bottom: 30px;
  border-radius: 17px;
  background: rgba(185,241,223,.12);
  color: var(--kd-mint);
  transition: transform .5s var(--kd-ease), background .4s ease;
}

.kd-value-card:hover .kd-value-icon {
  transform: rotate(-12deg) scale(1.13);
  background: #fff;
  color: var(--kd-primary);
}

.kd-value-card h3 {
  position: relative;
  z-index: 2;
  margin: 0 0 14px;
  color: #fff;
  font-family: 'Manrope', sans-serif;
  font-size: 20px;
  font-weight: 800;
}

.kd-value-card p {
  position: relative;
  z-index: 2;
  color: rgba(255,255,255,.7);
  font-size: 13px;
}

.kd-value-card:hover p {
  color: rgba(255,255,255,.95);
}

/* APPOINTMENT */

.kd-appointment {
  padding: 95px 0;
  background: #e9f8f3;
}

.kd-appointment-grid {
  display: grid;
  grid-template-columns: .85fr 1.15fr;
  gap: 70px;
  align-items: center;
}

.kd-appointment-copy h2 {
  margin: 20px 0;
  font-family: 'Manrope', sans-serif;
  font-size: clamp(34px,3.8vw,52px);
  font-weight: 800;
  line-height: 1.17;
}

.kd-appointment-copy p {
  max-width: 440px;
  font-size: 14px;
}

.kd-appointment-form {
  min-width: 0;
  padding: 32px;
  border: 1px solid var(--kd-border);
  border-radius: 20px;
  background: #fff;
  box-shadow: 0 22px 60px rgba(8,80,80,.1);
  transition: transform .5s var(--kd-ease), box-shadow .5s ease;
}

.kd-appointment-form:hover {
  transform: translateY(-8px);
  box-shadow: 0 30px 75px rgba(8,80,80,.15);
}

.kd-appointment-form input,
.kd-appointment-form select,
.kd-appointment-form textarea {
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  transition: border-color .3s ease, box-shadow .3s ease;
}

.kd-appointment-form input:focus,
.kd-appointment-form select:focus,
.kd-appointment-form textarea:focus {
  border-color: var(--kd-primary);
  box-shadow: 0 0 0 4px rgba(8,127,131,.1);
  outline: none;
}

/* JOURNEY */

.kd-centered {
  max-width: 750px;
  margin: 0 auto 65px;
  text-align: center;
}

.kd-centered .kd-eyebrow {
  justify-content: center;
}

.kd-journey-grid {
  position: relative;
  display: grid;
  grid-template-columns: repeat(4,minmax(0,1fr));
  gap: 25px;
}

.kd-journey-grid::before {
  content: "";
  position: absolute;
  top: 46px;
  left: 12%;
  right: 12%;
  border-top: 2px dashed #b7ddd5;
}

.kd-step {
  position: relative;
  text-align: center;
}

.kd-step-icon {
  position: relative;
  z-index: 2;
  display: grid;
  place-items: center;
  width: 92px;
  height: 92px;
  margin: 0 auto 26px;
  border: 1px solid #d0e9e2;
  border-radius: 50%;
  background: #eaf8f3;
  color: var(--kd-primary);
  transition:
    transform .5s var(--kd-ease),
    background .4s ease,
    color .4s ease,
    box-shadow .4s ease;
}

.kd-step:hover .kd-step-icon {
  transform: translateY(-12px) scale(1.1);
  background: var(--kd-primary);
  color: #fff;
  box-shadow: 0 18px 40px rgba(8,127,131,.25);
}

.kd-step-number {
  color: var(--kd-primary);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 2px;
}

.kd-step h3 {
  margin: 14px 0;
  font-family: 'Manrope', sans-serif;
  font-size: 20px;
  font-weight: 800;
}

.kd-step p {
  max-width: 225px;
  margin: 0 auto;
  font-size: 13px;
}

/* BLOGS */

.kd-blogs {
  background: #f4faf7;
}

.kd-blog-grid {
  display: grid;
  grid-template-columns: repeat(3,minmax(0,1fr));
  gap: 27px;
}

.kd-blog-card {
  border: 1px solid var(--kd-border);
  border-radius: 17px;
  overflow: hidden;
  background: #fff;
  transition: transform .5s var(--kd-ease), box-shadow .5s ease;
}

.kd-blog-card:hover {
  transform: translateY(-13px);
  box-shadow: 0 25px 60px rgba(5,60,65,.15);
}

.kd-blog-image {
  position: relative;
  height: 250px;
  overflow: hidden;
}

.kd-blog-image img {
  height: 100%;
  object-fit: cover;
  transition: transform 1s var(--kd-ease);
}

.kd-blog-card:hover img {
  transform: scale(1.14);
}

.kd-blog-category {
  position: absolute;
  bottom: 17px;
  left: 17px;
  padding: 10px 13px;
  border-radius: 6px;
  background: #fff;
  color: var(--kd-primary);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 1px;
}

.kd-blog-body {
  padding: 28px;
}

.kd-blog-meta {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--kd-primary);
  font-size: 11px;
  font-weight: 800;
}

.kd-blog-body h3 {
  margin: 16px 0 25px;
  font-family: 'Manrope', sans-serif;
  font-size: 23px;
  font-weight: 800;
  line-height: 1.35;
}

.kd-blog-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 18px 0 0;
  border: 0;
  border-top: 1px solid var(--kd-border);
  background: none;
  color: var(--kd-primary);
  font-size: 12px;
  font-weight: 800;
}

.kd-blog-link svg {
  transition: transform .4s ease;
}

.kd-blog-link:hover svg {
  transform: translate(6px,-6px);
}

/* FAQ */

.kd-faq-grid {
  display: grid;
  grid-template-columns: .8fr 1.2fr;
  gap: 85px;
  align-items: start;
}

.kd-faq-intro p {
  max-width: 400px;
}

.kd-faq-list {
  border-top: 1px solid var(--kd-border);
}

.kd-faq-item {
  border-bottom: 1px solid var(--kd-border);
}

.kd-faq-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  width: 100%;
  padding: 25px 0;
  border: 0;
  background: none;
  color: var(--kd-dark);
  text-align: left;
  font-family: 'Manrope', sans-serif;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -.025em;
  transition: color .3s ease;
}

.kd-faq-question:hover {
  color: var(--kd-primary);
}

.kd-faq-question svg {
  flex-shrink: 0;
  color: var(--kd-primary);
  transition: transform .35s ease;
}

.kd-faq-question[aria-expanded="true"] svg {
  transform: rotate(180deg);
}

.kd-faq-answer {
  padding: 0 35px 24px 0;
  animation: kdEnter .4s ease both;
}

.kd-faq-answer p {
  margin: 0;
  font-size: 14px;
}

/* FINAL CTA */

.kd-final {
  position: relative;
  padding: 110px 20px;
  overflow: hidden;
  background: var(--kd-primary);
  color: #fff;
  text-align: center;
}

.kd-final::before,
.kd-final::after {
  content: "";
  position: absolute;
  width: 440px;
  height: 440px;
  border: 1px solid rgba(255,255,255,.16);
  border-radius: 50%;
  pointer-events: none;
}

.kd-final::before {
  top: -260px;
  left: -180px;
}

.kd-final::after {
  bottom: -280px;
  right: -160px;
}

.kd-final-content {
  position: relative;
  z-index: 2;
  max-width: 780px;
  margin: auto;
}

.kd-final h2 {
  margin: 0 0 24px;
  color: #fff;
  font-family: 'Manrope', sans-serif;
  font-size: clamp(38px,5vw,66px);
  font-weight: 800;
  line-height: 1.14;
  letter-spacing: -.06em;
}

.kd-final p {
  margin-bottom: 34px;
  color: rgba(255,255,255,.85);
}

.kd-back-top {
  position: fixed;
  z-index: 100;
  right: 25px;
  bottom: 25px;
  display: grid;
  place-items: center;
  width: 52px;
  height: 52px;
  border: 0;
  border-radius: 50%;
  background: var(--kd-primary);
  color: #fff;
  box-shadow: 0 10px 30px rgba(8,127,131,.3);
  opacity: 0;
  visibility: hidden;
  transform: translateY(20px);
  transition:
    opacity .35s ease,
    visibility .35s ease,
    transform .35s ease,
    background .35s ease;
}

.kd-back-top.kd-show {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.kd-back-top:hover {
  transform: translateY(-6px);
  background: var(--kd-dark);
}

/* TESTIMONIALS */

.kd-testimonials {
  background: var(--kd-soft);
  overflow: hidden;
}

.kd-testimonial-track-wrap {
  position: relative;
  margin-top: 56px;
  padding: 10px 0 30px;
  overflow: hidden;
  -webkit-mask-image: linear-gradient(90deg,transparent,#000 6%,#000 94%,transparent);
  mask-image: linear-gradient(90deg,transparent,#000 6%,#000 94%,transparent);
}

.kd-testimonial-track {
  display: flex;
  gap: 26px;
  width: max-content;
  animation: kdScrollLeft 60s linear infinite;
}

.kd-testimonial-track-wrap:hover .kd-testimonial-track {
  animation-play-state: paused;
}

.kd-testimonial-card {
  flex: 0 0 auto;
  width: 360px;
  padding: 32px 28px 30px;
  border: 1px solid var(--kd-border);
  border-radius: 18px;
  background: #fff;
  box-shadow: 0 14px 40px rgba(5,60,65,.08);
  transition: transform .4s var(--kd-ease), box-shadow .4s ease;
}

.kd-testimonial-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 24px 55px rgba(5,60,65,.16);
}

.kd-testimonial-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
}

.kd-testimonial-quote {
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: var(--kd-mint);
  color: var(--kd-primary);
}

.kd-testimonial-stars {
  display: flex;
  gap: 3px;
  color: #f5a623;
}

.kd-testimonial-text {
  color: var(--kd-text);
  font-size: 14px;
  line-height: 1.85;
  letter-spacing: -.005em;
  min-height: 168px;
}

.kd-testimonial-author {
  display: flex;
  align-items: center;
  gap: 13px;
  margin-top: 20px;
  padding-top: 18px;
  border-top: 1px solid var(--kd-border);
}

.kd-avatar {
  display: grid;
  place-items: center;
  width: 46px;
  height: 46px;
  flex-shrink: 0;
  border-radius: 50%;
  background: var(--kd-primary);
  color: #fff;
  font-family: 'Manrope', sans-serif;
  font-size: 16px;
  font-weight: 800;
  letter-spacing: -.02em;
}

.kd-testimonial-author strong {
  display: block;
  color: var(--kd-dark);
  font-family: 'Manrope', sans-serif;
  font-size: 15px;
  font-weight: 800;
  letter-spacing: -.02em;
}

.kd-testimonial-author small {
  color: var(--kd-primary);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: .5px;
  text-transform: uppercase;
}

@keyframes kdScrollLeft {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

/* KEYFRAMES */

@keyframes kdEnter {
  from {
    opacity: 0;
    transform: translateY(45px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes kdFloat {
  0%,100% { transform: translateY(0); }
  50% { transform: translateY(-16px); }
}

@keyframes kdBounce {
  0%,100% { transform: translateY(0); }
  50% { transform: translateY(8px); }
}

@keyframes kdOrbit {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes kdSlideProgress {
  from { width: 0; }
  to { width: 100%; }
}


/* =========================================================
   PREMIUM MOTION — EXISTING IMPORTED SECTIONS ONLY
   Preserves their markup, copy, spacing and theme.
========================================================= */
.kd-premium-zone { position:relative; isolation:isolate; }
.kd-premium-zone :is(a,button):focus-visible { outline:3px solid #18b5a9; outline-offset:4px; }
.kd-premium-zone :is(article,[class*="card"],[class*="Card"],[class*="step"],[class*="Step"],[class*="item"],[class*="Item"]){
  position:relative;
  transition: transform .55s cubic-bezier(.22,1,.36,1), box-shadow .55s ease, border-color .4s ease, background-color .4s ease;
  will-change: auto;
}
.kd-premium-zone :is(article,[class*="card"],[class*="Card"],[class*="step"],[class*="Step"],[class*="item"],[class*="Item"]) svg {
  transition: transform .55s cubic-bezier(.22,1,.36,1), color .4s ease;
}
.kd-premium-zone :is(article,[class*="card"],[class*="Card"],[class*="step"],[class*="Step"],[class*="item"],[class*="Item"]) img {
  transition: transform .85s cubic-bezier(.22,1,.36,1);
}
@media (hover:hover) and (pointer:fine){
  .kd-premium-zone :is(article,[class*="card"],[class*="Card"],[class*="step"],[class*="Step"],[class*="item"],[class*="Item"]):hover {
    transform:translateY(-9px);
    border-color:rgba(8,127,131,.35);
    box-shadow:0 22px 50px rgba(5,65,70,.14);
  }
  .kd-premium-zone :is(article,[class*="card"],[class*="Card"],[class*="step"],[class*="Step"],[class*="item"],[class*="Item"]):hover svg {
    transform:translateY(-3px) rotate(-7deg) scale(1.1);
  }
  .kd-premium-zone :is(article,[class*="card"],[class*="Card"],[class*="step"],[class*="Step"],[class*="item"],[class*="Item"]):hover img { transform:scale(1.065); }
  .kd-premium-zone :is(a,button):not(:disabled):hover { filter:brightness(1.035); }
}
/* Reveal whole imported sections without interfering with internal card layouts */
.kd-premium-zone.kd-premium-pending > * {
  opacity:0;
  transform:translateY(36px);
}
.kd-premium-zone > * {
  transition:opacity .9s ease, transform .9s cubic-bezier(.22,1,.36,1);
}
.kd-premium-zone.kd-premium-visible > * {
  opacity:1;
  transform:translateY(0);
}
/* Journey: more deliberate emphasis on step and icon progression */
.kd-premium-journey :is([class*="step"],[class*="Step"]):hover :is(svg,[class*="icon"],[class*="Icon"]) {
  color:#087f83;
}
/* Why choose: keep current colors, make interaction tactile */
.kd-premium-why :is(article,[class*="card"],[class*="Card"]):hover {
  box-shadow:0 24px 55px rgba(4,65,72,.16);
}
/* Clinic schedule: highlight timetable rows gently, without changing hours */
.kd-premium-hours :is(tr,li,[class*="row"],[class*="Row"]) {
  transition:background-color .35s ease, transform .35s ease;
}
.kd-premium-hours :is(tr,li,[class*="row"],[class*="Row"]):hover {
  background-color:rgba(8,127,131,.055);
}
@media (prefers-reduced-motion:reduce){
  .kd-premium-zone, .kd-premium-zone *, .kd-premium-zone *::before, .kd-premium-zone *::after {animation:none!important;transition:none!important;}
  .kd-premium-zone.kd-premium-pending > * {opacity:1;transform:none;}
}


/* =========================================================
   COLORFUL APPOINTMENT TIPS — BLUE + CORAL PREMIUM DESIGN
   Only Before Your Visit / Post-Treatment Care cards
========================================================= */
.kd-premium-journey .kd-care-highlight {
  --care-color: #1264b5;
  --care-dark: #103b65;
  --care-border: #b9d9f7;
  position: relative;
  isolation: isolate;
  overflow: hidden;
  padding: clamp(27px, 3vw, 42px) !important;
  border: 1px solid var(--care-border) !important;
  border-left: 6px solid var(--care-color) !important;
  border-radius: 20px !important;
  background: linear-gradient(125deg,#eaf4ff 0%,#f5faff 65%,#ffffff 100%) !important;
  box-shadow: 0 14px 40px rgba(18,100,181,.10) !important;
  transition: transform .45s cubic-bezier(.22,1,.36,1), box-shadow .45s ease, border-color .35s ease !important;
}
.kd-premium-journey .kd-care-before {
  --care-color: #1768bd;
  --care-dark: #123e6a;
  --care-border: #b8d8f7;
  background: linear-gradient(120deg,#e5f2ff 0%,#f1f8ff 58%,#ffffff 100%) !important;
}
.kd-premium-journey .kd-care-after {
  --care-color: #ed7939;
  --care-dark: #8b3b1d;
  --care-border: #ffd0b2;
  background: linear-gradient(120deg,#fff0e5 0%,#fff8f2 58%,#ffffff 100%) !important;
  box-shadow: 0 14px 40px rgba(237,121,57,.10) !important;
}
.kd-premium-journey .kd-care-highlight::before {
  content: "";
  position: absolute;
  z-index: -1;
  width: 245px;
  height: 245px;
  right: -105px;
  top: -110px;
  border-radius: 50%;
  background: radial-gradient(circle, color-mix(in srgb,var(--care-color) 19%,transparent),transparent 70%);
  pointer-events: none;
}
.kd-premium-journey .kd-care-highlight::after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg,var(--care-color),transparent 85%);
  pointer-events: none;
}
.kd-premium-journey .kd-care-highlight :is(h2,h3,h4,h5,h6) {
  color: var(--care-dark) !important;
  font-weight: 800 !important;
  letter-spacing: -.04em;
}
.kd-premium-journey .kd-care-highlight :is(h2,h3,h4,h5,h6) svg {
  color: var(--care-color) !important;
  transition: transform .4s ease;
}
.kd-premium-journey .kd-care-highlight:hover :is(h2,h3,h4,h5,h6) svg {
  transform: rotate(-10deg) scale(1.12);
}
.kd-premium-journey .kd-care-highlight :is(li,[class*="item"],[class*="Item"]) {
  border-radius: 9px;
  transition: background-color .3s ease, transform .3s ease;
}
.kd-premium-journey .kd-care-highlight li svg,
.kd-premium-journey .kd-care-highlight li::marker,
.kd-premium-journey .kd-care-highlight :is(li,[class*="item"],[class*="Item"]) > svg {
  color: var(--care-color) !important;
}
.kd-premium-journey .kd-care-highlight :is(p,li,span) {
  color: #3e5563;
}
@media (hover:hover) and (pointer:fine) {
  .kd-premium-journey .kd-care-highlight:hover {
    transform: translateY(-9px) !important;
    border-color: var(--care-color) !important;
    box-shadow: 0 25px 55px rgba(16,74,118,.18) !important;
  }
  .kd-premium-journey .kd-care-after:hover {
    box-shadow: 0 25px 55px rgba(192,92,43,.17) !important;
  }
  .kd-premium-journey .kd-care-highlight li:hover {
    background: rgba(255,255,255,.72);
    transform: translateX(6px);
  }
}
@media (max-width:640px) {
  .kd-premium-journey .kd-care-highlight {
    padding: 25px 21px !important;
    border-radius: 16px !important;
  }
}
@media (prefers-reduced-motion:reduce) {
  .kd-premium-journey .kd-care-highlight,
  .kd-premium-journey .kd-care-highlight * {
    transition: none !important;
  }
}

/* RESPONSIVE */

@media(max-width:1050px) {
  .kd-about-grid { gap: 50px; }
  .kd-treatment-grid { grid-template-columns: repeat(2,1fr); }
  .kd-values-grid { grid-template-columns: repeat(2,1fr); }
  .kd-faq-grid { gap: 45px; }
}

@media(max-width:768px) {
  .kd-home .kd-container {
    width: min(100% - 32px,540px);
  }

  .kd-section { padding: 75px 0; }

  .kd-hero {
    min-height: 650px;
    height: 85svh;
    max-height: 850px;
  }

  .kd-hero h1 {
    font-size: clamp(39px,8vw,58px);
    line-height: 1.12;
  }

  .kd-heading {
    font-size: clamp(32px,7vw,45px);
    line-height: 1.2;
  }

  .kd-home p {
    font-size: 14px;
    line-height: 1.8;
  }

  .kd-slide-overlay {
    background: linear-gradient(
      90deg,
      rgba(2,32,39,.94),
      rgba(2,32,39,.65)
    );
  }

  .kd-hero-inner { padding-bottom: 110px; }

  .kd-slide-count,
  .kd-scroll-cue { display: none; }

  .kd-trust-grid { grid-template-columns: 1fr; }

  .kd-trust-item {
    padding: 20px 12px;
    border-bottom: 1px solid rgba(255,255,255,.18);
  }

  .kd-trust-item:first-child { border-left: 0; }

  .kd-about-grid {
    grid-template-columns: 1fr;
    gap: 50px;
  }

  .kd-about-visual { min-height: 490px; }
  .kd-about-main { height: 415px; }
  .kd-about-small { height: 210px; }

  .kd-section-top { display: block; }
  .kd-section-top .kd-link { margin-top: 20px; }

  .kd-appointment-grid {
    grid-template-columns: 1fr;
    gap: 35px;
  }

  .kd-journey-grid {
    grid-template-columns: repeat(2,1fr);
    row-gap: 45px;
  }

  .kd-journey-grid::before { display: none; }
  .kd-blog-grid { grid-template-columns: repeat(2,1fr); }

  .kd-faq-grid {
    grid-template-columns: 1fr;
    gap: 25px;
  }

  .kd-testimonial-card { width: 300px; padding: 26px 22px; }
  .kd-testimonial-text { min-height: 190px; font-size: 13px; }
}

@media(max-width:520px) {
  .kd-hero h1 { font-size: 42px; }

  .kd-hero-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .kd-arrow { width: 42px; height: 42px; }
  .kd-dot { width: 22px; }
  .kd-dot.kd-active { width: 40px; }

  .kd-about-visual { min-height: 390px; }
  .kd-about-main { height: 335px; }
  .kd-about-small { height: 165px; }

  .kd-about-badge {
    width: 95px;
    height: 95px;
    left: -5px;
  }

  .kd-check-grid,
  .kd-treatment-grid,
  .kd-values-grid,
  .kd-journey-grid,
  .kd-blog-grid {
    grid-template-columns: 1fr;
  }

  .kd-treatment-card { height: 365px; }
  .kd-value-card { min-height: auto; }
  .kd-appointment-form { padding: 20px; }
  .kd-blog-image { height: 230px; }

  .kd-testimonial-card { width: 260px; padding: 22px 20px; }
  .kd-testimonial-text { min-height: auto; font-size: 13px; }

  .kd-back-top {
    right: 15px;
    bottom: 15px;
    width: 45px;
    height: 45px;
  }
}

.kd-home button:focus-visible {
  outline: 3px solid #7be4cf;
  outline-offset: 4px;
}

@media(prefers-reduced-motion:reduce) {
  .kd-home *,
  .kd-home *::before,
  .kd-home *::after {
    animation: none !important;
    transition-duration: .01ms !important;
  }

  .kd-reveal {
    opacity: 1;
    filter: none;
    transform: none;
  }

  .kd-slide-image img {
    transform: none !important;
  }

  .kd-testimonial-track {
    animation: none !important;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }
}

/* SOCIAL VIDEO SHOWCASE */
.kd-social-videos { background: linear-gradient(180deg,#f4faf7 0%,#ffffff 100%); padding: 100px 0 115px; }
.kd-social-videos-header { max-width: 760px; margin: 0 auto 45px; text-align: center; }
.kd-social-videos-header .kd-eyebrow { justify-content: center; }
.kd-social-videos-header p { max-width: 570px; margin: 0 auto; }
.kd-social-videos-grid { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap: 26px; align-items: start; }
.kd-social-video-card { min-width: 0; padding: 14px; border: 1px solid #deebe7; border-radius: 20px; background: #fff; box-shadow: 0 14px 42px rgba(5,60,65,.07); transition: transform .4s ease, box-shadow .4s ease, border-color .4s ease; }
.kd-social-video-card:hover { transform: translateY(-9px); border-color: #9bd6ca; box-shadow: 0 24px 55px rgba(5,60,65,.15); }
.kd-social-video-frame { position: relative; width: 100%; aspect-ratio: 9/16; border-radius: 12px; overflow: hidden; background: #eaf5f1; }
.kd-social-video-frame iframe { display: block; width: 100%; height: 100%; border: 0; }
.kd-social-video-meta { display: flex; justify-content: space-between; align-items: center; gap: 12px; padding: 17px 5px 3px; }
.kd-social-video-meta strong { font-family: 'Manrope',sans-serif; font-size: 14px; color: #062d35; }
.kd-social-video-meta a { display: inline-flex; align-items: center; gap: 6px; color: #087f83; font-size: 12px; font-weight: 800; text-decoration: none; white-space: nowrap; }
.kd-social-video-meta a:hover { color: #03242b; }
@media(max-width: 900px) { .kd-social-videos-grid { gap: 14px; } .kd-social-video-card { padding: 9px; } .kd-social-video-meta { flex-wrap: wrap; } }
@media(max-width: 650px) { .kd-social-videos { padding: 70px 0 80px; } .kd-social-videos-grid { grid-template-columns: minmax(0, 1fr); max-width: 400px; margin: 0 auto; gap: 25px; } .kd-social-video-card { padding: 12px; } }
`;

/* =========================================================
   3D HOVER EFFECT
========================================================= */

function handleCardMove(event: MouseEvent<HTMLElement>) {
  if (
    !window.matchMedia("(hover: hover) and (pointer: fine)").matches ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    return;
  }

  const card = event.currentTarget;
  const rect = card.getBoundingClientRect();

  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateX = ((y - centerY) / centerY) * -5;
  const rotateY = ((x - centerX) / centerX) * 5;

  card.style.transform =
    `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;

  card.style.setProperty("--mouse-x", `${x}px`);
  card.style.setProperty("--mouse-y", `${y}px`);
}

function handleCardLeave(event: MouseEvent<HTMLElement>) {
  event.currentTarget.style.transform = "";
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export function Home({ go }: { go: Go }) {
  const rootRef = useRef<HTMLDivElement>(null);

  const [activeSlide, setActiveSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const [slideKey, setSlideKey] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [showTop, setShowTop] = useState(false);

  const changeSlide = (index: number) => {
    setActiveSlide((index + slides.length) % slides.length);
    setSlideKey(key => key + 1);
  };

  useEffect(() => {
    if (paused) return;

    const timer = window.setTimeout(() => {
      setActiveSlide(current => (current + 1) % slides.length);
      setSlideKey(key => key + 1);
    }, SLIDE_TIME);

    return () => window.clearTimeout(timer);
  }, [paused, slideKey]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const elements = root.querySelectorAll<HTMLElement>(".kd-reveal");

    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      elements.forEach(element => element.classList.add("kd-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("kd-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    elements.forEach(element => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const zones = Array.from(root.querySelectorAll<HTMLElement>('.kd-premium-zone'));
    if (!zones.length) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || !('IntersectionObserver' in window)) {
      zones.forEach(zone => zone.classList.add('kd-premium-visible'));
      return;
    }
    // Apply pending state only to sections below the viewport to avoid flashes.
    zones.forEach(zone => {
      if (zone.getBoundingClientRect().top > window.innerHeight - 40) {
        zone.classList.add('kd-premium-pending');
      } else {
        zone.classList.add('kd-premium-visible');
      }
    });
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('kd-premium-pending');
          entry.target.classList.add('kd-premium-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {threshold:0.06, rootMargin:'0px 0px -25px 0px'});
    zones.forEach(zone => observer.observe(zone));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let frame = 0;

    const updateScroll = () => {
      frame = 0;

      const scrollTop = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress =
        maxScroll > 0 ? Math.min(1, scrollTop / maxScroll) : 0;

      rootRef.current?.style.setProperty(
        "--kd-progress",
        String(progress)
      );

      setShowTop(previous => {
        const next = scrollTop > 600;
        return previous === next ? previous : next;
      });
    };

    const onScroll = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(updateScroll);
      }
    };

    updateScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);

      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  // Style the actual rendered care panels, regardless of heading tag.
  useEffect(() => {
    const zone = rootRef.current?.querySelector<HTMLElement>(".kd-premium-journey");
    if (!zone) return;

    const normalize = (value: string | null) =>
      (value ?? "").replace(/\\s+/g, " ").trim().toLowerCase();

    const themes = [
      { title: "before your visit", unique: "arrive 10 minutes early", other: "post-treatment care", cls: "kd-care-before" },
      { title: "post-treatment care", unique: "follow post-care instructions strictly", other: "before your visit", cls: "kd-care-after" },
    ];

    const apply = () => {
      const nodes = Array.from(zone.querySelectorAll<HTMLElement>("*"));
      for (const theme of themes) {
        // The TreatmentJourney component may render titles as div/strong instead of h2/h3.
        const heading = nodes.find((el) => {
          const own = normalize(el.textContent);
          return own === theme.title && !Array.from(el.children).some(
            child => normalize(child.textContent) === theme.title
          );
        });
        if (!heading) continue;

        let panel: HTMLElement | null = heading;
        while (panel && panel !== zone) {
          const content = normalize(panel.textContent);
          if (content.includes(theme.unique) && !content.includes(theme.other)) break;
          panel = panel.parentElement;
        }
        if (panel && panel !== zone) {
          panel.classList.add("kd-care-highlight", theme.cls);
        }
      }
    };

    apply();
    const observer = new MutationObserver(apply);
    observer.observe(zone, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  const stagger = (index: number): CSSProperties =>
    ({
      "--kd-delay": `${Math.min(index % 4, 3) * 110}ms`,
    } as CSSProperties);

  return (
    <div className="kd-home" ref={rootRef}>
      <style>{styles}</style>

      {/* SCROLL PROGRESS */}

      <div className="kd-scroll-progress" aria-hidden="true">
        <span />
      </div>

      {/* HERO SLIDER */}

      <section
        className="kd-hero"
        aria-label="Keerti Cure Dental highlights"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={event => {
          if (
            !event.currentTarget.contains(
              event.relatedTarget as Node | null
            )
          ) {
            setPaused(false);
          }
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`kd-slide ${activeSlide === index ? "kd-active" : ""}`}
            aria-hidden={activeSlide !== index}
            inert={activeSlide !== index}
          >
            <div className="kd-slide-image">
              <img
                src={slide.image}
                alt=""
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>

            <div className="kd-slide-overlay" />
            <div className="kd-hero-orbit" />

            <div className="kd-container kd-hero-inner">
              <span className="kd-hero-eyebrow">{slide.eyebrow}</span>

              <h1>
                {slide.heading}
                <span>{slide.second}</span>
                <em>{slide.accent}</em>
              </h1>

              <p className="kd-hero-description">
                {slide.description}
              </p>

              <div className="kd-hero-actions">
                <button
                  type="button"
                  className="kd-btn kd-btn-primary"
                  onClick={() => go(slide.primaryPath)}
                >
                  {slide.primary}
                  <ArrowUpRight size={19} />
                </button>

                <button
                  type="button"
                  className="kd-btn kd-btn-outline"
                  onClick={() => go(slide.secondaryPath)}
                >
                  {slide.secondary}
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}

        <div className="kd-slide-count">
          {slides[activeSlide].id} / {String(slides.length).padStart(2, "0")}
        </div>

        <div className="kd-container kd-hero-controls">
          <div className="kd-hero-dots">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                className={`kd-dot ${activeSlide === index ? "kd-active" : ""}`}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={activeSlide === index ? "true" : undefined}
                onClick={() => changeSlide(index)}
              />
            ))}
          </div>

          <div className="kd-hero-arrows">
            <button
              type="button"
              className="kd-arrow"
              aria-label="Previous slide"
              onClick={() => changeSlide(activeSlide - 1)}
            >
              <ChevronLeft size={21} />
            </button>

            <button
              type="button"
              className="kd-arrow"
              aria-label="Next slide"
              onClick={() => changeSlide(activeSlide + 1)}
            >
              <ChevronRight size={21} />
            </button>
          </div>
        </div>

        <div className="kd-scroll-cue">
          <span>SCROLL TO EXPLORE</span>
          <MoveDown size={18} />
        </div>

        {!paused && (
          <div className="kd-slide-progress">
            <span key={slideKey} />
          </div>
        )}
      </section>

      {/* TRUST STRIP */}

      <section className="kd-trust-strip">
        <div className="kd-container kd-trust-grid">
          {[
            {
              icon: HeartPulse,
              title: "Compassionate Care",
              text: "Your comfort matters",
            },
            {
              icon: ShieldCheck,
              title: "Personalised Guidance",
              text: "Care designed around you",
            },
            {
              icon: CalendarDays,
              title: "Easy Appointment Requests",
              text: "Start your journey today",
            },
          ].map(({ icon: Icon, title, text }) => (
            <div className="kd-trust-item" key={title}>
              <div className="kd-trust-icon">
                <Icon size={25} />
              </div>
              <div>
                <strong>{title}</strong>
                <small>{text}</small>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}

      <section className="kd-section">
        <div className="kd-container kd-about-grid">
          <div className="kd-about-visual kd-reveal kd-from-left">
            <div className="kd-about-main">
              <img
                src={careImage}
                alt="Dental consultation"
                loading="lazy"
              />
            </div>

            <div className="kd-about-small">
              <img
                src="/images/slides/3.jpg.jpeg"
                alt="Gum health awareness"
                loading="lazy"
              />
            </div>

            <div className="kd-about-badge">
              <HeartPulse size={28} />
              <span>YOUR SMILE MATTERS</span>
            </div>
          </div>

          <div className="kd-about-content kd-reveal kd-from-right">
            <span className="kd-eyebrow">
              WELCOME TO KEERTI CURE DENTAL
            </span>

            <h2 className="kd-heading">
              More than dentistry.
              <em> A place to feel cared for.</em>
            </h2>

            <p>
              At Keerti Cure Dental, we believe every great
              dental experience begins with a conversation.
              Your comfort, questions and individual concerns matter.
            </p>

            <p>
              Our approach focuses on personalised consultations,
              clear treatment explanations and thoughtful guidance
              to help you feel confident about your oral health.
            </p>

            <div className="kd-check-grid">
              {[
                "Patient-centred consultations",
                "Personalised care planning",
                "Clear treatment guidance",
                "Follow-up care support",
              ].map(item => (
                <div className="kd-check-item" key={item}>
                  <CheckCircle2 size={18} />
                  {item}
                </div>
              ))}
            </div>

            <button
              type="button"
              className="kd-btn kd-btn-primary"
              onClick={() => go("/about-us")}
            >
              Discover Our Approach
              <ArrowUpRight size={18} />
            </button>
          </div>
        </div>
      </section>

      <div className="kd-premium-zone kd-premium-facilities"><ClinicFacilities /></div>

      {/* TREATMENTS */}

      <section className="kd-section kd-treatments">
        <div className="kd-container">
          <div className="kd-section-top kd-reveal">
            <div>
              <span className="kd-eyebrow">
                EXPLORE OUR TREATMENTS
              </span>

              <h2 className="kd-heading">
                Thoughtful care for
                <em> every smile.</em>
              </h2>

              <p>
                Explore dental treatments and consultations
                focused on your oral health, comfort and confidence.
              </p>
            </div>

            <button
              type="button"
              className="kd-link"
              onClick={() => go("/treatments")}
            >
              VIEW ALL TREATMENTS
              <ArrowUpRight size={19} />
            </button>
          </div>

          <div className="kd-treatment-grid">
            {treatments.slice(0, 6).map((treatment, index) => (
              <button
                type="button"
                className="kd-treatment-card kd-reveal"
                style={stagger(index)}
                key={treatment.slug}
                onClick={() => go(`/treatments/${treatment.slug}`)}
                onMouseMove={handleCardMove}
                onMouseLeave={handleCardLeave}
                aria-label={`Explore ${treatment.title}`}
              >
                <div className={`kd-treatment-image${!treatmentImages[index] ? " kd-treatment-image-empty" : ""}`}>
                  {treatmentImages[index] && (
                    <img
                      src={treatmentImages[index]}
                      alt=""
                      loading="lazy"
                    />
                  )}
                </div>

                <div className="kd-card-glow" />

                <span className="kd-treatment-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="kd-treatment-content">
                  <h3>{treatment.title}</h3>

                  <p>
                    Discover personalised dental treatment
                    options and thoughtful care guidance.
                  </p>

                  <div className="kd-treatment-bottom">
                    <span>EXPLORE TREATMENT</span>
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="kd-premium-zone kd-premium-journey"><TreatmentJourney /></div>

      {/* WHY CHOOSE US */}

      <section className="kd-section kd-values">
        <div className="kd-container">
          <div className="kd-section-top kd-reveal">
            <div>
              <span className="kd-eyebrow">
                THE KEERTI CURE DIFFERENCE
              </span>

              <h2 className="kd-heading">
                Dental care with
                <em> a human touch.</em>
              </h2>
            </div>

            <p>
              A thoughtful patient experience built around
              understanding, comfort and clear communication.
            </p>
          </div>

          <div className="kd-values-grid">
            {features.map(
              ({ icon: Icon, number, title, description }, index) => (
                <article
                  className="kd-value-card kd-reveal"
                  style={stagger(index)}
                  key={number}
                >
                  <span className="kd-value-number">{number}</span>

                  <div className="kd-value-icon">
                    <Icon size={30} strokeWidth={1.7} />
                  </div>

                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              )
            )}
          </div>
        </div>
      </section>

      <div className="kd-premium-zone kd-premium-why"><WhyChooseHighlights /></div>

      <div className="kd-premium-zone kd-premium-hours"><ClinicHours /></div>

      {/* TESTIMONIALS */}

      <section className="kd-section kd-testimonials">
        <div className="kd-container">
          <div className="kd-section-top kd-reveal">
            <div>
              <span className="kd-eyebrow">
                WHAT OUR PATIENTS SAY
              </span>

              <h2 className="kd-heading">
                Real smiles.
                <em> Real stories.</em>
              </h2>

              <p>
                Read what our patients share about their experience
                at Keerti Cure Dental with Dr. Sandeep Kokkeragadda.
              </p>
            </div>
          </div>
        </div>

        <div className="kd-testimonial-track-wrap">
          <div className="kd-testimonial-track">
            {[...testimonials, ...testimonials].map((review, index) => (
              <article
                className="kd-testimonial-card"
                key={`${review.name}-${index}`}
              >
                <div className="kd-testimonial-head">
                  <div className="kd-testimonial-quote">
                    <Quote size={22} />
                  </div>

                  <div className="kd-testimonial-stars">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                    ))}
                  </div>
                </div>

                <p className="kd-testimonial-text">
                  {review.text}
                </p>

                <div className="kd-testimonial-author">
                  <div className="kd-avatar">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <strong>{review.name}</strong>
                    <small>Verified Patient</small>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* APPOINTMENT */}

      <section className="kd-appointment">
        <div className="kd-container kd-appointment-grid">
          <div className="kd-appointment-copy kd-reveal kd-from-left">
            <span className="kd-eyebrow">
              BOOK YOUR CONSULTATION
            </span>

            <h2>
              Your next dental visit starts with a simple conversation.
            </h2>

            <p>
              Whether you have a dental concern or want a routine
              consultation, request your appointment and our team
              will contact you to confirm availability.
            </p>
          </div>

          <div className="kd-appointment-form kd-reveal kd-from-right">
            <AppointmentForm compact />
          </div>
        </div>
      </section>

      {/* CARE JOURNEY */}

      <section className="kd-section">
        <div className="kd-container">
          <div className="kd-centered kd-reveal">
            <span className="kd-eyebrow">
              YOUR DENTAL CARE JOURNEY
            </span>

            <h2 className="kd-heading">
              Simple steps towards
              <em> a healthier smile.</em>
            </h2>

            <p>
              A clear and comfortable journey from your first
              consultation to your personalised care guidance.
            </p>
          </div>

          <div className="kd-journey-grid">
            {steps.map(
              ({ number, icon: Icon, title, description }, index) => (
                <div
                  className="kd-step kd-reveal"
                  style={stagger(index)}
                  key={number}
                >
                  <div className="kd-step-icon">
                    <Icon size={30} strokeWidth={1.7} />
                  </div>

                  <span className="kd-step-number">
                    STEP {number}
                  </span>

                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* BLOGS */}

      <section className="kd-section kd-blogs">
        <div className="kd-container">
          <div className="kd-section-top kd-reveal">
            <div>
              <span className="kd-eyebrow">
                DENTAL HEALTH JOURNAL
              </span>

              <h2 className="kd-heading">
                Small habits.
                <em> Healthier smiles.</em>
              </h2>

              <p>
                Explore useful dental care tips,
                oral health education and patient-friendly information.
              </p>
            </div>

            <button
              type="button"
              className="kd-link"
              onClick={() => go("/blogs")}
            >
              VIEW ALL ARTICLES
              <ArrowUpRight size={19} />
            </button>
          </div>

          <div className="kd-blog-grid">
            {blogs.map((blog, index) => (
              <article
                className="kd-blog-card kd-reveal"
                style={stagger(index)}
                key={blog.title}
              >
                <div className="kd-blog-image">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    loading="lazy"
                  />

                  <span className="kd-blog-category">
                    {blog.category}
                  </span>
                </div>

                <div className="kd-blog-body">
                  <div className="kd-blog-meta">
                    <Clock3 size={14} />
                    {blog.time}
                  </div>

                  <h3>{blog.title}</h3>

                  <button
                    type="button"
                    className="kd-blog-link"
                    onClick={() => go("/blogs")}
                  >
                    READ ARTICLE
                    <ArrowUpRight size={19} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}

      <section className="kd-section">
        <div className="kd-container kd-faq-grid">
          <div className="kd-faq-intro kd-reveal kd-from-left">
            <span className="kd-eyebrow">
              FREQUENTLY ASKED QUESTIONS
            </span>

            <h2 className="kd-heading">
              Your questions.
              <em> Answered clearly.</em>
            </h2>

            <p>
              Have questions about dental appointments,
              consultations or oral health?
              Explore some helpful answers.
            </p>

            <button
              type="button"
              className="kd-link"
              onClick={() => go("/contact-us")}
            >
              CONTACT OUR TEAM
              <ArrowUpRight size={18} />
            </button>
          </div>

          <div className="kd-faq-list kd-reveal kd-from-right">
            {faqs.map((faq, index) => (
              <div className="kd-faq-item" key={faq.question}>
                <button
                  type="button"
                  className="kd-faq-question"
                  aria-expanded={openFaq === index}
                  aria-controls={`kd-faq-${index}`}
                  onClick={() =>
                    setOpenFaq(openFaq === index ? null : index)
                  }
                >
                  <span>{faq.question}</span>

                  {openFaq === index ? (
                    <Minus size={20} />
                  ) : (
                    <Plus size={20} />
                  )}
                </button>

                {openFaq === index && (
                  <div
                    className="kd-faq-answer"
                    id={`kd-faq-${index}`}
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL VIDEOS - INSTAGRAM + YOUTUBE SHORTS */}
      <section className="kd-social-videos kd-section" aria-labelledby="kd-social-videos-heading">
        <div className="kd-container">
          <div className="kd-social-videos-header kd-reveal">
            <span className="kd-eyebrow">FOLLOW OUR SMILE STORIES</span>
            <h2 id="kd-social-videos-heading" className="kd-heading">
              Watch Our <em>Latest Videos.</em>
            </h2>
            <p>Discover Keerti Cure Dental through our Instagram Reel and YouTube Shorts.</p>
          </div>
          <div className="kd-social-videos-grid">
            <article className="kd-social-video-card kd-reveal">
              <div className="kd-social-video-frame">
                <iframe
                  src="https://www.instagram.com/reel/DVtkZAegTqx/embed/"
                  title="Keerti Cure Dental Instagram Reel"
                  loading="lazy"
                  allow="encrypted-media; picture-in-picture"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
              <div className="kd-social-video-meta">
                <strong>Instagram Reel</strong>
                <a href="https://www.instagram.com/reel/DVtkZAegTqx/" target="_blank" rel="noopener noreferrer">
                  View on Instagram <ArrowUpRight size={16} />
                </a>
              </div>
            </article>
            <article className="kd-social-video-card kd-reveal">
              <div className="kd-social-video-frame">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/5vTPyeF66Lg?playsinline=1"
                  title="Keerti Cure Dental YouTube Short 1"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
              <div className="kd-social-video-meta">
                <strong>YouTube Short 01</strong>
                <a href="https://youtube.com/shorts/5vTPyeF66Lg" target="_blank" rel="noopener noreferrer">
                  Watch on YouTube <ArrowUpRight size={16} />
                </a>
              </div>
            </article>
            <article className="kd-social-video-card kd-reveal">
              <div className="kd-social-video-frame">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/hqzkcVczrhY?playsinline=1"
                  title="Keerti Cure Dental YouTube Short 2"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
              <div className="kd-social-video-meta">
                <strong>YouTube Short 02</strong>
                <a href="https://youtube.com/shorts/hqzkcVczrhY" target="_blank" rel="noopener noreferrer">
                  Watch on YouTube <ArrowUpRight size={16} />
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}

      <section className="kd-final">
        <div className="kd-final-content kd-reveal kd-zoom-in">
          <h2>
            Your healthier, happier smile starts here.
          </h2>

          <p>
            Take the first step towards personalised
            dental care with Keerti Cure Dental.
          </p>

          <button
            type="button"
            className="kd-btn kd-btn-white"
            onClick={() => go("/book-appointment")}
          >
            Book Your Appointment
            <ArrowUpRight size={19} />
          </button>
        </div>
      </section>

      {/* BACK TO TOP */}

      <button
        type="button"
        className={`kd-back-top ${showTop ? "kd-show" : ""}`}
        aria-label="Back to top"
        tabIndex={showTop ? 0 : -1}
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: window.matchMedia(
              "(prefers-reduced-motion: reduce)"
            ).matches
              ? "auto"
              : "smooth",
          })
        }
      >
        <ArrowUp size={21} />
      </button>
    </div>
  );
}

export default Home;