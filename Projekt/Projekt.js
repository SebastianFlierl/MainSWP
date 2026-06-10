// Hintergrundfarbe Button

const button = document.getElementById("Hintergrundfarbe Button");

button.addEventListener("click", function () {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

// Bildbutton

const Bildbutton = document.getElementById("bildButton");
const input = document.getElementById("titelInput");
const ueberschrift = document.getElementById("ueberschrift");
const bild = document.getElementById("bild");

Bildbutton.addEventListener("click", function () {

    // Überschrift Text
    ueberschrift.textContent = input.value;

    // Zufälliges Bild
    const zufall = Math.floor(Math.random() * 6);

    bild.src = `Bild${zufall}.png`;
    bild.style.display = "block";
});

// Größen Check

const GroesseButton = document.getElementById("checkButton");
const Groesseinput = document.getElementById("groesseInput");
const ergebnis = document.getElementById("ergebnis");

GroesseButton.addEventListener("click", function() {
    const groesse = Number(Groesseinput.value);

    if (groesse < 168) {
        ergebnis.textContent = "Yigits größe";
    }
    else if (groesse <= 180) {
        ergebnis.textContent = "Over";
    } else {
        ergebnis.textContent = "Nicht over";
    }

});


