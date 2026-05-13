# QBER Website - Multi-Page HTML Structure

## Project Overview
This is a professional B2B presentation website for QBER (Quantum Frequency Resonance Technology) with separate HTML pages for each section, cleaned CSS, and optimized JavaScript.

## File Structure

```
qber-website/
├── index.html              # Homepage
├── applications.html       # Applications & Details
├── literature.html        # Scientific Literature & Research
├── about.html             # About Company & Mission
├── contact.html           # Contact Form & Information
├── style.css              # Main stylesheet (cleaned & optimized)
├── script.js              # Shared JavaScript functionality
└── README.md              # This file
```

## Key Features

### Navigation System
- **Fixed sticky navigation bar** on all pages
- **Responsive mobile menu** with hamburger toggle
- **Dropdown menus** for Applications submenu
- **Direct page links** (no single-page app complexity)
- **URL query parameters** for application filtering (e.g., `applications.html?app=sports`)

### Pages

#### 1. **index.html** - Homepage
- Hero section with animated background
- Key Strengths grid (6 features)
- Core Technology section with SVG wave visualization
- Calls-to-action

#### 2. **applications.html** - Applications Showcase
- 5 main application tiles with clickable detail sections
- Expandable detail pages:
  - Green Energy
  - Sports & Performance
  - Food & Agriculture
  - Healthcare
  - Sleep Quality
- SVG diagrams for each application

#### 3. **literature.html** - Scientific Documentation
- Foundational research articles
- Clinical efficacy studies
- Certifications grid (6 certifications)
- Research material request CTA

#### 4. **about.html** - Company Information
- Company story and founding narrative
- Mission statement
- Core values grid (6 values)
- Technical capabilities section
- Leadership team information

#### 5. **contact.html** - Contact & Partnership
- Contact information (phone, email, location)
- Contact form with validation
- Partnership benefits grid
- FAQ section with 6 common questions

## CSS Improvements

### Cleaned & Organized
- Removed conflicting `.page` class usage from single-page app architecture
- Eliminated `data-page` attribute selectors no longer needed
- Removed unused `.app-detail` display toggling
- Streamlined animation keyframes
- Consolidated redundant selectors

### Responsive Breakpoints
- **Mobile**: 375px - 480px
- **Tablet**: 481px - 1024px
- **Desktop**: 1025px+

### CSS Variables (Root)
- **Colors**: Primary blue (#0099ff), secondary cyan (#00d4ff), dark (#0f1419)
- **Spacing**: Standardized scale from xs (0.5rem) to 2xl (4rem)
- **Shadows**: sm, md, lg for depth
- **Transitions**: fast (0.2s), smooth (0.4s), slow (0.6s)

## JavaScript Functionality

### Core Features
1. **Mobile Menu Toggle**
   - `openNavMenu()` / `closeNavMenu()` functions
   - Responsive breakpoint at 768px
   - Body overflow control for scroll prevention

2. **Form Handling**
   - Contact form validation
   - Email format checking
   - Success/error alerts
   - Form reset after submission

3. **Scroll Animations**
   - Intersection Observer for fade-in effects
   - Smooth scroll behavior
   - Scroll-triggered element animations

4. **Utilities**
   - Query parameter reading for URL filtering
   - Responsive window resize handler
   - Keyboard shortcuts (ESC to close menus)

## Navigation Structure

### Main Menu Links
- Home → `index.html`
- Applications → `applications.html` (with dropdown)
  - Green Energy → `applications.html?app=green-energy`
  - Sports & Performance → `applications.html?app=sports`
  - Food & Agriculture → `applications.html?app=food`
  - Healthcare → `applications.html?app=healthcare`
  - Sleep Quality → `applications.html?app=sleep`
- Literature → `literature.html`
- About → `about.html`
- Contact → `contact.html`

## Installation & Setup

1. **Download all files** to your project directory
2. **Keep file structure intact** - all HTML files in root directory, along with `style.css` and `script.js`
3. **Test locally** using a local server (Python HTTP server or Live Server extension)
4. **Deploy** to your web hosting provider

### Local Testing (Python)
```bash
python -m http.server 8000
# Visit: http://localhost:8000
```

### Local Testing (Node.js)
```bash
npx http-server
# Visit: http://localhost:8080
```

## Compatibility

- **Browsers**: Chrome, Firefox, Safari, Edge (all modern versions)
- **Mobile**: Fully responsive on iOS and Android
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation
- **Performance**: No external dependencies, lightweight CSS/JS

## Customization

### Colors
Edit CSS variables in `style.css` (lines 7-19):
```css
--color-primary: #0099ff;
--color-secondary: #00d4ff;
--color-accent: #ff1493;
```

### Fonts
Modify font declarations (lines 21-22):
```css
--font-display: "Georgia", serif;
--font-body: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
```

### Content
Edit HTML pages directly. All content is straightforward HTML without complex templating.

## Form Submission

The contact form currently logs data to browser console. To enable actual email delivery:

1. **Option A - Formspree** (Easy)
   - Change form action: `action="https://formspree.io/f/YOUR_FORM_ID"`
   - Requires free Formspree account setup

2. **Option B - Backend API**
   - Replace form submission handler in `script.js`
   - Point to your backend endpoint
   - Handle validation server-side

3. **Option C - Email Service**
   - Use EmailJS or similar service
   - Add API credentials to `script.js`

## Performance Optimization

- **CSS**: Minified and organized for fast loading
- **Images**: SVG graphics instead of raster (lighter weight)
- **JavaScript**: Vanilla JS, no frameworks (minimal footprint)
- **Animations**: GPU-accelerated using CSS transforms
- **Loading**: All critical resources inline, defer non-critical JS

## SEO Enhancements

Each page includes:
- Unique `<title>` tag with keywords
- Descriptive `<meta name="description">` tag
- Semantic HTML headings (h1, h2, h3)
- Proper link structure for crawlability
- Mobile-friendly viewport meta tag

## Support & Troubleshooting

### Issue: Menu not working on mobile
- Check that `navToggle` and `navMenu` elements exist
- Verify CSS media queries at 768px breakpoint
- Inspect browser console for JavaScript errors

### Issue: Links not navigating
- Ensure all HTML files are in the same directory as `style.css` and `script.js`
- Check file names match exactly (case-sensitive)
- Verify relative paths in `<link>` and `<script>` tags

### Issue: Form not submitting
- Check browser console for validation errors
- Ensure all required fields are filled
- Verify `id` attributes on form inputs match JavaScript selectors

## License & Usage
All code is provided as-is for QBER's use. Customize as needed for your specific requirements.

## Version History
- **v1.0** - Initial multi-page restructure (May 2024)
  - Split single-page app into separate HTML files
  - Cleaned CSS of conflicting selectors
  - Optimized JavaScript for multi-page architecture
