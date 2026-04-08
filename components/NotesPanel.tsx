"use client";

import { useEffect, useMemo, useState } from "react";

import { useDateRange } from "@/components/DateRangeContext";
import { getNotesStorageKey, getSelectionLabel } from "@/lib/calendarUtils";

const EMPTY_NOTE_MESSAGE = "Capture reminders, plans, or context for this month or the selected date range.";

export function NotesPanel() {
  const currentMonth = useMemo(() => new Date(), []);
  const { selectedStartDate, selectedEndDate } = useDateRange();
  const [note, setNote] = useState("");
  const [savedState, setSavedState] = useState<"idle" | "saved">("idle");

  const storageKey = useMemo(
    () => getNotesStorageKey(currentMonth, selectedStartDate, selectedEndDate),
    [currentMonth, selectedEndDate, selectedStartDate]
  );

  const selectionLabel = useMemo(
    () => getSelectionLabel(currentMonth, selectedStartDate, selectedEndDate),
    [currentMonth, selectedEndDate, selectedStartDate]
  );

  useEffect(() => {
    const savedNote = window.localStorage.getItem(storageKey) ?? "";
    setNote(savedNote);
    setSavedState("idle");
  }, [storageKey]);

  const handleSave = () => {
    window.localStorage.setItem(storageKey, note);
    setSavedState("saved");
    window.setTimeout(() => {
      setSavedState("idle");
    }, 1600);
  };

  return (
    <section className="rounded-[2rem] border border-white/70 bg-paper/95 p-4 shadow-card backdrop-blur sm:p-6 lg:p-8">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-start">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-stone-500">Notes</p>
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
            Keep the page grounded in real plans
          </h2>
          <p className="max-w-xl text-sm leading-7 text-stone-600">{EMPTY_NOTE_MESSAGE}</p>
          <div className="inline-flex rounded-full bg-stone-100 px-4 py-2 text-sm text-stone-700">
            {selectionLabel}
          </div>
        </div>

        <div className="space-y-4">
          <label htmlFor="notes" className="sr-only">
            Notes for the selected range
          </label>
          <textarea
            id="notes"
            value={note}
            onChange={(event) => setNote(event.target.value)}
            placeholder="Write notes for your month or selected date range..."
            className="min-h-48 w-full rounded-[1.5rem] border border-line bg-white px-4 py-4 text-sm leading-7 text-stone-700 shadow-inner outline-none transition placeholder:text-stone-400 focus:border-accent focus:ring-2 focus:ring-accent/20 sm:min-h-56"
          />
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-stone-500">
              Stored locally in your browser for this month or selected range.
            </p>
            <div className="flex items-center gap-3">
              {savedState === "saved" && <span className="text-sm font-medium text-accent">Saved</span>}
              <button
                type="button"
                onClick={handleSave}
                className="rounded-full bg-stone-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-stone-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-900/20"
              >
                Save note
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
