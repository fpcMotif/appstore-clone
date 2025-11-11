import type { ReactElement } from 'react';

export interface AppInfo {
  iconUrl: string;
  name: string;
  subtitle: string;
  link: string;
  bgColor: string;
}

export interface CardData {
  id: string;
  badge: string;
  title: string;
  description: string;
  imageUrl: string;
  videoPosterUrl?: string;
  videoSrc?: string;
  accentColor: string;
  theme: 'light' | 'dark';
  appInfo?: AppInfo;
  lockupList?: AppInfo[];
  titleImage?: string;
  link: string;
}

export interface ShelfData {
  id: string;
  title: string;
  subtitle: string;
  cards: CardData[];
  cardLayout: '2-card' | '4-card';
}

export interface NavItem {
    name: string;
    icon: ReactElement;
    link: string;
    isActive?: boolean;
}

export interface CategoryItem {
    name: string;
    iconUrl: string;
    link: string;
}

// Generic Category Page Types

export interface SpotlightCardData {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  videoPosterUrl?: string;
  videoSrc?: string;
  accentColor: string;
  theme: 'light' | 'dark';
  appInfo: AppInfo;
  link: string;
  layout?: 'west';
}

export interface SmallLockupData extends AppInfo {
  id: string;
  ordinal?: number;
}

export interface VideoCardData {
  id: string;
  videoPosterUrl: string;
  videoSrc: string;
  appInfo: AppInfo;
  link: string;
}

export interface EditorialCardData {
    id: string;
    badge: string;
    title: string;
    description: string;
    accentColor: string;
    appInfo: AppInfo;
    link: string;
}

export interface CategoryLinkData {
    id: string;
    name: string;
    imageUrl: string;
    accentColor: string;
    link: string;
}

export type CategoryShelfItem = SpotlightCardData | SmallLockupData | VideoCardData | EditorialCardData | CategoryLinkData;

export interface CategoryShelf {
    id: string;
    type: 'spotlight' | 'small-lockup-grid' | 'ordinal-lockup-row' | 'video-row' | 'editorial' | 'category-row' | 'hero-carousel';
    title?: string;
    subtitle?: string;
    seeAllLink?: string;
    items: CategoryShelfItem[];
}
