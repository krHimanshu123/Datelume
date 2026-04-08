"use client";

import { createContext, useContext, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { isBefore, isSameDay } from "date-fns";

type DateRangeContextValue = {
  selectedStartDate: Date | null;
  selectedEndDate: Date | null;
  selectDate: (date: Date) => void;
  clearSelection: () => void;
};

const DateRangeContext = createContext<DateRangeContextValue | undefined>(undefined);

export function DateRangeProvider({ children }: { children: ReactNode }) {
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null);
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null);

  const selectDate = (date: Date) => {
    if (!selectedStartDate || (selectedStartDate && selectedEndDate)) {
      setSelectedStartDate(date);
      setSelectedEndDate(null);
      return;
    }

    if (isSameDay(date, selectedStartDate)) {
      setSelectedEndDate(date);
      return;
    }

    if (isBefore(date, selectedStartDate)) {
      setSelectedStartDate(date);
      setSelectedEndDate(selectedStartDate);
      return;
    }

    setSelectedEndDate(date);
  };

  const clearSelection = () => {
    setSelectedStartDate(null);
    setSelectedEndDate(null);
  };

  const value = useMemo(
    () => ({
      selectedStartDate,
      selectedEndDate,
      selectDate,
      clearSelection
    }),
    [selectedEndDate, selectedStartDate]
  );

  return <DateRangeContext.Provider value={value}>{children}</DateRangeContext.Provider>;
}

export function useDateRange() {
  const context = useContext(DateRangeContext);

  if (!context) {
    throw new Error("useDateRange must be used within a DateRangeProvider");
  }

  return context;
}
