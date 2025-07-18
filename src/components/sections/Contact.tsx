import { siteConfig } from "@/lib/siteConfig";

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 max-w-2xl mx-auto px-4 py-20 space-y-4 border-t border-muted mt-20"
    >
      <h2 className="text-2xl font-semibold tracking-tight">📬 Get in Touch</h2>
      <p className="text-muted-foreground">
        Want to collaborate, chat, or share an idea?
      </p>
      <ul className="space-y-1 text-sm">
        <li>
          Email:{" "}
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-primary hover:underline"
          >
            {siteConfig.email}
          </a>
        </li>
        <li>
          GitHub:{" "}
          <a
            href={siteConfig.links.github}
            className="text-primary hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            @{siteConfig.links.github.split("/").pop()}
          </a>
        </li>
        <li>
          LinkedIn:{" "}
          <a
            href={siteConfig.links.linkedin}
            className="text-primary hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            /in/{siteConfig.links.linkedin.split("/").pop()}
          </a>
        </li>
      </ul>
    </section>
  );
}
