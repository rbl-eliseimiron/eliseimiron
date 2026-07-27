import { ContactDialog } from "./contact-dialog";
import { SponsorCarousel } from "./sponsor-carousel";
import type { SectionConfig } from "@/lib/sections";

export function Footer({ section }: { section: SectionConfig }) {
  return (
    <footer className="mt-24 border-t border-border">
      {section.showSponsors && (
        <div className="border-b border-border py-8">
          <SponsorCarousel section={section.slug} />
        </div>
      )}

      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-4 py-10 text-center sm:flex-row sm:justify-between sm:px-6 sm:text-left lg:px-8">
        <div>
          <p className="text-sm font-semibold text-accent">{section.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">
            © {new Date().getFullYear()} · Toate drepturile rezervate.
          </p>
        </div>

        <div className="flex items-center gap-4">
          {section.socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-muted-foreground transition-colors hover:text-accent"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>

        <ContactDialog />
      </div>
    </footer>
  );
}
