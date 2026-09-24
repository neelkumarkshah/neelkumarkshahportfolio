import PropTypes from "prop-types";
import RBButton from "react-bootstrap/Button";
import styles from "./Button.module.css";

const Button = ({
	variant = "solid",
	size = "md",
	href,
	icon,
	iconPosition = "right",
	children,
	className = "",
	disabled = false,
	type = "button",
	onClick,
	...rest
}) => {
	const variantClass = styles[variant] || styles.solid;
	const sizeClass = styles[`size${size.charAt(0).toUpperCase() + size.slice(1)}`] || styles.sizeMd;

	return (
		<RBButton
			as={href ? "a" : "button"}
			href={href}
			type={href ? undefined : type}
			disabled={disabled}
			onClick={onClick}
			className={`${styles.button} ${variantClass} ${sizeClass} ${className}`}
			{...rest}
		>
			{icon && iconPosition === "left" && (
				<span className={`material-symbols-outlined ${styles.icon} ${styles.iconLeft}`} aria-hidden="true">
					{icon}
				</span>
			)}
			<span className={styles.label}>{children}</span>
			{icon && iconPosition === "right" && (
				<span className={`material-symbols-outlined ${styles.icon} ${styles.iconRight}`} aria-hidden="true">
					{icon}
				</span>
			)}
		</RBButton>
	);
};

Button.propTypes = {
	variant: PropTypes.oneOf(["solid", "outline", "ghost", "secondary", "cyan"]),
	size: PropTypes.oneOf(["sm", "md", "lg"]),
	href: PropTypes.string,
	icon: PropTypes.string,
	iconPosition: PropTypes.oneOf(["left", "right"]),
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	disabled: PropTypes.bool,
	type: PropTypes.string,
	onClick: PropTypes.func,
};

export { Button };
