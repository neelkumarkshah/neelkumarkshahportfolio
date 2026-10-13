import { SECTION_IDS, anchorHref } from "constants/routes";

const site = Object.freeze({
	name: "Neelkumar K. Shah",
	role: "Cybersecurity Engineer | Blockchain Engineer | Full-Stack Developer",
	brand: "Neelkumar K. Shah",
	tagline:
		"Engineer with 5 years of experience securing and building blockchain and web systems. Contributed in the MeitY-funded National Blockchain Framework (NBF) for India's National Blockchain Service, architecting a multi-organization Hyperledger Fabric network and leading vulnerability assessment and penetration testing (VAPT) across 4-5 blockchain applications and 30-45 APIs. Built full-stack security tooling with React, Node.js, Express.js, and MongoDB, including a security assessment platform and a Python database vulnerability scanner that detects 18+ vulnerability classes. Author of 5 peer-reviewed IEEE papers on blockchain and smart contract security.",
	email: "neelkumarkshah@gmail.com",
	phone: "(+91) 8866108533",
	linkedin: "linkedin.com/in/neelkumarkshah",
	linkedinUrl: "https://linkedin.com/in/neelkumarkshah",
	portfolioUrl: "https://neelkumarkshahportfolio.vercel.app",
	githubUrl: "https://github.com",
	location: "Veraval, Gujarat, India",
	cvPath: "/assets/Neelkumar_K_Shah_CV.pdf",
	cvFilename: "Neelkumar_K_Shah_CV.pdf",
});

const navLinks = [
	{ id: "about", label: "About", href: anchorHref(SECTION_IDS.ABOUT) },
	{
		id: "experience",
		label: "Experience",
		href: anchorHref(SECTION_IDS.EXPERIENCE),
	},
	{ id: "skills", label: "Skills", href: anchorHref(SECTION_IDS.SKILLS) },
	{ id: "projects", label: "Projects", href: anchorHref(SECTION_IDS.PROJECTS) },
	{
		id: "publications",
		label: "Publications",
		href: anchorHref(SECTION_IDS.PUBLICATIONS),
	},
	{
		id: "education",
		label: "Education",
		href: anchorHref(SECTION_IDS.EDUCATION),
	},
	{
		id: "certifications",
		label: "Certifications",
		href: anchorHref(SECTION_IDS.CERTIFICATIONS),
	},
	{ id: "contact", label: "Contact", href: anchorHref(SECTION_IDS.CONTACT) },
];

const footerLinks = [
	{ id: "linkedin", label: "LINKEDIN", href: site.linkedinUrl, external: true },
	{
		id: "publications",
		label: "IEEE EXPLORE",
		href: "https://ieeexplore.ieee.org/search/searchresult.jsp?newsearch=true&queryText=Neelkumar%20K.%20Shah",
		external: true,
	},
];

const stats = [
	{ id: "years", value: "5", label: "Years Experience" },
	{ id: "publications", value: "5", label: "Peer-Reviewed IEEE Papers" },
	{ id: "vulns", value: "18+", label: "Vulns Detected by NBFDBAudit" },
	{
		id: "service",
		value: "MeitY",
		label: "National Blockchain Framework (NBF) Research & Development",
		compact: true,
	},
];

const about = {
	eyebrow: "Engineering Profile",
	title: "About Me",
	summary:
		"Cybersecurity Engineer, Blockchain Engineer & Full-Stack Developer with 5 years of experience securing and building distributed architectures.",
	callout: {
		icon: "verified_user",
		title: "Professional Profile & Background",
		body: [
			"Engineer with 5 years of experience securing and building blockchain and web systems. Contributed to the technical build of the National Blockchain Framework (NBF), a MeitY-funded initiative powering India's National Blockchain Service at C-DAC Pune. Architected a unified, multi-organization Hyperledger Fabric network (3 peer nodes, 2 organizations, 1 channel), built REST APIs for blockchain-service integration, and co-led a 7-person team building the Blockchain Security Assessment Portal (BSAP) using React, Node.js, Express.js, and MongoDB.",
			"Specialized in Vulnerability Assessment and Penetration Testing (VAPT), leading security evaluations across 4-5 blockchain applications and 30-45 APIs, identifying approximately 25 vulnerabilities per application on average. Engineered NBFDBAudit, a Python-based scanner detecting 18+ vulnerability classes across MongoDB and CouchDB environments. Architected and delivered production web platforms including Travel Beyond (corporate air travel) and Sudarshana (full-stack web & API security assessment platform). Holds a Master's Degree in Cybersecurity from GTU, a Bachelor's Degree in Computer Engineering from Marwadi Education Foundation, is a Certified Blockchain Security Professional (Blockchain Council, USA), and has authored 5 peer-reviewed IEEE papers on blockchain and smart contract security.",
		],
	},
};

const experience = [
	{
		id: "freelance-consultant",
		seed: "freelance-fullstack-security-engineer",
		latest: true,
		badge: {
			icon: "terminal",
			label: "Self-Employed / Freelance",
			tone: "accent",
		},
		period: "Jun 2026 - Present",
		role: "Independent Full-Stack, Blockchain & Security Engineer",
		org: "Self-Employed · Freelance",
		location: "Remote / India",
		links: [
			{
				label: "Travel Beyond · tbgind.com",
				url: "https://tbgind.com",
				icon: "flight_takeoff",
			},
		],
		bullets: [
			"Architected and delivered, production-grade corporate air travel web platform for Travel Beyond [tbgind.com](https://tbgind.com) - an executive air travel management company with operational hubs in Dubai and Mumbai.",
			"Hardened the Travel Beyond platform with strict Content Security Policy (CSP), and integrated structured schema.org JSON-LD for global SEO.",
			"Developed Solidity smart contracts for Ethereum-based decentralized applications and performed source code security analysis of Solidity contracts to identify vulnerabilities, logic flaws, and compliance gaps.",
			"Architected and built Sudarshana, a full-stack web application security assessment platform (Node.js, Express.js, React.js, MongoDB) that automates security assessments of web applications and REST APIs.",
			"Built RESTful API endpoints, secure authentication workflows, and interactive React.js dashboards with automated PDF audit reports for real-time security posture assessment, vulnerability tracking, and remediation management.",
		],
	},
	{
		id: "cdac-2021",
		seed: "cdac-2021-proj-eng",
		latest: false,
		badge: {
			icon: "verified",
			label: "MeitY National Initiative",
			tone: "accent",
		},
		period: "Oct 2021 - Jun 2026",
		role: "Project Engineer",
		org: "C-DAC: Centre for Development of Advanced Computing",
		location: "Pune, Maharashtra, India",
		bullets: [
			"Contributed to the technical build of the National Blockchain Framework (NBF), a MeitY-funded initiative powering India’s National Blockchain Service.",
			"Designed and architected a unified, multi-organization Hyperledger Fabric network (3 peer nodes, 2 organizations, 1 channel).",
			"Built REST APIs that integrate blockchain services into security audit workflows.",
			"Co-led a 7-person team building a full-stack Blockchain Security Assessment Portal (React, Node.js, Express.js, MongoDB) that automates security evaluations across 10-15 APIs, applications, containers, and databases.",
			"Designed and built NBFDBAudit, a Python-based scanner that detects 18+ vulnerability classes across 4-5 MongoDB/CouchDB environments, including 1 production environment.",
			"Co-led VAPT across 4-5 blockchain applications and 30-45 APIs, identifying approximately 25 vulnerabilities per application on average, and partnered with engineering teams on remediation.",
			"Authored and presented 5 peer-reviewed papers at IEEE ICBDS and I2CT conferences on blockchain threat modeling, smart contract vulnerability detection, and NoSQL database security.",
			"Earned recognition as Performer of the Month at C-DAC.",
		],
	},
	{
		id: "huptech-2019",
		seed: "huptech-2019-ui-dev",
		latest: false,
		badge: { icon: "code", label: "Frontend Developer", tone: "tertiary" },
		period: "Jun 2019 - Sep 2019",
		role: "Jr. UI Designer and Developer",
		org: "Huptech Web Private Limited",
		location: "Ahmedabad, Gujarat, India",
		bullets: [
			"Developed clean, responsive, and cross-browser compatible web user interfaces using HTML, CSS, JavaScript, jQuery, and Bootstrap.",
		],
	},
];

const skillGroups = [
	{
		id: "blockchain-core",
		icon: "link",
		iconTone: "accent",
		title: "Blockchain & Web3",
		subtitle: "Distributed ledgers, smart contracts & dApps",
		tags: [
			"Hyperledger Fabric",
			"Hyperledger Sawtooth",
			"Ethereum",
			"Solidity",
			"Node.js Chaincode",
			"Smart Contracts",
			"Decentralized Applications (dApps)",
			"Truffle",
			"Ganache",
			"IPFS",
			"MetaMask",
		],
	},
	{
		id: "security-assessment",
		icon: "security",
		iconTone: "secondary",
		title: "Cybersecurity & Auditing",
		subtitle: "VAPT, threat modeling & vulnerability remediation",
		tags: [
			"Vulnerability Assessment & Pen Testing (VAPT)",
			"Web Application Security",
			"API Security Testing",
			"Smart Contract Auditing",
			"Threat Modeling",
			"Static Source Code Analysis",
			"NoSQL Database Security Audit",
			"HTTP Security Headers",
			"Content Security Policy (CSP)",
			"Security Assessment Automation",
			"NBFDBAudit Scanner",
		],
	},
	{
		id: "full-stack-dev",
		icon: "terminal",
		iconTone: "tertiary",
		title: "Full-Stack & Engineering",
		subtitle: "Scalable APIs, UI dashboards & security tooling",
		tags: [
			"JavaScript",
			"Node.js",
			"Express.js",
			"NestJS",
			"React.js",
			"Python",
			"MongoDB",
			"CouchDB",
			"RESTful APIs",
			"Authentication Workflows",
			"HTML/CSS",
			"Bootstrap",
			"Security Reporting (PDF)",
			"Technical Documentation",
			"Team Leadership",
		],
	},
];

const projects = [
	{
		id: "nbf-framework",
		ref: "NBF-MEITY",
		status: "NATIONAL SERVICE",
		icon: "hub",
		title: "National Blockchain Framework (NBF)",
		category: "Research & Development (MeitY)",
		description:
			"Unified blockchain framework designed to power India's National Blockchain Service under the Ministry of Electronics and Information Technology (MeitY). The implementation used a multi-organization Hyperledger Fabric network (3 peer nodes, 2 organizations, 1 channel) with secure MSP/CA configuration, and REST APIs for blockchain service integration into security audit workflows.",
		tags: [
			"#HyperledgerFabric",
			"#Sawtooth",
			"#NodeOrchestration",
			"#MSP_CA",
			"#EnterpriseBlockchain",
			"#MeitY",
		],
		submodules: [
			{
				id: "nbfdbaudit",
				ref: "NBF-AUDIT-01",
				status: "DEPLOYED / RESEARCH",
				icon: "bug_report",
				title: "NBFDBAudit Tool",
				category: "Cybersecurity & DB Scanner",
				description:
					"A Python-based automated vulnerability assessment tool engineered for MongoDB and CouchDB environments. Detects 18+ vulnerability classes across 4–5 environments, including 1 production environment.",
				tags: [
					"#Python",
					"#MongoDB",
					"#CouchDB",
					"#VAPT",
					"#SecurityScanner",
					"#BlockchainDB",
				],
			},
			{
				id: "bsap-portal",
				ref: "BSAP-PORTAL",
				status: "OPERATIONAL",
				icon: "web",
				title: "Blockchain Security Assessment Portal (BSAP)",
				category: "Full Stack MERN & Security",
				description:
					"A full-stack security evaluation platform developed for NBF. Co-led a 7-person team building this portal (React, Node.js, Express.js, MongoDB) that automates security evaluations across 10–15 APIs, applications, containers, and databases.",
				tags: [
					"#React",
					"#NodeJS",
					"#Express",
					"#MongoDB",
					"#REST_API",
					"#SecurityAutomation",
					"#MeitY",
				],
			},
		],
	},
	{
		id: "sudarshana-security-scanner",
		ref: "SUDARSHANA-SEC",
		status: "SECURITY AUDIT TOOL",
		icon: "shield",
		title: "Sudarshana - Web & API Security Assessment Platform",
		category: "Full-Stack & Automated Security Auditing",
		description:
			"A full-stack web application security assessment platform built with Node.js, Express.js, React.js, and MongoDB that automates security assessments of web applications and REST APIs. Features RESTful API endpoints, secure authentication workflows, and interactive React.js dashboards with automated PDF audit reports for real-time security posture assessment, vulnerability tracking, and remediation management. Includes Solidity smart contract development and source code security analysis.",
		tags: [
			"#NodeJS",
			"#React",
			"#Express",
			"#MongoDB",
			"#SecurityAudit",
			"#API_Security",
			"#HeaderScanner",
			"#PDF_Reports",
			"#Solidity",
			"#SmartContracts",
			"#SourceCodeAnalysis",
			"#VAPT",
		],
	},
	{
		id: "travel-beyond",
		ref: "TBG-AIR",
		status: "PRODUCTION / CLIENT",
		icon: "flight_takeoff",
		title: "Travel Beyond - Executive Corporate Air Travel Platform",
		category: "Full-Stack Web Application & Production Engineering",
		url: "https://tbgind.com",
		description:
			"Architected and delivered the production-grade corporate air travel web platform for Travel Beyond (tbgind.com) - an executive air travel management company with operational hubs in Dubai and Mumbai. Built with high-performance responsive architecture, hardened with strict Content Security Policy (CSP), and integrated structured schema.org JSON-LD for global SEO.",
		tags: [
			"#React",
			"#JavaScript",
			"#FullStack",
			"#CorporateAirTravel",
			"#CSP_Security",
			"#Schema_JSON_LD",
			"#SEO_Optimization",
			"#ProductionDeployment",
		],
	},
	{
		id: "ewaste-dapp",
		ref: "GTU-DISSERTATION",
		status: "M.E. DISSERTATION",
		icon: "recycling",
		title: "E-Waste Lifecycle Management DApp",
		category: "Decentralized DApp",
		description:
			"Designed and built a decentralized Ethereum DApp using Solidity, Truffle, Ganache, and IPFS that provides tamper-resistant ownership tracking across the e-waste lifecycle as M.E. Cybersecurity dissertation at GTU. Integrated a React.js frontend with MetaMask wallet connectivity for on-chain interactions and conducted threat modeling to optimize decentralized performance.",
		tags: [
			"#Ethereum",
			"#Solidity",
			"#IPFS",
			"#React",
			"#MetaMask",
			"#Truffle",
			"#Ganache",
			"#ThreatModeling",
		],
	},
];

const publications = [
	{
		id: "pub-2025",
		year: "2025",
		date: "17 Feb 2026",
		conference: "4th IEEE ICBDS",
		title: "A Threat Modeling Approach for Securing Blockchain Framework",
		venue:
			"2025 4th IEEE International Conference on Blockchain and Distributed Systems Security (ICBDS)",
		href: "https://ieeexplore.ieee.org/document/11378344",
		doi: "10.1109/ICBDS",
		documentId: "11378344",
	},
	{
		id: "pub-2024",
		year: "2024",
		date: "17 Jan 2025",
		conference: "3rd IEEE ICBDS",
		title:
			"Security Assessment Framework and Evaluation for Blockchain Applications (SAFE-Block)",
		venue:
			"2024 3rd IEEE International Conference on Blockchain and Distributed Systems Security (ICBDS)",
		href: "https://ieeexplore.ieee.org/document/10837302",
		doi: "10.1109/ICBDS",
		documentId: "10837302",
	},
	{
		id: "pub-2023-db",
		year: "2023",
		date: "15 Dec 2023",
		conference: "2nd IEEE ICBDS",
		title:
			"Efficient Solution for NoSQL Database Security in Blockchain-Based Applications",
		venue:
			"2023 2nd IEEE International Conference on Blockchain and Distributed Systems Security (ICBDS)",
		href: "https://ieeexplore.ieee.org/document/10346312",
		doi: "10.1109/ICBDS",
		documentId: "10346312",
	},
	{
		id: "pub-2023-sc",
		year: "2023",
		date: "23 May 2023",
		conference: "8th IEEE I2CT",
		title:
			"Smart Contract Vulnerability Detection Techniques for Hyperledger Fabric",
		venue:
			"2023 8th IEEE International Conference for Convergence in Technology (I2CT)",
		href: "https://ieeexplore.ieee.org/document/10126362",
		doi: "10.1109/I2CT",
		documentId: "10126362",
	},
	{
		id: "pub-2022-sc",
		year: "2022",
		date: "18 Jul 2022",
		conference: "7th IEEE I2CT",
		title:
			"Smart Contract - Security Assessment Integrated Framework (SC-SIF) for Hyperledger Fabric",
		venue:
			"2022 7th IEEE International Conference for Convergence in Technology (I2CT)",
		href: "https://ieeexplore.ieee.org/document/9824439",
		doi: "10.1109/I2CT",
		documentId: "9824439",
	},
];

const education = [
	{
		id: "me-cybersecurity",
		degree: "Master's Degree in Cybersecurity",
		institution: "Graduate School of Engineering and Technology, GTU",
		location: "Ahmedabad, Gujarat, India",
		period: "Sep 2019 - Jul 2021",
		status: "VERIFIED GRADUATE",
		dissertation:
			"Development and Deployment of E-waste Management Modules Using Blockchain Technology",
	},
	{
		id: "be-computer-engineering",
		degree: "Bachelor's Degree in Computer Engineering",
		institution: "Marwadi Education Foundation",
		location: "Rajkot, Gujarat, India",
		period: "Aug 2015 - May 2019",
		status: "VERIFIED GRADUATE",
		dissertation: "Computer Engineering & Distributed Systems Foundation",
	},
];

const certifications = [
	{
		id: "cbsp",
		icon: "workspace_premium",
		iconTone: "accent",
		title: "Certified Blockchain Security Professional",
		issuer: "Blockchain Council, USA",
		type: "Professional Certification",
	},
	{
		id: "cdac-award",
		icon: "military_tech",
		iconTone: "tertiary",
		title: "Performer of the Month",
		issuer: "C-DAC, Pune, Maharashtra, India",
		type: "Organization Honor & Award",
	},
	{
		id: "nielit-gov",
		icon: "verified",
		iconTone: "accent",
		title: "Blockchain Technology for Government Officials",
		issuer: "Future Skills PRIME, NIELIT, Kolkata, India",
		type: "National Government Accreditation",
	},
];

const contactApiFields = [
	{ key: "name", value: site.name },
	{ key: "role", value: site.role },
	{ key: "email", value: site.email },
	{ key: "phone", value: site.phone },
	{ key: "location", value: site.location },
	{ key: "linkedin", value: site.linkedin },
	{ key: "portfolio", value: site.portfolioUrl },
	{ key: "status", value: "OPEN_FOR_SECURITY_AND_ENGINEERING" },
];

const terminalCommands = {
	help: "Available commands: about, skills, experience, projects, publications, education, certifications, contact, cv, whoami, ping, theme, clear",
	about:
		"Neelkumar K. Shah - Cybersecurity Engineer | Blockchain Engineer | Full-Stack Developer. 5 years of experience securing and building blockchain and web systems (C-DAC MeitY, Travel Beyond, Sudarshana).",
	skills:
		"Cybersecurity: VAPT, API Testing, Smart Contract Auditing, Threat Modeling, NBFDBAudit | Blockchain: Hyperledger Fabric/Sawtooth, Ethereum, Solidity | Full-Stack: JavaScript, Node.js, Express.js, NestJS, React.js, Python, MongoDB",
	experience:
		"Self-Employed / Freelance (Independent Full-Stack, Blockchain & Security Engineer, Jun 2026-Present) <- C-DAC Pune (Project Engineer MeitY, Oct 2021-Jun 2026) <- Huptech Web (Jr. UI Designer & Developer, Jun-Sep 2019)",
	projects:
		"1. Travel Beyond (Executive Corporate Air Travel Web Platform - tbgind.com) | 2. Sudarshana (Full-Stack Web & API Security Assessment Platform) | 3. National Blockchain Framework (NBF) [NBFDBAudit Tool & BSAP Portal] | 4. E-Waste Lifecycle Management DApp (Ethereum, Solidity, IPFS, React)",
	publications:
		"5 IEEE publications on Blockchain Security: ICBDS 2025 (Threat Modeling), ICBDS 2024 (SAFE-Block), ICBDS 2023 (NoSQL DB Security), I2CT 2023 (Smart Contract Vulns), I2CT 2022 (SC-SIF)",
	education:
		"1. Master's Degree in Cybersecurity - GTU (Sep 2019-Jul 2021) | 2. Bachelor's Degree in Computer Engineering - Marwadi Education Foundation (Aug 2015-May 2019)",
	certifications:
		"1. Certified Blockchain Security Professional (Blockchain Council, USA) | 2. Blockchain Technology for Government Officials (Future Skills PRIME, NIELIT) | 3. Performer of the Month (C-DAC)",
	contact: `email: ${site.email} | phone: ${site.phone} | linkedin: ${site.linkedin} | portfolio: ${site.portfolioUrl}`,
	cv: "Download CV: available at /assets/Neelkumar_K_Shah_CV.pdf (or click 'Download CV' in navbar)",
	whoami: "guest@nks-seceng-node",
	clear: "",
};

export {
	site,
	navLinks,
	footerLinks,
	stats,
	about,
	experience,
	skillGroups,
	projects,
	publications,
	education,
	certifications,
	contactApiFields,
	terminalCommands,
};
