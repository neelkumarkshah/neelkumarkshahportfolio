import { useCallback, useState, useEffect } from "react";
import PropTypes from "prop-types";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Button } from "components/common";
import { navLinks, site } from "data/portfolioData";
import { useTheme } from "hooks/useTheme";
import { downloadResume } from "services/resumeService";
import styles from "./NavBar.module.css";

const NavBar = ({ onOpenCvModal }) => {
	const [expanded, setExpanded] = useState(false);
	const [activeSection, setActiveSection] = useState("home");
	const [scrolled, setScrolled] = useState(false);
	const { isDark, toggleTheme } = useTheme();

	const closeMenu = useCallback(() => setExpanded(false), []);

	const handleDownloadCv = useCallback(async () => {
		if (onOpenCvModal) {
			onOpenCvModal();
		} else {
			await downloadResume();
		}
		closeMenu();
	}, [onOpenCvModal, closeMenu]);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);

			const sections = navLinks.map((link) => link.id);
			const scrollPosition = window.scrollY + 120;

			for (let i = sections.length - 1; i >= 0; i -= 1) {
				const sectionEl = document.getElementById(sections[i]);
				if (sectionEl) {
					const top = sectionEl.offsetTop;
					if (scrollPosition >= top) {
						setActiveSection(sections[i]);
						break;
					}
				}
			}
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header className={styles.stickyWrapper}>
			<Navbar
				expand="xl"
				expanded={expanded}
				onToggle={setExpanded}
				className={`${styles.navbar} ${scrolled ? styles.scrolled : ""} ${expanded ? styles.expandedNavbar : ""}`}>
				<Container fluid className={styles.inner}>
					{/* Brand Logo & Title */}
					<Navbar.Brand
						href="#home"
						className={styles.brand}
						onClick={closeMenu}>
						<span className={styles.dot} aria-hidden="true" />
						<span className={styles.brandName}>{site.name}</span>
					</Navbar.Brand>

					{/* Mobile Controls (Theme Toggle + Hamburger) */}
					<div className={styles.navControlsMobile}>
						<button
							type="button"
							onClick={toggleTheme}
							className={styles.themeToggleBtn}
							aria-label={
								isDark ? "Switch to Light Mode" : "Switch to Dark Mode"
							}
							title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}>
							<span className="material-symbols-outlined" aria-hidden="true">
								{isDark ? "light_mode" : "dark_mode"}
							</span>
						</button>

						<Navbar.Toggle
							aria-controls="primary-navigation"
							className={styles.toggle}>
							<span className="material-symbols-outlined" aria-hidden="true">
								{expanded ? "close" : "menu"}
							</span>
						</Navbar.Toggle>
					</div>

					{/* Primary Navigation & Action Cluster */}
					<Navbar.Collapse
						id="primary-navigation"
						data-testid="nav-collapse"
						className={styles.collapse}>
						<Nav className={styles.links} onSelect={closeMenu}>
							{navLinks.map((link) => {
								const isActive = activeSection === link.id;
								return (
									<Nav.Link
										key={link.id}
										href={link.href}
										className={`${styles.link} ${isActive ? styles.linkActive : ""}`}>
										{link.label}
									</Nav.Link>
								);
							})}
						</Nav>

						<div className={styles.actionCluster}>
							<button
								type="button"
								onClick={toggleTheme}
								className={`${styles.themeToggleBtn} ${styles.themeToggleDesktop}`}
								aria-label={
									isDark ? "Switch to Light Mode" : "Switch to Dark Mode"
								}
								title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}>
								<span className="material-symbols-outlined" aria-hidden="true">
									{isDark ? "light_mode" : "dark_mode"}
								</span>
							</button>

							<Button
								size="sm"
								variant="solid"
								icon="download"
								onClick={handleDownloadCv}
								className={styles.cta}>
								Download CV
							</Button>
						</div>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

NavBar.propTypes = {
	onOpenCvModal: PropTypes.func,
};

export { NavBar };
