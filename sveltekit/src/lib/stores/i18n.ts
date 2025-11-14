import { writable, derived } from 'svelte/store';
import { browser } from '$app/environment';
import { currentLanguage, currentStorefront } from '$lib/utils/locale';

// Translation cache
const translationCache = new Map<string, Record<string, string>>();

// Mock translation data - in real app this would be loaded from API/files
const mockTranslations: Record<string, Record<string, string>> = {
	'en-US': {
		'App.Store.Navigation.Today': 'Today',
		'App.Store.Navigation.Apps': 'Apps',
		'App.Store.Navigation.Games': 'Games',
		'App.Store.Navigation.Arcade': 'Arcade',
		'App.Store.Navigation.Search': 'Search',
		'App.Store.Navigation.Categories': 'Categories',
		'App.Store.Navigation.PlatformHeading': 'Platforms',
		'App.Store.Search.Placeholder': 'Search Apps & Games',
		'App.Store.Today.Title': 'Today',
		'App.Store.Category.Action': 'Action',
		'App.Store.Category.Adventure': 'Adventure',
		'App.Store.Category.Puzzle': 'Puzzle',
		'App.Store.Category.Entertainment': 'Entertainment',
		'App.Store.Category.Productivity': 'Productivity',
		'App.Store.Category.HealthFitness': 'Health & Fitness',
		'App.Store.Category.PhotoVideo': 'Photo & Video',
		'App.Store.Category.Indie': 'Indie',
	},
	'es-US': {
		'App.Store.Navigation.Apps': 'Apps',
		'App.Store.Navigation.Games': 'Juegos',
		'App.Store.Navigation.Arcade': 'Arcade',
		'App.Store.Navigation.Today': 'Hoy',
		'App.Store.Navigation.Search': 'Buscar',
		'App.Store.Navigation.Categories': 'Categorías',
		'App.Store.Navigation.PlatformHeading': 'Plataformas',
		'App.Store.Search.Placeholder': 'Buscar Apps y Juegos',
		'App.Store.Today.Title': 'Hoy',
		'App.Store.Category.Action': 'Acción',
		'App.Store.Category.Adventure': 'Aventura',
		'App.Store.Category.Puzzle': 'Rompecabezas',
		'App.Store.Category.Entertainment': 'Entretenimiento',
		'App.Store.Category.Productivity': 'Productividad',
		'App.Store.Category.HealthFitness': 'Salud y Fitness',
		'App.Store.Category.PhotoVideo': 'Foto y Video',
		'App.Store.Category.Indie': 'Indie',
	},
	'fr-FR': {
		'App.Store.Navigation.Apps': 'Apps',
		'App.Store.Navigation.Games': 'Jeux',
		'App.Store.Navigation.Arcade': 'Arcade',
		'App.Store.Navigation.Today': 'Aujourd\'hui',
		'App.Store.Navigation.Search': 'Rechercher',
		'App.Store.Navigation.Categories': 'Catégories',
		'App.Store.Navigation.PlatformHeading': 'Plateformes',
		'App.Store.Search.Placeholder': 'Rechercher des Apps et Jeux',
		'App.Store.Today.Title': 'Aujourd\'hui',
		'App.Store.Category.Action': 'Action',
		'App.Store.Category.Adventure': 'Aventure',
		'App.Store.Category.Puzzle': 'Puzzle',
		'App.Store.Category.Entertainment': 'Divertissement',
		'App.Store.Category.Productivity': 'Productivité',
		'App.Store.Category.HealthFitness': 'Santé et Fitness',
		'App.Store.Category.PhotoVideo': 'Photo et Vidéo',
		'App.Store.Category.Indie': 'Indie',
	},
};

// Reactive i18n state using Svelte stores
const translationsStore = writable<Record<string, string>>(mockTranslations['en-US']);
const isLoadingStore = writable(false);

// Load translations when language changes
currentLanguage.subscribe(language => {
	loadTranslations(language);
});

async function loadTranslations(language: string) {
	if (translationCache.has(language)) {
		translationsStore.set(translationCache.get(language)!);
		return;
	}

	isLoadingStore.set(true);

	try {
		// In a real app, this would be an API call or dynamic import
		// For now, we'll use the mock data
		await new Promise(resolve => setTimeout(resolve, 100)); // Simulate network delay
		const loadedTranslations = mockTranslations[language] || mockTranslations['en-US'];

		translationCache.set(language, loadedTranslations);
		translationsStore.set(loadedTranslations);
	} catch (error) {
		console.error('Failed to load translations:', error);
		// Fallback to English
		translationsStore.set(mockTranslations['en-US']);
	} finally {
		isLoadingStore.set(false);
	}
}

// Translation function - reactive version
export function t(key: string, params?: Record<string, string | number>): string {
	let translations: Record<string, string> = {};
	// Get current translations synchronously
	const unsubscribe = translationsStore.subscribe(value => {
		translations = value;
	});
	unsubscribe();

	// If no translations loaded yet, return empty string to prevent showing keys
	if (Object.keys(translations).length === 0) {
		return '';
	}

	let translation = translations[key] || key; // Fallback to key if not found

	// Replace parameters in translation string
	if (params) {
		Object.entries(params).forEach(([param, value]) => {
			translation = translation.replace(`{{${param}}}`, String(value));
		});
	}

	return translation;
}

// Hook for components to use i18n
export function useI18n() {
	return {
		t,
		isLoading: isLoadingStore,
		currentLanguage,
		currentStorefront,
	};
}

// Initialize translations
if (browser) {
	let lang = 'en-US';
	const unsubscribe = currentLanguage.subscribe(value => {
		lang = value;
	});
	unsubscribe();
	loadTranslations(lang);
}
