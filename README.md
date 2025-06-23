# Personal Portfolio – George Williams V

Welcome to the source code for my personal developer portfolio. Built with **React**, **TypeScript**, and **Tailwind CSS**, this project was an exercise to get some practice in with Front End technologies

---

## 🚀 Live Site

🌐 [georgewilliamsv5.com](https://georgewilliamsv5.com)  
📂 [Resume (PDF)](public/resume.pdf)

---

## 🛠️ Tech Stack

- **Framework:** React
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Tooling:** Vite, PostCSS
- **CI/CD:** GitHub Actions (planned)
- **Hosting:** AWS (S3 + CloudFront)

---

## 📁 Project Structure

website-v2/
├── public/                  # Static assets (images, resume.pdf, etc.)
│   ├── images/
│   └── resume.pdf
├── src/                     # Application source code
│   ├── components/          # Reusable React components
│   │   ├── About.tsx
│   │   ├── Navbar.tsx
│   │   ├── ProjectCard.tsx
│   │   └── ...
│   ├── App.tsx              # Main app component
│   ├── index.css            # Tailwind styles + base layer
│   ├── main.tsx             # Vite entry point
│   └── vite-env.d.ts
├── .gitignore
├── index.html               # HTML entry point
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── README.md

---

## 🧪 Running Locally

1. **Clone the repo:**
   `git clone git@github.com:georgewilliamsv5/website-v2.git`
   `cd website-v2`

2. **Install Dependencies**
   `npm install`

3. **Start the dev server**
   `npm run dev`

---

## 🗺️ Roadmap

Planned improvements and additions:

- [ ] **Improve Scrolling on various window sizes**
- [ ] **Light/Dark Mode Toggle**
- [ ] **Blog Section** — Add long-form posts on engineering, career, and tooling
- [ ] **CI/CD Pipeline** — Automate deployments to AWS with GitHub Actions
