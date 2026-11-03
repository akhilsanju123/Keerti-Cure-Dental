import { ArrowRight } from 'lucide-react';
import type { Go } from '@/lib/constants';
import { PageHero } from '@/components/Layout';
import { Faq } from '@/components/Faq';

export function FaqPage({ go }: { go: Go }) {
  return <><PageHero eyebrow="Questions, answered" title="Frequently asked questions." text="A few helpful starting points. For personalised advice, please request a consultation." />
    <section className="section"><div className="container faq-wrap"><Faq /><div className="faq-cta"><h3>Still have a question?</h3><p>Our team is here to help you find the right next step.</p><button className="button primary" onClick={() => go('/contact-us')}>Contact the clinic <ArrowRight size={16} /></button></div></div></section></>;
}
