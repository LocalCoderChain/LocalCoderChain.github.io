# LocalCoderChain Portfolio

**AI Developer • Software Engineer • Research Enthusiast**

A data-driven, recruiter-focused portfolio built with React, TypeScript, TailwindCSS, Vite, and Framer Motion. Deployed via GitHub Pages.

---

## Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 🚀 Deploying to GitHub Pages

### First-time setup

1. **Create the repository** at `https://github.com/LocalCoderChain/LocalCoderChain.github.io`
   - Use the format `<username>.github.io` for a user page (deployed at root `/`)
   - Or any repo name for a project page (deployed at `/<repo-name>/`)

2. **Check `vite.config.ts`:**
   - For a **user page** (`username.github.io`): keep `base: '/'`
   - For a **project page** (`username.github.io/portfolio`): change to `base: '/portfolio/'`

3. **Enable GitHub Pages:**
   - Go to repo → Settings → Pages
   - Source: **GitHub Actions**

4. **Push to main:**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git remote add origin https://github.com/LocalCoderChain/LocalCoderChain.github.io.git
   git push -u origin main
   ```
   GitHub Actions will automatically build and deploy.

### Subsequent deployments
Just push to `main`. The workflow triggers automatically.

```bash
git add .
git commit -m "Add new project: my-project"
git push
```

---

## ➕ Adding a New Project

### Step 1 — Create the asset folder

```
public/projects/my-project-id/
├── screenshots/
│   ├── screenshot1.png
│   └── screenshot2.png
├── architecture/
│   └── architecture.png
├── demo.mp4          (optional)
└── report.pdf        (optional)
```

### Step 2 — Add the entry to `src/data/projects.ts`

Copy the template at the top of the file and fill in your details:

```typescript
{
  id: 'my-project-id',           // Must match the folder name in public/projects/
  title: 'My New Project',
  shortDescription: 'One clear sentence describing the project.',
  detailedDescription: `Full paragraph for the detail page.`,
  problemStatement: `What problem were you solving?`,
  solutionApproach: `How did you approach it technically?`,
  keyLearnings: ['Learning one.', 'Learning two.'],
  futureImprovements: ['Next step one.'],
  technologies: ['Python', 'React', 'FastAPI'],
  screenshots: ['screenshot1.png', 'screenshot2.png'],  // filenames only
  architectureDiagrams: ['architecture.png'],
  demoVideo: 'demo.mp4',
  reportPDF: 'report.pdf',
  githubURL: 'https://github.com/LocalCoderChain/my-project',
  featured: true,                // true = shows on homepage
  category: 'AI',               // One of the ProjectCategory types
  tags: ['AI', 'Python'],
  year: 2025,
  status: 'completed',
},
```

### Step 3 — Push

```bash
git add .
git commit -m "Add project: My New Project"
git push
```

Done. No component changes needed.

---

## ➕ Adding a Research Publication

Edit `src/data/publications.ts` and add an entry:

```typescript
{
  id: 'my-paper-2025',
  title: 'Paper Title',
  conference: 'Conference Name',
  year: 2025,
  abstract: 'Abstract text...',
  pdfLink: '/publications/my-paper.pdf',   // place PDF in public/publications/
  doiLink: 'https://doi.org/...',
  authors: ['LocalCoderChain'],
  tags: ['RAG', 'NLP'],
},
```

---

## 🔧 Updating Personal Info

| What | Where |
|------|-------|
| Email, LinkedIn, GitHub, Resume URL | `src/data/contact.ts` |
| Skills | `src/data/skills.ts` |
| Resume PDF | `public/resume/resume.pdf` |
| Favicon | `public/favicon.svg` |

---

## 📁 Project Structure

```
localcoderchain/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions CI/CD
├── public/
│   ├── favicon.svg
│   ├── 404.html                # GitHub Pages SPA redirect
│   ├── resume/
│   │   └── resume.pdf          ← Add your resume here
│   ├── publications/           ← Add research PDFs here
│   └── projects/
│       └── {project-id}/
│           ├── screenshots/
│           ├── architecture/
│           ├── demo.mp4
│           └── report.pdf
├── src/
│   ├── components/             # Reusable UI components
│   │   ├── Navbar.tsx
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── FeaturedProjects.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectGallery.tsx
│   │   ├── VideoPlayer.tsx
│   │   ├── ResearchSection.tsx
│   │   ├── ResumeSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── Footer.tsx
│   ├── data/                   # ← EDIT THESE to update content
│   │   ├── projects.ts
│   │   ├── publications.ts
│   │   ├── skills.ts
│   │   └── contact.ts
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── AllProjectsPage.tsx
│   │   └── ProjectDetailPage.tsx
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

---

## Tech Stack

| Technology | Purpose |
|-----------|---------|
| React 18 | UI framework |
| TypeScript | Type safety |
| TailwindCSS | Styling |
| Framer Motion | Animations |
| React Router v6 | Client-side routing |
| Vite | Build tool |
| GitHub Actions | CI/CD |
| GitHub Pages | Hosting |

---

## Maintenance Philosophy

> **Most updates should only require editing data files.**

- Adding a project → edit `projects.ts`
- Adding a publication → edit `publications.ts`
- Updating skills → edit `skills.ts`
- Updating contact info → edit `contact.ts`
- Component changes are only needed when adding new *types* of sections

The architecture is designed to stay useful for 5+ years without a redesign.
