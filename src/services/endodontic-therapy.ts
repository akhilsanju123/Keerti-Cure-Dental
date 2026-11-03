import { photoAt } from '@/lib/sitePhotos';
import type { ServiceContent } from '@/services/types';

export const endodonticTherapy: ServiceContent = {
  slug: 'endodontic-therapy',
  name: 'Endodontic therapy',
  description: 'Root canal treatment removes infection from inside a tooth so it can be saved rather than extracted. Modern techniques are used to keep you comfortable throughout.',
  image: photoAt(2),
  expectations: [
    'Examination and imaging to find the source of the problem',
    'Numbing before treatment so the procedure stays comfortable',
    'Advice on protecting the tooth once treatment is complete',
  ],
};
