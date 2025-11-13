<script lang="ts">
	import MainContent from "$lib/components/MainContent.svelte";

	const pageData = $state({
		title: "Apps",
		message: "The Apps page is coming soon!"
	});
</script>

<MainContent>
	<h1
		class="font-[var(--font-weight-bold)] text-[var(--color-text-primary)] text-[var(--font-size-4xl)]"
		style="margin-bottom: var(--spacing-header-margin)"
	>
		{pageData.title}
	</h1>
	<div class="text-center">
		<p class="text-[var(--color-text-secondary)]">
			{pageData.message}
		</p>
	</div>
</MainContent>
