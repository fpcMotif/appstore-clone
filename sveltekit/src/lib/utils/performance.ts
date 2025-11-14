/**
 * Performance utilities matching apps.apple.com-main reference patterns
 * Based on enterprise-grade implementations for smooth animations and search
 */

/**
 * Creates a debounced function that delays invoking func until
 * after delayMs milliseconds have elapsed since the last time the
 * debounced function was invoked.
 * 
 * @param fn - Function to debounce
 * @param delayMs - Delay in milliseconds
 * @param immediate - Specify invoking on the leading edge of the timeout
 * @returns Debounced function with proper TypeScript generics
 */
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

/**
 * Creates a throttled function that only invokes func at most once per every waitMs milliseconds.
 * 
 * @param fn - Function to throttle
 * @param delayMs - Throttle delay in milliseconds
 * @returns Throttled function with proper TypeScript generics
 */
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
            // Schedule the call for the next available slot
            const remainingTime = delayMs - timeSinceLastCall;
            timerId = setTimeout(() => {
                lastCallTime = Date.now();
                timerId = null;
                fn.apply(this, args);
            }, remainingTime);
        }
    };
}

/**
 * RAF (RequestAnimationFrame) queue for smooth animations
 * Prevents layout thrashing by batching DOM reads/writes
 */
export class RAFQueue {
    private queue: Array<() => void> = [];
    private isScheduled = false;

    /**
     * Add a function to the RAF queue
     * @param fn Function to execute on next animation frame
     */
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

        // Execute all queued tasks
        tasks.forEach(task => {
            try {
                task();
            } catch (error) {
                console.error('Error in RAF queue task:', error);
            }
        });
    }

    /**
     * Clear all pending tasks
     */
    clear(): void {
        this.queue.length = 0;
        this.isScheduled = false;
    }
}

// Global RAF queue instance
export const rafQueue = new RAFQueue();

// Default delays matching reference patterns
export const DEFAULT_MOUSE_OVER_DELAY = 300;
export const DEFAULT_SEARCH_DEBOUNCE_DELAY = 300;
export const DEFAULT_SCROLL_THROTTLE_DELAY = 16; // ~60fps
