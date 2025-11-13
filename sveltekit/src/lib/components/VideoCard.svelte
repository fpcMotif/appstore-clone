<script lang="ts">
import type { VideoCardData } from "$lib/types";

const { data } = $props<{ data: VideoCardData }>();
</script>

<a
	class="card-interactive relative block overflow-hidden rounded-2xl"
	href={data.link}
>
	<div class="relative">
		<video
			class="h-48 w-full object-cover"
			poster={data.videoPosterUrl}
			preload="metadata"
		>
			<source src={data.videoSrc} type="video/mp4" />
			<track kind="captions" srcLang="en" label="English captions" />
		</video>
		<div class="absolute inset-0 flex items-center justify-center">
			<div class="flex h-12 w-12 items-center justify-center rounded-full bg-black/50">
				<svg
					class="text-white ml-1"
					fill="currentColor"
					height="16"
					viewBox="0 0 16 16"
					width="16"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M4 2.5v11l8-5.5z" />
				</svg>
			</div>
		</div>
	</div>
	{#if data.appInfo}
		<div class="p-4">
			<AppLockup appInfo={data.appInfo} />
		</div>
	{/if}
</a>
