<script lang="ts">
	import Sidebar from "$lib/components/Sidebar.svelte";
	import MainContent from "$lib/components/MainContent.svelte";
	import Shelf from "$lib/components/Shelf.svelte";
	import TodayCard from "$lib/components/TodayCard.svelte";
	import { page } from "$app/stores";

	const todayPageData = {
		title: "Today",
		shelves: [
			{
				id: "trending-games",
				title: "Trending Games",
				subtitle: "Popular games right now",
				cardLayout: "4-card" as const,
				cards: [
					{
						id: "game-1",
						badge: "NEW",
						title: "Adventure Quest",
						description: "Epic RPG Adventure with stunning graphics",
						imageUrl: "/api/placeholder/300/400",
						accentColor: "#FF6B6B",
						theme: "dark" as const,
						link: "/games/adventure-quest"
					},
					{
						id: "game-2", 
						badge: "HOT",
						title: "Puzzle Master",
						description: "Brain Training Fun for all ages",
						imageUrl: "/api/placeholder/300/400",
						accentColor: "#4ECDC4",
						theme: "light" as const,
						link: "/games/puzzle-master"
					}
				]
			},
			{
				id: "new-apps",
				title: "New Apps",
				subtitle: "Latest releases",
				cardLayout: "2-card" as const,
				cards: [
					{
						id: "app-1",
						badge: "FEATURED",
						title: "Productivity Pro",
						description: "Get more done with smart tools",
						imageUrl: "/api/placeholder/300/400",
						accentColor: "#45B7D1",
						theme: "light" as const,
						link: "/apps/productivity-pro"
					}
				]
			}
		]
	};
</script>

<div class="flex min-h-screen bg-background">
	<Sidebar activeRoute={$page.url.pathname} />
	<MainContent>
		<h1 class="mb-8 font-bold text-text-primary text-3xl">{todayPageData.title}</h1>
		{#each todayPageData.shelves as shelf (shelf.id)}
			<Shelf
				title={shelf.title}
				subtitle={shelf.subtitle}
				cards={shelf.cards}
				cardLayout={shelf.cardLayout}
			/>
		{/each}
	</MainContent>
</div>
