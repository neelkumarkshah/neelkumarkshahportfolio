import PropTypes from "prop-types";
import styles from "./IconTile.module.css";

const TONE_CLASS = {
	accent: "toneAccent",
	secondary: "toneSecondary",
	tertiary: "toneTertiary",
	neutral: "toneNeutral",
	cyan: "toneCyan",
};

const IconTile = ({
	icon,
	tone = "accent",
	size = "sm",
	shape = "rounded",
	className = "",
}) => {
	const toneClass = styles[TONE_CLASS[tone]] || styles.toneAccent;
	const sizeClass = size === "lg" ? styles.sizeLg : styles.sizeSm;
	const shapeClass = shape === "circle" ? styles.circle : styles.rounded;

	return (
		<div className={`${styles.tile} ${toneClass} ${sizeClass} ${shapeClass} ${className}`}>
			<span className="material-symbols-outlined" aria-hidden="true">
				{icon}
			</span>
		</div>
	);
};

IconTile.propTypes = {
	icon: PropTypes.string.isRequired,
	tone: PropTypes.oneOf(["accent", "secondary", "tertiary", "neutral", "cyan"]),
	size: PropTypes.oneOf(["sm", "md", "lg"]),
	shape: PropTypes.oneOf(["rounded", "circle"]),
	className: PropTypes.string,
};

export { IconTile };
