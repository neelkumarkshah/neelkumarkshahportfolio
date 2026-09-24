import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { SectionHeading, Card, Tag, Badge } from "components/common";
import { projects } from "data/portfolioData";
import { SECTION_IDS } from "constants/routes";
import styles from "./Projects.module.css";

const SubmoduleCard = ({ submodule }) => {
	const tags = submodule.tags || submodule.tech || [];

	return (
		<div className={styles.submoduleCard}>
			<div className={styles.submoduleTopRow}>
				<Tag>REF: {submodule.ref}</Tag>
				<Badge tone="secondary" dot>
					{submodule.status}
				</Badge>
			</div>

			<div className={styles.submoduleIconHeader}>
				<span
					className={`material-symbols-outlined ${styles.submoduleIcon}`}
					aria-hidden="true">
					{submodule.icon}
				</span>
				<h4 className={styles.submoduleTitle}>{submodule.title}</h4>
			</div>

			<div className={styles.submoduleCategory}>{submodule.category}</div>
			<p className={styles.submoduleDesc}>{submodule.description}</p>

			<div className={styles.submoduleTags}>
				{tags.map((tag) => (
					<Tag key={tag}>{tag}</Tag>
				))}
			</div>
		</div>
	);
};

SubmoduleCard.propTypes = {
	submodule: PropTypes.shape({
		id: PropTypes.string.isRequired,
		ref: PropTypes.string.isRequired,
		status: PropTypes.string.isRequired,
		icon: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		category: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		tags: PropTypes.arrayOf(PropTypes.string),
		tech: PropTypes.arrayOf(PropTypes.string),
	}).isRequired,
};

const ProjectCard = ({ project }) => {
	const tags = project.tags || project.tech || [];
	const hasSubmodules =
		Array.isArray(project.submodules) && project.submodules.length > 0;

	return (
		<Card
			className={`${styles.card} ${hasSubmodules ? styles.flagshipCard : ""}`}>
			<span
				className={`material-symbols-outlined ${styles.watermark}`}
				aria-hidden="true">
				{project.icon}
			</span>

			<div className={styles.topRow}>
				<Tag>REF: {project.ref}</Tag>
				<Badge tone={hasSubmodules ? "accent" : "secondary"} dot>
					{project.status}
				</Badge>
			</div>

			<div className={styles.categoryBadge}>{project.category}</div>
			<h3
				className={`${styles.title} ${hasSubmodules ? styles.flagshipTitle : ""}`}>
				{project.title}
			</h3>
			<p className={styles.description}>{project.description}</p>

			<div className={styles.techTags}>
				{tags.map((item) => (
					<Tag key={item}>{item}</Tag>
				))}
			</div>

			{hasSubmodules && (
				<div className={styles.submodulesSection}>
					<div className={styles.submodulesHeader}>
						<span
							className={`material-symbols-outlined`}
							style={{ color: "var(--color-tertiary)", fontSize: "1.125rem" }}>
							account_tree
						</span>
						<span className={styles.submodulesEyebrow}>
							{"// DEVELOPED Automated Tools and Portals (UNDER NBF R&D)"}
						</span>
					</div>

					<div className={styles.submodulesGrid}>
						{project.submodules.map((submodule) => (
							<SubmoduleCard key={submodule.id} submodule={submodule} />
						))}
					</div>
				</div>
			)}
		</Card>
	);
};

ProjectCard.propTypes = {
	project: PropTypes.shape({
		id: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		category: PropTypes.string.isRequired,
		ref: PropTypes.string.isRequired,
		status: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		tags: PropTypes.arrayOf(PropTypes.string),
		tech: PropTypes.arrayOf(PropTypes.string),
		icon: PropTypes.string.isRequired,
		submodules: PropTypes.arrayOf(
			PropTypes.shape({
				id: PropTypes.string.isRequired,
				ref: PropTypes.string.isRequired,
				status: PropTypes.string.isRequired,
				icon: PropTypes.string.isRequired,
				title: PropTypes.string.isRequired,
				category: PropTypes.string.isRequired,
				description: PropTypes.string.isRequired,
				tags: PropTypes.arrayOf(PropTypes.string),
			}),
		),
	}).isRequired,
};

const Projects = () => (
	<section
		className={styles.section}
		id={SECTION_IDS.PROJECTS}
		aria-label="Key Projects and Security Tools">
		<Container fluid className={styles.inner}>
			<SectionHeading
				eyebrow="Mission-Oriented R&D & Security Scanners"
				title="Key Projects & Security Tools"
				subtitle="National Blockchain Framework (NBF), Automated Vulnerability Assessment Scanners, Full-Stack Security Platforms, and Decentralized Applications."
			/>

			<Row className={styles.row}>
				{projects.map((project) => (
					<Col
						key={project.id}
						lg={project.submodules ? 12 : 12}
						className={styles.col}>
						<ProjectCard project={project} />
					</Col>
				))}
			</Row>
		</Container>
	</section>
);

export { Projects };
