<script lang="ts">
	import MainContent from "$lib/components/MainContent.svelte";
	import Shelf from "$lib/components/Shelf.svelte";
	import { shelfData } from "$lib/constants";

	const todayPageData = $state({
		title: "Today",
		shelves: shelfData
	});
</script>

<MainContent>
	<h1
		class="font-[var(--font-weight-bold)] text-[var(--color-text-primary)] text-[var(--font-size-4xl)]"
		style="margin-bottom: var(--spacing-header-margin)"
	>
		{todayPageData.title}
	</h1>
	<div class="gap-section space-y-12">
		{#each todayPageData.shelves as shelf (shelf.id)}
			<Shelf
				title={shelf.title}
				subtitle={shelf.subtitle}
				cards={shelf.cards}
				cardLayout={shelf.cardLayout}
			/>
		{/each}
	</div>
</MainContent>
