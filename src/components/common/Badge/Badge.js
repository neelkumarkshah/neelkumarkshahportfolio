import PropTypes from "prop-types";
import styles from "./Badge.module.css";

const TONE_CLASS = {
	accent: "toneAccent",
	secondary: "toneSecondary",
	tertiary: "toneTertiary",
	cyan: "toneCyan",
};

const Badge = ({ tone = "accent", icon, dot = false, children, className = "" }) => {
	const toneClass = styles[TONE_CLASS[tone]] || styles.toneAccent;

	return (
		<span className={`${styles.badge} ${toneClass} ${className}`}>
			{dot && <span className={styles.dot} aria-hidden="true" />}
			{icon && (
				<span className={`material-symbols-outlined ${styles.icon}`} aria-hidden="true">
					{icon}
				</span>
			)}
			{children}
		</span>
	);
};

Badge.propTypes = {
	tone: PropTypes.oneOf(["accent", "secondary", "tertiary", "cyan"]),
	icon: PropTypes.string,
	dot: PropTypes.bool,
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};

export { Badge };
