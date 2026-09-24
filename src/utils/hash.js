/**
 * A deterministic pseudo-hash utility for ledger visual presentation.
 * walks every character once in O(n) time, where n = str.length.
 *
 * @param {string} str - Arbitrary input string.
 * @returns {string} 14-character hex string.
 */
const strHash = (str) => {
	let h1 = 0xdeadbeef ^ str.length;
	let h2 = 0x41c6ce57 ^ str.length;

	for (let i = 0; i < str.length; i += 1) {
		const ch = str.charCodeAt(i);
		h1 = Math.imul(h1 ^ ch, 2654435761);
		h2 = Math.imul(h2 ^ ch, 1597334677);
	}

	h1 =
		Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^
		Math.imul(h2 ^ (h2 >>> 13), 3266489909);
	h2 =
		Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^
		Math.imul(h1 ^ (h1 >>> 13), 3266489909);

	const full = (4294967296 * (2097151 & h2) + (h1 >>> 0)).toString(16);
	return full.padStart(14, "0");
};

/**
 * Format a hash into the shortened "0x1a2b3c…9f0e" display style.
 *
 * @param {string} str - Input to hash.
 * @returns {string} Truncated hex hash.
 */
const truncHash = (str) => {
	const h = strHash(str);
	return `0x${h.slice(0, 6)}…${h.slice(-4)}`;
};

export { strHash, truncHash };
