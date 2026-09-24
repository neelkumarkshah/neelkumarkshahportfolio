import "@testing-library/jest-dom";

// Polyfill window.matchMedia for Jest JSDOM
if (typeof window !== "undefined") {
	window.matchMedia =
		window.matchMedia ||
		function () {
			return {
				matches: false,
				addListener: function () {},
				removeListener: function () {},
				addEventListener: function () {},
				removeEventListener: function () {},
				dispatchEvent: function () {},
			};
		};

	// Polyfill IntersectionObserver
	class MockIntersectionObserver {
		constructor(callback) {
			this.callback = callback;
		}
		observe() {}
		unobserve() {}
		disconnect() {}
	}

	window.IntersectionObserver =
		window.IntersectionObserver || MockIntersectionObserver;
}

// Polyfill HTMLCanvasElement.prototype.getContext for JSDOM
if (typeof HTMLCanvasElement !== "undefined") {
	HTMLCanvasElement.prototype.getContext = () => ({
		clearRect: () => {},
		fillRect: () => {},
		beginPath: () => {},
		moveTo: () => {},
		lineTo: () => {},
		closePath: () => {},
		stroke: () => {},
		fill: () => {},
		arc: () => {},
		fillText: () => {},
		measureText: () => ({ width: 0 }),
		setTransform: () => {},
		drawImage: () => {},
		save: () => {},
		restore: () => {},
	});
}
