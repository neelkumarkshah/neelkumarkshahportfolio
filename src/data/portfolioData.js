import { SECTION_IDS, anchorHref } from "constants/routes";

const site = Object.freeze({
	name: "Neelkumar K. Shah",
	role: "Blockchain Engineer, Cybersecurity Researcher & Full Stack MERN Developer",
	brand: "Neelkumar K. Shah",
	tagline:
		"An engineer with 5 years of experience across blockchain development, full-stack engineering, and cybersecurity. Built and hardened Hyperledger Fabric and Ethereum systems for India's National Blockchain Service initiative under the Ministry of Electronics and Information Technology (MeitY). Developed a full-stack security assessment platform (React, Node.js, Express.js, MongoDB) and an automated database vulnerability scanner. Authored 5 peer-reviewed IEEE publications on blockchain security.",
	email: "neelkumarkshah@gmail.com",
	phone: "(+91) 8866108533",
	linkedin: "linkedin.com/in/neelkumarkshah",
	linkedinUrl: "https://linkedin.com/in/neelkumarkshah",
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
	callout: {
		icon: "verified_user",
		body: [
			"A dedicated professional with a Master's degree in Cyber Security from the Graduate School of Engineering and Technology at Gujarat Technological University (GTU), as well as a Bachelor's degree in Computer Engineering from Marwadi Education Foundation. I have served as an Assistant Professor at the School of Applied Science, Engineering and Technology, Rashtriya Raksha University. Before that, I worked as a Project Engineer at the Centre for Development of Advanced Computing (C-DAC) in Pune, where I contributed to significant government R&D initiatives, notably the 'Design and Development of a Unified Blockchain Framework (National Blockchain Framework)' under the Ministry of Electronics and Information Technology (MeitY).",
			"Additionally, I worked on key initiatives such as the 'Development and Deployment of Blockchain-based E-waste Management Modules' during my Master's program and 'Sudarshana - E-Rakshak' an automated web and API security scanner. My technical expertise encompasses blockchain platforms such as Ethereum and Hyperledger, along with full-stack development using technologies such as React, Node.js, Express.js, NestJS, and Next.js. I also specialize in Vulnerability Assessment and Penetration Testing (VAPT). I am a Certified Blockchain Security Professional, have authored 5 peer-reviewed publications at prestigious IEEE conferences, and have served as a volunteer with the National Service Scheme organizing social service activities.",
		],
	},
};

const experience = [
	{
		id: "rru-2026",
		seed: "rru-2026-asst-prof",
		latest: true,
		badge: {
			icon: "school",
			label: "Rashtriya Raksha University",
			tone: "secondary",
		},
		period: "Jun 2026 - Aug 2026",
		role: "Assistant Professor",
		org: "School of Applied Sciences, Engineering and Technology - Rashtriya Raksha University",
		location: "Veraval, Gujarat, India",
		bullets: [
			"Delivered a full-day training on blockchain and cryptocurrency fundamentals to 20 NCB officers and technical staff from across India.",
			"Authored Board of Studies (BoS) documentation establishing the curriculum for a new PG Diploma in Blockchain Technology program.",
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
			"Led the MeitY-funded initiative to build the National Blockchain Framework (NBF) for India's National Blockchain Service.",
			"Co-led a 7-person team building a full-stack Blockchain Security Assessment Portal (React.js, Node.js, Express.js, MongoDB) automating evaluations across 10–15 APIs, applications, containers, and databases.",
			"Designed and architected a unified, multi-organization Hyperledger Fabric framework with 3 peer nodes, 2 organizations, and 1 channel across 2–3 test environments.",
			"Built REST APIs for security auditing and blockchain-service integration.",
			"Designed and built NBFDBAudit, a Python-based scanner detecting 18+ vulnerability classes across 4–5 MongoDB/CouchDB environments, including 1 production environment.",
			"Led VAPT across 4–5 blockchain applications and 30–45 APIs, surfacing approximately 25 vulnerabilities per application on average and partnering with engineering on remediation.",
			"Authored and presented 5 peer-reviewed papers at IEEE ICBDS and I2CT conferences on blockchain and smart contract security.",
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
		subtitle: "Distributed ledgers, consensus, & smart contracts",
		tags: [
			"Hyperledger Fabric",
			"Ethereum",
			"Hyperledger Sawtooth",
			"Solidity",
			"Truffle",
			"Ganache",
			"Smart Contracts",
			"Consensus Algorithms",
			"IPFS",
			"MSP & CA Config",
		],
	},
	{
		id: "security-assessment",
		icon: "security",
		iconTone: "secondary",
		title: "Cybersecurity & Auditing",
		subtitle: "Vulnerability analysis & threat protection",
		tags: [
			"VAPT (Web & APIs)",
			"Smart Contract Audits",
			"Static Source Code Analysis",
			"Threat Modeling",
			"NBFDBAudit Scanner",
			"NoSQL DB Security",
			"API Security Testing",
			"Cryptography",
		],
	},
	{
		id: "full-stack-dev",
		icon: "terminal",
		iconTone: "tertiary",
		title: "Full-Stack MERN & Dev",
		subtitle: "Scalable APIs & enterprise web systems",
		tags: [
			"React.js",
			"Node.js",
			"Express.js",
			"MongoDB",
			"Python",
			"NestJS",
			"REST APIs",
			"Docker",
			"Bootstrap",
			"JavaScript ES6+",
			"System Design",
			"CouchDB",
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
			"Unified blockchain framework designed to power India's National Blockchain Service under the Ministry of Electronics and Information Technology (MeitY). The implementation used a multi-organization Hyperledger Fabric topology with secure MSP/CA configuration, and REST APIs for blockchain service integration.",
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
					"A Python-based automated vulnerability assessment tool engineered for MongoDB and CouchDB environments. Detects 18+ vulnerabilities and exploits across 4–5 environments, including 1 production environment.",
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
					"A full-stack security evaluation platform developed. Co-Led by a 7-person team, it automates evaluations across APIs, applications, containers, and databases using indigenous python based tools and integration with React.js, Node.js, Express.js, and MongoDB.",
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
		id: "ewaste-dapp",
		ref: "GTU-DISSERTATION",
		status: "M.E. DISSERTATION",
		icon: "recycling",
		title: "E-Waste Lifecycle Management DApp",
		category: "Decentralized DApp",
		description:
			"A decentralized Ethereum application built as M.E. Cybersecurity Dissertation at GTU. Implements tamper-resistant ownership tracking across e-waste lifecycles with Solidity smart contracts, Truffle, Ganache, IPFS decentralized storage, and a React.js interface with MetaMask.",
		tags: [
			"#Ethereum",
			"#Solidity",
			"#IPFS",
			"#React",
			"#MetaMask",
			"#Truffle",
			"#Ganache",
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
	{ key: "status", value: "OPEN_FOR_RESEARCH_AND_CONSULTING" },
];

const terminalCommands = {
	help: "Available commands: about, skills, experience, projects, publications, education, certifications, contact, cv, whoami, ping, theme, clear",
	about:
		"Neelkumar K. Shah - Blockchain Engineer. 5 years across blockchain development, full-stack development, and cybersecurity; C-DAC (MeitY) & Rashtriya Raksha University experience.",
	skills:
		"Blockchain: Hyperledger (Fabric, Sawtooth), Ethereum (Solidity, Truffle, Ganache) | Dev: Python, Node.js, Express.js, NestJS,  React, MongoDB | Security: VAPT, Smart Contract Audits, NBFDBAudit",
	experience:
		"RRU (Assistant Professor, Jun-Aug 2026) <- C-DAC Pune (Project Engineer MeitY, Oct 2021-Jun 2026) <- Huptech Web (Jr. UI Developer, Jun-Sep 2019)",
	projects:
		"1. National Blockchain Framework (NBF) [Includes: NBFDBAudit Tool (Python DB Vuln Scanner) & BSAP Portal (MERN Security Platform)] | 2. E-Waste Lifecycle Management DApp (Ethereum, Solidity, IPFS, React)",
	publications:
		"5 IEEE publications on Blockchain Security: ICBDS 2025, ICBDS 2024 (SAFE-Block), ICBDS 2023 (NoSQL Sec), I2CT 2023, I2CT 2022 (SC-SIF)",
	education:
		"1. Master’s Degree in Cybersecurity - GTU (Sep 2019-Jul 2021) | 2. Bachelor’s Degree in Computer Engineering - Marwadi Education Foundation (Aug 2015-May 2019)",
	certifications:
		"1. Certified Blockchain Security Professional (Blockchain Council, USA) | 2. Performer of the Month (C-DAC) | 3. Blockchain Technology for Government Officials (Future Skills PRIME, NIELIT)",
	contact: `email: ${site.email} | phone: ${site.phone} | linkedin: ${site.linkedin}`,
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
