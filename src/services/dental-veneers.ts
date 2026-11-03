import { photoAt } from '@/lib/sitePhotos';
import type { ServiceContent } from '@/services/types';

export const dentalVeneers: ServiceContent = {
  slug: 'dental-veneers',
  name: 'Dental veneers',
  description: 'Thin, custom-made shells bonded to the front of teeth can refine their shape and colour for a natural, polished smile.',
  image: photoAt(7),
  expectations: [
    'A design consultation to plan the shape and shade',
    'Minimal preparation of the natural tooth where possible',
    'Care advice to keep veneers looking their best',
  ],
};
