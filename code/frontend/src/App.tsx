import { T, useList } from "./editable";
import BookingSection from "./components/BookingSection";
import DirectionsSection from "./components/DirectionsSection";
import MenuSection from "./components/MenuSection";

export default function App() {
  const links = useList<{ label: string; href: string }>("nav.links");

  return (
    <div className="min-h-screen bg-ground text-ink font-body">
      <header className="mx-auto flex max-w-page items-center justify-between px-[var(--gutter)] py-6">
        <T k="site.name" as="a" href="/" className="font-display text-2xl" />
        <nav className="hidden items-center gap-8 text-sm sm:flex">
          {links.map((l, i) => <T key={l.href} k={`nav.links.${i}.label`} as="a" href={l.href} />)}
          <T k="nav.cta.label" as="a" href="#book" className="rounded bg-accent px-5 py-3 text-accent-ink" />
        </nav>
      </header>
      <main className="mx-auto max-w-page px-[var(--gutter)]">
        <section className="grid min-h-[76vh] items-center py-24">
          <div className="max-w-[58rem]">
            <T k="hero.headline" as="h1" className="text-[clamp(58px,9vw,132px)]" />
            <T k="hero.sub" as="p" className="mt-8 max-w-[46rem] text-xl text-ink-soft" />
            <T k="hero.cta.label" as="a" href="#book" className="mt-12 inline-block rounded bg-accent px-7 py-4 text-accent-ink" />
          </div>
        </section>
        <MenuSection />
        <BookingSection />
        <DirectionsSection />
      </main>
      <footer className="mx-auto max-w-page px-[var(--gutter)] py-12 text-sm text-ink-soft">
        <T k="footer.line" />
      </footer>
    </div>
  );
}
