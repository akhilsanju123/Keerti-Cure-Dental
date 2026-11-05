
import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  ChevronRight,
  Facebook,
  Instagram,
  Youtube,
  Menu,
  Phone,
  X,
  MapPin,
  HeartPulse,
  CalendarDays,
  Sparkles,
  Star,
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
import { services } from "@/services";

type HeaderProps = {
  go: Go;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
};

export function Header({
  go,
  menuOpen,
  setMenuOpen,
}: HeaderProps) {
  const justdialUrl = "https://www.justdial.com/Visakhapatnam/Keerti-Cure-Dental-Dr-Sandeep-K-Near-Carshed-Junction-Signal-Point-Above-Dominos-Pizza-Pothimallayapalem/0891PX891-X891-211129141437-K6U6_BZDET";
  // Replace with the clinic's exact YouTube channel URL when available.
  const youtubeUrl = "https://www.youtube.com/results?search_query=Keerti+Cure+Dental";

  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState(
    typeof window !== "undefined"
      ? window.location.pathname
      : "/"
  );

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const updatePath = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", updatePath);

    return () =>
      window.removeEventListener("popstate", updatePath);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setDropdownOpen(false);
        setServicesOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [menuOpen, setMenuOpen]);

  const navigate = (path: string) => {
    setCurrentPath(path);
    setMenuOpen(false);
    setDropdownOpen(false);
    setServicesOpen(false);
    go(path);
  };

  const scrollToReviews = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
    setServicesOpen(false);

    const findReviews = (attempt = 0) => {
      const section = document.getElementById("reviews");

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        return;
      }

      if (attempt < 50) {
        window.setTimeout(
          () => findReviews(attempt + 1),
          100
        );
      }
    };

    if (window.location.pathname !== "/") {
      setCurrentPath("/");
      go("/");
      window.setTimeout(() => findReviews(), 100);
    } else {
      findReviews();
    }
  };

  const isActive = (path: string) => {
    if (path === "/") return currentPath === "/";

    return (
      currentPath === path ||
      currentPath.startsWith(`${path}/`)
    );
  };

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about-us" },
    { label: "Our Doctors", path: "/our-doctors" },
    { label: "Smile Gallery", path: "/smile-gallery" },
    { label: "Journal", path: "/blogs" },
    { label: "Contact", path: "/contact-us" },
  ];

  return (
    <>
      {/* TOP INFORMATION BAR */}
      <div className="kc-h-topbar">
        <div className="kc-h-container kc-h-topbar-inner">
          <div className="kc-h-topbar-left">
            <a href={phoneLink}>
              <Phone size={14} />
              <span>
                Call Us: <strong>{phone}</strong>
              </span>
            </a>

            <span className="kc-h-top-divider" />

            <a href={phoneLink} className="kc-h-emergency" aria-label="Call for dental emergency">
              <HeartPulse size={14} />
              <span>Dental Emergency</span>
            </a>

            <a
              href={maps}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MapPin size={14} />
              <span>Get Directions</span>
            </a>
          </div>

          <div className="kc-h-topbar-right">
            <span className="kc-h-care-label">
              <HeartPulse size={15} />
              Compassionate Dental Care
            </span>

            <div className="kc-h-top-social">
              <a
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>

              <a
                href={facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>

              <a href={youtubeUrl} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <Youtube size={16} />
              </a>

              <a href={justdialUrl} target="_blank" rel="noopener noreferrer" aria-label="Justdial" title="Justdial">
                <span className="kc-h-justdial-icon" aria-hidden="true">JD</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN HEADER */}
      <header
        className={`kc-h-header ${
          scrolled ? "kc-h-scrolled" : ""
        }`}
      >
        <div className="kc-h-container kc-h-navbar">
          {/* LOGO */}
          <button
            type="button"
            className="kc-h-logo"
            onClick={() => navigate("/")}
            aria-label="Keerti Cure Dental Home"
          >
            <img
              src={logo}
              alt="Keerti Cure Dental"
            />
          </button>

          {/* DESKTOP NAVIGATION */}
          <nav
            className="kc-h-desktop-nav"
            aria-label="Desktop navigation"
          >
            {navItems.slice(0, 2).map((item) => (
              <button
                key={item.path}
                type="button"
                className={`kc-h-nav-link ${
                  isActive(item.path) ? "active" : ""
                }`}
                onClick={() => navigate(item.path)}
              >
                {item.label}
              </button>
            ))}

            {/* TREATMENTS DROPDOWN */}
            <div className="kc-h-dropdown">
              <button
                type="button"
                className={`kc-h-nav-link kc-h-dropdown-trigger ${
                  isActive("/treatments") ? "active" : ""
                }`}
                onClick={() => navigate("/treatments")}
                aria-haspopup="true"
              >
                Treatments
                <ChevronDown size={15} />
              </button>

              <div className="kc-h-dropdown-menu">
                <div className="kc-h-dropdown-header">
                  <span className="kc-h-dropdown-icon">
                    <Sparkles size={19} />
                  </span>

                  <div>
                    <strong>Explore Our Treatments</strong>
                    <p>Personalized care for every smile</p>
                  </div>
                </div>

                <div className="kc-h-dropdown-grid">
                  {treatments.map((treatment) => (
                    <button
                      key={treatment.slug}
                      type="button"
                      onClick={() =>
                        navigate(
                          `/treatments/${treatment.slug}`
                        )
                      }
                    >
                      <span>{treatment.title}</span>
                      <ChevronRight size={15} />
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  className="kc-h-dropdown-all"
                  onClick={() => navigate("/treatments")}
                >
                  View All Treatments
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </div>

            {/* OUR SERVICES DROPDOWN */}
            <div className="kc-h-dropdown">
              <button
                type="button"
                className={`kc-h-nav-link kc-h-dropdown-trigger ${
                  isActive("/our-services") ? "active" : ""
                }`}
                onClick={() => navigate("/our-services")}
                aria-haspopup="true"
              >
                Our Services
                <ChevronDown size={15} />
              </button>

              <div className="kc-h-dropdown-menu">
                <div className="kc-h-dropdown-header">
                  <span className="kc-h-dropdown-icon">
                    <Sparkles size={19} />
                  </span>

                  <div>
                    <strong>Our Services</strong>
                    <p>Explore what we offer</p>
                  </div>
                </div>

                <div className="kc-h-dropdown-grid">
                  {services.map((service) => (
                    <button
                      key={service.slug}
                      type="button"
                      onClick={() =>
                        navigate(
                          `/our-services/${service.slug}`
                        )
                      }
                    >
                      <span>{service.name}</span>
                      <ChevronRight size={15} />
                    </button>
                  ))}
                  {!services.some(service => service.slug === 'oral-cavity-tongue') && (
                    <button type="button" onClick={() => navigate('/our-services/oral-cavity-tongue')}>
                      <span>Oral Cavity &amp; Tongue</span>
                      <ChevronRight size={15} />
                    </button>
                  )}
                </div>

                <button
                  type="button"
                  className="kc-h-dropdown-all"
                  onClick={() => navigate("/our-services")}
                >
                  View All Services
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </div>

            {navItems.slice(2).map((item) => (
              <button
                key={item.path}
                type="button"
                className={`kc-h-nav-link ${
                  isActive(item.path) ? "active" : ""
                }`}
                onClick={() => navigate(item.path)}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* DESKTOP ACTION BUTTONS */}
          <div className="kc-h-header-actions">
            {/* REVIEWS BUTTON */}
            <button
              type="button"
              className="kc-h-reviews-btn"
              onClick={scrollToReviews}
              aria-label="View patient reviews"
            >
              <Star size={17} />
              <span>Reviews</span>
            </button>

            {/* BOOK APPOINTMENT BUTTON */}
            <button
              type="button"
              className="kc-h-book-btn"
              onClick={() => navigate("/book-appointment")}
            >
              <CalendarDays size={17} />
              <span>Book Appointment</span>
              <ArrowUpRight size={16} />
            </button>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <button
            type="button"
            className="kc-h-menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="kc-h-mobile-navigation"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* MOBILE OVERLAY */}
      <button
        type="button"
        className={`kc-h-overlay ${
          menuOpen ? "open" : ""
        }`}
        onClick={() => setMenuOpen(false)}
        aria-label="Close navigation"
        tabIndex={menuOpen ? 0 : -1}
      />

      {/* MOBILE NAVIGATION */}
      <aside
        id="kc-h-mobile-navigation"
        className={`kc-h-mobile-nav ${
          menuOpen ? "open" : ""
        }`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        <div className="kc-h-mobile-head">
          <img src={logo} alt="Keerti Cure Dental" />

          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={23} />
          </button>
        </div>

        <div className="kc-h-mobile-links">
          {navItems.slice(0, 2).map((item) => (
            <button
              key={item.path}
              type="button"
              className={isActive(item.path) ? "active" : ""}
              onClick={() => navigate(item.path)}
            >
              {item.label}
              <ChevronRight size={17} />
            </button>
          ))}

          {/* MOBILE TREATMENTS */}
          <div className="kc-h-mobile-dropdown">
            <button
              type="button"
              className={`kc-h-mobile-dropdown-toggle ${
                isActive("/treatments") ? "active" : ""
              }`}
              onClick={() => setDropdownOpen(!dropdownOpen)}
              aria-expanded={dropdownOpen}
            >
              Treatments
              <ChevronDown
                size={17}
                className={dropdownOpen ? "rotate" : ""}
              />
            </button>

            {dropdownOpen && (
              <div className="kc-h-mobile-submenu">
                <button
                  type="button"
                  onClick={() => navigate("/treatments")}
                >
                  All Treatments
                </button>

                {treatments.map((item) => (
                  <button
                    key={item.slug}
                    type="button"
                    onClick={() =>
                      navigate(`/treatments/${item.slug}`)
                    }
                  >
                    {item.title}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* MOBILE OUR SERVICES */}
          <div className="kc-h-mobile-dropdown">
            <button
              type="button"
              className={`kc-h-mobile-dropdown-toggle ${
                isActive("/our-services") ? "active" : ""
              }`}
              onClick={() => setServicesOpen(!servicesOpen)}
              aria-expanded={servicesOpen}
            >
              Our Services
              <ChevronDown
                size={17}
                className={servicesOpen ? "rotate" : ""}
              />
            </button>

            {servicesOpen && (
              <div className="kc-h-mobile-submenu">
                <button
                  type="button"
                  onClick={() => navigate("/our-services")}
                >
                  All Services
                </button>

                {services.map((service) => (
                  <button
                    key={service.slug}
                    type="button"
                    onClick={() =>
                      navigate(
                        `/our-services/${service.slug}`
                      )
                    }
                  >
                    {service.name}
                  </button>
                ))}
                {!services.some(service => service.slug === 'oral-cavity-tongue') && (
                  <button type="button" onClick={() => navigate('/our-services/oral-cavity-tongue')}>
                    Oral Cavity &amp; Tongue
                  </button>
                )}
              </div>
            )}
          </div>

          {navItems.slice(2).map((item) => (
            <button
              key={item.path}
              type="button"
              className={isActive(item.path) ? "active" : ""}
              onClick={() => navigate(item.path)}
            >
              {item.label}
              <ChevronRight size={17} />
            </button>
          ))}

          {/* MOBILE REVIEWS */}
          <button
            type="button"
            className="kc-h-mobile-reviews-link"
            onClick={scrollToReviews}
          >
            <span className="kc-h-mobile-review-label">
              <Star size={17} />
              Reviews
            </span>
            <ChevronRight size={17} />
          </button>
        </div>

        <div className="kc-h-mobile-bottom">
          <button
            type="button"
            className="kc-h-mobile-book"
            onClick={() => navigate("/book-appointment")}
          >
            <CalendarDays size={18} />
            Book an Appointment
            <ArrowRight size={17} />
          </button>

          <a href={phoneLink} className="kc-h-mobile-call">
            <Phone size={17} />
            {phone}
          </a>

          <div className="kc-h-mobile-social">
            <a
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>

            <a
              href={facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>

            <a href={youtubeUrl} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <Youtube size={18} />
            </a>

            <a href={justdialUrl} target="_blank" rel="noopener noreferrer" aria-label="Justdial" title="Justdial">
              <span className="kc-h-justdial-icon" aria-hidden="true">JD</span>
            </a>
          </div>
        </div>
      </aside>

      {/* COMPONENT STYLES */}
      <style>{`
        .kc-h-topbar,
        .kc-h-header,
        .kc-h-mobile-nav {
          --kc-teal: #087f82;
          --kc-teal-light: #0a9396;
          --kc-dark: #102c3b;
          --kc-muted: #64748b;
          font-family: inherit;
        }

        .kc-h-topbar *,
        .kc-h-header *,
        .kc-h-mobile-nav * {
          box-sizing: border-box;
        }

        .kc-h-container {
          width: min(96%, 1440px);
          margin: 0 auto;
        }

        /* TOP BAR */
        .kc-h-topbar {
          background: #087f82;
          color: #ffffff;
          height: 39px;
          position: relative;
          z-index: 101;
        }

        .kc-h-topbar-inner {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .kc-h-topbar-left,
        .kc-h-topbar-right {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .kc-h-topbar a,
        .kc-h-care-label {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-size: 12px;
          color: #eafffd;
          text-decoration: none;
          white-space: nowrap;
        }

        .kc-h-topbar a:hover {
          color: #ffffff;
        }

        .kc-h-top-divider {
          height: 15px;
          width: 1px;
          background: rgba(255,255,255,0.35);
        }

        .kc-h-emergency {
          font-weight: 700;
          transition: opacity 0.25s ease;
        }
        .kc-h-emergency:hover { opacity: 0.85; }

        .kc-h-justdial-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 20px;
          height: 20px;
          border: 1.5px solid currentColor;
          border-radius: 5px;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: -0.5px;
          line-height: 1;
        }

        .kc-h-top-social {
          display: flex;
          gap: 13px;
          align-items: center;
        }

        .kc-h-top-social a {
          transition: transform 0.25s ease;
        }

        .kc-h-top-social a:hover {
          transform: translateY(-2px);
        }

        /* MAIN HEADER */
        .kc-h-header {
          position: sticky;
          top: 0;
          z-index: 100;
          width: 100%;
          background: rgba(255,255,255,0.98);
          border-bottom: 1px solid #e8f0f1;
          transition: box-shadow 0.3s ease;
        }

        .kc-h-header.kc-h-scrolled {
          box-shadow: 0 8px 30px rgba(7,49,61,0.09);
        }

        .kc-h-navbar {
          min-height: 86px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }

        /* LOGO */
        .kc-h-logo {
          flex-shrink: 0;
          background: transparent;
          border: none;
          padding: 0;
          cursor: pointer;
          display: flex;
          align-items: center;
        }

        .kc-h-logo img {
          width: auto;
          max-width: 165px;
          max-height: 66px;
          object-fit: contain;
          transition: transform 0.3s ease;
        }

        .kc-h-logo:hover img {
          transform: scale(1.03);
        }

        /* DESKTOP NAV */
        .kc-h-desktop-nav {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(10px, 1.15vw, 20px);
          flex: 1;
          min-width: 0;
        }

        .kc-h-nav-link {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 12px 0;
          border: none;
          background: none;
          color: #233e4b;
          font-size: 12.5px;
          font-weight: 600;
          cursor: pointer;
          white-space: nowrap;
          transition: color 0.25s ease;
        }

        .kc-h-nav-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 4px;
          width: 0;
          height: 2px;
          border-radius: 5px;
          background: #087f82;
          transition: width 0.3s ease;
        }

        .kc-h-nav-link:hover,
        .kc-h-nav-link.active {
          color: #087f82;
        }

        .kc-h-nav-link:hover::after,
        .kc-h-nav-link.active::after {
          width: 100%;
        }

        /* DESKTOP DROPDOWN */
        .kc-h-dropdown {
          position: relative;
        }

        .kc-h-dropdown-trigger svg {
          transition: transform 0.25s ease;
        }

        .kc-h-dropdown:hover .kc-h-dropdown-trigger svg,
        .kc-h-dropdown:focus-within .kc-h-dropdown-trigger svg {
          transform: rotate(180deg);
        }

        .kc-h-dropdown-menu {
          position: absolute;
          top: calc(100% + 13px);
          left: 50%;
          transform: translate(-50%, 10px);
          width: min(650px, 85vw);
          padding: 22px;
          background: #ffffff;
          border: 1px solid #e1eeec;
          border-radius: 16px;
          box-shadow: 0 22px 55px rgba(9,50,62,0.15);
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          transition: all 0.25s ease;
          z-index: 110;
        }

        .kc-h-dropdown-menu::before {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          height: 17px;
          top: -17px;
        }

        .kc-h-dropdown:hover .kc-h-dropdown-menu,
        .kc-h-dropdown:focus-within .kc-h-dropdown-menu {
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
          transform: translate(-50%, 0);
        }

        .kc-h-dropdown-header {
          display: flex;
          align-items: center;
          gap: 13px;
          padding-bottom: 18px;
          margin-bottom: 14px;
          border-bottom: 1px solid #e8f1f0;
        }

        .kc-h-dropdown-icon {
          width: 43px;
          height: 43px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          background: #e7f7f4;
          color: #087f82;
        }

        .kc-h-dropdown-header strong {
          font-size: 15px;
          color: #143c43;
        }

        .kc-h-dropdown-header p {
          margin: 4px 0 0;
          font-size: 12px;
          color: #71858a;
        }

        .kc-h-dropdown-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 5px 12px;
          max-height: 320px;
          overflow-y: auto;
        }

        .kc-h-dropdown-grid button {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          padding: 12px 13px;
          border: none;
          background: transparent;
          border-radius: 9px;
          color: #334d56;
          text-align: left;
          font-size: 12.5px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .kc-h-dropdown-grid button:hover {
          background: #eaf8f5;
          color: #087f82;
        }

        .kc-h-dropdown-all {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 15px;
          border: none;
          background: transparent;
          color: #087f82;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
        }

        /* DESKTOP ACTION BUTTONS */
        .kc-h-header-actions {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
        }

        /* REVIEWS BUTTON */
        .kc-h-reviews-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 13px 15px;
          border: 1px solid #087f82;
          border-radius: 9px;
          background: #ffffff;
          color: #087f82;
          font-size: 12px;
          font-weight: 700;
          white-space: nowrap;
          cursor: pointer;
          transition:
            background 0.3s ease,
            color 0.3s ease,
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }

        .kc-h-reviews-btn svg {
          fill: none;
          transition: fill 0.3s ease;
        }

        .kc-h-reviews-btn:hover {
          background: #087f82;
          color: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 7px 20px rgba(8,127,130,0.2);
        }

        .kc-h-reviews-btn:hover svg {
          fill: currentColor;
        }

        /* BOOK APPOINTMENT */
        .kc-h-book-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 14px 15px;
          border: none;
          border-radius: 9px;
          background: linear-gradient(
            135deg,
            #087f82,
            #0a9396
          );
          color: #ffffff;
          font-size: 12px;
          font-weight: 700;
          white-space: nowrap;
          cursor: pointer;
          box-shadow: 0 5px 15px rgba(8,127,130,0.15);
          transition: all 0.3s ease;
        }

        .kc-h-book-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 9px 24px rgba(8,127,130,0.25);
        }

        .kc-h-menu-toggle {
          display: none;
          align-items: center;
          justify-content: center;
          width: 43px;
          height: 43px;
          border: 1px solid #d8e9e7;
          border-radius: 9px;
          background: #eff9f7;
          color: #087f82;
          cursor: pointer;
        }

        /* MOBILE OVERLAY */
        .kc-h-overlay {
          position: fixed;
          inset: 0;
          z-index: 199;
          border: none;
          background: rgba(5,24,35,0.55);
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          transition: all 0.3s ease;
        }

        .kc-h-overlay.open {
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
        }

        /* MOBILE DRAWER */
        .kc-h-mobile-nav {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          width: min(370px, 88vw);
          z-index: 200;
          background: #ffffff;
          display: flex;
          flex-direction: column;
          transform: translateX(105%);
          visibility: hidden;
          transition:
            transform 0.35s ease,
            visibility 0.35s;
          box-shadow: -15px 0 50px rgba(0,0,0,0.13);
        }

        .kc-h-mobile-nav.open {
          transform: translateX(0);
          visibility: visible;
        }

        .kc-h-mobile-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 22px 24px;
          border-bottom: 1px solid #e6eeee;
        }

        .kc-h-mobile-head img {
          max-width: 155px;
          max-height: 65px;
          object-fit: contain;
        }

        .kc-h-mobile-head button {
          border: none;
          background: #eaf6f4;
          color: #087f82;
          border-radius: 8px;
          width: 37px;
          height: 37px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .kc-h-mobile-links {
          flex: 1;
          overflow-y: auto;
          padding: 20px 23px;
        }

        .kc-h-mobile-links > button,
        .kc-h-mobile-dropdown-toggle {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 15px 10px;
          border: none;
          border-bottom: 1px solid #edf2f2;
          background: transparent;
          color: #26434b;
          font-size: 14px;
          font-weight: 600;
          text-align: left;
          cursor: pointer;
        }

        .kc-h-mobile-links button.active {
          color: #087f82;
        }

        .kc-h-mobile-dropdown-toggle svg {
          transition: transform 0.3s ease;
        }

        .kc-h-mobile-dropdown-toggle svg.rotate {
          transform: rotate(180deg);
        }

        .kc-h-mobile-submenu {
          background: #f2faf8;
          border-radius: 10px;
          padding: 10px;
          margin: 8px 0;
          max-height: 300px;
          overflow-y: auto;
        }

        .kc-h-mobile-submenu button {
          display: block;
          width: 100%;
          padding: 11px 13px;
          border: none;
          background: transparent;
          color: #3c5960;
          text-align: left;
          font-size: 13px;
          cursor: pointer;
          border-radius: 6px;
        }

        .kc-h-mobile-submenu button:hover {
          background: #e0f3ef;
          color: #087f82;
        }

        /* MOBILE REVIEWS */
        .kc-h-mobile-review-label {
          display: inline-flex;
          align-items: center;
          gap: 9px;
        }

        .kc-h-mobile-reviews-link {
          color: #087f82 !important;
        }

        .kc-h-mobile-reviews-link:hover {
          background: #eff9f7;
        }

        .kc-h-mobile-bottom {
          padding: 22px 24px;
          border-top: 1px solid #e7eeee;
        }

        .kc-h-mobile-book {
          width: 100%;
          padding: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          border: none;
          border-radius: 9px;
          background: #087f82;
          color: #ffffff;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
        }

        .kc-h-mobile-call {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          margin-top: 17px;
          color: #087f82;
          text-decoration: none;
          font-size: 13px;
          font-weight: 600;
        }

        .kc-h-mobile-social {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-top: 18px;
        }

        .kc-h-mobile-social a {
          color: #547078;
          transition: color 0.25s ease;
        }

        .kc-h-mobile-social a:hover {
          color: #087f82;
        }

        /* RESPONSIVE */
        @media (max-width: 1380px) {
          .kc-h-navbar {
            gap: 11px;
          }

          .kc-h-desktop-nav {
            gap: 10px;
          }

          .kc-h-logo img {
            max-width: 145px;
          }

          .kc-h-nav-link {
            font-size: 11.5px;
          }

          .kc-h-book-btn,
          .kc-h-reviews-btn {
            padding: 12px 11px;
            font-size: 11px;
          }
        }

        @media (max-width: 1150px) {
          .kc-h-desktop-nav,
          .kc-h-header-actions {
            display: none;
          }

          .kc-h-menu-toggle {
            display: flex;
          }

          .kc-h-navbar {
            min-height: 74px;
          }
        }

        @media (max-width: 650px) {
          .kc-h-topbar {
            height: 35px;
          }

          .kc-h-topbar-left {
            width: 100%;
            justify-content: center;
            gap: 12px;
          }

          .kc-h-topbar-right {
            display: none;
          }

          .kc-h-topbar a {
            font-size: 10px;
          }

          .kc-h-topbar-left svg {
            width: 12px;
          }

          .kc-h-navbar {
            min-height: 69px;
          }

          .kc-h-logo img {
            max-width: 145px;
            max-height: 55px;
          }

          .kc-h-menu-toggle {
            width: 40px;
            height: 40px;
          }
        }

        /* REVIEWS SECTION SCROLL OFFSET */
        #reviews {
          scroll-margin-top: 110px;
        }

        @media (max-width: 650px) {
          #reviews {
            scroll-margin-top: 85px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .kc-h-header *,
          .kc-h-mobile-nav *,
          .kc-h-overlay {
            transition: none !important;
          }
        }
      `}</style>
    </>
  );
}

export default Header;
