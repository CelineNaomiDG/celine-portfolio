'use client';

import { useCallback, useId, useLayoutEffect, useRef, useState } from 'react';
import styles from './project-cards.module.css';

type Project = { title: string; state: string; desc: string; tags: string[] };
type Selection = {
  project: Project;
  index: number;
  rect: DOMRect;
  trigger: HTMLButtonElement;
};

const learningNotes = [
  {
    title: 'Give each part a clear job.',
    explanation:
      'An Angular component brings a view and its behavior together. Shared logic can live in a service, so a component does not have to do everything itself.',
    remember: 'Component: the view. Service: the shared work.',
    focus:
      'Component boundaries, TypeScript and the flow of state in a task-management interface.',
  },
  {
    title: 'Derive it. Don’t duplicate it.',
    explanation:
      'When a value can be calculated from existing state, calculating it avoids keeping two copies in sync. A filtered list, for example, can come from the data and the current filter.',
    remember: 'Keep the source. Calculate the view.',
    focus:
      'React composition, hooks, filtering and clear ways to present data in an interface.',
  },
  {
    title: 'An address is not ownership.',
    explanation:
      'A pointer tells you where something is, not who is responsible for it. When using dynamically allocated memory in C, it helps to make responsibility for its lifetime explicit.',
    remember: 'Who allocates it? Who uses it? Who frees it?',
    focus:
      'C fundamentals, memory, algorithms and systematic problem solving during the Codam Piscine.',
  },
  {
    title: 'Data takes a journey.',
    explanation:
      'ETL stands for Extract, Transform, Load: get the source data, turn it into the shape you need, then put it where it will be used. Validation helps check that each step makes sense.',
    remember: 'Get it → shape it → store it.',
    focus:
      'Python scripting, SQL, data transformation and validation in a personal orientation project.',
  },
];

function ProjectDetail({
  selection,
  onDismiss,
}: {
  selection: Selection;
  onDismiss: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const travelRef = useRef<HTMLDivElement>(null);
  const flipRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const animations = useRef<Animation[]>([]);
  const closing = useRef(false);
  const mounted = useRef(false);
  const projectId = useId();
  const note = learningNotes[selection.index - 1];

  const dismiss = useCallback(() => {
    if (closing.current || !mounted.current) return;
    closing.current = true;
    animations.current.forEach((animation) => animation.cancel());
    const finish = () => {
      if (mounted.current) onDismiss();
    };
    const travel = travelRef.current;
    const flip = flipRef.current;
    const dialog = dialogRef.current;
    if (
      !travel ||
      !flip ||
      !dialog ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      !travel.animate
    ) {
      finish();
      return;
    }
    const target = dialog.getBoundingClientRect();
    const source =
      selection.trigger.closest('article')?.getBoundingClientRect() ??
      selection.rect;
    const transform = `translate(${source.left + source.width / 2 - target.left - target.width / 2}px, ${source.top + source.height / 2 - target.top - target.height / 2}px) scale(${source.width / target.width}, ${source.height / target.height})`;
    const move = travel.animate(
      [
        { transform: 'none', opacity: 1 },
        { transform, opacity: 0 },
      ],
      { duration: 300, easing: 'cubic-bezier(.4,0,.6,1)', fill: 'forwards' },
    );
    const turn = flip.animate(
      [{ transform: 'rotateY(180deg)' }, { transform: 'rotateY(0deg)' }],
      { duration: 300, fill: 'forwards' },
    );
    animations.current = [move, turn];
    move.onfinish = finish;
  }, [onDismiss, selection]);

  useLayoutEffect(() => {
    const dialog = dialogRef.current;
    const travel = travelRef.current;
    const flip = flipRef.current;
    if (!dialog || !travel || !flip) return;
    mounted.current = true;
    closing.current = false;
    const body = document.body;
    const previousOverflow = body.style.overflow;
    const previousPadding = body.style.paddingRight;
    const scrollbarWidth = Math.max(
      0,
      window.innerWidth - document.documentElement.clientWidth,
    );
    if (scrollbarWidth)
      body.style.paddingRight = `${parseFloat(getComputedStyle(body).paddingRight) + scrollbarWidth}px`;
    body.style.overflow = 'hidden';
    dialog.showModal();
    closeRef.current?.focus({ preventScroll: true });
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const target = dialog.getBoundingClientRect();
    const source = selection.rect;
    if (!preference.matches && travel.animate) {
      const transform = `translate(${source.left + source.width / 2 - target.left - target.width / 2}px, ${source.top + source.height / 2 - target.top - target.height / 2}px) scale(${source.width / target.width}, ${source.height / target.height})`;
      animations.current = [
        travel.animate(
          [
            { transform, opacity: 0.8 },
            { transform: 'none', opacity: 1 },
          ],
          { duration: 780, easing: 'cubic-bezier(.2,.75,.2,1)' },
        ),
        flip.animate(
          [
            { transform: 'rotateY(0deg)', offset: 0 },
            { transform: 'rotateY(0deg)', offset: 0.22 },
            { transform: 'rotateY(180deg)', offset: 1 },
          ],
          { duration: 780, easing: 'cubic-bezier(.3,.1,.2,1)' },
        ),
      ];
    }
    const onPreference = () => {
      if (!preference.matches) return;
      animations.current.forEach((animation) => animation.cancel());
      if (closing.current) onDismiss();
    };
    // Native dialog handles focus containment; Escape and backdrop clicks share the same exit.
    const onCancel = (event: Event) => {
      event.preventDefault();
      dismiss();
    };
    const onBackdropClick = (event: MouseEvent) => {
      if (event.target !== dialog) return;
      const rect = dialog.getBoundingClientRect();
      if (
        event.clientX < rect.left ||
        event.clientX > rect.right ||
        event.clientY < rect.top ||
        event.clientY > rect.bottom
      )
        dismiss();
    };
    dialog.addEventListener('cancel', onCancel);
    dialog.addEventListener('click', onBackdropClick);
    preference.addEventListener('change', onPreference);
    return () => {
      mounted.current = false;
      preference.removeEventListener('change', onPreference);
      dialog.removeEventListener('cancel', onCancel);
      dialog.removeEventListener('click', onBackdropClick);
      animations.current.forEach((animation) => animation.cancel());
      if (dialog.open) dialog.close();
      body.style.overflow = previousOverflow;
      body.style.paddingRight = previousPadding;
      if (selection.trigger.isConnected)
        selection.trigger.focus({ preventScroll: true });
    };
  }, [dismiss, onDismiss, selection]);

  return (
    <dialog
      ref={dialogRef}
      className={styles.dialog}
      aria-labelledby={projectId}
    >
      <div className={styles.stage}>
        <div ref={travelRef} className={styles.travel}>
          <button
            ref={closeRef}
            type="button"
            className={styles.close}
            onClick={dismiss}
            aria-label="Close learning note"
          >
            ×
          </button>
          <div ref={flipRef} className={styles.flip}>
            <div
              className={`${styles.face} ${styles.front}`}
              aria-hidden="true"
            >
              <span className={styles.modalNumber}>0{selection.index + 1}</span>
              <p className={styles.status}>{selection.project.state}</p>
              <h2>{selection.project.title}</h2>
              <p>{selection.project.desc}</p>
              <div className={styles.modalTags}>
                {selection.project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
            <div className={`${styles.face} ${styles.back}`}>
              <p className={styles.status}>{selection.project.state}</p>
              <h2 id={projectId} className={styles.projectTitle}>
                {selection.project.title}
              </h2>
              <div className={styles.learningNote}>
                <p className={styles.noteLabel}>One idea to remember</p>
                <h3>{note.title}</h3>
                <p>{note.explanation}</p>
              </div>
              <aside className={styles.remember}>
                <span>Remember</span>
                <p>{note.remember}</p>
              </aside>
              <div className={styles.projectFocus}>
                <h4>What this learning project explores</h4>
                <p>{note.focus}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
}

export default function ProjectCards({ projects }: { projects: Project[] }) {
  const [selection, setSelection] = useState<Selection | null>(null);
  const dismiss = useCallback(() => setSelection(null), []);

  return (
    <>
      <div className={`projectGrid ${styles.grid}`}>
        {projects.map((project, index) => (
          <article
            className={`projectCard ${index === 0 ? 'featured' : styles.interactive}`}
            key={project.title}
          >
            <div className="projectNo">0{index + 1}</div>
            <p className="state">{project.state}</p>
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <div className="tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            {index === 0 ? (
              <a className="caseLink" href="#case-study">
                Read the documented case study ↓
              </a>
            ) : (
              <button
                className={styles.open}
                type="button"
                aria-haspopup="dialog"
                aria-label={`Open the learning note for ${project.title}`}
                onClick={(event) => {
                  const trigger = event.currentTarget;
                  const rect = trigger
                    .closest('article')!
                    .getBoundingClientRect();
                  setSelection({ project, index, rect, trigger });
                }}
              >
                <span>Flip for a learning note</span>
                <span aria-hidden="true">↗</span>
              </button>
            )}
          </article>
        ))}
      </div>
      {selection && <ProjectDetail selection={selection} onDismiss={dismiss} />}
    </>
  );
}
