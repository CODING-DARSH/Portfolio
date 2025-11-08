# Darsh Vithlani — Portfolio


Single-page React + Tailwind portfolio. Ready for local dev and deploy (Vercel/GitHub Pages).


## Setup


1. Install dependencies


```bash
npm install
```


2. Run locally


```bash
npm run dev
# open http://localhost:5173
```


3. Build for production


```bash
npm run build
npm run preview
```


## Deploy


- **Vercel:** Import the repo in Vercel, set framework to "Vite" or leave auto-detect. Deploy.
- **GitHub Pages:** Use a GitHub Actions or deploy the built `dist/` to gh-pages. Vercel is easiest.
```


---


## Run & Deploy notes


1. **Local dev:** `npm install` then `npm run dev`. Vite will start (default port 5173). If your machine blocks the port, change it in the Vite config or run `npm run dev -- --port 3000`.


2. **Profile image & screenshots:** Put your real profile image at `src/assets/placeholder-profile.png` and replace the placeholder `Screenshot` boxes in `Projects.jsx` by adding images into `src/assets/` and updating the `projects` array.


3. **Custom domain / SEO:** If you want, I can add meta tags, Open Graph tags, and an `og:image` generation step.


4. **Tailwind:** This config uses a minimal palette (black/gray/white) tuned for a clean dark look.