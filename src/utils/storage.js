/**
 * Safe localStorage wrapper that handles exceptions in restricted environments
 * (such as private browsing or embedded iframes where window.localStorage is blocked).
 */
const getStorageItem = (key, fallback = null) => {
	try {
		if (typeof window === "undefined" || !window.localStorage) {
			return fallback;
		}
		const item = window.localStorage.getItem(key);
		return item !== null ? item : fallback;
	} catch (error) {
		console.warn(`[storage] Failed to read key "${key}":`, error);
		return fallback;
	}
};

const setStorageItem = (key, value) => {
	try {
		if (typeof window === "undefined" || !window.localStorage) {
			return false;
		}
		window.localStorage.setItem(key, value);
		return true;
	} catch (error) {
		console.warn(`[storage] Failed to save key "${key}":`, error);
		return false;
	}
};

const removeStorageItem = (key) => {
	try {
		if (typeof window === "undefined" || !window.localStorage) {
			return false;
		}
		window.localStorage.removeItem(key);
		return true;
	} catch (error) {
		console.warn(`[storage] Failed to remove key "${key}":`, error);
		return false;
	}
};

export { getStorageItem, setStorageItem, removeStorageItem };
