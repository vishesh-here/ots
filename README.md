# Own The Story - Website

A responsive, minimalist website for the non-profit organization "Own The Story" - dedicated to empowering underprivileged youth across India through transformative education.

## 🎯 Mission

To own your story is to rise above the script written by circumstance. Own The Story is an all-India, religion-agnostic society committed to transforming the broken educational infrastructure that serves the majority with a minority of resources.

## 🌟 Features

### Design
- **Modern & Minimalist**: Clean, purpose-driven design with elegant typography
- **Responsive**: Fully mobile-responsive design using Tailwind CSS
- **Accessible**: WCAG compliant with proper contrast ratios and semantic HTML
- **Performance**: Optimized loading with smooth animations and transitions

### Color Palette
- **Primary**: #e2725b (Warm coral)
- **Neutrals**: #f8f8f8 (Light gray), #333333 (Dark gray), #ffffff (White)
- **Accent**: Soft gradients and subtle shadows for depth

### Pages

#### 1. Homepage (`index.html`)
- **Hero Section**: Full-screen welcome with inspiring headline and call-to-action
- **Mission Statement**: Centered, impactful description of our purpose
- **Core Values**: Icon-based grid showcasing Equity, Empathy, Self-reliance, and Cultural Pride
- **Founding Call-to-Action**: Emphasis on foundational membership importance

#### 2. About Page (`about.html`)
- **Our Story**: Timeline-style narrative of the organization's genesis
- **Our Approach**: Three-pillar strategy focusing on people, impact, and long-term transformation
- **Visual Timeline**: Interactive timeline with animated elements

#### 3. Join Us Page (`join.html`)
- **Application Form**: Comprehensive form for founding member applications
- **Member Benefits**: Clear explanation of founding member privileges
- **FAQ Section**: Collapsible answers to common questions
- **Testimonials**: Placeholder for future member testimonials

## 🛠 Technical Stack

- **HTML5**: Semantic markup with accessibility in mind
- **Tailwind CSS**: Utility-first CSS framework for rapid development
- **Vanilla JavaScript**: Clean, dependency-free interactions
- **Font Awesome**: Icon library for visual elements
- **Google Fonts**: Inter font family for modern typography

## 📱 Responsive Design

The website is fully responsive across all device sizes:
- **Desktop**: Full-featured experience with hover effects and animations
- **Tablet**: Optimized layout with touch-friendly interactions
- **Mobile**: Streamlined navigation with collapsible menu

## ✨ Interactive Features

### Animations
- **Fade-in on Scroll**: Elements animate into view as user scrolls
- **Floating Elements**: Subtle background animations in hero section
- **Hover Effects**: Interactive buttons and links with smooth transitions

### Navigation
- **Fixed Header**: Always accessible navigation with auto-hide on scroll down
- **Mobile Menu**: Collapsible hamburger menu for mobile devices
- **Smooth Scrolling**: Animated scrolling to anchor sections

### Forms
- **Real-time Validation**: Immediate feedback on form inputs
- **Loading States**: Visual feedback during form submission
- **Success Messages**: Clear confirmation of successful submissions

### FAQ Section
- **Collapsible Answers**: Click to expand/collapse FAQ items
- **Smooth Animations**: Animated transitions for better UX

## 🚀 Getting Started

1. **Clone or Download** the repository
2. **Open `index.html`** in your web browser
3. **Navigate** between pages using the navigation menu

### File Structure
```
own-the-story/
├── index.html          # Homepage
├── about.html          # About page
├── join.html           # Join us page
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🎨 Customization

### Colors
Update the Tailwind configuration in each HTML file to modify the color scheme:
```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#e2725b',        // Main brand color
                'primary-dark': '#d65a42', // Darker variant
                neutral: '#f8f8f8',        // Light background
                dark: '#333333'            // Text color
            }
        }
    }
}
```

### Typography
The website uses the Inter font family. To change fonts, update the Google Fonts link and Tailwind configuration.

### Content
All content can be easily modified by editing the HTML files. Key areas to customize:
- Organization name and branding
- Mission statement and values
- Contact information
- Social media links

## 📧 Form Handling

The contact form currently includes client-side validation and a simulated submission. To implement actual form handling:

1. **Backend Integration**: Connect to your preferred backend service
2. **Email Service**: Integrate with services like EmailJS, Formspree, or Netlify Forms
3. **Database**: Store submissions in your database of choice

## 🔧 Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **Mobile Browsers**: iOS Safari, Chrome Mobile, Samsung Internet
- **Graceful Degradation**: Core functionality works without JavaScript

## 📈 Performance

- **Lightweight**: Minimal dependencies and optimized assets
- **Fast Loading**: Efficient CSS and JavaScript
- **SEO Friendly**: Semantic HTML and proper meta tags
- **Accessibility**: WCAG 2.1 AA compliant

## 🤝 Contributing

This website is designed to be easily maintainable and extensible. When making changes:

1. **Maintain Consistency**: Follow the established design patterns
2. **Test Responsiveness**: Ensure changes work across all device sizes
3. **Validate Code**: Check HTML and CSS validity
4. **Test Accessibility**: Ensure new features are accessible

## 📞 Support

For questions about the website or to report issues, please refer to the contact information provided on the Join Us page.

---

**Own The Story** - Empowering underprivileged youth across India through transformative education and unwavering belief in their potential.

*Let's build something timeless. Let's write a story worth owning.*