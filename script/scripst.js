let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupal");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 


function loadTranslations() {
    const userLang = navigator.language || navigator.userLanguage;
    const lang = userLang.split('-')[0]; // Obtener solo la parte principal del idioma

    // Si el idioma detectado está en las traducciones, úsalo; si no, usa español (es) como predeterminado
    const texts = translations[lang] || translations["es"];

    // Cambiar los textos en la página
    document.title = texts.title;
    document.querySelector("h1").textContent = texts.heading;
}

// Llamar a la función cuando la página cargue
document.addEventListener("DOMContentLoaded", loadTranslations);


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

    for (const [key, element] of Object.entries(elementsToTranslate)) {
        if (element) element.textContent = translations[selectedLang][key];
    }
}

// const socialLinksData = [
//     { name: "Facebook", url: "https://www.facebook.com/tuusuario", className: "facebook" },
//     { name: "Twitter", url: "https://www.twitter.com/tuusuario", className: "twitter" },
//     { name: "Instagram", url: "https://www.instagram.com/tuusuario", className: "instagram" },
//     { name: "LinkedIn", url: "https://www.linkedin.com/in/tuusuario", className: "linkedin" },
// ];

// function loadSocialLinks() {
//     const container = document.getElementById("socialLinks");
//     socialLinksData.forEach(link => {
//         const anchor = document.createElement("a");
//         anchor.href = link.url;
//         anchor.textContent = link.name;
//         anchor.classList.add("social-link", link.className);
//         anchor.target = "_blank"; // Para abrir en nueva pestaña
//         container.appendChild(anchor);
//     });
// }

// window.onload = loadSocialLinks;


