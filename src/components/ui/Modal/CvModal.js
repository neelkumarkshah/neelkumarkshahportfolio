import PropTypes from "prop-types";
import Modal from "react-bootstrap/Modal";
import { site } from "data/portfolioData";
import { downloadResume } from "services/resumeService";
import styles from "./CvModal.module.css";

const CvModal = ({ show, onHide }) => {
	const handleDownload = async () => {
		await downloadResume();
	};

	const handlePrint = () => {
		window.open(site.cvPath, "_blank");
	};

	const handleOpenInNewTab = () => {
		window.open(site.cvPath, "_blank");
	};

	return (
		<Modal
			show={show}
			onHide={onHide}
			size="xl"
			centered
			className={styles.modalDialog}
			contentClassName={styles.modalContent}
			aria-labelledby="cv-modal-title"
		>
			<Modal.Header className={styles.modalHeader}>
				<div className={styles.headerInfo}>
					<div className={styles.headerTop}>
						<span className="material-symbols-outlined" style={{ color: "var(--color-accent-blue)" }} aria-hidden="true">
							picture_as_pdf
						</span>
						<Modal.Title id="cv-modal-title" className={styles.title}>
							Curriculum Vitae Preview
						</Modal.Title>
						<span className={styles.docBadge}>{site.cvFilename}</span>
					</div>
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
				<div className={styles.pdfContainer}>
					<object
						data={`${site.cvPath}#toolbar=1&navpanes=0`}
						type="application/pdf"
						className={styles.pdfObject}
						title={`${site.name} Curriculum Vitae PDF`}
					>
						<div className={styles.pdfFallback}>
							<span className={`material-symbols-outlined ${styles.fallbackIcon}`} aria-hidden="true">
								description
							</span>
							<h3>PDF Viewer Preview</h3>
							<p>Your browser is unable to display the PDF directly in this frame.</p>
							<div className={styles.fallbackActions}>
								<button
									type="button"
									onClick={handleOpenInNewTab}
									className={styles.printBtn}
								>
									<span className="material-symbols-outlined" aria-hidden="true">
										open_in_new
									</span>
									<span>Open PDF in New Tab</span>
								</button>
								<button
									type="button"
									onClick={handleDownload}
									className={styles.modalDownloadBtn}
								>
									<span className="material-symbols-outlined" aria-hidden="true">
										download
									</span>
									<span>Download PDF Document</span>
								</button>
							</div>
						</div>
					</object>
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
						onClick={handleOpenInNewTab}
						className={styles.printBtn}
						aria-label="Open PDF in new tab"
					>
						<span className="material-symbols-outlined" style={{ fontSize: "1.125rem" }} aria-hidden="true">
							open_in_new
						</span>
						<span>Open in New Tab</span>
					</button>

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
