import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { footerLinks, site } from "data/portfolioData";
import styles from "./Footer.module.css";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className={styles.footer}>
			<Container fluid className={styles.inner}>
				<Row className={styles.topRow}>
					<Col lg={6} className={styles.brandCol}>
						<div className={styles.brandBadge}>
							<span className={styles.statusDot} aria-hidden="true" />
							<span className={styles.brandText}>{site.name}</span>
						</div>

						<div className={styles.contactChips}>
							<a
								href={`tel:${site.phone.replace(/[^0-9+]/g, "")}`}
								className={styles.contactChip}
								title="Click to call">
								<span className="material-symbols-outlined" aria-hidden="true">
									call
								</span>
								<span>{site.phone}</span>
							</a>
							<div className={styles.contactChip}>
								<span className="material-symbols-outlined" aria-hidden="true">
									location_on
								</span>
								<span>{site.location}</span>
							</div>
						</div>
					</Col>

					<Col lg={6} className={styles.navCol}>
						<div className={styles.navHeader}>SECURE CHANNELS & CITATIONS</div>
						<div className={styles.links}>
							{footerLinks.map((link) => (
								<a
									key={link.id}
									href={link.href}
									target="_blank"
									rel="noopener noreferrer"
									className={styles.link}>
									<span>{link.label}</span>
									<span
										className={`material-symbols-outlined ${styles.linkIcon}`}
										aria-hidden="true">
										north_east
									</span>
								</a>
							))}
						</div>
					</Col>
				</Row>

				<div className={styles.bottomBar}>
					<div className={styles.copyright}>
						© {currentYear} {site.name}. All rights reserved.
					</div>
					<div className={styles.securitySeal}>
						<span
							className={`material-symbols-outlined ${styles.sealIcon}`}
							aria-hidden="true">
							verified_user
						</span>
						<span>NODE_AUTH: SHA256_VERIFIED</span>
					</div>
				</div>
			</Container>
		</footer>
	);
};

export { Footer };
