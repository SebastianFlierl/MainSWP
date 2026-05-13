var figuren = ["Apu","Barney","Bart","Charles","Glancy","Grandpa","Hibbert","Homer","Krusty","Marge"];

function changePics() {
    let bilder = document.querySelectorAll(".place img");
    let namenFelder = document.querySelectorAll("[id^='name']");

    // Bilder + Namen setzen
    for (let i = 0; i < bilder.length; i++) {
        bilder[i].src = "bilder/" + figuren[i] + ".png";

        // Name darunter (Vorname groß)
        let name = figuren[i];
        namenFelder[i].innerHTML = name.charAt(0).toUpperCase() + name.slice(1);

        // Klick-Event
        bilder[i].addEventListener("click", function() {
            toggleImages(this);
        });
    }

    // Klasse für alle .place ohne id hinzufügen
    let places = document.querySelectorAll(".place");
    places.forEach(div => {
        if (!div.hasAttribute("id")) {
            div.classList.add("noid");
        }
    });
}

// Bilder ein-/ausblenden
function toggleImages(clickedImg) {
    let alleBilder = document.querySelectorAll(".place img");

    let hidden = false;

    alleBilder.forEach(img => {
        if (img !== clickedImg && img.style.display === "none") {
            hidden = true;
        }
    });

    alleBilder.forEach(img => {
        if (img !== clickedImg) {
            img.style.display = hidden ? "block" : "none";
        }
    });
}