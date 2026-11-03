
import {
  CheckCircle2,
  ClipboardList,
  HeartPulse,
} from "lucide-react";

import {
  postTreatmentTips,
  preVisitTips,
  whyChoosePoints,
} from "@/lib/clinicContent";

const whyChooseStyles = `
.wc-section {
  padding: 96px 0;
  background: #f5faf8;
}

.wc-container {
  width: min(1180px, calc(100% - 48px));
  margin: 0 auto;
}

/* =========================================
   PREMIUM COLORFUL VISIT CARDS
========================================= */

.wc-tips {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 28px;
}

.wc-tip-card {
  --wc-accent: #1768bd;
  --wc-accent-dark: #104b8a;

  position: relative;
  isolation: isolate;
  overflow: hidden;
  padding: 38px 40px;
  border: 1px solid #a9d4fa;
  border-left: 5px solid var(--wc-accent);
  border-radius: 20px;
  background: linear-gradient(
    135deg,
    #ffffff 0%,
    #eaf5ff 48%,
    #d9ecff 100%
  );
  box-shadow: 0 10px 28px rgba(23,104,189,.07);
  transition:
    transform .45s cubic-bezier(.22,1,.36,1),
    box-shadow .45s ease,
    border-color .35s ease;
}

/* Blue card */

.wc-tip-card--before {
  --wc-accent: #1768bd;
  --wc-accent-dark: #104b8a;
}

/* Orange card */

.wc-tip-card--after {
  --wc-accent: #e66a25;
  --wc-accent-dark: #a94618;

  border-color: #f6c4a0;
  border-left-color: var(--wc-accent);
  background: linear-gradient(
    135deg,
    #ffffff 0%,
    #fff1e6 48%,
    #ffe0c8 100%
  );
  box-shadow: 0 10px 28px rgba(230,106,37,.07);
}

/* Decorative glow */

.wc-tip-card::before {
  content: "";
  position: absolute;
  z-index: -1;
  top: -115px;
  right: -90px;
  width: 270px;
  height: 270px;
  border-radius: 50%;
  background: rgba(54,149,255,.12);
  filter: blur(5px);
  transition:
    transform .65s ease,
    opacity .45s ease;
}

.wc-tip-card--after::before {
  background: rgba(255,139,69,.16);
}

.wc-tip-card::after {
  content: "";
  position: absolute;
  z-index: -1;
  right: -60px;
  bottom: -110px;
  width: 240px;
  height: 240px;
  border: 1px solid rgba(23,104,189,.12);
  border-radius: 50%;
  pointer-events: none;
}

.wc-tip-card--after::after {
  border-color: rgba(230,106,37,.16);
}

/* Hover */

.wc-tip-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 25px 55px rgba(23,104,189,.17);
}

.wc-tip-card--after:hover {
  box-shadow: 0 25px 55px rgba(230,106,37,.17);
}

.wc-tip-card:hover::before {
  transform: scale(1.3) translate(-15px,15px);
}

/* Card heading */

.wc-tip-card h3 {
  display: flex;
  align-items: center;
  gap: 15px;
  margin: 0 0 26px;
  color: #082f38;
  font-size: clamp(20px,2vw,24px);
  font-weight: 800;
  letter-spacing: -.04em;
}

.wc-tip-heading-icon {
  display: grid;
  flex-shrink: 0;
  place-items: center;
  width: 51px;
  height: 51px;
  border: 1px solid rgba(23,104,189,.2);
  border-radius: 14px;
  background: rgba(255,255,255,.82);
  color: var(--wc-accent);
  box-shadow: 0 6px 16px rgba(23,104,189,.08);
  transition:
    transform .4s ease,
    background .35s ease,
    color .35s ease;
}

.wc-tip-card--after .wc-tip-heading-icon {
  border-color: rgba(230,106,37,.2);
  box-shadow: 0 6px 16px rgba(230,106,37,.08);
}

.wc-tip-card:hover .wc-tip-heading-icon {
  transform: rotate(-8deg) scale(1.1);
  background: var(--wc-accent);
  color: white;
}

/* List */

.wc-tip-card ul {
  display: grid;
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.wc-tip-card li {
  display: flex;
  align-items: flex-start;
  gap: 13px;
  padding: 10px 12px;
  border: 1px solid transparent;
  border-radius: 10px;
  color: #345365;
  font-size: 16px;
  line-height: 1.55;
  transition:
    transform .3s ease,
    background .3s ease,
    border-color .3s ease,
    color .3s ease;
}

.wc-tip-card--after li {
  color: #705344;
}

.wc-tip-card li svg {
  flex-shrink: 0;
  margin-top: 3px;
  color: var(--wc-accent);
  transition: transform .3s ease;
}

.wc-tip-card li:hover {
  transform: translateX(6px);
  border-color: rgba(23,104,189,.12);
  background: rgba(255,255,255,.7);
  color: var(--wc-accent-dark);
}

.wc-tip-card--after li:hover {
  border-color: rgba(230,106,37,.15);
}

.wc-tip-card li:hover svg {
  transform: scale(1.18);
}

/* =========================================
   WHY CHOOSE SECTION — ORIGINAL DESIGN
========================================= */

.wc-title {
  margin: 80px 0 0;
  text-align: center;
}

.wc-badge {
  display: inline-block;
  padding: 14px 28px;
  border: 2px solid #087f83;
  border-radius: 16px;
  background: #ffffff;
  color: #082f38;
  font-size: clamp(20px, 2.6vw, 26px);
  font-weight: 700;
}

.wc-subtitle {
  margin: 16px 0 0;
  color: #056b6f;
  font-size: 17px;
  font-weight: 600;
}

.wc-points {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  gap: 20px;
  margin-top: 48px;
}

.wc-point {
  padding: 28px;
  border-radius: 18px;
  background: #082f38;
  color: #ffffff;
  transition: transform .35s ease;
}

.wc-point:hover {
  transform: translateY(-4px);
}

.wc-point-number {
  display: inline-grid;
  place-items: center;
  width: 40px;
  height: 40px;
  margin-bottom: 18px;
  border-radius: 50%;
  background: #7be4cf;
  color: #082f38;
  font-weight: 700;
}

.wc-point h4 {
  margin: 0 0 10px;
  color: #ffffff;
  font-size: 19px;
}

.wc-point p {
  margin: 0;
  color: #cfe9e4;
  font-size: 15px;
  line-height: 1.55;
}

/* =========================================
   RESPONSIVE
========================================= */

@media (max-width: 800px) {
  .wc-tips {
    grid-template-columns: 1fr;
  }

  .wc-tip-card {
    padding: 28px;
  }
}

@media (max-width: 480px) {
  .wc-section {
    padding: 65px 0;
  }

  .wc-container {
    width: calc(100% - 32px);
  }

  .wc-tip-card {
    padding: 24px 20px;
    border-radius: 17px;
  }

  .wc-tip-card h3 {
    gap: 11px;
    font-size: 20px;
  }

  .wc-tip-heading-icon {
    width: 44px;
    height: 44px;
  }

  .wc-tip-card li {
    padding: 9px 5px;
    font-size: 14px;
  }

  .wc-title {
    margin-top: 65px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .wc-tip-card,
  .wc-tip-card::before,
  .wc-tip-heading-icon,
  .wc-tip-card li,
  .wc-tip-card li svg,
  .wc-point {
    transition: none !important;
  }
}
`;

export function WhyChooseHighlights() {
  return (
    <section className="wc-section">
      <style>{whyChooseStyles}</style>

      <div className="wc-container">
        <div className="wc-tips">
          {/* BLUE CARD */}

          <article className="wc-tip-card wc-tip-card--before">
            <h3>
              <span className="wc-tip-heading-icon">
                <ClipboardList size={25} />
              </span>
              Before Your Visit
            </h3>

            <ul>
              {preVisitTips.map((tip) => (
                <li key={tip}>
                  <CheckCircle2 size={19} />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </article>

          {/* ORANGE CARD */}

          <article className="wc-tip-card wc-tip-card--after">
            <h3>
              <span className="wc-tip-heading-icon">
                <HeartPulse size={25} />
              </span>
              Post-Treatment Care
            </h3>

            <ul>
              {postTreatmentTips.map((tip) => (
                <li key={tip}>
                  <CheckCircle2 size={19} />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>

        {/* WHY CHOOSE — UNCHANGED */}

        <div className="wc-title">
          <span className="wc-badge">
            Why Choose Keerti Cure Dental
          </span>
          <p className="wc-subtitle">
            Excellence You Can Trust
          </p>
        </div>

        <div className="wc-points">
          {whyChoosePoints.map((point, index) => (
            <article className="wc-point" key={point.title}>
              <span className="wc-point-number">
                {index + 1}
              </span>
              <h4>{point.title}</h4>
              <p>{point.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseHighlights;
