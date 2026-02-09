// FUNKCJA DLA STRONY SZCZEGÓŁÓW (np. Katalog)
async function generuj() {
    try {
        const odpowiedz = await fetch('opisy.json');
        if (!odpowiedz.ok) throw new Error("Nie udało się załadować bazy kart.");
        const dane = await odpowiedz.json();

        const params = new URLSearchParams(window.location.search);
        const id = parseInt(params.get('id'));

        const karta = dane.find(k => k.id === id);

        if (karta) {
            // Bezpieczne przypisywanie wartości (sprawdza czy element istnieje w HTML)
            const elTytul = document.getElementById('tytul');
            if(elTytul) elTytul.innerText = `${karta.id}. ${karta.englishName}`;
            
            const elTytulPl = document.getElementById('js-tytul-pl');
            if(elTytulPl) elTytulPl.innerText = `${karta.polishName} – ${karta.subTitle}`;

            const elObrazek = document.getElementById('obrazek');
            if(elObrazek) {
                elObrazek.src = "karty/" + karta.image;
                elObrazek.alt = karta.polishName;
            }

            const lista = document.getElementById('js-symbolika');
            if (lista && karta.symbolika) {
                lista.innerHTML = ""; 
                karta.symbolika.forEach(item => {
                    const li = document.createElement('li');
                    li.innerHTML = `<strong>${item.label}:</strong> ${item.text}`;
                    lista.appendChild(li);
                });
            }
            document.title = karta.englishName || "Karta Tarota";
        }
    } catch (blad) {
        console.error("Błąd generowania strony:", blad);
    }
}

// FUNKCJE DLA STRONY GŁÓWNEJ (Losowanie)
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

// Uruchomienie generowania przy starcie
window.onload = generuj;