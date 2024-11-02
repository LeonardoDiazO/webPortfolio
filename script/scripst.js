const socialLinksData = [
    { name: "Facebook", url: "https://www.facebook.com/tuusuario", className: "facebook" },
    { name: "Twitter", url: "https://www.twitter.com/tuusuario", className: "twitter" },
    { name: "Instagram", url: "https://www.instagram.com/tuusuario", className: "instagram" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/tuusuario", className: "linkedin" },
];

function loadSocialLinks() {
    const container = document.getElementById("socialLinks");
    socialLinksData.forEach(link => {
        const anchor = document.createElement("a");
        anchor.href = link.url;
        anchor.textContent = link.name;
        anchor.classList.add("social-link", link.className);
        anchor.target = "_blank"; // Para abrir en nueva pestaña
        container.appendChild(anchor);
    });
}

window.onload = loadSocialLinks;
