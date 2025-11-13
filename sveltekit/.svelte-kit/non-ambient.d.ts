
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/apps" | "/arcade" | "/category" | "/category/[slug]" | "/games" | "/search";
		RouteParams(): {
			"/category/[slug]": { slug: string }
		};
		LayoutParams(): {
			"/": { slug?: string };
			"/apps": Record<string, never>;
			"/arcade": Record<string, never>;
			"/category": { slug?: string };
			"/category/[slug]": { slug: string };
			"/games": Record<string, never>;
			"/search": Record<string, never>
		};
		Pathname(): "/" | "/apps" | "/apps/" | "/arcade" | "/arcade/" | "/category" | "/category/" | `/category/${string}` & {} | `/category/${string}/` & {} | "/games" | "/games/" | "/search" | "/search/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/favicon.svg" | "/robots.txt" | string & {};
	}
}