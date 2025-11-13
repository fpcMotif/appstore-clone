<script lang="ts">
import type { SmallLockupData } from "$lib/types";

const { data } = $props<{ data: SmallLockupData }>();
</script>

<li class="snap-start">
	<a class="group flex items-center space-x-4" href={data.link}>
		{#if data.ordinal}
			<div class="w-8 text-center font-bold text-2xl text-text-secondary">
				{data.ordinal}
			</div>
		{/if}
		<div class="flex-shrink-0">
			<img
				alt={`${data.name} icon`}
				class="h-16 w-16 rounded-2xl"
				height={64}
				src={data.iconUrl}
				style="background-color: {data.bgColor}"
				width={64}
			/>
		</div>
		<div class="min-w-0 flex-1">
			<p class="truncate font-semibold text-text-primary group-hover:text-link">
				{data.name}
			</p>
			<p class="truncate text-text-secondary text-xs">{data.subtitle}</p>
		</div>
		<div class="flex-shrink-0">
			<button
				class="rounded-full bg-background-disabled px-5 py-1.5 font-semibold text-link text-sm transition group-hover:bg-background-hover"
				type="button"
			>
				View
			</button>
		</div>
	</a>
</li>

