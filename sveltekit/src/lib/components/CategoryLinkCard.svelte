<script lang="ts">
import type { CategoryLinkData } from "$lib/types";

const { data } = $props<{ data: CategoryLinkData }>();
</script>

<a
	class="card-interactive relative block overflow-hidden rounded-2xl"
	href={data.link}
>
	<div
		class="relative h-32 w-full bg-cover bg-center"
		style="background-image: url({data.imageUrl}); background-color: {data.accentColor}"
	>
		<div class="absolute inset-0 gradient-light" />
		<div class="absolute inset-0 flex items-center justify-center">
			<h3 class="font-bold text-text-primary text-lg">{data.name}</h3>
		</div>
	</div>
</a>
