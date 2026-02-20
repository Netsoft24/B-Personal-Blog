# The Slow Dispatch — Design Guidelines

Reference for maintaining visual consistency across all pages.

---

## 1. Design System Foundation

### 8-Point Grid

All spacing, sizing, and layout values follow the **8-point grid system**.

- **Base unit:** 8px
- **Sub-grid:** 4px (used only for small decorative elements: border-radius, dot separators, thin borders)
- **Allowed spacing values:** 4, 8, 12, 16, 24, 32, 40, 48, 56, 64, 72, 80, 96, 120…
- **Never use** odd or off-grid values like 5, 10, 14, 15, 18, 20, 22, 26, 28, 34, 36, 42, 50, 52, 60

### When to use the 4px sub-grid

Only for inherently small, decorative properties:
- `border-radius: 12px` (the design token `--radius`)
- Dot separators: `width: 3px; height: 3px` (visual dots are exempt)
- `padding: 4px 12px` on very small pill badges
- Accent bar widths (`width: 4px`)
- Figcaption `padding-right: 4px`

Everything else — margins, paddings, gaps, widths, heights — must land on an 8px multiple.

---

## 2. CSS Variables (Design Tokens)

```css
:root {
  --ink: #1a1a2e;        /* Primary text, headings, dark backgrounds */
  --muted: #6b7094;      /* Secondary text, metadata, captions */
  --accent: #e8563a;     /* Brand accent — links, highlights, CTAs on hover */
  --surface: #faf9f7;    /* Page background */
  --surface-alt: #f0eeea;/* Card backgrounds, blockquotes, alternate sections */
  --border: #e2dfd9;     /* Borders, dividers */
  --radius: 12px;        /* Standard border-radius for cards, images, blocks */
}
```

### Color usage rules

| Token          | Use for                                                    |
|----------------|------------------------------------------------------------|
| `--ink`        | Body text, headings, nav active links, dark button fills   |
| `--muted`      | Meta text (dates, read time), subtitles, footer text       |
| `--accent`     | Category pills text, emphasis (`<em>`), hover states, CTA hover backgrounds, accent bars |
| `--surface`    | Page `background`, button text on dark backgrounds         |
| `--surface-alt`| Blockquote bg, author card bg, tag bg, CTA box bg          |
| `--border`     | Card borders, nav bottom border, footer top border, tag borders |

### Accent tint (for pill backgrounds)

```css
background: rgba(232, 86, 58, 0.08); /* Light accent wash */
```

### Avatar gradient

```css
background: linear-gradient(135deg, var(--accent), #f4a261);
```

---

## 3. Typography

### Font stack

```css
/* Primary body font */
font-family: 'Inter', system-ui, sans-serif;

/* Display / heading font */
font-family: 'Playfair Display', Georgia, serif;

/* Code font (blog-post only) */
font-family: 'JetBrains Mono', monospace;
```

### Google Fonts import

All pages must include:
```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
```

Blog post page additionally loads:
```
Instrument+Serif:ital@0;1
JetBrains+Mono:wght@400
```

### Type scale (8pt-aligned)

| Element               | Font           | Size              | Weight | Line-height | Notes                           |
|-----------------------|----------------|-------------------|--------|-------------|---------------------------------|
| Page title (hero h1)  | Playfair       | `clamp(40px, 6vw, 72px)` | 400 | 1.1      | `letter-spacing: -0.02em`       |
| Section heading (h2)  | Playfair       | 32px              | 400    | 1.2         | With accent left-bar on blog    |
| Card title             | Playfair       | 24px              | 400    | 1.3         |                                 |
| Body text              | Inter          | 18px              | 400    | 1.7         | Blog article paragraphs         |
| Subtitle / tagline     | Inter          | 20px (mobile 16px)| 400    | 1.6         | `color: var(--muted)`           |
| Card excerpt           | Inter          | 14px              | 400    | 1.6         | `color: var(--muted)`           |
| Nav links              | Inter          | 14px (mobile 12px)| 500    | —           | Uppercase, `letter-spacing: 0.02em` |
| Category pill (small)  | Inter          | 12px              | 600    | —           | Uppercase, `letter-spacing: 0.12em` |
| Footer                 | Inter          | 13px              | 400    | —           | `color: var(--muted)`           |
| Blockquote             | Playfair       | 24px              | 400    | 1.5         | Italic                          |
| Code                   | JetBrains Mono | 14px              | 400    | 1.7         |                                 |

### Emphasis styling

`<em>` inside articles uses Playfair Display in accent color:
```css
article em {
  font-style: italic;
  color: var(--accent);
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 1.05em;
}
```

---

## 4. Layout

### Max-widths

| Context            | Max-width | Notes                              |
|--------------------|-----------|------------------------------------|
| Homepage post grid | 1200px    | 3-column grid                      |
| Blog article body  | 800px     | Comfortable reading width          |
| Blog hero section  | 1000px    | Wider for impact                   |
| Blog hero image    | 1100px    | Bleeds slightly beyond hero text   |
| About hero         | 700px     | Focused, centered                  |
| About values grid  | 960px     | 3-column card layout               |
| About CTA / profile| 640px     | Narrow centered content            |

### Grid layouts

**Homepage post grid:**
```css
grid-template-columns: repeat(3, 1fr);
gap: 32px;
```

**About values grid:**
```css
grid-template-columns: repeat(3, 1fr);
gap: 32px;
```

Both collapse to `1fr` (single column) at the mobile breakpoint.

### Standard page padding

- Desktop: `padding: 0 32px`
- Mobile: `padding: 0 24px`

### Vertical spacing rhythm

| Space between          | Value |
|------------------------|-------|
| Nav to hero            | 80px (padding-top on hero) |
| Hero heading to tagline| 24px  |
| Hero to content        | 48px  |
| Section heading to body| 24px  |
| Between paragraphs     | 32px  |
| Between major sections | 56–80px |
| Content to footer      | 80px  |
| Footer padding         | 48px  |

---

## 5. Components

### Navigation bar

```
Sticky, top: 0, z-index: 10
Background: rgba(250, 249, 247, 0.85) with backdrop-filter: blur(16px)
Border-bottom: 1px solid var(--border)
Padding: 16px 32px
```

- **Logo:** Playfair Display, 24px, italic, links to `index.html`
- **Links:** Inter, 14px, weight 500, uppercase, `letter-spacing: 0.02em`, `color: var(--muted)`
- **Active link:** `color: var(--ink)`
- **Hover:** `color: var(--ink)`
- **Gap between links:** 32px (mobile: 16px)

### Category pill

```css
font-size: 12px;          /* 13px for filter bar pills */
font-weight: 600;         /* 500 for filter bar pills */
letter-spacing: 0.12em;
text-transform: uppercase;
color: var(--accent);
background: rgba(232, 86, 58, 0.08);
padding: 8px 16px;        /* 8px 24px for filter bar */
border-radius: 100px;
```

**Filter bar active state:**
```css
background: var(--ink);
color: var(--surface);
border-color: var(--ink);
```

### Post card (homepage)

```
Border-radius: var(--radius)
Background: #fff
Border: 1px solid var(--border)
Hover: translateY(-4px), box-shadow: 0 12px 32px rgba(26, 26, 46, 0.08)
```

Structure:
1. Thumbnail image — `aspect-ratio: 16/9`, `object-fit: cover`
2. Card body — `padding: 24px`
3. Category pill — small variant
4. Title — Playfair 24px
5. Excerpt — Inter 14px, `color: var(--muted)`
6. Author row — avatar (32px circle) + name + date + read time

### Author avatar

| Size    | Context              | Font-size |
|---------|----------------------|-----------|
| 32px    | Card author row      | 13px      |
| 48px    | Blog post author row | 16px      |
| 80px    | Blog post end card   | 24px (Playfair) |
| 120px   | About page profile   | 40px (Playfair) |

All use the gradient: `linear-gradient(135deg, var(--accent), #f4a261)`, white centered letter.

### Dot separator

```css
display: inline-block;
width: 3px;
height: 3px;
background: var(--muted);
border-radius: 50%;
vertical-align: middle;
margin: 0 8px;
```

### Buttons

**Primary (dark):**
```css
background: var(--ink);
color: var(--surface);
border-radius: 100px;
padding: 16px 32px;      /* or 8px 24px for smaller */
font-size: 14px;
font-weight: 600;
letter-spacing: 0.02em;
```

**Hover:**
```css
background: var(--accent);
transform: translateY(-1px);
box-shadow: 0 4px 12px rgba(232, 86, 58, 0.25);
```

### Tags

```css
font-size: 13px;
font-weight: 500;
background: var(--surface-alt);
color: var(--ink);
padding: 8px 16px;
border-radius: 100px;
border: 1px solid var(--border);
```

Hover inverts to `background: var(--ink); color: var(--surface)`.

### Blockquote (blog post)

```css
padding: 32px;
background: var(--surface-alt);
border-radius: var(--radius);
```

Decorative open-quote character: Playfair 80px, `color: var(--accent)`, `opacity: 0.3`.

### Code block (blog post)

```
Background: #1a1a2e (same as --ink)
Border-radius: var(--radius)
Border: 1px solid rgba(255, 255, 255, 0.06)
Header: 8px 24px padding, subtle bottom border
Code: JetBrains Mono 14px, color #e2dfd9
```

---

## 6. Effects & Decoration

### Grain overlay

Applied via `body::before` on every page:
```css
body::before {
  content: '';
  position: fixed;
  inset: 0;
  opacity: 0.025;
  background-image: url("data:image/svg+xml,..."); /* fractalNoise SVG */
  pointer-events: none;
  z-index: 999;
}
```

### Card hover

```css
transform: translateY(-4px);
box-shadow: 0 12px 32px rgba(26, 26, 46, 0.08);
transition: transform 0.25s, box-shadow 0.25s;
```

### Scroll progress bar (blog post only)

```css
position: fixed; top: 0; left: 0;
height: 3px;
background: var(--accent);
z-index: 100;
```

### HR separator (blog post)

```css
width: 80px;
height: 2px;
margin: 56px auto;
background: linear-gradient(90deg, transparent, var(--accent), transparent);
```

---

## 7. Responsive Breakpoint

Single breakpoint: **`max-width: 720px`**

### Changes at mobile:

| Property               | Desktop     | Mobile      |
|------------------------|-------------|-------------|
| Hero padding           | 80px 32px   | 48px 24px   |
| Hero h1 font-size      | clamp(…72px)| 36px        |
| Subtitle font-size     | 20px        | 16px        |
| Page side padding      | 32px        | 24px        |
| Post grid columns      | 3           | 1           |
| Values grid columns    | 3           | 1           |
| Nav link gap           | 32px        | 16px        |
| Nav link font-size     | 14px        | 12px        |
| Article font-size      | 18px        | 17px        |
| Article h2 font-size   | 32px        | 24px        |

---

## 8. Page Structure

### Shared across all pages
- `<nav>` — sticky nav bar with logo + links (Essays, About, Subscribe)
- `<footer>` — centered copyright line
- Grain overlay via `body::before`
- Same `:root` tokens
- Same font imports

### index.html (Homepage)
```
nav → hero (headline + tagline) → category filter bar → 3-col post grid → footer
```

### blog-post.html (Article)
```
progress bar → nav → hero (category pill + title + subtitle + author row) → hero image → article body → toolbar → tags → author card → footer
```

### about.html (About)
```
nav → hero (title + intro) → profile (avatar + name + location + bio) → values (3 cards) → CTA box → footer
```

---

## 9. File Inventory

| File             | Purpose          |
|------------------|------------------|
| `index.html`     | Homepage / blog listing |
| `blog-post.html` | Article template |
| `about.html`     | About page       |

All CSS is inline `<style>` per page (no external stylesheet). When adding a new page, copy the shared base (reset, `:root`, grain, nav, footer styles) from any existing page and apply the tokens documented above.

---

## 10. Quick Reference — Spacing Cheat Sheet

```
 4px  — sub-grid only (border accents, tiny decorative offsets)
 8px  — tight padding (pills, small gaps)
12px  — border-radius (--radius)
16px  — nav padding, compact spacing
24px  — card body padding, standard gaps, heading margins
32px  — page side padding, section gaps, paragraph spacing
40px  — medium section padding
48px  — section separators, hero bottom padding
56px  — large vertical separators
64px  — section bottom padding
80px  — hero top padding, page bottom padding
96px  — mobile avatar size
120px — large avatar (about page)
```
