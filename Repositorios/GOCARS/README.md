# GOCARS - Modern Car Dealership Website

A premium, modern car dealership website built with Astro, TypeScript, and Tailwind CSS. Features a complete catalog system with advanced filtering, vehicle detail pages, and responsive design.

![GOCARS Screenshot](https://via.placeholder.com/800x400?text=GOCARS+Modern+Car+Dealership)

## ✨ Features

### 🚗 Comprehensive Vehicle Catalog
- **12+ Premium Vehicles**: Curated selection of modern cars with detailed specifications
- **Advanced Filtering**: Filter by brand, year, fuel type, transmission, and price range
- **Real-time Search**: Dynamic filtering with instant results
- **Price Range Slider**: Interactive CLP price filtering with visual feedback
- **Sorting Options**: Sort by price, year, mileage, and relevance

### 📱 Modern User Experience
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Premium Design**: Clean, modern interface with smooth animations
- **Interactive Elements**: Hover effects, transitions, and micro-interactions
- **Accessibility**: WCAG compliant with proper semantic HTML

### 🔍 Vehicle Detail Pages
- **Dynamic Routing**: SEO-friendly URLs using vehicle slugs (e.g., `/vehiculos/toyota-corolla-2024`)
- **Image Galleries**: Multiple high-quality images with thumbnail navigation
- **Complete Specifications**: Engine, transmission, fuel type, mileage, and more
- **Features List**: Comprehensive equipment and safety features
- **WhatsApp Integration**: Direct contact for each vehicle
- **Similar Vehicles**: AI-powered recommendations

### 🛠 Technical Excellence
- **Static Site Generation**: Lightning-fast loading times with Astro
- **TypeScript**: Type-safe development with full IntelliSense support
- **Tailwind CSS**: Utility-first CSS with custom design system
- **SEO Optimized**: Meta tags, structured data, and semantic HTML
- **Performance First**: Optimized images, lazy loading, and minimal JavaScript

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/gocars.git
   cd gocars
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:4321
   ```

## 📁 Project Structure

```text
/
├── public/                    # Static assets
│   ├── favicon.svg
│   └── images/               # Vehicle images
├── src/
│   ├── components/           # Reusable components
│   │   └── CarCard.astro    # Vehicle card component
│   ├── data/
│   │   └── cars.js          # Vehicle data
│   ├── layouts/
│   │   └── Layout.astro     # Base layout
│   ├── lib/
│   │   └── slug.ts          # URL slug utilities
│   ├── pages/
│   │   ├── index.astro      # Homepage
│   │   ├── catalogo.astro   # Catalog page
│   │   ├── 404.astro        # Error page
│   │   └── vehiculos/
│   │       └── [slug].astro # Dynamic vehicle pages
│   └── styles/
├── astro.config.mjs         # Astro configuration
├── tailwind.config.mjs      # Tailwind configuration
└── tsconfig.json           # TypeScript configuration
```

## 🎨 Design System

### Color Palette
```scss
// Primary Colors
primary-600: #1e40af    // Main brand color
primary-700: #1d4ed8    // Hover states

// Accent Colors  
accent-500: #fbbf24     // Call-to-action elements
accent-600: #f59e0b     // Hover states

// Neutral Colors
neutral-50: #f8fafc     // Background
neutral-900: #0f172a    // Text
```

### Typography
- **Display Font**: Plus Jakarta Sans
- **Body Font**: Inter
- **Font Sizes**: Responsive scale from 14px to 72px

### Components
- **Cards**: Rounded corners with subtle shadows
- **Buttons**: Multiple variants with hover animations
- **Forms**: Clean inputs with focus states
- **Navigation**: Responsive with mobile menu

## 📊 Vehicle Data Structure

Each vehicle in the catalog includes:

```typescript
interface Car {
  id: number;
  brand: string;          // e.g., "Toyota"
  model: string;          // e.g., "Corolla"
  year: number;           // e.g., 2024
  price: number;          // Price in CLP
  originalPrice?: number; // For discount calculations
  mileage: number;        // Kilometers
  fuel: string;           // "Gasolina", "Híbrido", "Eléctrico"
  transmission: string;   // "Manual", "Automática", "CVT"
  color: string;          // Vehicle color
  engine: string;         // Engine specifications
  doors: number;          // Number of doors
  description: string;    // Marketing description
  images: string[];       // Array of image URLs
  features: string[];     // List of features
  whatsappMessage: string;// Pre-filled WhatsApp message
}
```

## 🛠 Development Commands

| Command | Action |
|---------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | Start development server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |
| `npm run astro check` | Check for TypeScript errors |

## 🚀 Deployment

### Static Hosting (Recommended)
The project is configured for static site generation:

```javascript
// astro.config.mjs
export default defineConfig({
  output: 'static',
  site: 'https://gocars.cl'
});
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Upload ./dist/ folder to Netlify
```

### Deploy to GitHub Pages
```bash
npm run build
# Configure GitHub Pages to serve from ./dist/
```

## 🔧 Configuration

### Environment Variables
Create a `.env` file for customization:

```env
# Site Configuration
SITE_URL=https://gocars.cl
SITE_NAME=GOCARS

# Contact Information
WHATSAPP_NUMBER=56912345678
CONTACT_EMAIL=info@gocars.cl

# Analytics (Optional)
GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID
```

### Tailwind Customization
Modify `tailwind.config.mjs` to customize:
- Colors
- Fonts
- Animations
- Breakpoints
- Spacing

### Adding New Vehicles
Edit `src/data/cars.js` to add new vehicles:

```javascript
export const cars = [
  {
    id: 13,
    brand: 'BMW',
    model: 'X3',
    year: 2024,
    price: 45000000,
    // ... other properties
  }
];
```

## 📈 Performance

### Lighthouse Scores
- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

### Optimization Features
- **Image Optimization**: WebP format with lazy loading
- **Code Splitting**: Automatic JavaScript chunking
- **CSS Purging**: Unused styles removed in production
- **Prefetching**: Critical resources preloaded

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

### Documentation
- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

### Contact
- **Website**: https://gocars.cl
- **Email**: info@gocars.cl  
- **WhatsApp**: +56 9 1234 5678

---

**Built with ❤️ using Astro, TypeScript, and Tailwind CSS**