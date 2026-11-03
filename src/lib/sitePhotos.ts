export const sitePhotos = [
  '/images/slides/002_(1).jpg.jpeg',
  '/images/slides/004.jpg.jpeg',
  '/images/slides/1636976941859_002.jpg.jpeg',
  '/images/slides/50.jpeg',
  '/images/slides/50%20copy.jpeg',
  '/images/slides/image.png',
  '/images/slides/WhatsApp_Image_2026-11-02_at_11.39.01_AM.jpeg',
  '/images/slides/WhatsApp_Image_2026-11-02_at_11.39.01_AM%20copy.jpeg',
  '/images/slides/WhatsApp_Image_2026-11-02_at_11.49.50_AM.jpeg',
  '/images/slides/WhatsApp_Image_2026-11-02_at_11.49.50_AM%20copy.jpeg',
  '/images/slides/WhatsApp_Image_2026-11-02_at_11.49.58_AM.jpeg',
  '/images/slides/WhatsApp_Image_2026-11-02_at_11.50.04_AM.jpeg',
  '/images/slides/WhatsApp_Image_2026-11-02_at_11.50.10_AM.jpeg',
];

export const doctorPhoto = '/images/slides/sir_photo.jpeg';

export const photoAt = (index: number) => sitePhotos[index % sitePhotos.length];
