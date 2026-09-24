import PropTypes from "prop-types";
import Modal from "react-bootstrap/Modal";
import { site, experience, publications, education, certifications, skillGroups } from "data/portfolioData";
import { downloadResume } from "services/resumeService";
import styles from "./CvModal.module.css";

const CvModal = ({ show, onHide }) => {
	const handleDownload = async () => {
		await downloadResume();
	};

	const handlePrint = () => {
		window.print();
	};

	return (
		<Modal
			show={show}
			onHide={onHide}
			size="lg"
			centered
			className={styles.modalDialog}
			contentClassName={styles.modalContent}
			aria-labelledby="cv-modal-title"
		>
			<Modal.Header className={styles.modalHeader}>
				<div className={styles.headerInfo}>
					<Modal.Title id="cv-modal-title" className={styles.title}>
						{site.name} — Resume Preview
					</Modal.Title>
				</div>
				<button
					type="button"
					onClick={onHide}
					className={styles.closeBtn}
					aria-label="Close CV Preview"
					title="Close"
				>
					<span className="material-symbols-outlined" aria-hidden="true">
						close
					</span>
				</button>
			</Modal.Header>

			<Modal.Body className={styles.modalBody}>
				{/* Resume Header */}
				<div className={styles.resumeHeader}>
					<h2 className={styles.candidateName}>{site.name}</h2>
					<div className={styles.candidateRole}>{site.role}</div>
					<div className={styles.contactMeta}>
						<span>{site.email}</span>
						<span>•</span>
						<span>{site.phone}</span>
						<span>•</span>
						<span>{site.location}</span>
					</div>
				</div>

				{/* Summary */}
				<div className={styles.sectionBlock}>
					<h3 className={styles.sectionHeading}>PROFESSIONAL SUMMARY</h3>
					<p className={styles.sectionBody}>
						{site.tagline ||
							"An engineer with 5 years of experience across blockchain development, full-stack engineering, and cybersecurity. Built and hardened Hyperledger Fabric and Ethereum systems for India's National Blockchain Service initiative under MeitY. Developed the BSAP security platform and NBFDBAudit scanner. Authored 5 peer-reviewed IEEE publications."}
					</p>
				</div>

				{/* Skills Summary */}
				<div className={styles.sectionBlock}>
					<h3 className={styles.sectionHeading}>CORE TECHNICAL SKILLS</h3>
					<div className={styles.skillList}>
						{skillGroups.map((grp) => (
							<div key={grp.id} className={styles.skillItem}>
								<strong>{grp.title}:</strong> {grp.tags.join(", ")}
							</div>
						))}
					</div>
				</div>

				{/* Experience */}
				<div className={styles.sectionBlock}>
					<h3 className={styles.sectionHeading}>PROFESSIONAL EXPERIENCE</h3>
					{experience.map((exp) => (
						<div key={exp.id} className={styles.expItem}>
							<div className={styles.expHeader}>
								<span className={styles.expRole}>{exp.role}</span>
								<span className={styles.expPeriod}>{exp.period}</span>
							</div>
							<div className={styles.expOrg}>{exp.org}</div>
							<ul className={styles.expBullets}>
								{exp.bullets.map((bullet, idx) => (
									<li key={idx}>{bullet}</li>
								))}
							</ul>
						</div>
					))}
				</div>

				{/* Publications */}
				<div className={styles.sectionBlock}>
					<h3 className={styles.sectionHeading}>PEER-REVIEWED IEEE PUBLICATIONS (5 PAPERS)</h3>
					<ul className={styles.pubList}>
						{publications.map((pub) => (
							<li key={pub.id} className={styles.pubItem}>
								<strong>{pub.title}</strong> — {pub.venue} ({pub.date})
							</li>
						))}
					</ul>
				</div>

				{/* Education & Certs */}
				<div className={styles.sectionBlock}>
					<h3 className={styles.sectionHeading}>EDUCATION & CERTIFICATIONS</h3>
					<div className={styles.eduList}>
						{education.map((edu) => (
							<div key={edu.id} className={styles.eduItem}>
								<strong>{edu.degree}</strong> — {edu.institution} ({edu.period})
							</div>
						))}
					</div>
					<div className={styles.certList}>
						{certifications.map((cert) => (
							<div key={cert.id} className={styles.certItem}>
								• <strong>{cert.title}</strong> ({cert.issuer})
							</div>
						))}
					</div>
				</div>
			</Modal.Body>

			<Modal.Footer className={styles.modalFooter}>
				<div className={styles.footerInfo}>
					<span className="material-symbols-outlined" aria-hidden="true">
						verified
					</span>
					<span>Official Document: {site.cvFilename}</span>
				</div>
				<div className={styles.footerActions}>
					<button
						type="button"
						onClick={handlePrint}
						className={styles.printBtn}
						aria-label="Print Curriculum Vitae"
					>
						<span className="material-symbols-outlined" style={{ fontSize: "1.125rem" }} aria-hidden="true">
							print
						</span>
						<span>Print</span>
					</button>
					<button
						type="button"
						onClick={handleDownload}
						className={styles.modalDownloadBtn}
						aria-label="Download CV PDF"
					>
						<span className="material-symbols-outlined" style={{ fontSize: "1.125rem" }} aria-hidden="true">
							download
						</span>
						<span>Download PDF</span>
					</button>
				</div>
			</Modal.Footer>
		</Modal>
	);
};

CvModal.propTypes = {
	show: PropTypes.bool.isRequired,
	onHide: PropTypes.func.isRequired,
};

export { CvModal };
