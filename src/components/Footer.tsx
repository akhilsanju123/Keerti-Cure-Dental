
import {
  ArrowRight,
  Facebook,
  Instagram,
  Youtube,
  Phone,
  MapPin,
} from "lucide-react";

import {
  logo,
  phone,
  phoneLink,
  maps,
  instagram,
  facebook,
  treatments,
} from "@/lib/constants";

import type { Go } from "@/lib/constants";

export function Footer({ go }: { go: Go }) {
  const year = new Date().getFullYear();

  const exploreLinks = [
    { title: "Home", path: "/" },
    { title: "About Us", path: "/about-us" },
    { title: "Our Doctors", path: "/our-doctors" },
    { title: "Smile Gallery", path: "/smile-gallery" },
    { title: "Dental Journal", path: "/blogs" },
    { title: "Contact Us", path: "/contact" },
  ];

  return (
    <>
      <footer className="kc-premium-footer">
        <div className="kc-premium-inner">

          {/* TOP APPOINTMENT BANNER */}
          <div className="kc-premium-banner">
            <div className="kc-premium-banner-content">
              <span className="kc-premium-eyebrow">
                YOUR SMILE MATTERS
              </span>

              <h2>Let's Make Your Smile Shine.</h2>

              <p>
                Quality dental care begins with a
                conversation. Our team is here for you.
              </p>
            </div>

            <button
              type="button"
              className="kc-premium-banner-btn"
              onClick={() => go("/book-appointment")}
            >
              Book an Appointment
              <ArrowRight size={18} />
            </button>
          </div>

          {/* MAIN FOOTER */}
          <div className="kc-premium-grid">

            {/* BRAND */}
            <div className="kc-premium-brand">
              <div className="kc-premium-logo-box">
                <img
                  src={logo}
                  alt="Keerti Cure Dental"
                />
              </div>

              <p>
                At Keerti Cure Dental, we believe
                every smile deserves exceptional
                care. Experience modern dentistry
                with a gentle, personalized approach.
              </p>

              <div className="kc-premium-socials">
                <a
                  href={instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Instagram"
                >
                  <Instagram size={18} />
                </a>

                <a
                  href={facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Facebook"
                >
                  <Facebook size={18} />
                </a>

                <a
                  href="https://www.youtube.com/@KeertiCureDental"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Keerti Cure Dental on YouTube"
                >
                  <Youtube size={18} />
                </a>
              </div>
            </div>

            {/* QUICK LINKS */}
            <div className="kc-premium-column">
              <h3>Quick Links</h3>

              <div className="kc-premium-links">
                {exploreLinks.map((link) => (
                  <button
                    key={link.path}
                    type="button"
                    onClick={() => go(link.path)}
                  >
                    {link.title}
                  </button>
                ))}
              </div>
            </div>

            {/* TREATMENTS */}
            <div className="kc-premium-column">
              <h3>Our Treatments</h3>

              <div className="kc-premium-links">
                {treatments.slice(0, 6).map((item) => (
                  <button
                    key={item.slug}
                    type="button"
                    onClick={() =>
                      go(`/treatments/${item.slug}`)
                    }
                  >
                    {item.title}
                  </button>
                ))}

                <button
                  type="button"
                  className="kc-premium-view-all"
                  onClick={() => go("/treatments")}
                >
                  Explore All Treatments
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>

            {/* CONTACT */}
            <div className="kc-premium-column kc-premium-contact">
              <h3>Get In Touch</h3>

              <p className="kc-premium-contact-desc">
                We're here to answer your questions
                and help you take the next step
                towards a healthier smile.
              </p>

              <a href={phoneLink}>
                <span className="kc-premium-contact-icon">
                  <Phone size={17} />
                </span>
                <span>{phone}</span>
              </a>

              <a
                href={maps}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="kc-premium-contact-icon">
                  <MapPin size={17} />
                </span>
                <span>Find Our Clinic</span>
              </a>

              <button
                type="button"
                className="kc-premium-contact-btn"
                onClick={() => go("/book-appointment")}
              >
                Request Consultation
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* COPYRIGHT + SOLIFYHUB CREDIT */}
          <div className="kc-premium-bottom">

            <p className="kc-premium-copyright">
              © {year} Keerti Cure Dental ·
              Dr. Cure Clinics. All Rights Reserved.

              <span className="kc-credit-divider">
                |
              </span>

              <span className="kc-designed-by">
                Designed by{" "}
                <a
                  href="https://solifyhub.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="kc-solifyhub-link"
                >
                  SOLIFYHUB
                </a>
              </span>
            </p>

            <div className="kc-premium-legal">
              <button
                type="button"
                onClick={() => go("/privacy-policy")}
              >
                Privacy Policy
              </button>

              <span className="kc-premium-separator">
                |
              </span>

              <button
                type="button"
                onClick={() => go("/terms-and-conditions")}
              >
                Terms & Conditions
              </button>
            </div>
          </div>

        </div>
      </footer>

      <style>{`
        /* PREMIUM FOOTER */

        .kc-premium-footer {
          background: #081d35;
          color: #ffffff;
          padding: 0;
          font-family: inherit;
          position: relative;
          overflow: hidden;
        }

        .kc-premium-footer * {
          box-sizing: border-box;
        }

        .kc-premium-inner {
          width: min(90%, 1200px);
          margin: 0 auto;
        }

        /* TEAL GREEN APPOINTMENT BANNER */

        .kc-premium-banner {
          background: linear-gradient(
            115deg,
            #087f82 0%,
            #0a9396 100%
          );
          border-radius: 0 0 22px 22px;
          padding: 42px 48px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 35px;
        }

        .kc-premium-eyebrow {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          color: #d6f7f4;
          display: block;
          margin-bottom: 12px;
        }

        .kc-premium-banner h2 {
          font-size: clamp(25px, 3vw, 35px);
          font-weight: 700;
          line-height: 1.25;
          margin: 0 0 10px;
          color: #ffffff;
        }

        .kc-premium-banner p {
          font-size: 14px;
          color: #e2f7f5;
          line-height: 1.7;
          margin: 0;
          max-width: 490px;
        }

        .kc-premium-banner-btn {
          background: #ffffff;
          color: #087f82;
          padding: 16px 22px;
          border: none;
          border-radius: 9px;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          white-space: nowrap;
          transition: all 0.3s ease;
        }

        .kc-premium-banner-btn:hover {
          background: #e6f7f5;
          color: #06696c;
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        }

        /* FOOTER GRID */

        .kc-premium-grid {
          display: grid;
          grid-template-columns: 1.45fr 0.85fr 1.15fr 1.2fr;
          gap: 45px;
          padding: 70px 0 65px;
          align-items: start;
        }

        /* BRAND */

        .kc-premium-logo-box {
          display: inline-flex;
          align-items: center;
          justify-content: flex-start;
          margin-bottom: 22px;
        }

        .kc-premium-logo-box img {
          max-width: 185px;
          max-height: 90px;
          width: auto;
          height: auto;
          object-fit: contain;
        }

        .kc-premium-brand p {
          color: #aebed0;
          font-size: 13.5px;
          line-height: 1.95;
          max-width: 285px;
          margin: 0 0 25px;
        }

        .kc-premium-socials {
          display: flex;
          gap: 11px;
        }

        .kc-premium-socials a {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #143451;
          border: 1px solid #28506e;
          border-radius: 9px;
          color: #d5e9f8;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .kc-premium-socials a:hover {
          background: #087f82;
          color: #ffffff;
          border-color: #087f82;
          transform: translateY(-4px);
        }

        /* COLUMNS */

        .kc-premium-column h3 {
          color: #ffffff;
          font-size: 16px;
          font-weight: 700;
          margin: 0 0 27px;
          padding-bottom: 15px;
          position: relative;
        }

        .kc-premium-column h3::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 32px;
          height: 3px;
          border-radius: 5px;
          background: #0a9396;
        }

        .kc-premium-links {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 16px;
        }

        .kc-premium-links button {
          background: none;
          border: none;
          padding: 0;
          color: #b5c5d5;
          font-size: 13.5px;
          line-height: 1.5;
          cursor: pointer;
          text-align: left;
          transition: all 0.25s ease;
        }

        .kc-premium-links button:hover {
          color: #58d6cc;
          transform: translateX(5px);
        }

        .kc-premium-links .kc-premium-view-all {
          color: #58d6cc;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 4px;
        }

        /* CONTACT */

        .kc-premium-contact-desc {
          font-size: 13px;
          line-height: 1.85;
          color: #aebed0;
          margin: -5px 0 22px;
        }

        .kc-premium-contact > a {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #d0dce9;
          font-size: 13px;
          text-decoration: none;
          margin-bottom: 18px;
          transition: color 0.25s ease;
        }

        .kc-premium-contact > a:hover {
          color: #58d6cc;
        }

        .kc-premium-contact-icon {
          width: 36px;
          height: 36px;
          flex-shrink: 0;
          background: #153957;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #58d6cc;
        }

        .kc-premium-contact-btn {
          margin-top: 13px;
          padding: 13px 16px;
          background: #087f82;
          color: #ffffff;
          border: none;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .kc-premium-contact-btn:hover {
          background: #0a9396;
          transform: translateY(-2px);
        }

        /* COPYRIGHT BOTTOM BAR */

        .kc-premium-bottom {
          border-top: 1px solid #25415b;
          padding: 26px 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .kc-premium-copyright {
          color: #a6b8ca;
          font-size: 12px;
          line-height: 1.8;
          margin: 0;
        }

        /* SOLIFYHUB CREDIT */

        .kc-credit-divider {
          display: inline-block;
          margin: 0 12px;
          color: #627b91;
        }

        .kc-designed-by {
          color: #a6b8ca;
          white-space: nowrap;
        }

        .kc-solifyhub-link {
          color: #58d6cc;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.6px;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .kc-solifyhub-link:hover {
          color: #ffffff;
          text-decoration: underline;
        }

        /* LEGAL LINKS */

        .kc-premium-legal {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-shrink: 0;
        }

        .kc-premium-legal button {
          background: none;
          border: none;
          color: #a6b8ca;
          font-size: 12px;
          padding: 0;
          cursor: pointer;
          transition: color 0.25s ease;
        }

        .kc-premium-legal button:hover {
          color: #58d6cc;
        }

        .kc-premium-separator {
          color: #50677d;
        }

        /* TABLET */

        @media (max-width: 1024px) {
          .kc-premium-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 45px 35px;
          }

          .kc-premium-banner {
            padding: 35px;
          }

          .kc-premium-bottom {
            flex-direction: column;
            text-align: center;
          }
        }

        /* MOBILE */

        @media (max-width: 650px) {
          .kc-premium-inner {
            width: 90%;
          }

          .kc-premium-banner {
            flex-direction: column;
            align-items: flex-start;
            padding: 30px 24px;
            gap: 25px;
            border-radius: 0 0 16px 16px;
          }

          .kc-premium-banner h2 {
            font-size: 26px;
          }

          .kc-premium-banner-btn {
            width: 100%;
          }

          .kc-premium-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 38px 20px;
            padding: 48px 0;
          }

          .kc-premium-brand {
            grid-column: 1 / -1;
          }

          .kc-premium-brand p {
            max-width: 100%;
          }

          .kc-premium-contact {
            grid-column: 1 / -1;
          }

          .kc-premium-column h3 {
            font-size: 15px;
          }

          .kc-premium-links button {
            font-size: 12.5px;
          }

          .kc-premium-bottom {
            flex-direction: column;
            text-align: center;
            gap: 14px;
          }

          .kc-premium-copyright {
            font-size: 11.5px;
          }

          .kc-credit-divider {
            margin: 0 7px;
          }

          .kc-premium-legal {
            justify-content: center;
            flex-wrap: wrap;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .kc-premium-footer *,
          .kc-premium-footer *::before,
          .kc-premium-footer *::after {
            transition: none !important;
          }
        }
      `}</style>
    </>
  );
}

export default Footer;
