function showApp(appId) {
    const apps = document.querySelectorAll('.app');

    apps.forEach(app => {
        app.classList.remove('active');
    });

    document.getElementById(appId).classList.add('active');
}


// Währungsrechner
function convertCurrency() {
    const euro = parseFloat(document.getElementById('euroInput').value);
    const rate = parseFloat(document.getElementById('currencySelect').value);

    if (isNaN(euro)) {
        alert('Bitte Zahl eingeben');
        return;
    }

    const result = euro * rate;

    document.getElementById('currencyResult').innerText = result.toFixed(2);
}


// Person Selector
function pickPerson() {
    const input = document.getElementById('namesInput').value;

    const names = input
        .split(',')
        .map(name => name.trim())
        .filter(name => name !== '');

    if (names.length === 0) {
        alert('Bitte Namen eingeben');
        return;
    }

    const randomIndex = Math.floor(Math.random() * names.length);

    document.getElementById('selectedPerson').innerText = names[randomIndex];
}


// Passwort Generator
function generatePassword() {
    const useBigLetters = document.getElementById('bigLetters').checked;
    const useNumbers = document.getElementById('numbers').checked;
    const length = parseInt(document.getElementById('length').value);

    let chars = 'abcdefghijklmnopqrstuvwxyz';

    if (useBigLetters) {
        chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }

    if (useNumbers) {
        chars += '0123456789';
    }

    let password = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }

    document.getElementById('passwordResult').innerText = password;
}