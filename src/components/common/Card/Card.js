import PropTypes from "prop-types";
import styles from "./Card.module.css";

const Card = ({
	as: Component = "div",
	hover = true,
	padding = "md",
	glow = false,
	className = "",
	children,
	...rest
}) => {
	const paddingClass = {
		sm: styles.paddingSm,
		md: styles.paddingMd,
		lg: styles.paddingLg,
		none: styles.paddingNone,
	}[padding] || styles.paddingMd;

	const classNames = [
		styles.card,
		paddingClass,
		hover ? styles.hover : "",
		glow ? styles.glow : "",
		className,
	]
		.filter(Boolean)
		.join(" ");

	return (
		<Component className={classNames} {...rest}>
			{children}
		</Component>
	);
};

Card.propTypes = {
	as: PropTypes.elementType,
	hover: PropTypes.bool,
	glow: PropTypes.bool,
	padding: PropTypes.oneOf(["none", "sm", "md", "lg"]),
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
};

export { Card };
