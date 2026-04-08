import { Calendar } from "@/components/Calendar";
import { DateRangeProvider } from "@/components/DateRangeContext";
import { HeroImage } from "@/components/HeroImage";
import { NotesPanel } from "@/components/NotesPanel";

export default function HomePage() {
  return (
    <DateRangeProvider>
      <main className="min-h-screen bg-[linear-gradient(180deg,#f7f2eb_0%,#f3efe8_100%)] px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 lg:gap-6">
          <section className="grid gap-5 lg:grid-cols-[minmax(320px,0.92fr)_minmax(0,1.28fr)] lg:items-stretch">
            <HeroImage />
            <Calendar />
          </section>
          <NotesPanel />
        </div>
      </main>
    </DateRangeProvider>
  );
}
