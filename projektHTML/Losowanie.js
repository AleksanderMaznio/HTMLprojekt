function losowanie() {
    if (typeof tarotData === 'undefined') {
        console.error("Błąd: Tablica tarotData nie została załadowana!");
        return;
    }
    const karta = tarotData[Math.floor(Math.random() * tarotData.length)];
    const czyOdwrocona = Math.random() > 0.5;
    const wynik = {
        wylosowanaKarta: karta,
        odwrocona: czyOdwrocona
    };
    wyswietlKarte(wynik);
}

function wyswietlKarte(wynik) {
    const karta = wynik.wylosowanaKarta;
    const czyOdwrocona = wynik.odwrocona;
    
    const obrazekKarty = document.getElementById('obrazek');
    const wyswietlacz = document.getElementById('wyswietl');
    const tekstStartowy = document.getElementById('start');

    // Ukrywamy tekst startowy i pokazujemy kartę
    if (tekstStartowy) tekstStartowy.style.display = 'none';
    if (wyswietlacz) wyswietlacz.style.display = 'block';

    // Wypełniamy dane
    document.getElementById('NazwaEng').innerText = czyOdwrocona ? karta.NazwaEng + " - Odwrócona" : karta.NazwaEng;
    document.getElementById('opis').innerHTML = "<strong>Opis: </strong>" + karta.opis;
    
    const znaczenieEl = document.getElementById('znaczenie');
    if (znaczenieEl) {
        znaczenieEl.innerHTML = "<strong>Znaczenie: </strong>" + (czyOdwrocona ? karta.znaczenie_odw : karta.znaczenie_góra);
    }

    if (obrazekKarty) {
        obrazekKarty.src = "karty/" + karta.obrazek;
        obrazekKarty.style.transform = czyOdwrocona ? "rotate(180deg)" : "rotate(0deg)";
    }

    const tlumaczenieEl = document.getElementById('tlumaczenie');
    if (tlumaczenieEl) tlumaczenieEl.innerHTML = karta.tlumaczenie || "";
}
