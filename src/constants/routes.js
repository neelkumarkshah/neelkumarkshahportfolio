const SECTION_IDS = Object.freeze({
	HOME: "home",
	ABOUT: "about",
	EXPERIENCE: "experience",
	SKILLS: "skills",
	PROJECTS: "projects",
	PUBLICATIONS: "publications",
	EDUCATION: "education",
	CERTIFICATIONS: "certifications",
	RESUME: "resume",
	CONTACT: "contact",
});

const anchorHref = (sectionId) => `#${sectionId}`;

export { SECTION_IDS, anchorHref };
