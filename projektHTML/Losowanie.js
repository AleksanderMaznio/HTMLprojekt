function losowanie(){
    var karta = tarotData[Math.floor(Math.random()*tarotData.length)];
    var czyOdwrocona =Math.random()>0.5;
    var wynik={
        wylosowanaKarta: karta,
        odwrocona: czyOdwrocona
    };
    wyswietlKarte(wynik)
}

function wyswietlKarte(wynik){

    var karta=wynik.wylosowanaKarta;
    var czyOdwrocona=wynik.odwrocona;
    var obrazekKarty=document.getElementById('obrazek');

    const wyswietlacz = document.getElementById('wyswietl');
    const tekstStartowy = document.getElementById('start');
    if (tekstStartowy) {
        tekstStartowy.remove(); 
    }
    if(wyswietlacz){
        wyswietlacz.style.display='block';
    }
    document.getElementById('NazwaEng').innerText=karta.NazwaEng;
    document.getElementById('opis').innerHTML="<strong>Opis: </strong>"+karta.opis
    if(obrazekKarty){
        obrazekKarty.src="karty/"+karta.obrazek;
    }
    if(czyOdwrocona){
        document.getElementById('znaczenie').innerHTML="<strong>Znaczenie: </strong>"+karta.znaczenie_odw;
        obrazekKarty.style.transform="rotate(180deg)";
        document.getElementById('NazwaEng').innerText=karta.NazwaEng+"- Odwrócona";
    }
    else{
        document.getElementById('znaczenie').innerHTML="<strong>Znaczenie: </strong>"+karta.znaczenie_góra;
        obrazekKarty.style.transform="rotate(0deg)";
    }
    document.getElementById('tlumaczenie').innerHTML=karta.tlumaczenie;
    document.getElementById('start').innerHTML.remove;
    
    
}