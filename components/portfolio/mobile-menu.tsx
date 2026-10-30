'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';

export default function MobileMenu() {
  const menu = useRef<HTMLDetailsElement>(null);
  const trigger = useRef<HTMLElement>(null);
  const close = () => {
    if (menu.current) menu.current.open = false;
  };
  useEffect(() => {
    const escape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && menu.current?.open) {
        menu.current.open = false;
        trigger.current?.focus();
      }
    };
    const outside = (event: PointerEvent) => {
      if (
        menu.current?.open &&
        event.target instanceof Node &&
        !menu.current.contains(event.target)
      )
        menu.current.open = false;
    };
    document.addEventListener('keydown', escape);
    document.addEventListener('pointerdown', outside);
    return () => {
      document.removeEventListener('keydown', escape);
      document.removeEventListener('pointerdown', outside);
    };
  }, []);
  return (
    <details ref={menu} className="mobileMenu">
      <summary ref={trigger} aria-label="Navigation menu">
        <Menu size={20} aria-hidden="true" />
      </summary>
      <nav aria-label="Compact navigation">
        <a href="#projects" onClick={close}>
          Work
        </a>
        <Link href="/services" onClick={close}>
          Diensten / Services
        </Link>
        <a href="#about" onClick={close}>
          About
        </a>
        <a href="#contact" onClick={close}>
          Contact
        </a>
      </nav>
    </details>
  );
}
