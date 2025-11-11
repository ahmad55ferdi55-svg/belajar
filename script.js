// Fungsi untuk Mengelola Tab
function showTab(tabId) {
    // Sembunyikan semua konten tab
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));

    // Hapus status 'active' dari semua tombol
    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(button => button.classList.remove('active'));

    // Tampilkan konten tab yang dipilih
    document.getElementById(tabId).classList.add('active');
    
    // Set status 'active' pada tombol yang diklik
    document.querySelector(`.tab-button[onclick="showTab('${tabId}')"]`).classList.add('active');

    // Reset input setiap kali tab diubah
    clearAllInputs();
}


// --- 1. Konversi Suhu (Celsius ↔ Fahrenheit) ---
function convertTemp(unit) {
    const celsiusInput = document.getElementById('celsius');
    const fahrenheitInput = document.getElementById('fahrenheit');

    if (unit === 'C') {
        const celsius = parseFloat(celsiusInput.value);
        if (!isNaN(celsius)) {
            // Rumus F = (C * 9/5) + 32
            fahrenheitInput.value = ((celsius * 9/5) + 32).toFixed(2);
        } else {
            fahrenheitInput.value = "";
        }
    } else if (unit === 'F') {
        const fahrenheit = parseFloat(fahrenheitInput.value);
        if (!isNaN(fahrenheit)) {
            // Rumus C = (F - 32) * 5/9
            celsiusInput.value = ((fahrenheit - 32) * 5/9).toFixed(2);
        } else {
            celsiusInput.value = "";
        }
    }
}

// --- 2. Konversi Berat (Kilogram ↔ Pound) ---
function convertWeight(unit) {
    const kgInput = document.getElementById('kilogram');
    const lbsInput = document.getElementById('pound');
    
    // Nilai konversi: 1 Kilogram ≈ 2.20462 Pound
    const CONV_KG_LBS = 2.20462;

    if (unit === 'KG') {
        const kg = parseFloat(kgInput.value);
        if (!isNaN(kg)) {
            // KG ke LBS
            lbsInput.value = (kg * CONV_KG_LBS).toFixed(2);
        } else {
            lbsInput.value = "";
        }
    } else if (unit === 'LBS') {
        const lbs = parseFloat(lbsInput.value);
        if (!isNaN(lbs)) {
            // LBS ke KG
            kgInput.value = (lbs / CONV_KG_LBS).toFixed(2);
        } else {
            kgInput.value = "";
        }
    }
}

// --- 3. Konversi Jarak (Kilometer ↔ Mil) ---
function convertDistance(unit) {
    const kmInput = document.getElementById('kilometer');
    const mileInput = document.getElementById('mile');
    
    // Nilai konversi: 1 Kilometer ≈ 0.621371 Mil
    const CONV_KM_MILE = 0.621371;

    if (unit === 'KM') {
        const km = parseFloat(kmInput.value);
        if (!isNaN(km)) {
            // KM ke Mil
            mileInput.value = (km * CONV_KM_MILE).toFixed(2);
        } else {
            mileInput.value = "";
        }
    } else if (unit === 'MILE') {
        const mile = parseFloat(mileInput.value);
        if (!isNaN(mile)) {
            // Mil ke KM
            kmInput.value = (mile / CONV_KM_MILE).toFixed(2);
        } else {
            kmInput.value = "";
        }
    }
}


// Fungsi untuk mereset semua input di semua tab
function clearAllInputs() {
    document.getElementById('celsius').value = '';
    document.getElementById('fahrenheit').value = '';
    document.getElementById('kilogram').value = '';
    document.getElementById('pound').value = '';
    document.getElementById('kilometer').value = '';
    document.getElementById('mile').value = '';
}

// Jalankan fungsi showTab saat halaman dimuat untuk menampilkan tab 'temp' secara default
window.onload = function() {
    showTab('temp');
};
