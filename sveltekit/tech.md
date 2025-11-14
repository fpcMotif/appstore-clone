# Integration Guide: Excellent Practices from apps.apple.com-main Codebase

## Core Architecture Patterns

### Store Management with Proper Cleanup

#### Reference Pattern: Memory-safe media query store
```typescript
// From apps.apple.com-main/shared/components/src/stores/media-query.ts
export function buildMediaQueryStore(initialValue: string, mediaQueryConditions: Record<string, string>) {
    return readable(initialValue, (set) => {
        let mqls = {};
        let updateMediaQuery = () => set(calculateMediaQuery(mqls));
        
        for (const key in mediaQueryConditions) {
            mqls[key] = window.matchMedia(mediaQueryConditions[key]);
            mqls[key].addListener(updateMediaQuery);
        }
        
        return function (): void {  // CRITICAL: Cleanup function
            for (let key in mqls) {
                mqls[key].removeListener(updateMediaQuery);
            }
        };
    });
}
```

#### Our Implementation
```typescript
// src/lib/utils/media-queries.ts
const mediaQueryStore = writable<'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'>('medium');

if (browser) {
    const updateMediaQuery = () => {
        const width = window.innerWidth;
        // ... breakpoint logic
    };

    const resizeListener = () => updateMediaQuery();
    window.addEventListener('resize', resizeListener);
    
    // Cleanup function for proper memory management
    const cleanup = () => {
        window.removeEventListener('resize', resizeListener);
    };
    
    // Store cleanup reference for potential manual cleanup
    (mediaQueryStore as any)._cleanup = cleanup;
}
```

### Integration Steps

1. **Replace writable stores** with readable stores that return cleanup functions
2. **Add cleanup tracking** to prevent memory leaks in component unmounting
3. **Implement SSR-safe patterns** with proper browser detection

### Feature Flag System Integration

#### Enterprise Feature Flag Pattern
```typescript
// Reference pattern from apps.apple.com-main
export const isEnabled = (key: string): boolean => {
    if (typeof window !== 'undefined') {
        return window._featureKit?.isEnabled(key) ?? false;
    }
    return false; // SSR-safe fallback
};
```

#### Our Implementation
```typescript
// src/lib/utils/feature-flags.ts
export const FEATURE_FLAGS = {
    // Navigation features
    NAVIGATION_ENHANCED_SEARCH: 'navigation.enhanced-search',
    NAVIGATION_SIDEBAR_ANIMATIONS: 'navigation.sidebar-animations',
    
    // Search features
    SEARCH_SUGGESTIONS: 'search.suggestions',
    SEARCH_DEBOUNCE_OPTIMIZATION: 'search.debounce-optimization',
    
    // Performance features
    PERFORMANCE_RAF_QUEUE: 'performance.raf-queue',
    PERFORMANCE_LAZY_LOADING: 'performance.lazy-loading',
} as const;

export const featureFlags = {
    getValue: (key: FeatureFlagKey, fallback: boolean = false): boolean => {
        return isEnabled(key) ?? fallback;
    },
    isAnyEnabled: (keys: FeatureFlagKey[]): boolean => {
        return keys.some(key => isEnabled(key));
    },
    areAllEnabled: (keys: FeatureFlagKey[]): boolean => {
        return keys.every(key => isEnabled(key));
    },
};
```

### Integration Steps

1. **Create feature flag constants** organized by feature area
2. **Implement fallback strategies** for development and SSR
3. **Add development utilities** for testing feature flags

### Performance Utilities Pattern

#### Advanced Debounce with TypeScript Generics
```typescript
// Reference pattern from apps.apple.com-main/shared/components/src/utils/debounce.ts
export function debounce<F extends (...args: any[]) => any>(
    fn: F,
    delayMs: number,
    immediate = false,
): (...args: Parameters<F>) => void {
    let timerId: ReturnType<typeof setTimeout> | null = null;

    return function debounced(...args: Parameters<F>) {
        const shouldCallNow = immediate && !timerId;
        
        if (timerId) {
            clearTimeout(timerId);
        }

        if (shouldCallNow) {
            fn.apply(this, args);
        }

        timerId = setTimeout(() => {
            timerId = null;
            if (!immediate) {
                fn.apply(this, args);
            }
        }, delayMs);
    };
}
```

#### Our Implementation
```typescript
// src/lib/utils/performance.ts
export function throttle<F extends (...args: any[]) => any>(
    fn: F,
    delayMs: number,
): (...args: Parameters<F>) => void {
    let lastCallTime = 0;
    let timerId: ReturnType<typeof setTimeout> | null = null;

    return function throttled(...args: Parameters<F>) {
        const now = Date.now();
        const timeSinceLastCall = now - lastCallTime;

        if (timeSinceLastCall >= delayMs) {
            lastCallTime = now;
            fn.apply(this, args);
        } else if (!timerId) {
            const remainingTime = delayMs - timeSinceLastCall;
            timerId = setTimeout(() => {
                lastCallTime = Date.now();
                timerId = null;
                fn.apply(this, args);
            }, remainingTime);
        }
    };
}

// RAF Queue for smooth animations
export class RAFQueue {
    private queue: Array<() => void> = [];
    private isScheduled = false;

    add(fn: () => void): void {
        this.queue.push(fn);
        this.schedule();
    }

    private schedule(): void {
        if (!this.isScheduled) {
            this.isScheduled = true;
            requestAnimationFrame(() => this.flush());
        }
    }

    private flush(): void {
        const tasks = this.queue.splice(0);
        this.isScheduled = false;
        
        tasks.forEach(task => {
            try {
                task();
            } catch (error) {
                console.error('Error in RAF queue task:', error);
            }
        });
    }
}
```

### Integration Steps

1. **Implement utility functions** with proper TypeScript generics
2. **Add RAF queue system** for smooth animations
3. **Create default constants** for common use cases

### Component Integration Example

#### Enhanced Navigation with All Patterns
```typescript
// src/lib/components/Navigation.svelte
import { debounce, DEFAULT_SEARCH_DEBOUNCE_DELAY } from '$lib/utils/performance';
import { featureFlags, FEATURE_FLAGS } from '$lib/utils/feature-flags';

// Debounced search handler for performance
const debouncedSearch = debounce((query: string) => {
    if (query.trim()) {
        window.location.href = `/search?q=${encodeURIComponent(query)}`;
    }
}, DEFAULT_SEARCH_DEBOUNCE_DELAY);

// Enhanced search with feature flags
function handleSearch(event: KeyboardEvent) {
    const target = event.target as HTMLInputElement;
    searchQuery = target.value;

    // Use debounced search if optimization feature is enabled
    if (featureFlags.getValue(FEATURE_FLAGS.SEARCH_DEBOUNCE_OPTIMIZATION, true)) {
        debouncedSearch(searchQuery);
    } else {
        // Immediate search for fallback
        if (searchQuery.trim()) {
            window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
        }
    }
}
```

## Learning Strategy

### Study Priority Areas

1. **shared/components/src/** - Contains production-ready component patterns
   - `stores/` - Proper store management with cleanup
   - `utils/` - Performance, debounce, throttle implementations
   - `constants.ts` - Comprehensive event and state management patterns

2. **Key Files to Analyze**
   - `media-query.ts` - Memory-safe store patterns
   - `debounce.ts` - TypeScript generics in utilities
   - `constants.ts` - Enterprise-level constant organization

3. **Architecture Patterns**
   - Store cleanup and memory management
   - SSR-safe feature flag integration
   - Performance optimization utilities
   - TypeScript generics for type safety

### Implementation Checklist

- [ ] Store cleanup functions implemented
- [ ] Feature flag system with fallbacks
- [ ] Performance utilities (debounce/throttle/RAF)
- [ ] TypeScript generics in utilities
- [ ] Error handling in production code
- [ ] SSR-safe patterns throughout
- [ ] Component integration examples

## Benefits Achieved

1. **Memory Management** - No more memory leaks from event listeners
2. **Performance** - Smooth 60fps animations and optimized search
3. **Feature Control** - Gradual rollouts and A/B testing capability
4. **Type Safety** - Full TypeScript support with generics
5. **Production Ready** - Error handling and fallback strategies
