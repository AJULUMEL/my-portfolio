# Professional Portfolio Website

A modern, responsive portfolio website built with Next.js 16, Tailwind CSS 4, Framer Motion, TypeScript, and React Icons.

## Overview

This portfolio showcases personal information, skills, projects, and contact links in a clean single-page layout. It is designed mobile-first and optimized for smooth navigation, section-based browsing, and a polished visual style.

## Features

- Modern single-page portfolio layout
- Responsive mobile-first design
- Dark mode toggle
- Smooth scroll navigation with active section highlighting
- Animated sections and interactive UI elements
- Typing effect in the hero section
- Project showcase with screenshot modal
- Contact section with social links
- Optimized for deployment on Vercel and similar platforms

## Sections

1. Hero
2. About
3. Skills
4. Projects
5. Contact
6. Footer

## Tech Stack

- Framework: Next.js 16 (App Router)
- Language: TypeScript
- Styling: Tailwind CSS 4
- Animations: Framer Motion
- Icons: React Icons
- Scroll visibility: react-intersection-observer

## Project Structure

```text
my-portfolio/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── AnimationWrapper.tsx
│   ├── Badge.tsx
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Layout.tsx
│   ├── LoadingSpinner.tsx
│   ├── Navbar.tsx
│   ├── Providers.tsx
│   ├── ScreenshotModal.tsx
│   └── TypingEffect.tsx
├── sections/
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Projects.tsx
│   └── Skills.tsx
├── public/
│   └── screenshots/
└── package.json
```

## Local Development

### Prerequisites

- Node.js 18+
- npm

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

## Production Build

```bash
npm run build
npm start
```

## Deployment

This project can be deployed directly to Vercel.

```bash
npm i -g vercel
vercel
```

## Customization Notes

- Update personal info in `sections/Hero.tsx`
- Update bio and summary in `sections/About.tsx`
- Edit skills in `sections/Skills.tsx`
- Add or replace projects in `sections/Projects.tsx`
- Update contact links in `sections/Contact.tsx`
- Update footer links in `sections/Footer.tsx`

## Performance Notes

- Heavy autoplay video previews were replaced with static screenshots to keep the page lighter.
- Section animations use intersection observer to avoid unnecessary effects off-screen.
- Images use Next.js optimizations where needed.

## Available Scripts

```bash
npm run dev
npm run build
npm start
npm run lint
```

## License

For personal and educational use.
