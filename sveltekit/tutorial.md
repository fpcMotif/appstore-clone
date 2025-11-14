# Client Tutorial: Writing High-Quality Code

## Memory Management: Prevent Memory Leaks

### Problem: Event listeners that never get removed
```typescript
// ❌ BAD - Memory leak
function useMediaQuery() {
    window.addEventListener('resize', updateMediaQuery);
    // No cleanup - listener stays forever
}

// ❌ BAD - Component unmount doesn't clean up
onMount(() => {
    window.addEventListener('scroll', handleScroll);
    // Component unmounts, but scroll listener remains
});
```

### Solution: Proper cleanup patterns
```typescript
// ✅ GOOD - Memory safe
export function useMediaQuery() {
    const resizeListener = () => updateMediaQuery();
    window.addEventListener('resize', resizeListener);
    
    // Return cleanup function
    return () => {
        window.removeEventListener('resize', resizeListener);
    };
}

// ✅ GOOD - Component lifecycle integration
onMount(() => {
    const cleanup = useMediaQuery();
    
    // Return cleanup function - called on unmount
    return cleanup;
});

// ✅ GOOD - Store with cleanup (from our implementation)
const mediaQueryStore = writable('medium');

if (browser) {
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

### Key Principles
1. **Every event listener needs cleanup** - `addEventListener` requires `removeEventListener`
2. **Component lifecycle** - Use `onMount` return function for cleanup
3. **Store cleanup** - Track cleanup functions for manual cleanup if needed
4. **Timer cleanup** - `setTimeout`/`setInterval` also need `clearTimeout`/`clearInterval`

## TypeScript Generics: Advanced Utility Functions

### Problem: Functions that lose type information
```typescript
// ❌ BAD - Loses type safety
function debounce(fn: any, delay: number) {
    return function(...args: any[]) {
        // Returns any - no type safety
    };
}

// ❌ BAD - Hard to use correctly
const debounced = debounce((query: string) => {
    // query is any, not string
    return query.length; // No autocomplete, no type checking
}, 300);
```

### Solution: Preserve types with generics
```typescript
// ✅ GOOD - Type-safe utilities
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

// ✅ GOOD - Full type safety preserved
const debouncedSearch = debounce((query: string) => {
    // query is properly typed as string
    console.log(query.length); // Full autocomplete and type checking
    return query.trim();
}, 300);

// ✅ GOOD - Complex generics with multiple parameters
export function throttle<F extends (...args: any[]) => any>(
    fn: F,
    delayMs: number,
): (...args: Parameters<F>) => void {
    let lastCallTime = 0;
    
    return function throttled(...args: Parameters<F>) {
        const now = Date.now();
        const timeSinceLastCall = now - lastCallTime;

        if (timeSinceLastCall >= delayMs) {
            lastCallTime = now;
            fn.apply(this, args);
        }
    };
}

// Usage with complex function signatures
const throttledScroll = throttle(
    (event: WheelEvent, element: HTMLElement, offset: number) => {
        // All parameters are properly typed
        element.scrollTop += event.deltaY * offset;
    },
    16 // ~60fps
);
```

### Key Principles
1. **Preserve input types** - Use `Parameters<F>` to get function parameter types
2. **Preserve return types** - Use `ReturnType<F>` if you need return type
3. **Constraint generics** - Use `F extends (...args: any[]) => any` for functions
4. **Maintain signatures** - Keep the same function shape as input

## Performance Optimization: Smooth UX

### Problem: Expensive operations on every interaction
```typescript
// ❌ BAD - Search on every keystroke
function handleSearch(event: KeyboardEvent) {
    const query = event.target.value;
    performExpensiveAPICall(query); // Called on every keystroke
}

// ❌ BAD - Expensive DOM operations on scroll
function handleScroll() {
    updateLayout(); // Called hundreds of times during scroll
    recalculatePositions(); // Performance killer
}

// ❌ BAD - Animation without frame sync
function animateElement() {
    element.style.transform = `translateX(${x}px)`; // Can cause layout thrashing
    x += 1;
    requestAnimationFrame(animateElement); // Not optimal
}
```

### Solution: Debounce, throttle, and RAF queue
```typescript
// ✅ GOOD - Debounced search
const debouncedSearch = debounce((query: string) => {
    if (query.trim()) {
        performExpensiveAPICall(query);
    }
}, 300); // Only executes after 300ms pause

function handleSearch(event: KeyboardEvent) {
    const query = event.target.value;
    debouncedSearch(query); // Smooth user experience
}

// ✅ GOOD - Throttled scroll events
const throttledScroll = throttle(() => {
    updateLayout();
    recalculatePositions();
}, 16); // ~60fps, prevents excessive calls

// ✅ GOOD - RAF queue for smooth animations
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

// Usage for smooth animations
const animationQueue = new RAFQueue();

function smoothAnimation() {
    animationQueue.add(() => {
        element.style.transform = `translateX(${x}px)`;
        x += 1;
        
        if (x < targetX) {
            smoothAnimation(); // Continue animation
        }
    });
}
```

### Key Principles
1. **Debounce user input** - Search, typing, form inputs (300ms default)
2. **Throttle continuous events** - Scroll, resize, mousemove (16ms for 60fps)
3. **Batch DOM operations** - Use RAF queue to prevent layout thrashing
4. **Optimize critical path** - Prioritize user-visible interactions

## Feature Flag Strategy: Gradual Rollouts

### Problem: Hard-coded feature toggles
```typescript
// ❌ BAD - Hard-coded features
function showNewFeature() {
    return true; // No control, no rollback
}

// ❌ BAD - No organization
function isNewUIEnabled() {
    return process.env.FEATURE_NEW_UI === 'true';
}

function isSearchEnhanced() {
    return process.env.FEATURE_SEARCH === 'true';
}
```

### Solution: Enterprise feature flag system
```typescript
// ✅ GOOD - Organized feature flags
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
    
    // UI features
    UI_ENHANCED_TRANSITIONS: 'ui.enhanced-transitions',
    UI_RESPONSIVE_LAYOUT: 'ui.responsive-layout',
} as const;

export type FeatureFlagKey = typeof FEATURE_FLAGS[keyof typeof FEATURE_FLAGS];

// ✅ GOOD - Feature flag system with fallbacks
export const isEnabled = (key: string): boolean => {
    if (typeof window !== 'undefined') {
        return window._featureKit?.isEnabled(key) ?? false;
    }
    return false; // SSR-safe fallback
};

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

// ✅ GOOD - Usage in components
function showNewFeature() {
    return featureFlags.getValue(FEATURE_FLAGS.NAVIGATION_ENHANCED_SEARCH, false);
}

// ✅ GOOD - Development utilities
export const devFeatureFlags = {
    setEnabled: (key: FeatureFlagKey, enabled: boolean): void => {
        if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
            if (!window._featureKit) {
                window._featureKit = {
                    isEnabled: (k: string) => k === key ? enabled : false
                };
            }
        }
    },
    
    mockFlags: (flags: Partial<Record<FeatureFlagKey, boolean>>): void => {
        if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
            window._featureKit = {
                isEnabled: (k: string) => flags[k as FeatureFlagKey] ?? false
            };
        }
    },
};

// Development testing
devFeatureFlags.setEnabled(FEATURE_FLAGS.SEARCH_DEBOUNCE_OPTIMIZATION, true);
```

### Key Principles
1. **Organize by feature area** - Group related flags together
2. **Provide fallbacks** - Always have a default behavior
3. **SSR-safe** - Handle server-side rendering gracefully
4. **Development tools** - Enable easy testing and debugging

## Enterprise Patterns: Production-Ready Code

### Problem: Utilities without error handling
```typescript
// ❌ BAD - No error handling
function riskyOperation(data: any) {
    return data.map(item => process(item)); // Crashes if data is null
}

// ❌ BAD - No logging
function apiCall(url: string) {
    return fetch(url).then(res => res.json()); // Silent failures
}

// ❌ BAD - No validation
function updateUser(userData: any) {
    database.save(userData); // Saves invalid data
}
```

### Solution: Comprehensive error handling
```typescript
// ✅ GOOD - Production ready with full error handling
export function safeOperation<T, R>(
    data: T[], 
    processor: (item: T) => R
): R[] {
    try {
        // Input validation
        if (!Array.isArray(data)) {
            console.warn('Expected array, got:', typeof data, data);
            return [];
        }
        
        // Process with error isolation
        return data.map((item, index) => {
            try {
                // Item validation
                if (item == null) {
                    console.warn(`Null item at index ${index}`);
                    return null;
                }
                
                return processor(item);
            } catch (error) {
                console.error(`Error processing item at index ${index}:`, item, error);
                return null; // Graceful fallback
            }
        }).filter((item): item is R => item !== null);
        
    } catch (error) {
        console.error('Critical error in safeOperation:', error);
        return []; // Ultimate fallback
    }
}

// ✅ GOOD - API calls with proper error handling
export async function safeApiCall<T>(
    url: string, 
    options: RequestInit = {}
): Promise<{ data: T | null; error: string | null }> {
    try {
        // Input validation
        if (!url || typeof url !== 'string') {
            return { data: null, error: 'Invalid URL provided' };
        }
        
        // Timeout handling
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000);
        
        const response = await fetch(url, {
            ...options,
            signal: controller.signal,
        });
        
        clearTimeout(timeoutId);
        
        if (!response.ok) {
            return { 
                data: null, 
                error: `HTTP ${response.status}: ${response.statusText}` 
            };
        }
        
        const data = await response.json();
        return { data, error: null };
        
    } catch (error) {
        clearTimeout(timeoutId);
        
        if (error instanceof Error) {
            if (error.name === 'AbortError') {
                return { data: null, error: 'Request timeout' };
            }
            return { data: null, error: error.message };
        }
        
        return { data: null, error: 'Unknown error occurred' };
    }
}

// ✅ GOOD - Data validation and sanitization
export function validateUserData(userData: unknown): { isValid: boolean; sanitizedData?: any; errors?: string[] } {
    const errors: string[] = [];
    
    // Type checking
    if (typeof userData !== 'object' || userData === null) {
        errors.push('User data must be an object');
        return { isValid: false, errors };
    }
    
    const data = userData as Record<string, unknown>;
    const sanitized: Record<string, unknown> = {};
    
    // Required fields
    if (!data.email || typeof data.email !== 'string') {
        errors.push('Email is required and must be a string');
    } else {
        // Sanitize email
        sanitized.email = data.email.trim().toLowerCase();
    }
    
    if (!data.name || typeof data.name !== 'string') {
        errors.push('Name is required and must be a string');
    } else {
        // Sanitize name
        sanitized.name = data.name.trim().substring(0, 100); // Limit length
    }
    
    // Optional fields with validation
    if (data.age !== undefined) {
        const age = Number(data.age);
        if (isNaN(age) || age < 0 || age > 150) {
            errors.push('Age must be a valid number between 0 and 150');
        } else {
            sanitized.age = age;
        }
    }
    
    if (errors.length > 0) {
        return { isValid: false, errors };
    }
    
    return { isValid: true, sanitizedData: sanitized };
}

// ✅ GOOD - Usage example
async function updateUser(userData: unknown) {
    // Validate input
    const validation = validateUserData(userData);
    if (!validation.isValid) {
        console.error('Validation failed:', validation.errors);
        return { success: false, errors: validation.errors };
    }
    
    // Make API call with error handling
    const result = await safeApiCall('/api/users', {
        method: 'POST',
        body: JSON.stringify(validation.sanitizedData),
        headers: { 'Content-Type': 'application/json' },
    });
    
    if (result.error) {
        console.error('API call failed:', result.error);
        return { success: false, error: result.error };
    }
    
    return { success: true, data: result.data };
}
```

### Key Principles
1. **Validate all inputs** - Never trust external data
2. **Handle errors gracefully** - Never let production code crash
3. **Log errors appropriately** - Provide context for debugging
4. **Provide fallbacks** - Always have a backup plan
5. **Sanitize data** - Clean and validate before processing

## Complete Example: High-Quality Component

```typescript
// src/lib/components/SearchInput.svelte
<script lang="ts">
    import { debounce, DEFAULT_SEARCH_DEBOUNCE_DELAY } from '$lib/utils/performance';
    import { featureFlags, FEATURE_FLAGS } from '$lib/utils/feature-flags';
    import { safeApiCall } from '$lib/utils/api';
    
    // Props with TypeScript
    export let placeholder: string = 'Search...';
    export let disabled: boolean = false;
    
    // State with proper typing
    let searchQuery = $state('');
    let isLoading = $state(false);
    let error = $state<string | null>(null);
    
    // Debounced search with performance optimization
    const debouncedSearch = debounce(async (query: string) => {
        if (!query.trim()) {
            results = [];
            return;
        }
        
        isLoading = true;
        error = null;
        
        try {
            const result = await safeApiCall(`/api/search?q=${encodeURIComponent(query)}`);
            
            if (result.error) {
                error = result.error;
                results = [];
            } else {
                results = result.data || [];
            }
        } catch (err) {
            error = 'Search failed. Please try again.';
            results = [];
        } finally {
            isLoading = false;
        }
    }, DEFAULT_SEARCH_DEBOUNCE_DELAY);
    
    // Enhanced search with feature flags
    function handleSearch(event: KeyboardEvent) {
        const target = event.target as HTMLInputElement;
        searchQuery = target.value;
        
        // Use feature flags for gradual rollouts
        if (featureFlags.getValue(FEATURE_FLAGS.SEARCH_DEBOUNCE_OPTIMIZATION, true)) {
            debouncedSearch(searchQuery);
        } else {
            // Immediate search for fallback
            performImmediateSearch(searchQuery);
        }
    }
    
    // Cleanup on component destroy
    $effect(() => {
        return () => {
            // Cleanup any pending debounced calls
            debouncedSearch.cancel?.();
        };
    });
</script>

<div class="search-container">
    <input
        type="search"
        {placeholder}
        {disabled}
        {value}
        onkeyup={handleSearch}
        class:loading={isLoading}
        class:error={!!error}
    />
    
    {#if isLoading}
        <div class="loading-indicator">Searching...</div>
    {/if}
    
    {#if error}
        <div class="error-message">{error}</div>
    {/if}
    
    {#if results.length > 0}
        <div class="search-results">
            {#each results as result}
                <div class="result-item">{result.title}</div>
            {/each}
        </div>
    {/if}
</div>
```

## Key Principles Summary

1. **Always clean up** - Every event listener, timer, and subscription needs cleanup
2. **Preserve types** - Use generics to maintain type safety in utilities
3. **Optimize performance** - Debounce user input, throttle animations
4. **Control features** - Use flags for gradual rollouts and A/B testing
5. **Handle errors** - Never let production code crash unexpectedly
6. **Validate inputs** - Always sanitize and validate external data
7. **Provide fallbacks** - Always have a backup plan for failures
8. **Log appropriately** - Give context for debugging without exposing secrets

These patterns ensure your code is maintainable, performant, and production-ready like the apps.apple.com-main reference codebase.
