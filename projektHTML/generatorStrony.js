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

window.onload = generuj;