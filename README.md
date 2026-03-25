# Modern Portfolio Website

A stunning, highly animated personal portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion. Designed to impress recruiters and showcase technical skills with a premium, futuristic aesthetic.

## Features

- **Modern Design**: Dark theme with neon purple/blue gradient accents
- **Glassmorphism**: Soft shadows and backdrop blur effects
- **Smooth Animations**: Scroll-triggered animations and micro-interactions
- **Responsive Design**: Mobile-first approach with perfect scaling
- **Performance Optimized**: Fast loading with minimal asset usage
- **Interactive Background**: Animated particle system with connections

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS with custom configurations
- **Animations**: Framer Motion
- **Icons**: Lucide React + React Icons
- **Build Tool**: Create React App

## Project Structure

```
portfolio-website/
├── src/
│   ├── components/
│   │   ├── AnimatedBackground.tsx  # Particle animation system
│   │   ├── Navbar.tsx              # Navigation with scroll effects
│   │   ├── Hero.tsx                # Landing section with typing effect
│   │   ├── About.tsx               # About section with skill bars
│   │   ├── Projects.tsx            # Project cards with 3D hover
│   │   ├── Experience.tsx          # Timeline layout
│   │   ├── Skills.tsx              # Categorized tech stack
│   │   └── Contact.tsx             # Contact form with validation
│   ├── App.tsx                     # Main app component
│   ├── index.css                   # Global styles + Tailwind
│   └── index.tsx                   # App entry point
├── tailwind.config.js              # Tailwind configuration
└── package.json                    # Dependencies
```

## Getting Started

### Prerequisites

- Node.js 14+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## Customization

### Personal Information

Update the following files with your information:

- **Hero.tsx**: Change name, tagline, and social links
- **About.tsx**: Update personal description and skills
- **Projects.tsx**: Replace with your actual projects
- **Experience.tsx**: Add your work experience
- **Skills.tsx**: Adjust skill levels and categories
- **Contact.tsx**: Update contact information

### Theme Customization

Modify `tailwind.config.js` to customize:
- Color schemes (neon colors, gradients)
- Animation durations and easing
- Breakpoints and spacing

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add to `App.tsx`
3. Add navigation link in `Navbar.tsx`

## Key Features Explained

### Animated Background
- Canvas-based particle system
- Dynamic connections between particles
- Responsive to window resizing

### Glassmorphism Effects
- Backdrop blur for depth
- Semi-transparent backgrounds
- Soft borders and shadows

### Scroll Animations
- Framer Motion viewport detection
- Staggered animations for visual appeal
- Performance optimized with intersection observer

### Form Validation
- Real-time validation feedback
- Custom error messages
- Loading states and success/error handling

## Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## Deployment

### Netlify
1. Run `npm run build`
2. Upload the `build` folder to Netlify
3. Configure build settings if using Git integration

### Vercel
1. Connect your GitHub repository
2. Vercel will automatically detect and deploy
3. Configure custom domain if needed

### GitHub Pages
1. Install `gh-pages`: `npm install --save-dev gh-pages`
2. Add to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/portfolio-website",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Run `npm run deploy`

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**
