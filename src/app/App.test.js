import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import { ThemeProvider } from "./providers/ThemeProvider";
import { App } from "./App";

describe("App", () => {
	it("renders main hero section and brand", () => {
		render(
			<ThemeProvider>
				<App />
			</ThemeProvider>,
		);

		expect(screen.getByRole("heading", { name: "Neelkumar K. Shah" })).toBeInTheDocument();
		expect(screen.getByText("GENESIS BLOCK #0000")).toBeInTheDocument();
	});

	it("renders lazy loaded sections asynchronously", async () => {
		render(
			<ThemeProvider>
				<App />
			</ThemeProvider>,
		);

		await waitFor(
			() => {
				expect(screen.getByText("Key Projects & Security Tools")).toBeInTheDocument();
				expect(screen.getByText("IEEE Research Publications")).toBeInTheDocument();
				expect(screen.getByText("Contact & Collaboration")).toBeInTheDocument();
			},
			{ timeout: 4000 },
		);
	});
});
