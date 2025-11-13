<script lang="ts">
import type { ShelfData } from "$lib/types";
import TodayCard from "$lib/components/TodayCard.svelte";

const { title, subtitle, cards, cardLayout } = $props<{
	title: string;
	subtitle?: string;
	cards: ShelfData["cards"];
	cardLayout: ShelfData["cardLayout"];
}>();
</script>

<section class="mb-section">
	<div class="mb-4 flex items-end justify-between">
		<div>
			<h2 class="font-bold text-text-primary text-2xl">{title}</h2>
			{#if subtitle}
				<p class="text-text-secondary text-sm">{subtitle}</p>
			{/if}
		</div>
	</div>
	<div
		class={cardLayout === '2-card'
			? 'grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2'
			: 'grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'}
	>
		{#each cards as card (card.id)}
			<TodayCard {card} />
		{/each}
	</div>
</section>
