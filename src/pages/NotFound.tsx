import { ArrowRight } from 'lucide-react';
import type { Go } from '@/lib/constants';

export function NotFound({ go }: { go: Go }) {
  return <section className="not-found"><div className="container"><span className="eyebrow">404</span><h1>That page has moved.</h1><p>Let's get you back to a better place.</p><button className="button primary" onClick={() => go('/')}>Back to home <ArrowRight size={17} /></button></div></section>;
}
