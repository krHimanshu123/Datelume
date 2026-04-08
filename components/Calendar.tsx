"use client";

import { format, isToday } from "date-fns";

import { CalendarGrid } from "@/components/CalendarGrid";
import { useDateRange } from "@/components/DateRangeContext";
import { getMonthLabel } from "@/lib/calendarUtils";

export function Calendar() {
  const currentMonth = new Date();
  const { selectedStartDate, selectedEndDate, clearSelection } = useDateRange();

  return (
    <section className="rounded-[2rem] border border-white/70 bg-paper/95 p-4 shadow-card backdrop-blur sm:p-6 lg:p-8">
      <div className="mb-6 flex flex-col gap-4 border-b border-line pb-5 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-stone-500">Wall Calendar</p>
          <div className="flex flex-wrap items-end gap-3">
            <h1 className="font-serif text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl">
              {getMonthLabel(currentMonth)}
            </h1>
            <span className="rounded-full bg-stone-100 px-3 py-1 text-sm text-stone-600">
              {isToday(currentMonth) ? "Current month" : format(currentMonth, "yyyy")}
            </span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-sm text-stone-600">
          <span className="rounded-full bg-accentSoft px-3 py-1 text-stone-700">
            {selectedStartDate && selectedEndDate
              ? "Range selected"
              : selectedStartDate
                ? "Choose an end date"
                : "Choose a date range"}
          </span>
          {(selectedStartDate || selectedEndDate) && (
            <button
              type="button"
              onClick={clearSelection}
              className="rounded-full border border-line px-3 py-1.5 font-medium text-stone-700 transition hover:border-stone-400 hover:bg-stone-50"
            >
              Clear selection
            </button>
          )}
        </div>
      </div>

      <CalendarGrid currentMonth={currentMonth} />
    </section>
  );
}
