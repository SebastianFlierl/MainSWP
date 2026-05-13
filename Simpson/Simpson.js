// Simpson.js

var figuren = [
    "apu",
    "barney",
    "bart",
    "charles",
    "glancy",
    "grandpa",
    "hibbert",
    "homer",
    "krusty",
    "marge"
];


function changePics() {

    // Alle DIVs mit class="place"
    var places = document.querySelectorAll(".place");

    // Neue Klasse hinzufügen,
    // aber nur wenn KEIN id-Attribut vorhanden ist
    places.forEach(function(place) {
        if (!place.hasAttribute("id")) {
            place.classList.add("yellowplace");
        }
    });

    // Hintergrundfarben ändern
    document.getElementById("rowone").style.background = "orange";
    document.getElementById("rowtwo").style.background = "blue";

    // Alle Bilder holen
    var bilder = document.querySelectorAll(".place img");

    // Bilder + Namen einsetzen
    for (var i = 0; i < bilder.length; i++) {

        // Bildpfad mit Nummer erzeugen
        bilder[i].src = "bilder/" + figuren[i] + "_" + (i + 1) + ".png";;

        // Namen unter die Bilder schreiben
        var namefeld = document.getElementById("name" + (i + 1));
        namefeld.innerHTML = figuren[i];

        // Klickfunktion
        bilder[i].onclick = function () {

            // Prüfen ob andere Bilder sichtbar sind
            var andereSichtbar = false;

            bilder.forEach(function(img) {
                if (img !== this && img.style.visibility !== "hidden") {
                    andereSichtbar = true;
                }
            }, this);

            // Bilder ein-/ausblenden
            bilder.forEach(function(img) {

                if (img !== this) {

                    if (andereSichtbar) {
                        img.style.visibility = "hidden";
                    } else {
                        img.style.visibility = "visible";
                    }

                }

            }, this);
        };
    }
}