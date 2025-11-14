/**
 * Feature flag system matching apps.apple.com-main reference patterns
 * Provides enterprise-level feature flag integration for gradual rollouts
 */

// Feature flag interface extending potential window._featureKit
interface FeatureKit {
    isEnabled(key: string): boolean;
}

// Extend Window interface for TypeScript support
declare global {
    interface Window {
        _featureKit?: FeatureKit;
    }
}

/**
 * Check if a feature flag is enabled
 * Falls back to false if feature kit is unavailable or in SSR
 * 
 * @param key - Feature flag key to check
 * @returns boolean indicating if feature is enabled
 */
export const isEnabled = (key: string): boolean => {
    if (typeof window !== 'undefined') {
        return window._featureKit?.isEnabled(key) ?? false;
    }
    return false; // SSR-safe fallback
};

/**
 * Feature flag keys matching reference patterns
 * Organized by feature area for better management
 */
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

    // i18n features
    I18N_DYNAMIC_LOADING: 'i18n.dynamic-loading',
    I18N_FALLBACK_STRATEGY: 'i18n.fallback-strategy',
} as const;

export type FeatureFlagKey = typeof FEATURE_FLAGS[keyof typeof FEATURE_FLAGS];

/**
 * Feature flag utility functions
 */
export const featureFlags = {
    /**
     * Check if any of the given feature flags are enabled
     */
    isAnyEnabled: (keys: FeatureFlagKey[]): boolean => {
        return keys.some(key => isEnabled(key));
    },

    /**
     * Check if all of the given feature flags are enabled
     */
    areAllEnabled: (keys: FeatureFlagKey[]): boolean => {
        return keys.every(key => isEnabled(key));
    },

    /**
     * Get feature flag value with custom fallback
     */
    getValue: (key: FeatureFlagKey, fallback: boolean = false): boolean => {
        return isEnabled(key) ?? fallback;
    },
};

/**
 * Development utilities for feature flags
 * Only available in development mode
 */
export const devFeatureFlags = {
    /**
     * Enable/disable feature flags for testing (development only)
     */
    setEnabled: (key: FeatureFlagKey, enabled: boolean): void => {
        if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
            if (!window._featureKit) {
                window._featureKit = {
                    isEnabled: (k: string) => k === key ? enabled : false
                };
            }
        }
    },

    /**
     * Mock feature flags for development testing
     */
    mockFlags: (flags: Partial<Record<FeatureFlagKey, boolean>>): void => {
        if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
            window._featureKit = {
                isEnabled: (k: string) => flags[k as FeatureFlagKey] ?? false
            };
        }
    },
};
