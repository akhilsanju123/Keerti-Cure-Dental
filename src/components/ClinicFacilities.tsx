import { CheckCircle2, ScanLine, Sparkles } from 'lucide-react';

const facilityItems = [
  'Digital Imaging',
  'Laser Treatment Equipment',
  'Autoclave Sterilization',
  'Intraoral Cameras',
  'Advanced Anesthesia',
  'Comfortable Recovery Area',
];

const facilityPhotos = [
  {
    src: '/images/slides/image copy 3.png',
    alt: 'Digital dental imaging system at Keerti Cure Dental',
  },
  {
    src: '/images/slides/image copy 4.png',
    alt: 'Modern dental treatment chair at Keerti Cure Dental',
  },
  {
    src: '/images/slides/image copy 5.png',
    alt: 'Keerti Cure Dental clinic treatment room',
  },
  {
    src: '/images/slides/5.jpg.jpeg',
    alt: 'Invisalign clear aligner care',
  },
];

const facilityStyles = `
.cf-section {
  padding: 112px 0;
  background: #f5faf8;
}

.cf-container {
  width: min(1240px, calc(100% - 48px));
  margin: 0 auto;
}

.cf-heading {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, .8fr);
  gap: 48px;
  align-items: end;
  margin-bottom: 48px;
}

.cf-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
  color: #087f83;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: .16em;
}

.cf-heading h2 {
  max-width: 680px;
  margin: 0;
  color: #082f38;
  font-size: clamp(32px, 4.4vw, 58px);
  line-height: 1.12;
}

.cf-heading h2 span {
  color: #087f83;
}

.cf-heading p {
  margin: 0;
  color: #526d72;
  font-size: 17px;
  line-height: 1.7;
}

.cf-layout {
  display: grid;
  grid-template-columns: minmax(0, .88fr) minmax(0, 1.12fr);
  gap: 32px;
  align-items: stretch;
}

.cf-list-card {
  padding: 32px;
  border-radius: 24px;
  background: #082f38;
  box-shadow: 0 24px 60px rgba(5,47,56,.16);
}

.cf-list-card h3 {
  margin: 0 0 24px;
  color: #ffffff;
  font-size: 24px;
}

.cf-list {
  display: grid;
  gap: 14px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.cf-list li {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 18px;
  border: 1px solid rgba(255,255,255,.14);
  border-radius: 12px;
  color: #ffffff;
  font-size: 16px;
  line-height: 1.4;
}

.cf-list li svg {
  flex-shrink: 0;
  color: #7be4cf;
}

.cf-photos {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.cf-photo {
  min-height: 210px;
  overflow: hidden;
  border-radius: 18px;
  background: #dbe9e5;
}

.cf-photo:first-child {
  grid-row: span 2;
  min-height: 436px;
}

.cf-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform .6s cubic-bezier(.22,1,.36,1);
}

.cf-photo:hover img {
  transform: scale(1.045);
}

@media (max-width: 900px) {
  .cf-heading,
  .cf-layout {
    grid-template-columns: 1fr;
  }

  .cf-heading {
    gap: 20px;
  }
}

@media (max-width: 560px) {
  .cf-section {
    padding: 80px 0;
  }

  .cf-container {
    width: min(100% - 32px, 1240px);
  }

  .cf-list-card {
    padding: 24px;
  }

  .cf-photos {
    grid-template-columns: 1fr;
  }

  .cf-photo,
  .cf-photo:first-child {
    grid-row: auto;
    min-height: 240px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .cf-photo img {
    transition: none !important;
  }
}
`;

export function ClinicFacilities() {
  return (
    <section className="cf-section">
      <style>{facilityStyles}</style>

      <div className="cf-container">
        <div className="cf-heading">
          <div>
            <span className="cf-eyebrow">
              <Sparkles size={15} />
              OUR CLINIC
            </span>
            <h2>Modern technology. <span>Comfortable care.</span></h2>
          </div>
          <p>
            Every detail of our clinic is designed to make your visit feel safe,
            clear and comfortable, from advanced diagnosis to thoughtful recovery.
          </p>
        </div>

        <div className="cf-layout">
          <div className="cf-list-card">
            <h3>Technology &amp; Patient Comfort</h3>
            <ul className="cf-list">
              {facilityItems.map(item => (
                <li key={item}>
                  <CheckCircle2 size={20} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="cf-photos">
            {facilityPhotos.map(photo => (
              <div className="cf-photo" key={photo.src}>
                <img src={photo.src} alt={photo.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
