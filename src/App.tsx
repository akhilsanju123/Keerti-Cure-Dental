import { useEffect, useState } from 'react';
import { CalendarDays, Phone } from 'lucide-react';
import { phoneLink } from '@/lib/constants';
import type { Go } from '@/lib/constants';
import { Header, Footer } from '@/components/Layout';
import { Home } from '@/pages/Home';
import { About } from '@/pages/About';
import { Treatments, TreatmentDetail } from '@/pages/Treatments';
import { Doctors, DoctorProfile } from '@/pages/Doctors';
import { Gallery, Testimonials } from '@/pages/Gallery';
import { OurServices } from '@/pages/OurServices';
import { ServiceDetail } from '@/pages/ServiceDetail';
import { Blogs, BlogDetail } from '@/pages/Blogs';
import { FaqPage } from '@/pages/FaqPage';
import { Contact } from '@/pages/Contact';
import { Appointment } from '@/pages/Appointment';
import { Legal } from '@/pages/Legal';
import { AdminLogin, AdminSection, Admin } from '@/pages/Admin';
import { NotFound } from '@/pages/NotFound';

function App() {
  const [path, setPath] = useState(window.location.pathname);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handlePopState = () => {
      setPath(window.location.pathname);
      setMenuOpen(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const go: Go = (to: string) => {
    if (to === path) return;
    window.history.pushState({}, '', to);
    setPath(to);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const page = path === '/' ? <Home go={go} />
    : path === '/about-us' ? <About go={go} />
    : path === '/treatments' ? <Treatments go={go} />
    : path.startsWith('/treatments/') ? <TreatmentDetail slug={path.split('/')[2]} go={go} />
    : path === '/our-services' ? <OurServices go={go} />
    : path.startsWith('/our-services/') ? <ServiceDetail slug={path.split('/')[2]} go={go} />
    : path === '/our-doctors' ? <Doctors go={go} />
    : path.startsWith('/our-doctors/') ? <DoctorProfile slug={path.split('/')[2]} go={go} />
    : path === '/smile-gallery' ? <Gallery go={go} />
    : path === '/testimonials' ? <Testimonials go={go} />
    : path === '/blogs' ? <Blogs go={go} />
    : path.startsWith('/blogs/') ? <BlogDetail slug={path.split('/')[2]} go={go} />
    : path === '/faq' ? <FaqPage go={go} />
    : path === '/contact-us' ? <Contact go={go} />
    : path === '/book-appointment' ? <Appointment />
    : path === '/privacy-policy' ? <Legal title="Privacy Policy" />
    : path === '/terms-and-conditions' ? <Legal title="Terms & Conditions" />
    : path === '/admin/login' ? <AdminLogin go={go} />
    : path === '/admin/dashboard' ? <Admin go={go} />
    : path.startsWith('/admin/') ? <AdminSection section={path.split('/')[2]} go={go} />
    : <NotFound go={go} />;

  return (
    <>
      <Header go={go} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main key={path} className="page-shell">{page}</main>
      <Footer go={go} />
      <a className="floating-call" href={phoneLink} aria-label="Call Keerti Cure Dental"><Phone size={20} /></a>
      <div className="mobile-action">
        <button onClick={() => go('/book-appointment')}><CalendarDays size={17} /> Book a visit</button>
        <a href={phoneLink}><Phone size={17} /> Call clinic</a>
      </div>
    </>
  );
}

export default App;
