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
         name: "Rooster Rojo Blanco",
         aging: "Nie starzona (blanco)",
         characteristics: "Rooster Rojo to marża tequili premium produkowana przez Fabrica de Tequilas Finos w mieście Tequila, Jalisco, u podnóża wulkanu Tequila. Marka znana jest z tradycyjnych metod produkcji, wysokiej jakości składników i unikalnego podejścia do filtrowania wody przez srebro mexicańskie.",
         aroma: "Limonka, mięta",
         flavor: "Świeży, pieprznowaty, cytrusowy"
      },

      {
         name: "Rooster Rojo Reposado",
         aging: "Leżakowana 2+ miesiące w beczkach z białego dąbu (French oak)",
         characteristics: "Rooster Rojo to marża tequili premium produkowana przez Fabrica de Tequilas Finos w mieście Tequila, Jalisco, u podnóża wulkanu Tequila. Marka znana jest z tradycyjnych metod produkcji, wysokiej jakości składników i unikalnego podejścia do filtrowania wody przez srebro mexicańskie.",
         aroma: "Dym, vanilia",
         flavor: "Drewniany, słodki, z toffi"
      },

      {
         name: "Sierra Antiguo Plata",
         aging: "Nie starzona (blanco)",
         characteristics: "Sierra Antiguo Plata pochodzi z słynnego miasta Tequila w stanie Jalisco w Meksyku. Nazwa Plata oznacza w języku hiszpańskim srebro – odniesienie do przezroczystego, srebrzystego koloru tequili. Produkt wytwarzany jest w postaci tequili typu Blanco, czyli destylowanej bez etapu leżakowania w beczkach, co zapewnia jej krystalicznie czysty wygląd i świeży, niezmącony smak.",
         aroma: "Dominująca owocowa słodycz i silne nuty agawy, z subtelnym dodatkiem świeżych owoców cytrusowych i limonki",
         flavor: "Łagodna z aromatami fermentowanych agaw, świeżych owoców cytrusowych i dojrzałych gruszek"
      },
      
      {
         name: "Patrón Silver",
         aging: "Nie starzona (blanco)",
         characteristics: "Wytwarzana w Hacienda Patrón w regionie Jalisco - sercu produkcji tequili. Powstaje wyłącznie z dojrzałej agawy Blue Weber. Destylowana dwukrotnie w małych partiach. 100% naturalna - bez dodatków, aromatów i barwników. Produkcja odbywa się w dużej mierze ręcznie - od pieczenia agawy po butelkowanie.",
         aroma: "Świeży, cytrusowy, z wyraźną agawą i nutami ziołowymi",
         flavor: "Czysty, gładki, z naturalną słodyczą agawy i cytrusową świeżością"
      },

      {
         name: "Patrón Reposado",
         aging: "Minimum 4 miesiące w dębowych beczkach po bourbonie",
         characteristics: "Destylowana dwukrotnie w małych partiach w Hacienda Patrón (Jalisco). Łączy świeżość agawy z nutami drewna, wanilii i przypraw. Beczki są indywidualnie dobierane, by zachować równowagę między słodyczą a drewnem.",
         aroma: "Delikatna agawa, dąb, wanilia, lekka przyprawa",
         flavor: "Gładka agawa, miód, cytrusy, nuty owocowe i drewna"
      },

      {
         name: "Patrón Añejo",
         aging: "Ponad 12 miesięcy w beczkach z francuskiego dębu, węgierskiego dębu oraz po amerykańskiej whiskey",
         characteristics: "Produkowana z najwyższej jakości 100% Weber Blue Agave. Destylowana dwukrotnie w małych partiach w Hacienda Patrón w regionie Jalisco, Meksyk. Każda butelka jest starannie wykonana i numerowana ręcznie.",
         aroma: "Wyraźne nuty drewna dębowego, wanilii i rodzynek - intensywny, ale zrównoważony bukiet zapachowy",
         flavor: "Pełny, z dominującymi nutami dębu, które łączą się z delikatną słodyczą rodzynek, wanilii i miodu"
      }

   ],

   "Amerykańskie Whiskey": [

      {
         name: "Angel's Envy",
         style: "Kentucky Straight Bourbon Whiskey Finished in Port Wine Barrels",
         barrels: "Najpierw amerykański dąb, potem portugalskie beczki po porto",
         aging: "Klasyczne starzenie + 3-6 miesięcy finiszu w beczkach po porto",
         facts: "Nazwa nawiązuje do 'Angel's Share' - części alkoholu, która wyparowuje podczas starzenia; według twórców to, co zostaje, mogłoby wzbudzić zazdrość samych aniołów. Destylarnia założona przez Lincolna i Wesa Hendersonów - ojca i syna.",
         aroma: "Subtelna wanilia, rodzynki, syrop klonowy, prażone orzechy, akcenty drewna",
         flavor: "Wanilia, dojrzałe owoce, syrop klonowy, nuty tostowe, gorzka czekolada, karmel, nadwęglona dębina"
      },

      {
         name: "Jim Beam Black",
         style: "Kentucky Straight Bourbon",
         barrels: "4. poziom wypalenia",
         aging: "Wystarzony do idealnego momentu (bez dokładnego oznaczenia wieku)",
         facts: "Oryginalna edycja pojawiła się w 1978 roku jako premium bourbon bez określenia wieku. Pozycjonowany jako bardziej elegancka i dojrzała alternatywa dla klasycznego Jim Beam White. Często nagradzany - stanowi most między bourbonami codziennymi a kolekcjonerskimi.",
         aroma: "Brązowy cukier, wanilia, aromaty wypalonej beczki",
         flavor: "Bogaty karmel, przyprawy korzenne"
      },

      {
         name: "Jim Beam Rye",
         style: "Straight Rye Whiskey",
         barrels: "Wypalane w stopniu 4 ('alligator char')",
         aging: "Tradycyjne starzenie w nowych dębowych beczkach",
         facts: "Pierwsze wydanie: 1938 rok - ten sam, w którym Mint Julep stał się oficjalnym koktajlem Kentucky Derby. Wersja dedykowana do koktajli z charakterem - pikantna alternatywa wobec klasycznego bourbona.",
         aroma: "Żytnia pikantność, lekka dębina, karmel",
         flavor: "Przyprawy korzenne, skarmelizowany cukier"
      },

      {
         name: "Maker's Mark",
         style: "Kentucky Straight Bourbon Whiskey",
         barrels: "Wypalane w stopniu 3 (średnie wypalenie - mniej agresywne niż w Jim Beam)",
         aging: "6-7 lat, aż do osiągnięcia idealnego profilu",
         facts: "Twórca: Bill Samuel's Senior - chciał stworzyć bourbon łagodny, bez 'gryzącego' charakteru. Innowacja: zamiast żyta - pszenica ozima, co daje słodycz i aksamitność. Margie Samuel's odpowiada za nazwę, czerwony lak i design butelki - każda lakowana ręcznie.",
         aroma: "Cytrusy, wanilia, zbożowa słodycz",
         flavor: "Owocowa esencja z nutami dębu i wanilii"
      },

      {
         name: "Maker's Mark 46",
         style: "Bourbon z finiszem w specjalnych beczkach",
         barrels: "Finiszowanie w beczkach z opalonymi wkładkami z francuskiego dębu",
         aging: "Do uzyskania bogatszego, bardziej przyprawowego profilu",
         facts: "Stworzony przez Billa Samuel'sa Juniora - syna założyciela. Nazwa '46' pochodzi od numeru profilu drewna wybranego przez bednarzy. Wkładki z francuskiego dębu są opalane, a nie wypalane - to subtelniejsza metoda ekstrakcji smaku.",
         aroma: "Karmel, przypieczony chleb, przyprawy korzenne",
         flavor: "Wanilia, cynamon, gałka muszkatołowa, lekko wytrawne tło"
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
         origin: "Highland, Szkocja",
         barrel: "Beczki po bourbonie i sherry Oloroso",
         facts: [
            "Destylarnia korzysta z wody Pitilie Burn, słynącej z doskonałej jakości i obecności złota aluwialnego.",
            "Dojrzewa w beczkach po bourbonie, sherry oraz odnowionych beczkach re-charred i re-fill, co nadaje jej bogaty charakter."
         ],
         aromatic: "Miodowy, z nutami toffi, wanilii, subtelnych owoców i przypraw.",
         flavor: "Bogaty i łagodny, z akcentami miodu, suszonych owoców, dębu i cynamonu."
      },

      {
         name: "Aberfeldy 16",
         origin: "Highland, Szkocja",
         barrel: "Beczki po bourbonie i sherry Oloroso",
         facts: [
            "Destylarnia Aberfeldy została założona przez John Dewar & Sons w 1896 roku i stanowi kluczowy element blendów Dewar's.",
            "Większość czasu dojrzewa w beczkach po bourbonie (first-fill, re-fill, re-charred), a na ostatnie 6 miesięcy trafia do beczek po sherry Oloroso, co wzbogaca jej profil smakowy.",
            "Dłuższa fermentacja pozwala uwolnić więcej estrów, co podkreśla miodowy charakter whisky."
         ],
         aromatic: "Bogaty, z nutami miodu, wanilii, rodzynek, suszonych fig i skórki pomarańczy.",
         flavor: "Wyważony, z akcentami karmelu, toffi, orzechów, suszonych owoców i przypraw korzennych."
      },

      {
         name: "Craigellachie 13",
         origin: "Speyside, Szkocja",
         barrel: "Beczki po bourbonie i sherry Oloroso",
         facts: [
            "Destylarnia słynie z wykorzystania tradycyjnych worm tubs (chłodnic w kształcie wężownicy), co nadaje whisky oleisty i mięsisty charakter.",
            "Woda używana do produkcji pochodzi z rzeki Spey, jednej z najczystszych w regionie.",
            "Craigellachie 13 dojrzewa w beczkach po bourbonie i sherry, jest butelkowana bez filtracji na zimno i bez dodatku barwników."
         ],
         aromatic: "Pieczone jabłka z goździkami, grillowany ananas, pikantny, pieprzny, przypieczone pianki i subtelny akcent kordytu.",
         flavor: "Egzotyczne owoce, karmel, przyprawy korzenne i delikatne nutywanilii."
      },

      {
         name: "Royal Brackla 12",
         origin: "Highland, Szkocja",
         barrel: "Beczki po bourbonie i sherry Oloroso",
         facts: [
            "Royal Brackla była pierwszą szkocką destylarnią, która otrzymała królewski przywilej „Royal Warrant” w 1833 roku od króla Williama IV.",
            "Dojrzewa w beczkach po bourbonie, a następnie finishowana jest w beczkach po sherry Oloroso, co nadaje jej bogaty i owocowy charakter.",
            "Położona w dolinie Cawdor, destylarnia korzysta z czystej górskiej wody z rzeki Cawdor Burn."
         ],
         aromatic: "Dojrzałe brzoskwinie, czarne wiśnie, nuty muscovado i subtelna przyprawowość.",
         flavor: "Czekolada z migdałami, kandyzowane owoce, miód i delikatne nuty sherry."
      },

      {
         name: "Deveron 12",
         origin: "Highland, Szkocja",
         barrel: "Beczki po bourbonie",
         facts: [
            "Produkowana w destylarni Macduff, położonej nad rzeką Deveron, niedaleko Morza Północnego.",
            "The Deveron 12 charakteryzuje się łagodnym, morskim profilem z subtelną słodyczą i nutami owocowymi."
         ],
         aromatic: "Jabłka, gruszki, miód, wanilia i delikatny akcent morskiej bryzy.",
         flavor: "Miodowa słodycz, karmel, lekka dębina oraz nuty prażonych orzechów i cynamonu."
      },

      {
         name: "Aultmore 12",
         origin: "Speyside, Szkocja",
         barrel: "Beczki po bourbonie",
         facts: [
            "Założona w 1895 roku przez Alexandra Edwarda, Aultmore szybko zyskała status „Top Class” single malt według branżowych ekspertów.",
            "Woda z torfowego Foggie Moss dodaje destylatowi subtelnych nut mineralnych, wyróżniających go w Speyside."
         ],
         aromatic: "Świeży, ziołowo-kwiatowy – lawenda, wanilia, mleczna czekolada, cappuccino, skórka pomarańczy i delikatne orzechy.",
         flavor: "Słodki z pikantnym akcentem – mleczna czekolada, maślane bułki, pomarańcze i szczypta cynamonu, charakterystyczna mineralność."
      }

   ],

   "Irlandzka Whiskey": [

      {
         name: "Teeling Small Batch",
         description: "Blended irish whiskey łączący destylaty malt i grain. Ten whiskey składa się z 7-letniego malt whiskey i 4-letniego grain whiskey, które są początkowo leżakowane w beczkach ex-bourbon, a następnie przez 6-9 miesięcy (maksymalnie do 12 miesięcy) finiszowane w beczkach Central American rum. To daje łączny wiek wynoszący około 7-8 lat z wyraźnym charakterem rumu."
      },

      {
         name: "Teeling Single Grain",
         description: "Whiskey zrobiony z 95% kukurydzy i 5% słodowego jęczmienia, destylowany w kolumnowych destylach. Cały czas dojrzewania tego whiskey wynosi około 5-6 lat wyłącznie w beczkach ex-Californian Cabernet Sauvignon. Ten niekonwencjonalny wybór beczek imporuje charakterystyczny profil smakowy z nutami czerwonych owoców jagodowych i taniny."
      },

      {
         name: "Teeling Single Malt",
         description: "Produkowany z 100% słodowego jęczmienia, ale nie ma jasno określonego wieku na butelce. Według dostępnych informacji, whiskey ta jest pochodząca ze zapasów Cooley i zawiera whiskey z 1991 roku. Ten whiskey jest finiszowany przez 14-14 miesięcy w pięciu typach beczek: bourbon, dziewiczym amerykańskim dębie, Madeirze, Carcavellosie i Burgundzie białej. Ta kombinacja beczek tworzy złożony profil smakowy opisywany jako 'symfonia smaków'."
      },

      {
         name: "Teeling Blackpitts Peated Single Malt",
         description: "Teeling Blackpitts to peated single malt wytwarzany z ciężko roślikiem słodowego jęczmienia (torfem suszonym). Ten whiskey nie ma oświadczenia o wieku, ale jest triple distilled. Jest leżakowany w beczkach ex-bourbon i ex-Sauternes białego wina. Nazwa Blackpitts pochodzi od historycznego obszaru w Liberties, gdzie tradycyjnie używano torfu do suszenia słodu w XIX wieku."
      }

   ],

   "Rumy": [

      {
         name: "Bacardi Carta Blanca",
         country: "Portoryko (oryginalnie Kuba)",
         aging: "Około 7 miesięcy",
         facts: "Stworzony przez Don Facundo Bacardi w 1862 roku, stał się podstawą wielu klasycznych koktajli. Dzięki filtracji przez węgiel drzewny ma łagodny profil smakowy",
         aroma: "Cytrusy, migdały, wanilia, lekkie nuty owoców tropikalnych",
         flavor: "Delikatny i wyważony, nuty wanilii, migdałów i tropikalnych owoców"
      },

      {
         name: "Bacardi Reserva Ocho",
         country: "Portoryko",
         aging: "8 lat",
         facts: "Jest to rum, który początkowo był zarezerwowany wyłącznie dla rodziny Bacardi. Dopiero w latach 80-tych XX wieku trafił do regularnej sprzedaży stając się flagowym produktem.",
         aroma: "Suszone owoce, wanilia, przyprawy korzenne, karmel, dębina",
         flavor: "Gładki i pełny, z wyraźnymi tonami dębu, karmelu, wanilii i tropikalnych owoców, wzbogacony o delikatne przyprawy"
      },

      {
         name: "Santa Teresa 1796",
         country: "Wenezuela",
         aging: "Od 4 do 35 lat (system solera)",
         facts: "Ron Santa Teresa jest jednym z najstarszych producentów rumu na Karaibach. Widniejący na etykiecie rok 1796 jest rokiem założenia plantacji trzciny cukrowej. Zastosowany system solera sprawia, że w jednej butelce mogą się znaleźć destylaty w wieku od 4 do 35 lat.",
         aroma: "Słodki i owocowy, z nutami toffi, miodu, karmelu oraz gorzkiej czekolady",
         flavor: "Pełny, maślany, z akcentami miodu, wanilii, kawy oraz suszonych śliwek"
      },

      {
         name: "Banks 5",
         country: "Blend rumów z Trynidadu, Jamajki, Barbadosu, Gujany i Indonezji",
         aging: "Blend destylatów starzonych i niestarzonych",
         facts: "Banks 5 to blend rumów z pięciu różnych wysp. Jest filtrowany przez aktywny węgiel i pomimo leżakowania pozbawiony jest barwy. Inspiracją dla jego stworzenia była historia odkryć żeglarza Josepha Banksa. Nie jest dodatkowo słodzony.",
         aroma: "Cytrusy, wanilia, przyprawy korzenne, lekka dymność",
         flavor: "Złożony, nuty egzotycznych owoców, wanilii, przypraw korzennych, lekkiej ziemistości"
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
            (spirit.description && spirit.description.toLowerCase().includes(searchTerm.toLowerCase())) ||
            (spirit.facts && Array.isArray(spirit.facts) && spirit.facts.some(fact => fact.toLowerCase().includes(searchTerm.toLowerCase()))) ||
            (spirit.facts && typeof spirit.facts === 'string' && spirit.facts.toLowerCase().includes(searchTerm.toLowerCase()))) {

            results.push({ ...spirit, category });

         }

      });

   });

   return results;

}
