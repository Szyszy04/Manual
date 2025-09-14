// data.js - KOMPLETNA BAZA DANYCH DRINKÓW (70 DRINKÓW!)

// Dane wódek
export const vodkas = [
    { name: "Belvedere", price: "28,00", country: "Polska", ingredient: "Żyto" },
    { name: "Belvedere Lake Bartężek", price: "39,00", country: "Polska", ingredient: "Żyto" },
    { name: "Belvedere Organic Infusions Blackberry & Lemongrass", price: "39,00", country: "Polska", ingredient: "Żyto" },
    { name: "Belvedere Organic Infusions Lemon & Basil", price: "39,00", country: "Polska", ingredient: "Żyto" },
    { name: "Belvedere Organic Infusions Pear & Ginger", price: "39,00", country: "Polska", ingredient: "Żyto" },
    { name: "Belvedere Smogóry Forest", price: "39,00", country: "Polska", ingredient: "Żyto" },
    { name: "Chopin Potato", price: "35,00", country: "Polska", ingredient: "Ziemniaki" },
    { name: "Grey Goose", price: "28,00", country: "Francja", ingredient: "Pszenica (winter wheat)" },
    { name: "Młody Ziemniak 2021", price: "28,00 L", country: "Polska", ingredient: "Ziemniaki" },
    { name: "Ostoya Vodka", price: "19,00", country: "Polska", ingredient: "Pszenica" },
    { name: "Ostoya Black", price: "21,00", country: "Polska", ingredient: "Pszenica" },
    { name: "Podole Wielkie Okowita Pszenica", price: "29,00", country: "Polska", ingredient: "Pszenica" },
    { name: "Podole Wielkie Okowita Żyto", price: "29,00", country: "Polska", ingredient: "Żyto" },
    { name: "Podole Wielkie Okowita Ziemniak", price: "29,00", country: "Polska", ingredient: "Ziemniaki" }
];

// Biblioteka informacji o alkocholach
export const alcoholLibrary = {
    "Tequila": [
        {
            name: "Patrón Silver",
            description: "Krystalicznie czysta tequila premium o łagodnym smaku z delikatną nutą cytrusów. To prawdziwe 'płynne srebro', które doskonale oddaje czysty smak agawy. Każda butelka jest ręcznie numerowana i podpisana, co gwarantuje jej wyjątkowość. Idealnie sprawdzi się zarówno do degustacji solo, jak i jako fundament dla koktajli Margarita."
        },
        {
            name: "Patrón Reposado",
            description: "Leżakuje średnio 6 miesięcy w dębowych beczkach, łącząc świeżość Silver z subtelną nutką dębu. Oferuje idealnie zbalansowany smak agawy z nutkami cytrusów i miodu. To doskonały kompromis między młodością a dojrzałością."
        },
        {
            name: "Patrón Añejo",
            description: "Minimum 12 miesięcy dojrzewania w beczkach z białego dębu z Francji, Węgier i Ameryki daje jej bogaty smak z nutami wanilii, miodu, rodzynek i delikatną nutką melona. Każda butelka jest starannie wykonana i numerowana ręcznie. To tequila dla prawdziwych koneserów."
        }
    ],
    "Amerykańskie Whiskey": [
        {
            name: "Angel's Envy",
            description: "Nazwa 'Angel's Envy' niesie ze sobą legendę 5% alkoholu, który 'anioły piją' podczas procesu starzenia, znane jako 'Angel's Share'. Unikalny bourbon wykończony w beczkach po porto, co nadaje mu charakterystyczną słodycz i owocowe nuty."
        },
        {
            name: "Jim Beam Black",
            description: "7-letnie dojrzewanie w spalanych beczkach dębowych daje mu gładkość wzbogaconą nutami słodkiego karmelu, wanilii i charakterystycznego dla bourbona palonego dębu. W aromacie dominują wanilia, karmel i pomarańcza, a w smaku słodkie, zrównoważone tony z korzennymi nutami."
        },
        {
            name: "Jim Beam Rye",
            description: "Charakterystyczna pikantność żyta nadaje mu więcej charakteru i przypraw w porównaniu do klasycznego bourbona."
        },
        {
            name: "Maker's Mark",
            description: "Słynny z używania 16% miękkiej czerwonej pszenicy ozimej zamiast tradycyjnego żyta, co nadaje mu wyjątkową słodycz. Charakterystyczna czerwona pieczęć woskowa to dzieło Margie Samuels, współzałożycielki destylarni. W smaku królują wanilia z krówką i delikatna dymna nuta."
        },
        {
            name: "Maker's Mark 46",
            description: "Ulepszona wersja z dodatkowymi francuskimi dębowymi klepkami, które dodają złożoności i głębi smaku."
        }
    ],
    "Johnnie Walker": [
        {
            name: "Johnnie Walker Aged 18 Year",
            description: "Najbardziej wykwintne destylarnie Szkocji. Profil smakowy: bogaty i złożony, nuty suszonych owoców, wanilia, czekolada oraz wyczuwalna szlachetna dębina. Finisz jest długi, aksamitny, lekko pikantny – daje uczucie pełnej harmonii blendu."
        },
        {
            name: "Johnnie Walker Black Label",
            description: "Ikona szkockiego blendu, powstała z whisky dojrzewających minimum 12 lat, łączy dymność z Islay, słodkość z grain oraz owocowe nuty z Speyside. Profil smakowy: wyczuwalne nuty słodkiego dymu torfowego, wanilii, toffi, owoców i przypraw korzennych. Aromat jest elegancki, lekko zbożowy, z wyraźną pikantnością, a finisz średniej długości z nutą dębową"
        },
        {
            name: "Johnnie Walker Black Label Sherry Finish",
            description: "Niezwykła wariacja klasycznego Black Label z finiszem w beczkach po sherry – idealny dla miłośników owocowej głębi. Profil smakowy: intensywne nuty czerwonych owoców, suszonych wiśni i sherry, przeplatają się ze słodyczą wanilii, czekolady, przyprawami i delikatnym torfem. Finisz jest wyraźnie wytrawny, z nutą pieprzu i migdałów, wzbogacony o lekko taniczne akcenty oraz dymny ślad"
        },
        {
            name: "Johnnie Walker Blue Label",
            description: "Uznawany za jeden z najbardziej luksusowych na świecie. Dedykowany dla prawdziwych smakoszy ekskluzywnych destylatów – każda butelka to unikatowa kompozycja. Profil smakowy: niezwykle pełny, złożony i gładki – dojrzałe owoce, nuty orzechów, miodu, dymu, wanilii oraz przypraw. Wyśmienicie długi, śmietankowy finisz, z elegancką harmonijną słodyczą i nutą drewna."
        },
        {
            name: "Johnnie Walker Gold Label Reserve",
            description: "Wyborny, złocisty blend zachwyca miękkością i słodyczą. Profil smakowy: kremowa konsystencja, nuty miodu, wanilii, toffi, karmelu, jabłka, odrobina bananów i delikatnej przyprawy cynamonowej. W tle z subtelnym, lekko dymnym finiszem oraz akcentem imbiru i białego pieprzu."
        },
        {
            name: "Johnnie Walker Green Label",
            description: "Blend single maltów z czterech regionów Szkocji, idealny wybór dla tych, którzy szukają równowagi pomiędzy słodyczą a torfem. Profil smakowy: wyraziste nuty wanilii, toffi, czekolady i owoców, przeplecione z akcentami dymu, przypraw oraz świeżej mięty. Finisz średniej długości, z delikatnym tchnieniem dymu i morskiej bryzy – doskonała harmonia słodyczy i lekkiej pikantności"
        }
    ],
    "Szkockie Single Malty": [
        {
            name: "Aberfeldy 12",
            description: "Z regionu Highlands. Aromat bogaty i pełny z nutami wanilii, jęczmiennego słodu, rodzynek, karmelu, skórki cytrynowej, miodu i ananasa. Smak świeży i zbalansowany z wanilią, miodem, cytrusami i zielonymi jabłkami."
        },
        {
            name: "Aberfeldy 16",
            description: "Głębszy, bardziej złożony smak z dodatkiem nut czekolady, przypraw i czerwonych owoców. W zapachu miód, toffi i cytrusy z pikantną nutką goździków. Zdobyła złote medale na Scotch Whisky Masters."
        },
        {
            name: "Craigellachie 13",
            description: "Speyside o unikalnym charakterze. Aromat owocowy z silną nutą słodową, jabłka, gruszki, morele, wanilia, miód, cynamon i delikatne tony mineralne. W smaku słodki i owocowy z delikatnie oleistą teksturą. Finisz średnio długi z nutami dębu i subtelnym podmuchem torfowego dymu."
        },
        {
            name: "Royal Brackla 12",
            description: "O eleganckim profilu Highland. Finiszowana w beczkach po sherry oloroso. Subtelna w smaku, z wyczuwalnymi nutami dojrzałych brzoskwiń i prażonych migdałów."
        },
        {
            name: "Deveron 12",
            description: "Dawniej Glen Deveron, zmienił nazwę w 2015 roku. Przyjemny zapach charakteryzujący się mieszanką jabłek w toffee, imbiru i delikatnym aromatem przypraw korzennych. W smaku świeżo pieczona szarlotka, kremowy karmel i wyraźny akcent słodu."
        },
        {
            name: "Aultmore 12",
            description: "To klasyczna whisky z regionu Speyside. Aromatyczna, elegancka i nieskomplikowana. Aromat: owoce z sadu, miód, lawenda."
        }
    ],
    "Rumy": [
        {
            name: "Bacardi Carta Blanca",
            description: "Klasyczny biały rum, pierwszy biały rum specjalnie przeznaczony do koktajli. Subtelne nuty wanilii, migdałów i owoców tropikalnych"
        },
        {
            name: "Bacardi Reserva Ocho",
            description: "8-letnie dojrzewanie w dębowych beczkach nadaje mu głęboki, mahoniowo-złocisty kolor. Aromat pełen suszonych śliwek, moreli, fig, wanilii i karmelu z akcentami przypraw. Smak aksamitny z nutami suszonych owoców, karmelizowanego banana i syropu klonowego. To rum który był przez 136 lat produkowany wyłącznie dla rodziny Bacardi."
        },
        {
            name: "Banks 5",
            description: "Blend rumów z pięciu różnych krajów karaibskich, każdy wnosi swój unikalny charakter. Można wyczuć w nim nuty melasy, zielonej herbaty, cytrusów, pieprzu, cynamonu, miodu, karmelu i drewna dębowego."
        },
        {
            name: "Santa Teresa 1796",
            description: "Wenezuelski rum dojrzewający metodą solera w beczkach po bourbonie i koniaku. Od 4 do 35 lat dojrzewania. Aromat słodki i owocowy z nutami miodu, karmelu, toffi, gorzkiej czekolady."
        }
    ],
    "Giny": [
        {
            name: "Bombay Sapphire",
            description: "Destylowany metodą parowej infuzji z 10 botaników z całego świata. Charakterystyczne błękitne butelki inspirowane orientalnymi motywami. Harmonijne połączenie jałowca, cytrusów, korzennych przypraw i delikatej kwiatowości."
        },
        {
            name: "Gin Mare",
            description: "Śródziemnomorski gin z oliwkami, tymiankiem, rozmarynem i bazylią."
        },
        {
            name: "Tanqueray No. 10",
            description: "Premium gin z świeżymi cytrusami destylowanymi w małym szkarłatnym alembiku 'Tiny Ten'."
        },
        {
            name: "Oxley",
            description: "Rewolucyjny gin destylowany w temperaturze -5°C. Pierwszy gin wykorzystujący próżniową destylację zimną. 8 lat prac nad 38 recepturami zaowocowało unikalnym profilem z 14 botaników."
        },
        {
            name: "Monkey 47",
            description: "Niemiecki gin z Schwarzwaldu zawierający 47 botaników! Wiodące składniki to jałowiec, lawenda, szyszki świerkowe oraz egzotyczne botaniki jak aframon madagaskarski. Produkowany w małych 100-litrowych alembikach."
        },
        {
            name: "Hendrick's",
            description: "Szkocki gin infuzowany esencją ogórka i płatkami róż bułgarskiej. Najlepiej podawać z plasterkami ogórka zamiast cytrusów."
        }
    ]
};

// KOMPLETNA BIBLIOTEKA DRINKÓW - 70 DRINKÓW W 6 KATEGORIACH!
export const drinkLibrary = {
    "Wódka": [
        {
            name: "Bloody Mary",
            glass: "Collins",
            method: [
                "Do shakera wlewamy wszystkie składniki (z wyjątkiem oliwy truflowej)",
                "Mieszamy łyżeczką barmańską",
                "Szkło opruszamy picanto mix",
                "Przelewamy do szkła w pełni wypełnionego lodem",
                "Skrapiamy wierzch oliwą truflową"
            ],
            ingredients: [
                "50 ml Wódka",
                "100 ml Big Tom Tomato Juice",
                "10 ml Sok z cytryny",
                "10 ml Bloody Mary Mix",
                "3 krople oliwy truflowej"
            ],
            decoration: "Oliwka na szpadce - plus wierzch koktajlu skropiony oliwą truflową - picanto mix na szkle, slice ogórka"
        },
        {
            name: "Cosmopolitan",
            glass: "Nick & Nora",
            method: [
                "Do szklanicy wlewamy premix",
                "Mieszamy koktajl około 15 sekund",
                "Cedzimy do uprzednio zmrożonego szkła"
            ],
            ingredients: [
                "30 ml Wódka",
                "10 ml Aperol",
                "30 ml Kordiał z Żurawiny i Róży",
                "10 ml Esencji z trawy cytrynowej",
                "różowy glitter"
            ],
            decoration: "suszony, czerwony kwiatostan róży"
        },
        {
            name: "Espresso Martini",
            glass: "Nick & Nora",
            method: [
                "Wszystkie składniki intensywnie wstrząsamy z dużą ilością lodu",
                "Cedzimy podwójnie do uprzednio zmrożonego szkła"
            ],
            ingredients: [
                "40 ml Wódka",
                "20 ml Galliano Espresso",
                "10 ml Syrop Waniliowy",
                "1 espresso",
                "1 x dash Angostura Cocoa Bitters"
            ],
            decoration: "tarta fasola tonka + bezik"
        },
        {
            name: "Golden Cadillac",
            glass: "Nick & Nora",
            method: [
                "Wlewamy wszystkie składniki do shakera",
                "Wstrząsamy intensywnie",
                "Cedzimy podwójnie do uprzednio zmrożonego szkła"
            ],
            ingredients: [
                "30 ml Creme De Cacao",
                "30 ml Galliano Autentico",
                "30 ml Half Half"
            ],
            decoration: "Bezik plus gorzka tarta czekolada + złoty pył"
        },
        {
            name: "Grasshooper",
            glass: "Nick & Nora",
            method: [
                "Wlewamy wszystkie składniki do shakera",
                "Wstrząsamy intensywnie",
                "Cedzimy podwójnie do uprzednio zmrożonego szkła"
            ],
            ingredients: [
                "20 ml Creme De Cacao",
                "20 ml Creme De Menthe",
                "20 ml Wódka",
                "30 ml Half Half"
            ],
            decoration: "Bezik plus gorzka tarta czekolada"
        },
        {
            name: "Long Island Iced Tea",
            glass: "Swizzle Glass",
            method: [
                "Wlewamy wszystkie składniki do shakera (poza Colą)",
                "Wstrząsamy intensywnie",
                "Szkło uzupełniamy lodem i wlewamy 40 ml Coca Coli",
                "Na lód przelewamy powoli koktajl, cedząc pojedyńczo"
            ],
            ingredients: [
                "20 ml Gin",
                "20 ml Wódka",
                "20 ml Rum",
                "20 ml Cointreau",
                "20 ml Tequila",
                "10 ml syropu cukrowego",
                "20 ml soku z cytryny",
                "40 ml Coca Coli"
            ],
            decoration: "Plasterek cytryny"
        },
        {
            name: "Pornstar Martini",
            glass: "Coupe + kieliszek do wódki",
            method: [
                "Wszystkie składniki wstrząsamy z dużą ilością lodu",
                "Cedzimy podwójnie do uprzednio zmrożonego szkła"
            ],
            ingredients: [
                "40 ml wódka",
                "20 ml syropu waniliowego",
                "20 ml soku z limonki",
                "20 ml przecieru z marakui",
                "Obok koktajlu - shot prosecco"
            ],
            decoration: "posypka z pudru buraczanego + kwiatostan róży"
        },
        {
            name: "Vodka Sour",
            glass: "Double Old Fashioned Glass",
            method: [
                "Wstrząsamy wszystko bez lodu (szybki dry shake)",
                "Kolejno dynamiczny shake z lodem",
                "Cedzimy całość na lód (kości) do szkła"
            ],
            ingredients: [
                "40 ml Wódka",
                "25 ml soku z cytryny",
                "15 ml syropu cukrowego",
                "20 ml Albumina",
                "1 x dash Angostura Bitters"
            ],
            decoration: "coin z pomarańczy"
        },
        {
            name: "Kyiv Mule",
            glass: "Collins",
            method: [
                "Do copper muga wlewamy wszystkie składniki",
                "Mieszamy łyżeczką w celu połączenia wszystkich składników",
                "Zasypujemy w pełni lodem"
            ],
            ingredients: [
                "40 ml Wódka",
                "15 ml soku z limonki",
                "10 ml syropu cukrowego",
                "100 ml Thomas Henry Spicy Ginger",
                "1 x dash Angostura Bitters"
            ],
            decoration: "2 szczypy mięty + ćwiartka limonki"
        }
    ],
    "Gin": [
        {
            name: "ARM & NAVY",
            glass: "Nick & Nora",
            method: [
                "Wszystkie składniki wstrząsamy z dużą ilością lodu.",
                "Cedzimy koktajl podwójnie.",
                "Spryskujemy całość olejkami cytrynowymi.",
            ],
            ingredients: [
                "50 ml London Dry Gin",
                "20 ml Orgeat",
                "20 ml soku z cytryny",
                "1 dash Angostura Bitters",
            ],
            decoration: "olejki z cytryny + coin z cytryny"
        },
        {
            name: "AVIATION",
            glass: "Nick & Nora",
            method: [
                "Wstrząsamy wszystkie składniki z dużą ilością lodu.",
                "Cedzimy do uprzednio zmrożonego szkła.",
                "Okraszamy olejkami cytrynowymi.",
            ],
            ingredients: [
                "50 ml London Dry Gin",
                "10 ml Luxardo Maraschino",
                "5 ml Briottet - Violet",
                "15 ml Sok z cytryny",
                "2,5 ml syrop cukrowy",
            ],
            decoration: "Wiśnia Koktajlowa + olejki cytrynowe"
        },
        {
            name: "BEE’S KNEES",
            glass: "Nick & Nora",
            method: [
                "Wszystkie składniki wstrząsamy z dużą ilością lodu.",
                "Cedzimy koktajl podwójnie.",
                "Spryskujemy całość olejkami pomarańczowymi",
            ],
            ingredients: [
                "50 ml London Dry Gin",
                "20 ml syropu miodowo",
                "20 ml soku z cytryny",
                "20 ml soku z pomarańczy",
            ],
            decoration: "zest z pomarańczy przypięty do stópki"
        },
        {
            name: "BIJOU",
            glass: "Nick & Nora",
            method: [
                "Wszystkie składniki mieszamy w szklanicy przez około 15 - 20",
                "Cedzimy do uprzednio zmrożonego szkła.",
                "Spryskujemy olejkami cytrynowymi.",
            ],
            ingredients: [
                "20 ml London Dry Gin",
                "20 ml Martini Rubino",
                "20 ml Green Chartreuse",
                "1 dash Orange Bitters",
            ],
            decoration: "Olejki z cytryny i wiśnia"
        },
        {
            name: "Bombay & Tonic",
            glass: "Copa Bombay",
            method: [
                "Do kieliszka wlewamy Gin",
                "zasypujemy w pełni lodem",
                "Dopełniamy cocktail tonikiem.",
            ],
            ingredients: [
                "40 ml London Dry Gin",
                "Top Up Thomas Henry Tonic",
            ],
            decoration: "1/4 limonki ułożona po środku koktajlu"
        },
        {
            name: "BRAMBLE",
            glass: "Collins",
            method: [
                "Do szkła wlewamy gin, sok z cytryny i cukier.",
                "Uzupełniamy szkło w 3/4 kruszonym lodem i intensywnie",
                "Dopełniamy kruszonym lodem, tak aby ponad rant wystawał lekki",
                "Nalewamy na wierzch likier Chambord.",
                "Dekorujemy i serwujemy z rurką.",
            ],
            ingredients: [
                "40 ml London Dry Gin Gin",
                "20 ml soku z cytryny",
                "10 ml syropu cukrowego",
                "15 ml Chambord",
            ],
            decoration: "kwiat gipsówki"
        },
        {
            name: "BREAKFAST MARTINI",
            glass: "Nick & Nora",
            method: [
                "Wszystkie składniki mocno wstrząsamy z dużą ilością lodu.",
                "Cedzimy podwójnie do uprzednio zmrożonego szkła.",
                "Okraszamy koktajl olejkami pomarańczowymi i dekorujemy żółtą",
            ],
            ingredients: [
                "50 ml London Dry Gin",
                "15 ml Cointreau",
                "20 ml sok z cytryny",
            ],
            decoration: "olejki pomarańczowe i żółta różyczka położona na wierzchu."
        },
        {
            name: "CHARLIE CHAPLIN",
            glass: "",
            method: [],
            ingredients: [
                "30 ml Hayman’s Sloe Gin",
                "30 ml Archer’s",
                "30 ml sok z limonki",
            ],
            decoration: ""
        },
        {
            name: "CHRYSANTHEMUM",
            glass: "Nick & Nora",
            method: [
                "Wszystkie składniki wlewamy do szklanicy.",
                "Mieszamy około 15 sekund.",
                "Cedzimy całość do uprzednio zmrożonego szkła.",
                "zest z cytryny wycięty nożyczkami krawieckimi -",
            ],
            ingredients: [
                "60 ml Noilly Prat",
                "10 ml D.O.M. Benedictine",
                "1 dash Absynth",
            ],
            decoration: "zest z cytryny wycięty nożyczkami krawieckimi -"
        },
        {
            name: "CLOVER CLUB",
            glass: "Nick & Nora",
            method: [
                "Wszystkie składniki wstrząsamy energicznie bez lodu.",
                "Kolejno mocny shake z dużą ilością lodu.",
                "Cedzimy podwójnie koktajl do uprzednio zmrożonego szkła.",
                "Na środku układamy odrobinę maliny iofilizowanej oraz",
            ],
            ingredients: [
                "40 ml London Dry Gin",
                "10 ml Martini Extra Dry",
                "20 ml soku z cytryny",
                "15 ml syropu malinowego",
                "2,5 ml cukru (łyżeczka barmańska)",
                "15 ml Albumina",
            ],
            decoration: "na środku koktajlu odrobinę maliny iofilizowanej + kwiat"
        },
        {
            name: "Corpse",
            glass: "Nick & Nora",
            method: [
                "Wszystkie składniki wstrząsamy z dużą ilością lodu.",
                "Zmrożone szkło spryskujemy absynthem.",
                "Cedzimy koktajl podwójnie.",
                "Spryskujemy całość olejkami cytrynowymi.",
                "Zest z cytryny karbowany przypinamy do stópki za pomocą",
            ],
            ingredients: [
                "20 ml London Dry Gin",
                "20 ml Cocchi Americano",
                "20 ml Cointreau",
                "20 ml soku z cytryny",
            ],
            decoration: "zest z cytryny wycięty nożyczkami krawieckimi -"
        },
        {
            name: "DRY MARTINI",
            glass: "Nick & Nora",
            method: [
                "Wszystkie składniki wlewamy do szklanicy.",
                "Mieszamy z lodem dłużej - rozcieńczamy bardziej koktajl.",
                "Cedzimy na oliwkę do uprzednio zmrożonego szkła.",
                "Spryskujemy całość olejkami cytrynowymi.",
            ],
            ingredients: [
                "50 ml London Dry Gin (z zamrażarki*)",
                "10 ml Noilly Prat",
                "1 dash Orange Bitters",
            ],
            decoration: "oliwka + olejki cytrynowe"
        },
        {
            name: "gimlet",
            glass: "Nick & Nora",
            method: [],
            ingredients: [
                "50 ml London Dry Gin",
                "20 ml Food Town Bars Lime Cordial",
            ],
            decoration: "olejki ze skórki grejpfrutowej + 3 krople oliwy mandarynkowej"
        },
        {
            name: "GIN BASIL SMASH",
            glass: "Old Fashioned",
            method: [
                "Bazylię układamy na dnie shakera.",
                "Przykrywamy ją połówką cytryny i dodajemy cukier.",
                "Ucieramy przyciskając na cytrynę.",
                "Dodajemy gin i wstrząsamy potężnie z dużą ilością lodu.",
                "Cedzimy podwójnie do szkła w pełni wypełnionego lodem.",
                "Dekorujemy.",
            ],
            ingredients: [
                "50 ml London Dry Gin",
                "20 ml syrop cukrowy",
            ],
            decoration: "3 liście bazylii"
        },
        {
            name: "GIN GIN MULE",
            glass: "Collins",
            method: [
                "Wszystkie składniki (z wyjątkiem piwa imbirowego)",
                "Cedzimy na lód do wysokiego szkła.",
                "Dopełniamy piwem imbirowym.",
                "Mieszamy łyżeczką i dekorujemy miętą oraz ogórkiem.",
            ],
            ingredients: [
                "40 ml London Dry Gin",
                "20 ml syrop miód i imbir",
                "20 ml soku z limonki",
                "Piwo Imbirowe - Top Up.",
            ],
            decoration: "Bukiet mięty + plasterek ogórka"
        },
        {
            name: "HANKY PANKY",
            glass: "Nick & Nora",
            method: [
                "Wszystkie składniki mieszamy około 20 sekund w szklanicy.",
                "Cedzimy całość do uprzednio zmrożonego szkła.",
                "Okraszamy całość olejkami pomarańczowymi.",
                "Wrzucamy do środka kółko z pomarańczy.",
            ],
            ingredients: [
                "40 ml Gin London Dry Gin",
                "40 ml Carpano Antica Formula",
                "2,5 ml Fernet Branca",
            ],
            decoration: "kółko z pomarańczy (,,coin”)"
        },
        {
            name: "LAST WORD",
            glass: "Nick & Nora",
            method: [],
            ingredients: [
                "20 ml London Dry Gin",
                "20 ml Chartreuse Green",
                "20 ml Luxardo Maraschino",
                "20 ml Sok z limonki",
            ],
            decoration: "olejki z limonki + wiśnia koktajlowa"
        },
        {
            name: "Martinez",
            glass: "Nick & Nora",
            method: [
                "Wszystkie składniki mieszamy przez około 15 sekund.",
                "kolejno cedzimy do uprzednio zmrożonego szkła.",
                "Okraszamy olejkami pomarańczowymi i do środka wrzucamy",
            ],
            ingredients: [
                "50 ml London Dry Gin",
                "20 ml Carpano Antica",
                "10 ml Noilly Prat",
                "5 ml Luxardo Maraschino / Cointreau",
                "1 dash Orange Bitters",
                "1 dash Angostura Bitters",
            ],
            decoration: "Wiśnia + olejki pomarańczowe"
        },
        {
            name: "NEGRONI",
            glass: "Whisky Glass",
            method: [
                "Wlewamy wszystkie składniki do szklanicy.",
                "Mieszamy przez około 10 - 15 sekund.",
                "Cedzimy do szkła po ściance (nie na bryłkę - tak aby nie zmazać",
                "Okraszamy całość olejkami pomarańczowymi i dekorujemy żółtkiem",
            ],
            ingredients: [
                "20 ml London Dry Gin",
                "20 ml Martini Rubino",
                "20 ml Martini Bitter",
            ],
            decoration: "olejki pomarańczowe + kółko ,,coin” z pomarańczy."
        },
        {
            name: "RAMOS GIN FIZZ",
            glass: "Collins",
            method: [
                "Wstrząsamy wszystkie składniki intensywnie bez lodu.",
                "Wstrząsamy potężnie, doprawdy intensywnie koktajl przez około",
                "Cedzimy do szkła (doskonale kiedy jest zmrożone.",
                "Wypłukujemy shaker odrobiną wody gazowanej.",
                "Wlewamy powoli wodę gazowaną na środek koktajlu chcąc",
                "Z wierzchu kładziemy żółtą różyczkę.",
            ],
            ingredients: [
                "50 ml Ford’s Gin",
                "20 ml syrop cukrowy",
                "15 ml soku z cytryny",
                "15 ml soku z limonki",
                "30 ml half half",
                "20 ml Albumina",
                "5 kropli wody z kwiatu",
                "ok.40 ml wody gazowanej",
            ],
            decoration: "1 żółta różyczka + olejki z cytryny"
        },
        {
            name: "SINGAPORE SLING",
            glass: "Collins",
            method: [
                "Wszystkie składniki wstrząsamy intensywnie z lodem",
                "Cedzimy do szkła na lód.",
            ],
            ingredients: [
                "40 ml London Dry Gin",
                "15 ml Cherry Heering",
                "5 ml D.O.M. Benedictine",
                "5 ml Cointreau",
                "50 ml przecier ananasowy",
                "20 ml sok z limonki",
                "2,5 ml syrop z maliny",
            ],
            decoration: "suszka z limonki + wiśnia na szpadce"
        },
        {
            name: "Southside",
            glass: "Nick & Nora",
            method: [
                "Wstrząsamy wszystkie składniki z dużą ilością lodu.",
                "Cedzimy podwójnie do uprzednio zmrożonego szkła.",
                "Dekorujemy miętą wsadzoną w czips z limonki.",
            ],
            ingredients: [
                "50 ml London Dry Gin",
                "15 ml syrop miętowy",
                "20 ml sok z limonki",
            ],
            decoration: "mięta w czipsie limonkowym"
        },
        {
            name: "TUXEDO COCKTAIL",
            glass: "Nick & Nora",
            method: [
                "Wszystkie składniki mieszamy około 20 sekund w szklanicy.",
                "Cedzimy całość do uprzednio zmrożonego szkła.",
                "Okraszamy całość olejkami cytrynowymi.",
                "Wrzucamy do środka wiśnie.",
            ],
            ingredients: [
                "30 ml Hayman’s Old Tom Gin",
                "30 ml Noilly Prat",
                "5 ml Luxardo Maraschino",
                "2 x dash Orange Bitters",
                "1 x dash Angostura Bitters",
                "1 x spray Absynth",
            ],
            decoration: "olejki cytrynowe + wiśnia"
        },
        {
            name: "vesper MARTINI",
            glass: "Mini Coupette",
            method: [
                "Wszystkie składniki wlewamy do shakera.",
                "Wstrząsamy całość niezwykle mocno.",
                "Cedzimy podwójnie do uprzednio zmrożonego szkła.",
                "Spryskujemy całość dużym zestem i wkładamy go do środka.",
            ],
            ingredients: [
                "30 ml London Dry Gin",
                "10 ml Wódka Vodka",
                "5 ml Cocchi Americano",
            ],
            decoration: "Zest z cytryny włożony do środka"
        },
        {
            name: "WHITE LADY",
            glass: "Nick & Nora",
            method: [
                "Wszystkie składniki wstrząsamy bez lodu.",
                "Kolejno wstrząsamy z dużą ilością lodu.",
                "Cedzimy do uprzednio zmrożonego szkła.",
                "Okraszamy olejkami cytrynowymi i dekorujemy dwiema żółtymi",
            ],
            ingredients: [
                "50 ml Gin London Dry Gin",
                "20 ml Cointreau",
                "20 ml soku z cytryny",
                "5 ml cukru",
                "15 ml Albuminy",
            ],
            decoration: "2 żółte różyczki + olejki cytrynowe"
        },
        {
            name: "white NEGRONI",
            glass: "Whisky Glass",
            method: [
                "Wlewamy wszystkie składniki do szklanicy.",
                "Mieszamy przez około 10 - 15 sekund.",
                "Cedzimy do szkła po ściance (nie na bryłkę - tak aby nie zmazać",
                "Okraszamy całość olejkami grejpfrutowymi i i dekorujemy żółtkiem",
            ],
            ingredients: [
                "20 ml London Dry Gin",
                "20 ml Suze",
                "20 ml Lillet Blanc",
            ],
            decoration: "olejki grejpfrutowe + zest z grejpfruta wycięty nożyczkami"
        },
        {
            name: "XX CENTURY COCKTAIL",
            glass: "Nick & Nora",
            method: [
                "Wszystkie składniki wstrząsamy z dużą ilością lodu.",
                "Cedzimy koktajl podwójnie.",
                "Spryskujemy całość olejkami cytrynowymi.",
                "Dekorujemy zestem z cytryny.",
            ],
            ingredients: [
                "20 ml London Dry Gin",
                "20 ml Cocchi Americano",
                "20 ml creme de cacao",
                "20 ml soku z cytryny",
            ],
            decoration: "zest z cytryny, przypięty do rantu szkła"
        },
        {
            name: "Pisco Sour",
            glass: "Nick & Nora",
            method: [
                "Wszystkie składniki wstrząsamy bez lodu.",
                "Kolejno wstrząsamy z dużą ilością lodu",
                "Cedzimy podwójnie do uprzednio zmrożonego szkła.",
            ],
            ingredients: [
                "50 ml Pisco",
                "30 ml soku z limonki",
                "20 ml syropu cukrowego",
                "20 ml albumina",
            ],
            decoration: "3 krople Angostura Bitters na wierzchu koktajlu -"
        },
        {
            name: "Martini Fiero & Tonik",
            glass: "Copa Martini",
            method: [
                "Wlewamy 80 ml Martini Fiero do kieliszka",
                "Zasypujemy w pełni lodem",
                "Uzupełniamy tonikiem Kinley",
                "Dekorujemy 2 półplastrami pomarańczy",
            ],
            ingredients: [
                "80 ml Aperitif",
                "top up Kinley tonik",
            ],
            decoration: "2 półplastry pomarańczy"
        },
        {
            name: "Vibrante/Floreale Tonik",
            glass: "Copa Martini",
            method: [
                "Wlewamy 40 ml Martini Vibrante/Floreale",
                "Zasypujemy w pełni lodem",
                "Uzupełniamy tonikiem Kinley",
                "Dekorujemy 2 półplastrami pomarańczy",
            ],
            ingredients: [
                "40 ml Vibrante/Floreale",
                "top up Kinley tonik",
            ],
            decoration: "2 półplastry pomarańczy"
        }
    ],
    "Rum": [
        {
            name: "Air Mail",
            glass: "Coupe",
            method: [
                "Wszystkie składniki oprócz Prosecco wstrząsamy z lodem",
                "Cedzimy do szkła",
                "Dopełniamy Prosecco"
            ],
            ingredients: [
                "50 ml Gold Rum",
                "20 ml syrop miodowo imbirowy",
                "20 ml soku z limonki",
                "40 ml Prosecco"
            ],
            decoration: "3 kosteczki imbiru na szpadce"
        },
        {
            name: "Caipirinha",
            glass: "Double Old Fashioned Glass",
            method: [
                "W szkle muddlujemy limonkę z syropem",
                "Dodajemy Cachaçę",
                "Wypełniamy szkło lodem",
                "Mieszamy"
            ],
            ingredients: [
                "50 ml Cachaça",
                "15 ml syropu cukrowego",
                "1/2 limonki (2 ćwiartki)"
            ],
            decoration: "1/4 limonki ułożona po środku koktajlu"
        },
        {
            name: "Classic Rum Swizzle",
            glass: "Collins",
            method: [
                "Wszystkie składniki mieszamy w wysokiej szklance z lodem",
                "Używamy swizzle stick do mieszania",
                "Dopełniamy lodem"
            ],
            ingredients: [
                "50 ml White Rum",
                "30 ml soku z limonki",
                "20 ml syropu cukrowego",
                "4 x dash Angostura Bitters"
            ],
            decoration: "Bukiet mięty + czips z limonki"
        },
        {
            name: "Daiquiri",
            glass: "Nick & Nora",
            method: [
                "Wszystkie składniki wstrząsamy z lodem",
                "Cedzimy podwójnie do uprzednio zmrożonego szkła"
            ],
            ingredients: [
                "50 ml White Rum",
                "20 ml soku z limonki",
                "10 ml syropu cukrowego"
            ],
            decoration: "Zest z limonki"
        },
        {
            name: "Mojito",
            glass: "Collins",
            method: [
                "W szklance muddlujemy mięte z limonką i syropem",
                "Dodajemy rum",
                "Wypełniamy lodem",
                "Dopełniamy wodą gazowaną",
                "Delikatnie mieszamy"
            ],
            ingredients: [
                "50 ml Aged Rum",
                "1/2 limonki",
                "15 ml Syrop Miętowy",
                "8 liści mięty",
                "Woda Gazowana"
            ],
            decoration: "Bukiet mięty opruszony cukrem klasycznym, bądź cytrusowym"
        }
    ],
    "Tequila": [
        {
            name: "PINK CHIHUAHUA",
            glass: "Nick & Nora",
            method: [
                "Wszystkie składniki wstrząsamy bez lodu",
                "Kolejno wstrząsamy z lodem.",
                "Cedzimy podwójnie do uprzednio zmrożonego szkła.",
            ],
            ingredients: [
                "40 ml Tequila Blanco",
                "15 ml soku z limonki",
                "5 ml soku z cytryny",
                "15 ml syropu malinowego",
                "5 ml Orgeat",
                "15 ml Albumina",
            ],
            decoration: "kwiat Gomfreny + pył czerwony"
        },
        {
            name: "margarita",
            glass: "Nick & Nora",
            method: [
                "Szkło dekorujemy solą - crustę umieszczamy,",
                "Wszystkie składniki wstrząsamy intensywnie z dużą ilością",
                "Serwis.",
            ],
            ingredients: [
                "40 ml Tequila Blanco",
                "20 ml Cointreau",
                "20 ml Soku z limonki",
                "dosłownie kilka kropli syropu cukrowego",
            ],
            decoration: "Wysokiej jakości sól na rancie (crusta tylko na połowie"
        },
        {
            name: "LA PALOMA",
            glass: "Collins",
            method: [
                "Ściankę szklanki smarujemy limonką, bądź innym cytrusem.",
                "Do szkła wlewamy wszystkie składniki i mieszamy łyżeczką",
                "Zasypujemy w pełni lodem i dekorujemy grejpfrutem.",
            ],
            ingredients: [
                "40 ml Tequila Blanco",
                "20 ml Agave Mix",
                "20 ml Soku z limonki",
                "100 ml Three Cents",
            ],
            decoration: "mała ćwiartka grejpfruta + miks przypraw na rancie."
        }
    ],
    "Bezalkoholowe": [
        {
            name: "NEGRONI 0%",
            glass: "Whisky Glass",
            method: [
                "Wlewamy wszystkie składniki do szklanicy.",
                "Mieszamy przez około 10 - 15 sekund.",
                "Cedzimy do szkła po ściance (nie na bryłkę - tak aby nie zmazać",
                "Okraszamy całość olejkami pomarańczowymi i dekorujemy żółtkiem",
            ],
            ingredients: [
                "20 ml Gin bezalkoholowy",
                "20 ml Giffard Bitter Syrop",
                "20 ml Aperitif bezalkoholowy",
            ],
            decoration: "olejki pomarańczowe + kółko ,,coin” z pomarańczy."
        },
        {
            name: "Martini Fiero spritz",
            glass: "Copa Martini",
            method: [
                "Wlewamy 80 ml Martini Fiero do kieliszka",
                "Dolewamy 100 ml Martini Prosecco",
                "Zasypujemy w pełni lodem",
            ],
            ingredients: [
                "80 ml Aperitif",
                "100 ml Martini Prosecco",
                "splash sody",
                "dodajemy splash wody gazowanej oraz",
            ],
            decoration: "2 półplastry pomarańczy"
        },
        {
            name: "Martini vibrante/floreale spritz",
            glass: "Copa Martini",
            method: [],
            ingredients: [
                "40 ml Aperitif bezalkoholowy/mFloreale",
                "80 ml Prosecco Medbubbles",
                "20 ml Belvoir Elderflower",
                "splash sody",
                "Wlewamy 40 ml Aperitif bezalkoholowy/Floreale",
                "Dolewamy 80 ml Prosecco",
                "dodajemy splash wody gazowanej oraz",
            ],
            decoration: "2 półplastry pomarańczy"
        }
    ],    "Whiskey": [
        {
            name: "Amaretto Sour",
            glass: "Nick & Nora",
            method: [
                "Wstrząsamy składniki bez lodu",
                "Kolejno energicznie z lodem",
                "Cedzimy koktajl do uprzednio zmrożonego szkła",
                "Posypujemy pudrem buraczanym i po środku kładziemy suszony kwiatostan róży"
            ],
            ingredients: [
                "40 ml Amaretto",
                "10 ml Blended Scotch Whisky",
                "30 ml soku z cytryny",
                "10 ml syropu cukrowego",
                "Albumina"
            ],
            decoration: "wierzch koktajlu posypany pudrem buraczanym oraz suszony kwiatostan róży"
        },
        {
            name: "Blood & Sand",
            glass: "Nick & Nora",
            method: [
                "Wszystkie składniki (z wyjątkiem Islay Malt Spray) wstrząsamy z dużą ilością lodu",
                "Zanim przecedzimy koktajl, szkło spryskujemy Islay Malt Spray",
                "Cedzimy podwójnie koktajl do zmrożonego i okraszonego aromatem Islay Malt Spray szkła",
                "Dodatkowo okraszamy koktajl olejkami pomarańczowymi",
                "Dekorujemy wiśnią"
            ],
            ingredients: [
                "30 ml Aged Scotch Whisky",
                "20 ml Sweet Vermouth",
                "20 ml Cherry Brandy",
                "30 ml sok z pomarańczy",
                "Islay Malt Spray"
            ],
            decoration: "wiśnia na szpadce + olejki pomarańczowe"
        },
        {
            name: "Boulevardier",
            glass: "Old Fashioned",
            method: [
                "Wlewamy składniki do szklanicy",
                "Mieszamy przez około 15 sekund",
                "Kolejno cedzimy do szkła z bryłką lodową ze stemplem (nie lejemy na lód, tylko po ściance aby nie rozmyć stempla)",
                "Okraszamy olejkami pomarańczowymi i na spinacz do rantu szkła przyczepiamy żółtko z pomarańczy"
            ],
            ingredients: [
                "30 ml Bourbon Whiskey",
                "20 ml Martini Bitter",
                "20 ml Sweet Vermouth"
            ],
            decoration: "olejki pomarańczowe + coin z pomarańczy przypięte na spinaczu do rantu szkła"
        },
        {
            name: "Manhattan",
            glass: "Nick & Nora",
            method: [
                "Wszystkie składniki mieszamy w szklanicy (potrzebujemy około 20 sekund mieszania)",
                "Cedzimy do uprzednio schłodzonego szkła",
                "Okraszamy olejkami pomarańczowymi i dekorujemy wiśnią"
            ],
            ingredients: [
                "50 ml Bourbon Whiskey",
                "20 ml Sweet Vermouth",
                "2 x dash Angostura Bitters"
            ],
            decoration: "Wiśnia Koktajlowa + spray z olejków pomarańczowych"
        },
        {
            name: "Whisky Sour",
            glass: "Double Old Fashioned Glass",
            method: [
                "Wstrząsamy wszystko bez lodu (szybki dry shake)",
                "Kolejno dynamiczny shake z lodem",
                "Cedzimy całość na lód do szkła",
                "Dekorujemy coinem z pomarańczy"
            ],
            ingredients: [
                "40 ml Blended Scotch Whisky",
                "25 ml soku z cytryny",
                "15 ml syropu cukrowego",
                "20 ml białka z kurzego jajka",
                "1 x dash Angostura Bitters"
            ],
            decoration: "coin z pomarańczy"
        },
        {
            name: "Irish Coffee",
            glass: "Irish Coffee Cup",
            method: [
                "Do Irish Coffee Cup wlewamy wrzątek z ekspresu. Po chwili wylewamy",
                "Kolejno wlewamy Tullamore i syrop waniliowy",
                "Mieszamy łyżą barmańską",
                "Wlewamy kawę, tak aby zostało 1,5 centymetra przestrzeni od rantu szkła",
                "Z lodówki wyciągamy śmietankę i wstrząsamy ją",
                "po łyżce nalewamy śmietankę",
                "Na wierzch ścieramy trochę fasoli tonka, oraz dekorujemy całość gwiazdką anyżu"
            ],
            ingredients: [
                "50 ml Irish Whiskey",
                "120 ml kawy przelewowej (mocna)",
                "15 ml syropu waniliowego"
            ],
            decoration: "tarta fasola tonka na wierzch + gwiazdka anyżu"
        },        {
            name: "BRANDY CRUSTA",
            glass: "Champagne Flute",
            method: [
                "Szkło opruszamy cukrem pomarańczowym - uprzednio smarujemycytryną aby się cukier",
                "Wszystkie składniki wstrząsamy intensywnie.",
                "Cedzimy podwójnie do szkła.",
                "Dekorujemy zestem z pomarańczy.",
            ],
            ingredients: [
                "10 ml Cointreau",
                "10 ml Maraschino",
                "20 ml soku z cytryny",
                "5 ml syropu cukrowego",
            ],
            decoration: "cukier pomarańczowy plus duży zest z pomarańczy"
        },
        {
            name: "CAMERON'S KICK",
            glass: "Old Fashioned Glass",
            method: [
                "Wstrząsamy wszystko z dużą ilością lodu.",
                "Cedzimy do szkła w pełni wypełnionego lodem.",
                "Dekorujemy coinem z pomarańczy .",
            ],
            ingredients: [
                "20 ml Blended Scotch Whisky",
                "20 ml Irish Whiskey",
                "25 ml soku z cytryny",
                "20 ml Orgeat",
            ],
            decoration: "coin z pomarańczy"
        },
        {
            name: "Corpse Reviver #1",
            glass: "Nick & Nora",
            method: [
                "Wlewamy wszystkie składniki do szklanicy.",
                "Mieszamy z dużą ilością lodu przez 20 sekund.",
                "Cedzimy do uprzednio zmrożonego szkła.",
                "Spray z olejków cytrynowych.",
            ],
            ingredients: [
                "20 ml Cognac",
                "20 ml Cognac",
                "20 ml Martini Rubino",
            ],
            decoration: "Olejki cytrynowe (serwujemy bez garnishu)"
        },
        {
            name: "Derby",
            glass: "Nick & Nora",
            method: [
                "Wszystkie składniki wstrząsamy intensywnie z dużą ilością lodu.",
                "Okraszamy całość olejkami grejpfrutowymi.",
                "Zest wycięty nożyczkami karbowanymi przypinamy na spinacz do",
            ],
            ingredients: [
                "50 ml Bourbon Whiskey Bourbon",
                "30 ml soku grejpfrutowego",
                "20 ml syropu miód imbir",
            ],
            decoration: "zest z grejpfruta wycięty nożyczkami karbowanymi przypięty do"
        },
        {
            name: "HOT TODDY",
            glass: "Hot Toddy Cup",
            method: [
                "Szkło zalewamy wrzątkiem.",
                "Wylewamy wrzątek.",
                "Wlewamy whisky, cytrynę i syrop.",
                "Wkładamy laskę cynamonu i plaster cytryny.",
                "Zalewamy wrzątkiem ( z ekspresu)",
            ],
            ingredients: [
                "50 ml Blended Scotch Whisky",
                "20 ml syrop miodowo - imbirowy",
                "20 ml sok z cytryny",
                "Wrzątek",
                "Laska cynamonu",
                "plaster cytryn",
            ],
            decoration: "laska cynamonu + plaster cytryny"
        },
        {
            name: "JAPANESE COCKTAIL",
            glass: "Old Fashioned Glass",
            method: [
                "Mieszamy wszystkie składniki w szklanicy.",
                "Cedzimy na bryłkę lodową do niskiego szkła.",
                "Okraszamy olejkami cytrynowymi i dekorujemy wiśnią koktajlową",
            ],
            ingredients: [
                "40 ml Cognac",
                "5 ml Orgeat",
                "3 x dash Angostura Bitters",
            ],
            decoration: "Olejki ze skórki cytrynowej + wiśnia koktajlowa"
        },
        {
            name: "NEW YORK SOUR",
            glass: "Double Old Fashioned Glass",
            method: [
                "Wstrząsamy wszystko bez lodu (szybki dry shake - bez",
                "Kolejno dynamiczny shake z lodem.",
                "Cedzimy całość na lód do szkła",
                "Czekamy chwilę i wlewamy na kostki lodu powoli wino.",
                "Kręcimy szklanką dookoła aby wino równo się rozłożyło.",
                "dekorujemy coinem z pomarańczy",
            ],
            ingredients: [
                "40 ml Bourbon Whiskey",
                "25 ml soku z cytryny",
                "15 ml syropu cukrowego",
                "20 ml albumina",
                "1 x dash Angostura Bitters",
                "15 ml Serenello Merlot",
            ],
            decoration: "coin z pomarańczy"
        },
        {
            name: "Loretto old fashioned",
            glass: "Old Fashioned",
            method: [
                "Wlewamy wszystkie składniki do szklanicy (lub bezpośrednio",
                "intensywnie mieszamy przez około 15 sekund.",
                "Kolejno cedzimy do szkła na bryłkę (jeżeli koktajl robimy",
                "Wykańczamy zestem z pomarańczy i dekorujemy wiśnią",
            ],
            ingredients: [
                "50 ml Bourbon Whiskey",
                "5 ml zalewy z wiśni",
                "3 x dash Angostura Bitters",
                "1 x dash Orange Bitters",
            ],
            decoration: "Kółko - ,,coin\" z pomarańczy położony na bryłce + wiśnia"
        },
        {
            name: "PAPER PLANE",
            glass: "Nick & Nora",
            method: [
                "Wlewamy premix do shakera.",
                "Dodajemy sok z cytryny",
                "Wstrząsamy wszystko niezwykle intensywnie.",
                "Cedzimy podwójnie do uprzednio zmrożonego szkła.",
                "Okraszamy całość olejkami pomarańczowymi i przypinamy zest do",
            ],
            ingredients: [
                "20 ml Bourbon Whiskey",
                "20 ml Amaro Nonino",
                "20 ml Aperol",
                "20 ml soku z cytryny",
            ],
            decoration: "Zest z pomarańczy => przypięty do stópki."
        },
        {
            name: "PENICILLIN",
            glass: "Old Fashioned Glass",
            method: [
                "Wlewamy składniki do shakera.",
                "Wstrząsamy intensywnie.",
                "Cedzimy na lód.",
                "Sprajujemy Islay Malt z atomizera.",
                "Dekorujemy kandyzowanym imbirem.",
            ],
            ingredients: [
                "50 ml Blended Scotch Whisky",
                "20 ml syrop miodowo - imbirowy",
                "20 ml soku z cytryny",
            ],
            decoration: "kandyzowany imbir na wykałaczce koktajlowej"
        },
        {
            name: "Sazerac",
            glass: "Szkło do koniaku - snifter",
            method: [
                "Szkło schładzamy uzupełniając lodem i wodą.",
                "Wszystkie składniki wlewamy do szklanicy (oprócz Absynth Spray)",
                "Mieszamy intensywnie przez około 15 sekund.",
                "Ze szkła wyrzucamy lód.",
                "Spryskujemy Absynthem.",
                "Okraszamy olejkami cytrynowymi (zest wyrzucamy - nie",
            ],
            ingredients: [
                "20 ml Rye Whiskey",
                "20 ml Cognac",
                "3 x dash Peychaud's Bitters",
                "1 x dash Angostura Bitters",
                "5 ml syrop cukrowy",
            ],
            decoration: "olejki ze skórki cytrynowej"
        },
        {
            name: "TRYNIDAD SOUR",
            glass: "Nick & Nora",
            method: [
                "Wstrząsamy wszystkie składniki z duża ilością lodu.",
                "Cedzimy podwójnie do uprzednio zmrożonego szkła.",
                "Ścieramy gorzką czekoladę na wierzch i dekorujemy",
            ],
            ingredients: [
                "40 ml Angostura Aromatic Bitters",
                "15 ml Rye Whiskey",
                "30 ml Orgeat",
                "20 ml soku z cytryny",
            ],
            decoration: "tarta gorzka czekolada + gwiazdka anyżu"
        },
        {
            name: "WHISKEY SMASH",
            glass: "Old Fashioned",
            method: [
                "Mięte kładziemy na spodzie shakera => przykrywamy ją cytryną",
                "Dodajemy syrop cukrowy i naciskamy na cytrynę muddlerem",
                "Dolewamy bourbon i uprawiamy bardzo mocny shake.",
                "Cedzimy podwójnie na lód i dekorujemy miętą, którą finalnie",
            ],
            ingredients: [
                "50 ml Bourbon Whiskey",
                "20 ml syropu cukrowego",
            ],
            decoration: "Bukiet mięty opruszony pudrem pomarańczowym"
        },
        {
            name: "VIEUX CAREE",
            glass: "Old fashioned",
            method: [
                "Wszystkie składniki mieszamy w szklanicy.",
                "Cedzimy na bryłkę lodową- nie bezpośrednio na bryłkę, tak",
                "Okraszamy olejkami cytrynowymi i dekorujemy coinem",
            ],
            ingredients: [
                "20 ml Rye Whiskey",
                "20 ml Cognac",
                "20 ml Martini Rubino",
                "10 ml D.O.M Benedictine",
                "2 x dash Peychaud's Bitters",
                "1 x dash Angostura Bitters",
            ],
            decoration: "coin z cytryny"
        }
    ]
};

// KOMPLETNE RECIPES - 70 PRZEPISÓW!
export const recipes = {
    // WÓDKA (9 drinków)
    "Vodka Sour": [
        {"name": "Wódka", "amount": 40},
        {"name": "Sok z cytryny", "amount": 25},
        {"name": "Syrop cukrowy", "amount": 15},
        {"name": "Albumina", "amount": 20},
        {"name": "Angostura Bitters", "amount": 1}
    ],
    "Bloody Mary": [
        {"name": "Wódka", "amount": 50},
        {"name": "Big Tom Tomato Juice", "amount": 100},
        {"name": "Sok z cytryny", "amount": 10},
        {"name": "Bloody Mary Mix", "amount": 10},
        {"name": "Oliwa truflowa", "amount": 3}
    ],
    "Cosmopolitan": [
        {"name": "Wódka", "amount": 30},
        {"name": "Aperol", "amount": 10},
        {"name": "Kordiał z Żurawiny i Róży", "amount": 30},
        {"name": "Esencja z trawy cytrynowej", "amount": 10},
        {"name": "Różowy glitter", "amount": 1}
    ],
    "Espresso Martini": [
        {"name": "Wódka", "amount": 40},
        {"name": "Galliano Espresso", "amount": 20},
        {"name": "Syrop waniliowy", "amount": 10},
        {"name": "Espresso", "amount": 1},
        {"name": "Angostura Cocoa Bitters", "amount": 1}
    ],
    "Golden Cadillac": [
        {"name": "Creme De Cacao", "amount": 30},
        {"name": "Galliano Autentico", "amount": 30},
        {"name": "Half Half", "amount": 30}
    ],
    "Grasshooper": [
        {"name": "Creme De Cacao", "amount": 20},
        {"name": "Creme De Menthe", "amount": 20},
        {"name": "Wódka", "amount": 20},
        {"name": "Half Half", "amount": 30}
    ],
    "Long Island Iced Tea": [
        {"name": "Gin", "amount": 20},
        {"name": "Wódka", "amount": 20},
        {"name": "Rum", "amount": 20},
        {"name": "Cointreau", "amount": 20},
        {"name": "Tequila", "amount": 20},
        {"name": "Syrop cukrowy", "amount": 10},
        {"name": "Sok z cytryny", "amount": 20},
        {"name": "Coca Cola", "amount": 40}
    ],
    "Pornstar Martini": [
        {"name": "Wódka", "amount": 40},
        {"name": "Syrop waniliowy", "amount": 20},
        {"name": "Sok z limonki", "amount": 20},
        {"name": "Przecier z marakui", "amount": 20},
        {"name": "Prosecco", "amount": 30}
    ],
    "Kyiv Mule": [
        {"name": "Wódka", "amount": 40},
        {"name": "Sok z limonki", "amount": 15},
        {"name": "Syrop cukrowy", "amount": 10},
        {"name": "Thomas Henry Spicy Ginger", "amount": 100},
        {"name": "Angostura Bitters", "amount": 1}
    ],

    // RUM (5 drinków)
    "Air Mail": [
        {"name": "Gold Rum", "amount": 50},
        {"name": "Syrop miodowo-imbirowy", "amount": 20},
        {"name": "Sok z limonki", "amount": 20},
        {"name": "Prosecco", "amount": 40}
    ],
    "Caipirinha": [
        {"name": "Cachaça", "amount": 50},
        {"name": "Syrop cukrowy", "amount": 15},
        {"name": "Limonka", "amount": 0.5}
    ],
    "Classic Rum Swizzle": [
        {"name": "White Rum", "amount": 50},
        {"name": "Sok z limonki", "amount": 30},
        {"name": "Syrop cukrowy", "amount": 20},
        {"name": "Angostura Bitters", "amount": 4}
    ],
    "Daiquiri": [
        {"name": "White Rum", "amount": 50},
        {"name": "Sok z limonki", "amount": 20},
        {"name": "Syrop cukrowy", "amount": 10}
    ],
    "Mojito": [
        {"name": "Aged Rum", "amount": 50},
        {"name": "Limonka", "amount": 0.5},
        {"name": "Syrop miętowy", "amount": 15},
        {"name": "Liście mięty", "amount": 8},
        {"name": "Woda gazowana", "amount": 100}
    ],

    // WHISKEY (20 drinków)
    "Amaretto Sour":     [
        {"name": "Amaretto", "amount": 40},
        {"name": "Blended Scotch Whisky", "amount": 10},
        {"name": "soku z cytryny", "amount": 30},
        {"name": "syropu cukrowego", "amount": 10},
        {"name": "Albumina", "amount": 15},
    ],
    "Blood & Sand":     [
        {"name": "Aged Scotch Whisky", "amount": 30},
        {"name": "Carpano Antica Formula", "amount": 20},
        {"name": "Cherry Heering", "amount": 20},
        {"name": "sok z pomarańczy", "amount": 30},
        {"name": "Islay Malt Spray", "amount": 1},
    ],
    "Boulevardier":     [
        {"name": "Bourbon Whiskey", "amount": 30},
        {"name": "Martini Bitter", "amount": 20},
        {"name": "Martini Rubino", "amount": 20},
    ],
    "Manhattan":     [
        {"name": "Bourbon Whiskey", "amount": 50},
        {"name": "Carpano Antica Formula", "amount": 20},
        {"name": "Angostura Bitters", "amount": 2},
    ],
    "Whisky Sour":     [
        {"name": "Blended Scotch Whisky", "amount": 40},
        {"name": "soku z cytryny", "amount": 25},
        {"name": "syropu cukrowego", "amount": 15},
        {"name": "białka z kurzego jajka", "amount": 20},
        {"name": "Angostura Bitters", "amount": 1},
    ],
    "Irish Coffee":     [
        {"name": "Irish Whiskey", "amount": 50},
        {"name": "kawy przelewowej", "amount": 120},
        {"name": "syropu waniliowego", "amount": 15},
    ],
    "BRANDY CRUSTA":     [
        {"name": "Cointreau", "amount": 10.0},
        {"name": "Maraschino", "amount": 10.0},
        {"name": "soku z cytryny", "amount": 20.0},
        {"name": "syropu cukrowego", "amount": 5.0},
    ],
    "CAMERON'S KICK":     [
        {"name": "Blended Scotch Whisky", "amount": 20.0},
        {"name": "Irish Whiskey", "amount": 20.0},
        {"name": "soku z cytryny", "amount": 25.0},
        {"name": "Orgeat", "amount": 20.0},
    ],
    "Corpse Reviver #1":     [
        {"name": "Cognac", "amount": 20.0},
        {"name": "Cognac", "amount": 20.0},
        {"name": "Martini Rubino", "amount": 20.0},
    ],
    "Derby":     [
        {"name": "Bourbon Whiskey Bourbon", "amount": 50.0},
        {"name": "soku grejpfrutowego", "amount": 30.0},
        {"name": "syropu miód imbir", "amount": 20.0},
    ],
    "HOT TODDY":     [
        {"name": "Blended Scotch Whisky", "amount": 50.0},
        {"name": "syrop miodowo - imbirowy", "amount": 20.0},
        {"name": "sok z cytryny", "amount": 20.0},
        {"name": "Laska cynamonu", "amount": 1},
        {"name": "Plaster cytryny", "amount": 1},
    ],
    "JAPANESE COCKTAIL":     [
        {"name": "Cognac", "amount": 40.0},
        {"name": "Orgeat", "amount": 5.0},
        {"name": "Angostura Bitters", "amount": 3},
    ],
    "NEW YORK SOUR":     [
        {"name": "Bourbon Whiskey", "amount": 40.0},
        {"name": "soku z cytryny", "amount": 25.0},
        {"name": "syropu cukrowego", "amount": 15.0},
        {"name": "albumina", "amount": 20.0},
        {"name": "Angostura Bitters", "amount": 1},
        {"name": "Serenello Merlot", "amount": 15.0},
    ],
    "Loretto old fashioned":     [
        {"name": "Bourbon Whiskey", "amount": 50.0},
        {"name": "zalewy z wiśni", "amount": 5.0},
        {"name": "Angostura Bitters", "amount": 3},
        {"name": "Orange Bitters", "amount": 1},
    ],
    "PAPER PLANE":     [
        {"name": "Bourbon Whiskey", "amount": 20.0},
        {"name": "Amaro Nonino", "amount": 20.0},
        {"name": "Aperol", "amount": 20.0},
        {"name": "soku z cytryny", "amount": 20.0},
    ],
    "PENICILLIN":     [
        {"name": "Blended Scotch Whisky", "amount": 50.0},
        {"name": "syrop miodowo - imbirowy", "amount": 20.0},
        {"name": "soku z cytryny", "amount": 20.0},
    ],
    "Sazerac":     [
        {"name": "Rye Whiskey", "amount": 20.0},
        {"name": "Cognac", "amount": 20.0},
        {"name": "Peychaud's Bitters", "amount": 3},
        {"name": "Angostura Bitters", "amount": 1},
        {"name": "syrop cukrowy", "amount": 5.0},
    ],
    "TRYNIDAD SOUR":     [
        {"name": "Angostura Aromatic Bitters", "amount": 40.0},
        {"name": "Rye Whiskey", "amount": 15.0},
        {"name": "Orgeat", "amount": 30.0},
        {"name": "soku z cytryny", "amount": 20.0},
    ],
    "WHISKEY SMASH":     [
        {"name": "Bourbon Whiskey", "amount": 50.0},
        {"name": "syropu cukrowego", "amount": 20.0},
    ],
    "VIEUX CAREE":     [
        {"name": "Rye Whiskey", "amount": 20.0},
        {"name": "Cognac", "amount": 20.0},
        {"name": "Martini Rubino", "amount": 20.0},
        {"name": "D.O.M Benedictine", "amount": 10.0},
        {"name": "Peychaud's Bitters", "amount": 2},
        {"name": "Angostura Bitters", "amount": 1},
    ],

    // GIN (30 drinków)
    "ARM & NAVY":     [
        {"name": "London Dry Gin", "amount": 50.0},
        {"name": "Orgeat", "amount": 20.0},
        {"name": "soku z cytryny", "amount": 20.0},
        {"name": "Angostura Bitters", "amount": 1},
    ],
    "AVIATION":     [
        {"name": "London Dry Gin", "amount": 50.0},
        {"name": "Luxardo Maraschino", "amount": 10.0},
        {"name": "Briottet - Violet", "amount": 5.0},
        {"name": "Sok z cytryny", "amount": 15.0},
        {"name": "syrop cukrowy", "amount": 2.5},
    ],
    "BEE’S KNEES":     [
        {"name": "London Dry Gin", "amount": 50.0},
        {"name": "syropu miodowo", "amount": 20.0},
        {"name": "soku z cytryny", "amount": 20.0},
        {"name": "soku z pomarańczy", "amount": 20.0},
    ],
    "BIJOU":     [
        {"name": "London Dry Gin", "amount": 20.0},
        {"name": "Martini Rubino", "amount": 20.0},
        {"name": "Green Chartreuse", "amount": 20.0},
        {"name": "Orange Bitters", "amount": 1},
    ],
    "Bombay & Tonic":     [
        {"name": "London Dry Gin", "amount": 40.0},
        {"name": "Thomas Henry Tonic", "amount": 100},
    ],
    "BRAMBLE":     [
        {"name": "London Dry Gin Gin", "amount": 40.0},
        {"name": "soku z cytryny", "amount": 20.0},
        {"name": "syropu cukrowego", "amount": 10.0},
        {"name": "Chambord", "amount": 15.0},
    ],
    "BREAKFAST MARTINI":     [
        {"name": "London Dry Gin", "amount": 50.0},
        {"name": "Cointreau", "amount": 15.0},
        {"name": "sok z cytryny", "amount": 20.0},
    ],
    "CHARLIE CHAPLIN":     [
        {"name": "Hayman’s Sloe Gin", "amount": 30.0},
        {"name": "Archer’s", "amount": 30.0},
        {"name": "sok z limonki", "amount": 30.0},
    ],
    "CHRYSANTHEMUM":     [
        {"name": "Noilly Prat", "amount": 60.0},
        {"name": "D.O.M. Benedictine", "amount": 10.0},
        {"name": "Absynth", "amount": 1},
    ],
    "CLOVER CLUB":     [
        {"name": "London Dry Gin", "amount": 40.0},
        {"name": "Martini Extra Dry", "amount": 10.0},
        {"name": "soku z cytryny", "amount": 20.0},
        {"name": "syropu malinowego", "amount": 15.0},
        {"name": "cukru (łyżeczka barmańska)", "amount": 2.5},
        {"name": "Albumina", "amount": 15.0},
    ],
    "Corpse":     [
        {"name": "London Dry Gin", "amount": 20.0},
        {"name": "Cocchi Americano", "amount": 20.0},
        {"name": "Cointreau", "amount": 20.0},
        {"name": "soku z cytryny", "amount": 20.0},
    ],
    "DRY MARTINI":     [
        {"name": "London Dry Gin (z zamrażarki*)", "amount": 50.0},
        {"name": "Noilly Prat", "amount": 10.0},
        {"name": "Orange Bitters", "amount": 1},
    ],
    "gimlet":     [
        {"name": "London Dry Gin", "amount": 50.0},
        {"name": "Food Town Bars Lime Cordial", "amount": 20.0},
    ],
    "GIN BASIL SMASH":     [
        {"name": "London Dry Gin", "amount": 50.0},
        {"name": "syrop cukrowy", "amount": 20.0},
    ],
    "GIN GIN MULE":     [
        {"name": "London Dry Gin", "amount": 40.0},
        {"name": "syrop miód i imbir", "amount": 20.0},
        {"name": "soku z limonki", "amount": 20.0},
        {"name": "Piwo Imbirowe - .", "amount": 100},
    ],
    "HANKY PANKY":     [
        {"name": "Gin London Dry Gin", "amount": 40.0},
        {"name": "Carpano Antica Formula", "amount": 40.0},
        {"name": "Fernet Branca", "amount": 2.5},
    ],
    "LAST WORD":     [
        {"name": "London Dry Gin", "amount": 20.0},
        {"name": "Chartreuse Green", "amount": 20.0},
        {"name": "Luxardo Maraschino", "amount": 20.0},
        {"name": "Sok z limonki", "amount": 20.0},
    ],
    "Martinez":     [
        {"name": "London Dry Gin", "amount": 50.0},
        {"name": "Carpano Antica", "amount": 20.0},
        {"name": "Noilly Prat", "amount": 10.0},
        {"name": "Luxardo Maraschino / Cointreau", "amount": 5.0},
        {"name": "Orange Bitters", "amount": 1},
        {"name": "Angostura Bitters", "amount": 1},
    ],
    "NEGRONI":     [
        {"name": "London Dry Gin", "amount": 20.0},
        {"name": "Martini Rubino", "amount": 20.0},
        {"name": "Martini Bitter", "amount": 20.0},
    ],
    "RAMOS GIN FIZZ":     [
        {"name": "Ford’s Gin", "amount": 50.0},
        {"name": "syrop cukrowy", "amount": 20.0},
        {"name": "soku z cytryny", "amount": 15.0},
        {"name": "soku z limonki", "amount": 15.0},
        {"name": "half half", "amount": 30.0},
        {"name": "Albumina", "amount": 20.0},
        {"name": "wody z kwiatu", "amount": 1},
        {"name": "wody gazowanej", "amount": 40.0},
    ],
    "SINGAPORE SLING":     [
        {"name": "London Dry Gin", "amount": 40.0},
        {"name": "Cherry Heering", "amount": 15.0},
        {"name": "D.O.M. Benedictine", "amount": 5.0},
        {"name": "Cointreau", "amount": 5.0},
        {"name": "przecier ananasowy", "amount": 50.0},
        {"name": "sok z limonki", "amount": 20.0},
        {"name": "syrop z maliny", "amount": 2.5},
    ],
    "Southside":     [
        {"name": "London Dry Gin", "amount": 50.0},
        {"name": "syrop miętowy", "amount": 15.0},
        {"name": "sok z limonki", "amount": 20.0},
    ],
    "TUXEDO COCKTAIL":     [
        {"name": "Hayman’s Old Tom Gin", "amount": 30.0},
        {"name": "Noilly Prat", "amount": 30.0},
        {"name": "Luxardo Maraschino", "amount": 5.0},
        {"name": "Orange Bitters", "amount": 2},
        {"name": "Angostura Bitters", "amount": 1},
        {"name": "1 x Absynth", "amount": 1},
    ],
    "vesper MARTINI":     [
        {"name": "London Dry Gin", "amount": 30.0},
        {"name": "Wódka Vodka", "amount": 10.0},
        {"name": "Cocchi Americano", "amount": 5.0},
    ],
    "WHITE LADY":     [
        {"name": "Gin London Dry Gin", "amount": 50.0},
        {"name": "Cointreau", "amount": 20.0},
        {"name": "soku z cytryny", "amount": 20.0},
        {"name": "cukru", "amount": 5.0},
        {"name": "Albuminy", "amount": 15.0},
    ],
    "white NEGRONI":     [
        {"name": "London Dry Gin", "amount": 20.0},
        {"name": "Suze", "amount": 20.0},
        {"name": "Lillet Blanc", "amount": 20.0},
    ],
    "XX CENTURY COCKTAIL":     [
        {"name": "London Dry Gin", "amount": 20.0},
        {"name": "Cocchi Americano", "amount": 20.0},
        {"name": "creme de cacao", "amount": 20.0},
        {"name": "soku z cytryny", "amount": 20.0},
    ],
    "Pisco Sour":     [
        {"name": "Pisco", "amount": 50.0},
        {"name": "soku z limonki", "amount": 30.0},
        {"name": "syropu cukrowego", "amount": 20.0},
        {"name": "albumina", "amount": 20.0},
    ],
    "Martini Fiero & Tonik":     [
        {"name": "Aperitif", "amount": 80.0},
        {"name": "Kinley tonik", "amount": 100},
    ],
    "Vibrante/Floreale Tonik":     [
        {"name": "Vibrante/Floreale", "amount": 40.0},
        {"name": "Kinley tonik", "amount": 100},
    ],

    // TEQUILA (3 drinki)
    "PINK CHIHUAHUA":     [
        {"name": "Tequila Blanco", "amount": 40.0},
        {"name": "soku z limonki", "amount": 15.0},
        {"name": "soku z cytryny", "amount": 5.0},
        {"name": "syropu malinowego", "amount": 15.0},
        {"name": "Orgeat", "amount": 5.0},
        {"name": "Albumina", "amount": 15.0},
    ],
    "margarita":     [
        {"name": "Tequila Blanco", "amount": 40.0},
        {"name": "Cointreau", "amount": 20.0},
        {"name": "Soku z limonki", "amount": 20.0},
    ],
    "LA PALOMA":     [
        {"name": "Tequila Blanco", "amount": 40.0},
        {"name": "Agave Mix", "amount": 20.0},
        {"name": "Soku z limonki", "amount": 20.0},
        {"name": "Three Cents", "amount": 100.0},
    ],

    // BEZALKOHOLOWE (3 drinki)
    "NEGRONI 0%":     [
        {"name": "Gin bezalkoholowy", "amount": 20.0},
        {"name": "Giffard Bitter Syrop", "amount": 20.0},
        {"name": "Aperitif bezalkoholowy", "amount": 20.0},
    ],
    "Martini Fiero spritz":     [
        {"name": "Aperitif", "amount": 80.0},
        {"name": "Martini Prosecco", "amount": 100.0},
        {"name": "sody", "amount": 100},
        {"name": "dodajemy wody gazowanej oraz", "amount": 100},
    ],
    "Martini vibrante/floreale spritz":     [
        {"name": "Aperitif bezalkoholowy/mFloreale", "amount": 40.0},
        {"name": "Prosecco Medbubbles", "amount": 80.0},
        {"name": "Belvoir Elderflower", "amount": 20.0},
        {"name": "sody", "amount": 100},
        {"name": "Aperitif bezalkoholowy/Floreale", "amount": 40.0},
        {"name": "Prosecco", "amount": 80.0},
        {"name": "dodajemy wody gazowanej oraz", "amount": 100},
    ]
};

// Rozszerzone opcje szklanek
export const glassOptions = [
    "Collins",
    "Nick & Nora", 
    "Double Old Fashioned Glass",
    "Coupe + kieliszek do wódki",
    "Swizzle Glass",
    "Old Fashioned",
    "Coupe",
    "Champagne Flute",
    "Irish Coffee Cup",
    "Hot Toddy Cup",
    "Snifter",
    "Copa Bombay",
    "Copa Martini",
    "Whisky Glass",
    "Mini Coupette"
];

// Funkcja pomocnicza do znajdowania drinka po nazwie
export function findDrinkByName(drinkName) {
    for (const [category, drinks] of Object.entries(drinkLibrary)) {
        const drink = drinks.find(d => d.name === drinkName);
        if (drink) {
            return drink;
        }
    }
    return null;
}
