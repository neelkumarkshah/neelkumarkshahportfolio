import PropTypes from "prop-types";
import styles from "./ProjectDiagram.module.css";

const ProjectDiagram = ({ architecture }) => {
	if (!architecture || !architecture.layers || architecture.layers.length === 0) {
		return null;
	}

	return (
		<div className={styles.diagramWrapper} aria-label={`System diagram: ${architecture.title}`}>
			<div className={styles.diagramTitle}>
				<span className="material-symbols-outlined" aria-hidden="true">
					schema
				</span>
				<span>{architecture.title}</span>
			</div>

			<div className={styles.flowChain}>
				{architecture.layers.map((layer, index) => (
					<div key={index} className={styles.layerStep}>
						<div className={styles.layerCard}>
							<div className={styles.layerIndex}>STEP 0{index + 1}</div>
							<div className={styles.layerName}>{layer.name}</div>
							<div className={styles.layerDesc}>{layer.desc}</div>
						</div>
						{index < architecture.layers.length - 1 && (
							<div className={styles.flowArrow} aria-hidden="true">
								<span className="material-symbols-outlined">arrow_forward</span>
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
};

ProjectDiagram.propTypes = {
	architecture: PropTypes.shape({
		title: PropTypes.string,
		layers: PropTypes.arrayOf(
			PropTypes.shape({
				name: PropTypes.string.isRequired,
				desc: PropTypes.string.isRequired,
			}),
		),
	}),
};

export { ProjectDiagram };
