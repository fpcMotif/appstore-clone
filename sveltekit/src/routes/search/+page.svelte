<script lang="ts">
import { page } from "$app/state";

const _query = $derived(page.url.searchParams.get("q") || "");

interface SearchResult {
	id: string;
	name: string;
	subtitle: string;
	iconUrl: string;
}

const _results = $derived([] as SearchResult[]);
</script>

<div class="flex min-h-screen bg-background">
	<Sidebar activeRoute={page.url.pathname} />
	<MainContent>
		<div class="mb-8">
			<h1 class="mb-2 font-bold text-text-primary text-3xl">Search Results</h1>
			{#if query}
				<p class="text-text-secondary">Showing results for "{query}"</p>
			{:else}
				<p class="text-text-secondary">Enter a search term to find apps and games</p>
			{/if}
		</div>

		{#if query}
			{#if results.length > 0}
				<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{#each results as result (result.id)}
						<div class="card-interactive rounded-2xl p-4">
							<div class="flex items-center gap-3">
								<img
									alt={result.name}
									class="h-12 w-12 rounded-lg"
									src={result.iconUrl}
								/>
								<div>
									<h3 class="font-medium text-text-primary text-sm">{result.name}</h3>
									<p class="text-text-secondary text-xs">{result.subtitle}</p>
								</div>
							</div>
						</div>
					{/each}
				</div>
			{:else}
				<div class="flex flex-col items-center justify-center py-16">
					<div class="text-center">
						<h2 class="mb-4 font-bold text-text-primary text-2xl">No results</h2>
						<p class="text-text-secondary">No apps found matching "{query}"</p>
					</div>
				</div>
			{/if}
		{/if}
	</MainContent>
</div>
