<script lang="ts">
import type { CategoryShelfItem } from "$lib/types";

const { items } = $props<{ items: CategoryShelfItem[] }>();

let currentIndex = $state(0);

function _nextSlide() {
	currentIndex = (currentIndex + 1) % items.length;
}

function _prevSlide() {
	currentIndex = (currentIndex - 1 + items.length) % items.length;
}

const _currentItem = $derived(items[currentIndex]);
</script>

<section class="relative mb-section overflow-hidden rounded-2xl">
	<div class="relative h-96">
		{#if currentItem.imageUrl}
			<img
				alt={currentItem.title}
				class="h-full w-full object-cover"
				src={currentItem.imageUrl}
			/>
		{/if}
		<div class="absolute inset-0 gradient-dark" />
		<div class="absolute bottom-8 left-8 right-8">
			{#if currentItem.badge}
				<span class="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-primary text-sm font-medium">
					{currentItem.badge}
				</span>
			{/if}
			<h2 class="mb-2 font-bold text-text-light text-3xl">{currentItem.title}</h2>
			{#if currentItem.subtitle}
				<p class="text-text-light/90 text-lg">{currentItem.subtitle}</p>
			{/if}
		</div>
	</div>

	{#if items.length > 1}
		<button
			class="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
			onclick={prevSlide}
		>
			<svg
				class="h-6 w-6"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M15 19l-7-7 7-7" />
			</svg>
		</button>
		<button
			class="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
			onclick={nextSlide}
		>
			<svg
				class="h-6 w-6"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M9 5l7 7-7 7" />
			</svg>
		</button>

		<div class="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
			{#each items as _, index (index)}
				<button
					class="h-2 w-2 rounded-full transition-colors {index === currentIndex
						? 'bg-white'
						: 'bg-white/50'}"
					onclick={() => currentIndex = index}
				/>
			{/each}
		</div>
	{/if}
</section>
