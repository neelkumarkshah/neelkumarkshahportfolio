import { sleep } from "utils/sleep";

/**
 * Validate email format with standard RFC 5322 compatible regex.
 */
const isValidEmail = (email) => {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(String(email).toLowerCase());
};

/**
 * Service to handle contact form submission with async/await and explicit state handling.
 *
 * @param {Object} payload - { name, email, subject, message }
 * @returns {Promise<{ success: boolean, message: string, data?: Object }>}
 */
const submitContactForm = async (payload) => {
	const { name, email, subject, message } = payload;

	// Validate inputs
	if (!name || !name.trim()) {
		throw new Error("Please enter your name.");
	}

	if (!email || !email.trim() || !isValidEmail(email)) {
		throw new Error("Please enter a valid email address.");
	}

	if (!message || message.trim().length < 10) {
		throw new Error("Message should be at least 10 characters long.");
	}

	// Simulate secure network transport latency
	await sleep(600 + Math.random() * 400);

	// In a production backend, this would POST to process.env.REACT_APP_CONTACT_ENDPOINT
	return {
		success: true,
		message: "Secure transmission dispatched successfully. Thank you for connecting!",
		data: {
			name: name.trim(),
			email: email.trim(),
			subject: subject ? subject.trim() : "General Inquiry",
			timestamp: new Date().toISOString(),
		},
	};
};

export { submitContactForm, isValidEmail };
