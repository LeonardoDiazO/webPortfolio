/**
 * Leonardo Díaz - Portfolio Scripts
 * Consolidated and improved for better UX/UI
 */

let menuVisible = false;

// --- Menu Navigation ---
function mostrarOcultarMenu() {
    const nav = document.getElementById("nav");
    const navResponsive = document.querySelector(".nav-responsive");
    if (!nav) return;

    menuVisible = !menuVisible;
    if (menuVisible) {
        nav.classList.add("responsive");
        if (navResponsive) navResponsive.setAttribute("aria-expanded", "true");
    } else {
        nav.classList.remove("responsive");
        if (navResponsive) navResponsive.setAttribute("aria-expanded", "false");
    }
}

function seleccionar() {
    const nav = document.getElementById("nav");
    const navResponsive = document.querySelector(".nav-responsive");
    if (nav) nav.classList.remove('responsive');
    if (navResponsive) navResponsive.setAttribute("aria-expanded", "false");
    menuVisible = false;
}

// --- Skill Animations ---
function efectoHabilidades() {
    const skillsSection = document.getElementById("skills");
    if (!skillsSection) return;

    const distancia_skills = window.innerHeight - skillsSection.getBoundingClientRect().top;

    if (distancia_skills >= 300) {
        document.querySelectorAll(".skills .barra-skill .progreso").forEach(progreso => {
            if (!progreso.dataset.animated) {
                const percent = progreso.getAttribute("data-percent") || 0;
                progreso.style.width = percent + "%";
                progreso.dataset.animated = "true";
            }
        });
    }
}

// --- Theme & Language Toggles ---
document.addEventListener('DOMContentLoaded', () => {
    // Theme Logic
    const themeToggle = document.getElementById('theme-toggle');
    const updateThemeUI = (theme) => {
        document.body.classList.toggle('light-theme', theme === 'light');
        localStorage.setItem('theme', theme);

        // Update toggle buttons
        if (themeToggle) {
            themeToggle.querySelectorAll('.toggle-btn').forEach(btn => {
                const isActive = btn.dataset.theme === theme;
                btn.classList.toggle('active', isActive);
                btn.setAttribute('aria-checked', isActive);
            });
        }
    };

    const savedTheme = localStorage.getItem('theme') || 'dark';
    updateThemeUI(savedTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', (e) => {
            const btn = e.target.closest('.toggle-btn');
            if (btn) updateThemeUI(btn.dataset.theme);
        });
    }

    // Language Logic
    const langToggle = document.getElementById('lang-toggle');
    const updateLangUI = (lang) => {
        localStorage.setItem('lang', lang);

        // Update toggle buttons
        if (langToggle) {
            langToggle.querySelectorAll('.toggle-btn').forEach(btn => {
                const isActive = btn.dataset.lang === lang;
                btn.classList.toggle('active', isActive);
                btn.setAttribute('aria-checked', isActive);
            });
        }

        if (typeof changeLanguage === 'function') changeLanguage();
    };

    const savedLang = localStorage.getItem('lang') || 'es';
    updateLangUI(savedLang);

    if (langToggle) {
        langToggle.addEventListener('click', (e) => {
            const btn = e.target.closest('.toggle-btn');
            if (btn) updateLangUI(btn.dataset.lang);
        });
    }

    // --- Init AOS ---
    if (window.AOS) {
        window.AOS.init({
            duration: 800,
            once: true,
            easing: 'ease-in-out'
        });
    }

    // --- WhatsApp Logic (Floating Button) ---
    const whatsappFloat = document.getElementById("whatsapp-float");
    if (whatsappFloat) {
        whatsappFloat.addEventListener("click", (e) => {
            e.preventDefault();
            const phoneNumber = "573504974914";
            const currentLang = localStorage.getItem('lang') || 'es';
            const msgKey = "whatsapp.message";
            const message = encodeURIComponent(window.t ? window.t(currentLang, msgKey) : "Hola Leonardo, me gustaría contactarte desde tu portfolio.");
            window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
        });
    }

    efectoHabilidades();
});

// --- Scroll Handling ---
window.addEventListener('scroll', () => {
    efectoHabilidades();

    // Scroll progress bar
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    const progressBar = document.querySelector('.scroll-progress');
    if (progressBar) {
        progressBar.style.width = scrolled + '%';
    }
});

// Global function (called from index.html scripts or other places)
function changeLanguage() {
    const selectedLang = localStorage.getItem('lang') || 'es';

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (window.t) {
            const val = window.t(selectedLang, key);
            if (val) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = val;
                } else {
                    // Preservar iconos si existen
                    const icon = el.querySelector('i');
                    el.textContent = val;
                    if (icon) el.appendChild(icon);
                }
            }
        }
    });
}
