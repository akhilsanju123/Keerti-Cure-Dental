import { ArrowRight, ArrowUpRight, Stethoscope } from 'lucide-react';
import type { Go } from '@/lib/constants';
import { PageHero } from '@/components/Layout';
import { doctorPhoto } from '@/lib/sitePhotos';
import { cmdProfile } from '@/lib/clinicContent';

const doctorStyles = `
.kdr-section {
  padding-top: 70px;
}

.kdr-card {
  display: grid;
  grid-template-columns: minmax(0, 5fr) minmax(0, 6fr);
  gap: 56px;
  align-items: center;
  padding: 40px;
  border: 1px solid #dbe9e5;
  border-radius: 24px;
  background: #ffffff;
  box-shadow: 0 24px 60px rgba(5,47,56,.08);
}

.kdr-photo {
  position: relative;
  aspect-ratio: 4 / 5;
  border-radius: 18px;
  overflow: hidden;
  background: #082f38;
}

.kdr-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  transition: transform .9s cubic-bezier(.22,1,.36,1);
}

.kdr-card:hover .kdr-photo img {
  transform: scale(1.03);
}

.kdr-role {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  border-radius: 999px;
  background: #d7f5eb;
  color: #056b6f;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: .04em;
  text-transform: uppercase;
}

.kdr-name {
  margin: 20px 0 8px;
  color: #082f38;
  font-size: clamp(30px, 4vw, 42px);
  line-height: 1.2;
}

.kdr-qualification {
  margin: 0 0 24px;
  color: #056b6f;
  font-size: 18px;
  font-weight: 600;
}

.kdr-bio {
  margin: 0 0 16px;
  color: #3d5a60;
  font-size: 16px;
  line-height: 1.5;
}

.kdr-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 32px;
}

@media (max-width: 900px) {
  .kdr-card {
    grid-template-columns: 1fr;
    gap: 32px;
    padding: 24px;
  }

  .kdr-photo {
    aspect-ratio: 4 / 4.2;
  }
}

@media (prefers-reduced-motion: reduce) {
  .kdr-photo img {
    transition: none !important;
  }
}
`;

export function Doctors({ go }: { go: Go }) {
  return (
    <>
      <PageHero
        eyebrow="Our doctors"
        title="Meet the doctor behind your care."
        text="Get to know the dentist who will listen to your concerns and plan your treatment with you."
      />
      <style>{doctorStyles}</style>

      <section className="section kdr-section">
        <div className="container">
          <article className="kdr-card">
            <div className="kdr-photo">
              <img src={doctorPhoto} alt="Dr Sandeep Kokkeragadda, MDS" loading="lazy" />
            </div>

            <div>
              <span className="kdr-role">
                <Stethoscope size={16} />
                {cmdProfile.role}
              </span>

              <h2 className="kdr-name">{cmdProfile.name}</h2>
              <p className="kdr-qualification">{cmdProfile.qualification}</p>

              {cmdProfile.paragraphs.map((paragraph, index) => (
                <p className="kdr-bio" key={index}>
                  {paragraph}
                </p>
              ))}

              <div className="kdr-actions">
                <button className="button primary" onClick={() => go('/book-appointment')}>
                  Book a consultation <ArrowRight size={17} />
                </button>
                <button className="text-link" onClick={() => go('/contact-us')}>
                  Ask a question <ArrowUpRight size={17} />
                </button>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}

export function DoctorProfile({ slug, go }: { slug: string; go: Go }) {
  return <><PageHero eyebrow="Verified profile" title="Your care team profile is coming soon." text={`The clinic has not published verified profile information for ${slug.replace(/-/g, ' ')} yet.`} />
    <section className="section"><div className="container empty-state"><div className="empty-icon"><Stethoscope /></div><h2>Only verified clinic information appears here.</h2><p>Qualifications, registration details, languages and availability will be added by the practice before publication.</p><button className="button primary" onClick={() => go('/book-appointment')}>Request a consultation <ArrowRight size={17} /></button></div></section></>;
}
