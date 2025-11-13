<script lang="ts">

</script>

<div class="flex min-h-screen bg-background">
	<Sidebar activeRoute={page.url.pathname} />
	<MainContent>
		<h1 class="mb-8 font-bold text-text-primary text-3xl">{gamesPageData.title}</h1>
		{#each gamesPageData.shelves as shelf (shelf.id)}
			<Shelf
				title={shelf.title}
				subtitle={shelf.subtitle}
				cards={shelf.cards}
				cardLayout={shelf.cardLayout}
			/>
		{/each}
	</MainContent>
</div>
