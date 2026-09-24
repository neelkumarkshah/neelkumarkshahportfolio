import { useCallback, useRef, useState } from "react";
import { terminalCommands } from "data/portfolioData";
import { sleep } from "utils/sleep";
import { downloadResume } from "services/resumeService";

let lineIdCounter = 0;
const nextLineId = () => {
	lineIdCounter += 1;
	return lineIdCounter;
};

const useTerminal = (options = {}) => {
	const { onThemeToggle } = options;
	const [lines, setLines] = useState([
		{
			id: nextLineId(),
			text: "NKS-SECOPS Shell v2.4 (x86_64-secure-node)",
			kind: "system",
		},
		{
			id: nextLineId(),
			text: "Type 'help' to inspect available system commands.",
			kind: "system",
		},
	]);
	const [inputValue, setInputValue] = useState("");
	const [isBusy, setIsBusy] = useState(false);

	const historyRef = useRef([]);
	const historyIndexRef = useRef(0);

	const print = useCallback((text, kind = "output") => {
		setLines((prev) => [...prev, { id: nextLineId(), text, kind }]);
	}, []);

	const runPing = useCallback(async () => {
		setIsBusy(true);
		print("pinging meity.gov.in / hyperledger-peer.nbf ...", "system");

		const start = performance.now();
		await sleep(350 + Math.random() * 350);
		const elapsedMs = Math.round(performance.now() - start);

		print(`pong: node=peer0.org1.nbf-cluster latency=${elapsedMs}ms tls=1.3 (simulated)`, "output");
		setIsBusy(false);
	}, [print]);

	const runCommand = useCallback(
		async (rawInput) => {
			const trimmed = rawInput.trim();
			if (!trimmed) return;
			print(`$ ${trimmed}`, "command");

			historyRef.current.push(trimmed);
			historyIndexRef.current = historyRef.current.length;

			const key = trimmed.toLowerCase();

			if (key === "clear") {
				setLines([]);
				return;
			}

			if (key === "ping") {
				await runPing();
				return;
			}

			if (key === "theme") {
				if (typeof onThemeToggle === "function") {
					onThemeToggle();
					print("Theme toggled successfully.", "system");
				} else {
					print("Theme toggle event triggered.", "system");
				}
				return;
			}

			if (key === "cv" || key === "download-cv" || key === "resume") {
				print("Triggering CV download...", "system");
				await downloadResume();
				print("CV download initiated (Neelkumar_K_Shah.pdf).", "output");
				return;
			}

			if (key === "date") {
				print(new Date().toUTCString(), "output");
				return;
			}

			if (Object.hasOwn(terminalCommands, key)) {
				print(terminalCommands[key], "output");
			} else {
				print(`Command not recognized: '${trimmed}'. Type 'help' for valid commands.`, "error");
			}
		},
		[print, runPing, onThemeToggle],
	);

	const submit = useCallback(() => {
		if (isBusy) return;
		const value = inputValue;
		setInputValue("");
		runCommand(value);
	}, [inputValue, isBusy, runCommand]);

	const recall = useCallback((direction) => {
		const history = historyRef.current;
		if (history.length === 0) return;

		const next = Math.max(0, Math.min(historyIndexRef.current + direction, history.length));
		historyIndexRef.current = next;

		setInputValue(next === history.length ? "" : history[next]);
	}, []);

	return { lines, inputValue, setInputValue, isBusy, submit, recall };
};

export { useTerminal };
