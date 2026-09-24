import { lazy, Suspense, useState, useCallback } from "react";
import { NavBar, Footer } from "../components/layout";
import { Hero } from "../features/home/Hero";
import { Stats } from "../features/home/Stats";
import { About } from "../features/about/About";
import { Experience } from "../features/experience/Experience";
import { Skills } from "../features/skills/Skills";
import { CvModal } from "../components/ui";
import styles from "./App.module.css";

// Lazy-loaded below-the-fold feature sections for optimal bundle performance
const Projects = lazy(() =>
	import("../features/projects/Projects").then((m) => ({ default: m.Projects })),
);
const Publications = lazy(() =>
	import("../features/publications/Publications").then((m) => ({ default: m.Publications })),
);
const Education = lazy(() =>
	import("../features/education/Education").then((m) => ({ default: m.Education })),
);
const Certifications = lazy(() =>
	import("../features/certifications/Certifications").then((m) => ({ default: m.Certifications })),
);
const ResumeSection = lazy(() =>
	import("../features/resume/ResumeSection").then((m) => ({ default: m.ResumeSection })),
);
const Contact = lazy(() =>
	import("../features/contact/Contact").then((m) => ({ default: m.Contact })),
);

const SectionFallback = () => (
	<div className={styles.sectionFallback} aria-hidden="true">
		<div className={styles.fallbackSpinner} />
	</div>
);

const App = () => {
	const [cvModalOpen, setCvModalOpen] = useState(false);

	const handleOpenCvModal = useCallback(() => {
		setCvModalOpen(true);
	}, []);

	const handleCloseCvModal = useCallback(() => {
		setCvModalOpen(false);
	}, []);

	return (
		<>
			<NavBar onOpenCvModal={handleOpenCvModal} />

			<main id="main-content">
				<Hero onOpenCvModal={handleOpenCvModal} />
				<Stats />
				<About />
				<Experience />
				<Skills />

				<Suspense fallback={<SectionFallback />}>
					<Projects />
				</Suspense>

				<Suspense fallback={<SectionFallback />}>
					<Publications />
				</Suspense>

				<Suspense fallback={<SectionFallback />}>
					<Education />
				</Suspense>

				<Suspense fallback={<SectionFallback />}>
					<Certifications />
				</Suspense>

				<Suspense fallback={<SectionFallback />}>
					<ResumeSection onOpenCvModal={handleOpenCvModal} />
				</Suspense>

				<Suspense fallback={<SectionFallback />}>
					<Contact />
				</Suspense>
			</main>

			<Footer />

			<CvModal show={cvModalOpen} onHide={handleCloseCvModal} />
		</>
	);
};

export { App };
