import { siteConfig } from "config/siteConfig";

/**
 * Service to handle CV / Resume download reliably across desktop and mobile browsers.
 *
 * @param {string} customPath - Optional path override.
 * @returns {Promise<boolean>}
 */
const downloadResume = async (customPath = null) => {
	try {
		const targetPath = customPath || siteConfig.cvPath;
		const filename = siteConfig.cvFilename;

		// Create invisible anchor tag to trigger native download
		const anchor = document.createElement("a");
		anchor.href = targetPath;
		anchor.download = filename;
		anchor.target = "_blank";
		anchor.rel = "noopener noreferrer";

		document.body.appendChild(anchor);
		anchor.click();
		document.body.removeChild(anchor);

		return true;
	} catch (error) {
		console.error("[resumeService] Download failed:", error);
		// Fallback: open in new tab
		window.open(customPath || siteConfig.cvPath, "_blank");
		return false;
	}
};

export { downloadResume };
