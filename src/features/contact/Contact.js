import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { SectionHeading, Card } from "components/common";
import { Terminal } from "./Terminal";
import { contactApiFields } from "data/portfolioData";
import { SECTION_IDS } from "constants/routes";
import styles from "./Contact.module.css";

const Contact = () => (
	<section
		className={styles.section}
		id={SECTION_IDS.CONTACT}
		aria-label="Contact and Communication Channels">
		<Container fluid className={styles.inner}>
			<SectionHeading
				eyebrow="Establish Secure Channel · Cryptographic Handshake"
				title="Contact & Collaboration"
			/>

			<Row className={styles.row}>
				{/* Left Column: Contact Form & API JSON Block */}
				<Col lg={6} className={styles.leftCol}>
					<Card padding="md" className={styles.apiCard}>
						<div className={styles.apiHeader}>
							<span className={styles.apiBadge}>
								GET /api/v1/engineer/neelkumar-k-shah
							</span>
							<span className={styles.status200}>200 OK</span>
						</div>
						<pre className={styles.apiPre}>
							<code className={styles.apiCode}>
								<span className={styles.brace}>{"{"}</span>
								{contactApiFields.map((field, index) => (
									<div key={field.key} className={styles.apiLine}>
										<span className={styles.apiKey}>
											&quot;{field.key}&quot;
										</span>
										<span className={styles.apiColon}>: </span>
										<span className={styles.apiValue}>
											&quot;{field.value}&quot;
										</span>
										{index < contactApiFields.length - 1 && <span>,</span>}
									</div>
								))}
								<span className={styles.brace}>{"}"}</span>
							</code>
						</pre>
					</Card>
				</Col>

				{/* Right Column: Interactive CLI Terminal */}
				<Col lg={6} className={styles.rightCol}>
					<Terminal />
				</Col>
			</Row>
		</Container>
	</section>
);

export { Contact };
