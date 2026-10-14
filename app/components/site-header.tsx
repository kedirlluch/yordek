'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';
import SiteNavigation from './site-navigation';

export default function SiteHeader() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement | null>(null);
  const isHome = pathname === '/';

  useEffect(() => {
    if (!isHome || !headerRef.current) return;

    const sentinel = document.getElementById('hero-sentinel');
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      (entries) => {
        headerRef.current?.classList.toggle('is-home', entries[0].isIntersecting);
      },
      { threshold: 0.1 },
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [isHome]);

  return (
    <header ref={headerRef} className={`site-header ${isHome ? 'is-home' : ''}`}>
      <div className="site-brand">
        <Link href="/" aria-label="Volver a la página de inicio">
          <span className="brand-mark" aria-hidden="true">⌂</span>
          <span>ReformaPro</span>
        </Link>
      </div>

      <SiteNavigation />
    </header>
  );
}
