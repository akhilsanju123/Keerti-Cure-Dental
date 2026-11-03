import { phone } from '@/lib/constants';
import { PageHero } from '@/components/Layout';

export function Legal({ title }: { title: string }) {
  return <><PageHero eyebrow="Keerti Cure Dental" title={title} text="Clear information about using this website and connecting with the clinic." />
    <section className="section legal"><div className="container narrow"><h2>Information for visitors</h2><p>This page is provided as a clear starting point for website visitors. Clinic-specific legal wording, data retention details and the final verified contact information should be reviewed and published by the practice before launch.</p><h3>General information</h3><p>Content on this website is educational and general in nature. It is not a diagnosis or a substitute for a consultation with a qualified dental professional.</p><h3>Contact details</h3><p>If you have questions about a request you submitted, please call Keerti Cure Dental on {phone}.</p></div></section></>;
}
