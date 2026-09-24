import { useEffect, useRef } from "react";
import Form from "react-bootstrap/Form";
import { useTerminal } from "hooks/useTerminal";
import { useTheme } from "hooks/useTheme";
import styles from "./Terminal.module.css";

const Terminal = () => {
	const { toggleTheme } = useTheme();
	const { lines, inputValue, setInputValue, isBusy, submit, recall } = useTerminal({
		onThemeToggle: toggleTheme,
	});
	const scrollRef = useRef(null);
	const inputRef = useRef(null);

	useEffect(() => {
		if (scrollRef.current) {
			scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
		}
	}, [lines]);

	const handleKeyDown = (event) => {
		if (event.key === "Enter") {
			event.preventDefault();
			submit();
		} else if (event.key === "ArrowUp") {
			event.preventDefault();
			recall(-1);
		} else if (event.key === "ArrowDown") {
			event.preventDefault();
			recall(1);
		}
	};

	return (
		<div className={styles.terminal} onClick={() => inputRef.current?.focus()}>
			<div className={styles.titlebar}>
				<div className={styles.windowDots}>
					<span className={`${styles.dot} ${styles.dotRed}`} aria-hidden="true" />
					<span className={`${styles.dot} ${styles.dotAmber}`} aria-hidden="true" />
					<span className={`${styles.dot} ${styles.dotGreen}`} aria-hidden="true" />
				</div>
				<span className={styles.titleText}>guest@nks-secops-node: ~ (bash)</span>
				<span className={styles.badgeLive}>TLS_1.3</span>
			</div>

			<div className={styles.body} ref={scrollRef}>
				{lines.map((line) => (
					<div
						key={line.id}
						className={`${styles.line} ${line.kind === "command" ? styles.lineCommand : ""} ${
							line.kind === "system" ? styles.lineSystem : ""
						} ${line.kind === "error" ? styles.lineError : ""}`}
					>
						{line.text}
					</div>
				))}

				<div className={styles.inputRow}>
					<span className={styles.prompt} aria-hidden="true">
						$
					</span>
					<Form.Control
						ref={inputRef}
						type="text"
						value={inputValue}
						onChange={(event) => setInputValue(event.target.value)}
						onKeyDown={handleKeyDown}
						disabled={isBusy}
						placeholder={isBusy ? "executing payload..." : ""}
						className={styles.input}
						aria-label="Terminal command input"
						autoComplete="off"
						spellCheck={false}
					/>
					{isBusy && (
						<span className={styles.busyIndicator} role="status" aria-label="Command in progress" />
					)}
				</div>
			</div>

			<div className={styles.terminalFooter}>
				<span>TRY: help, about, skills, experience, projects, cv, ping, clear</span>
			</div>
		</div>
	);
};

export { Terminal };
