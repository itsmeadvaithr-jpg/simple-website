# LaunchPad - Modern Website (Powered by Vite)

A fast, responsive, and modern website built with **Vite**, HTML5, CSS3, and ES Modules JavaScript.

## 🚀 Key Features

- **Lightning Fast**: Powered by Vite with Instant Hot Module Replacement (HMR).
- **Light & Dark Mode**: Instant theme switching saved in `localStorage`.
- **Fully Responsive**: Adapts seamlessly to mobile, tablet, and desktop viewports.
- **Interactive Components**:
  - Live click counter widget.
  - Interactive contact form with client-side feedback.
  - Responsive mobile drawer navigation.
  - Smooth scrolling and hover animations.
- **Production-Ready**: Builds an optimized, minified bundle with Rollup.

---

## 📁 Project Structure

```text
WORKSHOP/
├── index.html         # Main entry point for Vite
├── package.json       # Project dependencies and scripts
├── vite.config.js     # Vite configuration
├── .gitignore         # Git ignore rules
├── README.md          # Project guide
├── dist/              # Production build output
└── src/
    ├── main.js        # Core JavaScript application logic
    └── style.css      # Modern styling and CSS variables
```

---

## 🛠️ Available Scripts

In PowerShell or your terminal, run the following commands:

### 1. Start Development Server
Starts the local development server with Hot Module Replacement (HMR):
```powershell
npm run dev
```
> Opens automatically at `http://localhost:5173`

### 2. Build for Production
Bundles and minifies assets into the `dist/` folder:
```powershell
npm run build
```

### 3. Preview Production Build
Locally previews the production build in the `dist/` folder:
```powershell
npm run preview
```
