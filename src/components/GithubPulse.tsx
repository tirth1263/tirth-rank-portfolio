import { useEffect, useState } from "react";
import { Code2, GitFork, Star } from "lucide-react";

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
};

export function GithubPulse() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/tirth1263/repos?sort=updated&per_page=6")
      .then((response) => (response.ok ? response.json() : []))
      .then((data: Repo[]) => setRepos(data.filter((repo) => !repo.name.includes("portfolio")).slice(0, 4)))
      .catch(() => setRepos([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="section github-section" id="github">
      <div className="section-heading">
        <p className="eyebrow">GitHub Pulse</p>
        <h2>Recent public repositories</h2>
      </div>
      <div className="repo-grid">
        {loading &&
          Array.from({ length: 4 }).map((_, index) => (
            <div className="repo-card skeleton" key={index} aria-hidden="true" />
          ))}

        {!loading && repos.length === 0 && (
          <div className="empty-state">
            <Code2 size={20} />
            <span>GitHub activity is available at github.com/tirth1263.</span>
          </div>
        )}

        {repos.map((repo) => (
          <a className="repo-card" href={repo.html_url} target="_blank" rel="noreferrer" key={repo.id}>
            <div className="repo-topline">
              <Code2 size={18} />
              <span>{repo.language || "Repository"}</span>
            </div>
            <h3>{repo.name.replace(/-/g, " ")}</h3>
            <p>{repo.description || "Public repository from Tirth's GitHub workspace."}</p>
            <div className="repo-meta">
              <span>
                <Star size={14} />
                {repo.stargazers_count}
              </span>
              <span>
                <GitFork size={14} />
                {repo.forks_count}
              </span>
              <span>{new Date(repo.updated_at).toLocaleDateString()}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
