"use client";

import { isSameDay } from "date-fns";

import { useDateRange } from "@/components/DateRangeContext";
import { DayCell } from "@/components/DayCell";
import { WEEKDAY_LABELS, getMonthDays, isDateInRange } from "@/lib/calendarUtils";

type CalendarGridProps = {
  currentMonth: Date;
};

export function CalendarGrid({ currentMonth }: CalendarGridProps) {
  const { selectedStartDate, selectedEndDate, selectDate } = useDateRange();
  const days = getMonthDays(currentMonth);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-7 gap-2 text-center text-[11px] font-semibold uppercase tracking-[0.28em] text-stone-500 sm:gap-3">
        {WEEKDAY_LABELS.map((label) => (
          <span key={label} className="rounded-full bg-stone-100 px-1 py-2">
            {label}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2 sm:gap-3">
        {days.map((date) => (
          <DayCell
            key={date.toISOString()}
            date={date}
            currentMonth={currentMonth}
            isRangeStart={Boolean(selectedStartDate && isSameDay(date, selectedStartDate))}
            isRangeEnd={Boolean(selectedEndDate && isSameDay(date, selectedEndDate))}
            isInRange={isDateInRange(date, selectedStartDate, selectedEndDate)}
            onSelect={selectDate}
          />
        ))}
      </div>
    </div>
  );
}
