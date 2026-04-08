"use client";

import clsx from "clsx";
import { format, isSameDay, isToday } from "date-fns";

type DayCellProps = {
  date: Date;
  currentMonth: Date;
  isRangeStart: boolean;
  isRangeEnd: boolean;
  isInRange: boolean;
  onSelect: (date: Date) => void;
};

export function DayCell({
  date,
  currentMonth,
  isRangeStart,
  isRangeEnd,
  isInRange,
  onSelect
}: DayCellProps) {
  const isCurrentMonth = date.getMonth() === currentMonth.getMonth();
  const isTodayDate = isToday(date);
  const isSelected = isRangeStart || isRangeEnd;

  return (
    <button
      type="button"
      onClick={() => onSelect(date)}
      aria-pressed={isSelected || isInRange}
      aria-label={`Select ${format(date, "MMMM d, yyyy")}`}
      className={clsx(
        "group relative min-h-24 rounded-2xl border border-transparent px-3 py-3 text-left transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 sm:min-h-28 sm:px-4",
        isCurrentMonth ? "text-ink" : "text-stone-400",
        isInRange && "border-accentSoft bg-accentSoft/70",
        isSelected && "border-accent bg-accent text-white shadow-lg shadow-accent/20",
        !isSelected && !isInRange && "hover:border-line hover:bg-white/75"
      )}
    >
      <span
        className={clsx(
          "inline-flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold transition-colors",
          isSelected && "bg-white/15 text-white",
          !isSelected && isTodayDate && "border border-accent/25 bg-white text-accent",
          !isSelected && !isTodayDate && "bg-stone-100 text-current group-hover:bg-white"
        )}
      >
        {format(date, "d")}
      </span>
      <span className="mt-6 block text-xs uppercase tracking-[0.24em] text-current/60">
        {isSameDay(date, new Date()) ? "Today" : format(date, "EEE")}
      </span>
    </button>
  );
}
