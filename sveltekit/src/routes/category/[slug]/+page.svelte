<script lang="ts">
	import MainContent from "$lib/components/MainContent.svelte";
	import type { PageData } from "./$types";

	const { data } = $props<{ data: PageData }>();
	const formattedSlug = $derived(
		data.slug.replace(/-/g, " ").replace(/\b\w/g, (l: string) => l.toUpperCase()),
	);
</script>

<MainContent>
	<h1
		class="font-[var(--font-weight-bold)] text-[var(--color-text-primary)] text-[var(--font-size-4xl)]"
		style="margin-bottom: var(--spacing-header-margin)"
	>
		{formattedSlug}
	</h1>
	<div class="text-center">
		<p class="text-[var(--color-text-secondary)]">
			This category page is coming soon!
		</p>
	</div>
</MainContent>
