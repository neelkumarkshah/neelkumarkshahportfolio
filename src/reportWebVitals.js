/**
 * Measures Core Web Vitals (CLS, FID, FCP, LCP, TTFB).
 * Uses async/await with dynamic import to keep initial bundle size minimal.
 *
 * @param {Function} onPerfEntry - Optional callback for performance metrics.
 */
const reportWebVitals = (onPerfEntry) => {
	if (!(onPerfEntry && onPerfEntry instanceof Function)) return;

	const handleEntries = async () => {
		const { getCLS, getFID, getFCP, getLCP, getTTFB } = await import("web-vitals");
		getCLS(onPerfEntry);
		getFID(onPerfEntry);
		getFCP(onPerfEntry);
		getLCP(onPerfEntry);
		getTTFB(onPerfEntry);
	};

	handleEntries();
};

export { reportWebVitals };
