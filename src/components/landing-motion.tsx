"use client";

import { useEffect } from "react";

const EASE = "cubic-bezier(.16,1,.3,1)";

type AnimatedElement = HTMLElement & { __a?: Animation };

export function LandingMotion() {
  useEffect(() => {
    if (!Element.prototype.animate) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const target = entry.target as AnimatedElement;
          if (entry.isIntersecting && target.__a) {
            target.__a.play();
            io.unobserve(target);
          }
        }
      },
      { threshold: 0.15 },
    );

    const lazy = (
      el: AnimatedElement,
      keyframes: Keyframe[],
      options: KeyframeAnimationOptions,
    ) => {
      const animation = el.animate(keyframes, {
        fill: "both",
        easing: EASE,
        ...options,
      });
      animation.pause();
      animation.currentTime = 0;
      el.__a = animation;
      io.observe(el);
    };

    for (const el of document.querySelectorAll<HTMLElement>("[data-reveal]")) {
      lazy(
        el,
        [
          { opacity: 0, transform: "translateY(28px)" },
          { opacity: 1, transform: "none" },
        ],
        { duration: 1000, delay: Number(el.dataset.revealDelay) || 0 },
      );
    }

    for (const el of document.querySelectorAll<HTMLElement>("[data-draw]")) {
      lazy(el, [{ transform: "scaleX(0)" }, { transform: "scaleX(1)" }], {
        duration: 1600,
        delay: 300,
      });
    }

    for (const el of document.querySelectorAll<HTMLElement>("[data-spread]")) {
      lazy(
        el,
        [
          { letterSpacing: "-0.14em", opacity: 0, filter: "blur(8px)" },
          {
            letterSpacing: el.dataset.spread,
            opacity: 1,
            filter: "blur(0)",
          },
        ],
        { duration: 2400 },
      );
    }

    const cleanups: (() => void)[] = [];
    for (const el of document.querySelectorAll<HTMLElement>("[data-marquee]")) {
      const animation = el.animate(
        [{ transform: "translateX(0)" }, { transform: "translateX(-50%)" }],
        {
          duration: Number(el.dataset.marquee) || 40000,
          iterations: Number.POSITIVE_INFINITY,
        },
      );
      const pause = () => animation.pause();
      const play = () => animation.play();
      el.addEventListener("mouseenter", pause);
      el.addEventListener("mouseleave", play);
      cleanups.push(() => {
        el.removeEventListener("mouseenter", pause);
        el.removeEventListener("mouseleave", play);
        animation.cancel();
      });
    }

    return () => {
      io.disconnect();
      for (const cleanup of cleanups) cleanup();
    };
  }, []);

  return null;
}
