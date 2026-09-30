import { T } from "../editable";

export default function BookingSection() {
  return (
    <section id="book" className="grid gap-12 border-t border-line py-28 lg:grid-cols-[1fr_1fr] lg:items-start">
      <div className="max-w-[38rem]">
        <T k="book.heading" as="h2" className="text-[clamp(42px,6vw,84px)]" />
        <T k="book.body" as="p" className="mt-6 text-xl text-ink-soft" />
        <T k="book.phoneLabel" as="a" href="tel:+842839301212" className="mt-10 inline-block rounded bg-accent px-7 py-4 text-accent-ink" />
        <T k="book.phone" as="p" className="mt-4 font-display text-3xl" />
      </div>
      <form className="grid gap-5 rounded bg-surface p-7" aria-label="Booking request">
        <label className="grid gap-2">
          <T k="book.form.name" />
          <input className="rounded border border-line bg-ground px-4 py-3 text-ink outline-offset-4" name="name" type="text" />
        </label>
        <label className="grid gap-2">
          <T k="book.form.phone" />
          <input className="rounded border border-line bg-ground px-4 py-3 text-ink outline-offset-4" name="phone" type="tel" />
        </label>
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="grid gap-2">
            <T k="book.form.time" />
            <input className="rounded border border-line bg-ground px-4 py-3 text-ink outline-offset-4" name="time" type="text" />
          </label>
          <label className="grid gap-2">
            <T k="book.form.guests" />
            <input className="rounded border border-line bg-ground px-4 py-3 text-ink outline-offset-4" name="guests" type="number" min="1" />
          </label>
        </div>
        <T k="book.form.submit" as="button" className="mt-3 rounded bg-accent px-7 py-4 text-left text-accent-ink" />
      </form>
    </section>
  );
}
