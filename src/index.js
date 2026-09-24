import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "./app/providers/ThemeProvider";
import { App } from "./app/App";
import { reportWebVitals } from "./reportWebVitals";
import "./styles/index.css";

const root = createRoot(document.getElementById("root"));
root.render(
	<StrictMode>
		<ThemeProvider>
			<App />
		</ThemeProvider>
	</StrictMode>,
);

reportWebVitals();
