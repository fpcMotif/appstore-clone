import { writable, derived } from 'svelte/store';
import { browser } from '$app/environment';

// Breakpoint configuration based on reference architecture
export const BREAKPOINTS = {
	xsmall: 320,
	small: 768,
	medium: 1024,
	large: 1280,
	xlarge: 1440,
	xxlarge: 1920
} as const;

export type Breakpoint = keyof typeof BREAKPOINTS;

// Media query store using Svelte stores with proper cleanup
const mediaQueryStore = writable<'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'>('medium');

// Initialize media query detection with proper cleanup
if (browser) {
	const updateMediaQuery = () => {
		const width = window.innerWidth;

		if (width >= BREAKPOINTS.xxlarge) {
			mediaQueryStore.set('xxlarge');
		} else if (width >= BREAKPOINTS.xlarge) {
			mediaQueryStore.set('xlarge');
		} else if (width >= BREAKPOINTS.large) {
			mediaQueryStore.set('large');
		} else if (width >= BREAKPOINTS.medium) {
			mediaQueryStore.set('medium');
		} else if (width >= BREAKPOINTS.small) {
			mediaQueryStore.set('small');
		} else {
			mediaQueryStore.set('xsmall');
		}
	};

	// Set initial state
	updateMediaQuery();

	// Listen for resize events with proper cleanup
	const resizeListener = () => updateMediaQuery();
	window.addEventListener('resize', resizeListener);

	// Cleanup function for proper memory management
	// This will be called when the component unmounts or store is no longer needed
	const cleanup = () => {
		window.removeEventListener('resize', resizeListener);
	};

	// Store cleanup reference for potential manual cleanup
	(mediaQueryStore as any)._cleanup = cleanup;
}

// Export the reactive media query state
export function useMediaQuery() {
	return mediaQueryStore;
}

// Helper functions for common breakpoints using derived stores
export const isXSmall = derived(mediaQueryStore, ($mediaQueryStore) => $mediaQueryStore === 'xsmall');
export const isSmall = derived(mediaQueryStore, ($mediaQueryStore) => $mediaQueryStore === 'small');
export const isMedium = derived(mediaQueryStore, ($mediaQueryStore) => $mediaQueryStore === 'medium');
export const isLarge = derived(mediaQueryStore, ($mediaQueryStore) => $mediaQueryStore === 'large');
export const isXLarge = derived(mediaQueryStore, ($mediaQueryStore) => $mediaQueryStore === 'xlarge');
export const isXXLarge = derived(mediaQueryStore, ($mediaQueryStore) => $mediaQueryStore === 'xxlarge');

// Responsive helpers
export const isMobile = derived([isXSmall, isSmall], ([$isXSmall, $isSmall]) => $isXSmall || $isSmall);
export const isTablet = derived(mediaQueryStore, ($mediaQueryStore) => $mediaQueryStore === 'medium');
export const isDesktop = derived(mediaQueryStore, ($mediaQueryStore) => ['large', 'xlarge', 'xxlarge'].includes($mediaQueryStore));
export const isSidebarVisible = derived(mediaQueryStore, ($mediaQueryStore) => !['xsmall', 'small'].includes($mediaQueryStore));
