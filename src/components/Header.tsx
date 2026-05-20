import { Code2, ExternalLink, Menu, X } from "lucide-react";
import { useState } from "react";
import type { User } from "firebase/auth";
import { profile } from "../data/portfolio";
import { AuthButton } from "./AuthButton";
import { ThemeSwitcher } from "./ThemeSwitcher";

const navItems = [
  ["Education & Research", "#research"],
  ["Work Experience", "#work"],
  ["Projects", "#projects"],
  ["Tech", "#tech"],
  ["Responsibilities", "#responsibilities"],
  ["My Work", "#github"],
  ["Contact", "#contact"]
];

type HeaderProps = {
  user: User | null;
  loading: boolean;
};

export function Header({ user, loading }: HeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Tirth Rank home">
        <span>TR</span>
        <strong>Tirth Rank</strong>
      </a>

      <nav className={open ? "nav-links open" : "nav-links"} aria-label="Main">
        {navItems.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <a className="icon-button" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
          <Code2 size={18} />
        </a>
        <a className="icon-button" href={profile.linkedIn} target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <ExternalLink size={18} />
        </a>
        <ThemeSwitcher />
        <AuthButton user={user} loading={loading} />
        <button
          className="menu-button"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((next) => !next)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}
