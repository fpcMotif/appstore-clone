<script lang="ts">
import "../app.css";
	import Sidebar from "$lib/components/Sidebar.svelte";
	import { page } from "$app/stores";

const { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
</svelte:head>

<div class="min-h-screen bg-[var(--color-surface)] md:bg-[var(--color-background)]">
	<div class="app-container mx-auto max-w-screen-2xl">
		<div class="flex">
			<Sidebar activeRoute={$page.url.pathname} />
			<div class="flex min-w-0 flex-1 flex-col">
{@render children()}
			</div>
		</div>
	</div>
</div>
