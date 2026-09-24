import { useEffect, useRef, useState, useCallback } from "react";
import { useTheme } from "hooks/useTheme";
import styles from "./EngineeringNetwork.module.css";

// Tri-Domain Node Definitions defined outside component
const NODES = [
	{
		id: "blockchain",
		label: "BLOCKCHAIN",
		category: "Distributed Consensus",
		tech: "Hyperledger Fabric, Hyperledger Sawtooth, Ethereum, Smart Contracts, Solidity, Web3.js, IPFS",
		hash: "0x8F3a…92C1",
		color: "#3b82f6",
		lightColor: "#1d4ed8",
		xPct: 0.5,
		yPct: 0.22,
	},
	{
		id: "security",
		label: "CYBERSECURITY",
		category: "Threat Defense & VAPT",
		tech: "NBFDBAudit, Vulnerability Assessment & Penetration Testing, Static Analysis, Threat Modeling",
		hash: "0x77B4…E049",
		color: "#10b981",
		lightColor: "#047857",
		xPct: 0.22,
		yPct: 0.75,
	},
	{
		id: "mern",
		label: "FULL STACK MERN",
		category: "Scalable Architecture",
		tech: "Node.js, Express.js, NestJS, React.js, MongoDB, REST APIs, Microservices",
		hash: "0x19AF…38D7",
		color: "#06b6d4",
		lightColor: "#0e7490",
		xPct: 0.78,
		yPct: 0.75,
	},
];

const EngineeringNetwork = () => {
	const { isDark } = useTheme();
	const canvasRef = useRef(null);
	const [activeNode, setActiveNode] = useState(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return undefined;
		const ctx = canvas.getContext("2d");
		if (!ctx) return undefined;

		let animationFrameId;
		let width = (canvas.width = canvas.offsetWidth);
		let height = (canvas.height = canvas.offsetHeight);

		const handleResize = () => {
			if (!canvas) return;
			width = canvas.width = canvas.offsetWidth;
			height = canvas.height = canvas.offsetHeight;
		};

		window.addEventListener("resize", handleResize);

		// Packets traveling between nodes
		const packets = [
			{
				from: 0,
				to: 1,
				progress: 0.1,
				speed: 0.005,
				color: isDark ? "#3b82f6" : "#1d4ed8",
			},
			{
				from: 1,
				to: 2,
				progress: 0.45,
				speed: 0.004,
				color: isDark ? "#10b981" : "#047857",
			},
			{
				from: 2,
				to: 0,
				progress: 0.75,
				speed: 0.006,
				color: isDark ? "#06b6d4" : "#0e7490",
			},
			{
				from: 0,
				to: 2,
				progress: 0.3,
				speed: 0.0045,
				color: isDark ? "#3b82f6" : "#1d4ed8",
			},
			{
				from: 1,
				to: 0,
				progress: 0.6,
				speed: 0.0055,
				color: isDark ? "#10b981" : "#047857",
			},
		];

		let time = 0;

		const render = () => {
			time += 0.02;
			ctx.clearRect(0, 0, width, height);

			const calculatedNodes = NODES.map((node) => ({
				...node,
				activeColor: isDark ? node.color : node.lightColor,
				x: node.xPct * width,
				y: node.yPct * height,
			}));

			// Outer triangle perimeter
			ctx.lineWidth = 1.25;
			ctx.strokeStyle =
				isDark ? "rgba(59, 130, 246, 0.25)" : "rgba(29, 78, 216, 0.35)";

			ctx.beginPath();
			ctx.moveTo(calculatedNodes[0].x, calculatedNodes[0].y);
			ctx.lineTo(calculatedNodes[1].x, calculatedNodes[1].y);
			ctx.lineTo(calculatedNodes[2].x, calculatedNodes[2].y);
			ctx.closePath();
			ctx.stroke();

			// Center security nexus point
			const centerX =
				(calculatedNodes[0].x + calculatedNodes[1].x + calculatedNodes[2].x) /
				3;
			const centerY =
				(calculatedNodes[0].y + calculatedNodes[1].y + calculatedNodes[2].y) /
				3;

			// Spokes to center
			calculatedNodes.forEach((node) => {
				ctx.beginPath();
				ctx.moveTo(node.x, node.y);
				ctx.lineTo(centerX, centerY);
				ctx.strokeStyle =
					isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(15, 23, 42, 0.12)";
				ctx.stroke();
			});

			// Central shield pulse ring
			const pulseRadius = 18 + Math.sin(time * 2) * 4;
			ctx.beginPath();
			ctx.arc(centerX, centerY, pulseRadius, 0, Math.PI * 2);
			ctx.strokeStyle =
				isDark ? "rgba(16, 185, 129, 0.4)" : "rgba(4, 120, 87, 0.5)";
			ctx.stroke();

			ctx.beginPath();
			ctx.arc(centerX, centerY, 6, 0, Math.PI * 2);
			ctx.fillStyle = isDark ? "#10b981" : "#047857";
			ctx.fill();

			// Animate traveling data packets
			packets.forEach((packet) => {
				packet.progress += packet.speed;
				if (packet.progress > 1) packet.progress = 0;

				const fromNode = calculatedNodes[packet.from];
				const toNode = calculatedNodes[packet.to];

				const px = fromNode.x + (toNode.x - fromNode.x) * packet.progress;
				const py = fromNode.y + (toNode.y - fromNode.y) * packet.progress;

				ctx.beginPath();
				ctx.arc(px, py, 3.5, 0, Math.PI * 2);
				ctx.fillStyle = packet.color;
				ctx.shadowColor = packet.color;
				ctx.shadowBlur = 8;
				ctx.fill();
				ctx.shadowBlur = 0;
			});

			// Draw Node Circles and Rings
			calculatedNodes.forEach((node) => {
				// Outer glow ring
				ctx.beginPath();
				ctx.arc(node.x, node.y, 22, 0, Math.PI * 2);
				ctx.strokeStyle = node.activeColor;
				ctx.lineWidth = 1.5;
				ctx.stroke();

				// Inner solid node
				ctx.beginPath();
				ctx.arc(node.x, node.y, 8, 0, Math.PI * 2);
				ctx.fillStyle = node.activeColor;
				ctx.shadowColor = node.activeColor;
				ctx.shadowBlur = 10;
				ctx.fill();
				ctx.shadowBlur = 0;
			});

			animationFrameId = requestAnimationFrame(render);
		};

		const prefersReducedMotion =
			typeof window !== "undefined" &&
			window.matchMedia &&
			window.matchMedia("(prefers-reduced-motion: reduce)").matches;

		if (!prefersReducedMotion) {
			render();
		} else {
			render();
			cancelAnimationFrame(animationFrameId);
		}

		return () => {
			window.removeEventListener("resize", handleResize);
			cancelAnimationFrame(animationFrameId);
		};
	}, [isDark]);

	const handleNodeClick = useCallback((node) => {
		setActiveNode((prev) => (prev?.id === node.id ? null : node));
	}, []);

	return (
		<div
			className={styles.container}
			aria-label="Interactive Tri-Domain Engineering Network">
			<canvas ref={canvasRef} className={styles.canvas} />

			{/* HTML Overlays for Accessibility & Touch Targets */}
			<div className={styles.overlayLayer}>
				{NODES.map((node) => {
					const isSelected = activeNode?.id === node.id;
					return (
						<button
							key={node.id}
							type="button"
							onClick={() => handleNodeClick(node)}
							className={`${styles.nodeButton} ${styles[`node_${node.id}`]} ${isSelected ? styles.nodeActive : ""}`}
							aria-label={`${node.label} - Click to inspect architectural role`}>
							<div className={styles.nodeLabel}>{node.label}</div>
							<div className={styles.nodeHash}>{node.hash}</div>
						</button>
					);
				})}

				{/* Active Node Detail Card */}
				{activeNode && (
					<div className={styles.detailCard} role="region" aria-live="polite">
						<div className={styles.detailHeader}>
							<span
								className={styles.detailBadge}
								style={{
									color: isDark ? activeNode.color : activeNode.lightColor,
									borderColor:
										isDark ? activeNode.color : activeNode.lightColor,
								}}>
								{activeNode.category}
							</span>
							<button
								type="button"
								onClick={() => setActiveNode(null)}
								className={styles.closeBtn}
								aria-label="Close detail card">
								×
							</button>
						</div>
						<h4 className={styles.detailTitle}>{activeNode.label}</h4>
						<p className={styles.detailTech}>{activeNode.tech}</p>
					</div>
				)}
			</div>

			<div className={styles.metaFooter}>
				<span className={styles.statusLive}>
					<span className={styles.pulseDot} aria-hidden="true" />
					TRI_DISCIPLINE_ARCHITECTURE: ACTIVE
				</span>
				<span className={styles.hint}>
					Click nodes to inspect ecosystem integration
				</span>
			</div>
		</div>
	);
};

export { EngineeringNetwork };
