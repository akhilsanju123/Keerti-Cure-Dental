
import {
  useEffect,
  useRef,
  type CSSProperties,
} from 'react';

import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  Heart,
  Phone,
  ShieldCheck,
  Sparkles,
  Stethoscope,
} from 'lucide-react';

import { Cta } from '@/components/Layout';
import { phone, phoneLink } from '@/lib/constants';
import type { Go } from '@/lib/constants';
import { NotFound } from '@/pages/NotFound';
import { getService, services } from '@/services';

// Service image overrides
const serviceImageOverrides: Record<string, string> = {
  'cosmetic dentistry': '/images/slides/5_(2).jpg.jpeg',
  'orthodontics': '/images/slides/4 (2).jpg.jpeg',
  'dental implants': '/images/slides/Crowns&Bridges.jpeg',
  'dental veneers': '/images/slides/TeethWhitening.jpeg',
  'oral cavity & tongue': '/images/slides/Oral and toung.jpeg',
};

function serviceImage(name: string, fallback: string): string {
  return serviceImageOverrides[name.trim().toLowerCase()] ?? fallback;
}

const serviceDetailStyles = `
.sd-page {
  --sd-primary: #087f83;
  --sd-dark: #073b43;
  --sd-muted: #527078;
  --sd-light: #f4faf9;
  --sd-border: #dcece9;

  width: 100%;
  overflow: hidden;
  color: var(--sd-dark);
}

.sd-page *,
.sd-page *::before,
.sd-page *::after {
  box-sizing: border-box;
}

.sd-container {
  width: min(1200px, calc(100% - 48px));
  margin-inline: auto;
}

/* SCROLL REVEAL */

.sd-reveal {
  opacity: 0;
  transform: translateY(35px);
  transition:
    opacity .8s ease,
    transform .8s cubic-bezier(.2,.7,.2,1);
}

.sd-reveal.sd-visible {
  opacity: 1;
  transform: translateY(0);
}

.sd-delay-1 { transition-delay: .12s; }
.sd-delay-2 { transition-delay: .22s; }
.sd-delay-3 { transition-delay: .32s; }

/* HERO */

.sd-hero {
  position: relative;
  isolation: isolate;
  padding: 45px 0 105px;
  background:
    radial-gradient(
      circle at 90% 10%,
      rgba(46,190,177,.13),
      transparent 35%
    ),
    linear-gradient(
      135deg,
      #f7fcfb 0%,
      #edf8f5 100%
    );
}

.sd-hero::before {
  content: "";
  position: absolute;
  width: 450px;
  height: 450px;
  top: -200px;
  right: -150px;
  background: rgba(57,191,179,.12);
  filter: blur(80px);
  border-radius: 50%;
  pointer-events: none;
  z-index: -1;
}

.sd-hero-grid {
  display: grid;
  grid-template-columns: minmax(0,1fr) minmax(0,1fr);
  align-items: center;
  gap: 70px;
}

.sd-back {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 10px 0;
  margin-bottom: 34px;
  border: none;
  background: transparent;
  color: var(--sd-primary);
  font: inherit;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: gap .3s ease, color .3s ease;
}

.sd-back:hover {
  gap: 15px;
  color: #04585c;
}

.sd-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  color: var(--sd-primary);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: .17em;
  text-transform: uppercase;
}

.sd-eyebrow::before {
  content: "";
  width: 22px;
  height: 2px;
  background: var(--sd-primary);
  border-radius: 10px;
}

.sd-hero h1 {
  margin: 20px 0 25px;
  font-size: clamp(40px,5vw,66px);
  line-height: 1.12;
  font-weight: 800;
  letter-spacing: -.045em;
  color: var(--sd-dark);
}

.sd-gradient-text {
  background: linear-gradient(
    90deg,
    #087f83,
    #1ab5ae
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.sd-lead {
  max-width: 570px;
  margin: 0 0 34px;
  color: var(--sd-muted);
  font-size: 17px;
  line-height: 1.85;
}

.sd-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}

.sd-primary,
.sd-secondary {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 11px;
  min-height: 52px;
  padding: 15px 25px;
  border-radius: 50px;
  font: inherit;
  font-size: 14px;
  font-weight: 750;
  text-decoration: none;
  cursor: pointer;
  transition:
    transform .35s ease,
    box-shadow .35s ease,
    background .35s ease,
    color .35s ease;
}

.sd-primary {
  border: 1px solid #087f83;
  background: linear-gradient(
    120deg,
    #087f83,
    #11a5a3
  );
  color: #fff;
  box-shadow: 0 12px 25px rgba(8,127,131,.18);
}

.sd-primary:hover {
  transform: translateY(-4px);
  box-shadow: 0 18px 35px rgba(8,127,131,.3);
}

.sd-primary svg {
  transition: transform .3s ease;
}

.sd-primary:hover svg {
  transform: translateX(4px);
}

.sd-secondary {
  border: 1px solid #b7dbd7;
  background: white;
  color: var(--sd-primary);
}

.sd-secondary:hover {
  background: #e4f7f3;
  transform: translateY(-4px);
  box-shadow: 0 12px 25px rgba(8,127,131,.1);
}

/* IMAGE */

.sd-image-wrap {
  position: relative;
  padding: 13px;
}

.sd-image-glow {
  position: absolute;
  inset: 0;
  border-radius: 38px;
  background: linear-gradient(
    145deg,
    rgba(10,171,166,.2),
    rgba(255,255,255,.5)
  );
  filter: blur(15px);
  transition: transform .7s ease;
}

.sd-image-wrap:hover .sd-image-glow {
  transform: scale(1.04);
}

.sd-image {
  position: relative;
  overflow: hidden;
  aspect-ratio: 4/4.3;
  border-radius: 30px;
  background: #e5f3ef;
  box-shadow: 0 30px 65px rgba(5,47,56,.16);
}

.sd-image img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1s cubic-bezier(.2,.7,.2,1);
}

.sd-image-wrap:hover img {
  transform: scale(1.09);
}

.sd-image::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(3,47,54,.35),
    transparent 55%
  );
  pointer-events: none;
}

.sd-image-badge {
  position: absolute;
  bottom: 34px;
  left: 34px;
  right: 34px;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 13px;
  padding: 17px 19px;
  border: 1px solid rgba(255,255,255,.7);
  border-radius: 18px;
  background: rgba(255,255,255,.95);
  backdrop-filter: blur(14px);
  box-shadow: 0 12px 35px rgba(0,0,0,.12);
  transition: transform .4s ease;
}

.sd-image-wrap:hover .sd-image-badge {
  transform: translateY(-7px);
}

.sd-badge-icon {
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: 45px;
  height: 45px;
  border-radius: 13px;
  background: #e0f6f0;
  color: #087f83;
}

.sd-image-badge strong {
  display: block;
  font-size: 14px;
  color: var(--sd-dark);
}

.sd-image-badge small {
  display: block;
  margin-top: 3px;
  font-size: 12px;
  color: var(--sd-muted);
}

.sd-floating-icon {
  position: absolute;
  top: -4px;
  right: -5px;
  z-index: 3;
  display: grid;
  place-items: center;
  width: 65px;
  height: 65px;
  border-radius: 20px;
  background: white;
  color: var(--sd-primary);
  box-shadow: 0 15px 35px rgba(5,47,56,.15);
  animation: sd-float 5s ease-in-out infinite;
}

@keyframes sd-float {
  0%,100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

/* TRUST STRIP */

.sd-trust-strip {
  position: relative;
  z-index: 2;
  margin-top: -40px;
}

.sd-trust-grid {
  display: grid;
  grid-template-columns: repeat(3,minmax(0,1fr));
  gap: 0;
  overflow: hidden;
  border: 1px solid #e0eeeb;
  border-radius: 22px;
  background: white;
  box-shadow: 0 18px 55px rgba(5,47,56,.08);
}

.sd-trust-item {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 25px;
  transition: background .3s ease;
}

.sd-trust-item:hover {
  background: #f1faf7;
}

.sd-trust-item:not(:last-child) {
  border-right: 1px solid #e6efed;
}

.sd-trust-icon {
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: 47px;
  height: 47px;
  border-radius: 14px;
  background: #e6f7f3;
  color: var(--sd-primary);
}

.sd-trust-item strong {
  display: block;
  font-size: 14px;
  color: var(--sd-dark);
}

.sd-trust-item span {
  display: block;
  margin-top: 4px;
  font-size: 12px;
  color: var(--sd-muted);
}

/* EXPECTATIONS */

.sd-section {
  padding: 110px 0;
  background: white;
}

.sd-expect {
  display: grid;
  grid-template-columns: minmax(0,.85fr) minmax(0,1.15fr);
  gap: 75px;
  align-items: start;
}

.sd-expect-title h2 {
  margin: 20px 0;
  font-size: clamp(32px,3.8vw,46px);
  line-height: 1.2;
  letter-spacing: -.035em;
  color: var(--sd-dark);
}

.sd-expect-title p {
  max-width: 420px;
  color: var(--sd-muted);
  font-size: 16px;
  line-height: 1.85;
}

.sd-expect ul {
  display: grid;
  gap: 17px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.sd-expect li {
  display: flex;
  align-items: flex-start;
  gap: 17px;
  padding: 23px;
  border: 1px solid var(--sd-border);
  border-radius: 19px;
  background: #f9fcfb;
  color: #34565d;
  font-size: 16px;
  line-height: 1.65;
  transition:
    transform .35s ease,
    border-color .35s ease,
    box-shadow .35s ease,
    background .35s ease;
}

.sd-expect li:hover {
  transform: translateY(-5px);
  border-color: #9bd8cf;
  background: #f0faf7;
  box-shadow: 0 15px 35px rgba(8,127,131,.09);
}

.sd-check-icon {
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: #e0f5ef;
  color: var(--sd-primary);
  transition:
    transform .35s ease,
    background .35s ease,
    color .35s ease;
}

.sd-expect li:hover .sd-check-icon {
  transform: rotate(8deg) scale(1.08);
  background: var(--sd-primary);
  color: white;
}

.sd-expect-text {
  flex: 1;
  padding-top: 7px;
}

.sd-expect-arrow {
  flex-shrink: 0;
  margin-top: 10px;
  color: #b3ccc8;
  transition: transform .3s ease, color .3s ease;
}

.sd-expect li:hover .sd-expect-arrow {
  transform: translate(3px,-3px);
  color: var(--sd-primary);
}

/* OTHER SERVICES */

.sd-other {
  padding: 100px 0;
  background: linear-gradient(
    135deg,
    #f2faf7,
    #f8fcfb
  );
}

.sd-other-heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 38px;
}

.sd-other h2 {
  margin: 16px 0 0;
  color: var(--sd-dark);
  font-size: clamp(30px,3.5vw,44px);
  letter-spacing: -.035em;
}

.sd-other-all {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 0;
  border: none;
  background: transparent;
  color: var(--sd-primary);
  font: inherit;
  font-weight: 700;
  cursor: pointer;
  transition: gap .3s ease;
}

.sd-other-all:hover {
  gap: 14px;
}

.sd-other-grid {
  display: grid;
  grid-template-columns: repeat(3,minmax(0,1fr));
  gap: 20px;
}

.sd-other-link {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  min-height: 115px;
  padding: 25px;
  border: 1px solid #deebe8;
  border-radius: 20px;
  background: white;
  color: var(--sd-dark);
  font: inherit;
  font-size: 16px;
  font-weight: 700;
  text-align: left;
  cursor: pointer;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(5,47,56,.025);
  transition:
    transform .35s ease,
    border-color .35s ease,
    box-shadow .35s ease,
    color .35s ease;
}

.sd-other-link::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    120deg,
    rgba(8,127,131,.07),
    transparent
  );
  opacity: 0;
  transition: opacity .35s ease;
}

.sd-other-link:hover {
  transform: translateY(-6px);
  border-color: #91d1c9;
  color: var(--sd-primary);
  box-shadow: 0 18px 40px rgba(8,127,131,.11);
}

.sd-other-link:hover::before {
  opacity: 1;
}

.sd-other-link span,
.sd-other-link svg {
  position: relative;
  z-index: 1;
}

.sd-other-link svg {
  flex-shrink: 0;
  color: var(--sd-primary);
  transition: transform .3s ease;
}

.sd-other-link:hover svg {
  transform: translate(4px,-4px);
}

/* RESPONSIVE */

@media (max-width: 1000px) {
  .sd-hero-grid {
    gap: 40px;
  }

  .sd-expect {
    gap: 40px;
  }

  .sd-other-grid {
    grid-template-columns: repeat(2,minmax(0,1fr));
  }
}

@media (max-width: 768px) {
  .sd-container {
    width: min(100% - 32px, 600px);
  }

  .sd-hero {
    padding: 25px 0 85px;
  }

  .sd-hero-grid,
  .sd-expect {
    grid-template-columns: 1fr;
    gap: 35px;
  }

  .sd-hero h1 {
    font-size: clamp(36px,9vw,48px);
  }

  .sd-lead {
    font-size: 16px;
  }

  .sd-image {
    aspect-ratio: 4/3.6;
  }

  .sd-trust-grid {
    grid-template-columns: 1fr;
  }

  .sd-trust-item {
    padding: 18px 22px;
  }

  .sd-trust-item:not(:last-child) {
    border-right: 0;
    border-bottom: 1px solid #e6efed;
  }

  .sd-section,
  .sd-other {
    padding: 75px 0;
  }

  .sd-expect-title h2 {
    font-size: 34px;
  }

  .sd-other-heading {
    align-items: flex-start;
    flex-direction: column;
    gap: 10px;
  }

  .sd-other-grid {
    grid-template-columns: 1fr;
    gap: 13px;
  }

  .sd-other-link {
    min-height: 85px;
  }
}

@media (max-width: 480px) {
  .sd-actions {
    flex-direction: column;
  }

  .sd-primary,
  .sd-secondary {
    width: 100%;
  }

  .sd-image-badge {
    bottom: 23px;
    left: 23px;
    right: 23px;
  }

  .sd-floating-icon {
    width: 52px;
    height: 52px;
  }

  .sd-expect li {
    padding: 17px;
    font-size: 14px;
  }

  .sd-expect-arrow {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .sd-page *,
  .sd-page *::before,
  .sd-page *::after {
    animation: none !important;
    transition-duration: .01ms !important;
    scroll-behavior: auto !important;
  }

  .sd-reveal {
    opacity: 1;
    transform: none;
  }
}
`;

/* SCROLL REVEAL HOOK */

function useScrollReveal(dependency?: string) {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const elements = root.querySelectorAll<HTMLElement>(
      '.sd-reveal'
    );

    if (
      !('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      elements.forEach(el => el.classList.add('sd-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('sd-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -30px 0px',
      }
    );

    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [dependency]);

  return rootRef;
}

/* SERVICE DETAIL COMPONENT */

export function ServiceDetail({
  slug,
  go,
}: {
  slug?: string;
  go: Go;
}) {
  const service = getService(slug);
  const revealRef = useScrollReveal(service?.slug);

  if (!service) {
    return <NotFound go={go} />;
  }

  const otherServices = services.filter(item => item.slug !== service.slug);

  return (
    <>
      <style>{serviceDetailStyles}</style>

      <div
        className="sd-page"
        ref={revealRef}
        key={service.slug}
      >
        {/* HERO SECTION */}
        <section className="sd-hero">
          <div className="sd-container sd-hero-grid">

            <div>
              <button
                type="button"
                className="sd-back"
                onClick={() => go('/our-services')}
              >
                <ArrowLeft size={17} />
                All Services
              </button>

              <div className="sd-reveal">
                <span className="sd-eyebrow">
                  Premium Dental Care
                </span>

                <h1>
                  {service.name}
                  <span className="sd-gradient-text">
                    {' '}Treatment
                  </span>
                </h1>

                <p className="sd-lead">
                  {service.description}
                </p>
              </div>

              <div className="sd-actions sd-reveal sd-delay-1">
                <button
                  type="button"
                  className="sd-primary"
                  onClick={() => go('/book-appointment')}
                >
                  <CalendarDays size={19} />
                  Book an Appointment
                  <ArrowRight size={17} />
                </button>

                <a
                  className="sd-secondary"
                  href={phoneLink}
                >
                  <Phone size={18} />
                  Call {phone}
                </a>
              </div>
            </div>

            {/* SERVICE IMAGE */}
            <div className="sd-image-wrap sd-reveal sd-delay-2">
              <div className="sd-image-glow" />

              <div className="sd-image">
                <img
                  src={serviceImage(service.name, service.image)}
                  alt={service.name}
                  loading="eager"
                />

                <div className="sd-image-badge">
                  <div className="sd-badge-icon">
                    <Sparkles size={22} />
                  </div>

                  <div>
                    <strong>Your Smile Matters</strong>
                    <small>Personalized Dental Care</small>
                  </div>
                </div>
              </div>

              <div className="sd-floating-icon">
                <Sparkles size={27} />
              </div>
            </div>
          </div>
        </section>

        {/* TRUST HIGHLIGHTS */}
        <section className="sd-trust-strip">
          <div className="sd-container">
            <div className="sd-trust-grid sd-reveal">

              <div className="sd-trust-item">
                <div className="sd-trust-icon">
                  <ShieldCheck size={23} />
                </div>
                <div>
                  <strong>Personalized Care</strong>
                  <span>Individual treatment planning</span>
                </div>
              </div>

              <div className="sd-trust-item">
                <div className="sd-trust-icon">
                  <Heart size={23} />
                </div>
                <div>
                  <strong>Patient Comfort</strong>
                  <span>Gentle and caring approach</span>
                </div>
              </div>

              <div className="sd-trust-item">
                <div className="sd-trust-icon">
                  <Stethoscope size={23} />
                </div>
                <div>
                  <strong>Oral Health Focus</strong>
                  <span>Care designed around your needs</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* WHAT TO EXPECT */}
        <section className="sd-section">
          <div className="sd-container sd-expect">

            <div className="sd-expect-title sd-reveal">
              <span className="sd-eyebrow">
                What To Expect
              </span>

              <h2>
                Your Journey to
                <span className="sd-gradient-text">
                  {' '}Better Dental Care
                </span>
              </h2>

              <p>
                Every smile is unique. We focus on
                understanding your needs and explaining
                your treatment options so you can make
                informed decisions with confidence.
              </p>
            </div>

            <ul>
              {service.expectations.map((item, index) => (
                <li
                  key={`${service.slug}-${index}`}
                  className="sd-reveal"
                  style={{
                    transitionDelay: `${index * 90}ms`,
                  } as CSSProperties}
                >
                  <div className="sd-check-icon">
                    <CheckCircle2 size={21} />
                  </div>

                  <span className="sd-expect-text">
                    {item}
                  </span>

                  <ArrowUpRight
                    size={19}
                    className="sd-expect-arrow"
                  />
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* OTHER SERVICES */}
        <section className="sd-other">
          <div className="sd-container">

            <div className="sd-other-heading sd-reveal">
              <div>
                <span className="sd-eyebrow">
                  Discover More
                </span>

                <h2>
                  Explore Other
                  <span className="sd-gradient-text">
                    {' '}Treatments
                  </span>
                </h2>
              </div>

              <button
                type="button"
                className="sd-other-all"
                onClick={() => go('/our-services')}
              >
                View All Services
                <ArrowRight size={18} />
              </button>
            </div>

            <div className="sd-other-grid">
              {otherServices.map((item, index) => (
                <button
                  key={item.slug}
                  type="button"
                  className="sd-other-link sd-reveal"
                  style={{
                    transitionDelay: `${Math.min(index % 3, 2) * 80}ms`,
                  }}
                  onClick={() =>
                    go(`/our-services/${item.slug}`)
                  }
                >
                  <span>{item.name}</span>
                  <ArrowUpRight size={21} />
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <Cta go={go} />
      </div>
    </>
  );
}
