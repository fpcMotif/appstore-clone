<script lang="ts">
	import "../app.css";
	import Navigation from "$lib/components/Navigation.svelte";
	import { page } from "$app/stores";

	const { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
</svelte:head>

<Navigation>
	{@render children()}
</Navigation>
