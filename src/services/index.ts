import type { ServiceContent } from '@/services/types';
import { laserDentistry } from '@/services/laser-dentistry';
import { cosmeticDentistry } from '@/services/cosmetic-dentistry';
import { endodonticTherapy } from '@/services/endodontic-therapy';
import { orthodontics } from '@/services/orthodontics';
import { gumTherapy } from '@/services/gum-therapy';
import { dentalImplants } from '@/services/dental-implants';
import { dentalBraces } from '@/services/dental-braces';
import { dentalVeneers } from '@/services/dental-veneers';
import { dentalCleaning } from '@/services/dental-cleaning';

export const services: ServiceContent[] = [
  laserDentistry,
  cosmeticDentistry,
  endodonticTherapy,
  orthodontics,
  gumTherapy,
  dentalImplants,
  dentalBraces,
  dentalVeneers,
  dentalCleaning,
];

export const getService = (slug: string | undefined) =>
  services.find(service => service.slug === slug);
