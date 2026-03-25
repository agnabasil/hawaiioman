# Design System: Vibrant Organic Redesign - PRD
**Project ID:** 16920387572339099754

## 1. Visual Theme & Atmosphere
Vibrant Organic. The aesthetic marries raw earthy naturalness with bright, energetic pops of fruit-inspired color. It feels airy, refreshing, and clean, utilizing ample organic shapes, subtle blurs, and floating animations to convey a sense of lightness and freshness.

## 2. Color Palette & Roles
- **Vibrant Tangerine (#F26430):** Primary Action. Used for buttons, progress accents, primary badges, and key callouts.
- **Creamy Off-White (#FDFBF7):** Main Background. Creates an airy, clean, and organic foundation.
- **Deep Forest Green (#2C3627):** Primary Text & Dark Background. Anchors the bright colors, providing high contrast for typography and acting as the background for lower hierarchy sections (like the footer).
- **Muted Sage Green (#8BA17E):** Secondary Text & Borders. Used for subdued body text, borders, and subtle dividers.
- **Yellow Gold (#E8C547):** Highlights & Secondary Badges. Used to add a sun-drenched, tropical feel (e.g., Seasonal badges).
- **Pure White (#FFFFFF):** Surface. Used for product cards and overlapping containers to elevate them from the background.

## 3. Typography Rules
- **Headings (Display):** Recoleta (serif). Adds a warm, editorial, and sophisticated organic touch to titles and large numbers. 
- **Body & Actions:** Outfit (sans-serif) and Work Sans (sans-serif). Clean, modern, highly legible sans-serifs that balance the ornate serif headings.
- **Styling:** Headings are typically bold and tightly tracked for impact, while small functional text (like tags or secondary buttons) uses uppercase styling with wide tracking (`tracking-widest`).

## 4. Component Stylings
- **Buttons:** 
  - Primary: Pill-shaped (`rounded-full` / `rounded-pill`), filled with Vibrant Tangerine, featuring a glowing colored shadow that intensifies on hover.
  - Secondary/Outlined: Pill-shaped, transparent with a solid border, transitions to filled on hover.
- **Cards/Containers:** Generously rounded corners (`rounded-2xl` to `rounded-[4rem]`). Cards rest on Pure White backgrounds with whisper-soft diffused shadows (`0 8px 30px rgba(44, 54, 39, 0.08)`) that elevate smoothly on hover.
- **Badges:** Pill-shaped, extra small text, uppercase with wide letter-spacing, functioning as tags or labels on product imagery.

## 5. Layout Principles
- **Whitespace:** Very airy and open. Uses large padding and margin values (`py-24`, `gap-20`) to let content breathe.
- **Grid & Alignment:** Centers around large max-width containers (`max-w-[1200px]`), utilizing responsive CSS grids. Images frequently break out of strict boxes using overlapping absolute positioning, skewed backgrounds, and rotation to feel dynamic rather than rigid.
