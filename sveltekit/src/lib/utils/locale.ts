import { writable, derived } from 'svelte/store';
import { browser } from '$app/environment';

export type Locale = {
	storefront: string;
	language: string;
};

export type NormalizedLocale = Locale & {
	isDefaultLanguage: boolean;
};

// Default configuration
export const DEFAULT_STOREFRONT = 'us';
export const DEFAULT_LANGUAGE = 'en-US';

// Supported storefronts and languages
export const SUPPORTED_LOCALES: Record<string, { languages: string[]; defaultLanguage: string }> = {
	us: {
		languages: ['en-US', 'es-US'],
		defaultLanguage: 'en-US',
	},
	gb: {
		languages: ['en-GB'],
		defaultLanguage: 'en-GB',
	},
	ca: {
		languages: ['en-CA', 'fr-CA'],
		defaultLanguage: 'en-CA',
	},
	au: {
		languages: ['en-AU'],
		defaultLanguage: 'en-AU',
	},
	de: {
		languages: ['de-DE'],
		defaultLanguage: 'de-DE',
	},
	fr: {
		languages: ['fr-FR'],
		defaultLanguage: 'fr-FR',
	},
	jp: {
		languages: ['ja-JP'],
		defaultLanguage: 'ja-JP',
	},
};

export type StorefrontCode = keyof typeof SUPPORTED_LOCALES;

// Reactive locale state using Svelte stores
const currentLocale = writable<Locale>({
	storefront: DEFAULT_STOREFRONT,
	language: DEFAULT_LANGUAGE,
});

// Initialize locale from browser or URL
if (browser) {
	const urlParams = new URLSearchParams(window.location.search);
	const urlStorefront = urlParams.get('sf') as StorefrontCode;
	const urlLanguage = urlParams.get('l');
	
	// Get browser language as fallback
	const browserLanguage = navigator.language;
	const browserStorefront = extractStorefrontFromLanguage(browserLanguage);
	
	// Determine storefront (URL > browser > default)
	const storefront = urlStorefront && SUPPORTED_LOCALES[urlStorefront] 
		? urlStorefront 
		: (browserStorefront || DEFAULT_STOREFRONT);
	
	// Determine language (URL > browser > storefront default)
	const storefrontConfig = SUPPORTED_LOCALES[storefront];
	const language = urlLanguage && storefrontConfig.languages.includes(urlLanguage)
		? urlLanguage
		: (storefrontConfig.languages.includes(browserLanguage) 
			? browserLanguage 
			: storefrontConfig.defaultLanguage);
	
	currentLocale.set({ storefront, language });
}

export function useLocale() {
	return currentLocale;
}

// Helper functions
export function extractStorefrontFromLanguage(language: string): StorefrontCode | null {
	const region = language.split('-')[1]?.toLowerCase();
	return region as StorefrontCode || null;
}

export function normalizeLanguage(
	language: string,
	supportedLanguages: readonly string[],
	defaultLanguage: string,
): { language: string; isDefaultLanguage: boolean } {
	// Prefer exact match
	if (supportedLanguages.includes(language)) {
		return {
			language,
			isDefaultLanguage: language === defaultLanguage,
		};
	}
	
	// Try partial match (language code only)
	const languageCode = language.split('-')[0];
	const partialMatch = supportedLanguages.find(lang => 
		lang.split('-')[0] === languageCode
	);
	
	if (partialMatch) {
		return {
			language: partialMatch,
			isDefaultLanguage: partialMatch === defaultLanguage,
		};
	}
	
	// Fallback to default
	return {
		language: defaultLanguage,
		isDefaultLanguage: true,
	};
}

// Derived values using Svelte stores
export const currentStorefront = derived(currentLocale, ($currentLocale) => $currentLocale.storefront);
export const currentLanguage = derived(currentLocale, ($currentLocale) => $currentLocale.language);
export const isDefaultLanguage = derived(
	[currentLocale, currentStorefront], 
	([$currentLocale, $currentStorefront]) => 
		$currentLocale.language === SUPPORTED_LOCALES[$currentStorefront as StorefrontCode]?.defaultLanguage
);

export function isRtl(): boolean {
	const rtlLanguages = ['ar', 'he', 'fa', 'ur'];
	let currentLang = DEFAULT_LANGUAGE;
	
	// Subscribe to get current value
	const unsubscribe = currentLocale.subscribe(locale => {
		currentLang = locale.language;
	});
	unsubscribe();
	
	return rtlLanguages.some(rtlLang => currentLang.startsWith(rtlLang));
}
