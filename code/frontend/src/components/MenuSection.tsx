import { T, useList } from "../editable";

type MenuItem = { name: string; detail: string; price: string };

export default function MenuSection() {
  const items = useList<MenuItem>("menu.items");

  return (
    <section id="menu" className="border-t border-line py-28">
      <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:items-start">
        <div>
          <T k="menu.heading" as="h2" className="text-[clamp(42px,6vw,84px)]" />
          <T k="menu.note" as="p" className="mt-6 text-ink-soft" />
        </div>
        <div className="divide-y divide-line rounded bg-surface">
          {items.map((item, i) => (
            <article key={item.name} className="grid gap-3 p-7 sm:grid-cols-[1fr_auto] sm:items-start">
              <div>
                <T k={`menu.items.${i}.name`} as="h3" className="text-3xl" />
                <T k={`menu.items.${i}.detail`} as="p" className="mt-2 text-ink-soft" />
              </div>
              <T k={`menu.items.${i}.price`} as="p" className="font-display text-2xl" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
