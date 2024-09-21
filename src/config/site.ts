import { env } from '@/utils/const';

export type SiteConfig = typeof siteConfig;

export const APP_URL = env?.APP_URL;

export const siteConfig = {
  name: 'Mix Food',
  metaTitle: 'Mix Food - Thailand Food Delivery',
  description: 'Mix Food - Thailand Food Delivery',
  ogImage: `${APP_URL}/og-image.jpg`,
  facebook: 'https://www.facebook.com/mixfoodamthucthai',
};
