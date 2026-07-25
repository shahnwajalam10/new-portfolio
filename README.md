# My Portfolio

A modern, interactive personal portfolio website built with React, Vite, and Tailwind CSS. Showcases projects, skills, experience, and provides a way to get in touch.

## Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Interactive Components** - Smooth hover effects, animated transitions, and engaging micro-interactions
- **Dark Theme** - Professional dark mode with accent colors for visual appeal
- **Project Showcase** - Display your best work with descriptions, technologies, and links
- **Skills Section** - Highlight technical expertise with mastery levels
- **Experience Timeline** - Showcase your professional background
- **Smooth Animations** - Page transitions and scroll reveals for polished feel
- **Contact Section** - Easy way for visitors to get in touch
- **Fast Performance** - Built with Vite for lightning-fast development and production builds

## Tech Stack

- **React 19.2** - UI library for building interactive components
- **Vite 7.2** - Next-gen frontend build tool with fast HMR
- **Tailwind CSS 4.1** - Utility-first CSS framework
- **React Router 7.12** - Client-side routing for multi-page experience
- **Framer Motion 12.33** - Animation library for smooth transitions
- **Lucide React 0.562** - Beautiful SVG icon library
- **ESLint** - Code quality and consistency

## Project Structure

```
new-portfolio/
├── src/
│   ├── Components/
│   │   ├── About.jsx          # About me section with bio and stats
│   │   ├── AnimatedBackground.jsx # Animated background effects
│   │   ├── Contact.jsx         # Contact form section
│   │   ├── CustomCursor.jsx    # Custom cursor implementation
│   │   ├── Education.jsx       # Education history
│   │   ├── Experience.jsx      # Work experience timeline
│   │   ├── Footer.jsx          # Footer with links
│   │   ├── Github.jsx          # GitHub integration
│   │   ├── Hero.jsx            # Hero/landing section
│   │   ├── Home.jsx            # Main home page
│   │   ├── LoadingScreen.jsx   # Loading animation
│   │   ├── Navbar.jsx          # Navigation bar
│   │   ├── PageTransition.jsx  # Page transition effects
│   │   ├── Project.jsx         # Project showcase cards
│   │   └── Skill.jsx           # Skills display
│   ├── assets/                 # Images and static assets
│   ├── App.jsx                 # Main app component
│   ├── App.css                 # Global styles
│   ├── main.jsx                # Entry point
│   └── index.css               # Base styles
├── public/                     # Static files
├── package.json               # Project dependencies
├── vite.config.js             # Vite configuration
├── eslint.config.js           # ESLint rules
├── vercel.json                # Vercel deployment config
└── README.md                  # This file
```

## Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd new-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The portfolio will open at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## Customization

### Colors & Styling
The portfolio uses a dark theme with custom accent colors. Modify the color scheme in component files and Tailwind configuration:
- Primary Accent: `#CCFF00` (lime green)
- Secondary Accent: `#FF4D00` (orange)

### Adding Your Content
1. **Projects** - Edit `src/Components/Project.jsx` to add your projects
2. **Skills** - Update `src/Components/Skill.jsx` with your technical skills
3. **Experience** - Modify `src/Components/Experience.jsx` with your work history
4. **About** - Update `src/Components/About.jsx` with your bio and information

### Images & Assets
Place your profile picture and project screenshots in `src/assets/` and reference them in the respective components.

## Deployment

This project is configured for easy deployment on [Vercel](https://vercel.com):

1. Push your repository to GitHub
2. Connect your repo to Vercel
3. Vercel will automatically build and deploy your site

See `vercel.json` for deployment configuration.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Feel free to fork this repository and customize it for your own portfolio!

## License

This project is open source and available for personal use.

---

**Last Updated:** 2026-07-25
