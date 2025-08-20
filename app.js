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

    // Dane ginów
    const gins = [
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

    const recipes = {
      "Vodka Sour": [
        {"name": "Wódka", "amount": 40},
        {"name": "Sok z cytryny", "amount": 25},
        {"name": "Syrop cukrowy", "amount": 12},
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
        {"name": "Kordiał żurawinowy", "amount": 30},
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
        {"name": "Sok cytrynowy", "amount": 20},
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
      gins: false
    });

    const questions = ref([]);
    const currentQuestionIndex = ref(0);
    const score = ref(0);
    const answerSelected = ref(false);
    const selectedAnswer = ref(null);
    const imageLoadError = ref(false);

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
          // PYTANIE O CENĘ
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
          // PYTANIE O SUROWIEC
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
      } else if (type === 'gins') {
        // NOWE: Pytania o giny - losowo o profil smakowy lub lokalizację
        if (Math.random() > 0.5) {
          // PYTANIE O PROFIL SMAKOWY
          const correct = item.name;
          const wrongGins = shuffleArray(gins.filter(g => g.name !== correct).map(g => g.name)).slice(0, 3);
          const allAnswers = shuffleArray([correct, ...wrongGins]);

          return {
            type: 'gins',
            subType: 'taste',
            question: `Który gin ma ${item.taste}?`,
            answers: allAnswers,
            correctIndex: allAnswers.indexOf(correct)
          };
        } else {
          // PYTANIE O LOKALIZACJĘ
          const correct = item.name;
          const wrongGins = shuffleArray(gins.filter(g => g.name !== correct).map(g => g.name)).slice(0, 3);
          const allAnswers = shuffleArray([correct, ...wrongGins]);

          return {
            type: 'gins',
            subType: 'location',
            question: `Który gin pochodzi z ${item.location}?`,
            answers: allAnswers,
            correctIndex: allAnswers.indexOf(correct)
          };
        }
      }
    }

    // Logika quizu - DODANO gins
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

      if (selectedCategories.value.gins) {
        gins.forEach(gin => {
          selectedQuestions.push(createQuestion('gins', gin));
        });
      }

      questions.value = shuffleArray(selectedQuestions);
      currentQuestionIndex.value = 0;
      score.value = 0;
      resetState();
      currentScreen.value = 'quiz';
    }

    function resetState() {
      answerSelected.value = false;
      selectedAnswer.value = null;
      imageLoadError.value = false;
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
      } else {
        currentScreen.value = 'result';
      }
    }

    function restartQuiz() {
      currentScreen.value = 'start';
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
      recipes
    };
  }
}).mount('#app');
