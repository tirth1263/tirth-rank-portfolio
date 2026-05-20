import { Code2, ExternalLink, Globe2, Mail, Phone } from "lucide-react";
import { profile } from "../data/portfolio";

const contactCards = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail
  },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/[^\d+]/g, "")}`,
    icon: Phone
  },
  {
    label: "Website",
    value: "tirth-rank-portfolio.web.app",
    href: profile.website,
    icon: Globe2
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/tirth-rank",
    href: profile.linkedIn,
    icon: ExternalLink
  },
  {
    label: "GitHub",
    value: "github.com/tirth1263",
    href: profile.github,
    icon: Code2
  }
];

export function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="contact-heading">
        <h2>Contact</h2>
      </div>
      <div className="contact-card-grid">
        {contactCards.map((card) => {
          const Icon = card.icon;
          return (
            <a
              className="contact-card"
              href={card.href}
              key={card.label}
              rel="noreferrer"
              target={card.href.startsWith("http") ? "_blank" : undefined}
            >
              <span className="contact-card-title">
                <Icon size={22} />
                {card.label}
              </span>
              <span className="contact-card-value">{card.value}</span>
            </a>
          );
        })}
      </div>
    </section>
  );
}
