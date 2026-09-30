# Story — The site as designed

Module: `site`
Plan item: The site as designed

## User story

As a Guest, I want to view and use the approved Nhà hàng Mây public landing page, so that I can read the menu, start a table booking by phone or static request form, and open directions.

## In scope

- Render the single public landing page in this order: header, hero, menu, booking, directions, footer.
- Display visible copy from `code/frontend/src/content.json` exactly as approved.
- Use approved design tokens and component rules from `design/design-system.md` and `code/frontend/src/theme.css`.
- Support approved anchor navigation, call link, Google Maps directions link, and keyboard focus.
- Preserve the static booking form shape: name, phone, date and time, guests, and submit control.

## Out of scope

- Booking submission, validation, loading, success, disabled, persistence, confirmation, and error states; static form only.
- Backend, API, database, admin content management, stored reservations, and secrets; project shape is static frontend-only.
- Live map embed; approved design uses a text map placeholder and outbound Google Maps link.
- Menu filtering, categories, item detail pages, dietary tags, search, or CMS-driven menu data.
- Multi-page routing; approved site is one page with anchors.
- Changing approved `src/App.tsx`, `src/theme.css`, or `src/content.json` beyond what is needed to ship the approved design.

## UI scope

Screen: public restaurant landing page, default state only.

Sections touched:

- Header: site name, `The menu`, `Book`, `Directions`, `Book a table`.
- Hero: headline, supporting text, primary booking CTA.
- Menu: heading, opening note, four approved menu items.
- Booking: copy, call CTA, phone number, accessible static booking form, input focus state.
- Directions: map placeholder, address copy, Google Maps CTA.
- Footer: restaurant name, short address, opening hours.

No loading, empty, submitted, validation, or error screen exists in approved design.
## Acceptance criteria

- SC-1 [SITE-001 AC-1]: At any supported viewport width, opening the home page shows sections in order: header, hero, menu, booking, directions, footer.
- SC-2 [SITE-001 AC-2]: Header shows `Nhà hàng Mây`, nav links `The menu`, `Book`, `Directions`, and header CTA `Book a table`.
- SC-3 [SITE-001 AC-3]: Hero shows headline `Vietnamese lunch and dinner`, supporting text `District 3 cooking: bún bò, claypot fish, broken rice, cold beer.`, and CTA `Book a table`.
- SC-4 [SITE-001 AC-4]: Menu section shows heading `The menu` and note `Open daily 11:00–22:00.`.
- SC-5 [SITE-001 AC-5]: Menu list shows four items in order with exact names, details, and prices: `Bún bò Huế` / `Beef shank, lemongrass broth, herbs` / `145k`; `Cá kho tộ` / `Claypot fish, caramel, steamed rice` / `180k`; `Cơm tấm sườn` / `Broken rice, grilled pork chop, egg` / `135k`; `Gỏi cuốn` / `Prawn rolls, pork, peanut sauce` / `95k`.
- SC-6 [SITE-001 AC-6]: Booking section shows heading `Book a table`, body `Call for tonight, or send a booking request. The team will confirm by phone.`, call CTA `Call`, and phone number `+84 28 3930 1212`.
- SC-7 [SITE-001 AC-7]: Booking form has accessible name `Booking request` and visible labels `Name`, `Phone`, `Date and time`, `Guests`, plus submit button `Send request`.
- SC-8 [SITE-001 AC-8]: Directions section shows map text `Map: Trần Quốc Thảo and Nguyễn Đình Chiểu`, heading `Where we are`, address `12 Trần Quốc Thảo, District 3, Saigon`, body `Ten minutes from Turtle Lake. Motorbike parking is beside the yellow gate.`, and CTA `Get directions`.
- SC-9 [SITE-001 AC-9]: Footer shows line `Nhà hàng Mây · 12 Trần Quốc Thảo, District 3 · 11:00–22:00`.
- SC-10 [SITE-001 AC-10]: Loaded page styles use body background `#F4EFE6`, surface panels `#FFF9EF`, primary action controls `#8F2F1B`, and action text `#FFF9EF`.
- SC-11 [SITE-002 AC-1]: Activating `The menu` nav link targets `#menu`.
- SC-12 [SITE-002 AC-2]: Activating `Book` nav link or `Book a table` CTA targets `#book`.
- SC-13 [SITE-002 AC-3]: Activating `Directions` nav link targets `#directions`.
- SC-14 [SITE-002 AC-4]: `Call` CTA link uses `tel:+842839301212`.
- SC-15 [SITE-002 AC-5]: `Get directions` CTA link opens `https://www.google.com/maps/search/?api=1&query=12%20Tran%20Quoc%20Thao%20District%203%20Saigon`.
- SC-16 [SITE-002 AC-6]: Keyboard focus reaches all links, form fields, and submit button with visible focus indicator.
- SC-17 [SITE-003 AC-1]: Booking form includes inputs named `name`, `phone`, `time`, and `guests`.
- SC-18 [SITE-003 AC-2]: Booking phone input has type `tel`.
- SC-19 [SITE-003 AC-3]: Booking guests input has type `number` and minimum value `1`.
- SC-20 [SITE-003 AC-4]: Booking form shows default and input focus states only; no success, loading, disabled, validation, or error message appears.

## Dependencies

- Approved design source in `code/frontend/src/App.tsx`, `code/frontend/src/components/`, `code/frontend/src/content.json`, and `code/frontend/src/theme.css`.
- `design/design-system.md` for visual tokens, component rules, accessibility constraints, and known deviations.
- `docs/architecture/overview.md` for static Vite React constraints and no-backend shape.
- Google Maps outbound URL for directions after Guest leaves the site.
- No story dependency must land first.
- No external account, secret, API, database, or stored data required.
