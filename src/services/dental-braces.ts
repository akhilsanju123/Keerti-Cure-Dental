import { photoAt } from '@/lib/sitePhotos';
import type { ServiceContent } from '@/services/types';

export const dentalBraces: ServiceContent = {
  slug: 'dental-braces',
  name: 'Dental braces',
  description: 'Braces move teeth gradually into a better position. Your dentist will explain the options, expected timelines and the care routine before you begin.',
  image: photoAt(6),
  expectations: [
    'A consultation to compare braces options',
    'Clear guidance on cleaning and diet while wearing braces',
    'Scheduled adjustments to keep treatment on track',
  ],
};
