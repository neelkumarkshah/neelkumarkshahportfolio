import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { stats } from "data/portfolioData";
import { useReveal } from "hooks/useReveal";
import styles from "./Stats.module.css";

const Stats = () => {
	const [gridRef, isVisible] = useReveal({ threshold: 0.2 });

	return (
		<section className={styles.section} aria-label="Career highlights & metrics">
			<Container fluid className={styles.inner}>
				<div ref={gridRef} className={`${styles.grid} ${isVisible ? styles.visible : ""}`}>
					<Row className={styles.row}>
						{stats.map((stat) => (
							<Col key={stat.id} xs={6} md={3} className={styles.col}>
								<div className={styles.cell}>
									<div className={styles.metricWrapper}>
										<span className={`${styles.value} ${stat.compact ? styles.valueCompact : ""}`}>
											{stat.value}
										</span>
										<span className={styles.glowDot} aria-hidden="true" />
									</div>
									<span className={styles.label}>{stat.label}</span>
								</div>
							</Col>
						))}
					</Row>
				</div>
			</Container>
		</section>
	);
};

export { Stats };
