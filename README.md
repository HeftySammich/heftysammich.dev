# heftysammich.dev

A minimal, modern personal website built with TypeScript + Vite + Tailwind CSS.

## 🚀 Features

- ✅ **TypeScript** for type safety
- ✅ **Vite** for lightning-fast dev server & builds
- ✅ **Tailwind CSS** for modern styling
- ✅ **Multi-page** support (Home, Blog, Donate)
- ✅ **Zero frameworks** - vanilla TypeScript only
- ✅ **Fully responsive** mobile-first design
- ✅ **Dark theme** with yellow accents
- ✅ **Smooth animations** and hover effects

## 📁 Project Structure

```
heftysammich.dev/
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── Header.ts
│   │   ├── Footer.ts
│   │   └── SocialIcons.ts
│   ├── pages/           # Page content
│   │   ├── home.ts
│   │   ├── blog.ts
│   │   └── donate.ts
│   ├── main.ts          # Home page entry
│   ├── blog.ts          # Blog page entry
│   ├── donate.ts        # Donate page entry
│   └── style.css        # Global styles + Tailwind
├── index.html           # Home page
├── blog.html            # Blog page
├── donate.html          # Donate page
└── vite.config.ts       # Multi-page config
```

## 🛠️ Development

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

## 🌐 Pages

- **Home** (`/`) - Link tree with bio and social links
- **Blog** (`/blog.html`) - Developer log and posts
- **Donate** (`/donate.html`) - Support options (crypto & fiat)

## 🎨 Customization

### Colors
Edit `tailwind.config.js`:
```js
colors: {
  'bg-dark': '#222222',      // Background
  'accent-yellow': '#FFCE56', // Accent color
}
```

### Links
Edit `src/pages/home.ts` - update the `links` array.

### Social Icons
Edit `src/components/SocialIcons.ts` - update the `icons` array.

## 📦 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# Upload the `dist` folder to Netlify
```

### GitHub Pages
```bash
npm run build
# Push the `dist` folder to gh-pages branch
```

## 🔧 Tech Stack

- **TypeScript** - Type-safe JavaScript
- **Vite** - Next-gen frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **No frameworks** - Pure vanilla TypeScript

## 📝 License

MIT - Do whatever you want with it!

## 🙏 Credits

Built by [Dave](https://github.com/heftysammich)

