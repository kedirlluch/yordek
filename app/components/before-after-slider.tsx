'use client';

import { useId, useState } from 'react';
import { useRef } from 'react';

const beforeImage =
  'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80';
const afterImage =
  'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80';

export function BeforeAfterSlider() {
  const [position, setPosition] = useState(52);
  const rangeId = useId();
  const visualRef = useRef<HTMLDivElement | null>(null);
  const activePointerId = useRef<number | null>(null);
  const beforeClip = `inset(0 ${100 - position}% 0 0)`;
  const afterClip = `inset(0 0 0 ${position}%)`;

  const updatePosition = (clientX: number) => {
    const bounds = visualRef.current?.getBoundingClientRect();
    if (!bounds || bounds.width === 0) return;

    const nextPosition = ((clientX - bounds.left) / bounds.width) * 100;
    setPosition(Math.round(Math.min(100, Math.max(0, nextPosition))));
  };

  return (
    <section className="before-after-section" aria-labelledby="before-after-title">
      <div className="section-heading">
        <p className="eyebrow">Antes y después</p>
        <h2 id="before-after-title">Transformamos interiores con criterio y precisión.</h2>
      </div>

      <div
        ref={visualRef}
        className="before-after-visual"
        aria-label="Comparativa antes y después de una reforma"
        onPointerDown={(event) => {
          if (event.pointerType === 'mouse' && event.button !== 0) return;
          activePointerId.current = event.pointerId;
          updatePosition(event.clientX);
          try {
            event.currentTarget.setPointerCapture(event.pointerId);
          } catch {
            activePointerId.current = null;
          }
        }}
        onPointerMove={(event) => {
          if (activePointerId.current === event.pointerId) updatePosition(event.clientX);
        }}
        onPointerUp={(event) => {
          if (activePointerId.current === event.pointerId) activePointerId.current = null;
        }}
        onPointerCancel={() => {
          activePointerId.current = null;
        }}
        onLostPointerCapture={() => {
          activePointerId.current = null;
        }}
        onTouchStart={(event) => {
          const touch = event.touches[0];
          if (touch) updatePosition(touch.clientX);
        }}
        onTouchMove={(event) => {
          const touch = event.touches[0];
          if (touch) updatePosition(touch.clientX);
        }}
      >
        <div
          className="before-image"
          aria-hidden="true"
          style={{
            backgroundImage: `url(${beforeImage})`,
            clipPath: beforeClip,
          }}
        />

        <div
          className="after-image"
          aria-hidden="true"
          style={{
            backgroundImage: `url(${afterImage})`,
            clipPath: afterClip,
          }}
        />

        <div className="compare-overlay" style={{ width: `${position}%` }} aria-hidden="true" />

        <div className="compare-divider" style={{ left: `${position}%` }} aria-hidden="true">
          <span className="compare-handle" />
        </div>

        <div className="compare-label before-label">Antes</div>
        <div className="compare-label after-label">Después</div>

        <label htmlFor={rangeId} className="sr-only">
          Ajusta la comparación antes y después
        </label>
        <input
          id={rangeId}
          className="compare-range"
          type="range"
          min="0"
          max="100"
          value={position}
          onChange={(event) => setPosition(Number(event.target.value))}
          aria-label="Ajustar comparación antes y después"
          tabIndex={0}
        />
      </div>
    </section>
  );
}
