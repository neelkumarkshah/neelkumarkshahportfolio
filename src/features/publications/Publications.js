import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { SectionHeading, Badge } from "components/common";
import { publications } from "data/portfolioData";
import { SECTION_IDS } from "constants/routes";
import styles from "./Publications.module.css";

const Publications = () => (
	<section
		className={styles.section}
		id={SECTION_IDS.PUBLICATIONS}
		aria-label="IEEE Research Publications">
		<Container fluid className={styles.inner}>
			<SectionHeading
				eyebrow="Peer-Reviewed Scholarly Research"
				title="IEEE Research Publications"
			/>

			<div className={styles.grid}>
				{publications.map((pub, index) => (
					<div key={pub.id} className={styles.card}>
						<Row className={styles.row}>
							<Col xs={12} md={10} lg={11} className={styles.leftCol}>
								<div className={styles.metaTop}>
									<Badge tone="accent">INDEX #{index + 1}</Badge>
									<span className={styles.docId}>
										IEEE DOC: {pub.documentId}
									</span>
									<span className={styles.conferenceBadge}>
										{pub.conference}
									</span>
									<span className={styles.pubDate}>{pub.date}</span>
								</div>

								<h3 className={styles.title}>{pub.title}</h3>
								<div className={styles.venue}>{pub.venue}</div>

								<div className={styles.doiRow}>
									<span className={styles.doiLabel}>DOI:</span>
									<span className={styles.doiValue}>{pub.doi}</span>
								</div>
							</Col>

							<Col xs={12} md={2} lg={1} className={styles.rightCol}>
								<a
									href={pub.href}
									target="_blank"
									rel="noopener noreferrer"
									className={styles.citationIconButton}
									aria-label={`View ${pub.title} on IEEE Xplore`}
									title="View on IEEE Xplore">
									<span
										className={`material-symbols-outlined ${styles.citationIcon}`}
										aria-hidden="true">
										open_in_new
									</span>
								</a>
							</Col>
						</Row>
					</div>
				))}
			</div>
		</Container>
	</section>
);

export { Publications };
