const tarotData = [
    {
        "NazwaEng": "The Fool",
        "nazwa": "Głupiec",
        "obrazek": "TheFool0.jpg",
        "znaczenie_góra": "Nowe początki, niewinność, spontaniczność, wiara w los.",
        "znaczenie_odw": "Lekkomyślność, ryzykanctwo, brak rozwagi, zahamowania.",
        "opis": "Młody człowiek stoi nad przepaścią, patrzy w niebo, gotowy na przygodę.",
        "tlumaczenie": "Przepaść symbolizuje nieznane, biała róża czystość intencji, a pies instynkt przetrwania ostrzegający przed błędem."
    },
    {
        "NazwaEng": "The Magician",
        "nazwa": "Mag",
        "obrazek": "TheMagician1.jpg",
        "znaczenie_góra": "Siła woli, manifestacja, zręczność, działanie.",
        "znaczenie_odw": "Manipulacja, niewykorzystany talent, iluzja.",
        "opis": "Postać łącząca niebo z ziemią, przed nią leżą symbole miecza, kielicha, pentaklu i buławy.",
        "tlumaczenie": "Lemniskata (znak nieskończoności) nad głową oznacza nieograniczony potencjał umysłu, a cztery atrybuty na stole to panowanie nad żywiołami."
    },
    {
        "NazwaEng": "The High Priestess",
        "nazwa": "Kapłanka",
        "obrazek": "TheHighPriestess2.jpg",
        "znaczenie_góra": "Intuicja, podświadomość, tajemnica, duchowa wiedza.",
        "znaczenie_odw": "Zablokowana intuicja, ukryte motywy, powierzchowność.",
        "opis": "Kobieta siedząca między dwiema kolumnami, czarną i białą, trzymająca zwój wiedzy.",
        "tlumaczenie": "Kolumny Boaz i Jachin oznaczają dualizm świata (światło/cień), a granaty na tkaninie symbolizują płodność umysłu i sferę sacrum."
    },
    {
        "NazwaEng": "The Empress",
        "nazwa": "Cesarzowa",
        "obrazek": "TheEmpress3.jpg",
        "znaczenie_góra": "Kobiecość, obfitość, natura, płodność, opiekuńczość.",
        "znaczenie_odw": "Kreatywna blokada, zależność od innych, marnotrawstwo.",
        "opis": "Dojrzała, piękna kobieta siedząca na tronie w bujnym ogrodzie.",
        "tlumaczenie": "Dwanaście gwiazd w koronie to znaki zodiaku, a łan zboża u stóp symbolizuje proces wzrostu i żniwa sukcesu."
    },
    {
        "NazwaEng": "The Emperor",
        "nazwa": "Cesarz",
        "obrazek": "TheEmperor4.jpg",
        "znaczenie_góra": "Autorytet, struktura, stabilność, ojcostwo, logika.",
        "znaczenie_odw": "Tyrania, brak dyscypliny, nadmierna kontrola, sztywność.",
        "opis": "Władca siedzący na kamiennym tronie ozdobionym baranimi głowami.",
        "tlumaczenie": "Baranie głowy to znak Barana (energia i upór), a berło Ankh symbolizuje władzę nad życiem i porządkiem."
    },
    {
        "NazwaEng": "The Hierophant",
        "nazwa": "Arcykapłan",
        "obrazek": "TheHierophant5.jpg",
        "znaczenie_góra": "Tradycja, edukacja, wartości duchowe, przynależność.",
        "znaczenie_odw": "Bunt, kwestionowanie zasad, nowe podejście, nonkonformizm.",
        "opis": "Postać religijna udzielająca błogosławieństwa dwóm uczniom.",
        "tlumaczenie": "Potrójna korona oznacza władzę nad trzema światami, a skrzyżowane klucze to dostęp do wiedzy tajemnej i ziemskiej."
    },
    {
        "NazwaEng": "The Lovers",
        "nazwa": "Kochankowie",
        "obrazek": "TheLovers6.jpg",
        "znaczenie_góra": "Miłość, harmonia, wybory, wartości, partnerstwo.",
        "znaczenie_odw": "Niezgoda, brak równowagi, złe wybory, ochłodzenie relacji.",
        "opis": "Para stojąca w ogrodzie pod opieką anioła, symbol wyboru drogi życiowej.",
        "tlumaczenie": "Anioł Rafael symbolizuje uzdrowienie, a drzewo wiedzy za kobietą i drzewo życia za mężczyzną oznaczają wybór między instynktem a duchem."
    },
    {
        "NazwaEng": "The Chariot",
        "nazwa": "Rydwan",
        "obrazek": "TheChariot7.jpg",
        "znaczenie_góra": "Zwycięstwo, determinacja, siła woli, sukces, podróż.",
        "znaczenie_odw": "Brak kierunku, agresja, porażka, utrata kontroli.",
        "opis": "Wojownik powożący rydwanem zaprzężonym w dwa sfinksy.",
        "tlumaczenie": "Czarne i białe sfinksy symbolizują przeciwstawne siły, które woźnica musi utrzymać w ryzach za pomocą siły woli, a nie lejców."
    },
    {
        "NazwaEng": "Strength",
        "nazwa": "Siła",
        "obrazek": "Strength8.jpg",
        "znaczenie_góra": "Odwaga, cierpliwość, wewnętrzna siła, współczucie.",
        "znaczenie_odw": "Słabość, brak pewności siebie, uleganie instynktom.",
        "opis": "Kobieta łagodnie zamykająca paszczę lwa, symbol panowania nad sobą.",
        "tlumaczenie": "Lew reprezentuje dzikie żądze i emocje, które kobieta ujarzmia miłością i delikatnością, a nie przemocą."
    },
    {
        "NazwaEng": "The Hermit",
        "nazwa": "Pustelnik",
        "obrazek": "TheHermit9.jpg",
        "znaczenie_góra": "Refleksja, poszukiwanie prawdy, samotność, mądrość.",
        "znaczenie_odw": "Izolacja, wycofanie, zbytni krytycyzm, zagubienie.",
        "opis": "Starzec z lampą i laseczką, oświetlający sobie drogę w ciemności.",
        "tlumaczenie": "Lampa z sześcioramienną gwiazdą to światło intelektu prowadzące przez ciemność, a laska to kręgosłup moralny."
    },
    {
        "NazwaEng": "Wheel of Fortune",
        "nazwa": "Koło Fortuny",
        "obrazek": "TheWheelOfFortune10.jpg",
        "znaczenie_góra": "Zmiana, cykle życia, przeznaczenie, szczęśliwy traf.",
        "znaczenie_odw": "Pech, opór przed zmianami, trudny okres.",
        "opis": "Wielkie koło z symbolami, wokół którego krążą mityczne stworzenia.",
        "tlumaczenie": "Sfinks na szczycie koła to stabilność w zmianie, a cztery uskrzydlone istoty w rogach to stałe znaki zodiaku (wiedza)."
    },
    {
        "NazwaEng": "Justice",
        "nazwa": "Sprawiedliwość",
        "obrazek": "Justice11.jpg",
        "znaczenie_góra": "Równowaga, prawda, prawo, odpowiedzialność.",
        "znaczenie_odw": "Niesprawiedliwość, brak uczciwości, stronniczość.",
        "opis": "Siedząca postać trzymająca miecz i wagę.",
        "tlumaczenie": "Miecz obosieczny oznacza, że prawda tnie w obie strony, a waga to logiczne ważenie faktów bez emocji."
    },
    {
        "NazwaEng": "The Hanged Man",
        "nazwa": "Wisielec",
        "obrazek": "TheHangedMan12.jpg",
        "znaczenie_góra": "Poświęcenie, nowa perspektywa, zatrzymanie, cierpliwość.",
        "znaczenie_odw": "Egoizm, stagnacja, bezużyteczne czekanie.",
        "opis": "Mężczyzna wiszący głową w dół, z aureolą wokół głowy, zachowujący spokój.",
        "tlumaczenie": "Odwrócona pozycja sugeruje widzenie świata inaczej niż tłum, a aureola to oświecenie płynące z akceptacji losu."
    },
    {
        "NazwaEng": "Death",
        "nazwa": "Śmierć",
        "obrazek": "Death13.jpg",
        "znaczenie_góra": "Koniec etapu, transformacja, głęboka zmiana.",
        "znaczenie_odw": "Opór przed zmianą, powolny proces, lęk przed nowym.",
        "opis": "Szkielet w zbroi na białym koniu, symbolizuje naturalne zakończenie cyklu.",
        "tlumaczenie": "Biała róża na czarnej fladze to życie rodzące się z oczyszczenia, a wschodzące słońce w tle to nadzieja na odrodzenie."
    },
    {
        "NazwaEng": "Temperance",
        "nazwa": "Umiarkowanie",
        "obrazek": "Temperence14.jpg",
        "znaczenie_góra": "Równowaga, cierpliwość, spokój, łączenie przeciwieństw.",
        "znaczenie_odw": "Brak balansu, nadmiar, niecierpliwość, konflikt.",
        "opis": "Anioł przelewający wodę między dwoma pucharami.",
        "tlumaczenie": "Jedna stopa w wodzie (emocje) i jedna na lądzie (materia) oznaczają potrzebę stabilnego łączenia obu tych światów."
    },
    {
        "NazwaEng": "The Devil",
        "nazwa": "Diabeł",
        "obrazek": "TheDevil15.jpg",
        "znaczenie_góra": "Zniewolenie, nałogi, materializm, cienie psychiki.",
        "znaczenie_odw": "Wyzwolenie, odzyskanie wolności, uświadomienie sobie błędów.",
        "opis": "Rogata postać trzymająca na łańcuchach kobietę i mężczyznę.",
        "tlumaczenie": "Luźne łańcuchy na szyjach ludzi oznaczają, że zniewolenie jest dobrowolne i można je przerwać w każdej chwili siłą świadomości."
    },
    {
        "NazwaEng": "The Tower",
        "nazwa": "Wieża",
        "obrazek": "TheTower16.jpg",
        "znaczenie_góra": "Nagła zmiana, kryzys, zburzenie fałszywych fundamentów.",
        "znaczenie_odw": "Uniknięcie katastrofy, strach przed zmianą, ukryty kryzys.",
        "opis": "Wieża rażona piorunem, z której spadają ludzie; symbol upadku ego.",
        "tlumaczenie": "Piorun to nagły błysk prawdy niszczący to, co zbudowane na kłamstwie, a spadająca korona to upadek dumy."
    },
    {
        "NazwaEng": "The Star",
        "nazwa": "Gwiazda",
        "obrazek": "TheStar17.jpg",
        "znaczenie_góra": "Nadzieja, inspiracja, odnowa, spokój ducha.",
        "znaczenie_odw": "Zniechęcenie, pesymizm, brak wiary, oschłość.",
        "opis": "Naga kobieta wylewająca wodę do rzeki i na ziemię pod gwieździstym niebem.",
        "tlumaczenie": "Wylewanie wody oznacza dzielenie się swoimi zasobami i emocjami, a osiem gwiazd to harmonia i nowe światło po burzy."
    },
    {
        "NazwaEng": "The Moon",
        "nazwa": "Księżyc",
        "obrazek": "TheMoon18.jpg",
        "znaczenie_góra": "Iluzja, lęk, niepewność, sny, intuicja.",
        "znaczenie_odw": "Odkrycie prawdy, ustąpienie lęku, wyjaśnienie sytuacji.",
        "opis": "Dwa psy wyjące do księżyca, rak wychodzący z wody.",
        "tlumaczenie": "Rak wychodzący z wody to lęki wynurzające się z podświadomości, a droga między wieżami prowadzi w głąb nieznanego umysłu."
    },
    {
        "NazwaEng": "The Sun",
        "nazwa": "Słońce",
        "obrazek": "TheSun19.jpg",
        "znaczenie_góra": "Radość, sukces, witalność, optymizm, oświecenie.",
        "znaczenie_odw": "Chwilowe zachmurzenie, przesada, spowolniony sukces.",
        "opis": "Dziecko na koniu pod wielkim, promiennym słońcem.",
        "tlumaczenie": "Słoneczniki za murem oznaczają życie w pełnym rozkwicie, a nagość dziecka to absolutna szczerość i brak wstydu."
    },
    {
        "NazwaEng": "Judgement",
        "nazwa": "Sąd Ostateczny",
        "obrazek": "Judgement20.jpg",
        "znaczenie_góra": "Przebudzenie, rozliczenie z przeszłością, powołanie.",
        "znaczenie_odw": "Poczucie winy, brak zdecydowania, ignorowanie faktów.",
        "opis": "Ludzie wstający z grobów na dźwięk trąby anielskiej.",
        "tlumaczenie": "Trąba Archanioła to wezwanie do wyższej świadomości, a groby to stara tożsamość, którą należy zostawić za sobą."
    },
    {
        "NazwaEng": "The World",
        "nazwa": "Świat",
        "obrazek": "TheWorld21.jpg",
        "znaczenie_góra": "Dopełnienie, sukces, integracja, podróże, spełnienie.",
        "znaczenie_odw": "Brak domknięcia spraw, opóźnienie, niepełne zwycięstwo.",
        "opis": "Postać tańcząca w wieńcu laurowym, otoczona symbolami czterech ewangelistów.",
        "tlumaczenie": "Wieniec laurowy symbolizuje sukces, a dwie laski w dłoniach tancerki oznaczają równowagę między braniem a dawaniem energii."
    }
];