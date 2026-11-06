import { ArrowRight } from 'lucide-react';
import { PageHero } from '@/components/Layout';
import type { Go } from '@/lib/constants';
import { services } from '@/services';
import { oralCavityTongue } from '@/services/oralCavityTongue';

const allServices = [...services.filter(s => s.slug !== oralCavityTongue.slug), oralCavityTongue];

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

const servicesIndexStyles = `
.os-section { padding: 96px 0; background: #f5faf8; }
.os-container { width: min(1180px, calc(100% - 48px)); margin: 0 auto; }
.os-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 24px; }
.os-card { display: flex; flex-direction: column; padding: 0; border: 1px solid #dbe9e5; border-radius: 20px; background: #ffffff; color: #082f38; font: inherit; text-align: left; overflow: hidden; cursor: pointer; transition: transform .35s ease, box-shadow .35s ease, border-color .35s ease; }
.os-card:hover { transform: translateY(-6px); border-color: #9fd6cc; box-shadow: 0 22px 50px rgba(5,47,56,.1); }
.os-card-image { aspect-ratio: 16 / 10; overflow: hidden; background: #082f38; }
.os-card-image img { width: 100%; height: 100%; object-fit: cover; transition: transform .6s ease; }
.os-card:hover .os-card-image img { transform: scale(1.05); }
.os-card-body { display: flex; flex: 1; flex-direction: column; gap: 10px; padding: 24px; }
.os-card-number { color: #087f83; font-size: 13px; font-weight: 700; letter-spacing: .08em; }
.os-card h2 { margin: 0; color: #082f38; font-size: 21px; }
.os-card p { margin: 0; color: #3d5a60; font-size: 15px; line-height: 1.6; }
.os-card-link { display: inline-flex; align-items: center; gap: 8px; margin-top: auto; padding-top: 8px; color: #056b6f; font-weight: 700; }
@media (prefers-reduced-motion: reduce) { .os-card, .os-card-image img { transition: none !important; } }
`;

export function OurServices({ go }: { go: Go }) {
  return (
    <>
      <style>{servicesIndexStyles}</style>
      <PageHero eyebrow="Our services" title="Care for every part of your smile." text="Choose a service to see what it involves and how it can help you." />
      <section className="os-section">
        <div className="os-container">
          <div className="os-grid">
            {allServices.map((service, index) => (
              <button key={service.slug} type="button" className="os-card" onClick={() => go(`/our-services/${service.slug}`)}>
                <div className="os-card-image">
                  <img src={serviceImage(service.name, service.image)} alt={service.name} loading="lazy" />
                </div>
                <div className="os-card-body">
                  <span className="os-card-number">{String(index + 1).padStart(2, '0')}</span>
                  <h2>{service.name}</h2>
                  <p>{service.description}</p>
                  <span className="os-card-link">Learn more <ArrowRight size={16} /></span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
