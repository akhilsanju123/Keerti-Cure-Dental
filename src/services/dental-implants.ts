import { photoAt } from '@/lib/sitePhotos';
import type { ServiceContent } from '@/services/types';

export const dentalImplants: ServiceContent = {
  slug: 'dental-implants',
  name: 'Dental implants',
  description: 'Implants replace missing teeth with a stable foundation that looks and works like a natural tooth. Your suitability is assessed through a full examination first.',
  image: photoAt(5),
  expectations: [
    'Imaging and examination to assess your jawbone',
    'A treatment plan with costs and timeline shared upfront',
    'Follow-up visits to check healing and fit',
  ],
};
