<script lang="ts">
const { slug } = $props();
const _formattedSlug = $derived(
	slug.replace(/-/g, " ").replace(/\b\w/g, (l: string) => l.toUpperCase()),
);
</script>

<div class="flex min-h-screen bg-background">
	<Sidebar activeRoute={page.url.pathname} />
	<MainContent>
		<h1 class="mb-8 font-bold text-text-primary text-3xl">{formattedSlug}</h1>
		<div class="flex flex-col items-center justify-center py-16">
			<div class="text-center">
				<h2 class="mb-4 font-bold text-text-primary text-2xl">Coming Soon</h2>
				<p class="text-text-secondary">This category page is under construction</p>
			</div>
		</div>
	</MainContent>
</div>
