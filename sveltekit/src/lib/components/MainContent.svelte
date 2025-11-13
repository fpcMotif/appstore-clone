<script lang="ts">
const { children } = $props<{ children: import("svelte").Snippet }>();
</script>

<main class="flex-1 bg-[var(--color-surface)] md:pr-[var(--spacing-4)] md:pl-[var(--spacing-8)] lg:px-[var(--spacing-8)] xl:px-[var(--spacing-12)]">
	<div class="mx-auto max-w-7xl px-[var(--spacing-4)] py-[var(--spacing-8)] sm:px-[var(--spacing-6)] md:px-[var(--spacing-0)]">
		{@render children()}
	</div>
</main>
