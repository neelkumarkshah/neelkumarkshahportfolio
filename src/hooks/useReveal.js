import { useEffect, useRef, useState } from "react";

const useReveal = ({ threshold = 0.15, rootMargin = "0px 0px -8% 0px" } = {}) => {
	const ref = useRef(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const node = ref.current;
		if (!node) return undefined;

		const prefersReducedMotion =
			typeof window !== "undefined" &&
			window.matchMedia &&
			window.matchMedia("(prefers-reduced-motion: reduce)").matches;

		if (prefersReducedMotion) {
			setIsVisible(true);
			return undefined;
		}

		if (typeof IntersectionObserver === "undefined") {
			setIsVisible(true);
			return undefined;
		}

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.disconnect();
				}
			},
			{ threshold, rootMargin },
		);

		observer.observe(node);
		return () => observer.disconnect();
	}, [threshold, rootMargin]);

	return [ref, isVisible];
};

export { useReveal };
