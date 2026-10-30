'use client';
/* oxlint-disable next/no-img-element -- Local, resized data URLs must stay client-side; these are user-created decorative stickers, not remotely optimized assets. */
import { useEffect, useRef, useState } from 'react';
import { Asterisk, Upload, Palette, Trash2 } from 'lucide-react';
import { prepareSticker } from './sticker-image';
type Sticker = {
  id: number;
  text: string;
  x: number;
  y: number;
  image?: string;
  rotation?: number;
  scale?: number;
};
const stops = [
  { id: 'home', name: 'Introduction' },
  { id: 'projects', name: 'Selected work' },
  { id: 'case-study', name: 'FamilyOS case' },
  { id: 'skills', name: 'Skills' },
  { id: 'about', name: 'About me' },
  { id: 'contact', name: 'Contact' },
];
const key = 'celine-creative-v3';
const legacyDefaults = new Set([
  'Made with care ↗',
  'Ideas into interfaces',
  'Keep exploring ✳',
]);
export default function CreativeTools() {
  const [creative, setCreative] = useState(true),
    [editing, setEditing] = useState(false),
    [stickers, setStickers] = useState<Sticker[]>([]),
    [selected, setSelected] = useState<number | null>(null);
  const [ready, setReady] = useState(false),
    [tour, setTour] = useState<number | null>(null),
    [auto, setAuto] = useState(false),
    [reduced, setReduced] = useState(true);
  const [notice, setNotice] = useState('');
  const [colour, setColour] = useState(false);
  const [text, setText] = useState('');
  const [busy, setBusy] = useState(false);
  const layer = useRef<HTMLDivElement>(null);
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
        const stored = JSON.parse(
          localStorage.getItem(key) ||
            localStorage.getItem('celine-creative-v2') ||
            'null',
        );
        if (
          stored &&
          Array.isArray(stored.stickers) &&
          stored.stickers.length <= 12 &&
          stored.stickers.every(
            (s: Sticker) =>
              Number.isFinite(s.id) &&
              typeof s.text === 'string' &&
              s.text.length < 50 &&
              (!s.image ||
                (typeof s.image === 'string' &&
                  /^data:image\/(png|jpeg|webp|gif);base64,/.test(s.image) &&
                  s.image.length < 1500000)) &&
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
          setStickers(
            stored.stickers.filter(
              (s: Sticker) =>
                s.image || !legacyDefaults.has(s.text.replace(/\uFE0E/g, '')),
            ),
          );
          setColour(stored.colour === true);
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
          JSON.stringify({ enabled: creative, colour, stickers }),
        );
      } catch {
        setNotice(
          'Storage is full. Changes remain available until this page closes.',
        );
      }
    }, 200);
    return () => clearTimeout(timer);
  }, [creative, colour, stickers, ready]);
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
  useEffect(() => {
    const root = document.getElementById('portfolio-page');
    if (!root) return;
    root.dataset.creativeColour = creative && colour ? 'colour' : 'monochrome';
    return () => {
      delete root.dataset.creativeColour;
    };
  }, [creative, colour]);
  useEffect(() => {
    if (!editing) return;
    const stopEditing = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setEditing(false);
        toolbar.current
          ?.querySelector<HTMLButtonElement>(
            '.creativeControls button:nth-child(2)',
          )
          ?.focus();
      }
    };
    document.addEventListener('keydown', stopEditing);
    return () => document.removeEventListener('keydown', stopEditing);
  }, [editing]);
  async function addImage(file?: File) {
    if (!file || busy || stickers.length >= 12) return;
    setBusy(true);
    try {
      const image = await prepareSticker(file);
      if (
        stickers.reduce((total, s) => total + (s.image?.length ?? 0), 0) +
          image.length >
        3500000
      )
        throw new Error(
          'Your sticker storage is full. Remove an image before adding another.',
        );
      const id = Date.now();
      setStickers((items) => [
        ...items,
        {
          id,
          text: 'Your image sticker',
          image,
          x: 50,
          y: 40,
          rotation: 0,
          scale: 1,
        },
      ]);
      setSelected(id);
      setNotice(
        'Image added. Saved in this browser only; nothing is sent to a server.',
      );
    } catch (error) {
      setNotice(
        error instanceof Error
          ? error.message
          : 'This image could not be opened.',
      );
    } finally {
      setBusy(false);
    }
  }
  function addText() {
    if (!text.trim() || stickers.length >= 12) return;
    const id = Date.now();
    setStickers((items) => [
      ...items,
      { id, text: text.trim(), x: 50, y: 40, rotation: 0, scale: 1 },
    ]);
    setSelected(id);
    setText('');
  }
  function adjust(values: Partial<Sticker>) {
    setStickers((items) =>
      items.map((s) => (s.id === selected ? { ...s, ...values } : s)),
    );
  }
  const selection = stickers.find((s) => s.id === selected);
  const clamp = (n: number) => Math.max(5, Math.min(95, n));
  return (
    <>
      <div
        id="creative"
        className={`creativeToolbar shell ${tour !== null ? 'activeTour' : ''} ${editing ? 'isEditing' : ''}`}
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
            <Asterisk size={16} aria-hidden="true" /> Creative mode{' '}
            {creative ? 'on' : 'off'}
          </button>
          {creative && (
            <>
              <button
                type="button"
                aria-pressed={editing}
                onClick={() => setEditing(!editing)}
              >
                {editing ? 'Done editing' : 'Add / edit stickers'}
              </button>
              <button
                type="button"
                aria-pressed={colour}
                onClick={() => setColour(!colour)}
              >
                <Palette size={16} aria-hidden="true" />{' '}
                {colour ? 'Colour' : 'Black & white'}
              </button>
              {editing && (
                <>
                  <label className="stickerTextInput">
                    Text or emoji
                    <input
                      maxLength={49}
                      value={text}
                      placeholder="Type your own…"
                      onChange={(e) => setText(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          addText();
                        }
                      }}
                    />
                  </label>
                  <button
                    type="button"
                    disabled={!text.trim() || stickers.length >= 12}
                    onClick={addText}
                  >
                    Add text / emoji
                  </button>
                  <input
                    ref={upload}
                    type="file"
                    accept="image/png,image/jpeg,image/webp,image/svg+xml,image/gif,.svg"
                    hidden
                    onChange={(e) => {
                      void addImage(e.target.files?.[0]);
                      e.target.value = '';
                    }}
                  />
                  <button
                    type="button"
                    disabled={busy || stickers.length >= 12}
                    onClick={() => upload.current?.click()}
                  >
                    <Upload size={16} aria-hidden="true" />{' '}
                    {busy ? 'Opening…' : 'Upload sticker'}
                  </button>
                  <button
                    type="button"
                    disabled={selected === null}
                    onClick={() => {
                      setStickers((s) => s.filter((x) => x.id !== selected));
                      setSelected(null);
                    }}
                  >
                    <Trash2 size={16} aria-hidden="true" /> Remove selected
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setStickers([]);
                      setSelected(null);
                    }}
                  >
                    Clear all
                  </button>
                </>
              )}
            </>
          )}
          {tour === null ? (
            <button type="button" onClick={() => go(0)}>
              Take a tour ↗︎
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
        {creative && stickers.length === 0 && (
          <p>
            No preset stickers. Add your own SVG, PNG, JPG, WebP or GIF, or type
            an emoji.
          </p>
        )}
        <a href="#playground">Open mini arcade ↓</a>
        {editing && (
          <p>
            Drag a sticker, or select it and use the arrow keys. Delete removes
            it. Escape finishes editing. Stickers move across the screen and
            stay with you as you scroll. Saved only in this browser.
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
          ref={layer}
          data-colour={colour}
          className={`stickerLayer ${editing ? 'editing' : ''}`}
          aria-label={editing ? 'Editable decorative stickers' : undefined}
        >
          {stickers.map((s) => (
            <button
              key={s.id}
              type="button"
              tabIndex={editing ? 0 : -1}
              aria-hidden={!editing}
              className={`pageSticker ${!s.image && /\p{Extended_Pictographic}/u.test(s.text) ? 'emojiSticker' : ''} ${s.image ? 'imageSticker' : ''}`}
              aria-label={s.text}
              style={{
                left: `${s.x}%`,
                top: `${s.y}%`,
                transform: `translate(-50%, -50%) rotate(${s.rotation ?? 0}deg)`,
                width: 174 * (s.scale ?? 1),
                maxWidth: '65vw',
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
                const root = layer.current;
                if (!editing || !d || d.id !== s.id || !root) return;
                setStickers((items) =>
                  items.map((item) =>
                    item.id === s.id
                      ? {
                          ...item,
                          x: clamp(
                            d.startX +
                              ((e.clientX - d.x) /
                                Math.max(1, root.clientWidth)) *
                                100,
                          ),
                          y: clamp(
                            d.startY +
                              ((e.clientY - d.y) /
                                Math.max(1, root.clientHeight)) *
                                100,
                          ),
                        }
                      : item,
                  ),
                );
              }}
              onLostPointerCapture={() => {
                drag.current = null;
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
                                  ? -2
                                  : e.key === 'ArrowDown'
                                    ? 2
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
