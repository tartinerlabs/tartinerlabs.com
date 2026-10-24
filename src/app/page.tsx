import { MotionConfig } from "motion/react";
import * as motion from "motion/react-client";
import { cacheLife } from "next/cache";
import { ThemeToggle } from "@/components/theme-toggle";

const PAD_X = "px-[clamp(20px,5vw,56px)]";
const NAV_LINK = "text-muted no-underline hover:text-foreground";

const EASE = [0.16, 1, 0.3, 1] as const;

// Fades and lifts an element in the first time it scrolls into view.
const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 1, delay, ease: EASE },
});

const MARQUEE = [
  { word: "Clarity", outline: false },
  { word: "Systems", outline: true },
  { word: "Long-term", outline: false },
  { word: "Data", outline: true },
];

const PRINCIPLES = [
  {
    title: "Clarity over complexity",
    body: "Fewer moving parts. Every screen obvious on first read.",
  },
  {
    title: "Systems over features",
    body: "Foundations that make the next thing easier to build.",
  },
  {
    title: "Long-term thinking",
    body: "Software meant to age quietly, without forced rewrites.",
  },
  {
    title: "Respect for data",
    body: "Privacy-focused by default. We collect only what we need.",
  },
];

const PRODUCTS = [
  { name: "Product name", status: "Live" },
  { name: "Product name", status: "In development" },
  { name: "Product name", status: "In development" },
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

export default async function Home() {
  "use cache";
  cacheLife("max");

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen overflow-hidden bg-background leading-[normal] text-foreground [transition:background_.4s,color_.4s]">
        <header
          className={`flex flex-wrap items-center justify-between gap-4 py-6 ${PAD_X}`}
        >
          <div className="flex items-center gap-3">
            <Logo size={24} />
            <span className="text-[16px] font-semibold">Tartiner Labs</span>
          </div>
          <nav className="flex flex-wrap items-center gap-x-7 gap-y-3 font-mono text-[12px] tracking-[.06em]">
            <a href="#r-origin" className={NAV_LINK}>
              /origin
            </a>
            <a href="#r-principles" className={NAV_LINK}>
              /principles
            </a>
            <a href="#r-work" className={NAV_LINK}>
              /work
            </a>
            <a
              href="https://github.com/tartinerlabs"
              target="_blank"
              rel="noopener noreferrer"
              className={NAV_LINK}
            >
              /github ↗
            </a>
            <ThemeToggle />
          </nav>
        </header>

        <div
          className={`box-border flex h-[min(740px,calc(100vh_-_80px))] min-h-[560px] flex-col justify-between py-10 ${PAD_X}`}
        >
          <motion.div
            {...reveal()}
            className="flex flex-wrap justify-between gap-x-6 gap-y-2 font-mono text-[13px] text-muted"
          >
            <span>tar·ti·ner — /taʁ.ti.ne/</span>
            <span>verb, French · to spread</span>
            <span>Singapore · 1.35° N</span>
          </motion.div>
          <div className="flex flex-col items-center gap-7">
            <motion.h1
              initial={{
                letterSpacing: "-0.14em",
                opacity: 0,
                filter: "blur(8px)",
              }}
              whileInView={{
                letterSpacing: "0.01em",
                opacity: 1,
                filter: "blur(0px)",
              }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 2.4, ease: EASE }}
              className="m-0 whitespace-nowrap text-[length:clamp(56px,18vw,232px)] font-semibold leading-[.85] tracking-[0.01em]"
            >
              Tartiner
            </motion.h1>
            <div className="relative h-px w-full bg-border">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 1.6, delay: 0.3, ease: EASE }}
                className="absolute inset-0 origin-center bg-accent"
              />
            </div>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,360px),1fr))] items-end gap-x-12 gap-y-8">
            <motion.div
              {...reveal()}
              className="max-w-[620px] text-balance text-[length:clamp(30px,4.5vw,44px)] font-medium leading-[1.05] tracking-[-0.035em]"
            >
              Labs.{" "}
              <span className="text-muted">
                Quality software, spread across the world.
              </span>
            </motion.div>
            <motion.div {...reveal(0.2)} className="flex flex-col gap-5">
              <p className="m-0 text-[17px] leading-[1.55] text-muted">
                A small software company in Singapore building simple, scalable,
                privacy-focused products that connect people and businesses.
              </p>
              <a
                href="#r-work"
                className="self-start border-b border-accent pb-1 text-[15px] font-medium text-foreground no-underline hover:text-accent"
              >
                What we&apos;re building ↓
              </a>
            </motion.div>
          </div>
        </div>

        <div
          id="r-origin"
          className={`flex flex-wrap gap-x-12 gap-y-4 border-t border-border py-14 ${PAD_X}`}
        >
          <span className="flex-[0_0_200px] pt-1 font-mono text-[13px] text-muted">
            /origin · since 2015
          </span>
          <motion.p
            {...reveal()}
            className="m-0 max-w-[720px] flex-[1_1_400px] text-pretty text-[20px] leading-[1.55] text-muted"
          >
            The name started in 2015 as a university project group at the
            University of Queensland. We meant to turn it into a company after
            graduation, then went home to our own countries instead. Tartiner
            Labs, now in Singapore, finishes what that group started.
          </motion.p>
        </div>

        <div
          id="r-principles"
          className="flex flex-col gap-16 border-t border-border py-[clamp(72px,10vw,120px)]"
        >
          <div
            className={`flex justify-between font-mono text-[13px] text-muted ${PAD_X}`}
          >
            <span>/principles</span>
            <span>hover to pause</span>
          </div>
          <div className="cursor-default overflow-hidden">
            <div className="flex w-max animate-marquee hover:[animation-play-state:paused] motion-reduce:animate-none gap-12 whitespace-nowrap text-[length:clamp(72px,11vw,136px)] font-semibold leading-none tracking-[-0.05em]">
              {[...MARQUEE, ...MARQUEE].map(({ word, outline }, i) => [
                <span
                  // biome-ignore lint/suspicious/noArrayIndexKey: list is duplicated for the loop
                  key={`w${i}`}
                  className={
                    outline
                      ? "text-transparent [-webkit-text-stroke:1.5px_var(--muted)]"
                      : "text-foreground"
                  }
                >
                  {word}
                </span>,
                // biome-ignore lint/suspicious/noArrayIndexKey: list is duplicated for the loop
                <span key={`s${i}`} className="text-accent">
                  /
                </span>,
              ])}
            </div>
          </div>
          <div
            className={`grid grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] gap-8 ${PAD_X}`}
          >
            {PRINCIPLES.map(({ title, body }, i) => (
              <motion.div
                key={title}
                {...reveal(i * 0.1)}
                className="flex flex-col gap-[14px] border-t border-border pt-5"
              >
                <span className="font-mono text-[13px] text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[22px] font-medium tracking-[-0.02em]">
                  {title}
                </span>
                <span className="text-[15px] leading-[1.55] text-muted">
                  {body}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        <div
          id="r-work"
          className={`flex flex-col gap-8 border-t border-border py-[clamp(72px,10vw,120px)] ${PAD_X}`}
        >
          <div className="flex justify-between font-mono text-[13px] text-muted">
            <span>/work</span>
            <span>placeholders</span>
          </div>
          <div className="flex flex-col border-t border-foreground">
            {PRODUCTS.map(({ name, status }, i) => (
              <motion.a
                // biome-ignore lint/suspicious/noArrayIndexKey: placeholder rows share a name
                key={i}
                {...reveal(i * 0.1)}
                // biome-ignore lint/a11y/useValidAnchor: placeholder until products have URLs
                href="#"
                className="flex flex-wrap items-center gap-x-6 gap-y-4 border-b border-border py-9 text-foreground no-underline [transition:color_.25s,padding_.4s_cubic-bezier(.16,1,.3,1)] hover:pl-5 hover:text-accent"
              >
                <span className="flex-[0_0_clamp(32px,6vw,80px)] font-mono text-[14px] text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-[1_1_280px] text-[length:clamp(36px,5vw,56px)] font-medium leading-none tracking-[-0.045em]">
                  {name}
                </span>
                <span className="flex flex-[0_1_340px] flex-col gap-[10px]">
                  <span className="text-[16px] leading-[1.45] text-muted">
                    One-line description of the product.
                  </span>
                  <span className="inline-flex items-center gap-2 font-mono text-[12px] text-muted">
                    <span
                      className={`size-[7px] rounded-full ${status === "Live" ? "bg-success" : "box-content border border-muted"}`}
                    />
                    {status}
                  </span>
                </span>
                <span className="ml-auto box-content flex size-12 flex-none items-center justify-center rounded-full border border-border text-[18px]">
                  ↗
                </span>
              </motion.a>
            ))}
          </div>
        </div>

        <footer
          className={`flex flex-col gap-20 border-t border-border pt-[clamp(64px,8vw,96px)] pb-10 ${PAD_X}`}
        >
          <motion.div
            {...reveal()}
            className="text-[length:clamp(48px,9vw,96px)] font-semibold leading-[.95] tracking-[-0.05em]"
          >
            Spread
            <br />
            <span className="text-muted">across the world.</span>
          </motion.div>
          <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-4 text-[14px] text-muted">
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
              <a href="/privacy" className={NAV_LINK}>
                /privacy
              </a>
              <a href="/llms.txt" className={NAV_LINK}>
                /llms.txt
              </a>
            </div>
          </div>
        </footer>
      </div>
    </MotionConfig>
  );
}
