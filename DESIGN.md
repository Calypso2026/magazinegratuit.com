---
name: Marine Cybernetic
colors:
  surface: '#051424'
  surface-dim: '#051424'
  surface-bright: '#2c3a4c'
  surface-container-lowest: '#010f1f'
  surface-container-low: '#0d1c2d'
  surface-container: '#122131'
  surface-container-high: '#1c2b3c'
  surface-container-highest: '#273647'
  on-surface: '#d4e4fa'
  on-surface-variant: '#bcc9cd'
  inverse-surface: '#d4e4fa'
  inverse-on-surface: '#233143'
  outline: '#869397'
  outline-variant: '#3d494c'
  surface-tint: '#4cd7f6'
  primary: '#4cd7f6'
  on-primary: '#003640'
  primary-container: '#06b6d4'
  on-primary-container: '#00424f'
  inverse-primary: '#00687a'
  secondary: '#bcc7de'
  on-secondary: '#263143'
  secondary-container: '#3e495d'
  on-secondary-container: '#aeb9d0'
  tertiary: '#7bd0ff'
  on-tertiary: '#00354a'
  tertiary-container: '#23b2ec'
  on-tertiary-container: '#00415a'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#acedff'
  primary-fixed-dim: '#4cd7f6'
  on-primary-fixed: '#001f26'
  on-primary-fixed-variant: '#004e5c'
  secondary-fixed: '#d8e3fb'
  secondary-fixed-dim: '#bcc7de'
  on-secondary-fixed: '#111c2d'
  on-secondary-fixed-variant: '#3c475a'
  tertiary-fixed: '#c4e7ff'
  tertiary-fixed-dim: '#7bd0ff'
  on-tertiary-fixed: '#001e2c'
  on-tertiary-fixed-variant: '#004c69'
  background: '#051424'
  on-background: '#d4e4fa'
  surface-variant: '#273647'
typography:
  display-lg:
    fontFamily: Literata
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Literata
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 42px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Literata
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-sm:
    fontFamily: Literata
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Literata
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Literata
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.03em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-padding: 24px
  gutter: 16px
  section-gap: 64px
---

## Brand & Style

This design system targets high-end technology, developer tools, and sophisticated SaaS platforms. The personality is precise, intellectual, and forward-leaning, blending the editorial authority of traditional publishing with the sleek utility of modern engineering interfaces.

The aesthetic follows a **Corporate Modern** style with a **Tech-Forward** edge. It utilizes a deep marine foundation to ground the user experience, while leveraging high-vibrancy accents to guide the eye and signal interactivity. The goal is to evoke a sense of deep focus and professional reliability.

## Colors

The palette is anchored by a deep navy background that provides a low-strain environment for long-term focus. 

- **Primary Cyan (#06b6d4):** A vibrant, electric cyan used for primary actions and critical UI states. It offers high luminescence against the dark background.
- **Surface Navy (#1E293B):** The foundational canvas color. All primary interface containers originate from this hue.
- **Accent Sky (#38bdf8):** A lighter, more ethereal blue used for hover states and secondary highlights to provide depth.
- **Muted Slate (#94a3b8):** Used for secondary text and decorative elements to maintain hierarchy without competing with the primary accent.

## Typography

This system uses a hybrid typographic approach. **Literata** serves as the primary typeface for both headings and body text, providing an "intellectual" and "editorial" feel that distinguishes the product from generic tech tools. 

To maintain the "tech-forward" requirement, **Geist** is introduced for labels, captions, and data points. This monospaced-influenced sans-serif provides the necessary functional contrast against the serif body text, ensuring that functional UI elements feel precise and mechanical.

## Layout & Spacing

The layout follows a **Fluid Grid** model with strict 8px logic. 

- **Desktop:** 12-column grid with 24px margins. Content is organized into modular "blades" or panes.
- **Tablet:** 8-column grid with 20px margins. Sidebars transition to collapsible drawers.
- **Mobile:** 4-column grid with 16px margins. 

Vertical rhythm is maintained through a consistent 8px scale. Use 16px for small groupings, 24px for component internal padding, and 48-64px for separating major semantic sections.

## Elevation & Depth

Depth is achieved through **Tonal Layering** rather than heavy shadows. In this dark mode environment, higher elevation is signaled by lighter surface colors:

1.  **Level 0 (Base):** #0F172A (Deepest Navy)
2.  **Level 1 (Cards/Panels):** #1E293B (The secondary navy color)
3.  **Level 2 (Modals/Popovers):** #334155 (Lighter Slate)

Use subtle 1px inner borders (strokes) with 10-15% white opacity to define edges. If shadows are necessary, use a "Cyan Glow" shadow for active elements (0px 4px 20px rgba(6, 182, 212, 0.15)).

## Shapes

The shape language is **Rounded**, striking a balance between approachable and professional. 

- Standard components (Buttons, Inputs) use 0.5rem (8px).
- Larger containers (Cards, Modals) use 1rem (16px).
- Status indicators and tags may use the "Full" pill-shape to distinguish them from interactive buttons.

## Components

- **Buttons:** Primary buttons use the Cyan (#06b6d4) background with black or very dark navy text for maximum contrast. Secondary buttons use a transparent background with a 1px Cyan border.
- **Input Fields:** Use the #1E293B surface with a 1px border of #334155. On focus, the border transitions to Cyan with a subtle outer glow.
- **Chips/Tags:** Use a low-opacity Cyan fill (10%) with solid Cyan text for metadata or categories.
- **Cards:** Utilize the Level 1 surface. Ensure that header text within cards uses Literata Bold to maintain the editorial character.
- **Checkboxes/Radios:** When selected, these should be solid Cyan. The "tick" or "dot" should be the background color (#1E293B) to create a "cut-out" effect.
- **Progress Indicators:** Use the Cyan-to-Sky gradient for progress bars to reinforce the "tech-forward" vibrancy.