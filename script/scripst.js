let menuVisible = false;

// Función que oculta o muestra el menu
function mostrarOcultarMenu() {
    const nav = document.getElementById("nav");
    if (!nav) return;
    if (menuVisible) {
        nav.classList.remove("responsive");
        menuVisible = false;
    } else {
        nav.classList.add("responsive");
        menuVisible = true;
    }
}

function seleccionar() {
    // oculto el menu una vez que selecciono una opcion
    const nav = document.getElementById("nav");
    if (nav) nav.classList.remove('responsive');
    menuVisible = false;
}

// Función que aplica las animaciones de las habilidades
function efectoHabilidades() {
    const skillsSection = document.getElementById("skills");
    if (!skillsSection) return; // Asegurarse de que la sección exista

    const distancia_skills = window.innerHeight - skillsSection.getBoundingClientRect().top;

    if (distancia_skills >= 300) {
        let progresos = document.querySelectorAll(".skills .barra-skill .progreso");

        progresos.forEach(progreso => {
            // Asegúrate de que solo se anime una vez
            if (!progreso.dataset.animated) {
                const percent = progreso.getAttribute("data-percent");
                progreso.style.width = percent + "%";
                progreso.dataset.animated = "true"; // Marca como animado
            }
        });
    }
}


// ***** Código principal que se ejecuta cuando el DOM está completamente cargado *****
document.addEventListener('DOMContentLoaded', () => {
    // --- Lógica para el cambio de tema ---
    const themeSelect = document.getElementById('theme-select');
    const body = document.body;
    const languageSelector = document.getElementById('language-selector');

    // Función para aplicar el tema
    function applyTheme(theme) {
        if (theme === 'light') {
            body.classList.add('light-theme');
        } else {
            body.classList.remove('light-theme');
        }
        // Guarda la preferencia en localStorage
        localStorage.setItem('theme', theme);
        // Actualiza el selector para que muestre el tema actual
        if (themeSelect) { // Asegura que el selector exista
            themeSelect.value = theme;
        }
    }

    // Cargar el tema guardado al cargar la página
    const savedTheme = localStorage.getItem('theme') || 'dark'; // Por defecto, tema oscuro
    applyTheme(savedTheme);

    // Cargar idioma guardado
    const savedLang = localStorage.getItem('lang') || 'es';
    if (languageSelector) {
        languageSelector.value = savedLang;
        // apply translations immediately
        if (typeof changeLanguage === 'function') changeLanguage();
    }

    // Escuchar cambios en el selector de tema
    if (themeSelect) { // Asegura que el selector exista antes de añadir el listener
        themeSelect.addEventListener('change', (event) => {
            applyTheme(event.target.value);
        });
    }

    if (languageSelector) {
        languageSelector.addEventListener('change', (e) => {
            localStorage.setItem('lang', e.target.value);
            if (typeof changeLanguage === 'function') changeLanguage();
        });
    }

    // --- Inicialización de habilidades al cargar la página ---
    // Esto se ejecuta una vez para animar si ya están en pantalla
    efectoHabilidades();

    // Inicializar AOS (Animate On Scroll) si está disponible
    if (window.AOS && typeof window.AOS.init === 'function') {
        window.AOS.init({
            duration: 800,
            once: true,
            easing: 'ease-in-out'
        });
    }

    // Re-apply translations after everything is initialized to ensure all elements are translated
    if (typeof changeLanguage === 'function') {
        // small timeout to ensure any late DOM changes settle
        setTimeout(() => changeLanguage(), 50);
    }

    // --- Lógica del botón de WhatsApp ---
    const sendWhatsappButton = document.getElementById("send-whatsapp");
    if (sendWhatsappButton) { // Asegura que el botón exista
        sendWhatsappButton.addEventListener("click", function () {
            // Número de WhatsApp al que quieres enviar el mensaje (pon tu número aquí con código de país)
            let phoneNumber = "573016805257"; // Sin + para wa.me

            // Obtener los valores del formulario
            let name = document.getElementById("from_name").value;
            let phone = document.getElementById("from_phone").value;
            let email = document.getElementById("from_email").value;
            let subject = document.getElementById("subject").value;
            let message = document.getElementById("message").value;

            // Crear el mensaje con los datos
            let text = `Hola! Mi nombre es *${name}* (%2B${phone})%0A📧 Email: ${email}%0A📌 Asunto: ${subject}%0A📝 Mensaje: ${message}`;

            // Crear el enlace de WhatsApp
            let whatsappURL = `https://wa.me/${phoneNumber}?text=${text}`;

            // Redirigir al usuario a WhatsApp
            window.open(whatsappURL, "_blank");
        });
    }
});


// --- Detectar el scrolling para aplicar la animación de la barra de habilidades ---
// Esta función se mantiene global y se llama en el evento 'scroll'
window.onscroll = function () {
    efectoHabilidades();

    // Update scroll progress bar
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    const progressBar = document.querySelector('.scroll-progress');
    if (progressBar) {
        progressBar.style.width = scrolled + '%';
    }
};


// --- Tu código de traducción, si lo estás usando ---
// Asegúrate de que 'translations' esté definido en 'translations.js'
// scripts.js
function changeLanguage() {
    const languageSelector = document.getElementById('language-selector');
    const selectedLang = languageSelector ? languageSelector.value : (localStorage.getItem('lang') || 'es');
    localStorage.setItem('lang', selectedLang);

    // Translate any element that has a data-i18n attribute
    const missing = [];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (!key) return;
        if (window.t) {
            const val = window.t(selectedLang, key);
            if (val !== null && val !== undefined) {
                // If it's an input/placeholder target, set placeholder
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = val;
                } else {
                    el.textContent = val;
                }
            } else {
                missing.push(key);
            }
        }
    });
    if (missing.length) {
        // Only warn in dev; this helps find missing keys
        console.warn('Missing translations for keys:', Array.from(new Set(missing)).slice(0, 20));
    }

    // Translate placeholders for form controls specifically
    const placeholders = {
        'from_name': 'contacto.formulario.nombre',
        'from_phone': 'contacto.formulario.telefono',
        'from_email': 'contacto.formulario.correo',
        'subject': 'contacto.formulario.tema',
        'message': 'contacto.formulario.mensaje'
    };
    Object.entries(placeholders).forEach(([id, key]) => {
        const el = document.getElementById(id);
        if (el && window.t) {
            const val = window.t(selectedLang, key);
            if (val) el.placeholder = val;
        }
    });

    // Translate nav links if they have data-i18n keys
    document.querySelectorAll('#nav [data-i18n]').forEach(a => {
        const key = a.getAttribute('data-i18n');
        const val = window.t(selectedLang, key);
        if (val) a.textContent = val;
    });

    // Translate special buttons (download CV, send)
    const downloadBtn = document.getElementById('download-cv');
    if (downloadBtn) {
        const val = window.t(selectedLang, 'sobremi.botonCV');
        if (val) downloadBtn.querySelector('[data-i18n]') ? downloadBtn.querySelector('[data-i18n]').textContent = val : downloadBtn.textContent = val;
    }
    const sendBtn = document.querySelector('#send-whatsapp');
    if (sendBtn) {
        const val = window.t(selectedLang, 'contacto.formulario.botonEnviar');
        if (val) {
            const span = sendBtn.querySelector('[data-i18n]');
            if (span) span.textContent = val; else sendBtn.textContent = val;
        }
    }
}

// --- Configurar valores predeterminados: Tema Claro e Inglés ---
// Ejecutar al cargar la página para establecer defaults
(function initializeDefaults() {
    // Default theme: light (unless user has saved a preference)
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === null) {
        // First time visitor - set light theme as default
        document.body.classList.add('light-theme');
        const switchElement = document.getElementById('switch');
        if (switchElement) switchElement.checked = true;
        localStorage.setItem('theme', 'light');
    } else if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        const switchElement = document.getElementById('switch');
        if (switchElement) switchElement.checked = true;
    }

    // Default language: English (unless user has saved a preference)
    const savedLang = localStorage.getItem('language');
    if (savedLang === null) {
        // First time visitor - set English as default
        localStorage.setItem('language', 'en');
        if (typeof changeLanguage === 'function') {
            changeLanguage('en');
        }
    } else {
        if (typeof changeLanguage === 'function') {
            changeLanguage(savedLang);
        }
    }

    // Update language selector to match current language
    const langSelector = document.getElementById('language-selector');
    if (langSelector) {
        langSelector.value = localStorage.getItem('language') || 'en';
    }
})();