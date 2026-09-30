# Design System — Nhà hàng Mây

> Source of truth: approved React application in `code/frontend/`: `src/theme.css`, `src/content.json`, `src/App.tsx`, and `src/components/`.
> Every value below is extracted from it. Changing value here without changing approved design is defect.

Last updated: 2026-09-30

## 1. Foundations

### 1.1 Color

Semantic tokens. Name by job, never by hue.

| Token | Value | Used for |
|---|---|---|
| `--color-page-ground` | `#F4EFE6` | Page background, input background |
| `--color-surface` | `#FFF9EF` | Menu panel, booking form, directions panel |
| `--color-text-primary` | `#201A16` | Body text, headings, form text |
| `--color-text-secondary` | `#6A5B4F` | Supporting copy, notes, footer |
| `--color-action` | `#8F2F1B` | Primary CTA, phone CTA, map panel |
| `--color-action-text` | `#FFF9EF` | Text on action background |
| `--color-divider` | `rgba(32, 26, 22, 0.16)` | Section borders, menu dividers, input borders |

#### Contrast audit

Every text-on-background pair actually used. Body text ≥ 4.5:1, large text (≥ 18.66px bold or ≥ 24px) ≥ 3:1, UI borders ≥ 3:1.

| Foreground | Background | Ratio | Passes |
|---|---|---|---|
| `--color-text-primary` | `--color-page-ground` | `15.0:1` | AA |
| `--color-text-secondary` | `--color-page-ground` | `5.7:1` | AA |
| `--color-text-primary` | `--color-surface` | `16.5:1` | AA |
| `--color-text-secondary` | `--color-surface` | `6.3:1` | AA |
| `--color-action-text` | `--color-action` | `7.8:1` | AA |
| `--color-divider` | `--color-page-ground` | `1.5:1` | FAIL for UI borders |
| `--color-divider` | `--color-surface` | `1.4:1` | FAIL for UI borders |

### 1.2 Spacing

Base unit: `4px`. Margins, padding, gaps, min heights and container limits use these values plus approved fluid clamps.

| Token | Value |
|---|---|
| `--space-1` | `4px` |
| `--space-2` | `8px` |
| `--space-3` | `12px` |
| `--space-4` | `16px` |
| `--space-5` | `20px` |
| `--space-6` | `24px` |
| `--space-7` | `28px` |
| `--space-8` | `32px` |
| `--space-10` | `40px` |
| `--space-12` | `48px` |
| `--space-18` | `72px` |
| `--space-24` | `96px` |
| `--space-28` | `112px` |

Fluid spacing:

| Token | Value | Used for |
|---|---|---|
| `--space-page-gutter` | `clamp(20px, 5vw, 72px)` | Page horizontal padding |

### 1.3 Typography

Font families:

- Body: `Inter`, loaded through site font setup, with system fallback from browser/app defaults.
- Headings/display: `Cormorant Garamond`, loaded through site font setup, with serif fallback from browser/app defaults.

| Token | Size | Line height | Weight | Used for |
|---|---|---|---|---|
| `--text-sm` | `14px` | browser/app default | `400` inherited | Header nav, footer |
| `--text-base` | `16px` | browser/app default | `400` inherited | Body, labels, form fields |
| `--text-xl` | `20px` | browser/app default | `400` inherited | Lead paragraph |
| `--text-2xl` | `24px` | browser/app default | `400` inherited | Site name, prices |
| `--text-3xl` | `30px` | browser/app default | `400` inherited | Menu item names, phone, address |
| `--text-section-heading` | `clamp(42px, 6vw, 84px)` | browser/app default | `400` inherited | h2 section headings |
| `--text-map-display` | `clamp(38px, 5vw, 76px)` | `1` | `400` inherited | Map placeholder text |
| `--text-hero` | `clamp(58px, 9vw, 132px)` | browser/app default | `400` inherited | h1 hero headline |

Heading levels are used in order: h1 hero, h2 section headings, h3 menu item names.

Weight and letter-spacing tokens:

| Token | Value | Used for |
|---|---|---|
| `--font-weight-body` | `400` inherited | Running text, labels, controls |
| `--font-weight-display` | `500` | Available in `theme.css`; not applied in approved components |
| `--tracking-display` | `-0.03em` | Available in `theme.css`; not applied in approved components |
### 1.4 Radius, border, shadow, motion

| Token | Value | Used for |
|---|---|---|
| `--radius-control` | `18px` | Buttons, inputs, form panel, menu panel, directions panels |
| `--border-width` | `1px` | Section borders, menu dividers, input borders |
| `--focus-offset` | `4px` | Native focus outline offset on inputs |

Motion respects browser defaults. Approved design defines no transition duration, easing, animation, shadow, or custom reduced-motion rule.

### 1.5 Layout and breakpoints

| Name | Min width | Container | Columns | Gutter |
|---|---|---|---|---|
| `sm` | `640px` | `1180px` max | Header nav visible; menu item and booking date/guest split to two columns | `clamp(20px, 5vw, 72px)` |
| `md` | `768px` | `1180px` max | Menu intro/list split `0.8fr 1.2fr` | `clamp(20px, 5vw, 72px)` |
| `lg` | `1024px` | `1180px` max | Booking split `1fr 1fr`; directions split `1fr 1.2fr` | `clamp(20px, 5vw, 72px)` |

Z-index scale: approved design uses no positioned layers and no z-index values.

## 2. Components

### 2.1 Header

**Purpose** — Site identity, anchor navigation, and booking entry point. Use once per page.

**Anatomy** — `[site name link] [navigation links] [booking CTA]`.

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| Default | `--color-page-ground`, `--color-text-primary`, `--color-action`, `--color-action-text`, `--text-sm`, `--radius-control` | Top of site |

**Sizes**

| Size | Height | Padding | Text token |
|---|---|---|---|
| Default | content height | `24px` vertical, `--space-page-gutter` horizontal | `--text-sm`, `--text-2xl` site name |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | Nav hidden below `sm`; visible horizontal nav from `sm` | Layout breakpoints, action tokens |

**Accessibility** — Header uses anchor links. Booking CTA and nav links must keep visible browser focus; hit target from padding is at least 44px high for CTA.

### 2.2 Hero section

**Purpose** — State cuisine, location tone, and primary booking action. Use once at page start.

**Anatomy** — `[headline] [supporting text] [primary CTA]`.

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| Default | `--color-page-ground`, `--color-text-primary`, `--color-text-secondary`, `--color-action`, `--color-action-text`, display/body fonts | Landing hero |

**Sizes**

| Size | Height | Padding | Text token |
|---|---|---|---|
| Default | `min-height: 76vh` | `96px` vertical | `--text-hero`, `--text-xl` |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | Left-aligned display headline with supporting paragraph and CTA | Hero and action tokens |

**Accessibility** — Hero has page h1. CTA is anchor to booking section and must keep visible browser focus. CTA hit target exceeds 44px.

### 2.3 Button link / primary action

**Purpose** — Primary action for booking, calling, directions, and form submit. Do not use for passive navigation except approved header CTA.

**Anatomy** — `[label]`.

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| Primary | `--color-action`, `--color-action-text`, `--radius-control` | Main action on each section |

**Sizes**

| Size | Height | Padding | Text token |
|---|---|---|---|
| Standard | content height, minimum 48px by padding | `28px` horizontal, `16px` vertical | `--text-base` |
| Header | content height, minimum 44px by padding | `20px` horizontal, `12px` vertical | `--text-sm` |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | Solid action background, action text, rounded corners | Action and radius tokens |

**Accessibility** — Anchor actions need meaningful `href`; button action submits booking form. Browser focus indicator must remain visible. Minimum hit target is at least 44×44px.
### 2.4 Menu section

**Purpose** — Show daily menu items with detail and price. Use for short curated menu lists.

**Anatomy** — `[section heading] [opening note] [menu list: item name, detail, price]`.

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| Default | `--color-surface`, `--color-divider`, `--color-text-primary`, `--color-text-secondary`, display/body fonts | Main restaurant menu |

**Sizes**

| Size | Height | Padding | Text token |
|---|---|---|---|
| Section | content height | `112px` vertical | `--text-section-heading` |
| Menu row | content height | `28px` all sides, `12px` gap | `--text-3xl`, `--text-base`, `--text-2xl` |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | Surface list with divider between menu items; two-column item layout from `sm` | Surface, divider, text tokens |

**Accessibility** — Section anchor is `#menu`. Item names use h3 under h2. Prices remain text, not images.

### 2.5 Booking section and form

**Purpose** — Let guest call or send static booking request. Current approved design does not show submission success, loading, empty, disabled, or error states.

**Anatomy** — `[heading] [body] [call CTA] [phone number] [form: name, phone, date/time, guests, submit]`.

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| Default | `--color-surface`, `--color-page-ground`, `--color-divider`, `--color-text-primary`, `--color-text-secondary`, `--color-action`, `--color-action-text`, `--radius-control` | Booking request section |

**Sizes**

| Size | Height | Padding | Text token |
|---|---|---|---|
| Section | content height | `112px` vertical | `--text-section-heading` |
| Form panel | content height | `28px` all sides, `20px` gap | `--text-base` |
| Input | content height, minimum 48px by padding | `16px` horizontal, `12px` vertical | `--text-base` |
| Submit | content height, minimum 48px by padding | `28px` horizontal, `16px` vertical | `--text-base` |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | Surface form panel, ground-filled inputs, bordered inputs, action submit button | Form tokens |
| Focus | Inputs use native visible outline with `4px` outline offset | `--focus-offset` |

**Accessibility** — Form has `aria-label="Booking request"`. Each input has visible label. Phone input uses `type="tel"`; guest input uses `type="number"` and `min="1"`. Keyboard focus must stay visible. Minimum input and submit hit target is at least 44×44px.

### 2.6 Directions section

**Purpose** — Show location, parking note, map placeholder, and outbound directions link.

**Anatomy** — `[map panel] [heading] [address] [body] [directions CTA]`.

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| Default | `--color-action`, `--color-action-text`, `--color-surface`, `--color-text-primary`, `--color-text-secondary`, `--radius-control` | Restaurant directions block |

**Sizes**

| Size | Height | Padding | Text token |
|---|---|---|---|
| Section | content height | `112px` vertical | `--text-section-heading` |
| Map panel | `28rem` minimum on `lg` | `32px` all sides | `--text-map-display` |
| Details panel | content height | `32px` all sides, `48px` internal gap | `--text-section-heading`, `--text-3xl`, `--text-base` |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | Action-colored map panel beside surface address panel from `lg`; stacked before `lg` | Direction layout, action, surface, text tokens |

**Accessibility** — Directions CTA links to Google Maps search. Link text is descriptive. Map is text placeholder in approved design, not interactive map.

### 2.7 Footer

**Purpose** — Repeat restaurant name, address, and opening hours at page end.

**Anatomy** — `[single footer line]`.

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| Default | `--color-text-secondary`, `--text-sm` | Site footer |

**Sizes**

| Size | Height | Padding | Text token |
|---|---|---|---|
| Default | content height | `48px` vertical, `--space-page-gutter` horizontal | `--text-sm` |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | Muted single line | Secondary text token |

**Accessibility** — Footer text remains selectable text.
## 3. Content and formatting

- Voice and tone: concise, warm, direct restaurant copy grounded in Vietnamese dishes, location, and practical guest needs.
- Date and time: English labels; time range uses 24-hour format with en dash, e.g. `11:00–22:00`; booking field label is `Date and time`.
- Number and currency: menu prices use Vietnamese shorthand `k`, e.g. `145k`; phone uses Vietnam international format, e.g. `+84 28 3930 1212`.
- Address format: street number and name, District 3, Saigon.
- Capitalization: headings and buttons use sentence case: `Book a table`, `Send request`, `Get directions`.
- Empty-state and error-message wording pattern: approved design has no empty or error states; do not invent copy until feature creates those states.

## 4. Known deviations

Places where approved design does not follow its own rules or anti-patterns in `references/ai-defaults.md`. Record, do not silently fix.

| Where | Deviation | Why it stands | Follow-up |
|---|---|---|---|
| `--color-divider` borders on page ground and surface | Contrast is `1.5:1` and `1.4:1`, below 3:1 UI border guidance | Approved design uses subtle warm dividers | If accessibility review requires visible field borders/dividers, darken divider token in approved design first |
| `theme.css` | `--weight-display: 500` and `--tracking-display: -0.03em` exist but approved components do not apply them | Tokens are in approved theme source but not consumed by rendered class names | If display typography should use them, update approved React design before implementation |
| Primary actions | Approved design draws only default state; no hover, active, focus, or disabled visual changes in component classes | Browser default focus remains, but no custom state styling is drawn | Add explicit states only after approved design shows them |
| Section spacing | `py-28` (`112px`) creates generous vertical space | Restaurant landing page uses spacious editorial layout; not nested dense UI | Keep for marketing sections; reduce only in future dense views after design approval |
| Fonts | `Cormorant Garamond` and `Inter` names are declared, but loading mechanism is outside approved files read for this task | Source truth names families, not font delivery | Keep family names; verify loading in scaffold/build task |

AI default checks avoided by approved design:

- No purple/indigo default palette; palette uses warm ground, ink, and brick action for Vietnamese restaurant setting.
- No decorative gradients.
- No emoji iconography.
- No filler copy; all copy names restaurant tasks, menu items, address, hours, and phone.
- No text over images.
- No hover-only affordances drawn.

## 5. Change log

| Date | Change | Design PR |
|---|---|---|
| 2026-09-30 | Initial design system extracted from approved React design | Pending docs PR |
