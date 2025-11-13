<script lang="ts">
import type { AppInfo } from "$lib/types";

const { appInfo } = $props<{ appInfo: AppInfo }>();
</script>

<a
	class="flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-background-hover"
	href={appInfo.link}
>
	<div
		class="flex h-12 w-12 items-center justify-center rounded-xl"
		style="background-color: {appInfo.bgColor}"
	>
		<img
			alt={appInfo.name}
			class="h-8 w-8 rounded-lg"
			src={appInfo.iconUrl}
		/>
	</div>
	<div class="flex flex-col">
		<span class="font-medium text-text-primary text-sm">{appInfo.name}</span>
		<span class="text-text-secondary text-xs">{appInfo.subtitle}</span>
	</div>
</a>
