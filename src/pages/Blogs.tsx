
import { useEffect, useMemo, useRef, useState } from "react";
import type { CSSProperties } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  Clock3,
  HeartPulse,
  Search,
  ShieldCheck,
  Sparkles,
  Stethoscope,
} from "lucide-react";
import type { Go } from "@/lib/constants";
import { photoAt } from "@/lib/sitePhotos";

/* =====================================================
   KEERTI CURE DENTAL — PREMIUM BLOGS & BLOG DETAILS
   Replace: src/pages/Blogs.tsx

   Features:
   - Manrope / DM Sans fonts
   - Featured article
   - Search + category filters
   - Hover animations and image zoom
   - Scroll reveals
   - Six different dental articles
   - Reading progress
   - Table of contents
   - FAQs and related posts
   - Mobile responsive
===================================================== */

type ArticleSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

type FAQ = {
  question: string;
  answer: string;
};

type Article = {
  slug: string;
  title: string;
  category: string;
  minutes: number;
  excerpt: string;
  image: string;
  lead: string;
  sections: ArticleSection[];
  faqs: FAQ[];
};

const articles: Article[] = [
  {
    slug: "why-regular-dental-checkups-matter",
    title: "Why Regular Dental Checkups Matter",
    category: "Preventive Care",
    minutes: 5,
    excerpt:
      "Understand why routine dental visits are important for healthier teeth and gums.",
    image: photoAt(10),
    lead:
      "A dental checkup is more than a quick look at your teeth. It gives you an opportunity to understand your oral health, discuss changes and receive personalised advice.",
    sections: [
      {
        heading: "What happens during a dental checkup?",
        paragraphs: [
          "During a checkup, your dentist may examine your teeth, gums, bite and other parts of your mouth. They may ask about sensitivity, bleeding, pain and your daily oral-care habits.",
          "Depending on your needs, your dentist may recommend X-rays or professional cleaning. Not every patient needs the same tests at every visit.",
        ],
        bullets: [
          "Examination of teeth and gums",
          "Review of existing fillings and restorations",
          "Discussion of symptoms and risk factors",
          "Personalised oral hygiene advice",
        ],
      },
      {
        heading: "Why preventive dental care matters",
        paragraphs: [
          "Tooth decay and gum problems can sometimes develop without noticeable symptoms. Routine assessment may help identify concerns earlier.",
          "Checkups also provide an opportunity to improve brushing techniques, discuss fluoride and learn how everyday habits affect oral health.",
        ],
      },
      {
        heading: "How often should you visit?",
        paragraphs: [
          "There is no single checkup interval that suits everyone. Your dentist can recommend a schedule based on your oral health, risk factors and treatment needs.",
          "If you notice persistent pain, swelling or bleeding, arrange an assessment rather than waiting for your next routine appointment.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do I need cleaning at every checkup?",
        answer:
          "Not necessarily. Your dentist will assess whether professional cleaning is appropriate.",
      },
      {
        question: "Are dental X-rays always necessary?",
        answer:
          "No. X-rays are recommended according to your symptoms, examination findings and individual risk.",
      },
      {
        question: "Should I visit even when nothing hurts?",
        answer:
          "Yes. Preventive checkups can help identify changes before they cause noticeable symptoms.",
      },
    ],
  },
  {
    slug: "understanding-root-canal-treatment",
    title: "Understanding Root Canal Treatment",
    category: "Treatments",
    minutes: 7,
    excerpt:
      "Learn why root canal treatment may be recommended and what the procedure involves.",
    image: "/images/slides/02.jpg.jpeg",
    lead:
      "Root canal treatment is designed to manage infection or inflammation inside a tooth and, when possible, preserve the natural tooth.",
    sections: [
      {
        heading: "Why might a root canal be needed?",
        paragraphs: [
          "Inside each tooth is soft tissue called the pulp, containing nerves and blood vessels. Deep decay, cracks or injury can cause inflammation or infection.",
          "Symptoms can include lingering sensitivity, pain when biting or swelling. Some affected teeth may cause few symptoms, so a dental examination is essential.",
        ],
      },
      {
        heading: "How does the procedure work?",
        paragraphs: [
          "Your dentist usually numbs the area, isolates the tooth and creates an opening to access the root canals.",
          "The canals are cleaned, shaped and disinfected before being filled and sealed. Treatment may take one or more appointments.",
        ],
        bullets: [
          "Clinical assessment and diagnosis",
          "Local anaesthetic and tooth isolation",
          "Cleaning and disinfecting the canals",
          "Sealing and restoring the tooth",
        ],
      },
      {
        heading: "What happens after treatment?",
        paragraphs: [
          "Some tenderness after treatment can occur. Follow your dentist's instructions and contact the clinic if pain or swelling worsens.",
          "The tooth may need a final restoration, such as a filling or crown. Continue regular oral hygiene and dental reviews.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does every toothache need a root canal?",
        answer:
          "No. Tooth pain has several possible causes. A dental examination is needed to determine appropriate care.",
      },
      {
        question: "Will I need a dental crown?",
        answer:
          "Some teeth may benefit from a crown. Your dentist will advise based on the remaining tooth structure.",
      },
      {
        question: "Can a treated tooth become painful again?",
        answer:
          "Occasionally. New decay, cracks or persistent infection may require further assessment.",
      },
    ],
  },
  {
    slug: "everyday-habits-for-healthier-teeth",
    title: "Everyday Habits for Healthier Teeth",
    category: "Oral Hygiene",
    minutes: 5,
    excerpt:
      "Discover practical brushing, cleaning and nutrition habits for everyday oral care.",
    image: photoAt(12),
    lead:
      "Healthy teeth are supported by consistent daily habits. Brushing, cleaning between teeth and mindful food choices can all contribute to better oral health.",
    sections: [
      {
        heading: "Brush with fluoride toothpaste",
        paragraphs: [
          "Brush twice a day for around two minutes using a soft-bristled toothbrush and fluoride toothpaste.",
          "Clean all tooth surfaces gently, including near the gumline. After brushing, spit out excess toothpaste rather than rinsing immediately with lots of water.",
        ],
      },
      {
        heading: "Clean between your teeth",
        paragraphs: [
          "A toothbrush cannot reach every space between teeth. Floss or interdental brushes can help remove plaque from these areas.",
          "Ask your dentist which cleaning tool and technique best suits your teeth and gums.",
        ],
        bullets: [
          "Brush twice daily",
          "Clean between teeth regularly",
          "Replace worn toothbrushes",
          "Discuss bleeding gums with your dentist",
        ],
      },
      {
        heading: "Be mindful of sugary foods and drinks",
        paragraphs: [
          "Frequent sugary snacks and drinks can increase the risk of tooth decay. Reducing how often you consume them may help.",
          "Water is a good everyday drink. If you notice sensitivity, persistent bad breath or bleeding gums, arrange a dental assessment.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is brushing harder better?",
        answer:
          "No. Excessive pressure can irritate gums and wear tooth surfaces. Use gentle pressure.",
      },
      {
        question: "Should I floss every day?",
        answer:
          "Regular cleaning between teeth is important. Your dentist can recommend the best approach for you.",
      },
      {
        question: "Does mouthwash replace brushing?",
        answer:
          "No. Mouthwash does not replace brushing with fluoride toothpaste and interdental cleaning.",
      },
    ],
  },
  {
    slug: "questions-to-ask-about-dental-implants",
    title: "Questions to Ask About Dental Implants",
    category: "Treatments",
    minutes: 7,
    excerpt:
      "Considering dental implants? Learn about suitability, alternatives and treatment planning.",
    image: photoAt(0),
    lead:
      "Dental implants are one possible option for replacing missing teeth. A consultation should help you understand suitability, treatment stages, risks and alternatives.",
    sections: [
      {
        heading: "Am I suitable for dental implants?",
        paragraphs: [
          "Suitability depends on factors such as gum health, available bone, general health, medications and smoking history.",
          "Your dentist may recommend an examination and imaging to assess the area before discussing treatment options.",
        ],
      },
      {
        heading: "What are the alternatives?",
        paragraphs: [
          "Depending on your circumstances, alternatives may include a dental bridge, removable denture or leaving the space under observation.",
          "Each option has different considerations for comfort, cleaning, cost and long-term maintenance.",
        ],
      },
      {
        heading: "What should I ask before treatment?",
        paragraphs: [
          "Implant treatment can involve planning, placement, healing and fitting the final replacement tooth. The timeline varies between patients.",
          "Ask for an explanation of expected appointments, possible complications, costs and maintenance requirements.",
        ],
        bullets: [
          "What tests or imaging will I need?",
          "Are additional procedures necessary?",
          "What are the potential risks?",
          "What does the cost estimate include?",
          "How should I maintain the implant?",
        ],
      },
    ],
    faqs: [
      {
        question: "Are implants suitable for everyone?",
        answer:
          "No. Suitability must be assessed individually based on oral and general health.",
      },
      {
        question: "Will I receive a tooth immediately?",
        answer:
          "Sometimes immediate restoration is possible, but many cases require healing first.",
      },
      {
        question: "Do dental implants need cleaning?",
        answer:
          "Yes. Implant-supported teeth require daily cleaning and regular professional maintenance.",
      },
    ],
  },
  {
    slug: "braces-and-aligners-understanding-the-options",
    title: "Braces and Aligners: Understanding the Options",
    category: "Smile Alignment",
    minutes: 6,
    excerpt:
      "Compare traditional braces and clear aligners to understand which questions to ask.",
    image: "/images/slides/5.jpg.jpeg",
    lead:
      "Braces and clear aligners can both move teeth into improved positions. The most appropriate option depends on your bite, oral health and treatment goals.",
    sections: [
      {
        heading: "How do traditional braces work?",
        paragraphs: [
          "Fixed braces use brackets and wires to apply controlled forces to teeth. They can address a wide range of alignment and bite concerns.",
          "Because braces remain attached, they work continuously, but cleaning around brackets requires additional attention.",
        ],
      },
      {
        heading: "How do clear aligners work?",
        paragraphs: [
          "Clear aligners use a series of removable trays to gradually move teeth. They may be less noticeable than fixed braces.",
          "Aligners generally need to be worn for most of the day as directed. They are not suitable for every orthodontic case.",
        ],
      },
      {
        heading: "Which option should you choose?",
        paragraphs: [
          "Your dentist or orthodontist will assess tooth positions, bite concerns, gum health and the complexity of movement required.",
          "Discuss expected treatment duration, comfort, hygiene, costs and follow-up appointments before deciding.",
        ],
        bullets: [
          "Alignment and bite requirements",
          "Treatment complexity",
          "Daily wear commitment",
          "Oral hygiene preferences",
          "Retainer requirements after treatment",
        ],
      },
    ],
    faqs: [
      {
        question: "Are aligners always faster than braces?",
        answer:
          "No. Treatment duration depends on the individual case and required tooth movements.",
      },
      {
        question: "Can adults have orthodontic treatment?",
        answer:
          "Yes. Adults may be suitable candidates after assessment of their teeth, gums and bite.",
      },
      {
        question: "Will I need retainers afterward?",
        answer:
          "Most patients need retainers after orthodontic treatment to help maintain tooth positions.",
      },
    ],
  },
  {
    slug: "when-should-you-visit-a-dentist",
    title: "When Should You Visit a Dentist?",
    category: "Preventive Care",
    minutes: 5,
    excerpt:
      "Know which oral health changes deserve attention and when urgent care may be needed.",
    image: photoAt(2),
    lead:
      "Not every dental problem causes severe pain. Understanding the warning signs can help you decide when to arrange a dental assessment.",
    sections: [
      {
        heading: "Signs that deserve a dental appointment",
        paragraphs: [
          "Persistent sensitivity, bleeding gums, bad breath that does not improve, chipped teeth or discomfort while chewing should be discussed with a dentist.",
          "A mouth ulcer or patch that does not heal, a new lump or unexplained changes in your mouth should also be evaluated.",
        ],
        bullets: [
          "Recurring toothache",
          "Gum swelling or bleeding",
          "Broken or loose teeth",
          "Persistent mouth sores",
          "Changes in bite or jaw comfort",
        ],
      },
      {
        heading: "When is dental care urgent?",
        paragraphs: [
          "Severe tooth pain, significant swelling, dental trauma or uncontrolled bleeding requires prompt professional advice.",
          "A knocked-out permanent tooth needs immediate dental attention. If swelling affects breathing or swallowing, seek emergency medical care immediately.",
        ],
      },
      {
        heading: "Should you visit without symptoms?",
        paragraphs: [
          "Yes. Some dental conditions develop gradually without obvious symptoms. Your dentist can recommend an appropriate review interval.",
          "Before your appointment, write down symptoms, when they began and any questions you want to ask.",
        ],
      },
    ],
    faqs: [
      {
        question: "Are bleeding gums normal?",
        answer:
          "Repeated bleeding can be a sign of inflammation and should be assessed.",
      },
      {
        question: "Can tooth pain disappear even if a problem remains?",
        answer:
          "Yes. Reduced pain does not always mean the underlying cause has resolved.",
      },
      {
        question: "What if swelling affects my breathing?",
        answer:
          "Seek emergency medical care immediately.",
      },
    ],
  },
];

const categories = [
  "All Articles",
  "Preventive Care",
  "Treatments",
  "Oral Hygiene",
  "Smile Alignment",
];

/* =====================================================
   COMPLETE CSS
===================================================== */

const styles = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Manrope:wght@400;500;600;700;800&display=swap');

.kbj {
  --teal:#087f83;
  --dark:#052d37;
  --deep:#031e27;
  --mint:#b9f1df;
  --soft:#f0faf6;
  --line:#dfebe7;
  --muted:#61777c;
  --ease:cubic-bezier(.22,1,.36,1);
  color:var(--dark);
  background:#fff;
  font-family:"DM Sans",sans-serif;
  overflow:clip;
  -webkit-font-smoothing:antialiased;
}

.kbj *,
.kbj *::before,
.kbj *::after {
  box-sizing:border-box;
}

.kbj h1,
.kbj h2,
.kbj h3,
.kbj h4 {
  font-family:"Manrope",sans-serif;
  font-weight:800;
  letter-spacing:-.05em;
  line-height:1.17;
}

.kbj p {
  color:var(--muted);
  line-height:1.85;
}

.kbj img {
  display:block;
  width:100%;
  height:100%;
  object-fit:cover;
}

.kbj button,
.kbj input {
  font-family:inherit;
}

.kbj button {
  cursor:pointer;
}

.kbj-wrap {
  width:min(1220px,calc(100% - 48px));
  margin:auto;
}

.kbj-section {
  padding:100px 0;
}

.kbj-eyebrow {
  display:inline-flex;
  align-items:center;
  gap:11px;
  color:var(--teal);
  font-size:11px;
  font-weight:800;
  letter-spacing:2px;
  text-transform:uppercase;
}

.kbj-eyebrow::before {
  content:"";
  width:28px;
  height:2px;
  background:currentColor;
}

.kbj-title {
  margin:19px 0 25px;
  font-size:clamp(34px,4.6vw,61px);
}

.kbj-title em {
  color:var(--teal);
  font-style:normal;
}

.kbj-button {
  display:inline-flex;
  align-items:center;
  justify-content:center;
  gap:12px;
  min-height:53px;
  padding:14px 23px;
  border:1px solid var(--teal);
  border-radius:9px;
  background:var(--teal);
  color:white;
  font-size:12px;
  font-weight:800;
  transition:
    transform .35s var(--ease),
    box-shadow .35s,
    background .35s;
}

.kbj-button:hover {
  transform:translateY(-5px);
  background:#056369;
  box-shadow:0 16px 35px #087f8335;
}

.kbj-button svg,
.kbj-text-link svg {
  transition:transform .3s;
}

.kbj-button:hover svg,
.kbj-text-link:hover svg {
  transform:translate(5px,-2px);
}

.kbj-text-link {
  display:inline-flex;
  align-items:center;
  gap:9px;
  padding:0;
  border:0;
  background:transparent;
  color:var(--teal);
  font-size:12px;
  font-weight:800;
}

.kbj-text-link:hover {
  text-decoration:underline;
}

/* ======================================
   BLOGS HERO
====================================== */

.kbj-hero {
  position:relative;
  overflow:hidden;
  padding:105px 0 155px;
  background:
    radial-gradient(circle at 85% 20%,#0c697055,transparent 40%),
    linear-gradient(130deg,#031e27,#07525b);
  color:white;
}

.kbj-hero::before {
  content:"";
  position:absolute;
  right:-170px;
  top:-200px;
  width:670px;
  height:670px;
  border:1px solid #ffffff25;
  border-radius:50%;
  box-shadow:
    0 0 0 85px #ffffff08,
    0 0 0 170px #ffffff04;
  animation:kbjFloat 8s ease-in-out infinite;
}

.kbj-hero-content {
  position:relative;
  z-index:2;
  max-width:850px;
}

.kbj-hero .kbj-eyebrow {
  color:var(--mint);
}

.kbj-hero h1 {
  margin:24px 0;
  font-size:clamp(48px,6.5vw,86px);
  color:white;
  animation:kbjFadeUp .9s both;
}

.kbj-hero h1 em {
  display:block;
  color:var(--mint);
  font-style:normal;
}

.kbj-hero p {
  max-width:620px;
  color:#d6ebe8;
  font-size:17px;
  animation:kbjFadeUp .9s .15s both;
}

.kbj-hero-points {
  display:flex;
  flex-wrap:wrap;
  gap:24px;
  margin-top:35px;
  color:#d8efea;
  font-size:12px;
  font-weight:800;
}

.kbj-hero-points span {
  display:flex;
  align-items:center;
  gap:9px;
}

/* ======================================
   FEATURED ARTICLE
====================================== */

.kbj-featured {
  position:relative;
  z-index:3;
  display:grid;
  grid-template-columns:1.08fr .92fr;
  min-height:440px;
  margin-top:-90px;
  overflow:hidden;
  border-radius:20px;
  background:white;
  box-shadow:0 30px 75px #082e3525;
  transition:transform .5s var(--ease);
}

.kbj-featured:hover {
  transform:translateY(-8px);
}

.kbj-featured-image {
  min-height:440px;
  overflow:hidden;
}

.kbj-featured-image img {
  transition:transform 1s var(--ease);
}

.kbj-featured:hover img {
  transform:scale(1.09);
}

.kbj-featured-copy {
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:flex-start;
  padding:52px;
}

.kbj-featured-copy h2 {
  margin:20px 0;
  font-size:clamp(29px,3.2vw,45px);
}

.kbj-featured-copy p {
  margin-bottom:27px;
  font-size:14px;
}

.kbj-meta {
  display:flex;
  align-items:center;
  flex-wrap:wrap;
  gap:15px;
  color:#71888a;
  font-size:11px;
  font-weight:800;
}

.kbj-meta span {
  display:inline-flex;
  align-items:center;
  gap:6px;
}

/* ======================================
   FILTERS
====================================== */

.kbj-filters {
  display:flex;
  justify-content:space-between;
  align-items:center;
  flex-wrap:wrap;
  gap:20px;
  margin:36px 0;
}

.kbj-filter-list {
  display:flex;
  flex-wrap:wrap;
  gap:9px;
}

.kbj-filter {
  padding:11px 17px;
  border:1px solid var(--line);
  border-radius:50px;
  background:white;
  color:var(--dark);
  font-size:12px;
  font-weight:800;
  transition:
    background .3s,
    color .3s,
    transform .3s;
}

.kbj-filter:hover,
.kbj-filter.active {
  transform:translateY(-3px);
  border-color:var(--teal);
  background:var(--teal);
  color:white;
}

.kbj-search {
  display:flex;
  align-items:center;
  gap:10px;
  padding:13px 15px;
  border:1px solid var(--line);
  border-radius:10px;
  background:white;
  color:var(--teal);
  transition:border-color .3s,box-shadow .3s;
}

.kbj-search:focus-within {
  border-color:var(--teal);
  box-shadow:0 0 0 4px #087f8315;
}

.kbj-search input {
  width:195px;
  border:0;
  outline:0;
  background:transparent;
  color:var(--dark);
  font-size:13px;
}

/* ======================================
   ARTICLE CARDS
====================================== */

.kbj-grid {
  display:grid;
  grid-template-columns:repeat(3,minmax(0,1fr));
  gap:27px;
}

.kbj-card {
  overflow:hidden;
  border:1px solid var(--line);
  border-radius:17px;
  background:white;
  transition:
    transform .5s var(--ease),
    box-shadow .4s,
    border-color .4s;
}

.kbj-card:hover {
  transform:translateY(-14px);
  border-color:#a9d7ca;
  box-shadow:0 25px 55px #07565a20;
}

.kbj-card-image {
  position:relative;
  height:240px;
  overflow:hidden;
  background:var(--soft);
}

.kbj-card-image img {
  transition:transform .9s var(--ease);
}

.kbj-card:hover .kbj-card-image img {
  transform:scale(1.12);
}

.kbj-category {
  position:absolute;
  left:17px;
  top:17px;
  padding:9px 13px;
  border-radius:30px;
  background:#fffffff0;
  color:var(--teal);
  font-size:10px;
  font-weight:800;
  backdrop-filter:blur(10px);
}

.kbj-card-content {
  padding:27px;
}

.kbj-card-content h3 {
  min-height:75px;
  margin:16px 0;
  font-size:21px;
  transition:color .3s;
}

.kbj-card:hover h3 {
  color:var(--teal);
}

.kbj-card-content > p {
  min-height:90px;
  font-size:13px;
}

.kbj-card-footer {
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:10px;
  padding-top:20px;
  border-top:1px solid var(--line);
}

.kbj-card-footer > span {
  display:flex;
  align-items:center;
  gap:6px;
  color:#839495;
  font-size:11px;
}

.kbj-empty {
  padding:60px 20px;
  border-radius:15px;
  background:var(--soft);
  text-align:center;
}

.kbj-empty svg {
  color:var(--teal);
}

/* ======================================
   BOTTOM CTA
====================================== */

.kbj-cta {
  padding:85px 0;
  background:var(--soft);
}

.kbj-cta-grid {
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:35px;
}

.kbj-cta-grid > div {
  max-width:710px;
}

.kbj-cta-grid p {
  font-size:14px;
}

/* ======================================
   BLOG DETAIL HERO
====================================== */

.kbj-detail-hero {
  padding:75px 0 120px;
  background:
    radial-gradient(circle at 90% 10%,#0d77774a,transparent 35%),
    var(--deep);
  color:white;
}

.kbj-back {
  display:inline-flex;
  align-items:center;
  gap:10px;
  margin-bottom:45px;
  padding:0;
  border:0;
  background:transparent;
  color:var(--mint);
  font-size:12px;
  font-weight:800;
}

.kbj-back:hover {
  text-decoration:underline;
}

.kbj-detail-hero .kbj-eyebrow {
  color:var(--mint);
}

.kbj-detail-hero h1 {
  max-width:980px;
  margin:23px 0;
  color:white;
  font-size:clamp(40px,5.5vw,73px);
}

.kbj-detail-hero p {
  max-width:750px;
  color:#d9ece8;
  font-size:17px;
}

.kbj-detail-hero .kbj-meta {
  margin-top:28px;
  color:#d9ece8;
}

.kbj-detail-banner {
  position:relative;
  z-index:2;
  height:clamp(290px,43vw,520px);
  margin-top:-65px;
  overflow:hidden;
  border-radius:19px;
  box-shadow:0 25px 55px #082e3525;
}

.kbj-detail-banner img {
  transition:transform 1.2s var(--ease);
}

.kbj-detail-banner:hover img {
  transform:scale(1.05);
}

/* ======================================
   ARTICLE CONTENT
====================================== */

.kbj-article-layout {
  display:grid;
  grid-template-columns:minmax(0,1fr) 290px;
  gap:75px;
  align-items:start;
}

.kbj-article-body {
  min-width:0;
}

.kbj-article-lead {
  margin:0 0 40px;
  padding-left:24px;
  border-left:4px solid var(--teal);
  color:var(--dark)!important;
  font-size:20px;
  font-weight:600;
}

.kbj-article-section {
  padding:10px 0 32px;
  margin-bottom:30px;
  border-bottom:1px solid var(--line);
  scroll-margin-top:100px;
}

.kbj-article-section h2 {
  margin:10px 0 20px;
  font-size:clamp(26px,3vw,36px);
}

.kbj-article-section p {
  margin:0 0 17px;
  font-size:15px;
}

.kbj-bullets {
  display:grid;
  gap:14px;
  margin:24px 0;
  padding:0;
  list-style:none;
}

.kbj-bullets li {
  display:flex;
  align-items:flex-start;
  gap:11px;
  color:#425e61;
  font-size:14px;
  line-height:1.7;
}

.kbj-bullets svg {
  flex-shrink:0;
  margin-top:3px;
  color:var(--teal);
}

/* ======================================
   STICKY SIDEBAR
====================================== */

.kbj-sidebar {
  position:sticky;
  top:95px;
  display:grid;
  gap:24px;
}

.kbj-sidebar-box {
  padding:27px;
  border:1px solid var(--line);
  border-radius:15px;
  background:white;
}

.kbj-sidebar-box h3 {
  margin:0 0 20px;
  font-size:18px;
}

.kbj-toc {
  display:grid;
  gap:6px;
}

.kbj-toc button {
  padding:12px 10px;
  border:0;
  border-left:2px solid transparent;
  background:transparent;
  color:#60797b;
  text-align:left;
  font-size:12px;
  font-weight:700;
  transition:
    background .3s,
    border-color .3s,
    color .3s;
}

.kbj-toc button:hover,
.kbj-toc button.active {
  border-left-color:var(--teal);
  background:var(--soft);
  color:var(--teal);
}

.kbj-sidebar-cta {
  padding:28px;
  border-radius:15px;
  background:var(--deep);
  color:white;
}

.kbj-sidebar-cta svg {
  color:var(--mint);
}

.kbj-sidebar-cta h3 {
  color:white;
  font-size:22px;
}

.kbj-sidebar-cta p {
  color:#d3e6e1;
  font-size:13px;
}

/* ======================================
   FAQ ACCORDION
====================================== */

.kbj-faq-area {
  margin-top:55px;
}

.kbj-faq-item {
  border-bottom:1px solid var(--line);
}

.kbj-faq-item > button {
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:20px;
  width:100%;
  padding:23px 0;
  border:0;
  background:transparent;
  color:var(--dark);
  text-align:left;
  font-size:14px;
  font-weight:800;
  transition:color .3s;
}

.kbj-faq-item > button:hover {
  color:var(--teal);
}

.kbj-faq-item > button svg {
  flex-shrink:0;
  transition:transform .35s;
}

.kbj-faq-item > button[aria-expanded="true"] svg {
  transform:rotate(180deg);
}

.kbj-faq-answer {
  padding:0 20px 23px 0;
  animation:kbjFadeUp .35s both;
}

.kbj-faq-answer p {
  margin:0;
  font-size:14px;
}

.kbj-disclaimer {
  margin-top:42px;
  padding:23px;
  border-radius:12px;
  background:var(--soft);
  color:#60797b;
  font-size:12px;
  line-height:1.8;
}

/* ======================================
   READING PROGRESS
====================================== */

.kbj-progress {
  position:fixed;
  z-index:9999;
  top:0;
  left:0;
  height:4px;
  background:var(--teal);
  transition:width .12s linear;
  pointer-events:none;
}

/* ======================================
   RELATED ARTICLES
====================================== */

.kbj-related {
  background:var(--soft);
}

.kbj-related-head {
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:25px;
  margin-bottom:40px;
}

/* ======================================
   SCROLL ANIMATIONS
====================================== */

.kbj-reveal {
  opacity:1;
  transform:none;
}

.kbj-reveal.kbj-pending {
  opacity:0;
  transform:translateY(35px);
  transition:
    opacity .75s ease,
    transform .85s var(--ease);
  transition-delay:var(--delay,0ms);
}

.kbj-reveal.kbj-pending.kbj-visible {
  opacity:1;
  transform:translateY(0);
}

@keyframes kbjFadeUp {
  from {
    opacity:0;
    transform:translateY(35px);
  }
  to {
    opacity:1;
    transform:translateY(0);
  }
}

@keyframes kbjFloat {
  0%,100% {transform:translateY(0)}
  50% {transform:translateY(-20px)}
}

/* ======================================
   RESPONSIVE
====================================== */

@media(max-width:1050px) {
  .kbj-grid {
    grid-template-columns:repeat(2,minmax(0,1fr));
  }

  .kbj-article-layout {
    grid-template-columns:minmax(0,1fr) 250px;
    gap:35px;
  }
}

@media(max-width:768px) {
  .kbj-section {
    padding:70px 0;
  }

  .kbj-featured {
    grid-template-columns:1fr;
  }

  .kbj-featured-image {
    min-height:310px;
    height:310px;
  }

  .kbj-featured-copy {
    padding:32px;
  }

  .kbj-grid {
    grid-template-columns:1fr;
  }

  .kbj-card-image {
    height:270px;
  }

  .kbj-card-content h3,
  .kbj-card-content > p {
    min-height:0;
  }

  .kbj-cta-grid {
    flex-direction:column;
    align-items:flex-start;
  }

  .kbj-article-layout {
    grid-template-columns:1fr;
  }

  .kbj-sidebar {
    position:static;
    grid-row:1;
  }

  .kbj-sidebar-box {
    display:none;
  }

  .kbj-detail-banner {
    height:330px;
  }
}

@media(max-width:520px) {
  .kbj-wrap {
    width:calc(100% - 32px);
  }

  .kbj-hero {
    padding:80px 0 145px;
  }

  .kbj-hero h1 {
    font-size:45px;
  }

  .kbj-detail-hero h1 {
    font-size:39px;
  }

  .kbj-hero-points {
    gap:14px;
  }

  .kbj-card-image {
    height:220px;
  }

  .kbj-featured-image {
    min-height:240px;
    height:240px;
  }

  .kbj-search,
  .kbj-search input {
    width:100%;
  }

  .kbj-related-head {
    align-items:flex-start;
    flex-direction:column;
  }
}

@media(prefers-reduced-motion:reduce) {
  .kbj *,
  .kbj *::before,
  .kbj *::after {
    animation:none!important;
    transition:none!important;
  }

  .kbj-reveal.kbj-pending {
    opacity:1;
    transform:none;
  }
}
`;

/* =====================================================
   SCROLL ANIMATION HOOK
===================================================== */

function useScrollReveal(
  ref: React.RefObject<HTMLDivElement | null>,
  dependency: string = ""
) {
  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const elements =
      root.querySelectorAll<HTMLElement>(".kbj-reveal");

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
            entry.target.classList.add("kbj-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06 }
    );

    elements.forEach((element) => {
      element.classList.add("kbj-pending");
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
      elements.forEach((element) => {
        element.classList.remove("kbj-pending");
        element.classList.remove("kbj-visible");
      });
    };
  }, [ref, dependency]);
}

/* =====================================================
   ARTICLE CARD
===================================================== */

function ArticleCard({
  article,
  go,
  index = 0,
}: {
  article: Article;
  go: Go;
  index?: number;
}) {
  const style = {
    "--delay": `${Math.min(index % 3, 2) * 100}ms`,
  } as CSSProperties;

  return (
    <article className="kbj-card kbj-reveal" style={style}>
      <div className="kbj-card-image">
        <img
          src={article.image}
          alt={article.title}
          loading="lazy"
        />
        <span className="kbj-category">
          {article.category}
        </span>
      </div>

      <div className="kbj-card-content">
        <div className="kbj-meta">
          <span>
            <Clock3 size={14} />
            {article.minutes} min read
          </span>
          <span>Dental Journal</span>
        </div>

        <h3>{article.title}</h3>
        <p>{article.excerpt}</p>

        <div className="kbj-card-footer">
          <button
            className="kbj-text-link"
            onClick={() => go(`/blogs/${article.slug}`)}
          >
            Read Article
            <ArrowRight size={17} />
          </button>

          <span>
            <BookOpen size={15} />
            Dental Care
          </span>
        </div>
      </div>
    </article>
  );
}

/* =====================================================
   BLOGS LISTING PAGE
===================================================== */

export function Blogs({ go }: { go: Go }) {
  const rootRef = useRef<HTMLDivElement>(null);

  const [category, setCategory] =
    useState("All Articles");

  const [query, setQuery] = useState("");

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesCategory =
        category === "All Articles" ||
        article.category === category;

      const searchText = [
        article.title,
        article.category,
        article.excerpt,
      ]
        .join(" ")
        .toLowerCase();

      return (
        matchesCategory &&
        searchText.includes(query.trim().toLowerCase())
      );
    });
  }, [category, query]);

  useScrollReveal(rootRef, `${category}-${query}`);

  const featured = articles[0];

  return (
    <div className="kbj" ref={rootRef}>
      <style>{styles}</style>

      {/* HERO */}

      <section className="kbj-hero">
        <div className="kbj-wrap">
          <div className="kbj-hero-content">
            <span className="kbj-eyebrow">
              THE KEERTI CURE JOURNAL
            </span>

            <h1>
              Better knowledge.
              <em> Healthier smiles.</em>
            </h1>

            <p>
              Explore helpful dental insights,
              treatment explanations and everyday
              oral care tips written to make
              your next dental conversation easier.
            </p>

            <div className="kbj-hero-points">
              <span>
                <ShieldCheck size={18} />
                Patient-Friendly Reading
              </span>

              <span>
                <BookOpen size={18} />
                Dental Education
              </span>

              <span>
                <HeartPulse size={18} />
                Everyday Oral Care
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED ARTICLE */}

      <div className="kbj-wrap">
        <article className="kbj-featured kbj-reveal">
          <div className="kbj-featured-image">
            <img
              src={featured.image}
              alt={featured.title}
            />
          </div>

          <div className="kbj-featured-copy">
            <span className="kbj-eyebrow">
              FEATURED ARTICLE
            </span>

            <h2>{featured.title}</h2>

            <p>{featured.excerpt}</p>

            <div className="kbj-meta">
              <span>
                <Clock3 size={15} />
                {featured.minutes} min read
              </span>

              <span>{featured.category}</span>
            </div>

            <div style={{ marginTop: 28 }}>
              <button
                className="kbj-button"
                onClick={() =>
                  go(`/blogs/${featured.slug}`)
                }
              >
                Read Featured Article
                <ArrowUpRight size={18} />
              </button>
            </div>
          </div>
        </article>
      </div>

      {/* ALL ARTICLES */}

      <section className="kbj-section">
        <div className="kbj-wrap">
          <div className="kbj-reveal">
            <span className="kbj-eyebrow">
              EXPLORE OUR ARTICLES
            </span>

            <h2 className="kbj-title">
              A little knowledge goes
              <em> a long way.</em>
            </h2>

            <p>
              Browse dental topics that matter
              to your oral health.
            </p>
          </div>

          <div className="kbj-filters">
            <div className="kbj-filter-list">
              {categories.map((item) => (
                <button
                  key={item}
                  className={`kbj-filter ${
                    category === item ? "active" : ""
                  }`}
                  aria-pressed={category === item}
                  onClick={() => setCategory(item)}
                >
                  {item}
                </button>
              ))}
            </div>

            <label className="kbj-search">
              <Search size={18} />

              <input
                value={query}
                onChange={(event) =>
                  setQuery(event.target.value)
                }
                placeholder="Search dental topics"
                aria-label="Search dental topics"
              />
            </label>
          </div>

          {filteredArticles.length > 0 ? (
            <div className="kbj-grid">
              {filteredArticles.map((article, index) => (
                <ArticleCard
                  key={article.slug}
                  article={article}
                  go={go}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <div className="kbj-empty">
              <Search size={32} />

              <h3>No articles found</h3>

              <p>
                Try another search term or category.
              </p>

              <button
                className="kbj-button"
                onClick={() => {
                  setCategory("All Articles");
                  setQuery("");
                }}
              >
                Show All Articles
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}

      <section className="kbj-cta">
        <div className="kbj-wrap kbj-cta-grid">
          <div>
            <span className="kbj-eyebrow">
              HAVE A DENTAL QUESTION?
            </span>

            <h2 className="kbj-title">
              Let's talk about
              <em> your smile.</em>
            </h2>

            <p>
              Online articles can provide useful
              information, but personalised advice
              starts with a dental consultation.
            </p>
          </div>

          <button
            className="kbj-button"
            onClick={() => go("/contact-us")}
          >
            Contact Our Clinic
            <ArrowUpRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
}

/* =====================================================
   INDIVIDUAL BLOG DETAIL PAGE
===================================================== */

export function BlogDetail({
  slug,
  go,
}: {
  slug: string;
  go: Go;
}) {
  const rootRef = useRef<HTMLDivElement>(null);

  const [openFaq, setOpenFaq] =
    useState<number | null>(0);

  const [progress, setProgress] = useState(0);

  const [activeSection, setActiveSection] =
    useState(0);

  const article = articles.find(
    (item) => item.slug === slug
  );

  useScrollReveal(rootRef, slug);

  useEffect(() => {
    const updateProgress = () => {
      const scrollable =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const percentage =
        scrollable > 0
          ? (window.scrollY / scrollable) * 100
          : 0;

      setProgress(
        Math.min(100, Math.max(0, percentage))
      );
    };

    updateProgress();

    window.addEventListener("scroll", updateProgress, {
      passive: true,
    });

    return () => {
      window.removeEventListener(
        "scroll",
        updateProgress
      );
    };
  }, [slug]);

  useEffect(() => {
    setOpenFaq(0);
    setActiveSection(0);
    setProgress(0);
  }, [slug]);

  if (!article) {
    return (
      <div className="kbj">
        <style>{styles}</style>

        <section className="kbj-section">
          <div className="kbj-wrap">
            <span className="kbj-eyebrow">
              DENTAL JOURNAL
            </span>

            <h1 className="kbj-title">
              Article not found.
            </h1>

            <p>
              This article is not available.
              Browse our other dental topics.
            </p>

            <button
              className="kbj-button"
              onClick={() => go("/blogs")}
            >
              <ArrowLeft size={18} />
              Back to Blogs
            </button>
          </div>
        </section>
      </div>
    );
  }

  const relatedArticles = articles
    .filter((item) => item.slug !== article.slug)
    .sort(
      (a, b) =>
        Number(b.category === article.category) -
        Number(a.category === article.category)
    )
    .slice(0, 3);

  const scrollToSection = (index: number) => {
    setActiveSection(index);

    document
      .getElementById(`kbj-section-${index}`)
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  return (
    <div className="kbj" ref={rootRef}>
      <style>{styles}</style>

      <div
        className="kbj-progress"
        style={{ width: `${progress}%` }}
        role="progressbar"
        aria-label="Article reading progress"
        aria-valuenow={Math.round(progress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      {/* ARTICLE HERO */}

      <section className="kbj-detail-hero">
        <div className="kbj-wrap">
          <button
            className="kbj-back"
            onClick={() => go("/blogs")}
          >
            <ArrowLeft size={17} />
            Back to Dental Journal
          </button>

          <span className="kbj-eyebrow">
            {article.category}
          </span>

          <h1>{article.title}</h1>

          <p>{article.excerpt}</p>

          <div className="kbj-meta">
            <span>
              <Clock3 size={16} />
              {article.minutes} min read
            </span>

            <span>
              <BookOpen size={16} />
              Keerti Cure Dental Journal
            </span>
          </div>
        </div>
      </section>

      {/* ARTICLE IMAGE */}

      <div className="kbj-wrap">
        <div className="kbj-detail-banner">
          <img
            src={article.image}
            alt={article.title}
          />
        </div>
      </div>

      {/* MAIN CONTENT */}

      <section className="kbj-section">
        <div className="kbj-wrap kbj-article-layout">
          <article className="kbj-article-body">
            <p className="kbj-article-lead">
              {article.lead}
            </p>

            {article.sections.map(
              (section, index) => (
                <section
                  className="kbj-article-section kbj-reveal"
                  id={`kbj-section-${index}`}
                  key={section.heading}
                >
                  <span className="kbj-eyebrow">
                    SECTION {String(index + 1).padStart(2, "0")}
                  </span>

                  <h2>{section.heading}</h2>

                  {section.paragraphs.map(
                    (paragraph) => (
                      <p key={paragraph}>
                        {paragraph}
                      </p>
                    )
                  )}

                  {section.bullets && (
                    <ul className="kbj-bullets">
                      {section.bullets.map(
                        (bullet) => (
                          <li key={bullet}>
                            <CheckCircle2 size={18} />
                            <span>{bullet}</span>
                          </li>
                        )
                      )}
                    </ul>
                  )}
                </section>
              )
            )}

            {/* ARTICLE FAQ */}

            <div className="kbj-faq-area">
              <span className="kbj-eyebrow">
                FREQUENTLY ASKED QUESTIONS
              </span>

              <h2 className="kbj-title">
                Questions,
                <em> answered.</em>
              </h2>

              {article.faqs.map(
                (faq, index) => (
                  <div
                    className="kbj-faq-item"
                    key={faq.question}
                  >
                    <button
                      aria-expanded={openFaq === index}
                      aria-controls={`kbj-faq-${index}`}
                      onClick={() =>
                        setOpenFaq(
                          openFaq === index
                            ? null
                            : index
                        )
                      }
                    >
                      <span>{faq.question}</span>
                      <ChevronDown size={19} />
                    </button>

                    {openFaq === index && (
                      <div
                        className="kbj-faq-answer"
                        id={`kbj-faq-${index}`}
                      >
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                )
              )}
            </div>

            {/* DISCLAIMER */}

            <div className="kbj-disclaimer">
              <strong>Medical information notice:</strong>{" "}
              This article is for general dental education
              only. It does not replace an examination,
              diagnosis or treatment recommendation from
              a qualified dental professional. Seek urgent
              medical care for breathing or swallowing
              difficulties associated with facial swelling.
            </div>

            <div style={{ marginTop: 32 }}>
              <button
                className="kbj-button"
                onClick={() => go("/contact-us")}
              >
                Discuss This Topic With Our Clinic
                <ArrowUpRight size={18} />
              </button>
            </div>
          </article>

          {/* SIDEBAR */}

          <aside className="kbj-sidebar">
            <div className="kbj-sidebar-box">
              <h3>In This Article</h3>

              <div className="kbj-toc">
                {article.sections.map(
                  (section, index) => (
                    <button
                      key={section.heading}
                      className={
                        activeSection === index
                          ? "active"
                          : ""
                      }
                      onClick={() =>
                        scrollToSection(index)
                      }
                    >
                      {String(index + 1).padStart(2, "0")}
                      {" — "}
                      {section.heading}
                    </button>
                  )
                )}
              </div>
            </div>

            <div className="kbj-sidebar-cta">
              <Stethoscope size={35} />

              <h3>Need personalised guidance?</h3>

              <p>
                Discuss your dental concerns
                with the clinic team.
              </p>

              <button
                className="kbj-button"
                onClick={() => go("/contact-us")}
              >
                Contact Clinic
                <ArrowUpRight size={17} />
              </button>
            </div>
          </aside>
        </div>
      </section>

      {/* RELATED ARTICLES */}

      <section className="kbj-section kbj-related">
        <div className="kbj-wrap">
          <div className="kbj-related-head">
            <div>
              <span className="kbj-eyebrow">
                KEEP EXPLORING
              </span>

              <h2 className="kbj-title">
                More helpful
                <em> dental insights.</em>
              </h2>
            </div>

            <button
              className="kbj-text-link"
              onClick={() => go("/blogs")}
            >
              View All Articles
              <ArrowRight size={18} />
            </button>
          </div>

          <div className="kbj-grid">
            {relatedArticles.map(
              (related, index) => (
                <ArticleCard
                  key={related.slug}
                  article={related}
                  go={go}
                  index={index}
                />
              )
            )}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}

      <section className="kbj-cta">
        <div className="kbj-wrap kbj-cta-grid">
          <div>
            <span className="kbj-eyebrow">
              YOUR SMILE MATTERS
            </span>

            <h2 className="kbj-title">
              Better understanding.
              <em> Better conversations.</em>
            </h2>

            <p>
              Have questions about your oral health?
              A consultation can help you understand
              the next step that's appropriate for you.
            </p>
          </div>

          <button
            className="kbj-button"
            onClick={() => go("/contact-us")}
          >
            Contact Our Team
            <ArrowUpRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
}

export default Blogs;
