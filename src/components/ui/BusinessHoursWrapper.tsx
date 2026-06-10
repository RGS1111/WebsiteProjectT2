"use client";

import { useState, useRef, useEffect, type ReactNode } from "react";
import { useBusinessHours } from "@/lib/hooks/useBusinessHours";

const MESSAGES: Record<string, string> = {
  weekdayEvening:
    "We're currently off-site for the evening! Go ahead and get in touch — our roofing estimators will review your request and reach out first thing tomorrow morning.",
  fridayEvening:
    "Our team has wrapped up for the weekend! Drop your details and we'll have a roofing specialist contact you first thing Monday morning.",
  weekend:
    "It's the weekend and our crew is recharging! Leave your info or send a message — we'll prioritise your enquiry when we're back on-site Monday morning.",
  earlyMorning:
    "We're not on-site just yet! Drop your details and our roofing team will get back to you as soon as we start the day at 8:00 AM.",
};

function getMessage(isOpen: boolean, nextOpenDay: string, currentDay: number): string {
  if (isOpen) return "";
  if (currentDay === 5) return MESSAGES.fridayEvening;
  if (currentDay === 6 || currentDay === 0) return MESSAGES.weekend;
  if (nextOpenDay.includes("tomorrow")) return MESSAGES.weekdayEvening;
  if (nextOpenDay.includes("later this morning")) return MESSAGES.earlyMorning;
  return MESSAGES.weekdayEvening;
}

interface BusinessHoursWrapperProps {
  children: ReactNode;
  /** Controls positioning: 'top' renders tooltip above, 'bottom' renders below */
  position?: "top" | "bottom";
  className?: string;
}

export default function BusinessHoursWrapper({
  children,
  position = "top",
  className = "",
}: BusinessHoursWrapperProps) {
  const { isOpen, nextOpenDay, currentDay } = useBusinessHours();
  const [visible, setVisible] = useState(false);
  const [exiting, setExiting] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const exitTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showTooltip = !isOpen;
  const message = getMessage(isOpen, nextOpenDay, currentDay);

  // Delay show by 400ms on hover to avoid flickering
  function handleEnter() {
    if (exitTimerRef.current) {
      clearTimeout(exitTimerRef.current);
      exitTimerRef.current = null;
    }
    setExiting(false);
    if (showTooltip) {
      timerRef.current = setTimeout(() => setVisible(true), 400);
    }
  }

  function handleLeave() {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    if (visible) {
      setExiting(true);
      exitTimerRef.current = setTimeout(() => {
        setVisible(false);
        setExiting(false);
      }, 250); // match CSS exit animation
    } else {
      setVisible(false);
    }
  }

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (exitTimerRef.current) clearTimeout(exitTimerRef.current);
    };
  }, []);

  const positionClasses =
    position === "top"
      ? "bottom-full left-1/2 mb-3 -translate-x-1/2"
      : "top-full left-1/2 mt-3 -translate-x-1/2";

  return (
    <div
      className={`relative inline-block ${className}`}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onFocus={handleEnter}
      onBlur={handleLeave}
    >
      {children}

      {/* Tooltip popup */}
      {visible && showTooltip && message && (
        <div
          role="tooltip"
          aria-live="polite"
          className={`absolute z-[60] w-72 sm:w-80 ${positionClasses} ${
            exiting ? "animate-[fadeOut_250ms_ease-in_forwards]" : "animate-[fadeIn_250ms_ease-out_forwards]"
          }`}
        >
          <div className="relative rounded-xl border border-amber-200 bg-amber-50 p-4 shadow-xl">
            {/* Small triangle arrow */}
            <div
              className={`absolute left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 border border-amber-200 bg-amber-50 ${
                position === "top" ? "-bottom-[7px] border-l-0 border-t-0" : "-top-[7px] border-b-0 border-r-0"
              }`}
            />

            <div className="flex items-start gap-3">
              {/* Moon icon */}
              <svg
                className="mt-0.5 h-5 w-5 shrink-0 text-amber-600"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                />
              </svg>

              <div>
                <p className="text-[13px] font-semibold text-amber-800 leading-snug">
                  Outside working hours
                </p>
                <p className="mt-1 text-xs leading-relaxed text-amber-700">
                  {message}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
