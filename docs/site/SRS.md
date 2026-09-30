# SRS — Site

Module: `site`
Design: [View the approved design](http://localhost:9101)
Design system: `design/design-system.md`

> One file per module, at `docs/{module}/SRS.md`. It covers only the functions that belong to this module. Never write `docs/SRS.md`.

## 1. Purpose

The site module provides the public one-page website for Nhà hàng Mây, a modern Vietnamese restaurant in District 3, Saigon. Guests use it to understand the restaurant, read the menu, find booking contact details, and get directions. Without this module, guests have no approved public web experience for menu, booking entry, or location.

## 2. Actors

| Actor | Who they are | What they may do in this module |
|---|---|---|
| Guest | Public visitor, not signed in | Browse the one-page site, use anchor navigation, read menu and restaurant details, start phone call, fill the static booking form, open directions link |
| Restaurant team | Staff receiving calls or future booking requests outside this static site | See the phone number and booking copy guests see; no admin function exists in this module |

## 3. Scope

**In scope** — the functions specified below, by their plan titles:

- The site as designed

**Out of scope** — name what a reader would reasonably expect here and say where it lives instead. This section prevents the same argument twice.

- Booking submission, confirmation, loading, success, validation, and error handling — deliberately not built in this static site story; the approved design shows a static form and notes that the team will confirm by phone.
- Backend, database, admin content management, and stored reservations — deliberately not built in this module; no API or database is in the approved static site scope.
- Live interactive map embed — deliberately not built; the approved design shows a text map placeholder and an outbound Google Maps directions link.
- Menu filtering, categories, dietary tags, and item detail pages — deliberately not built; the approved design shows one curated menu list.
- Multi-page routing — deliberately not built; the approved design is one page with anchor links.

## 4. Functional requirements

### 4.1 The site as designed

**Requirement SITE-001 — Render approved page structure and content**

*As a* Guest, *I want to* view the approved Nhà hàng Mây landing page, *so that* I can learn what the restaurant offers and act on menu, booking, and directions information.

Behaviour:

1. The Guest opens the site and sees a single public page with header, hero, menu, booking, directions, and footer in that order.
2. The page displays copy from `code/frontend/src/content.json` exactly as approved for all visible text elements.
3. The page uses the approved design tokens from `design/design-system.md` for warm page ground, surface panels, brick action controls, dark body text, muted supporting text, typography, radius, spacing, and responsive layout.
4. Header navigation and calls to action use anchors or links that match the approved design.

**Acceptance criteria** — each is proved by at least one test case in `docs/site/test-cases/the-site-as-designed.md`, through the story plan that cites it (`SC-1 [SITE-001 AC-1]`). Given/When/Then, no compound conditions: one behaviour per criterion.

| # | Given | When | Then |
|---|---|---|---|
| AC-1 | Guest is on any supported viewport width | Guest opens the home page | Page shows sections in order: header, hero, menu, booking, directions, footer |
| AC-2 | Guest opens the home page | Header renders | Header shows `Nhà hàng Mây`, nav links `The menu`, `Book`, `Directions`, and header CTA `Book a table` |
| AC-3 | Guest opens the home page | Hero renders | Hero shows headline `Vietnamese lunch and dinner`, supporting text `District 3 cooking: bún bò, claypot fish, broken rice, cold beer.`, and CTA `Book a table` |
| AC-4 | Guest opens the home page | Menu section renders | Menu heading `The menu` and note `Open daily 11:00–22:00.` are visible |
| AC-5 | Guest opens the home page | Menu list renders | Four menu items are visible with exact names, details, and prices: `Bún bò Huế` / `Beef shank, lemongrass broth, herbs` / `145k`; `Cá kho tộ` / `Claypot fish, caramel, steamed rice` / `180k`; `Cơm tấm sườn` / `Broken rice, grilled pork chop, egg` / `135k`; `Gỏi cuốn` / `Prawn rolls, pork, peanut sauce` / `95k` |
| AC-6 | Guest opens the home page | Booking section renders | Booking heading `Book a table`, body `Call for tonight, or send a booking request. The team will confirm by phone.`, call CTA `Call`, and phone number `+84 28 3930 1212` are visible |
| AC-7 | Guest opens the home page | Booking form renders | Form has accessible name `Booking request` and visible labels `Name`, `Phone`, `Date and time`, `Guests`, and submit button `Send request` |
| AC-8 | Guest opens the home page | Directions section renders | Map text `Map: Trần Quốc Thảo and Nguyễn Đình Chiểu`, heading `Where we are`, address `12 Trần Quốc Thảo, District 3, Saigon`, body `Ten minutes from Turtle Lake. Motorbike parking is beside the yellow gate.`, and CTA `Get directions` are visible |
| AC-9 | Guest opens the home page | Footer renders | Footer line `Nhà hàng Mây · 12 Trần Quốc Thảo, District 3 · 11:00–22:00` is visible |
| AC-10 | Guest opens the home page | Page styles load | Body uses warm page background `#F4EFE6`, surface panels use `#FFF9EF`, primary action controls use `#8F2F1B`, and action text uses `#FFF9EF` |

**Requirement SITE-002 — Support public navigation and outbound actions**

*As a* Guest, *I want to* use visible links and controls, *so that* I can jump to key sections, call the restaurant, and open directions.

Behaviour:

1. The Guest selects `The menu`, `Book`, `Directions`, or `Book a table` links and the browser targets the matching section on the same page.
2. The Guest selects `Call` and the browser opens the restaurant phone URI.
3. The Guest selects `Get directions` and the browser opens Google Maps search for the approved restaurant address.
4. The Guest can move through header links, CTAs, form controls, and the directions link by keyboard with visible native focus.

**Acceptance criteria** — each is proved by at least one test case in `docs/site/test-cases/the-site-as-designed.md`, through the story plan that cites it (`SC-1 [SITE-002 AC-1]`). Given/When/Then, no compound conditions: one behaviour per criterion.

| # | Given | When | Then |
|---|---|---|---|
| AC-1 | Guest is on the home page | Guest activates `The menu` nav link | Browser target is `#menu` |
| AC-2 | Guest is on the home page | Guest activates `Book` nav link or `Book a table` CTA | Browser target is `#book` |
| AC-3 | Guest is on the home page | Guest activates `Directions` nav link | Browser target is `#directions` |
| AC-4 | Guest is on the home page | Guest activates `Call` CTA | Link uses `tel:+842839301212` |
| AC-5 | Guest is on the home page | Guest activates `Get directions` CTA | Link opens `https://www.google.com/maps/search/?api=1&query=12%20Tran%20Quoc%20Thao%20District%203%20Saigon` |
| AC-6 | Guest is on the home page | Guest tabs through interactive elements | Keyboard focus reaches all links, form fields, and the submit button with a visible focus indicator |

**Requirement SITE-003 — Preserve static booking form shape**

*As a* Guest, *I want to* see the approved booking request form, *so that* I know what information the restaurant will need for a table request.

Behaviour:

1. The Guest sees a booking form with fields for name, phone, date and time, and guests.
2. The phone field accepts telephone-style input via `type="tel"`.
3. The guests field accepts numeric input via `type="number"` with minimum value `1`.
4. Submitting the form has no approved success, loading, validation, persistence, or error state in this story.

**Acceptance criteria** — each is proved by at least one test case in `docs/site/test-cases/the-site-as-designed.md`, through the story plan that cites it (`SC-1 [SITE-003 AC-1]`). Given/When/Then, no compound conditions: one behaviour per criterion.

| # | Given | When | Then |
|---|---|---|---|
| AC-1 | Guest is on the home page | Booking form renders | Inputs named `name`, `phone`, `time`, and `guests` are present |
| AC-2 | Guest is on the home page | Booking form renders | Phone input has type `tel` |
| AC-3 | Guest is on the home page | Booking form renders | Guests input has type `number` and minimum value `1` |
| AC-4 | Guest is on the home page | Booking form renders | Approved design shows only default and input focus states; no success, loading, disabled, validation, or error message appears |

**Failure, boundary and permission behaviour** — the part most often skipped and most often the source of bugs. Every case this function actually has needs a defined outcome; "should not happen" is not an outcome.

| Case | Condition | Expected behaviour |
|---|---|---|
| Invalid input | Guest enters empty, malformed, or out-of-range booking form values | Not applicable: approved static design has no validation or error state, and booking submission is out of scope |
| Boundary | Guest count is `1` | Guests field accepts `1` because approved input minimum is `1` |
| Boundary | Guest count is below `1` | Browser-native number input constraint applies; no custom message is specified or designed |
| Not found | Guest follows in-page anchors from approved links | Not applicable: approved links target sections present on the same page |
| Not permitted | Guest views or uses public site features | Not applicable: all features in this module are public and no roles or permissions are designed |
| Conflict | Two actors interact with the site at the same time | Not applicable: this function is a static public read with no saved writes |
| Upstream failure | Google Maps is unavailable after Guest activates directions link | Out of scope for site rendering: site must still render the outbound link; provider failure is handled outside this module |
| Empty data | Menu items, phone, address, or labels are absent | Not applicable: approved static content is present in `content.json`; no empty state is designed |

**Data touched** — the fields this function reads and writes, in product terms. The physical schema is TL's job in `docs/architecture/erd.md`; this is the list that document has to satisfy.

| Field | Type | Required | Rule |
|---|---|---|---|
| Site name | text | yes | Displays as `Nhà hàng Mây` in header and footer |
| Navigation links | list of labels and anchors | yes | Labels are `The menu`, `Book`, `Directions`; anchors are `#menu`, `#book`, `#directions` |
| Hero headline | text | yes | Displays as `Vietnamese lunch and dinner` |
| Hero supporting text | text | yes | Displays as `District 3 cooking: bún bò, claypot fish, broken rice, cold beer.` |
| Hero CTA | label and anchor | yes | Label is `Book a table`; anchor is `#book` |
| Menu heading | text | yes | Displays as `The menu` |
| Menu note | text | yes | Displays as `Open daily 11:00–22:00.` |
| Menu items | list of name, detail, price | yes | Four approved items display in listed order with prices using `k` shorthand |
| Booking copy | heading, body, phone label, phone number | yes | Heading, body, CTA, and phone match approved content |
| Booking fields | labels and input metadata | yes | Labels are `Name`, `Phone`, `Date and time`, `Guests`; phone type is `tel`; guests type is `number` with min `1` |
| Directions copy | map text, heading, address, body, CTA | yes | All values match approved content; CTA points to Google Maps search URL |
| Footer line | text | yes | Displays `Nhà hàng Mây · 12 Trần Quốc Thảo, District 3 · 11:00–22:00` |
## 5. Screens

The design is the source of truth for appearance; this section maps functions onto it so nothing in the design is unaccounted for and nothing specified here is missing from the design.

List only the states the approved design actually shows. A screen the design draws once, with no variant for waiting, for no data, or for a failure, has exactly **one** state and its name is `default`. That is not a placeholder and not an invented state: it is what "this screen has one appearance" is called, and it is the correct and complete answer for a static screen. Writing `loading`, `empty` or `error` for a screen whose design has no such variant invents work, and the reviewer will reject it.

| Screen | Section in the design | Functions it serves | States that must exist |
|---|---|---|---|
| Public restaurant landing page | Approved React app: `App.tsx` header, hero, menu, booking, directions, footer | SITE-001, SITE-002, SITE-003 | default |
| Header | Approved React app: `App.tsx` `<header>` | SITE-001, SITE-002 | default |
| Hero | Approved React app: `App.tsx` hero section | SITE-001, SITE-002 | default |
| Menu | Approved React app: `MenuSection.tsx` | SITE-001 | default |
| Booking | Approved React app: `BookingSection.tsx` | SITE-001, SITE-002, SITE-003 | default, focus |
| Directions | Approved React app: `DirectionsSection.tsx` | SITE-001, SITE-002 | default |
| Footer | Approved React app: `App.tsx` `<footer>` | SITE-001 | default |

## 6. Non-functional requirements

Only what is real for this module. Delete rows that do not apply rather than inventing a number nobody will check.

Name the condition the number was measured under, and name one a test can set up on purpose. "Within 2s on a typical connection" has a figure and is still unverifiable: nobody can produce a typical connection, so nobody can produce a failing run, so the requirement can never fail and will never be checked. The same is true of "under normal load" and "on a modern device".

| Area | Requirement |
|---|---|
| Accessibility | Header links, CTA links, form fields, submit button, and directions link are reachable by keyboard; browser focus remains visible; all visible form inputs have visible labels; action hit targets are at least 44×44px; text contrast follows the approved design system, including known divider contrast deviation recorded there |
| Responsive | Page works from 320px to 1280px viewport width without horizontal page scroll; header nav is hidden below 640px and visible from 640px; menu layout splits from 768px; booking and directions split from 1024px |
| Localisation | Copy is in English with Vietnamese proper nouns and dish names preserved exactly; opening hours use `11:00–22:00`; prices use Vietnamese `k` shorthand; phone uses Vietnam international format |
| Privacy | Static story stores no personal data; booking fields may accept typed values in the browser but no approved persistence or transmission exists in this module |

## 7. Dependencies and assumptions

- **Depends on:** `design/design-system.md`, for visual tokens, component rules, known deviations, and accessibility constraints.
- **Depends on:** approved React design in `code/frontend/`, for exact page structure, content, links, and states.
- **Depends on:** Google Maps outbound URL, for directions after the Guest leaves the site.
- **Assumption:** The static booking form does not submit until a future booking flow exists. If false, a new story must specify submission, validation, persistence, confirmation, and failure states before build.

Anything genuinely undecided goes here as an open question with a proposed default — never leave a blank for someone else to discover mid-build:

| Open question | Proposed default | Who decides |
|---|---|---|
| None | Use approved static React design and this SRS | Stakeholder |

## 8. Traceability

Every plan item in this module appears exactly once, and every requirement id traces to a test case. A gap in this table is a gap in the build.

| Plan item | Requirement ids | Test cases |
|---|---|---|
| The site as designed | SITE-001, SITE-002, SITE-003 | `test-cases/the-site-as-designed.md` |
