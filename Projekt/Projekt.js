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
    const zufall = Math.floor(Math.random() * 7);

    bild.src = `Bilder/Bild${zufall}.png`;
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

// Musik Player

const playButton = document.getElementById("playButton");
const musik = document.getElementById("musik");
const songName = document.getElementById("songName");

const songs = [
    "Musik/D4vd-Celeste.mp3",
    "Musik/Glokk40spazz freesumo.mp3",
    "Musik/Kpop song.mp3",
    "Musik/No idea song mp3.mp3",
    "Musik/Song5.mp3",
    "Musik/song6.mp3",
    "Musik/song7.mp3",
    "Musik/song8.mp3",
    "Musik/song9.mp3",
    "Musik/song10.mp3",
];

let aktuellerSong = 0;

musik.src = songs[aktuellerSong];
songName.textContent = songs[aktuellerSong];

document.getElementById("playButton").addEventListener("click", function() {
    musik.play();
});

document.getElementById("nextButton").addEventListener("click", function() {
    aktuellerSong++;

    if (aktuellerSong >= songs.length) {
        aktuellerSong = 0;
    }

    musik.src = songs[aktuellerSong];
    songName.textContent = songs[aktuellerSong];
    musik.play();
});