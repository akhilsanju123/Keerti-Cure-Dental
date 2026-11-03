import { Check, Phone } from 'lucide-react';
import { phoneLink, phone } from '@/lib/constants';
import { PageHero } from '@/components/Layout';
import { AppointmentForm } from '@/components/AppointmentForm';

export function Appointment() {
  return <><PageHero eyebrow="Your next step" title="Request an appointment." text="Share a few details and the clinic team will contact you to confirm availability. Your request is not a confirmed appointment until the clinic responds." />
    <section className="section"><div className="container booking-layout"><div className="booking-side"><span className="eyebrow">A calmer way to begin</span><h2>Tell us what you would like to discuss.</h2><p>Whether you have a specific concern or simply want to understand your options, your first visit starts with a conversation.</p><ul className="check-list"><li><Check /> Choose a preferred date and time</li><li><Check /> Share the treatment you are curious about</li><li><Check /> Receive a booking reference after submission</li></ul><div className="callout"><Phone size={18} /><span>Prefer to speak with us?<a href={phoneLink}>{phone}</a></span></div></div><div className="form-card"><AppointmentForm /></div></div></section></>;
}
