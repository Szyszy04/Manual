const { createApp, ref, computed } = Vue;

createApp({
  setup() {
    // Dane wódek
    const vodkas = [
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

    // Dane alkocholi
    const spirits = [
      { 
        name: "Bombay Sapphire", 
        location: "Wielka Brytania, Laverstoke Mill", 
        taste: "cytrusowy, świeży profil z wyraźnie korzennym finiszem" 
      },
      { 
        name: "Gin Mare", 
        location: "Hiszpania, niedaleko Barcelony", 
        taste: "ziołowy, wytrawny i oliwkowy profil smakowy" 
      },
      { 
        name: "Tanqueray No. 10", 
        location: "Londyn, destyleria Charles Tanqueray", 
        taste: "niezwykle świeży i wytrawny, idealny do klasycznego Martini" 
      },
      { 
        name: "Oxley", 
        location: "Anglia", 
        taste: "intensywnie cytrusowy i lekko ziołowy charakter, bardzo czysty smak" 
      },
      { 
        name: "Monkey 47", 
        location: "Niemcy, Schwarzwald", 
        taste: "wyjątkowo aromatyczny i złożony - jałowiec, cytrusy, leśne zioła, kwiaty i przyprawy" 
      },
      { 
        name: "Hendrick's", 
        location: "Szkocja", 
        taste: "kwiatowo-warzywne nuty" 
      }
    ];

    // Biblioteka informacji o alkocholach
    const alcoholLibrary = {
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
    const drinkLibrary = {
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
            "20 ml białka z kurzego jajka",
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
          decoration: "2 szczyty mięty + ćwiartka limonki"
        }
      ],
      "Gin": [],
      "Rum": [],
      "Tequila": [],
      "Whiskey": []
    };

    const recipes = {
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

    // Stan aplikacji
    const currentScreen = ref('start');
    const selectedCategories = ref({
      proportions: true,
      review: false,
      vodka: false,
      spirits: false,
      builder: false
    });

    // Stan dla biblioteki alkocholi
    const selectedLibraryCategory = ref('Tequila');

    // NOWY: Stan dla biblioteki drinków
    const selectedDrinkCategory = ref('Wódka');
    const hiddenDrinks = ref(new Set()); // Set nazw drinków które są ukryte

    const questions = ref([]);
    const currentQuestionIndex = ref(0);
    const score = ref(0);
    const answerSelected = ref(false);
    const selectedAnswer = ref(null);
    const imageLoadError = ref(false);

    // Stan dla trybu builder
    const builderStep = ref(1);
    const selectedIngredients = ref(new Set());
    const ingredientAmounts = ref({});
    const allIngredientsList = ref([]);
    const showBuilderRecipe = ref(false);

    // Computed properties
    const hasSelectedCategories = computed(() => 
      Object.values(selectedCategories.value).some(Boolean)
    );

    const currentQuestion = computed(() => 
      questions.value[currentQuestionIndex.value] || {}
    );

    const shuffledAnswers = computed(() => {
      if (!currentQuestion.value?.answers) return [];
      return currentQuestion.value.answers;
    });

    const correctAnswerIndex = computed(() => 
      currentQuestion.value?.correctIndex || 0
    );

    const progressWidth = computed(() => 
      `${questions.value.length ? ((currentQuestionIndex.value) / questions.value.length) * 100 : 0}%`
    );

    // Wyświetlanie przepisu po odpowiedzi w trybie review
    const showRecipe = computed(() => {
      return currentQuestion.value.type === 'review' && answerSelected.value;
    });

    const currentRecipe = computed(() => {
      if (currentQuestion.value.type === 'review' && currentQuestion.value.drinkName) {
        return recipes[currentQuestion.value.drinkName] || [];
      }
      return [];
    });

    // Computed dla trybu builder
    const selectedIngredientsCount = computed(() => selectedIngredients.value.size);

    const correctIngredients = computed(() => {
      if (currentQuestion.value.type === 'builder') {
        return new Set(recipes[currentQuestion.value.drinkName].map(ing => ing.name));
      }
      return new Set();
    });

    const hasCorrectIngredients = computed(() => {
      const selected = selectedIngredients.value;
      const correct = correctIngredients.value;
      return selected.size === correct.size && 
             Array.from(selected).every(ing => correct.has(ing));
    });

    // Computed dla biblioteki alkocholi
    const libraryCategories = computed(() => Object.keys(alcoholLibrary));
    const currentLibraryItems = computed(() => alcoholLibrary[selectedLibraryCategory.value] || []);

    // NOWY: Computed dla biblioteki drinków
    const drinkCategories = computed(() => Object.keys(drinkLibrary));
    const currentDrinkItems = computed(() => drinkLibrary[selectedDrinkCategory.value] || []);

    // Funkcje pomocnicze
    function shuffleArray(array) {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    }

    function generateWrongRecipe(correctRecipe) {
      return correctRecipe.map(ingredient => ({
        name: ingredient.name,
        amount: Math.max(5, ingredient.amount + (Math.random() > 0.5 ? 
          (Math.random() > 0.5 ? 5 : 10) : 
          (Math.random() > 0.5 ? -5 : -10)
        ))
      }));
    }

    function getAllIngredients() {
      const allIngredients = new Set();
      Object.values(recipes).forEach(recipe => {
        recipe.forEach(ingredient => {
          allIngredients.add(ingredient.name);
        });
      });
      return Array.from(allIngredients);
    }

    // Funkcje nawigacji
    function goToLibrary() {
      currentScreen.value = 'library';
    }

    // NOWA: Funkcja dla biblioteki drinków  
    function goToDrinkLibrary() {
      currentScreen.value = 'drink-library';
    }

    function goToStart() {
      currentScreen.value = 'start';
      resetBuilderState();
    }

    function selectLibraryCategory(category) {
      selectedLibraryCategory.value = category;
    }

    // NOWE: Funkcje dla biblioteki drinków
    function selectDrinkCategory(category) {
      selectedDrinkCategory.value = category;
    }

    function toggleDrinkVisibility(drinkName) {
      if (hiddenDrinks.value.has(drinkName)) {
        hiddenDrinks.value.delete(drinkName);
      } else {
        hiddenDrinks.value.add(drinkName);
      }
      // Force reactivity
      hiddenDrinks.value = new Set(hiddenDrinks.value);
    }

    function isDrinkHidden(drinkName) {
      return hiddenDrinks.value.has(drinkName);
    }

    // Funkcje dla trybu builder
    function createBuilderQuestion() {
      const drinkNames = Object.keys(recipes);
      const randomDrink = drinkNames[Math.floor(Math.random() * drinkNames.length)];
      const allIngredients = shuffleArray(getAllIngredients());

      return {
        type: 'builder',
        drinkName: randomDrink,
        allIngredients: allIngredients,
        correctRecipe: recipes[randomDrink]
      };
    }

    function toggleIngredient(ingredient) {
      if (selectedIngredients.value.has(ingredient)) {
        selectedIngredients.value.delete(ingredient);
      } else {
        selectedIngredients.value.add(ingredient);
      }
      selectedIngredients.value = new Set(selectedIngredients.value);
    }

    function checkIngredients() {
      if (hasCorrectIngredients.value) {
        builderStep.value = 2;
        ingredientAmounts.value = {};
        Array.from(selectedIngredients.value).forEach(ing => {
          ingredientAmounts.value[ing] = '';
        });
      } else {
        showBuilderRecipe.value = true;
        setTimeout(() => {
          nextBuilderQuestion();
        }, 3000);
      }
    }

    function checkProportions() {
      const correct = recipes[currentQuestion.value.drinkName];
      let isCorrect = true;

      for (let ingredient of correct) {
        const userAmount = parseInt(ingredientAmounts.value[ingredient.name]) || 0;
        if (Math.abs(userAmount - ingredient.amount) > 5) {
          isCorrect = false;
          break;
        }
      }

      if (isCorrect) {
        score.value++;
        nextBuilderQuestion();
      } else {
        showBuilderRecipe.value = true;
        setTimeout(() => {
          nextBuilderQuestion();
        }, 3000);
      }
    }

    function nextBuilderQuestion() {
      builderStep.value = 1;
      selectedIngredients.value = new Set();
      ingredientAmounts.value = {};
      showBuilderRecipe.value = false;

      questions.value[currentQuestionIndex.value] = createBuilderQuestion();

      if (currentQuestionIndex.value < questions.value.length - 1) {
        currentQuestionIndex.value++;
        resetState();
      } else {
        currentScreen.value = 'result';
      }
    }

    function createQuestion(type, item) {
      if (type === 'proportions') {
        const correctRecipe = recipes[item];
        const wrongRecipes = [
          generateWrongRecipe(correctRecipe),
          generateWrongRecipe(correctRecipe),
          generateWrongRecipe(correctRecipe)
        ];
        const allAnswers = [correctRecipe, ...wrongRecipes].sort(() => 0.5 - Math.random());

        return {
          type: 'proportions',
          correct: item,
          answers: allAnswers,
          correctIndex: allAnswers.indexOf(correctRecipe)
        };
      } else if (type === 'review') {
        const drinkRecipe = recipes[item];
        const allIngredients = getAllIngredients();
        const isTrue = Math.random() > 0.5;

        let ingredient;
        if (isTrue) {
          const x = Math.floor(Math.random() * drinkRecipe.length);
          ingredient = drinkRecipe[x].name;
        } else {
          const ingredientsNotInDrink = allIngredients.filter(ing => 
            !drinkRecipe.some(recipeIng => recipeIng.name === ing)
          );
          ingredient = ingredientsNotInDrink[Math.floor(Math.random() * ingredientsNotInDrink.length)];
        }

        const questionText = `Czy ${ingredient} jest składnikiem drinka ${item}?`;

        return {
          type: 'review',
          correct: isTrue,
          question: questionText,
          drinkName: item,
          answers: ['TAK', 'NIE'],
          correctIndex: isTrue ? 0 : 1
        };
      } else if (type === 'vodka') {
        if (Math.random() > 0.5) {
          const correct = item.price;
          const wrong = shuffleArray(vodkas.filter(v => v.name !== item.name).map(v => v.price))[0];
          const options = shuffleArray([correct, wrong]);

          return {
            type: 'vodka',
            subType: 'price',
            question: `Ile kosztuje shota wódki "${item.name}"?`,
            answers: options.map(price => price + " zł"),
            correctIndex: options.indexOf(correct)
          };
        } else {
          const correct = item.ingredient;
          const wrong = shuffleArray(vodkas.filter(v => v.ingredient !== correct).map(v => v.ingredient))[0];
          const options = shuffleArray([correct, wrong]);

          return {
            type: 'vodka',
            subType: 'ingredient',
            question: `Jaki jest surowiec wódki "${item.name}"?`,
            answers: options,
            correctIndex: options.indexOf(correct)
          };
        }
      } else if (type === 'spirits') {
        if (Math.random() > 0.5) {
          const correct = item.name;
          const wrongSpirits = shuffleArray(spirits.filter(s => s.name !== correct).map(s => s.name)).slice(0, 3);
          const allAnswers = shuffleArray([correct, ...wrongSpirits]);

          return {
            type: 'spirits',
            subType: 'taste',
            question: `Który alkohol ma ${item.taste}?`,
            answers: allAnswers,
            correctIndex: allAnswers.indexOf(correct)
          };
        } else {
          const correct = item.name;
          const wrongSpirits = shuffleArray(spirits.filter(s => s.name !== correct).map(s => s.name)).slice(0, 3);
          const allAnswers = shuffleArray([correct, ...wrongSpirits]);

          return {
            type: 'spirits',
            subType: 'location',
            question: `Który alkohol pochodzi z ${item.location}?`,
            answers: allAnswers,
            correctIndex: allAnswers.indexOf(correct)
          };
        }
      } else if (type === 'builder') {
        return createBuilderQuestion();
      }
    }

    // Logika quizu
    function startQuiz() {
      const selectedQuestions = [];

      if (selectedCategories.value.proportions) {
        Object.keys(recipes).forEach(drink => {
          selectedQuestions.push(createQuestion('proportions', drink));
        });
      }

      if (selectedCategories.value.review) {
        Object.keys(recipes).forEach(drink => {
          selectedQuestions.push(createQuestion('review', drink));
        });
      }

      if (selectedCategories.value.vodka) {
        vodkas.forEach(vodka => {
          selectedQuestions.push(createQuestion('vodka', vodka));
        });
      }

      if (selectedCategories.value.spirits) {
        spirits.forEach(spirit => {
          selectedQuestions.push(createQuestion('spirits', spirit));
        });
      }

      if (selectedCategories.value.builder) {
        for (let i = 0; i < 5; i++) {
          selectedQuestions.push(createQuestion('builder'));
        }
      }

      questions.value = shuffleArray(selectedQuestions);
      currentQuestionIndex.value = 0;
      score.value = 0;
      resetState();
      resetBuilderState();
      currentScreen.value = 'quiz';
    }

    function resetState() {
      answerSelected.value = false;
      selectedAnswer.value = null;
      imageLoadError.value = false;
    }

    function resetBuilderState() {
      builderStep.value = 1;
      selectedIngredients.value = new Set();
      ingredientAmounts.value = {};
      showBuilderRecipe.value = false;
    }

    function answerQuestion(idx) {
      if (answerSelected.value) return;

      answerSelected.value = true;
      selectedAnswer.value = idx;

      if (idx === correctAnswerIndex.value) {
        score.value++;
      }

      setTimeout(nextQuestion, 2000);
    }

    function getAnswerClass(idx) {
      if (!answerSelected.value) return '';
      if (idx === correctAnswerIndex.value) return 'correct';
      if (idx === selectedAnswer.value) return 'wrong';
      return '';
    }

    function nextQuestion() {
      if (currentQuestionIndex.value < questions.value.length - 1) {
        currentQuestionIndex.value++;
        resetState();
        resetBuilderState();
      } else {
        currentScreen.value = 'result';
      }
    }

    function restartQuiz() {
      currentScreen.value = 'start';
      resetBuilderState();
    }

    return {
      currentScreen,
      selectedCategories,
      hasSelectedCategories,
      startQuiz,
      questions,
      currentQuestion,
      shuffledAnswers,
      correctAnswerIndex,
      answerSelected,
      selectedAnswer,
      score,
      progressWidth,
      imageLoadError,
      answerQuestion,
      getAnswerClass,
      restartQuiz,
      showRecipe,
      currentRecipe,
      recipes,
      // Builder functions
      builderStep,
      selectedIngredients,
      ingredientAmounts,
      selectedIngredientsCount,
      showBuilderRecipe,
      toggleIngredient,
      checkIngredients,
      checkProportions,
      // Library functions
      alcoholLibrary,
      selectedLibraryCategory,
      libraryCategories,
      currentLibraryItems,
      goToLibrary,
      goToStart,
      selectLibraryCategory,
      // Drink library functions
      drinkLibrary,
      selectedDrinkCategory,
      drinkCategories,
      currentDrinkItems,
      hiddenDrinks,
      goToDrinkLibrary,
      selectDrinkCategory,
      toggleDrinkVisibility,
      isDrinkHidden
    };
  }
}).mount('#app');
