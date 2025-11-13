<script lang="ts">
import type { CardData } from "$lib/types";

const { card } = $props<{ card: CardData }>();
</script>

<a
	class="card-interactive relative block overflow-hidden rounded-2xl"
	href={card.link}
>
	{#if card.videoSrc}
		<video
			class="h-48 w-full object-cover"
			poster={card.videoPosterUrl}
			preload="metadata"
		>
			<source src={card.videoSrc} type="video/mp4" />
			<track kind="captions" srcLang="en" label="English captions" />
		</video>
	{:else if card.titleImage}
		<img
			alt={card.title}
			class="h-48 w-full object-cover"
			src={card.titleImage}
		/>
	{:else if card.imageUrl}
		<img
			alt={card.title}
			class="h-48 w-full object-cover"
			src={card.imageUrl}
		/>
	{/if}

	<div class="p-4">
		{#if card.badge}
			<span class="mb-2 inline-block rounded-full bg-primary/10 px-2 py-1 text-primary text-xs font-medium">
				{card.badge}
			</span>
		{/if}
		<h3 class="mb-1 font-bold text-text-primary text-lg">{card.title}</h3>
		{#if card.description}
			<p class="text-text-secondary text-sm">{card.description}</p>
		{/if}
	</div>

	{#if card.lockupList && card.lockupList.length > 0}
		<div class="border-t border-border p-4">
			<div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
				{#each card.lockupList as app (app.name)}
					<div class="flex items-center gap-2">
						<img
							alt={app.name}
							class="h-8 w-8 rounded-lg"
							src={app.iconUrl}
						/>
						<div class="min-w-0 flex-1">
							<p class="truncate font-medium text-text-primary text-sm">{app.name}</p>
							<p class="text-text-secondary text-xs">{app.subtitle}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	{/if}
</a>
