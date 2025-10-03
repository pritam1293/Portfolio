# 🚀 Personal Portfolio Website

A modern, responsive portfolio website built with React.js and Tailwind CSS showcasing my journey as a Full Stack Developer and competitive programmer.

## 🌟 Live Demo

**🔗 [Visit Portfolio Website](https://pritam-behera.vercel.app)**

Deployed on Vercel with automatic CI/CD integration.

## 👨‍💻 About Me

**Pritam** | Final Year B.Tech Student at **NIT Rourkela**  
Full Stack Developer & Competitive Programming Enthusiast

### 🏆 Competitive Programming Achievements

- **LeetCode**: Knight Badge Holder | Rating: 2022 | Top 2.22% globally
- **CodeChef**: 3⭐ Star | Max Rating: 1737
- **Codeforces**: Specialist | Max Rating: 1479
- **AtCoder**: 6 Kyu | Rating: 885
- **1200+ Problems** solved across all platforms

### 🔗 Competitive Programming Profiles

- [LeetCode](https://leetcode.com/u/Pritam1293/)
- [CodeChef](https://www.codechef.com/users/pritam1293)
- [Codeforces](https://codeforces.com/profile/pritam1293)
- [AtCoder](https://atcoder.jp/users/pritam1293)

## 🛠️ Tech Stack

### Frontend

- **React.js** - Component-based UI development
- **React Router DOM** - Single Page Application routing
- **HTML5 & CSS3** - Semantic markup and styling
- **Tailwind CSS** - Utility-first CSS framework
- **JavaScript ES6+** - Modern JavaScript features

### Backend & Tools

- **Spring Boot** - Java-based backend framework
- **Git & GitHub** - Version control and collaboration
- **Java** - Object-oriented programming
- **C++** - Competitive programming and algorithms

## ✨ Features Implemented

### 🎨 UI/UX Features

- **Custom Dark Theme** with gradient backgrounds
- **Professional Color Palette**: #FAFAFA, #010106, #212442, #5D27BE, #8B6953, #B9AFBB
- **Responsive Design** for all screen sizes
- **Smooth Animations** and transitions
- **Professional Typography** with modern fonts

### 🧭 Navigation System

- **React Router** implementation for multi-page navigation
- **Active Link Highlighting** shows current page
- **Smooth Hover Effects** with color transitions
- **Fixed Navigation Bar** with 3D shadow effects
- **No Page Refresh** navigation for better UX

### 🏠 Home Page

- **Hero Section** with professional layout
- **Animated Background** with gradient blobs
- **Side-by-side Design** (text left, profile image right)
- **Profile Photo** with circular gradient border
- **Call-to-Action Buttons** with navigation to Projects and Contact
- **Social Media Links** with hover animations
- **Staggered Entrance Animations** for all elements

### 📄 About Page

- **Personal Journey** section with storytelling and animations
- **Quick Profile Stats** with animated counters
- **Technical Skills Showcase** with:
  - Categorized skill cards (Frontend, Backend, Tools)
  - Pop-up animations on scroll
  - Visual skill icons
- **Competitive Programming Section** with:
  - Platform-wise statistics (LeetCode, CodeChef, Codeforces, AtCoder)
  - Achievement highlights with logos
  - Direct profile links with images
  - Visual rating displays
- **Intersection Observer** for scroll-triggered animations
- **Staggered animations** for smooth UX

### 💼 Projects Page

- **Featured Projects Section** showcasing major work:
  - **AlgoBoard**: Full-stack competitive programming analytics platform
  - **Parking Lot Management**: Smart parking system with admin dashboard
- **Project Cards** with:
  - Tech stack badges
  - Key highlights with metrics
  - GitHub repository links
  - Custom icons and gradients
  - Alternating slide-in animations (left/right)
- **Additional Projects** callout with GitHub repositories link
- **Responsive Grid Layout** for all screen sizes

### 📞 Contact Page

- **Contact Information Cards** with:
  - Email with mailto link
  - Phone with tel link
  - LinkedIn profile
  - Custom icons and color-coded gradients
- **Social Media Links** with:
  - GitHub (@pritam1293)
  - Instagram (@pritam\_\_085)
  - X/Twitter (@Halandowski)
  - Platform-specific icons
  - Hover animations and effects
- **Animated Entrance** with staggered delays
- **Professional CTA** encouraging collaboration

### 🎯 Advanced React Patterns

- **useState Hooks** for state management across all pages
- **useEffect Hooks** for lifecycle management and observers
- **useLocation Hook** for active route detection in Navbar
- **useNavigate Hook** for programmatic navigation
- **useRef Hooks** for DOM element references
- **Intersection Observer API** for scroll-triggered animations
- **Custom Component Functions** for reusability
- **Array Mapping** for dynamic content rendering
- **Conditional Rendering** based on state and props
- **Event Handling** for interactive elements and navigation
- **Staggered Animations** with setTimeout patterns
- **Helper Functions** for DRY code (triggerStaggeredAnimation)

### 🎨 Animation Features

- **Scroll-Triggered Animations** using Intersection Observer
- **Staggered Entry Animations** for sequential element reveals
- **Fade-in Effects** with opacity transitions
- **Slide Animations** (left, right, up, down)
- **Scale Transformations** for pop-up effects
- **Hover Animations** on buttons, cards, and links
- **Smooth Transitions** with 700ms duration consistency
- **Background Gradient Animations** with pulse effects

## 📁 Project Structure

```
Portfolio/
├── frontend/
│   ├── public/
│   │   ├── images/
│   │   │   └── profile-photo.png
│   │   ├── index.html
│   │   └── manifest.json
│   ├── src/
│   │   ├── components/
│   │   │   └── Navbar.js
│   │   ├── pages/
│   │   │   ├── Home.js
│   │   │   ├── About.js
│   │   │   ├── Projects.js
│   │   │   └── Contact.js
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   ├── package.json
│   └── tailwind.config.js
└── backend/ (Future implementation)
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/pritam1293/Portfolio.git
   cd Portfolio/frontend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Install React Router**

   ```bash
   npm install react-router-dom
   ```

4. **Start development server**

   ```bash
   npm start
   ```

5. **Open browser**
   ```
   http://localhost:3000
   ```

## 🎨 Design System

### Color Palette

- **Background**: Gradient dark theme with slate-900, purple-900
- **Primary Gradients**:
  - Purple to Pink: `from-purple-400 via-pink-400 to-orange-400`
  - Blue to Purple: `from-blue-400 via-purple-400 to-pink-400`
- **Accent Colors**:
  - Purple: `#8B5CF6` (purple-500)
  - Pink: `#EC4899` (pink-500)
  - Orange: `#F97316` (orange-500)
  - Cyan: `#06B6D4` (cyan-500)
- **Text Colors**:
  - Primary: `#F8FAFC` (slate-100)
  - Secondary: `#CBD5E1` (slate-300)
  - Muted: `#94A3B8` (slate-400)
- **Card Backgrounds**: Semi-transparent with backdrop blur
  - Purple: `from-purple-900/40 to-purple-800/40`
  - Cyan: `from-cyan-900/40 to-cyan-800/40`
  - Slate: `from-slate-800/50 to-slate-900/50`

### Typography

- **Font Family**: System fonts stack (-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto')
- **Heading Sizes**:
  - Hero: `text-7xl` (4.5rem)
  - Section: `text-6xl` (3.75rem)
  - Subsection: `text-3xl` (1.875rem)
- **Body Text**: `text-xl` (1.25rem) with relaxed line height
- **Font Weights**: Bold (700), Semibold (600), Medium (500), Regular (400), Light (300)

## 📱 Responsive Design

- **Desktop (lg)**: Multi-column grid layouts with optimal spacing
- **Tablet (md)**: Stacked layouts with maintained card designs
- **Mobile (sm)**: Single column with touch-friendly navigation
- **Breakpoints**: Tailwind CSS standard breakpoints
  - sm: 640px
  - md: 768px
  - lg: 1024px
  - xl: 1280px

## 🚀 Deployment

- **Platform**: Vercel
- **Build Command**: `npm run build`
- **Output Directory**: `build`
- **Node Version**: 18.x
- **Automatic Deployments**: Enabled for main branch
- **Custom Domain**: portfolio-pritam-behera.vercel.app

## 🔮 Future Enhancements

### Planned Features

- [ ] **Contact Form** with email integration and validation
- [ ] **Mobile Hamburger Menu** for improved mobile navigation
- [ ] **Dark/Light Mode Toggle** for user preference
- [ ] **Blog Section** for technical articles and tutorials
- [ ] **Backend Integration** with Spring Boot for dynamic content
- [ ] **Database Integration** for project and blog management
- [ ] **Admin Panel** for content management

### Technical Improvements

- [ ] **Performance Optimization** with code splitting and lazy loading
- [ ] **SEO Optimization** with meta tags and structured data
- [ ] **PWA Features** for offline support and mobile app experience
- [ ] **Automated Testing** with Jest and React Testing Library
- [ ] **TypeScript Migration** for better type safety and developer experience
- [ ] **Analytics Integration** to track visitor engagement

## 🤝 Connect With Me

- **Portfolio**: [portfolio-pritam-behera.vercel.app](https://portfolio-pritam-behera.vercel.app)
- **GitHub**: [pritam1293](https://github.com/pritam1293)
- **LinkedIn**: [pritam-behera](https://www.linkedin.com/in/pritam-behera/)
- **Email**: beherapritam2003@gmail.com
- **Instagram**: [@pritam\_\_085](https://www.instagram.com/pritam__085)
- **X (Twitter)**: [@Halandowski](https://twitter.com/Halandowski)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **NIT Rourkela** for providing excellent technical education
- **React Community** for comprehensive documentation
- **Competitive Programming Platforms** for skill development opportunities
- **Open Source Community** for inspiration and best practices

---

⭐ **Star this repository** if you found it helpful!

**Built with ❤️ by Pritam | B.Tech Final Year | NIT Rourkela**
