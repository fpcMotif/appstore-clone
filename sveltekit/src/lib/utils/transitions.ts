import { cubicOut } from 'svelte/easing';
import type { EasingFunction, TransitionConfig } from 'svelte/transition';

interface FlyAndBlurParams {
	// Time (ms) before the animation starts.
	delay?: number;
	// Total animation time (ms).
	duration?: number;
	// Easing function (defaults to cubicOut).
	easing?: EasingFunction;
	// Horizontal offset in pixels at start (like `fly`).
	x?: number;
	// Vertical offset in pixels at start (like `fly`).
	y?: number;
	// Initial blur radius in pixels.
	blur?: number;
}

export function flyAndBlur(
	node: Element,
	{
		delay = 0,
		duration = 420,
		easing = cubicOut,
		x = 0,
		y = 0,
		blur = 3,
	}: FlyAndBlurParams = {},
): TransitionConfig {
	const style = getComputedStyle(node);
	const initialOpacity = +style.opacity;

	return {
		delay,
		duration,
		easing,
		css: (t: number, u: number) => {
			return `
				transform: translate(${x * u}px, ${y * u}px);
				opacity: ${initialOpacity * t};
				filter: blur(${blur * u}px);
			`;
		},
	};
}

// App Store specific transition presets
export const TRANSITION_PRESETS = {
	// Navigation item transitions
	navItem: {
		duration: 150,
		easing: cubicOut,
	},
	
	// Platform selector transitions
	platformSelector: {
		duration: 300,
		easing: cubicOut,
		delay: 250,
	},
	
	// Page transitions
	page: {
		duration: 420,
		easing: cubicOut,
	},
	
	// Quick transitions for hover states
	hover: {
		duration: 210,
		easing: cubicOut,
	},
} as const;

// Helper function to create staggered animations
export function createStaggeredDelay(index: number, baseDelay: number = 80): number {
	return index * baseDelay;
}

// Helper function to create eased duration based on index
export function createEasedDuration({
	index,
	totalItems,
	baseDuration = 150,
	durationSpread = 300,
	easing = cubicOut,
}: {
	index: number;
	totalItems: number;
	baseDuration?: number;
	durationSpread?: number;
	easing?: EasingFunction;
}): number {
	const t = index / (totalItems - 1);
	return baseDuration + easing(t) * durationSpread;
}
