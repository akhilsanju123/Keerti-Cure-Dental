import { FormEvent, useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { treatments, phoneLink, phone } from '@/lib/constants';

export function Success({ title, text }: { title: string; text: string }) {
  return <div className="success"><div className="success-icon"><Check /></div><h2>{title}</h2><p>{text}</p></div>;
}

export function AppointmentForm({ compact = false }: { compact?: boolean }) {
  const [sent, setSent] = useState<string | null>(null);
  const [error, setError] = useState('');
  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      full_name: data.get('fullName'), phone: data.get('phone'), email: data.get('email') || null,
      treatment_interest: data.get('treatment'), preferred_doctor: data.get('doctor') || null,
      preferred_date: data.get('date'), preferred_time: data.get('time'),
      message: data.get('message') || null, privacy_consent: true,
    };
    if (supabase) {
      const result = await supabase.from('appointments').insert(payload).select('booking_reference').maybeSingle();
      if (result.error) { setError('We could not send that request right now. Please call the clinic instead.'); return; }
      setSent(result.data?.booking_reference ?? 'KCD-REQUEST');
    } else setSent('KCD-REQUEST');
    form.reset();
  };
  if (sent) return <Success title="Request received" text={`Your reference is ${sent}. The clinic team will contact you to confirm the details.`} />;
  return <form className={compact ? 'compact-form' : ''} onSubmit={submit}>
    {!compact && <><span className="eyebrow">Appointment request</span><h2>Request a consultation</h2></>}
    <div className="form-row"><label>Full name<input name="fullName" required placeholder="Your name" /></label><label>Phone number<input name="phone" required placeholder="Your phone number" /></label></div>
    {!compact && <div className="form-row"><label>Email <span>(optional)</span><input name="email" type="email" placeholder="you@example.com" /></label><label>Treatment interest<select name="treatment" required><option value="">Select a treatment</option>{treatments.map(t => <option key={t.slug}>{t.title}</option>)}</select></label></div>}
    {compact
      ? <div className="form-row compact-row"><label>Treatment<select name="treatment" required><option value="">What can we help with?</option>{treatments.map(t => <option key={t.slug}>{t.title}</option>)}</select></label><label>Preferred date<input name="date" type="date" required /></label><button className="button primary" type="submit">Request visit <ArrowRight size={16} /></button></div>
      : <><div className="form-row"><label>Preferred date<input name="date" type="date" required /></label><label>Preferred time<select name="time" required><option value="">Choose a time</option><option>Morning</option><option>Afternoon</option><option>Evening</option></select></label></div><label>Message <span>(optional)</span><textarea name="message" rows={3} placeholder="Anything you would like us to know?" /></label><label className="consent"><input type="checkbox" required /> I agree that the clinic may use these details to respond to my appointment request.</label><button className="button primary" type="submit">Send appointment request <ArrowRight size={16} /></button></>}
    {error && <p className="error-text">{error}</p>}
  </form>;
}

export { phoneLink, phone };
