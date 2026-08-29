import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("falcons-theme", theme);
    } catch {
      // storage unavailable (private browsing, etc.) — theme still applies this session
    }
  }, [theme]);

  const nextLabel = theme === "dark" ? "Switch to light mode" : "Switch to dark mode";

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
      aria-label={nextLabel}
      title={nextLabel}
    >
      {theme === "dark" ? (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="4.3" stroke="currentColor" strokeWidth="1.4" />
          <path
            d="M12 2.6v2.3M12 19.1v2.3M21.4 12h-2.3M4.9 12H2.6M18.6 5.4l-1.6 1.6M7 17l-1.6 1.6M18.6 18.6 17 17M7 7 5.4 5.4"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M20.1 14.3A8.5 8.5 0 1 1 9.7 3.9a6.9 6.9 0 0 0 10.4 10.4z"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}
