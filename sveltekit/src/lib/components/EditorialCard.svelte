<script lang="ts">
import type { EditorialCardData } from "$lib/types";

const { data } = $props<{ data: EditorialCardData }>();
</script>

<a
	class="card-interactive relative block overflow-hidden rounded-2xl"
	href={data.link}
>
	<div
		class="relative h-48 w-full bg-cover bg-center"
		style="background-image: url({data.imageUrl}); background-color: {data.accentColor}"
	>
		<div class="absolute inset-0 gradient-dark"></div>
		<div class="absolute bottom-4 left-4 right-4">
			{#if data.badge}
				<span class="mb-2 inline-block rounded-full bg-primary/10 px-2 py-1 text-primary text-xs font-medium">
					{data.badge}
				</span>
			{/if}
			<h3 class="mb-1 font-bold text-text-light text-lg">{data.title}</h3>
			<p class="text-text-light/80 text-sm">{data.description}</p>
		</div>
	</div>
	{#if data.appInfo}
		<div class="p-4">
			<AppLockup appInfo={data.appInfo} />
		</div>
	{/if}
</a>
