import { photoAt } from '@/lib/sitePhotos';
import type { ServiceContent } from '@/services/types';

export const laserDentistry: ServiceContent = {
  slug: 'laser-dentistry',
  name: 'Laser dentistry',
  description: 'Laser tools allow precise treatment of gums, minor decay and soft tissue, often with less discomfort and a quicker recovery. Your dentist will explain whether laser treatment suits your needs.',
  image: photoAt(0),
  expectations: [
    'A consultation to confirm whether laser treatment is right for you',
    'Precise treatment that leaves healthy tissue untouched',
    'Clear aftercare instructions from our team',
  ],
};
