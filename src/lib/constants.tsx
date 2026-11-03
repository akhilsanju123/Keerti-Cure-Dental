import type { ComponentType } from 'react';
import {
  Award, HeartPulse, Microscope, ShieldCheck, Sparkles, Star, Stethoscope,
} from 'lucide-react';
import { photoAt } from '@/lib/sitePhotos';

export const logo = '/images/logo/24de759c-36f1-4bdc-b06c-fd624dedb942.png';
export const phone = '099083 73011 / 081423 38011';
export const phoneLink = 'tel:+919908373011';
export const maps = 'https://share.google/4R1W04zEVRrbjvf3h';
export const instagram = 'https://www.instagram.com/keerticuredental/';
export const facebook = 'https://www.facebook.com/keerticuredental';
export const heroImage = photoAt(6);
export const careImage = photoAt(7);

function SmileIcon() { return <Sparkles size={24} />; }

export type IconType = ComponentType<{ size?: number | string }>;

export type Treatment = {
  slug: string;
  title: string;
  text: string;
  icon: IconType;
  color: string;
};

export const treatments: Treatment[] = [
  { slug: 'general-dentistry', title: 'General Dentistry', text: 'Thoughtful everyday care for healthier teeth and gums.', icon: HeartPulse, color: 'teal' },
  { slug: 'root-canal-treatment', title: 'Root Canal Treatment', text: 'Care for teeth affected by deeper infection or damage.', icon: Microscope, color: 'blue' },
  { slug: 'dental-implants', title: 'Dental Implants', text: 'Explore options for restoring missing teeth with your dentist.', icon: ShieldCheck, color: 'gold' },
  { slug: 'braces-and-orthodontics', title: 'Braces & Orthodontics', text: 'Guidance for creating a comfortable, confident smile.', icon: Sparkles, color: 'teal' },
  { slug: 'clear-aligners', title: 'Clear Aligners', text: 'A discreet way to discuss smile alignment goals.', icon: SmileIcon, color: 'blue' },
  { slug: 'teeth-whitening', title: 'Teeth Whitening', text: 'Discuss a brighter smile with a personalised consultation.', icon: Star, color: 'gold' },
  { slug: 'smile-designing', title: 'Smile Designing', text: 'Plan a smile that feels natural, balanced and yours.', icon: Award, color: 'teal' },
  { slug: 'crowns-and-bridges', title: 'Crowns & Bridges', text: 'Learn about restorative options for damaged teeth.', icon: Stethoscope, color: 'blue' },
];

export const faqs: [string, string][] = [
  ['How can I book an appointment?', 'You can request a consultation online or call the clinic directly on 099083 73011. A request is subject to confirmation by the clinic team.'],
  ['What happens at a first consultation?', 'Your dentist will listen to your concerns, review your oral health and explain suitable next steps in clear, patient-friendly language.'],
  ['How often should I visit a dentist?', 'A suitable schedule depends on your oral health and treatment needs. Your dentist can recommend a review interval during your consultation.'],
  ['Can I ask about tooth pain?', 'Yes. Use the appointment form or call the clinic so the team can understand your concern and guide you on the next step.'],
  ['Where can I find the clinic?', 'Use the Google Maps directions link on our contact page or call the clinic for the latest location information.'],
];

export type Go = (to: string) => void;
