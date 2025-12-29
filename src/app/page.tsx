"use client";

import { motion } from "motion/react";

export default function Home() {
  return (
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
            <h1 className="text-xl font-bold text-foreground">Tartiner Labs</h1>
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
      </main>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="border-t border-border py-8 text-center text-sm text-muted"
      >
        <p>&copy; {new Date().getFullYear()} Tartiner Labs &bull; Singapore</p>
      </motion.footer>
    </div>
  );
}
