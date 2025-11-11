// FIX: Import `ReactElement` to be used in place of `JSX.Element`.
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
    // FIX: Changed type from JSX.Element to ReactElement to resolve "Cannot find namespace 'JSX'" error.
    icon: ReactElement;
    link: string;
    isActive?: boolean;
}

export interface CategoryItem {
    name: string;
    iconUrl: string;
    link: string;
}
