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
      description: "7-letnie dojrzewanie w spalanych beczkach dębowych daje mu gładkość wzbogaconą nutami słodkiego karmelu, wanilii i charakterystycznego dla bourbonu palonego dębu. W aromacie dominują wanilia, karmel i pomarańcza, a w smaku słodkie, zrównoważone tony z korzennymi nutami."
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
      description: "Destylowany metodą parowej infuzji z 10 botaników z całego świata. Charakterystyczne błękitne butelki inspirowane orientalnymi motywami. Harmonijne połączenie jałowca, cytrusów, korzennych przypraw i delikatnej kwiatowości."
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
      ingredients: [
        "30 ml Creme De Cacao",
        "30 ml Galliano Autentico",
        "30 ml Half Half"
      ],
      decoration: "Bezik plus gorzka tarta czekolada + złoty pył"
    },
    {
      name: "Grasshooper",
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
  "Rum": [],
  "Tequila": [],
  "Whiskey": [
    {
      name: "AMARETTO SOUR",
      ingredients: [
        "40 ml Galliano Amaretto",
        "10 ml Dewar’s 8 Caribbean Smooth",
        "30 ml soku z cytryny",
        "10 ml syropu cukrowego",
        "15 ml Albumina"
      ],
      decoration: "wierzch koktajlu posypany pudrem buraczanym oraz suszony kwiatostan róży."
    },
    {
      name: "BLOOD & SAND",
      ingredients: [
        "30 ml Dewar’s 12 YO",
        "20 ml Carpano Antica Formula",
        "20 ml Cherry Heering",
        "30 ml sok z pomarańczy",
        "Islay Malt Spray"
      ],
      decoration: "wiśnia na szpadce + olejki pomarańczowe"
    },
    {
      name: "BOULEVARDIER",
      ingredients: [
        "30 ml Maker’s Mark",
        "20 ml Martini Bitter",
        "20 ml Martini Rubino"
      ],
      decoration: "olejki pomarańczowe + coin z pomarańczy przypięte na spinaczu do rantu szkła"
    },
    {
      name: "BRANDY CRUSTA",
      ingredients: [
        "40 Hennessy V.S.",
        "10 ml Cointreau",
        "10 ml Maraschino",
        "20 ml soku z cytryny",
        "5 ml syropu cukrowego"
      ],
      decoration: "cukier pomarańczowy plus duży zest z pomarańczy"
    },
    {
      name: "CAMERON’S KICK",
      ingredients: [
        "20 ml Dewar’s 8 Caribbean Smooth",
        "20 ml Tullamore DEW",
        "25 ml soku z cytryny",
        "20 ml Orgeat"
      ],
      decoration: "coin z pomarańczy"
    },
    {
      name: "Corpse Reviver #1",
      ingredients: [
        "20 ml Papidoux V.S.O.P.",
        "20 ml Hennessy V.S.",
        "20 ml Martini Rubino"
      ],
      decoration: "Olejki cytrynowe (serwujemy bez garnishu)"
    },
    {
      name: "Derby",
      ingredients: [
        "50 ml Maker’s Mark Bourbon",
        "30 ml soku grejpfrutowego",
        "20 ml syropu miód imbir"
      ],
      decoration: "zest z grejpfruta wycięty nożyczkami karbowanymi przypięty do rantu szkła"
    },
    {
      name: "HOT TODDY",
      ingredients: [
        "50 ml Dewar’s 8 Caribbean Smooth",
        "20 ml syrop miodowo - imbirowy",
        "20 ml sok z cytryny",
        "Wrzątek"
      ],
      decoration: "Laska cynamonu + plaster cytryny"
    },
    {
      name: "Irish coffee",
      ingredients: [
        "50 ml Tullamore DEW",
        "120 ml kawy przelewowej (mocna)",
        "15 ml syropu waniliowego"
      ],
      decoration: "tarta fasola tonka na wierzch + gwiazdka anyżu."
    },
    {
      name: "JAPANESE COCKTAIL",
      ingredients: [
        "40 ml Hennessyy V.S",
        "5 ml Orgeat",
        "3 x dash Angostura Bitters"
      ],
      decoration: "Olejki ze skórki cytrynowej + wiśnia koktajlowa"
    },
    {
      name: "MANHATTAN",
      ingredients: [
        "50 ml Maker’s Mark",
        "20 ml Carpano Antica Formula",
        "2 x dash Angostura Bitters"
      ],
      decoration: "Wiśnia Koktajlowa + spray z olejków pomarańczowych"
    },
    {
      name: "NEW YORK SOUR",
      ingredients: [
        "40 ml Jim Beam Black",
        "25 ml soku z cytryny",
        "15 ml syropu cukrowego",
        "20 ml albumina",
        "1 x dash Angostura Bitters",
        "15 ml Serenello Merlot"
      ],
      decoration: "coin z pomarańczy"
    },
    {
      name: "Loretto old fashioned",
      ingredients: [
        "50 ml Maker’s Mark",
        "5 ml zalewy z wiśni",
        "3 x dash Angostura Bitters",
        "1 x dash Orange Bitters"
      ],
      decoration: "Kółko - ,,coin” z pomarańczy położony na bryłce + wiśnia na szpadce"
    },
    {
      name: "PAPER PLANE",
      ingredients: [
        "20 ml Maker’s Mark",
        "20 ml Amaro Nonino",
        "20 ml Aperol",
        "20 ml soku z cytryny"
      ],
      decoration: "Zest z pomarańczy => przypięty do stópki."
    },
    {
      name: "PENICILLIN",
      ingredients: [
        "50 ml Dewar’s 8 Caribbean Smooth",
        "20 ml syrop miodowo - imbirowy",
        "20 ml soku z cytryny",
        "Islay Malt Spray"
      ],
      decoration: "kandyzowany imbir na wykałaczce koktajlowej"
    },
    {
      name: "sazerac",
      ingredients: [
        "20 ml Jim Beam Rye",
        "20 ml Hennessy V.S",
        "3 x dash Peychaud’s Bitters",
        "1 x dash Angostura Bitters",
        "5 ml syrop cukrowy",
        "Absynth Spray",
      ],
      decoration: "olejki ze skórki cytrynowej"
    },
    {
      name: "TRYNIDAD SOUR",
      ingredients: [
        "40 ml Angostura Aromatic Bitters",
        "15 ml Jim Beam Rye",
        "30 ml Orgeat",
        "20 ml soku z cytryny"
      ],
      decoration: "tarta gorzka czekolada + gwiazdka anyżu"
    },
    {
      name: "WHISKY SOUR",
      ingredients: [
        "40 ml Dewar’s 8 Caribbean Smooth",
        "25 ml soku z cytryny",
        "15 ml syropu cukrowego",
        "20 ml albumina",
        "1 x dash Angostura Bitters"
      ],
      decoration: "coin z pomarańczy"
    },
    {
      name: "WHISKEY SMASH",
      ingredients: [
        "50 ml Maker’s Mark",
        "20 ml syropu cukrowego",
        "1/2 cytryny",
        "8 liści mięty"
      ],
      decoration: "Bukiet mięty opruszony pudrem pomarańczowym"
    },
    {
      name: "VIEUX CAREE",
      ingredients: [
        "20 ml Jim Beam Rye",
        "20 ml Hennessy V.S.",
        "20 ml Martini Rubino",
        "10 ml D.O.M Benedictine",
        "2 x dash Peychaud’s Bitters",
        "1 x dash Angostura Bitters"
      ],
      decoration: "coin z cytryny"
    },
  ]
};

// Przepisy dla quizów
export const recipes = {
  "Vodka Sour": [
    {"name": "Wódka", "amount": 40},
    {"name": "Sok z cytryny", "amount": 25},
    {"name": "Syrop cukrowy", "amount": 15},
    {"name": "Abumina", "amount": 20}
  ],
  "Bloody Mary": [
    {"name": "Wódka", "amount": 50},
    {"name": "Tomato Juice", "amount": 100},
    {"name": "Sok z cytryny", "amount": 10},
    {"name": "Bloody Mary Mix", "amount": 10}
  ],
  "Cosmopolitan": [
    {"name": "Wódka", "amount": 30},
    {"name": "Aperol", "amount": 10},
    {"name": "Kordiał z żurawiny i róży", "amount": 30},
    {"name": "Esencja trawy cytrynowej", "amount": 10}
  ],
  "Espresso Martini": [
    {"name": "Wódka", "amount": 40},
    {"name": "Galliano Espresso", "amount": 20},
    {"name": "Syrop waniliowy", "amount": 10}
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
    {"name": "Przecier z marakui", "amount": 20}
  ],
  "Kyiv Mule": [
    {"name": "Wódka", "amount": 40},
    {"name": "Sok z limonki", "amount": 15},
    {"name": "Syrop cukrowy", "amount": 10},
    {"name": "Thomas Henry Spicy Ginger", "amount": 100}
  ]
};
