import { useEffect, useState } from "react";

type ThemeName = "default" | "light" | "dark";

const themes: Array<{ value: ThemeName; emoji: string; name: string }> = [
  { value: "default", emoji: "🌈", name: "Default" },
  { value: "light", emoji: "☀️", name: "Light" },
  { value: "dark", emoji: "🌙", name: "Dark" }
];

const storageKey = "tirth-portfolio-theme-v2";

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
    <div className="theme-switcher" aria-label="Portfolio theme">
      {themes.map((item) => (
        <button
          aria-label={`${item.name} theme`}
          aria-pressed={theme === item.value}
          className={theme === item.value ? "active" : ""}
          key={item.value}
          onClick={() => setTheme(item.value)}
          type="button"
        >
          <span className="theme-emoji" aria-hidden="true">
            {item.emoji}
          </span>
          <span className="theme-name">{item.name}</span>
        </button>
      ))}
    </div>
  );
}
