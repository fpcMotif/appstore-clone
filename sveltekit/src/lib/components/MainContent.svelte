<script lang="ts">
const { children } = $props<{ children: import("svelte").Snippet }>();
</script>

<main class="flex-1 bg-surface md:pr-4 md:pl-8 lg:px-8 xl:px-12">
	<div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 md:px-0">
		{@render children()}
	</div>
</main>
