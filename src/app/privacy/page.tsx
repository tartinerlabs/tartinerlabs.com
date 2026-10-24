import type { Metadata } from "next";
import Link from "next/link";
import { type ReactNode, ViewTransition } from "react";
import { ThemeToggle } from "@/components/theme-toggle";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "This site has no accounts, forms or cookies of our own. We use anonymous analytics to see which pages are visited and how fast they load.",
};

const PAD_X = "px-[clamp(20px,5vw,56px)]";
const NAV_LINK = "text-muted no-underline hover:text-foreground";

const SECTIONS: { label: string; body: ReactNode }[] = [
  {
    label: "01 · What we collect",
    body: (
      <p className="m-0">
        Page views, referrer, approximate country, browser and device type, and
        page load performance. We do not collect names, email addresses or
        anything you type.
      </p>
    ),
  },
  {
    label: "02 · Services we use",
    body: (
      <>
        <p className="m-0">
          <span className="text-foreground">PostHog</span> for product
          analytics, routed through this domain.
        </p>
        <p className="m-0">
          <span className="text-foreground">Vercel Analytics</span> for
          aggregate traffic counts.
        </p>
        <p className="m-0">
          <span className="text-foreground">Vercel Speed Insights</span> for
          page performance metrics.
        </p>
      </>
    ),
  },
  {
    label: "03 · How it's used",
    body: (
      <p className="m-0">
        Only to understand how the site is used and to keep it fast. We do not
        sell data or use it for advertising.
      </p>
    ),
  },
  {
    label: "04 · Local storage",
    body: (
      <p className="m-0">
        Your light or dark theme choice is saved in your browser. It never
        leaves your device.
      </p>
    ),
  },
  {
    label: "05 · Opting out",
    body: (
      <p className="m-0">
        Content blockers and your browser&apos;s tracking protection will stop
        the analytics. The site works the same either way.
      </p>
    ),
  },
];

function Logo({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="currentColor"
      aria-hidden="true"
    >
      <polygon points="8,10 92,20 92,32 8,38" />
      <rect x="40" y="28" width="20" height="62" />
    </svg>
  );
}

export default function PrivacyPage() {
  return (
    <ViewTransition default="fade">
      <div className="flex min-h-screen flex-col bg-background leading-[normal] text-foreground [transition:background_.4s,color_.4s]">
        <header
          className={`flex flex-wrap items-center justify-between gap-4 py-6 ${PAD_X}`}
        >
          <Link
            href="/"
            className="flex items-center gap-3 text-foreground no-underline"
          >
            <Logo size={24} />
            <span className="text-[16px] font-semibold">Tartiner Labs</span>
          </Link>
          <nav className="flex flex-wrap items-center gap-x-7 gap-y-3 font-mono text-[12px] tracking-[.06em]">
            <Link href="/" className={NAV_LINK}>
              ← /home
            </Link>
            <ThemeToggle />
          </nav>
        </header>

        <main
          className={`flex flex-1 flex-col gap-[clamp(48px,6vw,72px)] pt-[clamp(56px,8vw,96px)] pb-[clamp(72px,10vw,120px)] ${PAD_X}`}
        >
          <div className="flex flex-col gap-6">
            <span className="font-mono text-[13px] text-muted">
              /privacy · updated 25 Oct 2026
            </span>
            <h1 className="m-0 text-[length:clamp(56px,10vw,128px)] font-semibold leading-[.9] tracking-[-0.05em]">
              Privacy
            </h1>
            <p className="m-0 max-w-[640px] text-pretty text-[length:clamp(18px,2vw,22px)] leading-[1.5] text-muted">
              This site has no accounts, forms or cookies of our own. We use
              anonymous analytics to see which pages are visited and how fast
              they load.
            </p>
          </div>
          <div className="flex max-w-[960px] flex-col border-t border-foreground">
            {SECTIONS.map(({ label, body }) => (
              <div
                key={label}
                className="flex flex-wrap gap-x-12 gap-y-3 border-b border-border py-8"
              >
                <span className="flex-[0_0_200px] pt-[3px] font-mono text-[13px] text-accent">
                  {label}
                </span>
                <div className="flex flex-[1_1_400px] flex-col gap-4 text-[17px] leading-[1.6] text-muted">
                  {body}
                </div>
              </div>
            ))}
          </div>
        </main>

        <footer
          className={`flex flex-wrap items-center justify-between gap-x-6 gap-y-4 border-t border-border py-10 text-[14px] text-muted ${PAD_X}`}
        >
          <div className="flex items-center gap-3 text-foreground">
            <Logo size={20} />
            <span className="text-muted">
              &copy; {new Date().getFullYear()} Tartiner Labs &bull; Singapore
            </span>
          </div>
          <div className="flex gap-6 font-mono text-[12px]">
            <a href="https://github.com/tartinerlabs" className={NAV_LINK}>
              /github ↗
            </a>
            <Link
              href="/privacy"
              aria-current="page"
              className="text-foreground no-underline"
            >
              /privacy
            </Link>
            <a href="/llms.txt" className={NAV_LINK}>
              /llms.txt
            </a>
          </div>
        </footer>
      </div>
    </ViewTransition>
  );
}
