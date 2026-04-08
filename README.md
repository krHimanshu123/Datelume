# Datelume

A polished wall-calendar style frontend built with **Next.js 14 (App Router)**. Datelume combines a physical monthly calendar layout with **date-range selection** and **locally stored notes** for lightweight planning—no backend required.

## Preview

> Add a screenshot or GIF here (recommended)
>
> - `public/` is a good place for screenshots
> - Example: `![Datelume preview](./public/preview.png)`

---

## Features

- **Wall calendar UI** for the current month
- **Interactive date range selection** with clear *start*, *end*, and *in-between* states
- **Notes panel** tied to the selected range or the active month
- **Local persistence** using `localStorage`
- **Responsive layout** with a hero image, calendar grid, and notes section

---

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **date-fns**

---

## Getting Started

### Prerequisites
- Node.js (LTS recommended)
- npm (or your preferred package manager)

### Installation

```bash
git clone https://github.com/krHimanshu123/Datelume.git
cd Datelume
npm install
```

### Run locally

```bash
npm run dev
```

Open:
- `http://localhost:3000`

### Production build

```bash
npm run build
npm run start
```

---

## How It Works (High Level)

### Date range selection
Datelume models selection as:
- **No selection**
- **Single-day / start date**
- **End date**
- **Intermediate dates** (between start and end)

This makes the calendar feel like selecting dates on a physical planner while still being intuitive on the web.

### Notes + Persistence
Notes are stored in `localStorage` to keep the app:
- fast
- offline-friendly
- simple (no backend or auth needed)

---

## Project Structure (Key Components)

- `Calendar` — overall calendar section
- `CalendarGrid` — renders the month grid
- `DayCell` — single cell behavior + selection states
- `DateRangeContext` — shared selection state
- `NotesPanel` — note editing and persistence
- `HeroImage` — visual anchor for the wall-calendar layout
- `calendarUtils` — date logic + storage key helpers

---

## Design Decisions

### Why Next.js (App Router)
Next.js 14 provides a clean structure for component-driven UI, plus strong defaults (routing, bundling, dev experience). It’s a great fit for a focused, modern frontend build.

### Why `localStorage`
The notes feature only needs lightweight client-side persistence. `localStorage` avoids backend complexity while preserving notes across refreshes.

---

## Roadmap / Future Improvements

- Month navigation (browse beyond current month)
- Optional auto-save + save-state feedback
- Theme switching and richer customization
- Holiday markers, event badges, or lightweight annotations

---

## Contributing

If you’d like to contribute:
1. Fork the repo
2. Create a feature branch
3. Open a PR

---

## License

No license currently specified. If you want this to be open-source friendly, consider adding an MIT License.
