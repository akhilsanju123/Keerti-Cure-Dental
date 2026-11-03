
import { photoAt } from '@/lib/sitePhotos';
import type { ServiceContent } from '@/services/types';

export const cosmeticDentistry: ServiceContent = {
  slug: 'cosmetic-dentistry',

  name: 'Cosmetic Dentistry',

  description:
    'A beautiful smile can make a lasting impression. Our cosmetic dentistry treatments are designed to enhance the natural appearance of your teeth while maintaining excellent oral health. From professional teeth whitening and dental bonding to personalized smile enhancements, we help you explore suitable options for a healthier-looking, more confident smile.',

  image: photoAt(1),

  expectations: [
    'Personalized smile consultation to understand your goals and concerns',

    'Detailed evaluation of your teeth, gums, and overall oral health',

    'Discussion of suitable cosmetic treatments, including whitening and bonding',

    'Customized treatment planning with clear explanations of expected outcomes',

    'Gentle, patient-focused care and guidance for maintaining your smile',
  ],
};
