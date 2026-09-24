import { useMemo } from "react";
import { truncHash } from "utils/hash";

/**
 * Builds a deterministic linked hash chain for ledger timeline display.
 * Time complexity: O(n) where n is the number of entries.
 * Space complexity: O(n) stored in a fast Map lookup.
 *
 * @param {Array<Object>} entries - List of career entries with id and seed.
 * @returns {Map<string, { hash: string, prevHash: string }>}
 */
const useHashChain = (entries) =>
	useMemo(() => {
		const chronological = [...entries].reverse();
		const chainById = new Map();
		let prevHash = "GENESIS_BLOCK_0x00";

		for (const entry of chronological) {
			const hash = truncHash(entry.seed || entry.id);
			chainById.set(entry.id, { hash, prevHash });
			prevHash = hash;
		}

		return chainById;
	}, [entries]);

export { useHashChain };
