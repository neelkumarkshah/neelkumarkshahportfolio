import PropTypes from "prop-types";
import styles from "./Tag.module.css";

const Tag = ({ block = false, active = false, onClick, className = "", children }) => {
	const classNames = [
		styles.tag,
		block ? styles.block : "",
		active ? styles.active : "",
		onClick ? styles.clickable : "",
		className,
	]
		.filter(Boolean)
		.join(" ");

	if (onClick) {
		return (
			<button type="button" onClick={onClick} className={classNames}>
				{children}
			</button>
		);
	}

	return <span className={classNames}>{children}</span>;
};

Tag.propTypes = {
	block: PropTypes.bool,
	active: PropTypes.bool,
	onClick: PropTypes.func,
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
};

export { Tag };
