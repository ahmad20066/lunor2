"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  beforeLabel = "Before",
  afterLabel = "After",
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(pct);
  }, []);

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      isDragging.current = true;
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
      updatePosition(e.clientX);
    },
    [updatePosition]
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging.current) return;
      updatePosition(e.clientX);
    },
    [updatePosition]
  );

  const handlePointerUp = useCallback((e: React.PointerEvent) => {
    isDragging.current = false;
    (e.target as HTMLElement).releasePointerCapture(e.pointerId);
  }, []);

  const handleContainerClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === e.currentTarget || (e.target as HTMLElement).closest(".before-after-handle")) return;
      updatePosition(e.clientX);
    },
    [updatePosition]
  );

  return (
    <div
      ref={containerRef}
      className="before-after-slider"
      onClick={handleContainerClick}
    >
      <div className="before-after-bg">
        <Image src={beforeSrc} alt={beforeAlt} fill className="before-after-img" sizes="(max-width: 900px) 100vw, 50vw" />
      </div>
      <div
        className="before-after-overlay"
        style={{ clipPath: `inset(0 0 0 ${position}%)` }}
      >
        <Image src={afterSrc} alt={afterAlt} fill className="before-after-img" sizes="(max-width: 900px) 100vw, 50vw" />
      </div>
      <div
        className="before-after-handle"
        style={{ left: `${position}%` }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
      >
        <div className="before-after-handle-line" />
        <div className="before-after-handle-knob">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M8 5l4 4 4-4M8 19l4-4 4 4" transform="rotate(90 12 12)" />
          </svg>
        </div>
      </div>
      <span className="before-after-label before-label">{beforeLabel}</span>
      <span className="before-after-label after-label">{afterLabel}</span>
    </div>
  );
}
