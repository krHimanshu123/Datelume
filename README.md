# Datelume

Datelume is a polished wall calendar frontend built with Next.js 14. It pairs a physical-calendar-inspired monthly layout with date range selection and locally stored notes for lightweight planning.

## Features

- Wall calendar UI for the current month
- Interactive date range selection with clear start, end, and in-between states
- Notes panel tied to the selected range or the active month
- Responsive layout with a hero image, calendar grid, and notes section

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- TailwindCSS
- date-fns

## Setup Instructions

1. Clone the repository.
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open `http://localhost:3000`.

## Design Decisions

### Why Next.js

Next.js 14 with the App Router provides a clean, modern React project structure with excellent developer ergonomics for component-driven frontend work. It is a strong fit for a focused assessment project without introducing unnecessary architectural overhead.

### Why localStorage

The notes feature only needs lightweight client-side persistence. `localStorage` keeps the implementation simple, avoids backend complexity, and preserves notes across refreshes for both monthly and selected-range entries.

### Component Architecture

The UI is split into small, reusable pieces:

- `Calendar` handles the overall calendar section
- `CalendarGrid` renders the current month grid
- `DayCell` isolates date-cell behavior and states
- `DateRangeContext` centralizes shared date selection state
- `NotesPanel` manages note editing and persistence
- `HeroImage` provides the visual anchor for the wall-calendar layout
- `calendarUtils` keeps date logic and storage key helpers separate from UI components

This structure keeps responsibilities clear and makes the codebase easier to maintain or extend.

## Future Improvements

- Add month navigation for browsing beyond the current month
- Introduce optional auto-save with save-state feedback per keystroke
- Support theme switching and richer visual customization
- Add holiday markers, event badges, or lightweight calendar annotations
