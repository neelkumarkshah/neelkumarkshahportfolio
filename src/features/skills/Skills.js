import { useState, useMemo } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { SectionHeading, Tag } from "components/common";
import { skillGroups } from "data/portfolioData";
import { SECTION_IDS } from "constants/routes";
import styles from "./Skills.module.css";

const Skills = () => {
	const [activeCategory, setActiveCategory] = useState("all");

	const filteredGroups = useMemo(() => {
		if (activeCategory === "all") return skillGroups;
		return skillGroups.filter((group) => group.id === activeCategory);
	}, [activeCategory]);

	return (
		<section
			className={styles.section}
			id={SECTION_IDS.SKILLS}
			aria-label="Technical Skills Matrix"
		>
			<Container fluid className={styles.inner}>
				<div className={styles.headingBlock}>
					<SectionHeading
						eyebrow="Network Topology & Stack"
						title="Technical Competencies"
						subtitle="Distributed ledger architecture, vulnerability auditing tools, and scalable MERN engineering."
					/>

					{/* Interactive Filter Pills */}
					<div
						className={styles.filterRow}
						role="tablist"
						aria-label="Filter skills by domain"
					>
						<Tag
							active={activeCategory === "all"}
							onClick={() => setActiveCategory("all")}
						>
							ALL DOMAINS
						</Tag>
						{skillGroups.map((group) => (
							<Tag
								key={group.id}
								active={activeCategory === group.id}
								onClick={() => setActiveCategory(group.id)}
							>
								{group.title.toUpperCase()}
							</Tag>
						))}
					</div>
				</div>

				<Row className={styles.row}>
					{filteredGroups.map((group) => (
						<Col
							key={group.id}
							xs={12}
							md={filteredGroups.length === 1 ? 12 : 6}
							lg={filteredGroups.length === 1 ? 12 : 4}
							className={styles.col}
						>
							<div className={styles.card}>
								<div className={styles.header}>
									<span
										className={`material-symbols-outlined ${styles.icon} ${styles[group.iconTone]}`}
										aria-hidden="true"
									>
										{group.icon}
									</span>
									<div className={styles.headerText}>
										<h3 className={styles.title}>{group.title}</h3>
										<p className={styles.subtitle}>{group.subtitle}</p>
									</div>
								</div>

								<div className={styles.tags}>
									{group.tags.map((tag) => (
										<Tag key={tag}>{tag}</Tag>
									))}
								</div>
							</div>
						</Col>
					))}
				</Row>
			</Container>
		</section>
	);
};

export { Skills };
