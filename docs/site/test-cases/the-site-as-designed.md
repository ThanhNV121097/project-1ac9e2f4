# Test cases — The site as designed

Module: `site`
Function: The site as designed
Risk level: Medium. Static public page has no backend or saved writes, but copy, links, responsive layout, form shape, and accessibility are guest-facing and easy to regress.

## Cases

**Scenario**: Page renders approved section order
**Given**: Guest uses any supported viewport width from 320px to 1280px
**When**: Guest opens the home page
**Then**: Browser displays one page with sections in order: header, hero, menu, booking, directions, footer
Traces: SC-1 (SITE-001 AC-1)
Check: render_url

**Scenario**: Header shows approved brand, navigation, and CTA
**Given**: Guest opens the home page
**When**: Header renders
**Then**: Header displays `Nhà hàng Mây`, nav links `The menu`, `Book`, `Directions`, and header CTA `Book a table`
Traces: SC-2 (SITE-001 AC-2)
Check: render_url

**Scenario**: Hero shows approved copy and CTA
**Given**: Guest opens the home page
**When**: Hero renders
**Then**: Hero displays headline `Vietnamese lunch and dinner`, supporting text `District 3 cooking: bún bò, claypot fish, broken rice, cold beer.`, and CTA `Book a table`
Traces: SC-3 (SITE-001 AC-3)
Check: render_url

**Scenario**: Menu section shows approved heading and opening note
**Given**: Guest opens the home page
**When**: Menu section renders
**Then**: Menu section displays heading `The menu` and note `Open daily 11:00–22:00.`
Traces: SC-4 (SITE-001 AC-4)
Check: render_url

**Scenario**: Menu list shows four approved items in order
**Given**: Guest opens the home page
**When**: Menu list renders
**Then**: Menu list displays exactly these four items in order: `Bún bò Huế` / `Beef shank, lemongrass broth, herbs` / `145k`; `Cá kho tộ` / `Claypot fish, caramel, steamed rice` / `180k`; `Cơm tấm sườn` / `Broken rice, grilled pork chop, egg` / `135k`; `Gỏi cuốn` / `Prawn rolls, pork, peanut sauce` / `95k`
Traces: SC-5 (SITE-001 AC-5)
Check: render_url

**Scenario**: Booking section shows approved copy, call CTA, and phone number
**Given**: Guest opens the home page
**When**: Booking section renders
**Then**: Booking section displays heading `Book a table`, body `Call for tonight, or send a booking request. The team will confirm by phone.`, call CTA `Call`, and phone number `+84 28 3930 1212`
Traces: SC-6 (SITE-001 AC-6)
Check: render_url

**Scenario**: Booking form exposes approved name, labels, and submit control
**Given**: Guest opens the home page
**When**: Booking form renders
**Then**: Form has accessible name `Booking request`, visible labels `Name`, `Phone`, `Date and time`, `Guests`, and submit button `Send request`
Traces: SC-7 (SITE-001 AC-7)
Check: render_url

**Scenario**: Directions section shows approved map text, copy, and CTA
**Given**: Guest opens the home page
**When**: Directions section renders
**Then**: Directions section displays map text `Map: Trần Quốc Thảo and Nguyễn Đình Chiểu`, heading `Where we are`, address `12 Trần Quốc Thảo, District 3, Saigon`, body `Ten minutes from Turtle Lake. Motorbike parking is beside the yellow gate.`, and CTA `Get directions`
Traces: SC-8 (SITE-001 AC-8)
Check: render_url

**Scenario**: Footer shows approved line
**Given**: Guest opens the home page
**When**: Footer renders
**Then**: Footer displays `Nhà hàng Mây · 12 Trần Quốc Thảo, District 3 · 11:00–22:00`
Traces: SC-9 (SITE-001 AC-9)
Check: render_url

**Scenario**: Page uses approved colour tokens
**Given**: Guest opens the home page
**When**: Page styles load
**Then**: `body` computed background is `#F4EFE6`, surface panels computed background is `#FFF9EF`, primary action controls computed background is `#8F2F1B`, and primary action control text computed color is `#FFF9EF`
Traces: SC-10 (SITE-001 AC-10)
Check: measure_styles

**Scenario**: Menu nav targets menu anchor
**Given**: Guest is on the home page
**When**: Guest activates `The menu` nav link
**Then**: Browser target is `#menu`
Traces: SC-11 (SITE-002 AC-1)
Check: interact_page

**Scenario**: Book nav and booking CTA target booking anchor
**Given**: Guest is on the home page
**When**: Guest activates `Book` nav link or any `Book a table` CTA
**Then**: Browser target is `#book`
Traces: SC-12 (SITE-002 AC-2)
Check: interact_page

**Scenario**: Directions nav targets directions anchor
**Given**: Guest is on the home page
**When**: Guest activates `Directions` nav link
**Then**: Browser target is `#directions`
Traces: SC-13 (SITE-002 AC-3)
Check: interact_page

**Scenario**: Call CTA uses approved phone URI
**Given**: Guest is on the home page
**When**: Guest inspects or activates `Call` CTA
**Then**: Link href is `tel:+842839301212`
Traces: SC-14 (SITE-002 AC-4)
Check: interact_page

**Scenario**: Directions CTA uses approved Google Maps URL
**Given**: Guest is on the home page
**When**: Guest inspects or activates `Get directions` CTA
**Then**: Link href is `https://www.google.com/maps/search/?api=1&query=12%20Tran%20Quoc%20Thao%20District%203%20Saigon`
Traces: SC-15 (SITE-002 AC-5)
Check: interact_page

**Scenario**: Keyboard focus reaches every interactive element visibly
**Given**: Guest is on the home page
**When**: Guest presses Tab through header links, CTAs, booking form fields, submit button, and directions link
**Then**: Focus reaches each link, input, and button; focused element has visible native focus indicator via computed outline, outline-offset, or box-shadow
Traces: SC-16 (SITE-002 AC-6)
Check: interact_page

**Scenario**: Booking form includes approved input names
**Given**: Guest is on the home page
**When**: Booking form renders
**Then**: Inputs named `name`, `phone`, `time`, and `guests` are present
Traces: SC-17 (SITE-003 AC-1)
Check: render_url

**Scenario**: Booking phone input uses telephone type
**Given**: Guest is on the home page
**When**: Booking form renders
**Then**: Input named `phone` has type `tel`
Traces: SC-18 (SITE-003 AC-2)
Check: render_url

**Scenario**: Booking guests input uses numeric minimum
**Given**: Guest is on the home page
**When**: Booking form renders
**Then**: Input named `guests` has type `number` and minimum value `1`
Traces: SC-19 (SITE-003 AC-3)
Check: render_url

**Scenario**: Booking form shows only approved default and focus states
**Given**: Guest is on the home page
**When**: Booking form renders and Guest focuses each booking input
**Then**: Form shows default controls and visible input focus only; no success message, loading indicator, disabled state, validation message, or error message appears
Traces: SC-20 (SITE-003 AC-4)
Check: interact_page

**Scenario**: Guests field accepts boundary value 1 with native number input
**Given**: Guest is on the home page
**When**: Guest types `1` into input named `guests`
**Then**: Input value is `1` and browser validity for the input is valid
Traces: SC-19 (SITE-003 AC-3)
Check: interact_page

**Scenario**: Guests field rejects below-minimum value using native constraint only
**Given**: Guest is on the home page
**When**: Guest types `0` into input named `guests`
**Then**: Browser validity for the input is range-underflow invalid and no custom validation message or designed error element appears
Traces: SC-19 (SITE-003 AC-3), SC-20 (SITE-003 AC-4)
Check: interact_page
