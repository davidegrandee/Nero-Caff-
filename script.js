document.addEventListener("DOMContentLoaded", () => {
    // Apri/chiudi il menu laterale da destra
    const menuIcon = document.querySelector('.menu-icon');
    const sideNav = document.querySelector('.side-nav');
    const body = document.querySelector('body');

    // Aggiungi il listener per il menu laterale
    menuIcon.addEventListener('click', () => {
        sideNav.classList.toggle('open-right'); // Aggiunge o rimuove la classe per aprire/chiudere il menu
        body.classList.toggle('menu-open'); // Blocca lo scroll quando il menu è aperto
    });

    // Gestione hover sugli elementi del menu laterale
    const menuItems = document.querySelectorAll(".side-nav ul li a");
    menuItems.forEach(item => {
        item.addEventListener("mouseover", () => {
            item.style.color = "gold";
            item.style.transform = "scale(1.05)";
        });
        item.addEventListener("mouseout", () => {
            item.style.color = "#f1c40f";
            item.style.transform = "scale(1)";
        });
    });

    // Gestione clic sui sottomenu
    document.querySelectorAll(".menu-section h3").forEach(header => {
        header.addEventListener("click", () => {
            const submenu = header.nextElementSibling;
            const arrow = header.querySelector(".arrow");

            if (submenu.classList.contains("open")) {
                submenu.classList.remove("open");
                arrow.style.transform = "rotate(0deg)";
            } else {
                submenu.classList.add("open");
                arrow.style.transform = "rotate(180deg)";
            }
        });
    });

    // Evidenziazione sezione attiva durante lo scroll
    const menuLinks = document.querySelectorAll('.menu-link');

    window.addEventListener('scroll', () => {
        let currentSection = "";

        document.querySelectorAll("section").forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 50) {
                currentSection = section.getAttribute("id");
            }
        });

        menuLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(currentSection)) {
                link.classList.add("active");
            }
        });
    });
});