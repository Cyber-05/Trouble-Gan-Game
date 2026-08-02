# 🎮 Trouble-Gan - Web3 Gaming Website

A modern, high-performance React + TypeScript website showcasing the Trouble-Gan gaming platform with stunning animations and interactive UI.

## 🚀 Live Demo

**Website:** https://trouble-gan-game.web.app

## ✨ Features

- ✅ Custom animated cursor with hover effects
- ✅ Dancing character component with smooth animations
- ✅ Particle effects system (12 optimized particles)
- ✅ Game modes showcase (4 interactive modes)
- ✅ 7 unique faction cards
- ✅ News/Blog section
- ✅ Partner logos carousel
- ✅ Fully responsive design (mobile & desktop)
- ✅ Smooth scrolling & interactions
- ✅ High-performance optimized code

## 🛠️ Tech Stack

- **Frontend:** React 19.2.6
- **Language:** TypeScript 5.9.3
- **Styling:** Tailwind CSS 4.1.17
- **Build Tool:** Vite 7.3.2
- **Hosting:** Google Firebase Hosting (Free)
- **Package Manager:** npm

## 📦 Installation

### Prerequisites
- Node.js 16+ 
- npm 7+

### Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/trouble-gan-game.git
cd trouble-gan-game
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

Visit `http://localhost:5173` in your browser.

## 📝 Available Scripts

```bash
# Development server (hot reload)
npm run dev

# Production build
npm run build

# Deploy to Firebase Hosting
firebase deploy

# Preview production build locally
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── CustomCursor.tsx        # Custom cursor with hover effects
│   ├── DancingCharacter.tsx     # Animated character component
│   ├── Logo.tsx                # Brand logo with gradient
│   └── Particles.tsx           # Particle effect system
├── utils/
│   └── cn.ts                   # Utility for className merging
├── App.tsx                     # Main application component
├── main.tsx                    # React entry point
└── index.css                   # Global styles & animations

public/
└── (static assets)

vite.config.ts                  # Vite configuration
tsconfig.json                   # TypeScript configuration
tailwind.config.ts              # Tailwind CSS configuration
firebase.json                   # Firebase hosting config
```

## 🎯 Performance Optimizations

- Reduced particle count (12 optimized particles)
- Optimized blur effects (70-80px instead of 150-200px)
- Direct DOM manipulation for cursor (no React re-renders)
- Instant scrolling (auto instead of smooth)
- Lazy loading for images
- Single-file production build (~280 KB gzipped)

## 🔒 Security

- No sensitive data in code
- Environment variables support (via .env files)
- Firebase security rules configured
- XSS protection through React's built-in sanitization
- HTTPS/SSL enabled automatically via Firebase Hosting

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Deployment

### Firebase Hosting (Current Setup)

1. Install Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Login to Firebase:
```bash
firebase login
```

3. Deploy:
```bash
npm run build
firebase deploy
```

Your site will be live at: `https://trouble-gan-game.web.app`

## 👨‍💻 Developer

**Developed By:** Kulwanth Kotagiri

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report issues
- Submit pull requests
- Suggest improvements

## 📞 Contact & Links

- **Website:** https://trouble-gan-game.web.app
- **Firebase Console:** https://console.firebase.google.com/project/trouble-gan-game

## 🎨 Design Inspiration

Built with attention to detail and modern web design principles. Features vibrant neon colors, smooth animations, and responsive layouts.

---

Made with ❤️ and chaos
