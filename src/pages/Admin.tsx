import { ArrowRight, ShieldCheck } from 'lucide-react';
import type { Go } from '@/lib/constants';
import { PageHero } from '@/components/Layout';

export function AdminLogin({ go }: { go: Go }) {
  return <><PageHero eyebrow="Secure workspace" title="Clinic team sign-in." text="The administration area is reserved for authorised Keerti Cure Dental staff." />
    <section className="section"><div className="container form-card admin-login"><span className="eyebrow">Admin access</span><h2>Sign-in will be connected here.</h2><p>Before staff access is enabled, patient requests remain private and inaccessible through the public website.</p><button className="button primary" onClick={() => go('/')}>Return to public site <ArrowRight size={16} /></button></div></section></>;
}

export function AdminSection({ section, go }: { section: string; go: Go }) {
  const labels: Record<string, string> = { appointments: 'Appointment management', treatments: 'Treatment management', doctors: 'Doctor management', blogs: 'Blog management', gallery: 'Gallery management', testimonials: 'Testimonials management', messages: 'Contact enquiries', settings: 'Website settings' };
  const title = labels[section] ?? 'Clinic management';
  return <><PageHero eyebrow="Practice workspace" title={title} text="This management area is ready for verified clinic staff and approved content workflows." />
    <section className="section"><div className="container empty-state"><div className="empty-icon"><ShieldCheck /></div><h2>Staff access is not connected yet.</h2><p>Once the clinic administrator account is connected, this page can manage verified content without exposing patient data publicly.</p><button className="button primary" onClick={() => go('/admin/dashboard')}>Back to dashboard <ArrowRight size={16} /></button></div></section></>;
}

export function Admin({ go }: { go: Go }) {
  return <><PageHero eyebrow="Practice workspace" title="A clear view of your clinic." text="The administration area is ready for authenticated clinic staff and verified content workflows." />
    <section className="section"><div className="container dashboard"><div className="dashboard-head"><div><span className="eyebrow">Admin preview</span><h2>Keep the patient journey moving.</h2></div><button className="button primary" onClick={() => go('/book-appointment')}>View public booking <ArrowRight size={16} /></button></div><div className="stats">{[['00', 'Appointment requests'], ['00', 'Contact enquiries'], ['00', 'Published treatments'], ['00', 'Published articles']].map(([n, l]) => <div className="stat" key={l}><strong>{n}</strong><span>{l}</span></div>)}</div><div className="admin-notice"><ShieldCheck /><div><h3>Staff sign-in is required.</h3><p>Connect your clinic administrator account before managing patient requests or publishing content. Public pages never expose submitted patient details.</p></div></div></div></section></>;
}
