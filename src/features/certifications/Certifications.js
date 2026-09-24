import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { SectionHeading, Card, IconTile, Tag } from "components/common";
import { certifications } from "data/portfolioData";
import { SECTION_IDS } from "constants/routes";
import styles from "./Certifications.module.css";

const Certifications = () => (
	<section
		className={styles.section}
		id={SECTION_IDS.CERTIFICATIONS}
		aria-label="Professional Certifications & Accreditations">
		<Container fluid className={styles.inner}>
			<SectionHeading
				eyebrow="Access Credentials & Accreditations"
				title="Certifications & Honors"
			/>

			<Row className={styles.row}>
				{certifications.map((cert) => (
					<Col key={cert.id} xs={12} md={6} className={styles.col}>
						<Card className={styles.card} padding="lg">
							<div className={styles.cardLayout}>
								<div className={styles.iconContainer}>
									<IconTile
										icon={cert.icon}
										tone={cert.iconTone}
										size="md"
										shape="rounded"
									/>
								</div>

								<div className={styles.content}>
									<div className={styles.topBadgeRow}>
										<Tag className={styles.certTypeTag}>{cert.type}</Tag>
										<span className={styles.verifiedMark}>
											<span
												className={`material-symbols-outlined ${styles.checkIcon}`}
												aria-hidden="true">
												verified
											</span>
											<span>VERIFIED</span>
										</span>
									</div>

									<h3 className={styles.title}>{cert.title}</h3>

									<div className={styles.issuerRow}>
										<span
											className={`material-symbols-outlined ${styles.issuerIcon}`}
											aria-hidden="true">
											apartment
										</span>
										<span className={styles.issuerText}>{cert.issuer}</span>
									</div>
								</div>
							</div>
						</Card>
					</Col>
				))}
			</Row>
		</Container>
	</section>
);

export { Certifications };
