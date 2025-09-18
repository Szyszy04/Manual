// spirits.js - Informacje o konkretnych markach i typach alkoholi

// Dane wódek
export const vodkas = [
  { name: "Belvedere", price: "28,00", country: "Polska", ingredient: "Żyto" },
  { name: "Belvedere Lake Bartężek", price: "39,00", country: "Polska", ingredient: "Żyto" },
  { name: "Chopin Potato", price: "35,00", country: "Polska", ingredient: "Ziemniaki" },
  { name: "Grey Goose", price: "28,00", country: "Francja", ingredient: "Pszenica (winter wheat)" },
  { name: "Ostoya Vodka", price: "19,00", country: "Polska", ingredient: "Pszenica" },
  { name: "Ostoya Black", price: "21,00", country: "Polska", ingredient: "Pszenica" }
];

// Biblioteka informacji o alkoholach
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
      description: "Jeden z najsłynniejszych ginów na świecie, rozpoznawalny dzięki charakterystycznej szafirowej butelce. Produkowany metodą destylacji parowej, podczas której alkohol przechodzi przez kosze wypełnione ziołami. Zawiera 10 wyselekcjonowanych składników: jałowiec, kolendra, lukrecja, migdały, skórka cytrynowa, korzeń irysa, pieprz kubeba, aframon madagaskarski, arcydzięgiel, kora cynamonowa. Smak: cytrusowy, korzenny, jałowcowy, dobrze zbalansowany; idealny do Gin&Tonic oraz klasycznych koktajli."
    },
    {
      name: "Gin Mare",
      description: "Hiszpański gin inspirowany śródziemnomorskim klimatem i lokalnymi składnikami. Unikalna receptura oparta na botanicals takich jak oliwki Arbequina, bazylia, rozmaryn, tymianek i skórka pomarańczowa. Smak pełny i świeży — wyraźne ziołowe, oliwkowo-roślinne nuty; doskonały do nowoczesnych koktajli oraz orzeźwiającego Gin&Tonic na bazie toniku premium."
    },
    {
      name: "Tanqueray No. 10", 
      description: "Luksusowa wersja Tanqueray, powstała z myślą o koktajlach na bazie ginu; produkowana w małych partiach, destylowany w małym szkarłatnym alembiku 'Tiny Ten'. Botaniczne składniki: świeże owoce cytrusowe (limonka, grejpfrut, pomarańcza), jałowiec, kolendra, rumianek. Smak wyraźnie cytrusowy, idealny do Dry Martini, Gin Fizz oraz drinków wymagających czystego, odświeżającego alkoholu."
    },
    {
      name: "Oxley",
      description: "Innowacyjny, angielski gin destylowany „na zimno” w niskiej temperaturze(-5C) dzięki próżni – zachowuje najświeższe aromaty składników. Zawiera klasyczne botanicals: jałowiec, cytrusy, korzeń irysa, lukrecja, korzeń arcydzięgla i inne. Charakter: ultraczysty, rześki, intensywnie cytrusowy; polecany do wyrafinowanych koktajli."
    },
    {
      name: "Monkey 47",
      description: "Rzemieślniczy gin z niemieckiego Schwarzwaldu, słynie z bogactwa smaków i aromatów. Zawiera aż 47 składników botanicznych, m.in. sosnę, jagody, kwiaty, owoce, przyprawy. Profil: wytrawny, złożony, intensywnie aromatyczny — cytrusy, zioła, owoce leśne; doskonały do degustacji solo oraz w koktajlach."
    },
    {
      name: "Hendrick's",
      description: "Szkocki gin premium, niezwykle popularny na całym świecie. Destylowany z dodatkiem świeżego ogórka i płatków róży, poza klasycznymi przyprawami. Smak: subtelny, kwiatowy, lekko ziołowy z charakterystyczną nutą ogórka i róży; świetny podawany z tonikiem i plasterkiem ogórka, nie cytryną"
    }
  ],

  "Martini ": [
    {
      name: "Martini Bittere",
      description: "Intensywnie gorzki, rubinowy wermut stworzony według receptury z 1872 roku. Zawiera ponad 20 włoskich i egzotycznych ziół: szafran, angostura, kalumba, gorzką pomarańczę, rabarbar i kardamon. Aromat ziołowy, korzenny, pikantny z nutami cytrusów i kwiatów; w smaku wyrazista gorycz przełamana lukrecją. Idealny do klasycznych koktajli, np. Negroni."
    },
    {
      name: "Martini Extra Dry",
      description: "Wytrawny wermut o jasnej barwie i bardzo subtelnym bukiecie. Znany od 1900 roku, bardzo popularny wśród barmanów na całym świecie. Charakteryzuje się mocno ziołowym posmakiem, cytrusową świeżością i niską zawartością cukru; świetnie sprawdza się w drinkach — klasyczne Martini z oliwką"
    },
    {
      name: "Martini Fiero", 
      description: "Soczyście cytrusowy wermut z wyraźną nutą pomarańczy i mandarynki, obok podstawowych aromatów piołunu. Nowość w portfolio marki; lekki, orzeźwiający, polecany szczególnie do podania z tonikiem i lodem."
    },
    {
      name: "Martini Rubino",
      description: "Ekskluzywny czerwony wermut z linii Riserva Speciale. Składa się z piemonckich win czerwonych i ponad 40 ziół, z dominującymi aromatami czerwonych owoców i przypraw korzennych. Intensywny, złożony smak, polecany do degustacji solo, z lodem lub w koktajlach, np. Negroni."
    },
    {
      name: "Martini Vibrante",
      description: "Bezalkoholowa, innowacyjna wersja wermutu Martini stworzona dla osób niepijących alkoholu, zachowująca charakterystyczny styl aperitivo. Wyraziste nuty cytrusowe i ziołowe, lekka słodycz oraz goryczka; Vibrante czerpie inspirację z tradycyjnych składników."
    }
  ]
};

// Funkcje pomocnicze do pracy z alkoholami
export function getAlcoholByName(category, name) {
  if (!alcoholLibrary[category]) return null;
  return alcoholLibrary[category].find(spirit => spirit.name === name);
}

export function getVodkaByName(name) {
  return vodkas.find(vodka => vodka.name === name);
}

export function getAllAlcoholCategories() {
  return Object.keys(alcoholLibrary);
}

export function searchSpirits(searchTerm) {
  const results = [];
  Object.entries(alcoholLibrary).forEach(([category, spirits]) => {
    spirits.forEach(spirit => {
      if (spirit.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          spirit.description.toLowerCase().includes(searchTerm.toLowerCase())) {
        results.push({ ...spirit, category });
      }
    });
  });
  return results;
}
