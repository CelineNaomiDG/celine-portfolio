'use client';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { mainLinks, serviceCategories } from './service-catalog';
import ui from './studio.module.css';

export default function ServicesNav({ current }: { current: string }) {
  const menu = useRef<HTMLDetailsElement>(null);
  const trigger = useRef<HTMLElement>(null);
  useEffect(() => {
    function escape(event: KeyboardEvent) {
      if (event.key === 'Escape' && menu.current?.open) {
        menu.current.open = false;
        trigger.current?.focus();
      }
    }
    function outside(event: PointerEvent) {
      if (
        event.target instanceof Node &&
        menu.current?.open &&
        !menu.current.contains(event.target)
      )
        menu.current.open = false;
    }
    document.addEventListener('keydown', escape);
    document.addEventListener('pointerdown', outside);
    return () => {
      document.removeEventListener('keydown', escape);
      document.removeEventListener('pointerdown', outside);
    };
  }, []);
  const close = () => {
    if (menu.current) menu.current.open = false;
  };
  return (
    <nav className={ui.nav} aria-label="Hoofdnavigatie">
      <details ref={menu} className={ui.menu}>
        <summary ref={trigger}>
          <span className={ui.desktopLabel}>Diensten</span>
          <span className={ui.mobileLabel}>Menu</span>
          <span aria-hidden="true">+</span>
        </summary>
        <div className={ui.menuPanel}>
          <div className={ui.menuIntro}>
            <Link href="/services" onClick={close}>
              Alle diensten ↗︎
            </Link>
            <span>Wat wil je verbeteren?</span>
          </div>
          <div className={ui.menuGroups}>
            {serviceCategories.map((category) => (
              <div key={category.id}>
                <Link
                  onClick={close}
                  className={ui.categoryHeading}
                  href={category.href}
                  aria-current={current === category.href ? 'page' : undefined}
                >
                  {category.title} ↗︎
                </Link>
                <p>{category.description}</p>
                <ul>
                  {category.links.map(([label, href]) => (
                    <li key={href}>
                      <Link href={href} onClick={close}>
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className={ui.menuFoot}>
            <Link href="/services/onderhoud" onClick={close}>
              Onderhoud & ondersteuning ↗︎
            </Link>
            <Link href="/services/prijsindicatie" onClick={close}>
              Stel je project samen ↗︎
            </Link>
          </div>
          <div className={ui.mobileLinks}>
            {mainLinks.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                onClick={close}
                aria-current={current === href ? 'page' : undefined}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </details>
      <div className={ui.desktopLinks}>
        {mainLinks.map(([label, href]) => (
          <Link
            key={href}
            href={href}
            aria-current={current === href ? 'page' : undefined}
          >
            {label}
          </Link>
        ))}
      </div>
      <Link
        href="/services/contact"
        className={ui.navContact}
        aria-current={current === '/services/contact' ? 'page' : undefined}
      >
        Project bespreken ↗︎
      </Link>
    </nav>
  );
}
