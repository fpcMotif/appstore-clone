<script lang="ts">
const { activeRoute = "/" } = $props<{ activeRoute?: string }>();

const AppStoreIcon = () => `
		<svg class="text-text-secondary/90" height="21" viewBox="0 0 121 21" width="121" xmlns="http://www.w3.org/2000/svg">
			<title>App Store icon</title>
			<g fill="currentColor" fillRule="nonzero">
				<path d="M11.417 12.204H8.094l5.8-10.067c.19-.328.25-.683.178-1.065a1.214 1.214 0 0 0-.637-.87c-.357-.21-.717-.25-1.082-.121a1.43 1.43 0 0 0-.811.684l-.575.942-.572-.942a1.46 1.46 0 0 0-.81-.69c-.361-.132-.722-.09-1.084.128-.354.204-.563.495-.628.874-.065.379-.003.732.188 1.06L9.412 4.45l-4.49 7.755H1.434c-.37 0-.7.126-.994.378-.293.253-.44.583-.44.992 0 .404.147.731.44.983.293.252.625.378.994.378h11.979a2.449 2.449 0 0 0-.017-1.242 2.097 2.097 0 0 0-.66-1.06c-.327-.286-.767-.429-1.32-.429Zm9.086 0h-3.477l-3.798-6.559c-.38.28-.65.694-.811 1.244a4.654 4.654 0 0 0-.154 1.755c.058.62.226 1.172.506 1.656l4.798 8.288c.184.327.457.555.818.685.36.13.721.093 1.084-.112.355-.199.569-.489.64-.87.072-.382.013-.74-.179-1.073L18.6 14.935h1.904c.374 0 .707-.126.998-.378.29-.252.436-.58.436-.983 0-.409-.146-.74-.436-.992a1.479 1.479 0 0 0-.998-.378Zm-17.72 3.713-.758 1.3c-.19.334-.251.69-.184 1.069.068.378.276.67.625.875.368.21.732.249 1.094.116a1.51 1.51 0 0 0 .818-.689l1.106-1.881c-.088-.159-.257-.325-.506-.498a2.474 2.474 0 0 0-.937-.374c-.376-.075-.795-.048-1.257.082ZM28.145 16.906h2.768l1.251-3.825h5.506l1.251 3.825h2.78L36.408 2.109h-2.973l-5.291 14.797Zm6.747-12.162h.061l2.05 6.296h-4.172l2.06-6.296ZM43.013 20.494h2.553V15.07h.051c.615 1.272 1.856 2.05 3.404 2.05 2.728 0 4.471-2.152 4.471-5.639v-.01c0-3.507-1.743-5.66-4.501-5.66-1.559 0-2.748.8-3.374 2.102h-.051V6.036h-2.553v14.458Zm5.219-5.526c-1.58 0-2.687-1.364-2.687-3.487v-.01c0-2.133 1.108-3.507 2.687-3.507 1.63 0 2.656 1.333 2.656 3.507v.01c0 2.143-1.026 3.487-2.656 3.487ZM55.133 20.494h2.553V15.07h.051c.616 1.272 1.856 2.05 3.405 2.05 2.727 0 4.47-2.152 4.47-5.639v-.01c0-3.507-1.743-5.66-4.501-5.66-1.559 0-2.748.8-3.374 2.102h-.051V6.036h-2.553v14.458Zm5.219-5.526c-1.58 0-2.687-1.364-2.687-3.487v-.01c0-2.133 1.108-3.507 2.687-3.507 1.63 0 2.656 1.333 2.656 3.507v.01c0 2.143-1.026 3.487-2.656 3.487ZM76.912 17.162c3.61 0 5.783-1.754 5.783-4.512v-.01c0-2.307-1.343-3.558-4.42-4.194l-1.599-.328c-1.784-.37-2.594-.984-2.5"/>
			</g>
		</svg>
	`;
const navItems = [
	{ name: "Today", link: "/", icon: AppStoreIcon() },
	{ name: "Games", link: "/games", icon: `<svg class="text-text-secondary/90" height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><title>Games icon</title><g fill="currentColor" fillRule="nonzero"><path d="M10.5 2C5.8 2 2 5.8 2 10.5S5.8 19 10.5 19 19 15.2 19 10.5 15.2 2 10.5 2zm0 14.5c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"/><circle cx="7.5" cy="10.5" r="1.5"/><circle cx="13.5" cy="10.5" r="1.5"/></g></svg>` },
	{ name: "Apps", link: "/apps", icon: `<svg class="text-text-secondary/90" height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><title>Apps icon</title><g fill="currentColor" fillRule="nonzero"><path d="M4 4h5v5H4V4zm8 0h5v5h-5V4zM4 12h5v5H4v-5zm8 0h5v5h-5v-5z"/></g></svg>` },
	{ name: "Arcade", link: "/arcade", icon: `<svg class="text-text-secondary/90" height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><title>Arcade icon</title><g fill="currentColor" fillRule="nonzero"><path d="M10.5 2L2 6.5v8l8.5 4.5L19 14.5v-8L10.5 2zm0 2.5l6 3.2v6.6l-6 3.2-6-3.2V7.7l6-3.2z"/><circle cx="10.5" cy="10.5" r="2"/></g></svg>` }
];

const categories = [
	{ name: "Social", link: "/category/social", iconUrl: "/icons/social.svg" },
	{ name: "Games", link: "/category/games", iconUrl: "/icons/games.svg" },
	{ name: "Entertainment", link: "/category/entertainment", iconUrl: "/icons/entertainment.svg" },
	{ name: "Productivity", link: "/category/productivity", iconUrl: "/icons/productivity.svg" }
];
</script>

<aside class="sticky top-0 hidden h-screen w-[240px] border-outline/80 border-r bg-background px-4 py-8 md:block">
	<div class="mb-6 flex items-center gap-2">
		{@html AppStoreIcon()}
	</div>
	<nav class="gap-xl space-y-8">
		<div>
			<ul class="gap-md space-y-1">
				{#each navItems as item (item.name)}
					<li>
						<a
							class="flex items-center rounded-md px-3 py-2 font-medium text-sm transition-colors {item.link === activeRoute
								? 'bg-background-disabled/80 text-text-primary'
								: 'text-text-secondary hover:bg-background-disabled/50'}"
							href={item.link}
						>
							<span class="mr-4 h-6 w-6 text-text-secondary">{@html item.icon}</span>
							<span>{item.name}</span>
						</a>
					</li>
				{/each}
			</ul>
		</div>

		<div class="border-outline/80 border-t pt-6">
			<h3 class="mb-2 px-3 font-semibold text-text-secondary text-xs uppercase tracking-wide">
				Categories
			</h3>
			<ul class="gap-md space-y-1">
				{#each categories as category (category.name)}
					<li>
						<a
							class="flex items-center rounded-md px-3 py-2 font-medium text-sm transition-colors {category.link === activeRoute
								? 'bg-background-disabled/80 text-text-primary'
								: 'text-text-secondary hover:bg-background-disabled/50'}"
							href={category.link}
						>
							<img
								alt=""
								class="mr-4 h-6 w-6 rounded-md"
								height={24}
								src={category.iconUrl}
								width={24}
							/>
							<span>{category.name}</span>
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</nav>
</aside>
