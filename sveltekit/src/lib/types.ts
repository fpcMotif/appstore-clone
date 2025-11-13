export type AppInfo = {
	iconUrl: string;
	name: string;
	subtitle: string;
	link: string;
	bgColor: string;
};

export type CardData = {
	id: string;
	badge: string;
	title: string;
	description: string;
	imageUrl: string;
	videoPosterUrl?: string;
	videoSrc?: string;
	accentColor: string;
	theme: "light" | "dark";
	appInfo?: AppInfo;
	lockupList?: AppInfo[];
	titleImage?: string;
	link: string;
};

export type ShelfData = {
	id: string;
	title: string;
	subtitle: string;
	cards: CardData[];
	cardLayout: "2-card" | "4-card";
};

export type NavItem = {
	name: string;
	icon: string; // SVG string content
	link: string;
	isActive?: boolean;
};

export type CategoryItem = {
	name: string;
	iconUrl: string;
	link: string;
};

export type EditorialCardData = CardData;
export type SpotlightCardData = CardData & { layout?: "west" | "east" };
export type VideoCardData = CardData;
export type CategoryLinkData = {
	id: string;
	name: string;
	imageUrl: string;
	accentColor: string;
	link: string;
};
export type SmallLockupData = AppInfo & {
	id: string;
	ordinal?: number;
};

export type CategoryShelfItem =
	| SpotlightCardData
	| SmallLockupData
	| VideoCardData
	| EditorialCardData
	| CategoryLinkData;

export type CategoryShelf = {
	id: string;
	type:
		| "spotlight"
		| "small-lockup-grid"
		| "ordinal-lockup-row"
		| "video-row"
		| "editorial"
		| "category-row"
		| "hero-carousel";
	title?: string;
	subtitle?: string;
	seeAllLink?: string;
	items: CategoryShelfItem[];
};
