import PropTypes from "prop-types";
import styles from "./SectionHeading.module.css";

const SectionHeading = ({ eyebrow, title, subtitle, align = "left", className = "" }) => (
	<div
		className={`${styles.wrapper} ${align === "center-mobile" ? styles.centerMobile : ""} ${align === "center" ? styles.center : ""} ${className}`}
	>
		{eyebrow && <div className={styles.eyebrow}>{eyebrow}</div>}
		<h2 className={styles.title}>{title}</h2>
		{subtitle && <p className={styles.subtitle}>{subtitle}</p>}
	</div>
);

SectionHeading.propTypes = {
	eyebrow: PropTypes.string,
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string,
	align: PropTypes.oneOf(["left", "center", "center-mobile"]),
	className: PropTypes.string,
};

export { SectionHeading };
