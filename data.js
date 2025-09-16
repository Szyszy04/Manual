// data.js - KOMPLETNA BAZA DANYCH DRINKÓW Z SYSTEMEM ID SKŁADNIKÓW

// Zunifikowana lista składników
export const ingredients = [
    { id: 1, name: "London Dry Gin" },
    { id: 2, name: "Sloe Gin" },
    { id: 3, name: "Wódka" },
    { id: 4, name: "Bourbon Whiskey" },
    { id: 5, name: "Rye Whiskey" },
    { id: 6, name: "Irish Whiskey" },
    { id: 7, name: "Blended Scotch Whisky" },
    { id: 8, name: "Aged Scotch Whisky" },
    { id: 9, name: "White Rum" },
    { id: 10, name: "Gold Rum" },
    { id: 11, name: "Aged Rum" },
    { id: 12, name: "Jamaican Rum" },
    { id: 13, name: "Spiced Rum" },
    { id: 14, name: "Overproof White Rum" },
    { id: 15, name: "Caribbean Blend Rum" },
    { id: 16, name: "Cachaça" },
    { id: 17, name: "Tequila Blanco" },
    { id: 18, name: "Cognac" },
    { id: 19, name: "Pisco" },
    { id: 20, name: "Cointreau" },
    { id: 21, name: "Maraschino Liqueur" },
    { id: 22, name: "Green Chartreuse" },
    { id: 23, name: "Galliano Amaretto" },
    { id: 24, name: "Galliano Espresso" },
    { id: 25, name: "Galliano Autentico" },
    { id: 26, name: "Crème de Cacao" },
    { id: 27, name: "Crème de Menthe" },
    { id: 28, name: "Chambord" },
    { id: 29, name: "Sweet Vermouth" },
    { id: 30, name: "Dry Vermouth" },
    { id: 31, name: "Lillet Blanc" },
    { id: 32, name: "Cocchi Americano" },
    { id: 33, name: "Campari" },
    { id: 34, name: "Aperol" },
    { id: 35, name: "Fernet Branca" },
    { id: 36, name: "Suze" },
    { id: 37, name: "Bénédictine" },
    { id: 38, name: "Cherry Heering" },
    { id: 39, name: "Falernum" },
    { id: 40, name: "Orgeat" },
    { id: 41, name: "Peach Liqueur" },
    { id: 42, name: "Dark Chocolate Liqueur" },
    { id: 43, name: "Sok z cytryny" },
    { id: 44, name: "Sok z limonki" },
    { id: 45, name: "Sok z pomarańczy" },
    { id: 46, name: "Sok grejpfrutowy" },
    { id: 47, name: "Limonka" },
    { id: 48, name: "Cytryna" },
    { id: 49, name: "Pomarańcza" },
    { id: 50, name: "Liście mięty" },
    { id: 51, name: "Syrop cukrowy" },
    { id: 52, name: "Syrop miętowy" },
    { id: 53, name: "Syrop waniliowy" },
    { id: 54, name: "Syrop miodowo-imbirowy" },
    { id: 55, name: "Syrop malinowy" },
    { id: 56, name: "Syrop piernikowy" },
    { id: 57, name: "Angostura Bitters" },
    { id: 58, name: "Orange Bitters" },
    { id: 59, name: "Peychaud's Bitters" },
    { id: 60, name: "Angostura Cocoa Bitters" },
    { id: 61, name: "Angostura Aromatic Bitters" },
    { id: 62, name: "Albumina" },
    { id: 63, name: "Half & Half" },
    { id: 64, name: "Prosecco" },
    { id: 65, name: "Woda gazowana" },
    { id: 66, name: "Ginger Beer" },
    { id: 67, name: "Cola" },
    { id: 68, name: "Tonic Water" },
    { id: 69, name: "Wrzątek" },
    { id: 70, name: "Espresso" },
    { id: 71, name: "Kawa przelewowa" },
    { id: 72, name: "Absynth" },
    { id: 73, name: "Ruby Port" },
    { id: 74, name: "Red Wine" },
    { id: 75, name: "Crème de Violette" },
    { id: 76, name: "Lime Cordial" },
    { id: 77, name: "Cranberry Rose Cordial" },
    { id: 78, name: "Lemongrass Essence" },
    { id: 79, name: "Tomato Juice" },
    { id: 80, name: "Bloody Mary Mix" },
    { id: 81, name: "Truffle Oil" },
    { id: 82, name: "Edible Glitter" },
    { id: 83, name: "Przecier z marakui" },
    { id: 84, name: "Pineapple Juice" },
    { id: 85, name: "Raspberry Syrup" },
    { id: 86, name: "Lime Juice Cordial" },
    { id: 87, name: "Earl Grey Tea" },
    { id: 88, name: "Oleo Saccharum" },
    { id: 89, name: "Orange Blossom Water" },
    { id: 90, name: "Cherry Syrup" },
    { id: 91, name: "Cinnamon Stick" },
    { id: 92, name: "Lemon Slice" },
    { id: 93, name: "Non-Alcoholic Gin" },
    { id: 94, name: "Bitter Syrup" },
    { id: 95, name: "Non-Alcoholic Aperitif" },
    { id: 96, name: "Aperitif" },
    { id: 97, name: "Floral Aperitif" },
    { id: 98, name: "Tonic Water (Premium)" },
    { id: 99, name: "Sparkling Wine" },
    { id: 100, name: "Elderflower Cordial" },
    { id: 101, name: "Soda Water" },
    { id: 102, name: "Grapefruit Soda" },
    { id: 103, name: "Agave Nectar" },
    { id: 104, name: "Peach Schnapps" },
    { id: 105, name: "Islay Whisky Spray" },
    { id: 106, name: "Amaro Nonino" },
    { id: 107, name: "Martini Rubino" },
    { id: 108, name: "Martini Bitter" },
    { id: 109, name: "Papidoux V.S.O.P" },
    { id: 110, name: "Hennessy V.S" },
    { id: 111, name: "Carpano Antica Formula" }
];

// Funkcje pomocnicze do pracy z składnikami
export function getIngredientById(id) {
    return ingredients.find(ingredient => ingredient.id === id);
}

export function getIngredientId(name) {
    const ingredient = ingredients.find(ingredient => ingredient.name === name);
    return ingredient ? ingredient.id : null;
}

// Funkcja do konwersji receptury z ID na nazwy
export function getRecipeWithNames(recipeName) {
    const recipe = recipes[recipeName];
    if (!recipe) return [];

    return recipe.map(item => {
        if (item.ingredientId) {
            const ingredient = getIngredientById(item.ingredientId);
            return {
                name: ingredient ? ingredient.name : `Nieznany składnik (ID: ${item.ingredientId})`,
                amount: item.amount
            };
        } else {
            // Fallback dla starych formatów
            return {
                name: item.name || 'Nieznany składnik',
                amount: item.amount
            };
        }
    });
}

// Dane wódek
export const vodkas = [
    { name: "Belvedere", price: "28,00", country: "Polska", ingredient: "Żyto" },
    { name: "Belvedere Lake Bartężek", price: "39,00", country: "Polska", ingredient: "Żyto" },
    { name: "Chopin Potato", price: "35,00", country: "Polska", ingredient: "Ziemniaki" },
    { name: "Grey Goose", price: "28,00", country: "Francja", ingredient: "Pszenica (winter wheat)" },
    { name: "Ostoya Vodka", price: "19,00", country: "Polska", ingredient: "Pszenica" },
    { name: "Ostoya Black", price: "21,00", country: "Polska", ingredient: "Pszenica" }
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

// KOMPLETNA BIBLIOTEKA DRINKÓW
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
                "shot prosecco"
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
            name: "AIR MAIL",
            glass: "Champagne Flute",
            method: [
                "Wstrząsamy niezwykle intensywnie wszystkie składnik (z wyjątkiem Prosecco)",
                "Cedzimy do uprzednio zmrożonego szkła",
                "Dopełniamy Prosecco",
                "Dekorujemy"
            ],
            ingredients: [
                "50 ml Gold Rum",
                "20 ml Syrop miodowo-imbirowy",
                "20 ml Soku z limonki",
                "40 ml Prosecco"
            ],
            decoration: "3 kosteczki imbiru na szpadce"
        },
        {
            name: "Caipirinha",
            glass: "Double Old Fashioned Glass",
            method: [
                "Ćwiartki limonki ucieramy za pomocą muddlera w szkle",
                "Dodajemy cachaçę i zasypujemy w pełni lodem",
                "Mieszamy intensywnie łyżą",
                "Dosypujemy kruszonego lodu i dekorujemy limonką"
            ],
            ingredients: [
                "50 ml Cachaça",
                "15 ml Syrop cukrowy",
                "1/2 limonki (2 ćwiartki)"
            ],
            decoration: "1/4 limonki ułożona po środku koktajlu"
        },
        {
            name: "Classic Rum Swizzle",
            glass: "Collins",
            method: [
                "Do szkła wlewamy wszystkie składniki (z wyjątkiem Angostura Bitters)",
                "Do szkła z płynem wkładamy Swizzle Stick",
                "Zasypujemy w pełni kruszonym lodem",
                "Robimy Swizzle przez około 10 sekund",
                "Dopełniamy szkło kruszonym lodem, aby wystawało nieco ponad rant",
                "Na górę wlewamy Angostura Bitters",
                "Dekorujemy bukietem miętowym posypanym pudrem cytrusowym"
            ],
            ingredients: [
                "50 ml White Rum",
                "30 ml Soku z limonki",
                "20 ml Syrop cukrowy",
                "4 dash Angostura Bitters"
            ],
            decoration: "Bukiet mięty + czips z limonki"
        },
        {
            name: "Corn 'n' Oil",
            glass: "Double Old Fashioned Glass",
            method: [
                "Wszystkie składniki wlewamy do szkła",
                "Mieszamy łyżeczką i dodajemy bryłkę lodową",
                "1/2 limonki wyciskamy za pomocą łokcia i wrzucamy do środka",
                "Mieszamy przez około 10 sekund i serwujemy"
            ],
            ingredients: [
                "20 ml Aged Rum",
                "10 ml Jamaican Rum",
                "20 ml Falernum",
                "10 ml Aperol",
                "1 dash Angostura Bitters",
                "1/2 limonki"
            ],
            decoration: "1/2 limonki"
        },
        {
            name: "Cuba Libre",
            glass: "Collins",
            method: [
                "Ćwiartki limonki ucieramy za pomocą muddlera w szkle",
                "Dodajemy rum i zasypujemy w pełni lodem",
                "Dopełniamy koktajl colą",
                "Dekorujemy limonką"
            ],
            ingredients: [
                "40 ml Aged Rum",
                "1/2 limonki (2 ćwiartki)",
                "Cola - top up"
            ],
            decoration: "1/4 limonki ułożona po środku koktajlu"
        },
        {
            name: "Daiquiri",
            glass: "Nick & Nora",
            method: [
                "Wszystkie składniki intensywnie wstrząsamy z dużą ilością lodu",
                "Cedzimy podwójnie do uprzednio zmrożonego szkła",
                "Dekorujemy zestem z limonki"
            ],
            ingredients: [
                "50 ml White Rum",
                "20 ml Soku z limonki",
                "10 ml Syrop cukrowy"
            ],
            decoration: "Zest z limonki"
        },
        {
            name: "Dark 'n' Stormy",
            glass: "Collins",
            method: [
                "Szkło wypełniamy w pełni lodem",
                "Wlewamy Angosturę i piwo imbirowe, wciskamy ćwiartkę limonki",
                "Po lodzie wlewamy rum - tworzą się warstwy",
                "Dekorujemy miętą",
                "Serwujemy z rurką - przed konsumpcją zamieszać"
            ],
            ingredients: [
                "40 ml Jamaican Rum",
                "1 dash Angostura Bitters",
                "1 ćwiartka limonki",
                "Ginger Beer - top up"
            ],
            decoration: "2 szczypy mięty"
        },
        {
            name: "El Presidente",
            glass: "Nick & Nora",
            method: [
                "Wszystkie składniki mieszamy przez około 15 sekund",
                "Cedzimy całość do uprzednio zmrożonego szkła",
                "Okraszamy koktajl olejkami pomarańczowymi",
                "Do środka wrzucamy wiśnię"
            ],
            ingredients: [
                "40 ml Caribbean Blend Rum",
                "15 ml Lillet Blanc",
                "5 ml Cointreau",
                "2,5 ml Syrop malinowy",
                "2 dash Orange Bitters"
            ],
            decoration: "Wiśnia + olejki pomarańczowe"
        },
        {
            name: "Fish House Punch",
            glass: "Collins",
            method: [
                "Wlewamy składniki do shakera",
                "Wstrząsamy intensywnie",
                "Cedzimy na lód",
                "Dekorujemy"
            ],
            ingredients: [
                "20 ml Cognac",
                "20 ml Aged Rum",
                "15 ml Peach Liqueur",
                "30 ml Napar z herbaty Earl Grey",
                "20 ml Soku z cytryny",
                "15 ml Oleo Saccharum"
            ],
            decoration: "Bukiet mięty (3 szczypy) + ćwiartka cytryny"
        },
        {
            name: "Fog Cutter",
            glass: "Collins",
            method: [
                "Wstrząsamy niezwykle intensywnie wszystkie składniki",
                "Cedzimy na lód do wysokiego szkła",
                "Dekorujemy"
            ],
            ingredients: [
                "20 ml Pisco",
                "20 ml London Dry Gin",
                "20 ml Gold Rum",
                "20 ml Orgeat",
                "30 ml Soku z cytryny",
                "30 ml Soku z pomarańczy",
                "10 ml Ruby Port"
            ],
            decoration: "Bukiet mięty + czips z ananasa - całość oprószona pudrem pomarańczowym"
        },
        {
            name: "Hemingway Daiquiri",
            glass: "Nick & Nora",
            method: [
                "Wszystkie składniki wstrząsamy intensywnie z lodem",
                "Cedzimy do uprzednio zmrożonego szkła",
                "Okraszamy olejkami grejpfrutowymi",
                "Wrzucamy wiśnię do środka"
            ],
            ingredients: [
                "40 ml White Rum",
                "20 ml Sok grejpfrutowy",
                "15 ml Soku z limonki",
                "10 ml Syrop cukrowy",
                "5 ml Maraschino Liqueur"
            ],
            decoration: "Olejki grejpfrutowe + wiśnia koktajlowa"
        },
        {
            name: "Hot Rum Grog",
            glass: "Irish Coffee Cup",
            method: [
                "Szkło uzupełniamy wrzątkiem i trzymamy przez chwilę aby je rozgrzać",
                "Wlewamy wszystkie składniki",
                "Dopełniamy wrzątkiem",
                "Dekorujemy"
            ],
            ingredients: [
                "50 ml Spiced Rum",
                "20 ml Soku z cytryny",
                "15 ml Soku z grejpfruta",
                "15 ml Soku z pomarańczy",
                "20 ml Syrop waniliowy",
                "1 dash Angostura Bitters",
                "Wrzątek"
            ],
            decoration: "Laska cynamonu + pół plasterka pomarańczy + kandyzowany imbir"
        },
        {
            name: "Mai Tai",
            glass: "Double Old Fashioned Glass",
            method: [
                "Wszystkie składniki wlewamy do shakera",
                "Dodajemy kości lodu i wstrząsamy",
                "Przelewamy wraz z lodem do szkła (Dirty Shake)",
                "Dopełniamy lodem",
                "Dekorujemy"
            ],
            ingredients: [
                "30 ml White Rum",
                "20 ml Jamaican Rum",
                "15 ml Cointreau",
                "10 ml Orgeat",
                "30 ml Soku z limonki",
                "5 ml Syrop cukrowy"
            ],
            decoration: "Czips z ananasa + bukiet mięty oprószony pudrem"
        },
        {
            name: "Mojito",
            glass: "Collins",
            method: [
                "Limonkę ucieramy wraz z syropem miętowym",
                "Dodajemy miętę i rum",
                "Zasypujemy w pełni lodem kruszonym",
                "Intensywnie mieszamy łyżą barmańską",
                "Dopełniamy lodem",
                "Uzupełniamy wodą gazowaną",
                "Dekorujemy miętą i ją opruszamy"
            ],
            ingredients: [
                "50 ml Aged Rum",
                "1/2 limonki",
                "15 ml Syrop miętowy",
                "8 liści mięty",
                "Woda gazowana"
            ],
            decoration: "Bukiet mięty oprószony cukrem klasycznym lub cytrusowym"
        },
        {
            name: "Mojito Norblito",
            glass: "Collins",
            method: [
                "Premix wlewamy do shakera",
                "Wstrząsamy intensywnie",
                "Do szkła wlewamy splash wody gazowanej",
                "Cedzimy koktajl podwójnie do szkła na wodę",
                "Dopełniamy maksymalnie lodem",
                "Dekorujemy miętą"
            ],
            ingredients: [
                "50 ml White Rum (wzbogacony o smak tartej skórki)",
                "30 ml Fake Lime Juice",
                "20 ml Syrop miętowy",
                "5 liści mięty"
            ],
            decoration: "Bukiet mięty oprószony pudrem klasycznym lub cytrusowym"
        },
        {
            name: "Nuclear Daiquiri",
            glass: "Nick & Nora",
            method: [
                "Wstrząsamy niezwykle intensywnie wszystkie składniki",
                "Cedzimy podwójnie do uprzednio zmrożonego szkła",
                "Dekorujemy"
            ],
            ingredients: [
                "30 ml Overproof White Rum",
                "20 ml Green Chartreuse",
                "10 ml Falernum",
                "20 ml Sok z limonki",
                "10 ml Syrop cukrowy"
            ],
            decoration: "Mięta w czipsie limonkowym"
        },
        {
            name: "Old Cuban",
            glass: "Collins",
            method: [
                "Wszystkie składniki intensywnie wstrząsamy z dużą ilością lodu (z wyjątkiem prosecco)",
                "Cedzimy podwójnie do szkła na lód",
                "Dopełniamy Prosecco",
                "Dekorujemy"
            ],
            ingredients: [
                "50 ml Aged Rum",
                "20 ml Syrop waniliowy",
                "20 ml Sok z limonki",
                "1 dash Angostura Bitters",
                "40 ml Prosecco",
                "5 liści mięty"
            ],
            decoration: "Mięta posypana pudrem"
        },
        {
            name: "Queen's Park Swizzle",
            glass: "Collins",
            method: [
                "Do szkła wrzucamy miętę",
                "Przyciskamy ją Swizzle Stick i wlewamy wszystkie składniki",
                "Dopełniamy w pełni kruszonym lodem",
                "Uprawiamy swizzle przez około 10-15 sekund",
                "Dopełniamy kruszonym lodem, aby ponad rant wystawał kopczyk",
                "Dekorujemy miętą i czipsem z ananasa - całość posypujemy cukrem pudrem cytrusowym"
            ],
            ingredients: [
                "30 ml Gold Rum",
                "20 ml Jamaican Rum",
                "10 ml Falernum",
                "20 ml Soku z limonki",
                "10 ml Syrop waniliowy",
                "10 liści mięty"
            ],
            decoration: "Bukiet mięty + czips z ananasa - całość oprószona pudrem"
        },
        {
            name: "Right Hand Cocktail",
            glass: "Old Fashioned",
            method: [
                "Wlewamy wszystkie składniki do szklanicy",
                "Intensywnie mieszamy przez około 15 sekund",
                "Cedzimy do szkła na bryłkę",
                "Okraszamy całość olejkami pomarańczowymi i dekorujemy coin na spinaczu"
            ],
            ingredients: [
                "30 ml Aged Rum",
                "20 ml Martini Bitter",
                "20 ml Sweet Vermouth",
                "5 ml Dark Chocolate Liqueur"
            ],
            decoration: "Coin z pomarańczy przypięte na spinaczu do rantu szkła"
        },
        {
            name: "Zombie",
            glass: "Collins",
            method: [
                "Wlewamy wszystkie składniki do shakera",
                "Wstrząsamy z dużą ilością lodu",
                "Cedzimy na kości do wysokiego szkła"
            ],
            ingredients: [
                "30 ml Gold Rum",
                "20 ml Jamaican Rum",
                "10 ml Falernum",
                "30 ml Soku z grejpfruta",
                "20 ml Soku z limonki",
                "20 ml Syrop piernikowy",
                "5 ml Syrop malinowy",
                "1 dash Angostura Bitters",
                "2 ml Absynth"
            ],
            decoration: "Bukiet mięty + tarta fasola tonka + imbir kandyzowany na szpadce"
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
                "40 ml Galliano Amaretto",
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
                "20 ml Carpano Antica Formula",
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
                "20 ml Martini Rubino"
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
                "20 ml Carpano Antica Formula",
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
                "20 ml Albumina",
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
                "120 ml kawy przelewowej",
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
                "40 ml Hennessy V.S.",
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
                "20 ml Papidoux V.S.O.P.",
                "20 ml Hennessy V.S.",
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
                "50 ml Bourbon Whiskey",
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
                "40 ml Hennessyy V.S.",
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
                "15 ml Red Wine",
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
                "Islay Malt Spray",
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
                "20 ml Hennessy V.S.",
                "3 x dash Peychaud's Bitters",
                "1 x dash Angostura Bitters",
                "5 ml syrop cukrowy",
                "Absynth Spray",
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
                "1/2 cytryny",
                "8 liści mięty"
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
                "20 ml Hennessy V.S.",
                "20 ml Martini Rubino",
                "10 ml D.O.M Benedictine",
                "2 x dash Peychaud's Bitters",
                "1 x dash Angostura Bitters",
            ],
            decoration: "coin z cytryny"
        }
    ]
};

// RECIPES Z SYSTEMEM ID 
export const recipes = {
    "Vodka Sour": [
        {"ingredientId": 3, "amount": 40},
        {"ingredientId": 43, "amount": 25},
        {"ingredientId": 51, "amount": 15},
        {"ingredientId": 62, "amount": 20},
        {"ingredientId": 57, "amount": 1}
    ],
    "Bloody Mary": [
        {"ingredientId": 3, "amount": 50},
        {"ingredientId": 79, "amount": 100},
        {"ingredientId": 43, "amount": 10},
        {"ingredientId": 80, "amount": 10},
        {"ingredientId": 81, "amount": 3}
    ],
    "Cosmopolitan": [
        {"ingredientId": 3, "amount": 30},
        {"ingredientId": 34, "amount": 10},
        {"ingredientId": 77, "amount": 30},
        {"ingredientId": 78, "amount": 10},
        {"ingredientId": 82, "amount": 1}
    ],
    "Espresso Martini": [
        {"ingredientId": 3, "amount": 40},
        {"ingredientId": 24, "amount": 20},
        {"ingredientId": 53, "amount": 10},
        {"ingredientId": 70, "amount": 1},
        {"ingredientId": 60, "amount": 1}
    ],
    "Golden Cadillac": [
        {"ingredientId": 26, "amount": 30},
        {"ingredientId": 25, "amount": 30},
        {"ingredientId": 63, "amount": 30}
    ],
    "Grasshooper": [
        {"ingredientId": 26, "amount": 20},
        {"ingredientId": 27, "amount": 20},
        {"ingredientId": 3, "amount": 20},
        {"ingredientId": 63, "amount": 30}
    ],
    "Long Island Iced Tea": [
        {"ingredientId": 1, "amount": 20},
        {"ingredientId": 3, "amount": 20},
        {"ingredientId": 9, "amount": 20},
        {"ingredientId": 20, "amount": 20},
        {"ingredientId": 17, "amount": 20},
        {"ingredientId": 51, "amount": 10},
        {"ingredientId": 43, "amount": 20},
        {"ingredientId": 67, "amount": 40}
    ],
    "Pornstar Martini": [
        {"ingredientId": 3, "amount": 40},
        {"ingredientId": 53, "amount": 20},
        {"ingredientId": 44, "amount": 20},
        {"ingredientId": 83, "amount": 20},
        {"ingredientId": 64, "amount": 30}
    ],
    "Kyiv Mule": [
        {"ingredientId": 3, "amount": 40},
        {"ingredientId": 44, "amount": 15},
        {"ingredientId": 51, "amount": 10},
        {"ingredientId": 66, "amount": 100},
        {"ingredientId": 57, "amount": 1}
    ],
    "AIR MAIL": [
        {"ingredientId": 10, "amount": 50},
        {"ingredientId": 54, "amount": 20},
        {"ingredientId": 44, "amount": 20},
        {"ingredientId": 64, "amount": 40}
    ],
    "Caipirinha": [
        {"ingredientId": 16, "amount": 50},
        {"ingredientId": 51, "amount": 15},
        {"ingredientId": 47, "amount": 0.5}
    ],
    "Classic Rum Swizzle": [
        {"ingredientId": 9, "amount": 50},
        {"ingredientId": 44, "amount": 30},
        {"ingredientId": 51, "amount": 20},
        {"ingredientId": 57, "amount": 4}
    ],
    "Corn 'n' Oil": [
        {"ingredientId": 11, "amount": 20},
        {"ingredientId": 12, "amount": 10},
        {"ingredientId": 39, "amount": 20},
        {"ingredientId": 34, "amount": 10},
        {"ingredientId": 57, "amount": 1},
        {"ingredientId": 47, "amount": 0.5}
    ],
    "Cuba Libre": [
        {"ingredientId": 11, "amount": 40},
        {"ingredientId": 47, "amount": 0.5},
        {"ingredientId": 67, "amount": 100}
    ],
    "Daiquiri": [
        {"ingredientId": 9, "amount": 50},
        {"ingredientId": 44, "amount": 20},
        {"ingredientId": 51, "amount": 10}
    ],
    "Dark 'n' Stormy": [
        {"ingredientId": 12, "amount": 40},
        {"ingredientId": 57, "amount": 1},
        {"ingredientId": 47, "amount": 0.25},
        {"ingredientId": 66, "amount": 100}
    ],
    "El Presidente": [
        {"ingredientId": 15, "amount": 40},
        {"ingredientId": 31, "amount": 15},
        {"ingredientId": 20, "amount": 5},
        {"ingredientId": 55, "amount": 2.5},
        {"ingredientId": 58, "amount": 2}
    ],
    "Fish House Punch": [
        {"ingredientId": 110, "amount": 20},
        {"ingredientId": 11, "amount": 20},
        {"ingredientId": 41, "amount": 15},
        {"ingredientId": 87, "amount": 30},
        {"ingredientId": 43, "amount": 20},
        {"ingredientId": 88, "amount": 15}
    ],
    "Fog Cutter": [
        {"ingredientId": 19, "amount": 20},
        {"ingredientId": 1, "amount": 20},
        {"ingredientId": 10, "amount": 20},
        {"ingredientId": 40, "amount": 20},
        {"ingredientId": 43, "amount": 30},
        {"ingredientId": 45, "amount": 30},
        {"ingredientId": 73, "amount": 10}
    ],
    "Hemingway Daiquiri": [
        {"ingredientId": 9, "amount": 40},
        {"ingredientId": 46, "amount": 20},
        {"ingredientId": 44, "amount": 15},
        {"ingredientId": 51, "amount": 10},
        {"ingredientId": 21, "amount": 5}
    ],
    "Hot Rum Grog": [
        {"ingredientId": 13, "amount": 50},
        {"ingredientId": 43, "amount": 20},
        {"ingredientId": 46, "amount": 15},
        {"ingredientId": 45, "amount": 15},
        {"ingredientId": 53, "amount": 20},
        {"ingredientId": 57, "amount": 1},
        {"ingredientId": 69, "amount": 100}
    ],
    "Mai Tai": [
        {"ingredientId": 9, "amount": 30},
        {"ingredientId": 12, "amount": 20},
        {"ingredientId": 20, "amount": 15},
        {"ingredientId": 40, "amount": 10},
        {"ingredientId": 44, "amount": 30},
        {"ingredientId": 51, "amount": 5}
    ],
    "Mojito": [
        {"ingredientId": 11, "amount": 50},
        {"ingredientId": 47, "amount": 0.5},
        {"ingredientId": 52, "amount": 15},
        {"ingredientId": 50, "amount": 8},
        {"ingredientId": 65, "amount": 100}
    ],
    "Mojito Norblito": [
        {"ingredientId": 9, "amount": 50},
        {"ingredientId": 86, "amount": 30},
        {"ingredientId": 52, "amount": 20},
        {"ingredientId": 50, "amount": 5}
    ],
    "Nuclear Daiquiri": [
        {"ingredientId": 14, "amount": 30},
        {"ingredientId": 22, "amount": 20},
        {"ingredientId": 39, "amount": 10},
        {"ingredientId": 44, "amount": 20},
        {"ingredientId": 51, "amount": 10}
    ],
    "Old Cuban": [
        {"ingredientId": 11, "amount": 50},
        {"ingredientId": 53, "amount": 20},
        {"ingredientId": 44, "amount": 20},
        {"ingredientId": 57, "amount": 1},
        {"ingredientId": 64, "amount": 40},
        {"ingredientId": 50, "amount": 5}
    ],
    "Queen's Park Swizzle": [
        {"ingredientId": 10, "amount": 30},
        {"ingredientId": 12, "amount": 20},
        {"ingredientId": 39, "amount": 10},
        {"ingredientId": 44, "amount": 20},
        {"ingredientId": 53, "amount": 10},
        {"ingredientId": 50, "amount": 10}
    ],
    "Right Hand Cocktail": [
        {"ingredientId": 11, "amount": 30},
        {"ingredientId": 108, "amount": 20},
        {"ingredientId": 107, "amount": 20},
        {"ingredientId": 42, "amount": 5}
    ],
    "Zombie": [
        {"ingredientId": 10, "amount": 30},
        {"ingredientId": 12, "amount": 20},
        {"ingredientId": 39, "amount": 10},
        {"ingredientId": 46, "amount": 30},
        {"ingredientId": 44, "amount": 20},
        {"ingredientId": 56, "amount": 20},
        {"ingredientId": 55, "amount": 5},
        {"ingredientId": 57, "amount": 1},
        {"ingredientId": 72, "amount": 2}
    ],
    "Amaretto Sour": [
        {"ingredientId": 23, "amount": 40},
        {"ingredientId": 7, "amount": 10},
        {"ingredientId": 43, "amount": 30},
        {"ingredientId": 51, "amount": 10},
        {"ingredientId": 62, "amount": 15}
    ],
    "Blood & Sand": [
        {"ingredientId": 8, "amount": 30},
        {"ingredientId": 111, "amount": 20},
        {"ingredientId": 38, "amount": 20},
        {"ingredientId": 45, "amount": 30},
        {"ingredientId": 105, "amount": 1}
    ],
    "Boulevardier": [
        {"ingredientId": 4, "amount": 30},
        {"ingredientId": 107, "amount": 20},
        {"ingredientId": 108, "amount": 20}
    ],
    "Manhattan": [
        {"ingredientId": 4, "amount": 50},
        {"ingredientId": 29, "amount": 20},
        {"ingredientId": 57, "amount": 2}
    ],
    "Whisky Sour": [
        {"ingredientId": 7, "amount": 40},
        {"ingredientId": 43, "amount": 25},
        {"ingredientId": 51, "amount": 15},
        {"ingredientId": 62, "amount": 20},
        {"ingredientId": 57, "amount": 1}
    ],
    "Irish Coffee": [
        {"ingredientId": 6, "amount": 50},
        {"ingredientId": 71, "amount": 120},
        {"ingredientId": 53, "amount": 15}
    ],
    "BRANDY CRUSTA": [
        {"ingredientId": 20, "amount": 10},
        {"ingredientId": 21, "amount": 10},
        {"ingredientId": 43, "amount": 20},
        {"ingredientId": 51, "amount": 5}
    ],
    "CAMERON'S KICK": [
        {"ingredientId": 7, "amount": 20},
        {"ingredientId": 6, "amount": 20},
        {"ingredientId": 43, "amount": 25},
        {"ingredientId": 40, "amount": 20}
    ],
    "Corpse Reviver #1": [
        {"ingredientId": 107, "amount": 20},
        {"ingredientId": 109, "amount": 20},
        {"ingredientId": 110, "amount": 20}
    ],
    "Derby": [
        {"ingredientId": 4, "amount": 50},
        {"ingredientId": 46, "amount": 30},
        {"ingredientId": 54, "amount": 20}
    ],
    "HOT TODDY": [
        {"ingredientId": 7, "amount": 50},
        {"ingredientId": 54, "amount": 20},
        {"ingredientId": 43, "amount": 20},
        {"ingredientId": 91, "amount": 1},
        {"ingredientId": 92, "amount": 1}
    ],
    "JAPANESE COCKTAIL": [
        {"ingredientId": 110, "amount": 40},
        {"ingredientId": 40, "amount": 5},
        {"ingredientId": 57, "amount": 3}
    ],
    "NEW YORK SOUR": [
        {"ingredientId": 4, "amount": 40},
        {"ingredientId": 43, "amount": 25},
        {"ingredientId": 51, "amount": 15},
        {"ingredientId": 62, "amount": 20},
        {"ingredientId": 57, "amount": 1},
        {"ingredientId": 74, "amount": 15}
    ],
    "Loretto old fashioned": [
        {"ingredientId": 4, "amount": 50},
        {"ingredientId": 90, "amount": 5},
        {"ingredientId": 57, "amount": 3},
        {"ingredientId": 58, "amount": 1}
    ],
    "PAPER PLANE": [
        {"ingredientId": 4, "amount": 20},
        {"ingredientId": 106, "amount": 20},
        {"ingredientId": 34, "amount": 20},
        {"ingredientId": 43, "amount": 20}
    ],
    "PENICILLIN": [
        {"ingredientId": 7, "amount": 50},
        {"ingredientId": 54, "amount": 20},
        {"ingredientId": 43, "amount": 20}
    ],
    "Sazerac": [
        {"ingredientId": 5, "amount": 20},
        {"ingredientId": 110, "amount": 20},
        {"ingredientId": 59, "amount": 3},
        {"ingredientId": 57, "amount": 1},
        {"ingredientId": 51, "amount": 5}
    ],
    "TRYNIDAD SOUR": [
        {"ingredientId": 61, "amount": 40},
        {"ingredientId": 5, "amount": 15},
        {"ingredientId": 40, "amount": 30},
        {"ingredientId": 43, "amount": 20}
    ],
    "WHISKEY SMASH": [
        {"ingredientId": 4, "amount": 50},
        {"ingredientId": 51, "amount": 20},
        {"ingredientId": 48, "amount": 1},
        {"ingredientId": 50, "amount": 8}
    ],
    "VIEUX CAREE": [
        {"ingredientId": 5, "amount": 20},
        {"ingredientId": 110, "amount": 20},
        {"ingredientId": 29, "amount": 20},
        {"ingredientId": 37, "amount": 10},
        {"ingredientId": 59, "amount": 2},
        {"ingredientId": 57, "amount": 1}
    ],
    "ARM & NAVY": [
        {"ingredientId": 1, "amount": 50},
        {"ingredientId": 40, "amount": 20},
        {"ingredientId": 43, "amount": 20},
        {"ingredientId": 57, "amount": 1}
    ],
    "AVIATION": [
        {"ingredientId": 1, "amount": 50},
        {"ingredientId": 21, "amount": 10},
        {"ingredientId": 75, "amount": 5},
        {"ingredientId": 43, "amount": 15},
        {"ingredientId": 51, "amount": 2.5}
    ],
    "BEE’S KNEES": [
        {"ingredientId": 1, "amount": 50},
        {"ingredientId": 54, "amount": 20},
        {"ingredientId": 43, "amount": 20},
        {"name": "soku z pomarańczy", "amount": 20.0}
    ],
    "BIJOU": [
        {"ingredientId": 1, "amount": 20},
        {"ingredientId": 29, "amount": 20},
        {"ingredientId": 22, "amount": 20},
        {"ingredientId": 58, "amount": 1}
    ],
    "Bombay & Tonic": [
        {"ingredientId": 1, "amount": 40},
        {"ingredientId": 68, "amount": 100}
    ],
    "BRAMBLE": [
        {"ingredientId": 1, "amount": 40},
        {"ingredientId": 43, "amount": 20},
        {"ingredientId": 51, "amount": 10},
        {"ingredientId": 28, "amount": 15}
    ],
    "BREAKFAST MARTINI": [
        {"ingredientId": 1, "amount": 50},
        {"ingredientId": 20, "amount": 15},
        {"ingredientId": 43, "amount": 20}
    ],
    "CHARLIE CHAPLIN": [
        {"name": "Hayman’s Sloe Gin", "amount": 30.0},
        {"name": "Archer’s", "amount": 30.0},
        {"ingredientId": 44, "amount": 30}
    ],
    "CHRYSANTHEMUM": [
        {"ingredientId": 30, "amount": 60},
        {"ingredientId": 37, "amount": 10},
        {"ingredientId": 72, "amount": 1}
    ],
    "CLOVER CLUB": [
        {"ingredientId": 1, "amount": 40},
        {"ingredientId": 30, "amount": 10},
        {"ingredientId": 43, "amount": 20},
        {"ingredientId": 55, "amount": 15},
        {"name": "cukru (łyżeczka barmańska)", "amount": 2.5},
        {"ingredientId": 62, "amount": 15}
    ],
    "Corpse": [
        {"ingredientId": 1, "amount": 20},
        {"ingredientId": 32, "amount": 20},
        {"ingredientId": 20, "amount": 20},
        {"ingredientId": 43, "amount": 20}
    ],
    "DRY MARTINI": [
        {"name": "London Dry Gin (z zamrażarki*)", "amount": 50.0},
        {"ingredientId": 30, "amount": 10},
        {"ingredientId": 58, "amount": 1}
    ],
    "gimlet": [
        {"ingredientId": 1, "amount": 50},
        {"ingredientId": 76, "amount": 20}
    ],
    "GIN BASIL SMASH": [
        {"ingredientId": 1, "amount": 50},
        {"ingredientId": 51, "amount": 20}
    ],
    "GIN GIN MULE": [
        {"ingredientId": 1, "amount": 40},
        {"name": "syrop miód i imbir", "amount": 20.0},
        {"ingredientId": 44, "amount": 20},
        {"ingredientId": 66, "amount": 100}
    ],
    "HANKY PANKY": [
        {"ingredientId": 1, "amount": 40},
        {"ingredientId": 29, "amount": 40},
        {"ingredientId": 35, "amount": 2.5}
    ],
    "LAST WORD": [
        {"ingredientId": 1, "amount": 20},
        {"ingredientId": 22, "amount": 20},
        {"ingredientId": 21, "amount": 20},
        {"ingredientId": 44, "amount": 20}
    ],
    "Martinez": [
        {"ingredientId": 1, "amount": 50},
        {"ingredientId": 29, "amount": 20},
        {"ingredientId": 30, "amount": 10},
        {"ingredientId": 20, "amount": 5},
        {"ingredientId": 58, "amount": 1},
        {"ingredientId": 57, "amount": 1}
    ],
    "NEGRONI": [
        {"ingredientId": 1, "amount": 20},
        {"ingredientId": 29, "amount": 20},
        {"ingredientId": 33, "amount": 20}
    ],
    "RAMOS GIN FIZZ": [
        {"name": "Ford’s Gin", "amount": 50.0},
        {"ingredientId": 51, "amount": 20},
        {"ingredientId": 43, "amount": 15},
        {"ingredientId": 44, "amount": 15},
        {"ingredientId": 63, "amount": 30},
        {"ingredientId": 62, "amount": 20},
        {"ingredientId": 89, "amount": 1},
        {"ingredientId": 89, "amount": 40}
    ],
    "SINGAPORE SLING": [
        {"ingredientId": 1, "amount": 40},
        {"ingredientId": 38, "amount": 15},
        {"ingredientId": 37, "amount": 5},
        {"ingredientId": 20, "amount": 5},
        {"ingredientId": 84, "amount": 50},
        {"ingredientId": 44, "amount": 20},
        {"ingredientId": 85, "amount": 2.5}
    ],
    "Southside": [
        {"ingredientId": 1, "amount": 50},
        {"name": "syrop miętowy", "amount": 15.0},
        {"ingredientId": 44, "amount": 20}
    ],
    "TUXEDO COCKTAIL": [
        {"name": "Hayman’s Old Tom Gin", "amount": 30.0},
        {"ingredientId": 30, "amount": 30},
        {"ingredientId": 21, "amount": 5},
        {"ingredientId": 58, "amount": 2},
        {"ingredientId": 57, "amount": 1},
        {"ingredientId": 72, "amount": 1}
    ],
    "vesper MARTINI": [
        {"ingredientId": 1, "amount": 30},
        {"ingredientId": 3, "amount": 10},
        {"ingredientId": 32, "amount": 5}
    ],
    "WHITE LADY": [
        {"ingredientId": 1, "amount": 50},
        {"ingredientId": 20, "amount": 20},
        {"ingredientId": 43, "amount": 20},
        {"ingredientId": 51, "amount": 5},
        {"ingredientId": 62, "amount": 15}
    ],
    "white NEGRONI": [
        {"ingredientId": 1, "amount": 20},
        {"ingredientId": 36, "amount": 20},
        {"ingredientId": 31, "amount": 20}
    ],
    "XX CENTURY COCKTAIL": [
        {"ingredientId": 1, "amount": 20},
        {"ingredientId": 32, "amount": 20},
        {"ingredientId": 26, "amount": 20},
        {"ingredientId": 43, "amount": 20}
    ],
    "Pisco Sour": [
        {"ingredientId": 19, "amount": 50},
        {"ingredientId": 44, "amount": 30},
        {"ingredientId": 51, "amount": 20},
        {"ingredientId": 62, "amount": 20}
    ],
    "Martini Fiero & Tonik": [
        {"ingredientId": 96, "amount": 80},
        {"ingredientId": 98, "amount": 100}
    ],
    "Vibrante/Floreale Tonik": [
        {"ingredientId": 97, "amount": 40},
        {"ingredientId": 98, "amount": 100}
    ],
    "PINK CHIHUAHUA": [
        {"ingredientId": 17, "amount": 40},
        {"ingredientId": 44, "amount": 15},
        {"ingredientId": 43, "amount": 5},
        {"ingredientId": 55, "amount": 15},
        {"ingredientId": 40, "amount": 5},
        {"ingredientId": 62, "amount": 15}
    ],
    "margarita": [
        {"ingredientId": 17, "amount": 40},
        {"ingredientId": 20, "amount": 20},
        {"ingredientId": 44, "amount": 20}
    ],
    "LA PALOMA": [
        {"ingredientId": 17, "amount": 40},
        {"ingredientId": 103, "amount": 20},
        {"ingredientId": 44, "amount": 20},
        {"ingredientId": 102, "amount": 100}
    ],
    "NEGRONI 0%": [
        {"ingredientId": 93, "amount": 20},
        {"ingredientId": 94, "amount": 20},
        {"ingredientId": 95, "amount": 20}
    ],
    "Martini Fiero spritz": [
        {"ingredientId": 96, "amount": 80},
        {"ingredientId": 64, "amount": 100},
        {"ingredientId": 101, "amount": 100},
        {"ingredientId": 65, "amount": 100}
    ]
};

// Opcje szklanek
export const glassOptions = [
    "Collins",
    "Nick & Nora", 
    "Double Old Fashioned Glass",
    "Coupe + kieliszek do wódki",
    "Old Fashioned",
    "Coupe",
    "Champagne Flute",
    "Irish Coffee Cup",
    "Whisky Glass",
    "Copa Bombay",
    "Copa Martini"
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
