# Derrick Osebe — Software Engineering Portfolio

> **Target Roles:** Software Engineering Internships & Associate Software Engineer Roles (Graduation: December 2026)  
> **Core Focus:** Backend APIs, IoT Telemetry Pipelines & Applied AI (RAG)  
> **Location:** Nairobi, Kenya (`UTC+3`)  
> **Live GitHub:** [@OsebeMoses](https://github.com/OsebeMoses) &bull; **Contact:** derrickosebe70@gmail.com

---

## 🏛️ System Architecture & Engineering Highlights

This repository contains the source code for the personal engineering portfolio of **Derrick Osebe**, a final-year Computer Science student at Kabarak University. 

Designed following senior software engineering principles, the codebase is structured around:
1. **Data Separation (DRY Principle):** 100% of data (projects, experiences, credentials, contacts) is decoupled into [`src/constants/index.js`](./src/constants/index.js).
2. **Mini Case Studies:** Projects are documented with explicit **Problem**, **Architecture & Role**, **Real Technical Challenge & Solution**, and **Verified Outcomes**.
3. **Developer Workbench Metaphor:** Interactive IDE window frames with multi-tab viewports (**Interface Preview**, **Architecture Pipeline**, **Telemetry Spec**).
4. **Command Center Navigation (`⌘K` / `Ctrl+K`):** Raycast-style keyboard-driven command palette for fuzzy search, quick section jumps, email copying, and resume downloading.
5. **Accessibility (WCAG 2.1 AA):** High-contrast focus rings (`#818cf8`), semantic HTML5 heading structure (`h1` $\rightarrow$ `h4`), skip-to-content anchor, and motion-reduction support (`prefers-reduced-motion`).

---

## 🛠️ Tech Stack

- **Runtime & Framework:** React 19, JavaScript (ESNext)
- **Bundler & Build Tool:** Vite 8
- **Styling & Design System:** Tailwind CSS v4 (Obsidian Titanium Noir & Electric Indigo palette)
- **Code Quality & Linter:** Oxlint (0 errors, 0 warnings)
- **Deployment Target:** Static PWA-compatible bundle

---

## 📂 Project Structure

```text
portfolio/
├── public/
│   ├── favicon.svg            # Custom SVG favicon
│   ├── icons.svg              # Scalable SVG glyphs
│   └── resume.pdf             # Derrick Osebe's Curriculum Vitae
├── src/
│   ├── assets/                # Visual assets and icons
│   ├── components/
│   │   ├── About.jsx          # Profile summary, internship experience, credentials & stack matrix
│   │   ├── CommandPalette.jsx # Raycast-style ⌘K keyboard navigation modal
│   │   ├── Contact.jsx        # Direct contact card and footer colophon
│   │   ├── Hero.jsx           # Squircle avatar, Nairobi real-time clock, above-fold actions
│   │   ├── Projects.jsx       # Featured case studies container with active skill filter
│   │   └── ProjectWorkbench.jsx # macOS/Linux IDE window frame with interactive tabs
│   ├── constants/
│   │   └── index.js           # Centralized DRY configuration data
│   ├── hooks/
│   │   ├── useNairobiClock.js # Real-time ticking EAT (UTC+3) clock hook
│   │   └── useSpotlight.js    # Cursor-proximity radial spotlight physics hook
│   ├── App.jsx                # Root layout with blueprint dot-matrix canvas
│   ├── index.css              # Tailwind v4 imports, focus rings & a11y motion rules
│   └── main.jsx               # React 19 root entry point
├── index.html                 # Semantic document with complete Open Graph & SEO tags
├── package.json               # Dependencies and scripts
└── README.md                  # Engineering documentation
```

---

## 🚀 Local Development & Build

### Prerequisites
- Node.js (v18+ recommended)
- npm (v9+)

### Installation
```bash
# Clone the repository
git clone https://github.com/OsebeMoses/portfolio.git

# Navigate to project directory
cd portfolio

# Install dependencies
npm install
```

### Running Locally
```bash
# Start Vite development server
npm run dev
```
Open `http://localhost:5173` in your browser.

### Verification & Linting
```bash
# Run oxlint for sub-second code quality checks
npm run lint

# Compile production-ready bundle
npm run build
```

---

## 📄 License & Attribution

&copy; 2026 Derrick Osebe. Source code open for review and educational reference under the MIT License.
