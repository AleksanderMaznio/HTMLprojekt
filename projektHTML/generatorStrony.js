async function generuj() {
    try {
        const odpowiedz = await fetch('opisy.json');
        const dane = await odpowiedz.json();

     
        const params = new URLSearchParams(window.location.search);
        const id = parseInt(params.get('id'));

     
        const karta = dane.find(k => k.id === id);

        if (karta) {
            document.getElementById('tytul').innerText = `${karta.id}. ${karta.englishName}`;
            document.getElementById('js-tytul-pl').innerText = `${karta.polishName} – ${karta.subTitle}`;
            document.getElementById('js-wstep').innerText = karta.wstep;
            document.getElementById('js-znaczenie').innerText = karta.znaczenie;

            document.getElementById('obrazek').src = karta.image.replace();
            document.getElementById('obrazek').alt = karta.polishName;

            const lista = document.getElementById('js-symbolika');
            lista.innerHTML = ""; 
            karta.symbolika.forEach(item => {
                const li = document.createElement('li');
                li.innerHTML = `<strong>${item.label}:</strong> ${item.text}`;
                lista.appendChild(li);
            });

            document.title = karta.englishName;
        } else {
            console.error("Nie znaleziono karty o ID:", id);
        }
    } catch (blad) {
        console.error("Błąd ładowania danych:", blad);
    }
}


window.onload = generuj;