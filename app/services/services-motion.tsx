'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import styles from './services.module.css';

const clamp = (value: number) => Math.min(1, Math.max(0, value));

/** Progressive enhancement: server-rendered content is visible until an observer is ready. */
export default function ServicesMotion({ children }: { children: ReactNode }) {
  const pageRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const page = pageRef.current;
    if (!page || !('IntersectionObserver' in window)) return;

    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let stopMotion = () => {};

    const configureMotion = () => {
      stopMotion();
      if (preference.matches) return;

      const targets = Array.from(
        page.querySelectorAll<HTMLElement>('[data-reveal]'),
      );
      const timeline = page.querySelector<HTMLElement>(
        '[data-process-timeline]',
      );
      const timelineProgress = page.querySelector<HTMLElement>(
        '[data-process-progress]',
      );
      let frame = 0;

      const reveal = (element: HTMLElement, immediately = false) => {
        if (immediately) element.style.setProperty('--reveal-delay', '0ms');
        element.dataset.revealState = 'visible';
        observer.unobserve(element);
      };

      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) reveal(entry.target as HTMLElement);
          }
        },
        { rootMargin: '0px 0px 72px 0px', threshold: 0 },
      );

      // Measure first, then arm only elements that have not entered the viewport.
      const offscreen = targets.filter(
        (element) =>
          element.getBoundingClientRect().top > window.innerHeight + 24 &&
          !element.contains(document.activeElement),
      );
      page.dataset.motion = 'active';
      for (const element of offscreen) {
        const delay = Math.min(
          200,
          Math.max(0, Number(element.dataset.revealDelay) || 0),
        );
        element.style.setProperty('--reveal-delay', `${delay}ms`);
        element.dataset.revealState = 'pending';
        observer.observe(element);
      }

      const updateProgress = () => {
        frame = 0;
        const scrollable =
          document.documentElement.scrollHeight - window.innerHeight;
        const readingProgress =
          scrollable > 0 ? clamp(window.scrollY / scrollable) : 0;
        if (progressRef.current)
          progressRef.current.style.transform = `scaleX(${readingProgress})`;
        if (timeline && timelineProgress) {
          const rect = timeline.getBoundingClientRect();
          const progress = clamp(
            (window.innerHeight * 0.62 - rect.top - 24) /
              Math.max(1, rect.height - 24),
          );
          timelineProgress.style.transform = `scaleY(${progress})`;
        }
      };
      const scheduleProgress = () => {
        if (!frame) frame = window.requestAnimationFrame(updateProgress);
      };
      const revealParents = (target: Element | null) => {
        let element = target;
        while (element && element !== page) {
          if (
            element instanceof HTMLElement &&
            element.dataset.revealState === 'pending'
          )
            reveal(element, true);
          element = element.parentElement;
        }
      };
      const onFocus = (event: FocusEvent) => {
        if (event.target instanceof Element) revealParents(event.target);
      };
      const onAnchor = (event: MouseEvent) => {
        if (!(event.target instanceof Element)) return;
        const anchor = event.target.closest<HTMLAnchorElement>('a[href^="#"]');
        if (!anchor) return;
        try {
          revealParents(
            document.getElementById(decodeURIComponent(anchor.hash.slice(1))),
          );
        } catch {
          /* Keep native anchor behavior. */
        }
      };
      const resizeObserver =
        'ResizeObserver' in window
          ? new ResizeObserver(scheduleProgress)
          : null;
      resizeObserver?.observe(page);
      window.addEventListener('scroll', scheduleProgress, { passive: true });
      window.addEventListener('resize', scheduleProgress);
      page.addEventListener('focusin', onFocus);
      page.addEventListener('click', onAnchor);
      updateProgress();

      stopMotion = () => {
        observer.disconnect();
        resizeObserver?.disconnect();
        window.cancelAnimationFrame(frame);
        window.removeEventListener('scroll', scheduleProgress);
        window.removeEventListener('resize', scheduleProgress);
        page.removeEventListener('focusin', onFocus);
        page.removeEventListener('click', onAnchor);
        delete page.dataset.motion;
        for (const element of targets) {
          delete element.dataset.revealState;
          element.style.removeProperty('--reveal-delay');
        }
        timelineProgress?.style.removeProperty('transform');
        progressRef.current?.style.removeProperty('transform');
      };
    };

    configureMotion();
    preference.addEventListener('change', configureMotion);
    return () => {
      preference.removeEventListener('change', configureMotion);
      stopMotion();
    };
  }, []);

  return (
    <div ref={pageRef} lang="nl" className={styles.page}>
      <div className={styles.readingProgress} aria-hidden="true">
        <div ref={progressRef} />
      </div>
      {children}
    </div>
  );
}
