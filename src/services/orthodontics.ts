import { photoAt } from '@/lib/sitePhotos';
import type { ServiceContent } from '@/services/types';

export const orthodontics: ServiceContent = {
  slug: 'orthodontics',
  name: 'Orthodontics',
  description: 'Orthodontic care guides teeth and jaws into better alignment, improving both function and appearance, with a personalised plan agreed before treatment starts.',
  image: photoAt(3),
  expectations: [
    'A full assessment of your teeth, bite and jaw',
    'A personalised plan with an expected timeline',
    'Regular check-ins to track progress',
  ],
};
