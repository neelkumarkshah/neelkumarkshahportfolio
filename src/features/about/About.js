import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { SectionHeading, Card, IconTile } from "components/common";
import { MernArchitecture } from "components/animations";
import { about } from "data/portfolioData";
import { SECTION_IDS } from "constants/routes";
import styles from "./About.module.css";

const About = () => {
	const paragraphs =
		about.paragraphs || (about.body ? [{ id: "main", text: about.body }] : []);
	const callout = about.callout || {};
	const subtitle =
		about.summary ||
		"5 years of experience across blockchain development, full-stack engineering, and cybersecurity.";

	return (
		<section
			className={styles.section}
			id={SECTION_IDS.ABOUT}
			aria-label="About Neelkumar K. Shah"
		>
			<Container fluid className={styles.inner}>
				<Row className={styles.headerRow}>
					<Col lg={4}>
						<SectionHeading
							eyebrow={about.eyebrow || "Engineering Profile"}
							title={about.title || "About Me"}
							subtitle={subtitle}
						/>
					</Col>

					<Col lg={8} className={styles.copyCol}>
						{paragraphs.length > 0 &&
							paragraphs.map((paragraph, index) => (
								<p key={paragraph.id || index} className={styles.paragraph}>
									{paragraph.text || paragraph}
								</p>
							))}

						{callout.body && (
							<Card padding="lg" glow className={styles.calloutCard}>
								<div className={styles.calloutWrapper}>
									<IconTile
										icon={callout.icon || "verified_user"}
										tone="secondary"
										size="lg"
										shape="circle"
									/>
									<div>
										<h4 className={styles.calloutTitle}>
											{callout.title || "Professional Profile & Background"}
										</h4>
										{Array.isArray(callout.body) ? (
											<div className={styles.calloutBody}>
												{callout.body.map((paragraph, index) => (
													<p key={index}>{paragraph}</p>
												))}
											</div>
										) : (
											<p className={styles.calloutBody}>{callout.body}</p>
										)}
									</div>
								</div>
							</Card>
						)}
					</Col>
				</Row>

				{/* Interactive MERN Ecosystem Architecture Breakdown */}
				<MernArchitecture />
			</Container>
		</section>
	);
};

export { About };
