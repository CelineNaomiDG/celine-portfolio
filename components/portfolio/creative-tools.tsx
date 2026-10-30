'use client';
/* oxlint-disable next/no-img-element -- Local, resized data URLs must stay client-side; these are user-created decorative stickers, not remotely optimized assets. */
import { useEffect, useRef, useState } from 'react';
type Sticker = {
  id: number;
  text: string;
  x: number;
  y: number;
  image?: string;
  rotation?: number;
  scale?: number;
};
const initial: Sticker[] = [
  { id: 1, text: 'Made with care ↗', x: 70, y: 8 },
  { id: 2, text: 'Ideas into interfaces', x: 62, y: 31 },
  { id: 3, text: 'Keep exploring ✳', x: 8, y: 64 },
];
const stops = [
  { id: 'home', name: 'Introduction' },
  { id: 'projects', name: 'Selected work' },
  { id: 'case-study', name: 'FamilyOS case' },
  { id: 'skills', name: 'Skills' },
  { id: 'about', name: 'About me' },
  { id: 'contact', name: 'Contact' },
];
const key = 'celine-creative-v2';
export default function CreativeTools() {
  const [creative, setCreative] = useState(true),
    [editing, setEditing] = useState(false),
    [stickers, setStickers] = useState<Sticker[]>(initial),
    [selected, setSelected] = useState<number | null>(null);
  const [ready, setReady] = useState(false),
    [tour, setTour] = useState<number | null>(null),
    [auto, setAuto] = useState(false),
    [reduced, setReduced] = useState(true);
  const [notice, setNotice] = useState('');
  const upload = useRef<HTMLInputElement>(null);
  const toolbar = useRef<HTMLDivElement>(null),
    drag = useRef<{
      id: number;
      x: number;
      y: number;
      startX: number;
      startY: number;
    } | null>(null);
  useEffect(() => {
    const init = setTimeout(() => {
      try {
        const stored = JSON.parse(localStorage.getItem(key) || 'null');
        if (
          stored &&
          Array.isArray(stored.stickers) &&
          stored.stickers.length <= 8 &&
          stored.stickers.every(
            (s: Sticker) =>
              Number.isFinite(s.id) &&
              typeof s.text === 'string' &&
              s.text.length < 50 &&
              (!s.image ||
                (typeof s.image === 'string' &&
                  /^data:image\/(png|jpeg|webp);base64,/.test(s.image) &&
                  s.image.length < 500000)) &&
              (!s.scale || (s.scale >= 0.5 && s.scale <= 2)) &&
              (!s.rotation || Math.abs(s.rotation) <= 180) &&
              Number.isFinite(s.x) &&
              s.x >= 0 &&
              s.x <= 100 &&
              Number.isFinite(s.y) &&
              s.y >= 0 &&
              s.y <= 100,
          ) &&
          new Set(stored.stickers.map((s: Sticker) => s.id)).size ===
            stored.stickers.length
        ) {
          setStickers(stored.stickers);
          setCreative(stored.enabled === true);
        }
      } catch {}
      setReady(true);
    }, 0);
    const media = matchMedia('(prefers-reduced-motion: reduce)');
    const change = () => {
      setReduced(media.matches);
      if (media.matches) setAuto(false);
    };
    const motionInit = setTimeout(change, 0);
    media.addEventListener('change', change);
    return () => {
      clearTimeout(init);
      clearTimeout(motionInit);
      media.removeEventListener('change', change);
    };
  }, []);
  useEffect(() => {
    if (!ready) return;
    const timer = setTimeout(() => {
      try {
        localStorage.setItem(
          key,
          JSON.stringify({ enabled: creative, stickers }),
        );
      } catch {
        setNotice(
          'Storage is full. Changes remain available until this page closes.',
        );
      }
    }, 200);
    return () => clearTimeout(timer);
  }, [creative, stickers, ready]);
  function go(index: number) {
    setTour(index);
    document.getElementById(stops[index].id)?.scrollIntoView({
      behavior: reduced ? 'instant' : 'smooth',
      block: 'start',
    });
  }
  useEffect(() => {
    if (!auto || tour === null || reduced) return;
    const timer = setTimeout(() => {
      if (tour === stops.length - 1) {
        setAuto(false);
        return;
      }
      const next = tour + 1;
      setTour(next);
      document
        .getElementById(stops[next].id)
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 8000);
    return () => clearTimeout(timer);
  }, [auto, tour, reduced]);
  useEffect(() => {
    if (tour === null) return;
    const pause = () => {
      setAuto(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setAuto(false);
        setTour(null);
      } else if (
        [
          'ArrowDown',
          'ArrowUp',
          'PageDown',
          'PageUp',
          'Home',
          'End',
          ' ',
        ].includes(e.key) &&
        !toolbar.current?.contains(e.target as Node)
      )
        pause();
    };
    const pointer = (e: PointerEvent) => {
      if (!toolbar.current?.contains(e.target as Node)) pause();
    };
    window.addEventListener('wheel', pause, { passive: true });
    window.addEventListener('touchstart', pause, { passive: true });
    window.addEventListener('keydown', onKey);
    window.addEventListener('pointerdown', pointer);
    return () => {
      window.removeEventListener('wheel', pause);
      window.removeEventListener('touchstart', pause);
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('pointerdown', pointer);
    };
  }, [tour]);
  async function addImage(file?: File) {
    if (!file) return;
    if (
      !['image/png', 'image/jpeg', 'image/webp'].includes(file.type) ||
      file.size > 8 * 1024 * 1024
    ) {
      setNotice('Choose a PNG, JPG or WebP up to 8 MB.');
      return;
    }
    try {
      const bitmap = await createImageBitmap(file);
      const canvas = document.createElement('canvas');
      const ratio = Math.min(1, 480 / Math.max(bitmap.width, bitmap.height));
      canvas.width = Math.max(1, Math.round(bitmap.width * ratio));
      canvas.height = Math.max(1, Math.round(bitmap.height * ratio));
      canvas
        .getContext('2d')!
        .drawImage(bitmap, 0, 0, canvas.width, canvas.height);
      bitmap.close();
      const image = canvas.toDataURL('image/webp', 0.8);
      if (image.length >= 500000) throw new Error();
      const id = Date.now();
      setStickers((items) =>
        items.length < 8
          ? [
              ...items,
              {
                id,
                text: 'Uploaded sticker',
                image,
                x: 35,
                y: 3,
                rotation: 0,
                scale: 1,
              },
            ]
          : items,
      );
      setSelected(id);
      setNotice('Image added. Stored only in this browser, never uploaded.');
    } catch {
      setNotice('This image could not be opened. Try a smaller PNG or JPG.');
    }
  }
  function adjust(values: Partial<Sticker>) {
    setStickers((items) =>
      items.map((s) => (s.id === selected ? { ...s, ...values } : s)),
    );
  }
  const selection = stickers.find((s) => s.id === selected);
  const clamp = (n: number) => Math.max(0, Math.min(100, n));
  return (
    <>
      <div
        id="creative"
        className={`creativeToolbar shell ${tour !== null ? 'activeTour' : ''}`}
        ref={toolbar}
      >
        <div className="creativeControls">
          <button
            type="button"
            aria-pressed={creative}
            onClick={() => {
              setCreative(!creative);
              setEditing(false);
            }}
          >
            ✳ Creative mode {creative ? 'on' : 'off'}
          </button>
          {creative && (
            <>
              <button
                type="button"
                aria-pressed={editing}
                onClick={() => setEditing(!editing)}
              >
                {editing ? 'Done editing' : 'Edit stickers'}
              </button>
              {editing && (
                <>
                  <button
                    type="button"
                    disabled={stickers.length >= 8}
                    onClick={() =>
                      setStickers((s) => [
                        ...s,
                        {
                          id: Date.now(),
                          text: 'Make something ✳',
                          x: 15,
                          y: 12,
                        },
                      ])
                    }
                  >
                    Add text
                  </button>
                  <input
                    ref={upload}
                    type="file"
                    accept="image/png,image/jpeg,image/webp"
                    hidden
                    onChange={(e) => {
                      void addImage(e.target.files?.[0]);
                      e.target.value = '';
                    }}
                  />
                  <button
                    type="button"
                    disabled={stickers.length >= 8}
                    onClick={() => upload.current?.click()}
                  >
                    Upload sticker
                  </button>
                  <button
                    type="button"
                    disabled={selected === null}
                    onClick={() => {
                      setStickers((s) => s.filter((x) => x.id !== selected));
                      setSelected(null);
                    }}
                  >
                    Remove selected
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setStickers(initial);
                      setSelected(null);
                    }}
                  >
                    Reset
                  </button>
                </>
              )}
            </>
          )}
          {tour === null ? (
            <button type="button" onClick={() => go(0)}>
              Take a tour ↗
            </button>
          ) : (
            <>
              <button
                type="button"
                disabled={tour === 0}
                onClick={() => go(Math.max(0, tour - 1))}
              >
                ← Previous
              </button>
              <button
                type="button"
                disabled={tour === stops.length - 1}
                onClick={() => go(Math.min(stops.length - 1, tour + 1))}
              >
                Next →
              </button>
              {!reduced && (
                <button
                  type="button"
                  aria-pressed={auto}
                  onClick={() => setAuto(!auto)}
                >
                  {auto ? 'Pause' : 'Auto · 8 seconds'}
                </button>
              )}
              <button
                type="button"
                onClick={() => {
                  setTour(null);
                  setAuto(false);
                }}
              >
                Stop tour
              </button>
            </>
          )}
        </div>
        {editing && selection && (
          <div className="stickerAdjust">
            <label>
              Rotate{' '}
              <input
                aria-label="Sticker rotation"
                type="range"
                min="-180"
                max="180"
                value={selection.rotation ?? 0}
                onChange={(e) => adjust({ rotation: Number(e.target.value) })}
              />
            </label>
            <label>
              Size{' '}
              <input
                aria-label="Sticker size"
                type="range"
                min="0.5"
                max="2"
                step="0.1"
                value={selection.scale ?? 1}
                onChange={(e) => adjust({ scale: Number(e.target.value) })}
              />
            </label>
            {!selection.image && (
              <label>
                Text{' '}
                <input
                  maxLength={49}
                  value={selection.text}
                  onChange={(e) => adjust({ text: e.target.value })}
                />
              </label>
            )}
          </div>
        )}
        <output>{notice}</output>
        <a href="#playground">Open mini arcade ↓</a>
        {editing && (
          <p>
            Drag a sticker, or select it and use the arrow keys. Delete removes
            it. Escape finishes editing. Saved only in this browser.
          </p>
        )}
        <output>
          {tour !== null
            ? `${tour + 1}/${stops.length} · ${stops[tour].name}${auto ? ' · Auto on; scroll to pause' : ''}`
            : ''}
        </output>
      </div>
      {creative && (
        <div
          className={`stickerLayer ${editing ? 'editing' : ''}`}
          aria-label={editing ? 'Editable decorative stickers' : undefined}
        >
          {stickers.map((s) => (
            <button
              key={s.id}
              type="button"
              tabIndex={editing ? 0 : -1}
              aria-hidden={!editing}
              className={`pageSticker ${s.image ? 'imageSticker' : ''}`}
              aria-label={s.text}
              style={{
                left: `calc(${s.x / 100} * (100% - 180px))`,
                top: `calc(${s.y / 100} * (100% - 60px))`,
                transform: `rotate(${s.rotation ?? -5}deg)`,
                width: 174 * (s.scale ?? 1),
                maxWidth: '90vw',
              }}
              data-selected={selected === s.id}
              onFocus={() => setSelected(s.id)}
              onPointerDown={(e) => {
                if (!editing) return;
                setSelected(s.id);
                e.currentTarget.setPointerCapture(e.pointerId);
                drag.current = {
                  id: s.id,
                  x: e.clientX,
                  y: e.clientY,
                  startX: s.x,
                  startY: s.y,
                };
              }}
              onPointerMove={(e) => {
                const d = drag.current;
                const root = document.getElementById('portfolio-page');
                if (!editing || !d || d.id !== s.id || !root) return;
                setStickers((items) =>
                  items.map((item) =>
                    item.id === s.id
                      ? {
                          ...item,
                          x: clamp(
                            d.startX +
                              ((e.clientX - d.x) /
                                Math.max(1, root.clientWidth - 180)) *
                                100,
                          ),
                          y: clamp(
                            d.startY +
                              ((e.clientY - d.y) /
                                Math.max(1, root.scrollHeight - 60)) *
                                100,
                          ),
                        }
                      : item,
                  ),
                );
              }}
              onPointerUp={() => {
                drag.current = null;
              }}
              onPointerCancel={() => {
                drag.current = null;
              }}
              onKeyDown={(e) => {
                if (!editing) return;
                if (e.key === 'Escape') {
                  setEditing(false);
                  return;
                }
                if (e.key === 'Delete' || e.key === 'Backspace') {
                  e.preventDefault();
                  setStickers((items) => items.filter((x) => x.id !== s.id));
                  setSelected(null);
                  return;
                }
                if (
                  ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(
                    e.key,
                  )
                ) {
                  e.preventDefault();
                  setStickers((items) =>
                    items.map((item) =>
                      item.id === s.id
                        ? {
                            ...item,
                            x: clamp(
                              item.x +
                                (e.key === 'ArrowLeft'
                                  ? -2
                                  : e.key === 'ArrowRight'
                                    ? 2
                                    : 0),
                            ),
                            y: clamp(
                              item.y +
                                (e.key === 'ArrowUp'
                                  ? -0.2
                                  : e.key === 'ArrowDown'
                                    ? 0.2
                                    : 0),
                            ),
                          }
                        : item,
                    ),
                  );
                }
              }}
            >
              {s.image ? (
                <img src={s.image} alt="" draggable={false} />
              ) : (
                s.text
              )}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
