# Leonardo Díaz - Professional Web Portfolio

Professional portfolio of **Leonardo Díaz**, a Systems Engineer and Full Stack Developer. This web application showcases my projects, skills, and experience with a modern, high-performance, and responsive design.

![Portfolio Preview](https://leonardodiaz.dev/img/og-preview.png)

## Key Features

- **Multi-language Support**: Fully bilingual engine (English/Spanish) with dynamic content translation via `data-i18n` attributes.
- **Dynamic Themes**: Dark and Light mode toggles with persistent user preference via `localStorage`.
- **Fully Responsive**: Optimized for desktop, tablet, and mobile with a hamburger menu for small screens.
- **Modern UX/UI**: Glassmorphism effects, scroll animations (AOS), skill bar animations, and micro-interactions.
- **Accessible Design**: Semantic HTML5, ARIA compliance, keyboard focus states, and a skip-to-content link for screen readers.
- **Scroll Progress Bar**: Fixed top bar that reflects reading progress on the page.
- **Direct Communication**: Floating WhatsApp button with bilingual pre-filled messages.

## Tech Stack

- **Core**: HTML5, CSS3, Vanilla JavaScript (ES6+)
- **Animations**: [AOS 2.3.4](https://michalsnik.github.io/aos/)
- **Icons**: [Font Awesome 6.7.2](https://fontawesome.com/)
- **Typography**: [Work Sans + Righteous](https://fonts.google.com/) via Google Fonts

## Project Structure

```
├── css/
│   └── css.css          # Main stylesheet & design system (CSS variables, theming)
├── img/                 # Assets and project screenshots
├── script/
│   ├── translations.js  # Bilingual content engine (ES/EN)
│   └── scripts.js       # Application logic (theme, language, animations, scroll)
└── index.html           # Entry point
```

## Performance Decisions

- **`IntersectionObserver`** used for skill bar animations instead of `getBoundingClientRect` on every scroll event.
- **`requestAnimationFrame`** wraps the scroll progress bar update to avoid layout thrashing.
- Scroll listener registered with **`{ passive: true }`** for better scroll performance.
- The `scroll-progress` DOM element is **cached** outside the scroll handler.
- Images use **`loading="lazy"`** for deferred loading.

## Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/LeonardoDiazO/webPortfolio.git
   ```
2. **Open locally**: Open `index.html` in any modern browser. No build step required.

## Professional Socials

- [LinkedIn](https://www.linkedin.com/in/leonardo-diaz-o/)
- [GitHub](https://github.com/LeonardoDiazO)
- [Instagram](https://www.instagram.com/leonardo.diaz.o/)
- [Facebook](https://www.facebook.com/Leonardo.Diaz.O/)

---
Developed by **Leonardo Díaz** | © 2026
