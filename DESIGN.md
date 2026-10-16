# Medora Gomes Portfolio — Design System & Architecture DNA

## Overview
This document specifies the design tokens, visual hierarchy, interaction principles, and UI architecture derived from screen `11b05f0ac73546d3b91ba56f51d059c0` (*Medora Gomes | AI & ML Developer Portfolio*).

---

## 1. Visual Identity & Theme
- **Theme:** Ultra-sleek Dark Cybernetic Glassmorphism
- **Mood:** High-velocity engineering, academic rigor, deep tech, sophisticated, polished
- **Shell Type:** Web Standard, Smooth Scrolling, Full Width Container (Max 1280px / 7xl)

---

## 2. Color Palette & Semantic Tokens

### Core Neutral & Surface Colors
| Token | Hex Value | Usage |
|---|---|---|
| `background` | `#10131a` | Base application background |
| `surface` | `#10131a` | Base surface layer |
| `surface-dim` | `#10131a` | Dimmed surface base |
| `surface-bright` | `#363941` | Elevated hover surfaces |
| `surface-container-lowest` | `#0b0e15` | Code blocks, deep inset areas, footer |
| `surface-container-low` | `#191b23` | Cards, navigation pills, panels |
| `surface-container` | `#1d1f27` | Inner blocks, sub-containers |
| `surface-container-high` | `#272a32` | Interactive badge backgrounds, hovers |
| `surface-container-highest` | `#32353d` | Highest contrast neutral surface |

### Primary Accents (Electric Cyan / Soft Sky)
| Token | Hex Value | Usage |
|---|---|---|
| `primary` | `#adc6ff` | Highlights, active icons, primary text emphasis |
| `primary-container` | `#4d8eff` | Primary action buttons, prominent badges |
| `on-primary` | `#002e6a` | High-contrast text on primary |
| `on-primary-container` | `#00285d` | Contrast text on primary container buttons |
| `primary-fixed` | `#d8e2ff` | Fixed tint accent |

### Secondary Accents (Neon Lavender / Deep Indigo)
| Token | Hex Value | Usage |
|---|---|---|
| `secondary` | `#d0bcff` | Secondary badges, academic highlights, sub-headers |
| `secondary-container` | `#571bc1` | Gradient accents, glowing orbital blobs |
| `on-secondary` | `#3c0091` | Contrast text on secondary |
| `on-secondary-container`| `#c4abff` | Secondary badge text |

### Tertiary Accents (Electric Purple / Magenta)
| Token | Hex Value | Usage |
|---|---|---|
| `tertiary` | `#ddb7ff` | Video / Multimodal AI tags, third category badges |
| `tertiary-container` | `#b76dff` | Gradient stops, subtle glow effects |
| `on-tertiary` | `#490080` | Contrast text on tertiary |

### Typography Colors & Borders
| Token | Hex Value | Usage |
|---|---|---|
| `on-surface` | `#e1e2ec` | Primary body and heading text |
| `on-surface-variant` | `#c2c6d6` | Secondary body text, descriptions |
| `outline` | `#8c909f` | Monospace labels, subtle captions |
| `outline-variant` | `#424754` | Card borders, divider lines |
| Border Standard | `rgba(255, 255, 255, 0.05)` | Glassmorphism outer borders |

---

## 3. Typography System

### Font Families
- **Display & Headings:** `Plus Jakarta Sans`, sans-serif (Weights: 600, 700, 800)
- **Body & Narrative:** `Inter`, sans-serif (Weights: 400, 500, 600)
- **Code, Labels & Badges:** `JetBrains Mono`, monospace (Weights: 400, 500, 600)
- **Icons:** `Material Symbols Outlined` (Google Fonts)

### Typography Scale
- **Display XL:** 56px / 64px line-height, -0.03em letter-spacing, weight 800 (Mobile: 38px / 46px)
- **Headline LG:** 36px / 44px line-height, -0.02em letter-spacing, weight 700 (Mobile: 28px / 36px)
- **Headline MD:** 24px / 32px line-height, -0.015em letter-spacing, weight 600
- **Headline SM:** 20px / 28px line-height, -0.01em letter-spacing, weight 600
- **Body LG:** 18px / 28px line-height, -0.005em letter-spacing, weight 400
- **Body MD:** 15px / 24px line-height, 0em letter-spacing, weight 400
- **Body SM:** 13px / 20px line-height, 0.005em letter-spacing, weight 400
- **Label Code MD:** 14px / 20px line-height, weight 500 (Mono)
- **Label Code SM:** 12px / 16px line-height, 0.02em letter-spacing, weight 500 (Mono)
- **Label Caps:** 11px / 16px line-height, 0.08em letter-spacing, weight 600, uppercase (Mono)

---

## 4. Layout & Spacing System
- **Max Container Width:** `1280px` (`max-w-7xl`)
- **Outer Gutters:** `px-5` (`1.25rem`) on mobile, `px-12` (`3rem`) on desktop
- **Vertical Spacing Rhythm:**
  - `space-xs`: `0.25rem` (4px)
  - `space-sm`: `0.5rem` (8px)
  - `space-md`: `1.0rem` (16px)
  - `space-lg`: `1.5rem` (24px)
  - `space-xl`: `2.5rem` (40px)
  - Section paddings: `py-20` (80px)

---

## 5. Elevation, Depth & Micro-Interactions

### Frosted Glassmorphism
- Backgrounds use `bg-surface-container-low/90` or `bg-surface/85` paired with `backdrop-blur-xl`.
- Fine 1px semi-transparent borders: `border border-white/[0.05]`.
- Layered ambient atmospheric orbs (`blur-[140px]`) in primary cyan, secondary purple, and tertiary magenta.

### Interactive Card Lift (`interactive-card`)
- `transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s, border-color 0.35s`
- Hover state: `transform: translateY(-5px) scale(1.008)` with dynamic cyan glow `box-shadow: 0 16px 36px -10px rgba(77, 142, 255, 0.3)`.

### Shimmer Button Effect (`shimmer-btn`)
- Gradient background with high-luminance hover glow.
- Continuous diagonal light beam pseudo-element sweep across button surface on hover.

### Tag Pills (`tag-pill`)
- Monospace font styling with micro-lift on hover: `translateY(-1.5px)` and border highlight `rgba(173, 198, 255, 0.45)`.

---

## 6. Information Architecture & Section Hierarchy

1. **Fixed Header & Floating Navigation:**
   - Monogram logo, Medora Gomes title & role tagline
   - "Available for Roles" pulsing badge
   - Center navigation pill bar (About, Experience, Projects, Skills, Achievements, Contact) with active section tracking
   - Social link shortcuts (GitHub, LinkedIn, LeetCode, GeeksforGeeks)
   - Shimmer "Get in Touch" CTA button & Avatar thumbnail
2. **Hero Section:**
   - Availability pill with animated ping radar
   - Dynamic headline: "Building intelligent systems & seamless interfaces."
   - Comprehensive bio & primary CTA buttons ("Explore Projects", "View Resume & Connect")
   - Social verification badges
   - Interactive runtime terminal card (`medora_runtime_v2.5.py`) with CUDA status, acoustic accuracy, bundle latency, and inline vector sparkline
   - 4-column metric ribbon: 9.41 CGPA, Top 10 Hackathon Finalist, 4+ Shipped Prototypes, Zarthi Frontend Intern
3. **About Me Section:**
   - Verbatim narrative regarding AI/ML background, BMSIT&M coursework, and frontend engineering
   - Full-stack AI & Human-centered interface badges
   - 3-step System Architecture pipeline graphic (Spectrogram pipeline -> Deep fine-tuning -> Interactive UI delivery)
   - Opportunity status card
4. **Experience & Education (Dual-Split):**
   - **Work Experience:** Zarthi Frontend Developer Intern role with key quantified contributions and tech tags
   - **Academic Foundation:** B.E. in Artificial Intelligence & Machine Learning at BMS Institute of Technology and Management, 9.41 CGPA, Dean's Honor Roll, and advanced coursework breakdown
5. **Featured Projects Matrix:**
   - *AI Voice Clone Detection System* (WavLM, PyTorch, Librosa)
   - *AI Resume ATS Scorer* (LLMs, FastAPI, React, TypeScript)
   - *PulmoX Lung Cancer Clinical Assistant* (CNNs, TensorFlow, OpenCV, Streamlit)
   - *ExploreMe Intelligent Video QA System* (Multimodal Transformers, Whisper, PyTorch, React)
6. **Technical Stack & Skills Matrix:**
   - Programming Languages (Python, C++, TypeScript, JavaScript, SQL, HTML5/CSS3)
   - Machine Learning & AI (PyTorch, TensorFlow, LLMs, OpenCV, WavLM, Hugging Face, Scikit-Learn)
   - Web Development (React, Node.js, Tailwind CSS, Next.js, RESTful APIs, Git, Vite)
7. **National Hackathon Distinction & Achievements:**
   - Top 10 Finalist — Paytm Build for India Hackathon banner with custom illuminated badge
   - Top 1% Dept Academic Rank & Open Source Contributor badges
8. **Contact & Collaboration Section:**
   - Direct inquiry email (`medora.gomes@bmsit.in`) and location (Bangalore, India)
   - Fully interactive contact form with instant validation & transmission feedback
9. **Footer:**
   - Branding, role summary, social links, back-to-top navigation, and copyright notices.
