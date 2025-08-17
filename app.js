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

    const recipes = {
      "Vodka Sour": [
        {"name": "Wódka", "amount": 50},
        {"name": "Sok z cytryny", "amount": 30},
        {"name": "Syrop cukrowy", "amount": 20},
        {"name": "Białko jajka", "amount": 20}
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
        {"name": "Galliano Ristretto", "amount": 20},
        {"name": "Syrop waniliowy", "amount": 10}
      ],
      "Golden Cadillac": [
        {"name": "Creme De Cacao", "amount": 30},
        {"name": "Galliano Autentico", "amount": 30},
        {"name": "Half & Half", "amount": 30}
      ],
      "Grasshooper": [
        {"name": "Creme De Cacao", "amount": 20},
        {"name": "Creme De Menthe", "amount": 20},
        {"name": "Wódka", "amount": 20},
        {"name": "Half & Half", "amount": 30}
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
        {"name": "Wódka waniliowa", "amount": 40},
        {"name": "Syrop waniliowy", "amount": 20},
        {"name": "Sok z limonki", "amount": 20},
        {"name": "Przecier z marakui", "amount": 20}
      ],
      "Kyiv Mule": [
        {"name": "Wódka", "amount": 40},
        {"name": "Sok z limonki", "amount": 15},
        {"name": "Syrop cukrowy", "amount": 10}
      ]
    };

    // Stan aplikacji
    const currentScreen = ref('start');
    const selectedCategories = ref({
      proportions: true,
      review: false,
      vodka: false
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
          // Wybierz składnik z przepisu
          const x = Math.floor(Math.random() * drinkRecipe.length);
          ingredient = drinkRecipe[x].name;
        } else {
          // Wybierz składnik NIE z przepisu
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
      restartQuiz
    };
  }
}).mount('#app');
