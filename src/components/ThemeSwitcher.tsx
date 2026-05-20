import { useEffect, useState } from "react";

type ThemeName = "default" | "light" | "dark";

const themes: Array<{ value: ThemeName; label: string }> = [
  { value: "default", label: "🌈 Default" },
  { value: "light", label: "☀️ Light" },
  { value: "dark", label: "🌙 Dark" }
];

const storageKey = "tirth-portfolio-theme";

function getInitialTheme(): ThemeName {
  if (typeof window === "undefined") return "default";
  const saved = window.localStorage.getItem(storageKey);
  return saved === "light" || saved === "dark" || saved === "default"
    ? saved
    : "default";
}

export function ThemeSwitcher() {
  const [theme, setTheme] = useState<ThemeName>(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem(storageKey, theme);
  }, [theme]);

  return (
    <label className="theme-switcher">
      <span className="sr-only">Portfolio theme</span>
      <select
        aria-label="Portfolio theme"
        value={theme}
        onChange={(event) => setTheme(event.target.value as ThemeName)}
      >
        {themes.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </label>
  );
}
