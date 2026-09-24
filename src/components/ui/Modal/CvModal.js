import { useState } from "react";
import PropTypes from "prop-types";
import Modal from "react-bootstrap/Modal";
import {
	site,
	experience,
	projects,
	publications,
	education,
	certifications,
	skillGroups,
} from "data/portfolioData";
import { downloadResume } from "services/resumeService";
import styles from "./CvModal.module.css";

const CvModal = ({ show, onHide }) => {
	const [viewMode, setViewMode] = useState("pdf"); // "pdf" | "structured"

	const handleDownload = async () => {
		await downloadResume();
	};

	const handlePrint = () => {
		if (viewMode === "pdf") {
			window.open(site.cvPath, "_blank");
		} else {
			window.print();
		}
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
						<Modal.Title id="cv-modal-title" className={styles.title}>
							Curriculum Vitae Preview
						</Modal.Title>
						<span className={styles.docBadge}>{site.cvFilename}</span>
					</div>

					{/* View Switcher Tabs */}
					<div className={styles.tabGroup} role="tablist" aria-label="CV View Mode">
						<button
							type="button"
							role="tab"
							aria-selected={viewMode === "pdf"}
							onClick={() => setViewMode("pdf")}
							className={`${styles.tabBtn} ${viewMode === "pdf" ? styles.tabBtnActive : ""}`}
						>
							<span className="material-symbols-outlined" aria-hidden="true">
								picture_as_pdf
							</span>
							<span>Official PDF Document</span>
						</button>
						<button
							type="button"
							role="tab"
							aria-selected={viewMode === "structured"}
							onClick={() => setViewMode("structured")}
							className={`${styles.tabBtn} ${viewMode === "structured" ? styles.tabBtnActive : ""}`}
						>
							<span className="material-symbols-outlined" aria-hidden="true">
								article
							</span>
							<span>Structured Digital View</span>
						</button>
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
				{viewMode === "pdf" ? (
					/* PDF Embed Viewer */
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
								<h3>PDF Viewer Not Supported In This Browser View</h3>
								<p>You can view the document directly in a new tab or download the file.</p>
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
										onClick={() => setViewMode("structured")}
										className={styles.modalDownloadBtn}
									>
										<span className="material-symbols-outlined" aria-hidden="true">
											article
										</span>
										<span>Switch to Structured Digital View</span>
									</button>
								</div>
							</div>
						</object>
					</div>
				) : (
					/* Fully Formatted Structured Digital CV */
					<div className={styles.structuredCv}>
						{/* Resume Header */}
						<div className={styles.resumeHeader}>
							<h2 className={styles.candidateName}>{site.name}</h2>
							<div className={styles.candidateRole}>{site.role}</div>
							<div className={styles.contactMeta}>
								<span>
									<span className="material-symbols-outlined" aria-hidden="true">email</span>
									<a href={`mailto:${site.email}`}>{site.email}</a>
								</span>
								<span>•</span>
								<span>
									<span className="material-symbols-outlined" aria-hidden="true">call</span>
									<a href={`tel:${site.phone.replace(/[^0-9+]/g, "")}`}>{site.phone}</a>
								</span>
								<span>•</span>
								<span>
									<span className="material-symbols-outlined" aria-hidden="true">location_on</span>
									{site.location}
								</span>
								<span>•</span>
								<span>
									<span className="material-symbols-outlined" aria-hidden="true">link</span>
									<a href={site.linkedinUrl} target="_blank" rel="noopener noreferrer">
										{site.linkedin}
									</a>
								</span>
							</div>
						</div>

						{/* Professional Summary */}
						<div className={styles.sectionBlock}>
							<h3 className={styles.sectionHeading}>PROFESSIONAL SUMMARY</h3>
							<p className={styles.sectionBody}>{site.tagline}</p>
						</div>

						{/* Core Technical Skills */}
						<div className={styles.sectionBlock}>
							<h3 className={styles.sectionHeading}>CORE TECHNICAL COMPETENCIES</h3>
							<div className={styles.skillList}>
								{skillGroups.map((grp) => (
									<div key={grp.id} className={styles.skillItem}>
										<strong className={styles.skillCategoryTitle}>{grp.title}:</strong>{" "}
										<span className={styles.skillTagsText}>{grp.tags.join(" • ")}</span>
									</div>
								))}
							</div>
						</div>

						{/* Professional Experience */}
						<div className={styles.sectionBlock}>
							<h3 className={styles.sectionHeading}>PROFESSIONAL EXPERIENCE</h3>
							{experience.map((exp) => (
								<div key={exp.id} className={styles.expItem}>
									<div className={styles.expHeader}>
										<div className={styles.expRoleRow}>
											<span className={styles.expRole}>{exp.role}</span>
											<span className={styles.expOrg}> | {exp.org}</span>
										</div>
										<span className={styles.expPeriod}>{exp.period}</span>
									</div>
									{exp.location && (
										<div className={styles.expLocation}>
											<span className="material-symbols-outlined" aria-hidden="true">
												location_on
											</span>
											<span>{exp.location}</span>
										</div>
									)}
									<ul className={styles.expBullets}>
										{exp.bullets.map((bullet, idx) => (
											<li key={idx}>{bullet}</li>
										))}
									</ul>
								</div>
							))}
						</div>

						{/* Key Projects & R&D Tools */}
						<div className={styles.sectionBlock}>
							<h3 className={styles.sectionHeading}>KEY PROJECTS & SECURITY TOOLS</h3>
							<div className={styles.projectList}>
								{projects.map((proj) => (
									<div key={proj.id} className={styles.projectItem}>
										<div className={styles.projectHeader}>
											<span className={styles.projectTitle}>{proj.title}</span>
											<span className={styles.projectRef}>[{proj.ref} • {proj.status}]</span>
										</div>
										<p className={styles.projectDesc}>{proj.description}</p>
										{proj.tags && (
											<div className={styles.itemTags}>
												{proj.tags.map((t) => (
													<span key={t} className={styles.miniTag}>
														{t}
													</span>
												))}
											</div>
										)}

										{/* Submodules if any */}
										{proj.submodules && proj.submodules.length > 0 && (
											<div className={styles.submodulesBlock}>
												{proj.submodules.map((sub) => (
													<div key={sub.id} className={styles.submoduleItem}>
														<div className={styles.submoduleHeader}>
															<strong>{sub.title}</strong>
															<span className={styles.submoduleRef}>
																({sub.category} • {sub.status})
															</span>
														</div>
														<p className={styles.submoduleDesc}>{sub.description}</p>
														{sub.tags && (
															<div className={styles.itemTags}>
																{sub.tags.map((st) => (
																	<span key={st} className={styles.miniTag}>
																		{st}
																	</span>
																))}
															</div>
														)}
													</div>
												))}
											</div>
										)}
									</div>
								))}
							</div>
						</div>

						{/* Peer-Reviewed IEEE Publications */}
						<div className={styles.sectionBlock}>
							<h3 className={styles.sectionHeading}>
								PEER-REVIEWED RESEARCH PUBLICATIONS ({publications.length} IEEE PAPERS)
							</h3>
							<div className={styles.pubList}>
								{publications.map((pub, idx) => (
									<div key={pub.id} className={styles.pubItem}>
										<div className={styles.pubHeader}>
											<span className={styles.pubIndex}>[{idx + 1}]</span>
											<a
												href={pub.href}
												target="_blank"
												rel="noopener noreferrer"
												className={styles.pubTitleLink}
											>
												<strong>&quot;{pub.title}&quot;</strong>
												<span className="material-symbols-outlined" aria-hidden="true">
													open_in_new
												</span>
											</a>
										</div>
										<div className={styles.pubVenue}>
											{pub.venue} • <strong>Published:</strong> {pub.date} •{" "}
											<strong>IEEE Doc ID:</strong> {pub.documentId} • <strong>DOI:</strong>{" "}
											{pub.doi}
										</div>
									</div>
								))}
							</div>
						</div>

						{/* Education */}
						<div className={styles.sectionBlock}>
							<h3 className={styles.sectionHeading}>ACADEMIC EDUCATION</h3>
							<div className={styles.eduList}>
								{education.map((edu) => (
									<div key={edu.id} className={styles.eduItem}>
										<div className={styles.eduHeader}>
											<span className={styles.eduDegree}>{edu.degree}</span>
											<span className={styles.eduPeriod}>{edu.period}</span>
										</div>
										<div className={styles.eduInst}>
											{edu.institution} ({edu.location}) •{" "}
											<span className={styles.eduStatus}>{edu.status}</span>
										</div>
										{edu.dissertation && (
											<div className={styles.eduThesis}>
												<strong>Dissertation:</strong> {edu.dissertation}
											</div>
										)}
									</div>
								))}
							</div>
						</div>

						{/* Certifications & Honors */}
						<div className={styles.sectionBlock}>
							<h3 className={styles.sectionHeading}>PROFESSIONAL CERTIFICATIONS & HONORS</h3>
							<div className={styles.certList}>
								{certifications.map((cert) => (
									<div key={cert.id} className={styles.certItem}>
										<span className="material-symbols-outlined" aria-hidden="true">
											verified
										</span>
										<div>
											<strong>{cert.title}</strong> — {cert.issuer} (
											<span className={styles.certType}>{cert.type}</span>)
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				)}
			</Modal.Body>

			<Modal.Footer className={styles.modalFooter}>
				<div className={styles.footerInfo}>
					<span className="material-symbols-outlined" aria-hidden="true">
						verified
					</span>
					<span>Authoritative Document: {site.cvFilename}</span>
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
						<span>Open in Tab</span>
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
						<span>Download PDF CV</span>
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
