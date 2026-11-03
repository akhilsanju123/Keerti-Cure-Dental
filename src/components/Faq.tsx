import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '@/lib/constants';

export function Faq() {
  const [open, setOpen] = useState(0);
  return <div className="faq-list">{faqs.map(([q, a], i) => <div className={`faq-item ${open === i ? 'active' : ''}`} key={q}><button onClick={() => setOpen(open === i ? -1 : i)}><span>{q}</span><ChevronDown size={18} /></button>{open === i && <p>{a}</p>}</div>)}</div>;
}
