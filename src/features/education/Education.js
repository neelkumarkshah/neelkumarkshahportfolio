import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { SectionHeading, Card, Badge } from "components/common";
import { education } from "data/portfolioData";
import { SECTION_IDS } from "constants/routes";
import styles from "./Education.module.css";

const Education = () => (
	<section
		className={styles.section}
		id={SECTION_IDS.EDUCATION}
		aria-label="Academic Education & Credentials">
		<Container fluid className={styles.inner}>
			<SectionHeading
				eyebrow="Academic Foundations & Master's Research"
				title="Education & Credentials"
			/>

			<Row className={styles.row}>
				{education.map((edu) => (
					<Col key={edu.id} lg={6} className={styles.col}>
						<Card className={styles.card} padding="lg">
							<div className={styles.topRow}>
								<span className={styles.degreeCode}>{edu.period}</span>
								<Badge tone="secondary" dot>
									{edu.status}
								</Badge>
							</div>

							<h3 className={styles.degree}>{edu.degree}</h3>

							<div className={styles.institutionRow}>
								<span
									className={`material-symbols-outlined ${styles.schoolIcon}`}
									aria-hidden="true">
									school
								</span>
								<span className={styles.institution}>{edu.institution}</span>
								<span className={styles.location}>({edu.location})</span>
							</div>

							<div className={styles.thesisBox}>
								<span className={styles.thesisLabel}>
									{"// Dissertation / Project:"}
								</span>
								<p className={styles.thesis}>{edu.dissertation}</p>
							</div>
						</Card>
					</Col>
				))}
			</Row>
		</Container>
	</section>
);

export { Education };
