/**
 * A Promise-based delay utility for asynchronous operations.
 *
 * @param {number} ms - Milliseconds to delay.
 * @returns {Promise<void>}
 */
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export { sleep };
