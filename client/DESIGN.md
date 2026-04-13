
# Design System Specification: High-End SaaS Editorial

## landing Page
## 1. Overview & Creative North Star: "The Obsidian Foundry"

This design system is built for precision, high-stakes data, and executive-level clarity. Moving away from the "playful" SaaS tropes of rounded bubbles and bright pastels, this system adopts a **Creative North Star of "The Obsidian Foundry."**

The aesthetic is characterized by raw, structural power, architectural layering, and a "Nova" level of high-contrast luminosity. We prioritize sharp, intentional corners and deep tonal depth to create an interface that feels like a custom-machined instrument rather than a generic software template. We break the grid through asymmetrical information density—leaving generous "dead air" in some areas to make the high-density data visualizations feel more authoritative and curated.

---

## 2. Color & Surface Architecture

The palette is rooted in a dark-mode-first philosophy. We use a base of deep charcoal/near-black, accented by a high-energy Primary Amber that mimics the glow of molten metal.

### The "No-Line" Rule

Standard UI relies on thin grey lines to separate content. In this system, **1px solid borders are strictly prohibited for sectioning.** Boundaries must be defined through background color shifts or tonal nesting.

- _Implementation:_ Place a `surface_container_low` card on a `surface` background. The contrast between the two hex codes is the "line."

### Surface Hierarchy & Nesting

Treat the UI as physical layers of obsidian and glass.

- **Base Layer:** `surface` (#131313) - The foundation of the application.

- **Sub-Sectioning:** `surface_container_low` (#1C1B1B) - Used for primary workspace areas.

- **Elevated Components:** `surface_container` (#201F1F) - Standard card background.

- **Active/Focus States:** `surface_container_high` (#2A2A2A) - For hovered or active containers.

### The "Glass & Gradient" Rule

To add "soul" to the data, use semi-transparent surface colors with `backdrop-blur(12px)`.

- **CTAs & Primary Actions:** Do not use flat amber. Use a subtle linear gradient from `primary_container` (#F59E0B) to `primary` (#FFC174) at a 135-degree angle to create a sense of internal illumination.

---

## 3. Typography

We utilize **Manrope** for its clean, geometric foundations and professional legibility. The hierarchy is designed to feel editorial—large, bold headers contrasting with much smaller, high-contrast labels.

| Token | Weight | Size | Usage |

| :--- | :--- | :--- | :--- |

| **display-lg** | Bold | 3.5rem | Hero data points and landing headlines. |

| **headline-md** | Semi-Bold | 1.75rem | Major section headers. |

| **title-sm** | Medium | 1.0rem | Card titles and sidebar navigation. |

| **body-md** | Regular | 0.875rem | General UI text and paragraph content. |

| **label-sm** | Bold | 0.6875rem | Metadata, tags, and micro-copy (All Caps). |

**Editorial Contrast:** Pair a `display-lg` numeric value in `on_surface` with a `label-sm` unit descriptor in `primary` for a premium, dashboard look.

---

## 4. Elevation & Depth

Depth in this system is a result of **Tonal Layering**, not structural shadows.

- **The Layering Principle:** Instead of a drop shadow, elevate a card by moving it from `surface_container_low` to `surface_container_high`.

- **Ambient Shadows:** If a floating modal is required, use a shadow with a 40px blur, 0px offset, and 6% opacity using a tinted shadow color derived from `on_surface`.

- **The "Ghost Border" Fallback:** If accessibility requires a border, use `outline_variant` at 15% opacity. It should feel like a suggestion of an edge, not a hard cage.

- **Glassmorphism:** For floating navigations or tooltips, use `surface_container_highest` with 80% opacity and a `backdrop-blur` of 20px.

---

## 5. Components

### Buttons

- **Primary:** Linear gradient (`primary_container` to `primary`). Sharp corners (`none` or `sm`). Text is `on_primary`.

- **Secondary:** Ghost style. No background, `outline` border at 20% opacity. Text in `on_surface`.

- **Tertiary:** Text-only in `secondary` (muted olive) for low-priority actions.

### Data Visualization (The "Nova" Style)

- **Bar Charts:** Use `primary` (#FFC174) for active data. Unselected bars use `surface_container_highest`. No grid lines; use `surface_container_low` for the background of the chart area.

- **Progress Sliders:** Track is `surface_container_highest`. Thumb is a solid `on_surface` circle. Active fill is `primary`.

### Inputs & Fields

- **Container:** `surface_container_low`.

- **Active State:** Change background to `surface_container`. Add a 1px "Ghost Border" using `primary` at 40% opacity.

- **Typography:** Labels use `label-md` in `on_surface_variant`.

### Cards & Lists

- **Constraint:** No dividers. Use `spacing.8` (1.75rem) to separate list items.

- **Nested Elements:** Inside a card (`surface_container`), secondary information blocks should sit on `surface_container_low` to create a "recessed" look.

---

## 6. Do's and Don'ts

### Do

- **Do** use extreme vertical whitespace (`spacing.16` or `spacing.20`) between major sections to emphasize the editorial feel.

- **Do** use `secondary` (muted olive) for "success" states or steady-state metrics to differentiate from the high-priority Amber.

- **Do** keep corner radii to `sm` (0.125rem) or `none`. Sharp edges convey precision.

### Don't

- **Don't** use pure white (#FFFFFF) for text. Use `on_surface` (#E5E2E1) to reduce eye strain and maintain the "Obsidian" tone.

- **Don't** use standard 1px borders to separate content. If you feel the need for a line, increase the background contrast between containers instead.

- **Don't** use "Grow" or "Bounce" animations. Use "Fade" and "Slide" with `cubic-bezier(0.2, 0, 0, 1)` for a heavy, mechanical feel.
