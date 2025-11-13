<script lang="ts">
const {
	title,
	subtitle,
	seeAllLink,
	contentClassName = "flex space-x-6",
	children,
} = $props<{
	title?: string;
	subtitle?: string;
	seeAllLink?: string;
	contentClassName?: string;
	children: import("svelte").Snippet;
}>();

const SCROLL_PERCENTAGE = 0.8;

const scrollRef: HTMLDivElement | undefined = $state();
let _canScrollLeft = $state(false);
let _canScrollRight = $state(false);

const checkForScroll = () => {
	if (scrollRef) {
		const { scrollLeft, scrollWidth, clientWidth } = scrollRef;
		_canScrollLeft = scrollLeft > 0;
		_canScrollRight = scrollLeft < scrollWidth - clientWidth - 1;
	}
};

const _scroll = (direction: "left" | "right") => {
	if (scrollRef) {
		const { scrollLeft, clientWidth } = scrollRef;
		const scrollAmount = clientWidth * SCROLL_PERCENTAGE;
		const newScrollLeft =
			direction === "left"
				? scrollLeft - scrollAmount
				: scrollLeft + scrollAmount;
		scrollRef.scrollTo({ left: newScrollLeft, behavior: "smooth" });
	}
};

$effect(() => {
	if (scrollRef) {
		checkForScroll();
		const handleScroll = () => checkForScroll();
		const handleResize = () => checkForScroll();

		scrollRef.addEventListener("scroll", handleScroll);
		window.addEventListener("resize", handleResize);

		return () => {
			scrollRef?.removeEventListener("scroll", handleScroll);
			window.removeEventListener("resize", handleResize);
		};
	}
});
</script>

<section>
	{#if title || subtitle}
		<div class="mb-4 flex items-end justify-between">
			<div>
				{#if title}
					<h2 class="font-bold text-2xl text-text-primary">{title}</h2>
				{/if}
				{#if subtitle}
					<p class="text-text-secondary">{subtitle}</p>
				{/if}
			</div>
			{#if seeAllLink}
				<a class="link font-semibold text-sm" href={seeAllLink}>
					See All
				</a>
			{/if}
		</div>
	{/if}
	<div class="group relative">
		<div
			bind:this={scrollRef}
			class="scrollbar-hide -mb-2 snap-x snap-mandatory overflow-x-auto scroll-smooth pb-2 {contentClassName}"
		>
			{@render children()}
		</div>
		<div class="hidden md:block">
			<button
				aria-label="Scroll left"
				class="-translate-y-1/2 absolute top-1/2 z-10 flex -left-4 h-8 w-6 items-center justify-center rounded-xl bg-background-disabled shadow-xl backdrop-blur transition-fast {_canScrollLeft
					? 'opacity-100'
					: 'opacity-0'}"
				disabled={!_canScrollLeft}
				onclick={() => _scroll('left')}
				type="button"
			>
				<svg
					class="mx-auto h-4 w-2 text-text-secondary"
					viewBox="0 0 9 31"
					xmlns="http://www.w3.org/2000/svg"
				>
					<title>Scroll arrow</title>
					<path
						d="M5.275 29.46a1.61 1.61 0 0 0 1.456 1.077c1.018 0 1.772-.737 1.772-1.737 0-.526-.277-1.186-.449-1.62l-4.68-11.912L8.05 3.363c.172-.442.45-1.116.45-1.625A1.702 1.702 0 0 0 6.728.002a1.603 1.603 0 0 0-1.456 1.09L.675 12.774c-.301.775-.677 1.744-.677 2.495 0 .754.376 1.705.677 2.498L5.272 29.46Z"
						fill="currentColor"
					/>
				</svg>
			</button>
			<button
				aria-label="Scroll right"
				class="translate-y-1/2 absolute bottom-4 right-4 z-10 flex h-8 w-6 items-center justify-center rounded-xl bg-background-disabled shadow-xl backdrop-blur transition-fast {_canScrollRight
					? 'opacity-100'
					: 'opacity-0'}"
				disabled={!_canScrollRight}
				onclick={() => _scroll('right')}
				type="button"
			>
				<svg
					class="mx-auto h-4 w-2 text-text-secondary rotate-180 transform"
					viewBox="0 0 9 31"
					xmlns="http://www.w3.org/2000/svg"
				>
					<title>Scroll arrow</title>
					<path
						d="M5.275 29.46a1.61 1.61 0 0 0 1.456 1.077c1.018 0 1.772-.737 1.772-1.737 0-.526-.277-1.186-.449-1.62l-4.68-11.912L8.05 3.363c.172-.442.45-1.116.45-1.625A1.702 1.702 0 0 0 6.728.002a1.603 1.603 0 0 0-1.456 1.09L.675 12.774c-.301.775-.677 1.744-.677 2.495 0 .754.376 1.705.677 2.498L5.272 29.46Z"
						fill="currentColor"
					/>
				</svg>
			</button>
		</div>
	</div>
</section>

