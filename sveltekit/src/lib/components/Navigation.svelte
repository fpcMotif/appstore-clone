<script lang="ts">
	import { page } from '$app/state';
	import { useMediaQuery, isSidebarVisible } from '$lib/utils/media-queries';
	import { useI18n } from '$lib/stores/i18n';
	import { flyAndBlur, createStaggeredDelay, TRANSITION_PRESETS } from '$lib/utils/transitions';
	import { navItems, categories } from '$lib/constants';
	import { debounce, DEFAULT_SEARCH_DEBOUNCE_DELAY } from '$lib/utils/performance';
	import { featureFlags, FEATURE_FLAGS } from '$lib/utils/feature-flags';

	const { t } = useI18n();
	const mediaQuery = useMediaQuery();

	const { children } = $props<{
		children: any;
	}>();

	let searchQuery = $state('');
	let isSearchFocused = $state(false);

	// Reactive computed values
	const currentPath = $derived(page.url.pathname);
	const activeNavItem = $derived(navItems.find(item => item.link === currentPath));
	const activeCategory = $derived(categories.find(cat => cat.link === currentPath));

	// Debounced search handler for performance
	const debouncedSearch = debounce((query: string) => {
		if (query.trim()) {
			// Navigate to search results
			window.location.href = `/search?q=${encodeURIComponent(query)}`;
		}
	}, DEFAULT_SEARCH_DEBOUNCE_DELAY);

	// Enhanced search with feature flags
	function handleSearch(event: KeyboardEvent) {
		const target = event.target as HTMLInputElement;
		searchQuery = target.value;

		// Use debounced search if optimization feature is enabled
		if (featureFlags.getValue(FEATURE_FLAGS.SEARCH_DEBOUNCE_OPTIMIZATION, true)) {
			debouncedSearch(searchQuery);
		} else {
			// Immediate search for fallback
			if (searchQuery.trim()) {
				window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
			}
		}
	}

	function handleNavItemClick(item: typeof navItems[0]) {
		// Handle navigation with proper analytics
		console.log('Navigating to:', item.name, item.link);
	}

	// Helper function to convert category names to i18n keys
	function getCategoryI18nKey(categoryName: string): string {
		const keyMap: Record<string, string> = {
			'Photo & Video': 'PhotoVideo',
			'Health & Fitness': 'HealthFitness',
			'Productivity': 'Productivity',
			'Entertainment': 'Entertainment',
			'Action': 'Action',
			'Adventure': 'Adventure',
			'Puzzle': 'Puzzle',
			'Indie': 'Indie'
		};
		return keyMap[categoryName] || categoryName.replace(/[^a-zA-Z0-9]/g, '');
	}

	function getNavI18nKey(navName: string): string {
		const keyMap: Record<string, string> = {
			'Today': 'Today',
			'Games': 'Games',
			'Apps': 'Apps',
			'Arcade': 'Arcade'
		};
		return keyMap[navName] || navName;
	}
</script>

<svelte:head>
	<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
</svelte:head>

<div class="min-h-screen bg-[var(--color-surface)] md:bg-[var(--color-background)]">
	<div class="app-container mx-auto max-w-screen-2xl">
		<div class="flex">
			<!-- Sidebar Navigation -->
			<aside 
				class="sticky top-0 hidden h-screen w-[240px] border-[var(--color-outline)]/80 border-r bg-[var(--color-background)] px-[var(--spacing-4)] py-[var(--spacing-8)] md:block"
				class:lg:block={$isSidebarVisible}
			>
				<!-- App Store Logo -->
				<div class="mb-6 flex items-center gap-2">
					<svg class="text-[var(--color-text-secondary)]/90" height="21" viewBox="0 0 121 21" width="121" xmlns="http://www.w3.org/2000/svg">
						<title>App Store icon</title>
						<g fill="currentColor" fill-rule="nonzero">
							<path d="M11.417 12.204H8.094l5.8-10.067c.19-.328.25-.683.178-1.065a1.214 1.214 0 0 0-.637-.87c-.357-.21-.717-.25-1.082-.121a1.43 1.43 0 0 0-.811.684l-.575.942-.572-.942a1.46 1.46 0 0 0-.81-.69c-.361-.132-.722-.09-1.084.128-.354.204-.563.495-.628.874-.065.379-.003.732.188 1.06L9.412 4.45l-4.49 7.755H1.434c-.37 0-.7.126-.994.378-.293.253-.44.583-.44.992 0 .404.147.731.44.983.293.252.625.378.994.378h11.979a2.449 2.449 0 0 0-.017-1.242 2.097 2.097 0 0 0-.66-1.06c-.327-.286-.767-.429-1.32-.429Zm9.086 0h-3.477l-3.798-6.559c-.38.28-.65.694-.811 1.244a4.654 4.654 0 0 0-.154 1.755c.058.62.226 1.172.506 1.656l4.798 8.288c.184.327.457.555.818.685.36.13.721.093 1.084-.112.355-.199.569-.489.64-.87.072-.382.013-.74-.179-1.073L18.6 14.935h1.904c.374 0 .707-.126.998-.378.29-.252.436-.58.436-.983 0-.409-.146-.74-.436-.992a1.479 1.479 0 0 0-.998-.378Zm-17.72 3.713-.758 1.3c-.19.334-.251.69-.184 1.069.068.378.276.67.625.875.368.21.732.249 1.094.116a1.51 1.51 0 0 0 .818-.689l1.106-1.881c-.088-.159-.257-.325-.506-.498a2.474 2.474 0 0 0-.937-.374c-.376-.075-.795-.048-1.257.082ZM28.145 16.906h2.768l1.251-3.825h5.506l1.251 3.825h2.78L36.408 2.109h-2.973l-5.291 14.797Zm6.747-12.162h.061l2.05 6.296h-4.172l2.06-6.296ZM43.013 20.494h2.553V15.07h.051c.615 1.272 1.856 2.05 3.404 2.05 2.728 0 4.471-2.152 4.471-5.639v-.01c0-3.507-1.743-5.66-4.501-5.66-1.559 0-2.748.8-3.374 2.102h-.051V6.036h-2.553v14.458Zm5.219-5.526c-1.58 0-2.687-1.364-2.687-3.487v-.01c0-2.133 1.108-3.507 2.687-3.507 1.63 0 2.656 1.333 2.656 3.507v.01c0 2.143-1.026 3.487-2.656 3.487ZM55.133 20.494h2.553V15.07h.051c.616 1.272 1.856 2.05 3.405 2.05 2.727 0 4.47-2.152 4.47-5.639v-.01c0-3.507-1.743-5.66-4.501-5.66-1.559 0-2.748.8-3.374 2.102h-.051V6.036h-2.553v14.458Zm5.219-5.526c-1.58 0-2.687-1.364-2.687-3.487v-.01c0-2.133 1.108-3.507 2.687-3.507 1.63 0 2.656 1.333 2.656 3.507v.01c0 2.143-1.026 3.487-2.656 3.487Z"/>
						</g>
					</svg>
				</div>
				
				<!-- Main Navigation -->
				<nav class="gap-xl space-y-8">
					<div>
						<ul class="gap-md space-y-1">
							{#each navItems as item, i (item.name)}
								<li
									in:flyAndBlur={{
										...TRANSITION_PRESETS.navItem,
										y: -20,
										delay: createStaggeredDelay(i)
									}}
								>
									<a
										class="flex items-center rounded-md px-3 py-2 font-medium text-sm transition-colors {item.link === currentPath
											? 'bg-[var(--color-background-disabled)]/80 text-[var(--color-text-primary)]'
											: 'text-[var(--color-text-secondary)] hover:bg-[var(--color-background-disabled)]/50'}"
										href={item.link}
										onclick={() => handleNavItemClick(item)}
									>
										<span class="mr-4 h-6 w-6 text-[var(--color-text-secondary)]">{@html item.icon}</span>
										<span>{t(`App.Store.Navigation.${getNavI18nKey(item.name)}`)}</span>
									</a>
								</li>
							{/each}
						</ul>
					</div>

					<!-- Categories -->
					<div class="border-[var(--color-outline)]/80 border-t pt-6">
						<h3 class="mb-2 px-3 font-semibold text-[var(--color-text-secondary)] text-xs uppercase tracking-wide">
							{t('App.Store.Navigation.Categories')}
						</h3>
						<ul class="gap-md space-y-1">
							{#each categories as category, i (category.name)}
								<li
									in:flyAndBlur={{
										...TRANSITION_PRESETS.navItem,
										y: -20,
										delay: createStaggeredDelay(i + navItems.length)
									}}
								>
									<a
										class="flex items-center rounded-md px-3 py-2 font-medium text-sm transition-colors {category.link === currentPath
											? 'bg-[var(--color-background-disabled)]/80 text-[var(--color-text-primary)]'
											: 'text-[var(--color-text-secondary)] hover:bg-[var(--color-background-disabled)]/50'}"
										href={category.link}
									>
										<img
											alt=""
											class="mr-4 h-6 w-6 rounded-md"
											height={24}
											src={category.iconUrl}
											width={24}
										/>
										<span>{t(`App.Store.Category.${getCategoryI18nKey(category.name)}`)}</span>
									</a>
								</li>
							{/each}
						</ul>
					</div>
				</nav>
			</aside>

			<!-- Main Content Area -->
			<div class="flex min-w-0 flex-1 flex-col">
				<!-- Search Header -->
				<header class="sticky top-0 z-20 hidden border-[var(--color-outline)]/80 border-b bg-[var(--color-background)]/80 px-[var(--spacing-4)] py-[var(--spacing-3)] backdrop-blur-sm md:block md:px-[var(--spacing-12)]">
					<div class="ml-auto max-w-xs">
						<div class="relative w-full">
							<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-[var(--spacing-sm)]">
								<svg
									class="h-[var(--size-5)] w-[var(--size-5)] text-[var(--color-text-secondary)]"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<title>Search icon</title>
									<path
										d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width={2}
									/>
								</svg>
							</div>
							<input
								class="block w-full rounded-[var(--radius-md)] border-[var(--color-outline)] bg-[var(--color-background-disabled)]/80 py-[var(--spacing-2)] pr-[var(--spacing-4)] pl-[calc(var(--spacing-10)+var(--spacing-sm))] text-[var(--font-size-sm)] placeholder-[var(--color-text-secondary)] focus:border-[var(--color-outline)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
								onkeyup={handleSearch}
								onfocus={() => isSearchFocused = true}
								onblur={() => isSearchFocused = false}
								placeholder={t('App.Store.Search.Placeholder')}
								type="search"
								value={searchQuery}
							/>
						</div>
					</div>
				</header>

				<!-- Mobile Search -->
				<div class="border-[var(--color-outline)] border-b p-[var(--spacing-4)] md:hidden">
					<div class="relative w-full">
						<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-[var(--spacing-sm)]">
							<svg
								class="h-[var(--size-5)] w-[var(--size-5)] text-[var(--color-text-secondary)]"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<title>Search icon</title>
								<path
									d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width={2}
								/>
							</svg>
						</div>
						<input
							class="block w-full rounded-[var(--radius-md)] border-[var(--color-outline)] bg-[var(--color-background-disabled)]/80 py-[var(--spacing-2)] pr-[var(--spacing-4)] pl-[calc(var(--spacing-10)+var(--spacing-sm))] text-[var(--font-size-sm)] placeholder-[var(--color-text-secondary)] focus:border-[var(--color-outline)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
							onkeyup={handleSearch}
							placeholder={t('App.Store.Search.Placeholder')}
							type="search"
							value={searchQuery}
						/>
					</div>
				</div>

				<!-- Page Content -->
				{@render children()}
			</div>
		</div>
	</div>
</div>
