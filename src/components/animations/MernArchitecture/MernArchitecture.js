import { useState } from "react";
import styles from "./MernArchitecture.module.css";

const MernArchitecture = () => {
	const [activeTier, setActiveTier] = useState("react");

	const tiers = [
		{
			id: "react",
			name: "React.js",
			role: "Client & Presentation Tier",
			color: "var(--color-mern-react)",
			icon: "web",
			description:
				"Designed and developed dynamic single-page applications including the Blockchain Security Assessment Portal (BSAP) and decentralized Web3 frontends with MetaMask integration.",
			features: [
				"Real-time security vulnerability dashboards",
				"MetaMask Web3 wallet state synchronization",
				"Component-driven modular architectures",
			],
		},
		{
			id: "express",
			name: "Express.js",
			role: "API Gateway & Security Middleware",
			color: "var(--color-tertiary)",
			icon: "alt_route",
			description:
				"Architected authenticated REST API endpoints with robust defense-in-depth, request sanitization, role-based access control (RBAC), and cryptographic validation.",
			features: [
				"Secure REST API routing for national services",
				"JWT authentication & cryptographic token validation",
				"Defense against injection & CORS exploits",
			],
		},
		{
			id: "node",
			name: "Node.js",
			role: "Distributed Services & Orchestration",
			color: "var(--color-mern-node)",
			icon: "settings_suggest",
			description:
				"Engineered distributed backend microservices and asynchronous audit execution pipelines for automated blockchain security assessments.",
			features: [
				"Node.js microservices for blockchain security auditing",
				"Asynchronous audit execution pipelines",
				"Integration with National Blockchain Framework",
			],
		},
		{
			id: "mongodb",
			name: "MongoDB / CouchDB",
			role: "NoSQL & State Database Tier",
			color: "var(--color-secondary)",
			icon: "database",
			description:
				"Managed state database clusters and audit logging engines. Authored the NBFDBAudit tool analyzing 18+ NoSQL vulnerabilities across blockchain deployments.",
			features: [
				"Automated vulnerability detection via NBFDBAudit",
				"Secure NoSQL database configuration and hardening",
				"Audit logging and historical state tracking",
			],
		},
	];

	const selectedTierData = tiers.find((t) => t.id === activeTier) || tiers[0];

	return (
		<div
			className={styles.container}
			aria-label="Interactive MERN Stack Architecture Visual">
			<div className={styles.header}>
				<span className={styles.eyebrow}>
					{"// FULL STACK ARCHITECTURAL COHESION"}
				</span>
				<h3 className={styles.title}>MERN Ecosystem Integration</h3>
				<p className={styles.subtitle}>
					How full-stack MERN technologies bridge distributed blockchain nodes
					and security auditing platforms.
				</p>
			</div>

			<div className={styles.grid}>
				{/* Visual Flow Pipeline */}
				<div className={styles.pipeline}>
					{tiers.map((tier, index) => {
						const isSelected = activeTier === tier.id;
						return (
							<div key={tier.id} className={styles.tierBlock}>
								<button
									type="button"
									onClick={() => setActiveTier(tier.id)}
									className={`${styles.tierButton} ${isSelected ? styles.tierActive : ""}`}
									style={{ "--tier-color": tier.color }}>
									<div className={styles.tierIconBox}>
										<span className="material-symbols-outlined">
											{tier.icon}
										</span>
									</div>
									<div className={styles.tierMeta}>
										<div className={styles.tierName}>{tier.name}</div>
										<div className={styles.tierRole}>{tier.role}</div>
									</div>
									<span
										className={`material-symbols-outlined ${styles.arrowIcon}`}
										aria-hidden="true">
										chevron_right
									</span>
								</button>
								{index < tiers.length - 1 && (
									<div className={styles.connectorLine} aria-hidden="true">
										<span className={styles.packetPulse} />
									</div>
								)}
							</div>
						);
					})}
				</div>

				{/* Detail Inspection Card */}
				<div
					className={styles.detailPane}
					style={{ "--pane-color": selectedTierData.color }}>
					<div className={styles.paneHeader}>
						<div className={styles.paneBadge}>TIER INSPECTION</div>
						<div className={styles.paneTitleGroup}>
							<h4 className={styles.paneTitle}>{selectedTierData.name}</h4>
							<span className={styles.paneRole}>— {selectedTierData.role}</span>
						</div>
					</div>

					<p className={styles.paneDescription}>
						{selectedTierData.description}
					</p>

					<div className={styles.featureList}>
						<div className={styles.featureHeader}>
							KEY CONTRIBUTIONS & AUDIT CAPABILITIES:
						</div>
						<ul>
							{selectedTierData.features.map((feat, i) => (
								<li key={i}>
									<span
										className={`material-symbols-outlined ${styles.checkIcon}`}
										aria-hidden="true">
										check_circle
									</span>
									<span>{feat}</span>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export { MernArchitecture };
