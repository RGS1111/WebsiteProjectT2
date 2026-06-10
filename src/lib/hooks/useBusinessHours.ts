"use client";

import { useState, useEffect, useCallback } from "react";

/**
 * Checks whether the current local time falls within standard roofing
 * business hours: Monday–Friday, 8:00 AM to 5:00 PM.
 *
 * Returns:
 *   isOpen        — true if currently within business hours
 *   nextOpenDay   — human-readable string for when they reopen
 *   currentDay    — current day name (0 = Sunday)
 */

interface BusinessHours {
  isOpen: boolean;
  nextOpenDay: string;
  currentDay: number;
}

export function useBusinessHours(): BusinessHours {
  const [state, setState] = useState<BusinessHours>({
    isOpen: true,     // optimistic default (no SSR mismatch)
    nextOpenDay: "",
    currentDay: -1,
  });

  const compute = useCallback((): BusinessHours => {
    const now = new Date();
    const day = now.getDay(); // 0 = Sun, 1 = Mon, … 6 = Sat
    const hour = now.getHours();
    const minute = now.getMinutes();
    const decimalHour = hour + minute / 60;

    const isWeekday = day >= 1 && day <= 5;
    const inTimeWindow = decimalHour >= 8 && decimalHour < 17;
    const isOpen = isWeekday && inTimeWindow;

    let nextOpenDay = "";
    if (!isOpen) {
      if (day === 5 && decimalHour >= 17) {
        // Friday after 5 → Monday
        nextOpenDay = "Monday morning";
      } else if (day === 6) {
        // Saturday
        nextOpenDay = "Monday morning";
      } else if (day === 0) {
        // Sunday
        nextOpenDay = "Monday morning";
      } else if (day >= 1 && day < 5 && decimalHour >= 17) {
        // Mon–Thur after 5 → tomorrow morning
        const tomorrow = new Date(now);
        tomorrow.setDate(tomorrow.getDate() + 1);
        nextOpenDay = `tomorrow (${tomorrow.toLocaleDateString("en-GB", { weekday: "long" })}) morning`;
      } else if (day >= 1 && day <= 5 && decimalHour < 8) {
        // Weekday before 8 → later this morning
        nextOpenDay = "later this morning at 8:00 AM";
      }
    }

    return { isOpen, nextOpenDay, currentDay: day };
  }, []);

  useEffect(() => {
    setState(compute());

    // Re-check every 60 seconds so the status updates without a page reload
    const interval = setInterval(() => setState(compute()), 60_000);
    return () => clearInterval(interval);
  }, [compute]);

  return state;
}
