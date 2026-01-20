# 🍽️ Tasteful Events - Premium Food & Event Planning Website

A stunning, fully-functional website for a food catering and event planning business. Built with modern web technologies and featuring beautiful animations, responsive design, and a cohesive color scheme.

## ✨ Features

### 🎨 Design Highlights

- **Beautiful Gradient Color Scheme**: Warm amber and rose tones throughout
- **Smooth Animations**: Custom CSS animations including floating elements, slides, and fades
- **Responsive Design**: Perfect display on all devices from mobile to desktop
- **Dark Mode Support**: Full dark theme implementation
- **High-Quality Images**: Professional food and event photography from Unsplash

### 📄 Pages

1. **Home Page** (`/`)
   - Eye-catching hero section with CTA buttons
   - Service cards with hover effects
   - Statistics showcase
   - Client testimonials with ratings
   - Event gallery preview
   - Newsletter signup

2. **About Page** (`/about`)
   - Company story and history
   - Core values with icon cards
   - Interactive timeline of milestones
   - Team member profiles with photos
   - Awards and recognition section

3. **Services Page** (`/services`)
   - Detailed service descriptions with images
   - Sample menu categories (Appetizers, Mains, Desserts, Beverages)
   - Three-tier pricing packages (Essential, Premium, Luxury)
   - Feature comparison with checkmarks
   - Customization options

4. **Events Gallery** (`/events`)
   - Filterable event gallery (All, Weddings, Corporate, Private, Galas)
   - Event cards with details (guests, location, category)
   - Interactive filtering system
   - Stats section
   - CTA for new bookings

5. **Contact Page** (`/contact`)
   - Comprehensive contact form with validation
   - Contact information cards (Phone, Email, Location, Hours)
   - Interactive form with success message
   - FAQ section
   - Map placeholder

### 🎯 Key Features

- **Working Navigation**: All links properly connected between pages
- **Smooth Scrolling**: Seamless page transitions
- **Custom Animations**:
  - Floating background elements
  - Slide-in animations
  - Hover effects on cards and buttons
  - Bounce animations on icons
- **Interactive Elements**:
  - Form validation
  - Category filtering
  - Hover states
  - Click animations
- **Accessibility**: Proper ARIA labels and semantic HTML
- **SEO-Friendly**: Proper heading structure and meta information

## 🛠️ Technologies Used

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Images**: Next.js Image component with Unsplash
- **Fonts**: Inter (via next/font)

## 🎨 Color Palette

### Light Mode

- **Primary**: Amber/Orange gradients (`from-amber-600 to-orange-600`)
- **Secondary**: Rose/Pink gradients (`from-rose-500 to-pink-600`)
- **Accent**: Emerald/Teal (`from-emerald-500 to-teal-600`)
- **Background**: Gradient from amber-50 via white to rose-50

### Dark Mode

- **Background**: Gradient from gray-900 via gray-800 to gray-900
- **Text**: White with proper opacity levels
- **Cards**: Gray-800 with subtle borders

## 🚀 Getting Started

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the website.

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
food/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Home page
│   │   ├── about/page.tsx        # About page
│   │   ├── services/page.tsx     # Services/Menu page
│   │   ├── events/page.tsx       # Events gallery page
│   │   ├── contact/page.tsx      # Contact page
│   │   ├── layout.tsx            # Root layout
│   │   └── globals.css           # Global styles & animations
│   ├── components/
│   │   ├── NavBarAndSideBar/
│   │   │   ├── Navbar.tsx        # Navigation bar
│   │   │   └── DrawerNav.tsx     # Mobile menu
│   │   ├── footer/
│   │   │   └── Footer.tsx        # Footer component
│   │   └── ThemeToggle.tsx       # Dark mode toggle
│   └── public/                   # Static assets
├── tailwind.config.ts            # Tailwind configuration
├── next.config.ts                # Next.js configuration
└── package.json                  # Dependencies
```

## 🎭 Custom Animations

The website includes several custom CSS animations defined in `globals.css`:

- `animate-float`: Gentle floating motion (6s)
- `animate-float-delayed`: Delayed floating (8s)
- `animate-slide-in-left`: Slide in from left
- `animate-slide-in-right`: Slide in from right
- `animate-fade-in`: Fade in with upward motion
- `animate-pulse-slow`: Slow pulsing effect
- `animate-bounce-slow`: Gentle bouncing (3s)
- `animate-bounce-delayed`: Delayed bouncing (4s)

## 💡 Customization

### Changing Colors

Update the gradient classes in Tailwind CSS:

- `from-amber-600 to-orange-600` for primary gradient
- `from-rose-500 to-pink-600` for secondary gradient

### Adding New Pages

1. Create new file in `src/app/[page-name]/page.tsx`
2. Add link to navigation in `Navbar.tsx`
3. Add link to footer in `Footer.tsx`

### Modifying Content

- **Services**: Edit arrays in `/services/page.tsx`
- **Team**: Update team array in `/about/page.tsx`
- **Events**: Modify events array in `/events/page.tsx`

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: 1024px - 1280px
- **Large Desktop**: > 1280px

## 🌟 Key Components

### Navbar

- Responsive design with mobile drawer
- Active link highlighting
- Theme toggle integration
- Language menu (optional)

### Footer

- Multi-column layout
- Social media links
- Newsletter subscription
- Contact information
- Quick links navigation

### Service Cards

- Icon with gradient background
- Hover animations
- Detailed features list
- CTA buttons

### Event Cards

- High-quality images
- Category badges
- Guest count and location
- Hover effects with overlay

## 📞 Contact Information

The website includes the following contact details (customize as needed):

- **Phone**: +1 (234) 567-890
- **Email**: info@tastefulevents.com
- **Address**: 123 Culinary Avenue, New York, NY 10001
- **Hours**: Monday-Friday: 9am-6pm, Saturday: 10am-4pm

## 🎯 Performance Optimizations

- Next.js Image optimization
- Lazy loading for images
- CSS animations using GPU acceleration
- Minimized JavaScript bundles
- Optimized font loading

## 📄 License

This project is created for demonstration purposes. Customize and use as needed for your food and event planning business.

## 🤝 Support

For any questions or customization needs, feel free to reach out or create an issue.

---

**Built with ❤️ for food lovers and event planners everywhere**
