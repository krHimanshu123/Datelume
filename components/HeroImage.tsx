import Image from "next/image";

export function HeroImage() {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-[#ede3d4] shadow-card">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.55),transparent_48%)]" />
      <div className="relative flex h-full min-h-[320px] flex-col justify-between p-5 sm:min-h-[420px] sm:p-7 lg:p-8">
        <div className="max-w-sm space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.42em] text-stone-600">Datelume</p>
          <h2 className="font-serif text-4xl font-semibold leading-none tracking-tight text-stone-900 sm:text-5xl">
            A wall calendar for focused planning.
          </h2>
          <p className="max-w-xs text-sm leading-7 text-stone-700">
            Designed to feel tangible, calm, and easy to scan, with room for dates and notes to live together.
          </p>
        </div>

        <div className="relative mt-8 overflow-hidden rounded-[1.5rem] border border-white/70 bg-white/40 p-3 backdrop-blur-sm">
          <div className="absolute inset-0 bg-grain bg-[size:10px_10px] opacity-25" />
          <Image
            src="/calendar-hero.svg"
            alt="Decorative wall calendar illustration"
            width={1200}
            height={900}
            className="relative h-auto w-full rounded-[1rem] object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
