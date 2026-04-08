import {
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isSameDay,
  isWithinInterval,
  startOfMonth,
  startOfWeek
} from "date-fns";

export const WEEKDAY_LABELS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export function getMonthLabel(date: Date) {
  return format(date, "MMMM yyyy");
}

export function getMonthDays(date: Date) {
  const monthStart = startOfMonth(date);
  const monthEnd = endOfMonth(date);
  const calendarStart = startOfWeek(monthStart, { weekStartsOn: 1 });
  const calendarEnd = endOfWeek(monthEnd, { weekStartsOn: 1 });

  return eachDayOfInterval({
    start: calendarStart,
    end: calendarEnd
  });
}

export function isDateInRange(
  date: Date,
  startDate: Date | null,
  endDate: Date | null
) {
  if (!startDate || !endDate) {
    return false;
  }

  if (isSameDay(date, startDate) || isSameDay(date, endDate)) {
    return false;
  }

  return isWithinInterval(date, {
    start: startDate,
    end: endDate
  });
}

export function getNotesStorageKey(
  currentMonth: Date,
  startDate: Date | null,
  endDate: Date | null
) {
  if (startDate && endDate) {
    return `datelume:notes:range:${format(startDate, "yyyy-MM-dd")}_${format(endDate, "yyyy-MM-dd")}`;
  }

  return `datelume:notes:month:${format(currentMonth, "yyyy-MM")}`;
}

export function getSelectionLabel(
  currentMonth: Date,
  startDate: Date | null,
  endDate: Date | null
) {
  if (startDate && endDate) {
    return `${format(startDate, "MMM d")} - ${format(endDate, "MMM d, yyyy")}`;
  }

  if (startDate) {
    return `Starting ${format(startDate, "MMM d, yyyy")}`;
  }

  return `${format(currentMonth, "MMMM yyyy")} notes`;
}
