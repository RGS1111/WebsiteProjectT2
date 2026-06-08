"use client";

import { cn } from "@/lib/utils";
import { useState, useRef, useEffect, useCallback } from "react";

interface ImagePair {
  before: { src: string; alt: string };
  after: { src: string; alt: string };
}

interface BeforeAfterSliderProps {
  before: { src: string; alt: string };
  after: { src: string; alt: string };
  label?: string;
  className?: string;
}

export default function BeforeAfterSlider({
  before,
  after,
  label,
  className,
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPosition((x / rect.width) * 100);
  }, []);

  function handleMouseDown() {
    dragging.current = true;
  }

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      if (!dragging.current) return;
      e.preventDefault();
      updatePosition(e.clientX);
    }

    function handleMouseUp() {
      dragging.current = false;
    }

    function handleTouchMove(e: TouchEvent) {
      if (!dragging.current) return;
      updatePosition(e.touches[0].clientX);
    }

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [updatePosition]);

  return (
    <div className={cn("overflow-hidden rounded-xl", className)}>
      {label && (
        <p className="mb-2 text-center text-sm font-semibold text-gray-700">{label}</p>
      )}
      <div
        ref={containerRef}
        className="relative h-64 w-full select-none overflow-hidden bg-gray-200 sm:h-80 lg:h-96"
      >
        {/* After image (full width, underneath) */}
        <img
          src={after.src}
          alt={after.alt}
          className="absolute inset-0 h-full w-full object-cover"
          draggable={false}
        />

        {/* Before image (clipped by slider) */}
        <div
          className="absolute inset-0 h-full overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={before.src}
            alt={before.alt}
            className="absolute inset-0 h-full w-full object-cover"
            style={{ width: `${100 / (sliderPosition / 100)}%` }}
            draggable={false}
          />
        </div>

        {/* Slider handle */}
        <div
          className="absolute top-0 h-full w-1 cursor-ew-resize bg-white shadow-lg"
          style={{ left: `${sliderPosition}%` }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
        >
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white p-1.5 shadow-md">
            <svg className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
            </svg>
          </div>
        </div>

        {/* Labels */}
        <span className="absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
          Before
        </span>
        <span className="absolute right-3 top-3 rounded-full bg-brand-600/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
          After
        </span>
      </div>
    </div>
  );
}
