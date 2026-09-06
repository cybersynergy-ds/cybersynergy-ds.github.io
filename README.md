# Portfolio

Personal portfolio site — React + Vite, deployed free on GitHub Pages.

## Run locally

```bash
npm install
npm run dev
```

## Add a new project

Open [src/data/portfolio.js](src/data/portfolio.js) and add a new object to the
top of the `projects` array:

```js
{
  title: "My New Project",
  period: "2026",
  description: "What it does and the interesting part of how you built it.",
  stack: ["Python", "AWS"],
  github: "https://github.com/cybersynergy-ds/my-repo",
  demo: "",           // optional live link
  featured: true,     // optional
},
```

That's it — no other file needs to change. The same file also holds your
work experience, skills, education, and contact info if any of that changes.

## Deploy (first-time setup)

1. Create a new **public** GitHub repo named exactly:
   `cybersynergy-ds.github.io`
   (This special name makes GitHub serve it at the root of your
   `https://cybersynergy-ds.github.io` domain instead of a `/repo-name/` subpath.)

2. Push this project to it:

   ```bash
   git remote add origin https://github.com/cybersynergy-ds/cybersynergy-ds.github.io.git
   git branch -M main
   git push -u origin main
   ```

3. On GitHub: **Settings → Pages → Build and deployment → Source → GitHub
   Actions**. That's a one-time toggle.

4. Push to `main` any time after that (including this first push) and the
   `.github/workflows/deploy.yml` workflow builds and publishes the site
   automatically. Watch progress under the repo's **Actions** tab.

Your site will be live at **https://cybersynergy-ds.github.io**.

## Resume file

`public/resume.pdf` is served at `/resume.pdf` and linked from the hero
"Download Resume" button. Replace it with an updated export whenever your
resume changes.
