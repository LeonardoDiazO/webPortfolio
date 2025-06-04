let menuVisible = false;

// Función que oculta o muestra el menu
function mostrarOcultarMenu() {
    const nav = document.getElementById("nav");
    if (menuVisible) {
        nav.classList.remove(""); // Elimina la clase si está
        menuVisible = false;
    } else {
        nav.classList.add("responsive");
        menuVisible = true;
    }
}

function seleccionar() {
    // oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
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

    // Escuchar cambios en el selector de tema
    if (themeSelect) { // Asegura que el selector exista antes de añadir el listener
        themeSelect.addEventListener('change', (event) => {
            applyTheme(event.target.value);
        });
    }

    // --- Inicialización de habilidades al cargar la página ---
    // Esto se ejecuta una vez para animar si ya están en pantalla
    efectoHabilidades();

    // --- Lógica del botón de WhatsApp ---
    const sendWhatsappButton = document.getElementById("send-whatsapp");
    if (sendWhatsappButton) { // Asegura que el botón exista
        sendWhatsappButton.addEventListener("click", function () {
            // Número de WhatsApp al que quieres enviar el mensaje (pon tu número aquí con código de país)
            let phoneNumber = "+573016805257"; // Cambia esto por tu número de WhatsApp con código de país

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
};


// --- Tu código de traducción, si lo estás usando ---
// Asegúrate de que 'translations' esté definido en 'translations.js'
// scripts.js
function changeLanguage() {
    const selectedLang = document.getElementById("language-selector").value;
    const elementsToTranslate = {
        inicio: document.querySelector("#nav a[href='#inicio']"),
        sobreMi: document.querySelector("#nav a[href='#sobremi']"),
        skills: document.querySelector("#nav a[href='#skills']"),
        curriculum: document.querySelector("#nav a[href='#curriculum']"),
        portfolio: document.querySelector("#nav a[href='#portfolio']"),
        contacto: document.querySelector("#nav a[href='#contacto']"),
        nombre: document.querySelector("input[placeholder='Tú Nombre']"),
        telefono: document.querySelector("input[placeholder='Número telefónico']"),
        correo: document.querySelector("input[placeholder='Dirección de correo']"),
        tema: document.querySelector("input[placeholder='Tema']"),
        mensaje: document.querySelector("textarea[placeholder='Mensaje']"),
        enviar: Array.from(document.querySelectorAll("button")).find(button => button.textContent.trim().includes("Enviar Mensaje")),
        descargarCV: Array.from(document.querySelectorAll("button")).find(button => button.textContent.trim().includes("Descargar CV")),
        // ingeniero: document.querySelector(".contenido-banner h2"),
    };

    // Solo ejecuta si 'translations' está disponible y tiene el idioma seleccionado
    if (typeof translations !== 'undefined' && translations[selectedLang]) {
        for (const [key, element] of Object.entries(elementsToTranslate)) {
            if (element) element.textContent = translations[selectedLang][key];
        }
    }
}