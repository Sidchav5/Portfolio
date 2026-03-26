# Personal Portfolio Website

A formal and aesthetic single-page portfolio built with React, Bootstrap, and custom CSS.

## Tech Stack

- React (Create React App)
- Bootstrap + custom CSS
- Node.js / npm tooling

## Run Locally

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm start
```

3. Open:

```text
http://localhost:3000
```

## Production Build

```bash
npm run build
```

## Deploy to Vercel

### Option 1: Vercel Dashboard (easy)

1. Push this project to GitHub.
2. Go to Vercel and click "Add New Project".
3. Import your GitHub repository.
4. Set the project root to `frontend`.
5. Build command: `npm run build`
6. Output directory: `build`
7. Click "Deploy".

### Option 2: Vercel CLI

```bash
npm install -g vercel
cd frontend
vercel
```

When prompted:

- Set up and deploy: `Y`
- Framework: `Create React App` (auto-detected)
- Build command: `npm run build`
- Output directory: `build`

## Notes

- Portfolio content is currently populated from `resume.txt` details.
- You can customize links (LinkedIn, GitHub, project demos) in `src/App.js`.
