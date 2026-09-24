# Neelkumar K. Shah — Production-Grade Portfolio Website

A high-performance, production-grade personal engineering portfolio website for **Neelkumar K. Shah** (Blockchain Security Engineer, Cybersecurity Researcher, and Full Stack MERN Developer). 

Built with React 18, pure ECMAScript (`.js` only, zero `.jsx`/`.tsx`), React-Bootstrap responsive layout primitives, custom design tokens, dual light/dark themes, interactive tri-domain architecture visualizations, and an authoritative curriculum vitae integration.

---

## 1. Project Overview

This website serves as the interactive engineering portfolio and research index for Neelkumar K. Shah. It communicates a unified technical identity across three interconnected engineering disciplines:
1. **Blockchain / Web3**: Architecture, deployment, and security of enterprise permissioned ledgers (Hyperledger Fabric, Hyperledger Sawtooth) and public smart contract networks (Ethereum, Solidity).
2. **Cybersecurity & Auditing**: Threat modeling, vulnerability assessment, penetration testing (VAPT), static code analysis, and automated database vulnerability scanning (author of **NBFDBAudit** detecting 18+ NoSQL vulnerabilities).
3. **Full Stack MERN Engineering**: Scalable, authenticated microservices and dashboards built with MongoDB, Express.js, React.js, and Node.js (lead developer for the **Blockchain Security Assessment Portal (BSAP)** under MeitY).

---

## 2. Technology Stack

- **Frontend Core**: React 18.3.1 (Functional components, custom hooks, `React.lazy`, `Suspense`)
- **Language**: Modern ECMAScript (ES2022+), JavaScript exclusively (`.js` files only)
- **Responsive Grid & Primitives**: `react-bootstrap` (v2.10.10) & `bootstrap` (v5.3.8)
- **Styling Architecture**: CSS Modules + Global Design Tokens (`tokens.css`) with strict `rem` font sizes
- **Typography**:
  - Headings: `Space Grotesk` (700 for Hero, 600 for Sections)
  - Body & UI: `Inter` (400 for Body, 500 for Nav, 600 for Buttons)
  - Code & Metadata: `JetBrains Mono` (400-500 for Hashes, Terminal, Tech Badges)
- **Icons**: Google Material Symbols Outlined
- **Testing**: Jest, React Testing Library, `@testing-library/jest-dom`
- **Build Toolchain**: Create React App (`react-scripts` v5.0.1) with absolute path resolution via `jsconfig.json`

---

## 3. Key Features

- **Interactive Engineering Network Canvas**: Custom HTML5 Canvas / SVG interactive visual simulating real-time data packets traversing Blockchain nodes, Cybersecurity shields, and MERN services.
- **MERN Ecosystem Flow**: Interactive multi-tier diagram detailing how React, Express, Node.js, and MongoDB interconnect in production security portals.
- **Cryptographic Career Ledger**: Reverse-chronological career timeline linking positions at Rashtriya Raksha University and C-DAC (MeitY) via deterministic SHA-style block hashes (`useHashChain`).
- **5 Peer-Reviewed IEEE Publications**: Complete research index with direct links to IEEE Xplore digital library publications across IEEE ICBDS and I2CT conferences.
- **Dual Light & Dark Themes**: Context-driven theme system with system preference detection and `localStorage` persistence.
- **Full-Stack Contact Form & Terminal**: Dual-mode communication interface featuring an async-validated contact form and an interactive CLI terminal shell with async `ping` network simulation.
- **Direct CV Download & Interactive Preview**: Downloadable authentic resume PDF (`Neelkumar_Shah_CV.pdf`) and an in-browser printable modal viewer.

---

## 4. Prerequisites

- **Node.js**: Version `18.0.0` or higher (tested on Node.js 18, 20, and 22 LTS).
- **npm**: Version `8.0.0` or higher (bundled with Node.js).

---

## 5. Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/neelkumarkshah/neelkumarkshah-porfolio.git
   cd neelkumarkshah-porfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Verify Environment**:
   No external API keys are required for standard local operation. All services provide resilient client-side simulation fallbacks ready for backend connection.

---

## 6. Available Scripts

In the project directory, you can run:

### `npm start`
Runs the application in development mode with hot-module reloading.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`
Compiles and optimizes the React application for production deployment into the `build/` directory.
- Minifies JavaScript and CSS bundles.
- Produces split chunks for lazy-loaded below-the-fold components (`Projects`, `Publications`, `Education`, `Certifications`, `ResumeSection`, `Contact`).
- Inlines critical metadata and assets.

### `npm test`
Launches the Jest test runner in interactive watch mode.

### `npm run test:ci`
Runs all unit and integration test suites once and outputs results (designed for CI/CD pipelines).

---

## 7. Project Architecture & Directory Structure

```text
src/
├── app/                               # Core Application Shell & Routing
│   ├── App.js                         # Root layout with React.lazy code splitting
│   ├── App.module.css                 # Lazy fallback loader styling
│   ├── App.test.js                    # Integration tests for application shell
│   └── providers/
│       └── ThemeProvider.js           # ThemeContext & color scheme manager
│
├── components/                        # Reusable Atomic UI & Layout
│   ├── animations/                    # Specialized interactive diagrams & canvas
│   │   ├── EngineeringNetwork/        # Tri-domain animated network mesh
│   │   ├── MernArchitecture/          # Interactive MERN multi-tier pipeline
│   │   ├── ProjectDiagram/            # Step-by-step system architecture flow
│   │   └── index.js
│   ├── common/                        # Atomic design system components
│   │   ├── Badge/                     # Status badges & security chips
│   │   ├── Button/                    # Primary, outline, ghost, icon buttons
│   │   ├── Card/                      # Cyber-styled surface containers
│   │   ├── IconTile/                  # Geometric icon containers
│   │   ├── SectionHeading/            # Standardized section headings
│   │   ├── Tag/                       # Filter tags and pills
│   │   └── index.js
│   ├── layout/                        # Global shell components
│   │   ├── Footer/                    # Verified footer & social citations
│   │   ├── NavBar/                    # Responsive navbar with theme toggle
│   │   ├── ScrollProgressBar/         # rAF-throttled scroll progress
│   │   └── index.js
│   └── ui/
│       ├── Modal/CvModal.js           # Interactive CV preview & print dialog
│       └── index.js
│
├── features/                          # Domain-Oriented Sections
│   ├── home/Hero.js                   # Hero section with signature visual
│   ├── home/Stats.js                  # Verified metrics & career stats
│   ├── about/About.js                 # Professional narrative & philosophy
│   ├── experience/Experience.js       # Ledger chain career timeline
│   ├── skills/Skills.js               # Categorized skills & interactive filters
│   ├── projects/Projects.js           # Featured projects with system diagrams
│   ├── publications/Publications.js   # 5 IEEE research publications
│   ├── education/Education.js         # GTU & MEF degree credentials
│   ├── certifications/Certifications.js # Professional security accreditations
│   ├── contact/Contact.js             # Dual-mode form & CLI terminal
│   ├── contact/ContactForm.js         # Controlled contact form with validation
│   ├── contact/Terminal.js            # Interactive shell emulator
│   └── resume/ResumeSection.js        # CV download CTA banner
│
├── hooks/                             # Custom React Hooks
│   ├── useHashChain.js                # O(n) memoized ledger hash chain
│   ├── useReveal.js                   # IntersectionObserver scroll reveal
│   ├── useScrollProgress.js           # rAF-throttled scroll tracking
│   ├── useTerminal.js                 # CLI command processor with async ping
│   ├── useTheme.js                    # Theme consumption hook
│   └── index.js
│
├── services/                          # Asynchronous Service Layer
│   ├── contactService.js              # Contact submission & payload validation
│   ├── resumeService.js               # CV download trigger & fallback handling
│   └── index.js
│
├── utils/                             # Pure Utility Functions
│   ├── hash.js                        # Deterministic string pseudo-hash
│   ├── sleep.js                       # Promise-based async delay helper
│   ├── storage.js                     # Safe localStorage wrapper
│   └── index.js
│
├── constants/                         # Application Constants
│   ├── routes.js                      # Section ID anchors
│   ├── theme.js                       # Theme keys & storage tokens
│   └── index.js
│
├── config/                            # Global Configuration
│   ├── siteConfig.js                  # Metadata, OpenGraph, and asset paths
│   └── index.js
│
├── data/                              # Single Source of Truth
│   └── portfolioData.js               # 100% authentic CV data
│
├── styles/                            # Design Tokens & Global CSS
│   ├── tokens.css                     # Custom properties for dark & light themes
│   └── index.css                      # Reset, typography, Bootstrap base
│
├── index.js                           # Entry point wrapping ThemeProvider
├── reportWebVitals.js
└── setupTests.js                      # Jest JSDOM polyfills
```

---

## 8. CV Placement & Management

The authoritative CV file is hosted as a static asset in:
- `public/assets/Neelkumar_Shah_CV.pdf`

When clicking **Download CV** from any location on the site (Navbar, Hero, Resume Banner, Footer, or Terminal command `cv`), the `resumeService.js` downloads this authentic file with the filename `Neelkumar_Shah_CV.pdf`.

To update the CV in the future:
1. Place the updated PDF in `public/assets/Neelkumar_Shah_CV.pdf`.
2. Update corresponding data entries in `src/data/portfolioData.js`.

---

## 9. Theme Architecture (Light & Dark Mode)

The website implements an accessible dual-theme system:
- **Dark Mode (Default)**: Deep charcoal background (`#090d16`), cyber blue highlights (`#3b82f6`), emerald security accents (`#10b981`), and terminal dark surfaces.
- **Light Mode**: Crisp off-white surfaces (`#f8fafc`), cobalt blue accents (`#2563eb`), slate borders, and high contrast typography.

### How Theme Switching Works:
1. On initial visit, checks `localStorage` for a saved preference (`nks_portfolio_theme_pref`).
2. If unset, falls back to the visitor's operating system preference via `window.matchMedia('(prefers-color-scheme: light)')`.
3. Sets `data-theme="dark|light"` and `style.colorScheme` on `document.documentElement`.
4. Theme changes trigger smooth CSS custom property transitions without causing layout shifts.

---

## 10. Deployment Instructions

### Vercel / Netlify / GitHub Pages
1. Build the production output:
   ```bash
   npm run build
   ```
2. For **Vercel** or **Netlify**, set the build command to `npm run build` and the output directory to `build`.
3. For **GitHub Pages**, install `gh-pages` and add `"homepage": "https://<username>.github.io/<repo>"` to `package.json`.

---

## 11. Troubleshooting

- **Issue**: Missing fonts or icons offline.
  - **Solution**: Google Fonts and Material Symbols are linked in `public/index.html`. For completely air-gapped environments, font files can be bundled locally into `src/assets/`.
- **Issue**: Port 3000 in use.
  - **Solution**: CRA will automatically prompt to run on port 3001, or pass `PORT=3005 npm start`.

---

## 12. License & Author

- **Author**: Neelkumar K. Shah
- **Contact**: neelkumarkshah@gmail.com | [LinkedIn](https://linkedin.com/in/neelkumarkshah)
