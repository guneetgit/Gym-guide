# GymGuide — Group Project

## Tech Stack
HTML · CSS · JavaScript 

---

## Folder Structure

```
gym-project/
├── index.html           ← Home page (Member 1)
├── css/
│   └── style.css        ← Shared styles (Member 1 + Member 5)
├── js/
│   ├── navigation.js    ← Active nav + card animations (Member 1)
│   └── filter.js        ← Search/filter bar (Member 5)
├── pages/
│   ├── chest.html       ← Member 2
│   ├── arms.html        ← Member 2
│   ├── legs.html        ← Member 3
│   ├── core.html        ← Member 3
│   ├── back.html        ← Member 4
│   └── shoulders.html   ← Member 4
└── images/
    └── (place your gym photos here)
```

---

## How to Add Your Photos

Each equipment card currently shows a placeholder emoji. To replace it with your real photo:

1. Copy your image into the `images/` folder.
   - Example: `images/chest-press.jpg`

2. Open the relevant page (e.g. `pages/chest.html`).

3. Find the equipment card and replace the `eq-image-placeholder` div with an `<img>` tag:

```html
<!-- BEFORE (placeholder) -->
<div class="eq-image-placeholder">
  🏋️ <span>Chest Press Machine</span>
</div>

<!-- AFTER (real photo) -->
<img src="../images/chest-press.jpg" alt="Chest Press Machine" class="eq-image" />
```

4. The `eq-image` class already handles sizing and aspect ratio — no extra CSS needed.

---

## Member Responsibilities

| Member | Files | Task |
|--------|-------|------|
| 1 (You) | `index.html`, `style.css`, `navigation.js` | Home page, shared styles, nav logic |
| 2 | `pages/chest.html`, `pages/arms.html` | Fill in equipment cards + add real photos |
| 3 | `pages/legs.html`, `pages/core.html` | Fill in equipment cards + add real photos |
| 4 | `pages/back.html`, `pages/shoulders.html` | Fill in equipment cards + add real photos |
| 5 | `filter.js`, `style.css` additions | Search bar, responsive CSS, final polish |

---

## How to Run

No server needed. Just open `index.html` in your browser directly (double-click the file).

For a better experience during development, use VS Code with the **Live Server** extension.

---

## Updating Equipment Info

Each equipment card uses this pattern:

```html
<div class="equipment-card">
  <img src="../images/your-photo.jpg" alt="Machine Name" class="eq-image" />
  <div class="eq-body">
    <div class="eq-name">Machine Name Here</div>
    <div class="eq-target">Primary: Muscle · Secondary: Muscle</div>
    <div class="eq-divider"></div>
    <div class="eq-steps-label">How to perform</div>
    <ul class="eq-steps">
      <li><span class="step-num">1</span>Step 1 description.</li>
      <li><span class="step-num">2</span>Step 2 description.</li>
      <li><span class="step-num">3</span>Step 3 description.</li>
      <li><span class="step-num">4</span>Step 4 description.</li>
    </ul>
    <div class="eq-reps">
      <span class="rep-label">Recommended</span>
      <span class="rep-value">3 Sets × 10–12 Reps</span>
    </div>
  </div>
</div>
```

Just copy-paste this block and fill in the details for each machine.
