import { photoAt } from '@/lib/sitePhotos';
import type { ServiceContent } from '@/services/types';

export const gumTherapy: ServiceContent = {
  slug: 'gum-therapy',
  name: 'Gum therapy',
  description: 'Gum therapy treats inflammation and gum disease through professional cleaning and targeted care, protecting your teeth and supporting healthy gums.',
  image: photoAt(4),
  expectations: [
    'An examination to check the health of your gums',
    'Professional cleaning below the gumline where needed',
    'Home care advice to keep the gums healthy afterwards',
  ],
};
