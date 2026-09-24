import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Badge } from "components/common";
import { EngineeringNetwork } from "components/animations";
import { site } from "data/portfolioData";
import { SECTION_IDS } from "constants/routes";
import styles from "./Hero.module.css";

const Hero = () => {

	return (
		<section
			className={styles.hero}
			id={SECTION_IDS.HOME}
			aria-label="Hero Introduction">
			<div className={styles.ambientGlow} aria-hidden="true" />

			<Container fluid className={styles.inner}>
				<Row className={styles.row}>
					<Col lg={6} className={styles.textCol}>
						<div className={styles.badgeRow}>
							<Badge tone="accent" icon="link">
								BLOCKCHAIN
							</Badge>
							<Badge tone="secondary" icon="security">
								CYBERSECURITY
							</Badge>
							<Badge tone="tertiary" icon="terminal">
								FULL STACK MERN
							</Badge>
						</div>

						<div className={styles.blockMeta}>
							<span className={styles.blockNumber}>GENESIS BLOCK #0000</span>
							<span className={styles.separator}>•</span>
							<code className={styles.genesisHash}>0x000000000000</code>
						</div>

						<h1 className={styles.name}>{site.name}</h1>
						<div className={styles.roleTitle}>{site.role}</div>

						<p className={styles.tagline}>{site.tagline}</p>
					</Col>

					<Col lg={6} className={styles.visualCol}>
						<EngineeringNetwork />
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export { Hero };
