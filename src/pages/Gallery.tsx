import { useEffect, useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, MessageCircle, X, ZoomIn, Instagram, Youtube, ArrowUpRight } from 'lucide-react';
import type { Go } from '@/lib/constants';
import { PageHero } from '@/components/Layout';

const galleryImageNames = [
  '01 (1).jpg.jpeg',
  '001 (1).jpg.jpeg',
  '1 (2).jpg.jpeg',
  '001 (2).jpg.jpeg',
  '1 (6).jpg.jpeg',
  '1.jpg.jpeg',
  '2 (1).jpg.jpeg',
  '002 (1).jpg.jpeg',
  '2 (2).jpg.jpeg',
  '002 (2).jpg.jpeg',
  '2 (4).jpg.jpeg',
  '2 (5).jpg.jpeg',
  '2.jpg.jpeg',
  '02.jpg.jpeg',
  '3 (1).jpg.jpeg',
  '003 (2).jpg.jpeg',
  '3.jpg.jpeg',
  '03.jpg.jpeg',
  '4_(1).jpg.jpeg',
  '4_(2).jpg.jpeg',
  '4_(3).jpg.jpeg',
  '4.jpg.jpeg',
  '04.jpg.jpeg',
  '004.jpg.jpeg',
  '5_(2).jpg.jpeg',
  '5_(3).jpg.jpeg',
  '5_(4).jpg.jpeg',
  '5_(6).jpg.jpeg',
  '5.jpg.jpeg',
  '6 (1).jpg.jpeg',
  '6 (2).jpg.jpeg',
  '6 (3).jpg.jpeg',
  '6.jpg.jpeg',
  '7 (1).jpg.jpeg',
  '7 (3).jpg.jpeg',
  '7 (4).jpg.jpeg',
  '7 (5).jpg.jpeg',
  '8 (2).jpg.jpeg',
  '10.jpg.jpeg',
  '12 (1).jpg.jpeg',
  '12.jpg.jpeg',
  '13 (1).jpg.jpeg',
  '16.jpg.jpeg',
  '50.jpeg',
  '66.jpeg',
  '1636976941832_003.jpg.jpeg',
  '1636976941851_001.jpg.jpeg',
  '1636976941859_002.jpg.jpeg',
  'Braces&Orthodontics.jpeg',
  'Crowns&Bridges.jpeg',
  'image copy 3.png',
  'image copy 4.png',
  'image copy 5.png',
  'sir photo.jpeg',
  'WhatsApp_Image_2026-11-02_at_11.50.04_AM.jpeg',
  'WhatsApp_Image_2026-11-02_at_11.39.01_AM copy.jpeg',
  'WhatsApp_Image_2026-11-02_at_11.49.50_AM copy.jpeg',
  'img gallery.jpeg',
  'Teeth k.jpeg',
] as const;

const galleryImages = galleryImageNames.map((name, index) => ({
  src: `/images/slides/${encodeURIComponent(name)}`,
  alt: `Keerti Cure Dental gallery image ${index + 1}`,
}));

const videos = [
  {
    platform: 'Instagram',
    title: 'Keerti Cure Dental • Instagram Reel',
    embed: 'https://www.instagram.com/reel/DVtkZAegTqx/embed/',
    link: 'https://www.instagram.com/reel/DVtkZAegTqx/',
    icon: Instagram,
  },
  {
    platform: 'YouTube',
    title: 'Keerti Cure Dental • YouTube Short 01',
    embed: 'https://www.youtube-nocookie.com/embed/5vTPyeF66Lg',
    link: 'https://youtube.com/shorts/5vTPyeF66Lg',
    icon: Youtube,
  },
  {
    platform: 'YouTube',
    title: 'Keerti Cure Dental • YouTube Short 02',
    embed: 'https://www.youtube-nocookie.com/embed/hqzkcVczrhY',
    link: 'https://youtube.com/shorts/hqzkcVczrhY',
    icon: Youtube,
  },
];

const galleryStyles = `
.kg-section { padding-top: 70px; }
.kg-card[hidden] { display: none; }
.kg-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 24px; }
.kg-card { position: relative; aspect-ratio: 4 / 3; padding: 0; border: 1px solid #e1eeea; border-radius: 18px; overflow: hidden; background: #082f38; cursor: zoom-in; box-shadow: 0 14px 36px rgba(5,47,56,.08); transition: transform .45s cubic-bezier(.22,1,.36,1), box-shadow .45s ease; }
.kg-card img { width: 100%; height: 100%; object-fit: cover; transition: transform .9s cubic-bezier(.22,1,.36,1); }
.kg-card:hover { transform: translateY(-6px); box-shadow: 0 26px 56px rgba(5,47,56,.18); }
.kg-card:hover img { transform: scale(1.06); }
.kg-card-overlay { position: absolute; inset: 0; display: grid; place-items: center; background: linear-gradient(180deg, rgba(5,37,45,0) 40%, rgba(5,37,45,.55) 100%); color: #fff; opacity: 0; transition: opacity .35s ease; }
.kg-card-overlay svg { padding: 12px; border-radius: 50%; background: rgba(8,127,131,.9); box-sizing: content-box; }
.kg-card:hover .kg-card-overlay, .kg-card:focus-visible .kg-card-overlay { opacity: 1; }
.kg-card:focus-visible { outline: 3px solid #7be4cf; outline-offset: 4px; }
.kg-cta { display: flex; align-items: center; justify-content: space-between; gap: 24px; margin-top: 56px; padding: 28px 32px; border-radius: 16px; background: #d7f5eb; color: #082f38; }
.kg-cta p { margin: 0; color: #082f38; font-size: 15px; font-weight: 600; }
.kg-lightbox { position: fixed; z-index: 1000; inset: 0; display: grid; place-items: center; padding: 24px; background: rgba(3,20,24,.94); animation: kgFade .3s ease both; }
.kg-lightbox img { max-width: min(1100px, 88vw); max-height: 84vh; object-fit: contain; border-radius: 14px; box-shadow: 0 30px 80px rgba(0,0,0,.45); animation: kgZoom .4s cubic-bezier(.22,1,.36,1) both; }
.kg-lb-btn { position: absolute; display: grid; place-items: center; width: 50px; height: 50px; border: 1px solid rgba(255,255,255,.35); border-radius: 50%; background: rgba(255,255,255,.1); color: #fff; cursor: pointer; transition: background .3s ease, transform .3s ease; }
.kg-lb-btn:hover { background: #087f83; transform: scale(1.08); }
.kg-lb-close { top: 24px; right: 24px; }
.kg-lb-prev { left: 24px; top: 50%; transform: translateY(-50%); }
.kg-lb-prev:hover { transform: translateY(-50%) scale(1.08); }
.kg-lb-next { right: 24px; top: 50%; transform: translateY(-50%); }
.kg-lb-next:hover { transform: translateY(-50%) scale(1.08); }
@keyframes kgFade { from { opacity: 0; } to { opacity: 1; } }
@keyframes kgZoom { from { opacity: 0; transform: scale(.94); } to { opacity: 1; transform: scale(1); } }

/* Gallery video showcase */
.kg-videos { padding: 90px 0 105px; background: linear-gradient(180deg, #f4fbf8 0%, #ffffff 100%); }
.kg-videos-heading { max-width: 690px; margin: 0 auto 44px; text-align: center; }
.kg-videos-eyebrow { display: inline-flex; align-items: center; gap: 9px; color: #087f83; font-size: 11px; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; }
.kg-videos-heading h2 { margin: 14px 0; color: #082f38; font-size: clamp(30px, 4vw, 46px); font-weight: 800; line-height: 1.2; letter-spacing: -.04em; }
.kg-videos-heading h2 span { color: #087f83; }
.kg-videos-heading p { color: #58747a; font-size: 15px; line-height: 1.8; }
.kg-video-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 26px; max-width: 1050px; margin: 0 auto; }
.kg-video-card { min-width: 0; padding: 12px; border: 1px solid #dcece7; border-radius: 22px; background: #fff; box-shadow: 0 15px 45px rgba(5,47,56,.08); transition: transform .45s cubic-bezier(.22,1,.36,1), box-shadow .45s ease, border-color .35s ease; }
.kg-video-card:hover { transform: translateY(-10px); border-color: #a1ddd1; box-shadow: 0 26px 65px rgba(5,47,56,.15); }
.kg-video-frame { position: relative; aspect-ratio: 9 / 16; overflow: hidden; border-radius: 14px; background: #082f38; }
.kg-video-frame iframe { display: block; width: 100%; height: 100%; border: 0; }
.kg-video-meta { display: flex; align-items: center; justify-content: space-between; gap: 10px; padding: 17px 7px 5px; }
.kg-video-meta-left { display: flex; align-items: center; gap: 10px; min-width: 0; }
.kg-video-icon { display: grid; place-items: center; width: 37px; height: 37px; flex: 0 0 37px; border-radius: 10px; background: #e4f7f0; color: #087f83; }
.kg-video-meta strong { display: block; color: #082f38; font-size: 13px; line-height: 1.4; }
.kg-video-meta small { display: block; margin-top: 2px; color: #668087; font-size: 11px; }
.kg-video-open { display: grid; place-items: center; width: 34px; height: 34px; flex: 0 0 34px; border-radius: 9px; color: #087f83; text-decoration: none; transition: color .3s ease, background .3s ease, transform .3s ease; }
.kg-video-open:hover { background: #087f83; color: white; transform: translate(2px,-2px); }
.kg-video-note { margin: 25px 0 0; text-align: center; color: #6c8388; font-size: 12px; }
@media (max-width: 800px) { .kg-video-grid { grid-template-columns: repeat(2, minmax(0,1fr)); } }
@media (max-width: 600px) {
  .kg-cta { flex-direction: column; align-items: flex-start; padding: 24px; }
  .kg-lb-btn { width: 42px; height: 42px; }
  .kg-lb-close { top: 14px; right: 14px; }
  .kg-lb-prev { left: 10px; top: auto; bottom: 22px; transform: none; }
  .kg-lb-next { right: 10px; top: auto; bottom: 22px; transform: none; }
  .kg-lb-prev:hover, .kg-lb-next:hover { transform: scale(1.08); }
  .kg-lightbox img { max-height: 72vh; }
  .kg-videos { padding: 65px 0 75px; }
  .kg-video-grid { grid-template-columns: 1fr; max-width: 390px; gap: 22px; }
  .kg-videos-heading { margin-bottom: 32px; }
}
@media (prefers-reduced-motion: reduce) {
  .kg-card, .kg-card img, .kg-lightbox, .kg-lightbox img, .kg-video-card, .kg-video-open { transition: none !important; animation: none !important; }
}
`;

export function Gallery({ go }: { go: Go }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const count = galleryImages.length;
  const isOpen = activeIndex !== null;

  useEffect(() => {
    if (!isOpen) return;

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveIndex(null);
      if (event.key === 'ArrowRight') setActiveIndex(i => (i === null ? i : (i + 1) % count));
      if (event.key === 'ArrowLeft') setActiveIndex(i => (i === null ? i : (i - 1 + count) % count));
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKey);
    };
  }, [isOpen, count]);

  const activeImage = activeIndex === null ? null : galleryImages[activeIndex];

  const step = (direction: 1 | -1) =>
    setActiveIndex(i => (i === null ? null : (i + direction + count) % count));

  return (
    <>
      <PageHero eyebrow="Smile stories" title="Every smile has a story." text="A glimpse inside Keerti Cure Dental, where comfort, care and clear conversations come first." />
      <style>{galleryStyles}</style>

      <section className="section kg-section">
        <div className="container">
          <div className="kg-grid">
            {galleryImages.map((image, index) => (
              <button
                type="button"
                key={image.src}
                className="kg-card"
                onClick={() => setActiveIndex(index)}
                aria-label={`Open ${image.alt}`}
              >
                <img src={image.src} alt={image.alt} loading="lazy" onError={event => { event.currentTarget.closest(".kg-card")?.setAttribute("hidden", ""); }} />
                <span className="kg-card-overlay"><ZoomIn size={22} /></span>
              </button>
            ))}
          </div>

          <div className="kg-cta">
            <p>Want to see your own smile story here? Ask our team how to get started.</p>
            <button className="text-link" onClick={() => go('/contact-us')}>
              Ask the clinic a question <ArrowRight size={17} />
            </button>
          </div>
        </div>
      </section>

      <section className="kg-videos" aria-labelledby="kg-video-heading">
        <div className="container">
          <div className="kg-videos-heading">
            <span className="kg-videos-eyebrow"><Instagram size={16} /> SOCIAL MEDIA HIGHLIGHTS</span>
            <h2 id="kg-video-heading">Watch Our <span>Latest Videos</span></h2>
            <p>Explore moments from Keerti Cure Dental through our Instagram Reels and YouTube Shorts.</p>
          </div>
          <div className="kg-video-grid">
            {videos.map(video => {
              const Icon = video.icon;
              return (
                <article className="kg-video-card" key={video.embed}>
                  <div className="kg-video-frame">
                    <iframe
                      src={video.embed}
                      title={video.title}
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      referrerPolicy="strict-origin-when-cross-origin"
                    />
                  </div>
                  <div className="kg-video-meta">
                    <div className="kg-video-meta-left">
                      <span className="kg-video-icon"><Icon size={19} /></span>
                      <div><strong>{video.platform}</strong><small>Watch our latest short</small></div>
                    </div>
                    <a className="kg-video-open" href={video.link} target="_blank" rel="noopener noreferrer" aria-label={`Open ${video.title} on ${video.platform}`}>
                      <ArrowUpRight size={19} />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
          <p className="kg-video-note">If an embedded video is unavailable, use the arrow icon to watch it on its original platform.</p>
        </div>
      </section>

      {activeImage && (
        <div className="kg-lightbox" role="dialog" aria-modal="true" aria-label="Photo viewer" onClick={() => setActiveIndex(null)}>
          <button type="button" className="kg-lb-btn kg-lb-close" aria-label="Close photo" onClick={() => setActiveIndex(null)}><X size={22} /></button>
          <button type="button" className="kg-lb-btn kg-lb-prev" aria-label="Previous photo" onClick={event => { event.stopPropagation(); step(-1); }}><ChevronLeft size={26} /></button>
          <img src={activeImage.src} alt={activeImage.alt} onClick={event => event.stopPropagation()} />
          <button type="button" className="kg-lb-btn kg-lb-next" aria-label="Next photo" onClick={event => { event.stopPropagation(); step(1); }}><ChevronRight size={26} /></button>
        </div>
      )}
    </>
  );
}

export function Testimonials({ go }: { go: Go }) {
  return <><PageHero eyebrow="Patient experiences" title="What patients choose to share." text="Real experiences belong to real people. Approved testimonials will be added here by the clinic." />
    <section className="section"><div className="container empty-state"><div className="empty-icon"><MessageCircle /></div><h2>Patient stories are coming soon.</h2><p>We do not invent reviews or ratings. This space will only show approved patient feedback.</p><button className="button primary" onClick={() => go('/book-appointment')}>Start your own care journey <ArrowRight size={17} /></button></div></section></>;
}