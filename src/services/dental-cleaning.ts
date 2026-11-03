import { photoAt } from '@/lib/sitePhotos';
import type { ServiceContent } from '@/services/types';

export const dentalCleaning: ServiceContent = {
  slug: 'dental-cleaning',
  name: 'Dental cleaning',
  description: 'Professional cleaning removes plaque and tartar that brushing can miss, helping prevent gum disease and keeping your smile fresh.',
  image: photoAt(8),
  expectations: [
    'A check of your teeth and gums before cleaning',
    'Polishing to leave your teeth smooth and clean',
    'Tips on the brushing and flossing routine that suits you',
  ],
};
