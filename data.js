// data.js - Wszystkie dane aplikacji

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

// Biblioteka drinków
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
    "Gin": [],
    "Rum": [
        {
            name: "Air Mail",
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
            ingredients: [
                "50 ml Cachaça",
                "15 ml syropu cukrowego",
                "1/2 limonki (2 ćwiartki)"
            ],
            decoration: "1/4 limonki ułożona po środku koktajlu"
        },
        {
            name: "Classic Rum Swizzle",
            ingredients: [
                "50 ml White Rum",
                "30 ml soku z limonki",
                "20 ml syropu cukrowego",
                "4 x dash Angostura Bitters"
            ],
            decoration: "Bukiet mięty + czips z limonki"
        },
        {
            name: "Corn 'n' Oil",
            ingredients: [
                "20 ml Aged Rum",
                "10 ml Dark Rum",
                "20 ml Falernum",
                "10 ml Aperol",
                "1 ml Angostura Bitters",
                "1/2 limonki"
            ],
            decoration: "1/2 limonki"
        },
        {
            name: "Cuba Libre",
            ingredients: [
                "40 ml Aged Rum",
                "1/2 limonki (2 ćwiartki)",
                "cola top up"
            ],
            decoration: "1/4 limonki ułożona po środku koktajlu"
        },
        {
            name: "Daiquiri",
            ingredients: [
                "50 ml White Rum",
                "20 ml soku z limonki",
                "10 ml syropu cukrowego"
            ],
            decoration: "Zest z limonki"
        },
        {
            name: "Dark 'n' Stormy",
            ingredients: [
                "40 ml Dark Rum",
                "1 x dash Angostura Bitters",
                "1 ćwiartka limonki",
                "Top Up - Ginger Beer"
            ],
            decoration: "2 szczypy mięty"
        },
        {
            name: "El Presidente",
            ingredients: [
                "40 ml Aged Rum",
                "15 ml Vermouth Blanc",
                "5 ml Orange Liqueur",
                "2,5 ml syropu malinowego",
                "2 x dash Orange Bitters"
            ],
            decoration: "Wiśnia + olejki pomarańczowe"
        },
        {
            name: "Fish House Punch",
            ingredients: [
                "20 ml Cognac",
                "20 ml Aged Rum",
                "15 ml Peach Liqueur",
                "30 ml Naparu z herbaty earl gray",
                "20 ml soku z cytryny",
                "15 ml Oleo Saccharum"
            ],
            decoration: "bukiet mięty (3 szczypy) + ćwiartka cytryny"
        },
        {
            name: "Fog Cutter",
            ingredients: [
                "20 ml Pisco",
                "20 ml Gin",
                "20 ml Gold Rum",
                "20 ml Orgeat",
                "30 ml Soku z cytryny",
                "30 ml Soku z pomarańczy",
                "10 ml Port Wine"
            ],
            decoration: "Bukiet mięty + czips z ananasa - całość opruszone pudrem pomarańczowym"
        },
        {
            name: "Hemingway Daiquiri",
            ingredients: [
                "40 ml White Rum",
                "20 ml sok grejpfrutowy",
                "15 ml soku z limonki",
                "10 ml syropu cukrowego",
                "5 ml Luxardo Maraschino"
            ],
            decoration: "Okraszenie olejkami grejpfrutowymi i wiśnia koktajlowa wrzucona do środka"
        },
        {
            name: "Hot Rum Grog",
            ingredients: [
                "50 ml Spiced Rum",
                "20 ml soku z cytryny",
                "15 ml soku z grejpfruta",
                "15 ml soku z pomarańczy",
                "20 ml syrop waniliowy",
                "1 dash Angostura Bitters",
                "Wrzątek"
            ],
            decoration: "laska cynamonu + pół plasterka pomarańczy + kandyzowany imbir"
        },
        {
            name: "Mai Tai",
            ingredients: [
                "30 ml White Rum",
                "20 ml Dark Rum",
                "15 ml Orange Liqueur",
                "10 ml Orgeat",
                "30 ml soku z limonki",
                "5 ml Syrop Cukrowy"
            ],
            decoration: "Czips z ananasa + bukiet mięty opruszony pudrem"
        },
        {
            name: "Mojito",
            ingredients: [
                "50 ml Aged Rum",
                "1/2 limonki",
                "15 ml Syrop Miętowy",
                "8 liści mięty",
                "Woda Gazowana"
            ],
            decoration: "Bukiet mięty opruszony cukrem klasycznym, bądź cytrusowym"
        },
        {
            name: "Mojito Norblito",
            ingredients: [
                "50 ml White Rum wzbogacony o smak tartej skórki",
                "30 ml Fake Lime Juice",
                "20 ml Syrop Miętowy",
                "5 liści mięty"
            ],
            decoration: "Bukiet mięty opruszony cukrem klasycznym, bądź cytrusowym"
        },
        {
            name: "Nuclear Daiquiri",
            ingredients: [
                "30 ml White Overproof Rum",
                "20 ml Green Chartreuse",
                "10 ml Falernum",
                "20 ml Sok z limonki",
                "10 ml Syrop cukrowy"
            ],
            decoration: "mięta w czipsie limonkowym"
        },
        {
            name: "Old Cuban",
            ingredients: [
                "50 ml Aged Rum",
                "20 ml syrop waniliowy",
                "20 ml sok z limonki",
                "1 dash Angostura Bitters",
                "top up Prosecco",
                "5 liści mięty"
            ],
            decoration: "mięta posypana pudrem"
        },
        {
            name: "Right Hand Cocktail",
            ingredients: [
                "30 ml Aged Rum",
                "20 ml Martini Bitter",
                "20 ml Sweet Vermouth",
                "5 ml Dark Chocolate Liqueur"
            ],
            decoration: "Żółtko 'coin' z pomarańczy przypięte na spinaczu do rantu szkła"
        },
        {
            name: "Queen's Park Swizzle",
            ingredients: [
                "30 ml Gold Rum",
                "20 ml Dark Rum",
                "10 ml Falernum",
                "20 ml soku z limonki",
                "10 ml syropu waniliowego",
                "10 liści mięty"
            ],
            decoration: "Bukiet mięty + czips z ananasa => całość poruszona pudrem"
        },
        {
            name: "Zombie",
            ingredients: [
                "30 ml Gold Rum",
                "20 ml Dark Rum",
                "10 ml Falernum",
                "30 ml soku z grejpfruta",
                "20 ml soku z limonki",
                "20 ml syropu piernikowego",
                "5 ml syropu malinowego",
                "1 x dash Angostura Bitters",
                "2 ml Absinthe"
            ],
            decoration: "Bukiet mięty + tarta fasola tonka + imbir kandyzowany na szpadce"
        }
    ],
    "Tequila": [],
    "Whiskey": [
        {
            name: "Amaretto Sour",
            glass: "Double Old Fashioned Glass",
            method: [
                "Wstrząsamy wszystko bez lodu (szybki dry shake)",
                "Kolejno dynamiczny shake z lodem",
                "Cedzimy całość na lód (kości) do szkła"
            ],
            ingredients: [
                "40 ml Amaretto",
                "10 ml Blended Scotch Whisky",
                "30 ml soku z cytryny",
                "15 ml syropu cukrowego",
                "15 ml Albumina"
            ],
            decoration: "wierzch koktajlu posypany pudrem buraczanym oraz suszony kwiatostan róży"
        },
        {
            name: "Blood & Sand",
            glass: "Nick & Nora",
            method: [
                "Wszystkie składniki wstrząsamy z dużą ilością lodu",
                "Cedzimy podwójnie do uprzednio zmrożonego szkła",
                "Sprayujemy wierzch koktajlu Islay Malt Spray"
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
                "Wszystkie składniki mieszamy w szklanicy z lodem",
                "Mieszamy około 30 sekund",
                "Cedzimy do szkła z bryłą lodu"
            ],
            ingredients: [
                "30 ml Bourbon Whiskey",
                "20 ml Martini Bitter",
                "20 ml Sweet Vermouth"
            ],
            decoration: "olejki pomarańczowe + coin z pomarańczy przypięte na spinaczu do rantu szkła"
        },
        {
            name: "Brandy Crusta",
            glass: "Nick & Nora",
            method: [
                "Wlewamy wszystkie składniki do shakera",
                "Wstrząsamy intensywnie z lodem",
                "Cedzimy podwójnie do uprzednio zmrożonego szkła oprószonego cukrem pomarańczowym"
            ],
            ingredients: [
                "40 ml Cognac",
                "10 ml Orange Liqueur",
                "10 ml Luxardo Maraschino",
                "20 ml soku z cytryny",
                "5 ml syropu cukrowego"
            ],
            decoration: "cukier pomarańczowy plus duży zest z pomarańczy"
        },
        {
            name: "Cameron's Kick",
            glass: "Nick & Nora",
            method: [
                "Wszystkie składniki wstrząsamy z dużą ilością lodu",
                "Cedzimy podwójnie do uprzednio zmrożonego szkła"
            ],
            ingredients: [
                "20 ml Blended Scotch Whisky",
                "20 ml Irish Whiskey",
                "25 ml soku z cytryny",
                "20 ml Orgeat"
            ],
            decoration: "coin z pomarańczy"
        },
        {
            name: "Corpse Reviver #1",
            glass: "Nick & Nora",
            method: [
                "Wszystkie składniki mieszamy w szklanicy z lodem",
                "Mieszamy około 30 sekund",
                "Cedzimy do uprzednio zmrożonego szkła"
            ],
            ingredients: [
                "20 ml Cognac V.S.O.P.",
                "20 ml Cognac V.S.",
                "20 ml Sweet Vermouth"
            ],
            decoration: "Olejki cytrynowe (serwujemy bez garnishu)"
        },
        {
            name: "Derby",
            glass: "Nick & Nora",
            method: [
                "Wszystkie składniki wstrząsamy z dużą ilością lodu",
                "Cedzimy podwójnie do uprzednio zmrożonego szkła"
            ],
            ingredients: [
                "50 ml Bourbon Whiskey",
                "30 ml soku grejpfrutowego",
                "20 ml syropu miód imbir"
            ],
            decoration: "zest z grejpfruta wycięty nożyczkami karbowanymi przypięty do rantu szkła"
        },
        {
            name: "Hot Toddy",
            glass: "Hot Toddy Cup",
            method: [
                "Do gorącej szklanki wlewamy wszystkie składniki oprócz wrzątku",
                "Mieszamy łyżeczką",
                "Dolewamy wrzątek",
                "Dekorujemy"
            ],
            ingredients: [
                "50 ml Blended Scotch Whisky",
                "20 ml syrop miodowo - imbirowy",
                "20 ml sok z cytryny",
                "Wrzątek"
            ],
            decoration: "Laska cynamonu + plaster cytryny"
        },
        {
            name: "Irish Coffee",
            glass: "Irish Coffee Cup",
            method: [
                "Do gorącej szklanki wlewamy Irish Whiskey i syrop waniliowy",
                "Dolewamy gorącą kawę",
                "Delikatnie nakładamy ubita śmietanę na wierzch",
                "Dekorujemy"
            ],
            ingredients: [
                "50 ml Irish Whiskey",
                "120 ml kawy przelewowej (mocna)",
                "15 ml syropu waniliowego"
            ],
            decoration: "tarta fasola tonka na wierzch + gwiazdka anyżu"
        },
        {
            name: "Japanese Cocktail",
            glass: "Nick & Nora",
            method: [
                "Wszystkie składniki mieszamy w szklanicy z lodem",
                "Mieszamy około 30 sekund",
                "Cedzimy do uprzednio zmrożonego szkła"
            ],
            ingredients: [
                "40 ml Cognac V.S.",
                "5 ml Orgeat",
                "3 x dash Angostura Bitters"
            ],
            decoration: "Olejki ze skórki cytrynowej + wiśnia koktajlowa"
        },
        {
            name: "Manhattan",
            glass: "Nick & Nora",
            method: [
                "Wszystkie składniki mieszamy w szklanicy z lodem",
                "Mieszamy około 30 sekund",
                "Cedzimy do uprzednio zmrożonego szkła"
            ],
            ingredients: [
                "50 ml Bourbon Whiskey",
                "20 ml Sweet Vermouth",
                "2 x dash Angostura Bitters"
            ],
            decoration: "Wiśnia Koktajlowa + spray z olejków pomarańczowych"
        },
        {
            name: "New York Sour",
            glass: "Double Old Fashioned Glass",
            method: [
                "Wstrząsamy wszystko bez lodu (szybki dry shake)",
                "Kolejno dynamiczny shake z lodem",
                "Cedzimy całość na lód (kości) do szkła",
                "Delikatnie wlewamy czerwone wino na łyżeczce"
            ],
            ingredients: [
                "40 ml Bourbon Whiskey",
                "25 ml soku z cytryny",
                "15 ml syropu cukrowego",
                "20 ml albumina",
                "1 x dash Angostura Bitters",
                "15 ml Red Wine"
            ],
            decoration: "coin z pomarańczy"
        },
        {
            name: "Loretto Old Fashioned",
            glass: "Old Fashioned",
            method: [
                "W szkle muddlujemy wiśnię z zalewa",
                "Dodajemy whiskey i bittery",
                "Mieszamy z bryłą lodu",
                "Dekorujemy"
            ],
            ingredients: [
                "50 ml Bourbon Whiskey",
                "5 ml zalewy z wiśni",
                "3 x dash Angostura Bitters",
                "1 x dash Orange Bitters"
            ],
            decoration: "Kółko - 'coin' z pomarańczy położony na bryłce + wiśnia na szpadce"
        },
        {
            name: "Paper Plane",
            glass: "Nick & Nora",
            method: [
                "Wszystkie składniki wstrząsamy z dużą ilością lodu",
                "Cedzimy podwójnie do uprzednio zmrożonego szkła"
            ],
            ingredients: [
                "20 ml Bourbon Whiskey",
                "20 ml Amaro",
                "20 ml Aperol",
                "20 ml soku z cytryny"
            ],
            decoration: "Zest z pomarańczy => przypięty do stópki"
        },
        {
            name: "Penicillin",
            glass: "Double Old Fashioned Glass",
            method: [
                "Wszystkie składniki (oprócz Islay spray) wstrząsamy z lodem",
                "Cedzimy na lód do szkła",
                "Sprayujemy wierzch Islay Malt Spray"
            ],
            ingredients: [
                "50 ml Blended Scotch Whisky",
                "20 ml syrop miodowo - imbirowy",
                "20 ml soku z cytryny",
                "Islay Malt Spray"
            ],
            decoration: "kandyzowany imbir na wykałaczce koktajlowej"
        },
        {
            name: "Sazerac",
            glass: "Old Fashioned",
            method: [
                "Szkło sprayujemy absyntem",
                "Wszystkie pozostałe składniki mieszamy w szklanicy z lodem",
                "Mieszamy około 45 sekund",
                "Cedzimy do przygotowanego szkła bez lodu"
            ],
            ingredients: [
                "20 ml Rye Whiskey",
                "20 ml Cognac V.S.",
                "3 x dash Peychaud's Bitters",
                "1 x dash Angostura Bitters",
                "5 ml syrop cukrowy",
                "Absinthe Spray"
            ],
            decoration: "olejki ze skórki cytrynowej"
        },
        {
            name: "Trinidad Sour",
            glass: "Nick & Nora",
            method: [
                "Wszystkie składniki wstrząsamy z dużą ilością lodu",
                "Cedzimy podwójnie do uprzednio zmrożonego szkła"
            ],
            ingredients: [
                "40 ml Angostura Aromatic Bitters",
                "15 ml Rye Whiskey",
                "30 ml Orgeat",
                "20 ml soku z cytryny"
            ],
            decoration: "tarta gorzka czekolada + gwiazdka anyżu"
        },
        {
            name: "Whisky Sour",
            glass: "Double Old Fashioned Glass",
            method: [
                "Wstrząsamy wszystko bez lodu (szybki dry shake)",
                "Kolejno dynamiczny shake z lodem",
                "Cedzimy całość na lód (kości) do szkła"
            ],
            ingredients: [
                "40 ml Blended Scotch Whisky",
                "25 ml soku z cytryny",
                "15 ml syropu cukrowego",
                "20 ml albumina",
                "1 x dash Angostura Bitters"
            ],
            decoration: "coin z pomarańczy"
        },
        {
            name: "Whiskey Smash",
            glass: "Double Old Fashioned Glass",
            method: [
                "W shakerze muddlujemy liście mięty z cytryną",
                "Dodajemy pozostałe składniki",
                "Wstrząsamy z lodem",
                "Cedzimy na lód do szkła"
            ],
            ingredients: [
                "50 ml Bourbon Whiskey",
                "20 ml syropu cukrowego",
                "1/2 cytryny",
                "8 liści mięty"
            ],
            decoration: "Bukiet mięty opruszony pudrem pomarańczowym"
        },
        {
            name: "Vieux Carré",
            glass: "Old Fashioned",
            method: [
                "Wszystkie składniki mieszamy w szklanicy z lodem",
                "Mieszamy około 30 sekund",
                "Cedzimy do szkła z bryłą lodu"
            ],
            ingredients: [
                "20 ml Rye Whiskey",
                "20 ml Cognac V.S.",
                "20 ml Sweet Vermouth",
                "10 ml Herbal Liqueur",
                "2 x dash Peychaud's Bitters",
                "1 x dash Angostura Bitters"
            ],
            decoration: "coin z cytryny"
        }
    ]
};

// Wszystkie przepisy ze składnikami i ilościami
export const recipes = {
    // Drinki z wódką
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

    // Drinki z whisky - NOWE
    "Amaretto Sour": [
        {"name": "Amaretto", "amount": 40},
        {"name": "Blended Scotch Whisky", "amount": 10},
        {"name": "Sok z cytryny", "amount": 30},
        {"name": "Syrop cukrowy", "amount": 15},
        {"name": "Albumina", "amount": 15}
    ],
    "Blood & Sand": [
        {"name": "Aged Scotch Whisky", "amount": 30},
        {"name": "Sweet Vermouth", "amount": 20},
        {"name": "Cherry Brandy", "amount": 20},
        {"name": "Sok z pomarańczy", "amount": 30},
        {"name": "Islay Malt Spray", "amount": 1}
    ],
    "Boulevardier": [
        {"name": "Bourbon Whiskey", "amount": 30},
        {"name": "Martini Bitter", "amount": 20},
        {"name": "Sweet Vermouth", "amount": 20}
    ],
    "Brandy Crusta": [
        {"name": "Cognac", "amount": 40},
        {"name": "Orange Liqueur", "amount": 10},
        {"name": "Luxardo Maraschino", "amount": 10},
        {"name": "Sok z cytryny", "amount": 20},
        {"name": "Syrop cukrowy", "amount": 5}
    ],
    "Cameron's Kick": [
        {"name": "Blended Scotch Whisky", "amount": 20},
        {"name": "Irish Whiskey", "amount": 20},
        {"name": "Sok z cytryny", "amount": 25},
        {"name": "Orgeat", "amount": 20}
    ],
    "Corpse Reviver #1": [
        {"name": "Cognac V.S.O.P.", "amount": 20},
        {"name": "Cognac V.S.", "amount": 20},
        {"name": "Sweet Vermouth", "amount": 20}
    ],
    "Derby": [
        {"name": "Bourbon Whiskey", "amount": 50},
        {"name": "Sok grejpfrutowy", "amount": 30},
        {"name": "Syrop miodowo-imbirowy", "amount": 20}
    ],
    "Hot Toddy": [
        {"name": "Blended Scotch Whisky", "amount": 50},
        {"name": "Syrop miodowo-imbirowy", "amount": 20},
        {"name": "Sok z cytryny", "amount": 20},
        {"name": "Wrzątek", "amount": 150}
    ],
    "Irish Coffee": [
        {"name": "Irish Whiskey", "amount": 50},
        {"name": "Kawa przelewowa", "amount": 120},
        {"name": "Syrop waniliowy", "amount": 15}
    ],
    "Japanese Cocktail": [
        {"name": "Cognac V.S.", "amount": 40},
        {"name": "Orgeat", "amount": 5},
        {"name": "Angostura Bitters", "amount": 3}
    ],
    "Manhattan": [
        {"name": "Bourbon Whiskey", "amount": 50},
        {"name": "Sweet Vermouth", "amount": 20},
        {"name": "Angostura Bitters", "amount": 2}
    ],
    "New York Sour": [
        {"name": "Bourbon Whiskey", "amount": 40},
        {"name": "Sok z cytryny", "amount": 25},
        {"name": "Syrop cukrowy", "amount": 15},
        {"name": "Albumina", "amount": 20},
        {"name": "Angostura Bitters", "amount": 1},
        {"name": "Red Wine", "amount": 15}
    ],
    "Loretto Old Fashioned": [
        {"name": "Bourbon Whiskey", "amount": 50},
        {"name": "Zalewa z wiśni", "amount": 5},
        {"name": "Angostura Bitters", "amount": 3},
        {"name": "Orange Bitters", "amount": 1}
    ],
    "Paper Plane": [
        {"name": "Bourbon Whiskey", "amount": 20},
        {"name": "Amaro", "amount": 20},
        {"name": "Aperol", "amount": 20},
        {"name": "Sok z cytryny", "amount": 20}
    ],
    "Penicillin": [
        {"name": "Blended Scotch Whisky", "amount": 50},
        {"name": "Syrop miodowo-imbirowy", "amount": 20},
        {"name": "Sok z cytryny", "amount": 20},
        {"name": "Islay Malt Spray", "amount": 1}
    ],
    "Sazerac": [
        {"name": "Rye Whiskey", "amount": 20},
        {"name": "Cognac V.S.", "amount": 20},
        {"name": "Peychaud's Bitters", "amount": 3},
        {"name": "Angostura Bitters", "amount": 1},
        {"name": "Syrop cukrowy", "amount": 5},
        {"name": "Absinthe Spray", "amount": 1}
    ],
    "Trinidad Sour": [
        {"name": "Angostura Aromatic Bitters", "amount": 40},
        {"name": "Rye Whiskey", "amount": 15},
        {"name": "Orgeat", "amount": 30},
        {"name": "Sok z cytryny", "amount": 20}
    ],
    "Whisky Sour": [
        {"name": "Blended Scotch Whisky", "amount": 40},
        {"name": "Sok z cytryny", "amount": 25},
        {"name": "Syrop cukrowy", "amount": 15},
        {"name": "Albumina", "amount": 20},
        {"name": "Angostura Bitters", "amount": 1}
    ],
    "Whiskey Smash": [
        {"name": "Bourbon Whiskey", "amount": 50},
        {"name": "Syrop cukrowy", "amount": 20},
        {"name": "Cytryna", "amount": 0.5},
        {"name": "Liście mięty", "amount": 8}
    ],
    "Vieux Carré": [
        {"name": "Rye Whiskey", "amount": 20},
        {"name": "Cognac V.S.", "amount": 20},
        {"name": "Sweet Vermouth", "amount": 20},
        {"name": "Herbal Liqueur", "amount": 10},
        {"name": "Peychaud's Bitters", "amount": 2},
        {"name": "Angostura Bitters", "amount": 1}
    ]
};

// Opcje szklanek
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
    "Snifter"
];

// Szczegóły drinków - szkła i dekoracje
export const drinkDetails = {
    // Drinki z wódką
    "Vodka Sour": {
        glass: "Double Old Fashioned Glass",
        decoration: "coin z pomarańczy"
    },
    "Bloody Mary": {
        glass: "Collins",
        decoration: "Oliwka na szpadce - plus wierzch koktajlu skropiony oliwą truflową - picanto mix na szkle, slice ogórka"
    },
    "Cosmopolitan": {
        glass: "Nick & Nora",
        decoration: "suszony, czerwony kwiatostan róży"
    },
    "Espresso Martini": {
        glass: "Nick & Nora",
        decoration: "tarta fasola tonka + bezik"
    },
    "Golden Cadillac": {
        glass: "Nick & Nora",
        decoration: "Bezik plus gorzka tarta czekolada + złoty pył"
    },
    "Grasshooper": {
        glass: "Nick & Nora",
        decoration: "Bezik plus gorzka tarta czekolada"
    },
    "Long Island Iced Tea": {
        glass: "Swizzle Glass",
        decoration: "Plasterek cytryny"
    },
    "Pornstar Martini": {
        glass: "Coupe + kieliszek do wódki",
        decoration: "posypka z pudru buraczanego + kwiatostan róży"
    },
    "Kyiv Mule": {
        glass: "Collins",
        decoration: "2 szczypy mięty + ćwiartka limonki"
    },

    // Drinki z whisky - NOWE
    "Amaretto Sour": {
        glass: "Double Old Fashioned Glass",
        decoration: "wierzch koktajlu posypany pudrem buraczanym oraz suszony kwiatostan róży"
    },
    "Blood & Sand": {
        glass: "Nick & Nora",
        decoration: "wiśnia na szpadce + olejki pomarańczowe"
    },
    "Boulevardier": {
        glass: "Old Fashioned",
        decoration: "olejki pomarańczowe + coin z pomarańczy przypięte na spinaczu do rantu szkła"
    },
    "Brandy Crusta": {
        glass: "Nick & Nora",
        decoration: "cukier pomarańczowy plus duży zest z pomarańczy"
    },
    "Cameron's Kick": {
        glass: "Nick & Nora",
        decoration: "coin z pomarańczy"
    },
    "Corpse Reviver #1": {
        glass: "Nick & Nora",
        decoration: "Olejki cytrynowe (serwujemy bez garnishu)"
    },
    "Derby": {
        glass: "Nick & Nora",
        decoration: "zest z grejpfruta wycięty nożyczkami karbowanymi przypięty do rantu szkła"
    },
    "Hot Toddy": {
        glass: "Hot Toddy Cup",
        decoration: "Laska cynamonu + plaster cytryny"
    },
    "Irish Coffee": {
        glass: "Irish Coffee Cup",
        decoration: "tarta fasola tonka na wierzch + gwiazdka anyżu"
    },
    "Japanese Cocktail": {
        glass: "Nick & Nora",
        decoration: "Olejki ze skórki cytrynowej + wiśnia koktajlowa"
    },
    "Manhattan": {
        glass: "Nick & Nora",
        decoration: "Wiśnia Koktajlowa + spray z olejków pomarańczowych"
    },
    "New York Sour": {
        glass: "Double Old Fashioned Glass",
        decoration: "coin z pomarańczy"
    },
    "Loretto Old Fashioned": {
        glass: "Old Fashioned",
        decoration: "Kółko - 'coin' z pomarańczy położony na bryłce + wiśnia na szpadce"
    },
    "Paper Plane": {
        glass: "Nick & Nora",
        decoration: "Zest z pomarańczy => przypięty do stópki"
    },
    "Penicillin": {
        glass: "Double Old Fashioned Glass",
        decoration: "kandyzowany imbir na wykałaczce koktajlowej"
    },
    "Sazerac": {
        glass: "Old Fashioned",
        decoration: "olejki ze skórki cytrynowej"
    },
    "Trinidad Sour": {
        glass: "Nick & Nora",
        decoration: "tarta gorzka czekolada + gwiazdka anyżu"
    },
    "Whisky Sour": {
        glass: "Double Old Fashioned Glass",
        decoration: "coin z pomarańczy"
    },
    "Whiskey Smash": {
        glass: "Double Old Fashioned Glass",
        decoration: "Bukiet mięty opruszony pudrem pomarańczowym"
    },
    "Vieux Carré": {
        glass: "Old Fashioned",
        decoration: "coin z cytryny"
    }
};
