<script lang="ts">
	import { useI18n } from '$lib/stores/i18n';
	import { useMediaQuery, isMobile } from '$lib/utils/media-queries';
	import { flyAndBlur, TRANSITION_PRESETS } from '$lib/utils/transitions';
	
	const { t } = useI18n();
	const mediaQuery = useMediaQuery();
	
	interface Props {
		title?: string;
		subtitle?: string;
		showBackButton?: boolean;
		backButtonHref?: string;
		children: any;
	}
	
	let {
		title,
		subtitle,
		showBackButton = false,
		backButtonHref = '/',
		children
	}: Props = $props();
	
	function handleBackButtonClick() {
		// Handle back navigation with proper state management
		if (window.history.length > 1) {
			window.history.back();
		} else {
			window.location.href = backButtonHref;
		}
	}
</script>

<div class="flex-1 bg-[var(--color-surface)] md:pr-[var(--spacing-4)] md:pl-[var(--spacing-8)] lg:px-[var(--spacing-8)] xl:px-[var(--spacing-12)]">
	<div class="mx-auto max-w-7xl px-[var(--spacing-4)] py-[var(--spacing-8)] sm:px-[var(--spacing-6)] md:px-[var(--spacing-0)]">
		
		<!-- Page Header -->
		<header class="mb-8" in:flyAndBlur={{ y: -20, ...TRANSITION_PRESETS.page }}>
			
			<!-- Back Button (Mobile) -->
			{#if showBackButton && $isMobile}
				<button
					class="mb-4 flex items-center gap-2 text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)]"
					onclick={handleBackButtonClick}
				>
					<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M15 19l-7-7 7-7" />
					</svg>
					<span class="text-sm font-medium">Back</span>
				</button>
			{/if}
			
			<!-- Page Title -->
			{#if title}
				<h1 class="font-[var(--font-weight-bold)] text-[var(--color-text-primary)] text-[var(--font-size-4xl)]">
					{title}
				</h1>
			{/if}
			
			<!-- Page Subtitle -->
			{#if subtitle}
				<p class="mt-2 text-[var(--color-text-secondary)] text-[var(--font-size-lg)]">
					{subtitle}
				</p>
			{/if}
		</header>
		
		<!-- Page Content -->
		<main in:flyAndBlur={{ y: 20, delay: 100, ...TRANSITION_PRESETS.page }}>
			{@render children()}
		</main>
		
	</div>
</div>

<style>
	/* Responsive adjustments for different breakpoints */
	@media (max-width: 768px) {
		h1 {
			font-size: var(--font-size-3xl);
		}
	}
</style>
