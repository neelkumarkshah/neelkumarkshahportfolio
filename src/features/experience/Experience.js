import Container from "react-bootstrap/Container";
import PropTypes from "prop-types";
import { SectionHeading, Card, Badge } from "components/common";
import { experience } from "data/portfolioData";
import { useHashChain } from "hooks/useHashChain";
import { SECTION_IDS } from "constants/routes";
import styles from "./Experience.module.css";

const renderBullet = (bullet) => {
	if (typeof bullet !== "string") return bullet;

	const linkPattern = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g;
	if (!linkPattern.test(bullet)) {
		return bullet;
	}

	linkPattern.lastIndex = 0;
	const elements = [];
	let lastIndex = 0;
	let match;

	while ((match = linkPattern.exec(bullet)) !== null) {
		if (match.index > lastIndex) {
			elements.push(bullet.substring(lastIndex, match.index));
		}
		elements.push(
			<a
				key={match.index}
				href={match[2]}
				target="_blank"
				rel="noopener noreferrer"
				className={styles.bulletLink}
			>
				<span>{match[1]}</span>
				<span
					className={`material-symbols-outlined ${styles.bulletLinkIcon}`}
					aria-hidden="true"
				>
					open_in_new
				</span>
			</a>
		);
		lastIndex = linkPattern.lastIndex;
	}

	if (lastIndex < bullet.length) {
		elements.push(bullet.substring(lastIndex));
	}

	return elements;
};

const ExperienceBlock = ({ entry, chain }) => (
	<div className={`${styles.node} ${entry.latest ? styles.nodeLatest : ""}`}>
		<span className={styles.dot} aria-hidden="true" />

		<Card as="article" padding="lg" className={styles.card}>
			<div className={styles.badgeRow}>
				<Badge tone={entry.badge.tone} icon={entry.badge.icon}>
					{entry.badge.label}
				</Badge>
				<span className={styles.period}>{entry.period}</span>
			</div>

			<h3 className={styles.role}>{entry.role}</h3>
			<div className={styles.orgRow}>
				<span className={styles.org}>{entry.org}</span>
				{entry.location && (
					<span className={styles.location}>({entry.location})</span>
				)}
			</div>

			{Array.isArray(entry.links) && entry.links.length > 0 && (
				<div className={styles.linksRow}>
					{entry.links.map((link) => (
						<a
							key={link.url}
							href={link.url}
							target="_blank"
							rel="noopener noreferrer"
							className={styles.entryLink}
							aria-label={`Visit ${link.label}`}
						>
							<span
								className={`material-symbols-outlined ${styles.entryLinkIcon}`}
								aria-hidden="true"
							>
								{link.icon || "language"}
							</span>
							<span>{link.label}</span>
							<span
								className={`material-symbols-outlined ${styles.entryLinkExternal}`}
								aria-hidden="true"
							>
								open_in_new
							</span>
						</a>
					))}
				</div>
			)}

			<ul className={styles.bullets}>
				{entry.bullets.map((bullet, index) => (
					<li key={index}>{renderBullet(bullet)}</li>
				))}
			</ul>

			<div className={styles.hashPanel}>
				<div className={styles.hashRow}>
					<span className={styles.hashLabel}>block_hash</span>
					<span className={styles.hashValue}>{chain?.hash}</span>
				</div>
				<div className={styles.hashRow}>
					<span className={styles.hashLabel}>prev_block</span>
					<span className={styles.hashPrev}>{chain?.prevHash}</span>
				</div>
			</div>
		</Card>
	</div>
);

ExperienceBlock.propTypes = {
	entry: PropTypes.shape({
		id: PropTypes.string.isRequired,
		role: PropTypes.string.isRequired,
		org: PropTypes.string.isRequired,
		location: PropTypes.string,
		period: PropTypes.string.isRequired,
		latest: PropTypes.bool,
		badge: PropTypes.shape({
			tone: PropTypes.string,
			icon: PropTypes.string,
			label: PropTypes.string,
		}),
		links: PropTypes.arrayOf(
			PropTypes.shape({
				label: PropTypes.string.isRequired,
				url: PropTypes.string.isRequired,
				icon: PropTypes.string,
			})
		),
		bullets: PropTypes.arrayOf(PropTypes.string).isRequired,
	}).isRequired,
	chain: PropTypes.shape({
		hash: PropTypes.string,
		prevHash: PropTypes.string,
	}),
};

const Experience = () => {
	const chainById = useHashChain(experience);

	return (
		<section
			className={styles.section}
			id={SECTION_IDS.EXPERIENCE}
			aria-label="Professional Experience">
			<Container fluid className={styles.inner}>
				<SectionHeading
					eyebrow="Ledger · Reverse-chronological cryptographic chain"
					title="Professional Experience"
				/>

				<div className={styles.track}>
					<div className={styles.line} aria-hidden="true" />

					{experience.map((entry) => (
						<ExperienceBlock
							key={entry.id}
							entry={entry}
							chain={chainById.get(entry.id)}
						/>
					))}
				</div>
			</Container>
		</section>
	);
};

export { Experience };
