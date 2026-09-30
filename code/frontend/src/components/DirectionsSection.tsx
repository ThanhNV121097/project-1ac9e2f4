import { T } from "../editable";

export default function DirectionsSection() {
  return (
    <section id="directions" className="grid gap-8 border-y border-line py-28 lg:grid-cols-[1fr_1.2fr] lg:items-stretch">
      <div className="rounded bg-accent p-8 text-accent-ink lg:min-h-[28rem]">
        <T k="directions.map" as="p" className="font-display text-[clamp(38px,5vw,76px)] leading-none" />
      </div>
      <div className="flex flex-col justify-between gap-12 rounded bg-surface p-8">
        <div>
          <T k="directions.heading" as="h2" className="text-[clamp(42px,6vw,84px)]" />
          <T k="directions.address" as="p" className="mt-8 font-display text-3xl" />
          <T k="directions.body" as="p" className="mt-4 max-w-[36rem] text-ink-soft" />
        </div>
        <T k="directions.cta" as="a" href="https://www.google.com/maps/search/?api=1&query=12%20Tran%20Quoc%20Thao%20District%203%20Saigon" className="inline-block rounded bg-accent px-7 py-4 text-accent-ink" />
      </div>
    </section>
  );
}
