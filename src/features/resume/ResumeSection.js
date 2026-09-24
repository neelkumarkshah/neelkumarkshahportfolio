import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { site } from "data/portfolioData";
import { SECTION_IDS } from "constants/routes";
import { downloadResume } from "services/resumeService";
import styles from "./ResumeSection.module.css";

const ResumeSection = ({ onOpenCvModal }) => {
	const handleDownload = async () => {
		await downloadResume();
	};

	return (
		<section
			className={styles.section}
			id={SECTION_IDS.RESUME}
			aria-label="Resume and CV Download"
		>
			<Container fluid className={styles.inner}>
				<div className={styles.card}>
					<Row className={styles.row}>
						<Col lg={7} xl={8} className={styles.contentCol}>
							<div className={styles.badgeRow}>
								<span className={styles.dot} aria-hidden="true" />
								<span className={styles.badgeText}>
									DOCUMENTATION
								</span>
							</div>

							<h3 className={styles.title}>
								Download CV
							</h3>

							<div className={styles.metaList}>
								<div className={styles.metaItem}>
									<span
										className="material-symbols-outlined"
										aria-hidden="true"
									>
										description
									</span>
									<span>Filename: {site.cvFilename}</span>
								</div>
								<div className={styles.metaItem}>
									<span
										className="material-symbols-outlined"
										aria-hidden="true"
									>
										verified_user
									</span>
									<span>SHA-256 Verified Authenticity</span>
								</div>
								<div className={styles.metaItem}>
									<span
										className="material-symbols-outlined"
										aria-hidden="true"
									>
										lock_open
									</span>
									<span>Open Access Document</span>
								</div>
							</div>
						</Col>

						<Col lg={5} xl={4} className={styles.actionsCol}>
							<button
								type="button"
								onClick={handleDownload}
								className={styles.downloadBtn}
								aria-label="Download Neelkumar Shah CV PDF"
							>
								<span
									className={`material-symbols-outlined ${styles.btnIcon}`}
									aria-hidden="true"
								>
									download
								</span>
								<span>Download PDF CV</span>
							</button>

							{onOpenCvModal && (
								<button
									type="button"
									onClick={onOpenCvModal}
									className={styles.previewBtn}
									aria-label="Preview Neelkumar Shah CV in Browser"
								>
									<span
										className={`material-symbols-outlined ${styles.btnIcon}`}
										aria-hidden="true"
									>
										visibility
									</span>
									<span>Preview In Browser</span>
								</button>
							)}
						</Col>
					</Row>
				</div>
			</Container>
		</section>
	);
};

ResumeSection.propTypes = {
	onOpenCvModal: PropTypes.func,
};

export { ResumeSection };
