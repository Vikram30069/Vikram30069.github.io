# Vikram Banerjee — Signal vs. Noise Portfolio

An art-directed, FWA / Awwwards-caliber digital portfolio engineered for **Vikram Banerjee** (Dual-degree undergraduate: B.Sc. Data Science & Applications at **IIT Madras** + B.E. Computer Science & Engineering at **Matrusri Engineering College**, Hyderabad).

Built around the core architectural thesis: **"Signal vs. Noise"** — isolating critical micro-deviations (coercion in UPI payments, trapped disaster survivors in multi-agent routing, or spoofed facial vectors) inside a flood of ordinary telemetry.

---

## Curated Photography & Art Direction

### 1. Photo Selection Rationale
Among the 5 photographs provided, **Photo 2 (The 1024×1024 Studio Portrait in Black Shirt)** was selected as the definitive master portrait:
- **Presence & Seniority**: Direct, confident gaze with balanced studio lighting and dark tailored shirt; immediately projects technical competence, credibility, and authority to hiring managers and researchers.
- **Signal-Aligned Art Direction**: The portrait was enhanced into an editorial studio presentation (`/public/assets/vikram_portrait_editorial.jpg`) that introduces subtle cyan/blue signal wave bokeh and deep obsidian tonal grading, integrating into the WebGL signal matrix.
- **Authentic Field Proofs**:
  - The real **Paytm Hackathon Desk Photo** (`/public/assets/vikram_paytm_hackathon.png`) is integrated into the *About / Proof of Work* panel to provide photographic proof of Vikram prototyping Datadrishti on-site.
  - The **Pair Programming Hackathon Photo** (`/public/assets/vikram_pair_programming.png`) is preserved in the assets directory.

### 2. Live Photo Mode Switcher
The Hero photo frame features a real-time toggle:
- `[SIGNAL [ART]]`: The art-directed editorial portrait with signal bokeh depth.
- `[RAW [ORIGINAL]]`: The authentic unedited studio photograph (`/public/assets/vikram_portrait_original.jpg`).

### 3. How to Swap in a Real Photo
To update or swap Vikram's photo:
1. Place your new image in `/public/assets/` (e.g. `/public/assets/my_new_photo.jpg`).
2. Open [`src/components/HeroSection.jsx`](src/components/HeroSection.jsx) and locate the marked comment:
   ```jsx
   // ============================================================
   // PHOTO CONTAINER: Art-directed portrait frame.
   // To swap in a new photo, replace the image paths below:
   // ============================================================
   <img
     src={photoMode === 'editorial' ? '/assets/vikram_portrait_editorial.jpg' : '/assets/vikram_portrait_original.jpg'}
     alt="Vikram Banerjee"
   />
   ```
3. Update the `src` attribute with your new image path.

---

## Tech Stack & Architecture

- **Runtime & Bundler**: Vite 8 + React 19
- **3D WebGL Layer**: Custom Three.js particle tensor field featuring cursor-reactive wave deformation and real-time alert anomaly spikes.
- **Smooth Inertia Scroll**: Lenis for physical scroll weighting (automatically disabled if `prefers-reduced-motion` is detected).
- **Styling**: Pure CSS Variables design system (`src/index.css`) with zero generic framework defaults.
- **Typography**: Google Fonts — *Space Grotesk* (Display), *Inter* (Body text), and *JetBrains Mono* (Telemetry & indices).

---

## How to Run Locally

### Prerequisites
- Node.js (v18.0.0 or higher)
- npm (v9.0.0 or higher)

### Setup & Launch
```bash
# 1. Navigate to the project directory
cd portfoliowebsite

# 2. Install dependencies (if not already installed)
npm install

# 3. Launch local development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build & Verification
```bash
npm run build
npm run preview
```

---

## Project Structure

```text
portfoliowebsite/
├── public/
│   └── assets/
│       ├── vikram_portrait_editorial.jpg   # Art-directed hero portrait with signal bokeh
│       ├── vikram_portrait_original.jpg    # Authentic high-res studio headshot
│       ├── vikram_paytm_hackathon.png      # On-site Paytm hackathon proof-of-work photo
│       ├── vikram_pair_programming.png     # Pair programming hackathon photo
│       └── vikram_dali_mural.png           # Original user image
├── src/
│   ├── components/
│   │   ├── Navigation.jsx                  # Header with live Hyderabad IST clock & [00]-[06] index
│   │   ├── SignalCanvas3D.jsx              # Three.js WebGL particle tensor & anomaly field
│   │   ├── HeroSection.jsx                 # Orchestrated hero panel with interactive portrait frame
│   │   ├── AboutSection.jsx                # "Signal Thesis" narrative, dual-degree, and photo proof
│   │   ├── SelectedWorkSection.jsx         # Datadrishti risk simulator, RescueNet AI & NodIn
│   │   ├── CapabilitiesSection.jsx         # Grouped technical capability matrix
│   │   ├── ExperienceSection.jsx           # 6 chronological roles with metrics & responsibilities
│   │   ├── EducationSection.jsx            # IIT Madras, Matrusri, AWS certification, IMO/NSO medals
│   │   ├── ContactSection.jsx              # Encrypted transmission console & direct endpoints
│   │   └── Icons.jsx                       # Lightweight SVG vector icons (Github, Linkedin)
│   ├── App.jsx                             # Lenis smooth scroll & scroll-linked story orchestrator
│   ├── index.css                           # Obsidian design system, color tokens, and matrix grid
│   └── main.jsx                            # React root mount
├── index.html                              # Meta tags, custom signal SVG favicon & typography
└── README.md                               # Project documentation
```

---

## Notable Interactive Features

1. **Datadrishti Live Risk Engine Simulator**:
   Users can toggle the 6 calibrated risk signals (Amount Anomaly, Recipient Novelty, Device Novelty, Time, Geo, Velocity Surges) and observe real-time policy shifts:
   - `0–30 PTS`: Frictionless 1-Tap Transfer (Emerald)
   - `31–55 PTS`: Pass-Through Logging (Cyan)
   - `56–80 PTS`: Step-Up Biometrics (Amber)
   - `>80 PTS`: Out-of-Band Hold & Verification (Alert Red `#ff3344`)

2. **RescueNet AI 10-Agent CrewAI Graph**:
   Interactive inspection of the task-context chaining between Triage, Resource Allocator, Hospital Matcher, and Twilio Dispatcher.

3. **NodIn Computer Vision Geofence Simulator**:
   Toggle between *In-Bounds* and *Spoof Anomaly* to preview spatial matrix bounding coordinate validation.

4. **Chitran Institute Shipped Client Telemetry Comparator**:
   Interactive before/after switch comparing *Pre-Deployment [2022]* against *Shipped Client [Live]*:
   - `+120% Student Enrollment Surge`
   - `Rank Math SEO Score`: 98 / 100 (#1-3 Local Search Position in Hyderabad)
   - `Community Growth`: 3,000+ organic students

5. **Hyderabad IST Live Telemetry**:
   Accurate live clock synced with `Asia/Kolkata` time zone directly in the persistent navigation bar.
