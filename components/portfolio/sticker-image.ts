// User images stay in the browser. SVGs are restricted to static shapes and rasterised.
const maxBytes = 8 * 1024 * 1024;
const maxDataLength = 1500000;
export function readDataUrl(file: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () =>
      typeof reader.result === 'string'
        ? resolve(reader.result)
        : reject(new Error('This file could not be read.'));
    reader.onerror = () => reject(new Error('This file could not be read.'));
    reader.readAsDataURL(file);
  });
}
function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error('This image could not be opened.'));
    image.src = src;
  });
}
export function safeSvg(source: string): string {
  const doc = new DOMParser().parseFromString(source, 'image/svg+xml');
  if (
    doc.querySelector('parsererror') ||
    doc.documentElement.localName !== 'svg'
  )
    throw new Error('Choose a valid SVG image.');
  const tags = new Set([
    'svg',
    'g',
    'defs',
    'path',
    'rect',
    'circle',
    'ellipse',
    'line',
    'polyline',
    'polygon',
    'text',
    'tspan',
    'linearGradient',
    'radialGradient',
    'stop',
    'clipPath',
    'mask',
    'title',
    'desc',
  ]);
  const attributes = new Set([
    'xmlns',
    'viewBox',
    'width',
    'height',
    'x',
    'y',
    'x1',
    'x2',
    'y1',
    'y2',
    'cx',
    'cy',
    'r',
    'rx',
    'ry',
    'd',
    'points',
    'fill',
    'fill-rule',
    'fill-opacity',
    'stroke',
    'stroke-width',
    'stroke-linecap',
    'stroke-linejoin',
    'stroke-dasharray',
    'stroke-opacity',
    'opacity',
    'transform',
    'id',
    'clip-path',
    'mask',
    'offset',
    'stop-color',
    'stop-opacity',
    'gradientUnits',
    'gradientTransform',
    'fx',
    'fy',
    'font-family',
    'font-size',
    'font-weight',
    'text-anchor',
    'dominant-baseline',
  ]);
  for (const el of [
    doc.documentElement,
    ...doc.documentElement.querySelectorAll('*'),
  ]) {
    if (!tags.has(el.localName)) {
      el.remove();
      continue;
    }
    for (const attr of Array.from(el.attributes)) {
      if (
        !attributes.has(attr.name) ||
        (/(?:https?:|data:|javascript:|\/\/)/i.test(attr.value) &&
          attr.name !== 'xmlns') ||
        (/url\(/i.test(attr.value) && !/^url\(#[\w-]+\)$/.test(attr.value))
      )
        el.removeAttribute(attr.name);
    }
  }
  doc.documentElement.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  return new XMLSerializer().serializeToString(doc.documentElement);
}
export async function prepareSticker(file: File): Promise<string> {
  if (file.size > maxBytes)
    throw new Error(
      'Choose an image up to 8 MB. Animated GIFs can be up to 1 MB.',
    );
  const type = file.type || (/\.svg$/i.test(file.name) ? 'image/svg+xml' : '');
  if (
    ![
      'image/png',
      'image/jpeg',
      'image/webp',
      'image/gif',
      'image/svg+xml',
    ].includes(type)
  )
    throw new Error('Choose a PNG, JPG, WebP, SVG or GIF.');
  if (type === 'image/gif' && file.size > 1024 * 1024)
    throw new Error('Choose a GIF up to 1 MB to keep local storage available.');
  const source =
    type === 'image/svg+xml'
      ? await readDataUrl(
          new Blob([safeSvg(await file.text())], { type: 'image/svg+xml' }),
        )
      : await readDataUrl(file);
  const image = await loadImage(source);
  if (
    !image.naturalWidth ||
    image.naturalWidth * image.naturalHeight > 40000000
  )
    throw new Error('Choose an image with smaller dimensions.');
  if (type === 'image/gif') return source;
  const canvas = document.createElement('canvas');
  const ratio = Math.min(
    1,
    480 / Math.max(image.naturalWidth, image.naturalHeight),
  );
  canvas.width = Math.max(1, Math.round(image.naturalWidth * ratio));
  canvas.height = Math.max(1, Math.round(image.naturalHeight * ratio));
  const context = canvas.getContext('2d');
  if (!context)
    throw new Error('Image editing is not available in this browser.');
  context.drawImage(image, 0, 0, canvas.width, canvas.height);
  const result = canvas.toDataURL('image/webp', 0.85);
  if (result.length >= maxDataLength) throw new Error('Try a smaller image.');
  return result;
}
