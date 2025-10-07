// translations.js

const translations = {
    es: {
        menu: {
            inicio: "INICIO",
            sobremi: "SOBRE MI",
            skills: "SKILLS",
            curriculum: "CURRICULUM",
            portfolio: "PORTFOLIO",
            contacto: "CONTACTO",
        },
        inicio: {
            nombre: "Leonardo Diaz",
            titulo: "Ingeniero de Sistemas | Desarrollador de Software",
        },
        sobremi: {
            titulo: "Sobre Mí",
            descripcion: "Hola, soy Leonardo Diaz. Soy Ingeniero de Sistemas con más de 3 años de experiencia en desarrollo de software, especializado en tecnologías modernas como Angular, Node.js y Java. Me apasiona crear soluciones tecnológicas eficientes, escalables y centradas en el usuario. Además, mi experiencia previa como líder de ventas en productos de gran consumo me ha brindado habilidades sólidas en gestión de equipos, enfoque al cliente y cumplimiento de objetivos estratégicos.",
            datosPersonales: {
                telefono: "Teléfono",
                email: "Email",
                cargo: "Desarrollador de software",
            },
            intereses: {
                desarrollo: "DESARROLLO WEB",
                ia: "INTELIGENCIA ARTIFICIAL",
                ciberseguridad: "CIBERSEGURIDAD",
                videojuegos: "VIDEOJUEGOS",
                codigoabierto: "CÓDIGO ABIERTO",
            },
            botonCV: "Descargar CV",
        },
        skills: {
            titulo: "Skills",
            technicalSkills: "Technical Skills",
            professionalSkills: "Professional Skills",
            tech: {
                javascript: "JavaScript",
                htmlcss: "HTML5 & CSS3",
                spring: "Spring Boot",
                git: "Git & GitHub",
                testing: "Testing",
            },
            prof: {
                comunicacion: "Comunicación",
                trabajoEquipo: "Trabajo en Equipo",
                pensamiento: "Pensamiento Crítico & Resolución de Problemas",
                creatividad: "Creatividad & Innovación",
                gestionProyectos: "Gestión de Proyectos",
            }
        },
        curriculum: {
            titulo: "Curriculum",
            educacion: "Educación",
            experiencia: "Experiencia de trabajo",
        },
        portfolio: {
            titulo: "PORTFOLIO",
            proj1: {
                title: "Gestor de Inventarios",
                desc: "Aplicación web en React y Node.js",
                link: "Ver Proyecto"
            },
            proj2: {
                title: "Sistema de Reservas",
                desc: "Desarrollado en Java y MySQL",
                link: "Ver Proyecto"
            },
            proj3: {
                title: "API de Autenticación",
                desc: "Node.js, Express y JWT",
                link: "Ver Proyecto"
            },
            proj4: {
                title: "Dashboard de Ventas",
                desc: "Vue.js y Firebase",
                link: "Ver Proyecto"
            }
        },
        contacto: {
            titulo: "CONTACTO",
            formulario: {
                nombre: "Tú Nombre",
                telefono: "Número telefónico",
                correo: "Dirección de correo",
                tema: "Tema",
                mensaje: "Mensaje",
                botonEnviar: "Enviar Mensaje",
            },
            ubicacion: "Nicaragua 159, San Rafael Mza",
            llamar: "Llámanos",
            email: "Email",
        },
        footer: {
            subir: "Subir",
        }
    },

    en: {
        menu: {
            inicio: "HOME",
            sobremi: "ABOUT ME",
            skills: "SKILLS",
            curriculum: "RESUME",
            portfolio: "PORTFOLIO",
            contacto: "CONTACT",
        },
        inicio: {
            nombre: "Leonardo Diaz",
            titulo: "Systems Engineer | Software Developer",
        },
        sobremi: {
            titulo: "About Me",
            descripcion: "Hi, I'm Leonardo Diaz. I'm a Systems Engineer with over 3 years of experience in software development, specializing in modern technologies such as Angular, Node.js and Java. I enjoy building efficient, scalable, and user-centered solutions. My prior experience as a commercial team leader helped me develop strong team management and customer-focused skills.",
            datosPersonales: {
                telefono: "Phone",
                email: "Email",
                cargo: "Engineer of Systems",
            },
            intereses: {
                desarrollo: "WEB DEVELOPMENT",
                ia: "ARTIFICIAL INTELLIGENCE",
                ciberseguridad: "CYBERSECURITY",
                videojuegos: "VIDEO GAMES",
                codigoabierto: "OPEN SOURCE",
            },
            botonCV: "Download CV",
        },
        skills: {
            titulo: "Skills",
            technicalSkills: "Technical Skills",
            professionalSkills: "Professional Skills",
            tech: {
                javascript: "JavaScript",
                htmlcss: "HTML5 & CSS3",
                spring: "Spring Boot",
                git: "Git & GitHub",
                testing: "Testing",
            },
            prof: {
                comunicacion: "Communication",
                trabajoEquipo: "Teamwork",
                pensamiento: "Critical Thinking & Problem Solving",
                creatividad: "Creativity & Innovation",
                gestionProyectos: "Project Management",
            }
        },
        curriculum: {
            titulo: "Resume",
            educacion: "Education",
            experiencia: "Work Experience",
        },
        portfolio: {
            titulo: "PORTFOLIO",
            proj1: {
                title: "Inventory Manager",
                desc: "Web application built with React and Node.js",
                link: "View Project"
            },
            proj2: {
                title: "Booking System",
                desc: "Built with Java and MySQL",
                link: "View Project"
            },
            proj3: {
                title: "Authentication API",
                desc: "Node.js, Express and JWT",
                link: "View Project"
            },
            proj4: {
                title: "Sales Dashboard",
                desc: "Vue.js and Firebase",
                link: "View Project"
            }
        },
        contacto: {
            titulo: "CONTACT",
            formulario: {
                nombre: "Your Name",
                telefono: "Phone Number",
                correo: "Email Address",
                tema: "Subject",
                mensaje: "Message",
                botonEnviar: "Send Message",
            },
            ubicacion: "Nicaragua 159, San Rafael Mza",
            llamar: "Call Us",
            email: "Email",
        },
        footer: {
            subir: "Scroll Up",
        }
    }

    // Se puede seguir agregando más idiomas
};

/**
 * Helper to resolve dotted keys like 'menu.inicio' from translations
 */
function t(lang, dottedKey) {
    if (!translations[lang]) return null;
    return dottedKey.split('.').reduce((obj, k) => (obj && obj[k] !== undefined) ? obj[k] : null, translations[lang]);
}

// Expose helpers globally for the other script
window.translations = translations;
window.t = t;
