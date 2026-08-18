---
name: Aurelian Form
colors:
  surface: '#fff8f2'
  surface-dim: '#e2d9cc'
  surface-bright: '#fff8f2'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fcf2e5'
  surface-container: '#f6ece0'
  surface-container-high: '#f1e7da'
  surface-container-highest: '#ebe1d4'
  on-surface: '#1f1b13'
  on-surface-variant: '#474741'
  inverse-surface: '#353027'
  inverse-on-surface: '#f9efe2'
  outline: '#787770'
  outline-variant: '#c8c7be'
  surface-tint: '#5f5e5a'
  primary: '#5f5e5a'
  on-primary: '#ffffff'
  primary-container: '#f5f2ec'
  on-primary-container: '#6f6e69'
  inverse-primary: '#c9c6c1'
  secondary: '#605e5b'
  on-secondary: '#ffffff'
  secondary-container: '#e6e2de'
  on-secondary-container: '#666461'
  tertiary: '#725a36'
  on-tertiary: '#ffffff'
  tertiary-container: '#fff0e0'
  on-tertiary-container: '#836a45'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2dc'
  primary-fixed-dim: '#c9c6c1'
  on-primary-fixed: '#1c1c18'
  on-primary-fixed-variant: '#474743'
  secondary-fixed: '#e6e2de'
  secondary-fixed-dim: '#cac6c2'
  on-secondary-fixed: '#1c1b19'
  on-secondary-fixed-variant: '#484644'
  tertiary-fixed: '#ffddb0'
  tertiary-fixed-dim: '#e1c296'
  on-tertiary-fixed: '#281800'
  on-tertiary-fixed-variant: '#594321'
  background: '#fff8f2'
  on-background: '#1f1b13'
  surface-variant: '#ebe1d4'
typography:
  display-xl:
    fontFamily: EB Garamond
    fontSize: 84px
    fontWeight: '400'
    lineHeight: 92px
    letterSpacing: -0.02em
  display-lg:
    fontFamily: EB Garamond
    fontSize: 64px
    fontWeight: '400'
    lineHeight: 72px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: EB Garamond
    fontSize: 42px
    fontWeight: '400'
    lineHeight: 52px
  headline-sm:
    fontFamily: EB Garamond
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 40px
  display-lg-mobile:
    fontFamily: EB Garamond
    fontSize: 42px
    fontWeight: '400'
    lineHeight: 48px
  body-lg:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '300'
    lineHeight: 32px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  label-caps:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.15em
  caption:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
spacing:
  unit: 8px
  section-gap: 160px
  element-gap: 24px
  margin-page: 64px
  margin-mobile: 24px
  grid-columns: '12'
  grid-gutter: 32px
---

## Brand & Style
The design system is rooted in the concept of "Quiet Luxury"—an aesthetic that prioritizes material quality, architectural precision, and deliberate restraint over ornamentation. It is designed for a high-end interior design studio catering to a discerning clientele who value contemporary architecture and editorial storytelling.

The visual style is **Editorial Minimalism**. It draws inspiration from high-end hospitality and architectural journals, utilizing expansive whitespace (negative space) as a structural element rather than a void. The UI should feel like a physical gallery: curated, serene, and expensive. Layouts should embrace asymmetrical compositions to mirror modern architectural forms, avoiding the predictability of standard bootstrap-style grids.

## Colors
The palette is a sophisticated interplay of warm minerals and deep charcoals.

- **Primary Background (#F5F2EC):** A warm ivory that acts as the "canvas," providing a softer, more premium feel than pure white.
- **Secondary / Dark (#1C1B19):** Used for high-contrast sections, footers, or immersive project showcases to evoke the atmosphere of a dimly lit, high-end gallery.
- **Accent (#A68A62):** A muted champagne bronze. Use this exclusively for small, intentional highlights—such as active states, thin dividers, or subtle iconography. Never use it for large surfaces.
- **Neutrals:** Taupe (#C9C0B4) and Stone (#E8E2D8) are used for UI boundaries, secondary text, and subtle surface layering.

## Typography
The typography strategy relies on the tension between the classicism of **EB Garamond** and the functional modernity of **Inter**.

- **Headlines:** Use EB Garamond for all editorial headers. Its high-contrast strokes and elegant serifs evoke a literary, sophisticated tone. Large display sizes should use tighter letter-spacing to appear more architectural.
- **Body:** Inter provides a clean, neutral balance. Use the "Light" (300) weight for large introductory paragraphs to maintain an airy feel.
- **Micro-Copy:** The `label-caps` style is critical for the "luxury" feel. Use it for category tags, overlines, and navigation items. The generous letter-spacing creates an expansive, high-end look even at small sizes.

## Layout & Spacing
The layout follows a "Breathing Grid." While a 12-column structure exists for alignment, elements should frequently break the grid or occupy "empty" space to create an editorial, non-templated rhythm.

- **Extreme Padding:** Sections should be separated by significant vertical gaps (160px+) to ensure the user focuses on one "thought" at a time.
- **Asymmetry:** Pair a large vertical image spanning 7 columns with a text block spanning 3 columns, leaving a 2-column void between them.
- **Responsive Behavior:** On mobile, reduce page margins to 24px and switch to a single-column flow, but maintain the generous vertical spacing between blocks to preserve the sense of luxury.

## Elevation & Depth
This design system avoids traditional shadows to maintain a flat, architectural purity. Depth is achieved through color blocking and "Ghost Layers."

- **Tonal Layering:** Use the Ivory (#F5F2EC) and Stone (#E8E2D8) backgrounds to differentiate content zones. 
- **Borders:** Use extremely thin (1px) borders in Taupe (#C9C0B4) or Bronze (#A68A62) to define edges without adding visual weight.
- **Overlays:** Project images may use a subtle 10% black tint on hover to reveal white text, but the transition must be a slow, cinematic fade (600ms+).
- **Z-Index:** Content should feel layered like paper on a desk—subtle overlaps between images and text boxes are encouraged to create a 3D architectural sense.

## Shapes
In alignment with contemporary architecture, this design system uses **Sharp (0px)** corners for all UI elements, including buttons, input fields, and image containers. 

The absence of rounded corners communicates precision, structural integrity, and a "no-compromise" design philosophy. The only exception is the use of circular "Play" buttons for video content, which should be perfectly round to act as a soft focal point against the rigid grid.

## Components
Consistent application of the "Sharp & Spacious" philosophy across interactive elements:

- **Buttons:**
  - **Primary:** No fill. 1px Charcoal border. Text in `label-caps`. Hover state: Charcoal fill with Ivory text. 
  - **Text Link:** Simple underline in Bronze (#A68A62). The underline should sit 4px below the baseline and animate its width from 0 to 100% on hover.
- **Input Fields:**
  - Minimalist design: Only a bottom border (1px). Label uses `label-caps` positioned above the line. Focus state changes the border color to Bronze.
- **Cards (Project Items):**
  - Full-bleed imagery with no visible container borders. The project title appears in EB Garamond below the image, followed by a `label-caps` category.
- **Navigation:**
  - A persistent, high-z-index top bar that is completely transparent until scroll. On scroll, it transitions to a blurred Ivory background (backdrop-filter: blur(10px)) with a 1px bottom border.
- **Image Reveals:**
  - All large imagery should use a "curtain" reveal or a slow zoom-in scale (from 1.05 to 1.0) upon entering the viewport to evoke a cinematic quality.