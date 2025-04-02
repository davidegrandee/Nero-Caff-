// Funzione per mostrare e nascondere il menu
function showMenu() {
    var menu = document.getElementById("menu");
    var button = document.querySelector(".button");
    
    if (menu.classList.contains("hidden")) {
        // Mostra il menu
        menu.classList.remove("hidden");
        menu.style.opacity = "0"; // Inizia l'animazione di fade-in
        setTimeout(() => {
            menu.style.opacity = "1"; // Animazione completa
        }, 100);
        button.textContent = "Nascondi il menu"; // Cambia il testo del bottone
    } else {
        // Nascondi il menu
        menu.style.opacity = "0"; // Inizia l'animazione di fade-out
        setTimeout(() => {
            menu.classList.add("hidden"); // Nasconde il menu dopo che l'animazione è finita
        }, 300);
        button.textContent = "Scopri il nostro menu"; // Cambia il testo del bottone
    }
}

// Gestione degli eventi di hover per i singoli elementi del menu
document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll("#menu li");
    items.forEach(item => {
        item.addEventListener("mouseover", () => {
            item.style.color = "gold"; // Cambia il colore del testo su hover
            item.style.transform = "scale(1.05)"; // Aggiunge un effetto di ingrandimento
        });
        item.addEventListener("mouseout", () => {
            item.style.color = "white"; // Ripristina il colore del testo
            item.style.transform = "scale(1)"; // Rimuove l'effetto di ingrandimento
        });
    });
});

// Funzione per aggiungere un altro menu dinamico
function toggleSubMenu(subMenuId) {
    var subMenu = document.getElementById(subMenuId);
    var button = subMenu.previousElementSibling; // Trova il bottone correlato

    if (subMenu.classList.contains("hidden")) {
        subMenu.classList.remove("hidden");
        subMenu.style.opacity = "0";
        setTimeout(() => {
            subMenu.style.opacity = "1";
        }, 100);
        button.textContent = "Nascondi opzioni";
    } else {
        subMenu.style.opacity = "0";
        setTimeout(() => {
            subMenu.classList.add("hidden");
        }, 300);
        button.textContent = "Mostra opzioni";
    }
}

// Aggiungi la classe "active" al menu quando la sezione è visibile
window.addEventListener('scroll', function() {
    var sections = document.querySelectorAll('section');
    var links = document.querySelectorAll('.menu-link');
    
    sections.forEach(function(section, index) {
        var rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
            // Rimuovi "active" da tutti i link
            links.forEach(function(link) {
                link.classList.remove('active');
            });
            // Aggiungi "active" al link corrispondente
            links[index].classList.add('active');
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const menuLinks = document.querySelectorAll('.menu-link');

    window.addEventListener('scroll', function () {
        let currentSection = "";

        document.querySelectorAll("section").forEach(function (section) {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 50) {
                currentSection = section.getAttribute("id");
            }
        });

        menuLinks.forEach(function (link) {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(currentSection)) {
                link.classList.add("active");
            }
        });
    });
});