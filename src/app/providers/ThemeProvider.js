import { createContext, useContext, useEffect, useState, useMemo, useCallback } from "react";
import { THEMES, STORAGE_KEYS } from "../../constants/theme";
import { getStorageItem, setStorageItem } from "../../utils/storage";

const ThemeContext = createContext({
	theme: THEMES.DARK,
	isDark: true,
	toggleTheme: () => {},
	setTheme: () => {},
});

const ThemeProvider = ({ children }) => {
	const [theme, setThemeState] = useState(() => {
		const savedTheme = getStorageItem(STORAGE_KEYS.THEME);
		if (savedTheme === THEMES.LIGHT || savedTheme === THEMES.DARK) {
			return savedTheme;
		}
		if (
			typeof window !== "undefined" &&
			window.matchMedia &&
			window.matchMedia("(prefers-color-scheme: light)").matches
		) {
			return THEMES.LIGHT;
		}
		return THEMES.DARK;
	});

	useEffect(() => {
		const root = document.documentElement;
		root.setAttribute("data-theme", theme);
		root.style.colorScheme = theme;
		setStorageItem(STORAGE_KEYS.THEME, theme);
	}, [theme]);

	useEffect(() => {
		if (typeof window === "undefined" || !window.matchMedia) return;
		const mediaQuery = window.matchMedia("(prefers-color-scheme: light)");
		const handleChange = (e) => {
			const saved = getStorageItem(STORAGE_KEYS.THEME);
			if (!saved) {
				setThemeState(e.matches ? THEMES.LIGHT : THEMES.DARK);
			}
		};
		mediaQuery.addEventListener("change", handleChange);
		return () => mediaQuery.removeEventListener("change", handleChange);
	}, []);

	const toggleTheme = useCallback(() => {
		setThemeState((prev) => (prev === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK));
	}, []);

	const setTheme = useCallback((newTheme) => {
		if (newTheme === THEMES.DARK || newTheme === THEMES.LIGHT) {
			setThemeState(newTheme);
		}
	}, []);

	const value = useMemo(
		() => ({
			theme,
			isDark: theme === THEMES.DARK,
			toggleTheme,
			setTheme,
		}),
		[theme, toggleTheme, setTheme],
	);

	return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

const useTheme = () => {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}
	return context;
};

export { ThemeProvider, useTheme, ThemeContext };
