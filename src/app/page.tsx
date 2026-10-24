import * as motion from "motion/react-client";
import { ViewTransition } from "react";

export default function Home() {
  return (
    <ViewTransition default="fade">
      <div className="min-h-screen bg-background">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="sticky top-0 z-50 border-b border-border bg-surface/80 backdrop-blur-sm"
        >
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-bold text-foreground">
                Tartiner Labs
              </h1>
              <a
                href="https://github.com/tartinerlabs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted hover:text-foreground transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </motion.header>

        {/* Hero */}
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <section className="flex min-h-[calc(100vh-10rem)] flex-col items-center justify-center text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl"
            >
              Building Software
              <br />
              <span className="text-accent">That Connects</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="max-w-xl text-lg text-muted"
            >
              <em>Tartiner</em> means &quot;to spread&quot; in French. We build
              software that spreads warmth, connection, and clarity.
            </motion.p>
          </section>

          {/* Story */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mx-auto max-w-2xl border-t border-border py-24"
          >
            <h2 className="mb-8 text-3xl font-bold tracking-tight">
              Our Story
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-muted">
              <p>
                Tartiner started in 2015 as the name of a university project
                group at the University of Queensland. A few of us wanted to
                build a company around it after graduation, but we each went
                home to our own countries, and it never happened.
              </p>
              <p>
                Tartiner Labs continues that idea, now based in Singapore, with
                one goal: build quality software and spread it across the world.
              </p>
              <p className="text-foreground">
                Ambitious? Yes. That is the challenge.
              </p>
            </div>
          </motion.section>
        </main>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="border-t border-border py-8 text-center text-sm text-muted"
        >
          <p>
            &copy; {new Date().getFullYear()} Tartiner Labs &bull; Singapore
          </p>
        </motion.footer>
      </div>
    </ViewTransition>
  );
}
