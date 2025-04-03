// Funzione per mostrare e nascondere il menu
function showMenu() {
    var menu = document.getElementById("menu");
    var button = document.querySelector(".button");
    
    if (menu.classList.contains("hidden")) {
        menu.classList.remove("hidden");
        menu.style.opacity = "0";
        setTimeout(() => {
            menu.style.opacity = "1";
        }, 100);
        button.textContent = "Nascondi il menu";
    } else {
        menu.style.opacity = "0";
        setTimeout(() => {
            menu.classList.add("hidden");
        }, 300);
        button.textContent = "Scopri il nostro menu";
    }
}

// Gestione hover per elementi del menu
document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll("#menu li");
    items.forEach(item => {
        item.addEventListener("mouseover", () => {
            item.style.color = "gold";
            item.style.transform = "scale(1.05)";
        });
        item.addEventListener("mouseout", () => {
            item.style.color = "white";
            item.style.transform = "scale(1)";
        });
    });
});

// Funzione per mostrare e nascondere un sottomenu quando si clicca sulla freccia

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".submenu-container").forEach(container => {
        const arrow = container.querySelector(".submenu-arrow");
        const subMenu = container.querySelector(".submenu");

        arrow.addEventListener("click", () => {
            if (subMenu.classList.contains("hidden")) {
                subMenu.classList.remove("hidden");
                subMenu.style.opacity = "0";
                setTimeout(() => {
                    subMenu.style.opacity = "1";
                }, 100);
            } else {
                subMenu.style.opacity = "0";
                setTimeout(() => {
                    subMenu.classList.add("hidden");
                }, 300);
            }
        });
    });
});

// Evidenziare il menu attivo basato sulla sezione visibile
window.addEventListener('scroll', function() {
    var sections = document.querySelectorAll('section');
    var links = document.querySelectorAll('.menu-link');
    
    sections.forEach(function(section, index) {
        var rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
            links.forEach(link => link.classList.remove('active'));
            links[index].classList.add('active');
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    // Gestire il clic per aprire/chiudere il sottomenu
    document.querySelectorAll(".menu-section h3").forEach(header => {
        header.addEventListener("click", () => {
            const submenu = header.nextElementSibling; // Submenu direttamente sotto l'h3
            const arrow = header.querySelector(".arrow"); // Freccia accanto all'intestazione
            
            // Alterna la visibilità del sottomenu
            if (submenu.classList.contains("open")) {
                submenu.classList.remove("open"); // Nasconde il sottomenu
                arrow.style.transform = "rotate(0deg)"; // Ruota la freccia
            } else {
                submenu.classList.add("open"); // Mostra il sottomenu
                arrow.style.transform = "rotate(180deg)"; // Ruota la freccia
            }
        });
    });
});

function toggleMenu() {
    const sideNav = document.getElementById("side-nav");
    const body = document.body;

    // Aggiungi o rimuovi la classe 'open' dal menu
    sideNav.classList.toggle("open");

    // Aggiungi o rimuovi la classe 'menu-open' al corpo per bloccare lo scroll
    body.classList.toggle("menu-open");
}